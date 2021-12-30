import { ButtonHTMLAttributes, MouseEvent, FC, useCallback, useRef } from 'react';
import clsx from 'clsx';

import { Color } from '../../../../enums/color';
import { ButtonGroupDirection, ButtonVariant } from '../../../../enums/button';
import { Size } from '../../../../enums/size';

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
  group?: boolean;
  groupDirection?: ButtonGroupDirection;
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
  group = false,
  groupDirection = ButtonGroupDirection.ROW,
  onClick,
  children,
  ...props
}) => {
  const rippleRef = useRef<HTMLSpanElement>(null);

  const handleOnClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (!rippleRef.current) {
        onClick?.(event);
        return;
      }

      if (ripple) {
        rippleEffect(event, rippleRef.current);
      }

      onClick?.(event);
    },
    [rippleRef, ripple, onClick],
  );

  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[color],
        { [styles.rounded]: rounded },
        { [styles.gradient]: gradient },
        { [styles.relief]: relief },
        { [styles.group]: group },
        { [styles[groupDirection]]: group },
        { ['transform hover:scale-110']: !group && (popped || gradient) },
      )}
      disabled={disabled}
      onClick={handleOnClick}
      {...props}
    >
      {children}
      {ripple && <span ref={rippleRef} className={styles.ripple} />}
    </button>
  );
};

export default Button;

function rippleEffect(event: MouseEvent<HTMLButtonElement>, ripple: HTMLSpanElement): void {
  const rect = ripple.getBoundingClientRect();
  const circle = document.createElement('span');
  const diameter = Math.max(rect.width, rect.width);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (rect.left + radius)}px`;
  circle.style.top = `${event.clientY - (rect.top + radius)}px`;
  circle.classList.add(styles.effect);
  circle.addEventListener('animationend', () => circle.remove());

  const effect = ripple.getElementsByClassName(styles.effect)[0];
  if (effect) {
    effect.remove();
  }

  ripple.appendChild(circle);
}
