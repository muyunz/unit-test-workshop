import { useFetchSomeDataQuery } from "../queries.ts";
import { useConfig } from "./useConfig.ts";

export const useFetchSomeData = () => {
  const config = useConfig();
  const { data, isLoading, isFetched } = useFetchSomeDataQuery();
  return {
    isLoading,
    isFetched,
    region: config.region,
    someData: config.isEnabled ? data : null,
  };
};
