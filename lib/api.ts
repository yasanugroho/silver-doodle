import fs from 'fs';
import matter from 'gray-matter';
import {join} from 'path';
import {ID_POSTS_PATH, EN_POSTS_PATH} from '../utils/mdxUtils';

export function getPostSlugs(lang: 'en' | 'id'): string[] {
  if (lang === 'en') {
    return fs.readdirSync(EN_POSTS_PATH);
  } else {
    return fs.readdirSync(ID_POSTS_PATH);
  }
}

type PostItems = {
  [key: string]: string;
};

export function getPostBySlug(lang: 'en' | 'id', slug: string, fields: string[] = []): PostItems {
  const path = lang === 'en' ? EN_POSTS_PATH : ID_POSTS_PATH;
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(path, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {data, content} = matter(fileContents);

  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  items.lang = lang;

  return items;
}

export function getAllPosts(lang: 'en' | 'id', fields: string[] = []): PostItems[] {
  const slugs = getPostSlugs(lang);
  const posts = slugs
    .map(slug => getPostBySlug(lang, slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
