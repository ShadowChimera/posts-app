import classNames from 'classnames';
import BackButton from './BackButton';

export interface HeaderProps {
  postId: number | string;
}

const Header = ({ postId }: HeaderProps) => {
  return (
    <header className={classNames('relative flex flex-col gap-8 mb-8')}>
      <div
        className={classNames(
          'w-fit',
          'sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2'
        )}
      >
        <BackButton />
      </div>
      <h1 className={classNames('text-3xl font-bold text-center')}>
        Comments for post {postId}
      </h1>
    </header>
  );
};

export default Header;
