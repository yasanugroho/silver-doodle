import fs from 'fs';
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const ID_POSTS_PATH = path.join(process.cwd(), 'posts-id');
export const EN_POSTS_PATH = path.join(process.cwd(), 'posts-en');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const idPostFilePaths = fs
  .readdirSync(ID_POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

  export const enPostFilePaths = fs
  .readdirSync(EN_POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
