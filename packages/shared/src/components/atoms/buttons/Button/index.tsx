import { ButtonHTMLAttributes, MouseEvent, FC, useCallback, useRef, ReactNode } from 'react';
import clsx from 'clsx';

import { Color } from '../../../../enums/color';
import { ButtonGroupDirection, ButtonVariant } from '../../../../enums/button';
import { Size } from '../../../../enums/size';
import Ripple from '../../effect/Ripple';

import styles from './index.module.pcss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: Size;
  color?: Color;
  disabled?: boolean;
  rounded?: boolean;
  popped?: boolean;
  gradient?: boolean;
  relief?: boolean;
  ripple?: boolean;
  rippleCenter?: boolean;
  group?: boolean;
  groupDirection?: ButtonGroupDirection;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.CONTAINED,
  size = Size.MEDIUM,
  color = Color.PRIMARY,
  disabled = false,
  rounded = false,
  popped = false,
  gradient = false,
  relief = false,
  ripple = true,
  rippleCenter = false,
  group = false,
  groupDirection = ButtonGroupDirection.ROW,
  startIcon,
  endIcon,
  onClick,
  className,
  children,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOnClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
    },
    [onClick],
  );

  return (
    <button
      ref={buttonRef}
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[color],
        {
          [styles.rounded]: rounded,
          [styles.gradient]: gradient,
          [styles.relief]: relief,
          [styles.group]: group,
          [styles[groupDirection]]: group,
          ['transform hover:scale-110']: !group && (popped || gradient),
        },
        className,
      )}
      disabled={disabled}
      onClick={handleOnClick}
      {...props}
    >
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
      {ripple && <Ripple parentRef={buttonRef} center={rippleCenter} />}
    </button>
  );
};

export default Button;
