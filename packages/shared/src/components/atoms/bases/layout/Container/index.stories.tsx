import { Story } from '@storybook/react';

import { Size } from 'src/enums/size';

import Container, { ContainerProps } from './index';

export default {
  title: 'atoms/bases/layout/Container',
  component: Container,
};

const StandardTemplate: Story<ContainerProps> = args => (
  <div className="flex gap-2">
    <Container className="h-[200px] bg-red-200" {...args} />
  </div>
);

export const Standard = StandardTemplate.bind({});

Standard.args = {
  size: Size.EXTRA_SMALL,
  rounded: true,
  shadow: true,
};
