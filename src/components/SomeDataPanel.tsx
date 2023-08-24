import { useFetchSomeData } from "../hooks/useFetchSomeData.ts";

const SomeDataPanel = () => {
  const { someData } = useFetchSomeData();
  return <div>{JSON.stringify(someData, null, 2)}</div>;
};

export default SomeDataPanel;
