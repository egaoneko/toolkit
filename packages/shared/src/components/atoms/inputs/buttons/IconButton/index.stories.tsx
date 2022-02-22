import { Story } from '@storybook/react';

import { Color } from 'src/enums/color';
import { ButtonVariant } from 'src/enums/button';
import { Size } from 'src/enums/size';
import SvgIcon from 'src/components/atoms/displays/icons/SvgIcon';
import { ButtonProps } from 'src/components/atoms/inputs/buttons/Button';

import IconButton from './index';

export default {
  title: 'atoms/inputs/buttons/IconButton',
  component: IconButton,
};

const icon = (
  <SvgIcon>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);
const StandardTemplate: Story<ButtonProps> = args => (
  <div className="flex gap-2">
    <IconButton {...args}>{icon}</IconButton>
  </div>
);

export const Standard = StandardTemplate.bind({});
Standard.args = {
  size: Size.MEDIUM,
  color: Color.PRIMARY,
  variant: ButtonVariant.CONTAINED,
  rounded: false,
};
