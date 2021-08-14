import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import { getAllPosts } from '../../lib/api';
import { _ } from '../../lib/i18n';
import { PostType } from '../../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index: React.FC<IndexProps> = ({ posts }) => {
  const router = useRouter();
  const { locale: l, locales, defaultLocale } = router;

  return (
    <Layout>
      <h1>{_(l, 'Posts', 'Posts')}</h1>
      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`} locale={post.lang}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`} locale={post.lang}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const enPosts = getAllPosts('en', ['date', 'description', 'slug', 'title']);
  const idPosts = getAllPosts('id', ['date', 'description', 'slug', 'title']);

  return {
    props: { posts: [...enPosts, ...idPosts] },
  };
};

export default Index;
