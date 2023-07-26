import classNames from 'classnames';
import Posts from './components/Posts';

import { getUsers, getPosts } from '@/api';

export default async function Home() {
  const users = await getUsers();
  const posts = await getPosts();

  return (
    <main className={classNames('p-4 max-w-7xl mx-auto')}>
      <Posts users={users} posts={posts} />
    </main>
  );
}
