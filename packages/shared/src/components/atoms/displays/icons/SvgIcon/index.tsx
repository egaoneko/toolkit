import { FC, SVGAttributes } from 'react';
import clsx from 'clsx';

import { Size } from 'src/enums/size';

import styles from './index.module.css';

export interface SvgIconProps extends SVGAttributes<SVGElement> {
  size?: Size;
  stroked?: boolean;
  filled?: boolean;
  viewBox?: string;
  className?: string;
}

const SvgIcon: FC<SvgIconProps> = ({
  size = Size.MEDIUM,
  stroked = false,
  filled = true,
  viewBox = '0 0 24 24',
  className,
  children,
  ...rest
}) => {
  return (
    <svg
      className={clsx(styles.svg, styles[size], { [styles.stroked]: stroked, [styles.filled]: filled }, className)}
      width="1em"
      height="1em"
      viewBox={viewBox}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
