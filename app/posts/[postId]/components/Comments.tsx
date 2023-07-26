import classNames from 'classnames';
import { CommentData } from '@/api/types';

export interface CommentsProps {
  comments: CommentData[];
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <>
      {comments.map((comment) => (
        <article
          key={comment.id}
          className={classNames(
            'p-2 rounded border border-gray-200 mb-6',
            'last:mb-0'
          )}
        >
          <h2 className={classNames('mb-4 leading-tight')}>
            <span className={classNames('block mb-1')}>{comment.name}</span>
            <span className={classNames('block text-xs underline')}>
              {comment.email}
            </span>
          </h2>
          <p>{comment.body}</p>
        </article>
      ))}
    </>
  );
};

export default Comments;
