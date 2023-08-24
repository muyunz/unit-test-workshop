import { useQuery } from "react-query";
import { QueryKeys } from "./constants.ts";
import { fetchSomeData } from "./apis.ts";

export const useFetchSomeDataQuery = () =>
  useQuery(QueryKeys.fetchSomeData, () => fetchSomeData());
