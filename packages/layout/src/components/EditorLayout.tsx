import { FC } from 'react';

import '../styles';

const EditorLayout: FC = ({ children }) => {
  return (
    <div className={'w-full'}>
      <span>EditorLayout</span>
      {children}
    </div>
  );
};

export default EditorLayout;
