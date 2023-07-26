'use client';

import classNames from 'classnames';
import { PostData } from '@/api/types';
import { ExtendedPostData } from '../types';
import Link from 'next/link';

export interface PostsListProps {
  posts: ExtendedPostData[];
}

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <>
      {posts.map((post) => (
        <article
          key={post.id}
          className={classNames(
            'rounded border border-gray-200 mb-4 p-4',
            'last:mb-0'
          )}
        >
          <Link href={`/posts/${post.id}`}>
            <h2
              className={classNames(
                'text-lg font-medium mb-2 capitalize leading-tight'
              )}
            >
              {post.title}
            </h2>
            <p>{post.body}</p>

            {post.user && (
              <p
                className={classNames('flex gap-2 mt-4 w-fit ml-auto text-sm')}
              >
                <span>By:</span>
                <span>
                  <span className={classNames('block')}>{post.user.name}</span>
                  <span
                    className={classNames('block underline text-xs text-right')}
                  >
                    {post.user.email}
                  </span>
                </span>
              </p>
            )}
          </Link>
        </article>
      ))}
    </>
  );
};

export default PostsList;
