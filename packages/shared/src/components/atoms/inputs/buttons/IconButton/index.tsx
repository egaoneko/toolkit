import { forwardRef } from 'react';
import clsx from 'clsx';

import Button, { ButtonProps } from 'src/components/atoms/inputs/buttons/Button';

import styles from './index.module.css';

const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(function IconButton(
  { className, children, ...props },
  ref,
) {
  return (
    <Button {...props} rippleCenter={true} ref={ref} className={clsx(styles.button, className)}>
      {children}
    </Button>
  );
});

export default IconButton;
