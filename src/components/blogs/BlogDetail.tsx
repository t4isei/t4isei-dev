import Link from 'next/link';

import { BlogContent } from '@/components/blogs/BlogContent';
import { Blog } from '@/types/micro-cms';

type Props = {
  blog: Blog;
};

export function BlogDetail({ blog }: Props) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <BlogContent blog={blog} />
      <Link
        href='/blogs'
        className='radius-2 mt-20 rounded-md border-1 px-2 py-1 hover:bg-gray-200'
      >
        <button type='button'>cd ..</button>
      </Link>
    </div>
  );
}
