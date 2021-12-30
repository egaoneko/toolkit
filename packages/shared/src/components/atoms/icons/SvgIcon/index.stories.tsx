import { Story } from '@storybook/react';

import { Size } from '../../../../enums/size';

import SvgIcon, { SvgIconProps } from './index';

export default {
  title: 'atoms/icons/SvgIcon',
  component: SvgIcon,
};

const StandardTemplate: Story<SvgIconProps> = args => (
  <div className="flex gap-2">
    <div className="text-textPrimary">
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
    <div className="text-textSecondary">
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
    <div className="text-textSuccess">
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
    <div className="text-textDanger">
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
    <div className="text-textWarning">
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
    <div className="text-textInfo">
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
  </div>
);

export const Standard = StandardTemplate.bind({});

Standard.args = {
  size: Size.MEDIUM,
  stroked: false,
  filled: true,
};
