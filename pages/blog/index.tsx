import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import { getAllPosts } from '../../lib/api';
import { PostType } from '../../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Page: React.FC<IndexProps> = ({ posts }) => {
  const router = useRouter();
  const { locale: l, locales, defaultLocale } = router;
  console.log(posts);
  return (
    <Layout>
      <h1>Blog</h1>
      <div className="grid grid-cols-2 dark:grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map(post => (
          <article key={post.slug} className="mt-12 border border-gray-200 rounded-lg">
            {/* TODO: BUat dynamic thumbnails, ambil dari post metadata */}
            <Image src={`${post.image}`} alt="Picture of the author" width={500} height={500} />
            <div className="p-4">
              <h1 className="mb-2 text-xl">
                <Link as={`/blog/${post.slug}`} href={'/blog/[slug]'} locale={post.lang}>
                  <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">{post.title}</a>
                </Link>
              </h1>
              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                {format(parseISO(post.date ?? ''), 'MMMM dd, yyyy')}
              </p>
              <p className="mb-3">{post.description}</p>
              <div className="flex justify-end">
                <p className="text-bold">
                  <Link as={`/blog/${post.slug}`} href={'/blog/[slug]'} locale={post.lang}>
                    <a>Read More</a>
                  </Link>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { locale } = context;

  let posts: ReturnType<typeof getAllPosts>;

  if (locale === 'id') {
    posts = getAllPosts('id', ['date', 'description', 'slug', 'title', 'image']);
  } else {
    posts = getAllPosts('en', ['date', 'description', 'slug', 'title', 'image']);
  }

  return {
    props: { posts },
  };
};

export default Page;
