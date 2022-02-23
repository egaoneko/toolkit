import { Story } from '@storybook/react';

import { Color } from 'src/enums/color';
import { ButtonVariant } from 'src/enums/button';
import { Size } from 'src/enums/size';
import SvgIcon from 'src/components/atoms/displays/icons/SvgIcon';

import Button, { ButtonProps } from './index';

export default {
  title: 'atoms/inputs/buttons/Button',
  component: Button,
};

const StandardTemplate: Story<ButtonProps> = args => (
  <div className="flex gap-2">
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
  size: Size.MEDIUM,
  color: Color.PRIMARY,
  disabled: false,
  rounded: false,
  popped: false,
  gradient: false,
  relief: false,
  ripple: true,
  rippleCenter: false,
};

const IconTemplate: Story<ButtonProps> = args => {
  const icon = (
    <SvgIcon size={args.size} color={args.color}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );

  return (
    <div className="flex gap-2">
      <Button {...args} startIcon={icon}>
        Start
      </Button>
      <Button {...args} endIcon={icon}>
        End
      </Button>
    </div>
  );
};

export const Icon = IconTemplate.bind({});
Icon.args = {
  size: Size.MEDIUM,
  color: Color.PRIMARY,
  variant: ButtonVariant.CONTAINED,
};
