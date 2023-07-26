import { LoadingIcon } from '@/components/icons';
import classNames from 'classnames';

const Loading = () => {
  return (
    <div
      className={classNames(
        'absolute inset-0 grid justify-center items-center'
      )}
    >
      <LoadingIcon />
    </div>
  );
};

export default Loading;
