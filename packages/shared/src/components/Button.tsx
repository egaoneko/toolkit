import { FC, useState } from 'react';

const Button: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </button>
  );
};

export default Button;
