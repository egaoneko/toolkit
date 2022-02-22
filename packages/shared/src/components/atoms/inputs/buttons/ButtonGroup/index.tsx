import { cloneElement, FC } from 'react';
import clsx from 'clsx';

import { ButtonGroupDirection } from 'src/enums/button';
import toChildrenArray from 'src/utils/element';
import { ButtonProps } from 'src/components/atoms/inputs/buttons/Button';

import styles from './index.module.css';

export interface ButtonGroupProps {
  direction?: ButtonGroupDirection;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ direction = ButtonGroupDirection.ROW, children }) => {
  const buttons = toChildrenArray<ButtonProps>(children);
  return <div className={clsx(styles.group, styles[direction])}>{renderButtons(buttons, direction)}</div>;
};

export default ButtonGroup;

function renderButtons(children: React.ReactElement<ButtonProps>[], direction: ButtonGroupDirection): React.ReactNode {
  return children.map((child, index) =>
    cloneElement(child, { key: `__buttons-${index}`, group: true, groupDirection: direction, ...child.props }),
  );
}
