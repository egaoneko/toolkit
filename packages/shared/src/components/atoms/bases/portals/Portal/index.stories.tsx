import { Story } from '@storybook/react';

import Portal, { PortalProps } from './index';
import { useEffect, useRef, useState } from 'react';

export default {
  title: 'atoms/bases/portal/Portal',
  component: Portal,
};

const BodyTemplate: Story<PortalProps> = () => {
  return (
    <Portal>
      <span>Portal to Body</span>
    </Portal>
  );
};

export const Body = BodyTemplate.bind({});

const ContainerTemplate: Story<PortalProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(!!ref.current);
  }, [ref]);
  return (
    <>
      <div className="flex flex-col gap-2">
        Target
        <div className="w-[200px] border border-red-500" ref={ref} />
      </div>
      {mounted && (
        <Portal container={ref.current}>
          <span>Portal to Container</span>
        </Portal>
      )}
    </>
  );
};

export const Container = ContainerTemplate.bind({});
