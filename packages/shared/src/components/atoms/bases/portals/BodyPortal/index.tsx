import { FC, useRef } from 'react';
import ReactDom from 'react-dom';

const BodyPortal: FC = ({ children }) => {
  const container = useRef(document.body);
  return ReactDom.createPortal(children, container.current);
};

export default BodyPortal;
