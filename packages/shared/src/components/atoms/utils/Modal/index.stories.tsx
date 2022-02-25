import { Story } from '@storybook/react';

import Modal, { ModalProps } from 'src/components/atoms/utils/Modal/index';
import { Size } from 'src/enums';

export default {
  title: 'atoms/utils/Modal',
  component: Modal,
};

const StandardTemplate: Story<ModalProps> = () => {
  return (
    <Modal>
      <span>Modal to Body</span>
    </Modal>
  );
};

export const Standard = StandardTemplate.bind({});
Standard.args = {
  size: Size.SMALL,
  rounded: false,
  shadow: false,
};
