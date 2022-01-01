import { Story } from '@storybook/react';

import { Color } from '../../../../enums/color';
import { ButtonVariant } from '../../../../enums/button';
import { Size } from '../../../../enums/size';
import SvgIcon from '../../icons/SvgIcon';
import { ButtonProps } from '../Button';

import IconButton from './index';

export default {
  title: 'atoms/buttons/IconButton',
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
