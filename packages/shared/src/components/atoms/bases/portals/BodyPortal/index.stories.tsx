import { Story } from '@storybook/react';

import BodyPortal from './index';

export default {
  title: 'atoms/bases/portal/BodyPortal',
  component: BodyPortal,
};

const StandardTemplate: Story = () => {
  return (
    <BodyPortal>
      <span>Portal to Body</span>
    </BodyPortal>
  );
};

export const Standard = StandardTemplate.bind({});
