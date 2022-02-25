import { cloneElement, forwardRef, isValidElement, ReactElement, ReactNode, RefAttributes, useState } from 'react';
import ReactDOM from 'react-dom';
import { setRef, useEnhancedEffect, useForkRef } from '@toolkit/util';

export interface PortalProps {
  children?: ReactNode;
  container?: Element | (() => Element | null) | null;
  disablePortal?: boolean;
}

const Portal = forwardRef<Element, PortalProps>(function Portal(
  { children, container, disablePortal = false },
  ref,
): ReactElement | null {
  const [mountNode, setMountNode] = useState<Element | null>(null);
  const handleRef = useForkRef(isValidElement(children) ? (children as RefAttributes<Element>).ref : null, ref);

  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);

  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);

  if (disablePortal) {
    if (isValidElement(children)) {
      return cloneElement(children, {
        ref: handleRef,
      });
    }
    return children as ReactElement | null;
  }

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
});

export default Portal;

function getContainer(container?: Element | (() => Element | null) | null): Element | null {
  return typeof container === 'function' ? container() : container ?? null;
}
