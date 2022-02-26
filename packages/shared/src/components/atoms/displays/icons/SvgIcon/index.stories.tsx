import { Story } from '@storybook/react';

import { Size } from 'src/enums/size';
import styles from 'src/styles/storybook.css';

import SvgIcon, { SvgIconProps } from './index';

export default {
  title: 'atoms/displays/icons/SvgIcon',
  component: SvgIcon,
};

const StandardTemplate: Story<SvgIconProps> = args => (
  <div className={styles.row}>
    <div className={styles.primary}>
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
    <div className={styles.secondary}>
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
    <div className={styles.success}>
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
    <div className={styles.danger}>
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
    <div className={styles.warning}>
      <SvgIcon {...args}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
    <div className={styles.info}>
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
