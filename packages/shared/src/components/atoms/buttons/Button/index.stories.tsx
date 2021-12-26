import { Story } from '@storybook/react';

import { Color } from '../../../../enums/color';
import { ButtonVariant } from '../../../../enums/button';
import { Size } from '../../../../enums/size';

import Button, { ButtonProps } from './index';

export default {
  title: 'atoms/buttons/Button',
  component: Button,
};

const StandardTemplate: Story<ButtonProps> = args => (
  <div>
    <Button {...args} variant={ButtonVariant.CONTAINED}>
      Contained
    </Button>
    <Button {...args} variant={ButtonVariant.OUTLINED}>
      Outlined
    </Button>
    <Button {...args} variant={ButtonVariant.TEXT}>
      Text
    </Button>
  </div>
);

export const Standard = StandardTemplate.bind({});
Standard.args = {
  size: Size.DEFAULT,
  color: Color.PRIMARY,
  disabled: false,
  rounded: false,
  popped: false,
  gradient: false,
  relief: false,
  ripple: true,
};
