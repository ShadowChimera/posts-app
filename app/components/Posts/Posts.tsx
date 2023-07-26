'use client';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { PostData, UserData } from '@/api/types';
import { ExtendedPostData } from './types';
import UsersList from './components/UsersList';
import PostsList from './components/PostsList';
import { shuffle } from '@/utils';

export interface PostsProps {
  posts?: PostData[];
  users?: UserData[];
  randomPostsCount?: number;
}

const Posts = ({ posts, users, randomPostsCount = 10 }: PostsProps) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [postsData, setPostsData] = useState<ExtendedPostData[] | null>(null);

  useEffect(() => {
    if (!posts) {
      setPostsData(null);
      return;
    }

    let newPostsData = null;

    if (selectedUserId) {
      newPostsData = posts.filter((post) => post.userId === selectedUserId);
    } else {
      newPostsData = shuffle(posts).slice(0, randomPostsCount);
    }

    setPostsData(
      newPostsData.map((post) => {
        const userInfo = users?.find((user) => user.id === post.userId);

        return {
          ...post,
          user: userInfo && {
            name: userInfo?.name,
            email: userInfo?.email,
          },
        };
      })
    );
  }, [selectedUserId, posts, randomPostsCount, users]);

  const handleUserChange = (userId: number | null) => {
    console.log('userId', userId);
    setSelectedUserId(userId);
  };

  return (
    <div className={classNames('lg:flex lg:flex-row-reverse lg:gap-8')}>
      {users && (
        <div
          className={classNames(
            'mb-8 w-full ml-auto',
            'sm:w-1/2',
            'lg:w-[320px]'
          )}
        >
          <p className={classNames('mb-2')}>Filter posts by user:</p>
          <UsersList
            users={users}
            onUserChange={handleUserChange}
            disableOptionText="Random posts"
          />
        </div>
      )}
      {postsData && (
        <div className={classNames('flex-1')}>
          <PostsList posts={postsData} />
        </div>
      )}
    </div>
  );
};

export default Posts;
