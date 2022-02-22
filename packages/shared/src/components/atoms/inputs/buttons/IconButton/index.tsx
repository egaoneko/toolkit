import { FC } from 'react';
import clsx from 'clsx';

import Button, { ButtonProps } from 'src/components/atoms/inputs/buttons/Button';

import styles from './index.module.css';

const IconButton: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button {...props} rippleCenter={true} className={clsx(styles.button, className)}>
      {children}
    </Button>
  );
};

export default IconButton;
