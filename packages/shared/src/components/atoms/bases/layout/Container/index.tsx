import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { Size } from 'src/enums/size';

import styles from './index.module.css';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
  rounded?: boolean;
  shadow?: boolean;
}

const Container: FC<ContainerProps> = ({
  size = Size.MEDIUM,
  rounded = false,
  shadow = false,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        styles[size],
        {
          [styles.rounded]: rounded,
          [styles.shadow]: shadow,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
