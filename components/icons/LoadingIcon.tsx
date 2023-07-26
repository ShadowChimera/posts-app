import classNames from 'classnames';

export interface LoadingIconProps {
  className?: string;
}

export const LoadingIcon = ({
  className: customClassName,
}: LoadingIconProps) => {
  return (
    <div
      className={classNames(
        customClassName,
        'relative h-8 w-8 animate-spin rounded-full border-2 border-neutral-900 border-opacity-10',
        'after:absolute after:inset-[-2px] after:rounded-full after:border-2 after:border-r-neutral-900'
      )}
    ></div>
  );
};

export default LoadingIcon;
