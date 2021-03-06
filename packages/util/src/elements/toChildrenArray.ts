import { Children, ReactElement, ReactNode } from 'react';
import { isFragment } from 'react-is';

export default function toChildrenArray<T>(
  children: ReactNode,
  option: {
    keepEmpty?: boolean;
  } = {},
): ReactElement<T>[] {
  let ret: ReactElement<T>[] = [];

  Children.forEach(children, (child: unknown) => {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toChildrenArray(child));
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toChildrenArray(child.props.children, option));
    } else {
      ret.push(child as ReactElement<T>);
    }
  });

  return ret;
}
