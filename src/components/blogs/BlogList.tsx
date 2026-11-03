'use client';
import { BlogItme } from '@/components/blogs/BlogItme';
import NoPost from '@/components/blogs/NoPost';
import { Blog } from '@/types/micro-cms';

type Props = {
  blogs: Blog[];
  hasMore?: boolean;
  isLoading?: boolean;
  onLoadMore?: () => void;
};

export function BlogList({
  blogs,
  hasMore = false,
  isLoading = false,
  onLoadMore,
}: Props) {
  if (blogs.length === 0) {
    return <NoPost />;
  }

  const [latestBlog, ...otherBlogs] = blogs;

  return (
    <div>
      <div className='pb-7'>
        <BlogItme blog={latestBlog} />
      </div>
      <div className='animate-fade-in grid grid-cols-1 gap-7 sm:grid-cols-2'>
        {otherBlogs.map((blog) => (
          <div key={blog.id}>
            <BlogItme blog={blog} />
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
        {hasMore && (
          <button
            type='button'
            onClick={onLoadMore}
            disabled={isLoading}
            className='radius-2 mt-20 rounded-md border-1 px-2 py-1 hover:bg-gray-200'
          >
            more
          </button>
        )}
      </div>
    </div>
  );
}
