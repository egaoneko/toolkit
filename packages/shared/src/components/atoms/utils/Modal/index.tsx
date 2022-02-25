import { forwardRef, ReactElement, ReactNode } from 'react';

import Portal from 'src/components/atoms/utils/Portal';
import Container, { ContainerProps } from 'src/components/atoms/bases/layout/Container';
import { Size } from 'src/enums';

import styles from './index.module.css';

export interface ModalProps extends Pick<ContainerProps, 'size' | 'rounded' | 'shadow'> {
  children?: ReactNode;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  { size = Size.EXTRA_SMALL, rounded = true, shadow = true, children },
  ref,
): ReactElement | null {
  return (
    <Portal>
      <Container ref={ref} className={styles.container} size={size} rounded={rounded} shadow={shadow}>
        {children}
      </Container>
    </Portal>
  );
});

export default Modal;
