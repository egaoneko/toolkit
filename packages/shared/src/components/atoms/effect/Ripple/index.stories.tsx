import { Story } from '@storybook/react';
import { useRef } from 'react';

import Ripple, { RippleProps } from './index';

export default {
  title: 'atoms/effect/Ripple',
  component: Ripple,
};

const StandardTemplate: Story<RippleProps> = args => {
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={parentRef}
      className="relative overflow-hidden w-40 h-20 flex items-center justify-center bg-bgPrimaryDark"
    >
      Ripple Parent
      <Ripple {...args} parentRef={parentRef} />
    </div>
  );
};

export const Standard = StandardTemplate.bind({});
Standard.args = {
  disabled: false,
  center: false,
};
