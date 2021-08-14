import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { _ } from '../lib/i18n';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index: React.FC<IndexProps> = ({ posts }) => {
  const router = useRouter();
  const { locale: l, locales, defaultLocale } = router;

  return (
    <Layout>
      <h1>{_(l, 'Selamat Datang', 'Welcome')}</h1>
      <p>Next.js starter for your next blog or personal site. Built with:</p>
      <ul className="list-disc pl-4 my-6">
        <li>Next.js</li>
        <li className="mt-2">Typescript</li>
        <li className="mt-2">MDX</li>
        <li className="mt-2">Tailwind CSS</li>
      </ul>

      <p>Current locale: {l}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <a
        href="https://github.com/ChangoMan/nextjs-typescript-mdx-blog"
        className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white"
      >
        Get the source code!
      </a>

      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`} locale={post.lang}>
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
