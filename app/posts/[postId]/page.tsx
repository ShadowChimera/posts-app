import classNames from 'classnames';
import { getComments } from '@/api';

import Header from './components/Header';
import Comments from './components/Comments';

const PostComments = async ({ params }: { params: { postId: string } }) => {
  const comments = await getComments(Number(params.postId));

  return (
    <main className={classNames('p-4 max-w-4xl mx-auto')}>
      <Header postId={params.postId} />
      <Comments comments={comments} />
    </main>
  );
};

export default PostComments;
