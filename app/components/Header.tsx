import classNames from 'classnames';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className={classNames('flex justify-center p-4 border-b border-gray-100')}
    >
      <Link href="/" className={classNames('text-2xl font-bold')}>
        <span className={classNames('')}>Posts</span>
        <span className={classNames('opacity-60')}>App</span>
      </Link>
    </header>
  );
};

export default Header;
