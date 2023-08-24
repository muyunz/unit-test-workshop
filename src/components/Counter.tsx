import { useState } from "react";

const Count: React.FunctionComponent<{ defaultCount?: number }> = ({
  defaultCount = 0,
}) => {
  const [count, setCount] = useState(defaultCount);
  const onClick = () => setCount((c) => c + 1);
  return <button onClick={onClick}>Click me({count})</button>;
};

export default Count;
