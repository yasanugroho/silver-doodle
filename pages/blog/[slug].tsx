import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import Layout from '../../components/Layout';
import { WEBSITE_HOST_URL } from '../../lib/constants';
import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import { enPostFilePaths, EN_POSTS_PATH, idPostFilePaths, ID_POSTS_PATH } from '../../utils/mdxUtils';
import { L, langNames } from '../../lib/i18n';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const PostPage: React.FC<PostPageProps> = ({ source, frontMatter }) => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - Xerpihan`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  };

  const otherLangs: { lang: string; slug: string }[] = [];
  Object.keys(frontMatter.otherLangs ?? {}).forEach(key => {
    otherLangs.push({ lang: key, slug: frontMatter.otherLangs?.[key] ?? '' });
  });

  return (
    <Layout customMeta={customMeta}>
      <article>
        <h1 className="mb-3 text-gray-900 dark:text-white">{frontMatter.title}</h1>
        {/* Date and lang switcher */}
        <div className="mb-10">
          <span className="mb-10 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(frontMatter.date ?? ''), 'MMMM dd, yyyy')}
          </span>
          {otherLangs.map((otherLang, index) => (
            <>
              <span> - </span>
              <span key={index} className="text-sm">
                <Link href={otherLang.slug} locale={otherLang.lang}>
                  <a>
                    <L>
                      {'Baca juga dalam ' + langNames.id[otherLang.lang]}
                      {'Read this post in ' + langNames.en[otherLang.lang]}
                    </L>
                  </a>
                </Link>
              </span>
            </>
          ))}
        </div>
        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const postPaths = locale === 'en' ? EN_POSTS_PATH : ID_POSTS_PATH;
  const postFilePath = path.join(postPaths, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const idPaths = idPostFilePaths
    // Remove file extensions for page paths
    .map(p => p.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug }, locale: 'id' }));

  const enPaths = enPostFilePaths
    // Remove file extensions for page paths
    .map(p => p.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug }, locale: 'en' }));

  return {
    paths: [...idPaths, ...enPaths],
    fallback: false,
  };
};

export default PostPage;
