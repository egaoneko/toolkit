import { FC } from 'react';

import 'src/styles';

const EditorLayout: FC = ({ children }) => {
  return (
    <div className={'w-full'}>
      <span>EditorLayout</span>
      {children}
    </div>
  );
};

export default EditorLayout;
