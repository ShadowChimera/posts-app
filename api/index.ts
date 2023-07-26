import { PostData, UserData, CommentData } from './types';
import { API_BASE_URL } from './constants';

export const getUsers = async () => {
  const res = await fetch(`${API_BASE_URL}/users`);

  if (!res.ok) {
    throw new Error('Failed to fetch users data');
  }

  return (await res.json()) as UserData[];
};

export const getPosts = async (userId?: number) => {
  const endPoint = userId ? `user/${userId}/posts` : 'posts';
  const url = `${API_BASE_URL}/${endPoint}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch posts data');
  }

  return (await res.json()) as PostData[];
};

export const getComments = async (postId: number) => {
  console.log('url', `${API_BASE_URL}/posts/${postId}/comments`);
  const res = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);

  if (!res.ok) {
    throw new Error('Failed to fetch comments data');
  }

  return (await res.json()) as CommentData[];
};
