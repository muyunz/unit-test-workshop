import { afterEach, describe, expect, it, vi } from "vitest";
import { useFetchSomeData } from "./useFetchSomeData.ts";
import { QueryClientProvider } from "react-query";
import { reactQueryClient } from "../libs/reactQuery.ts";
import * as apiExports from "../apis.ts";
import * as useConfigExports from "./useConfig.ts";
import { renderHook } from "@testing-library/react-hooks";
import React, { PropsWithChildren } from "react";

const QueryClientWrapper: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <QueryClientProvider client={reactQueryClient}>
    {children}
  </QueryClientProvider>
);

vi.spyOn(apiExports, "fetchSomeData").mockResolvedValue("MOCK_DATA");

describe("useFetchSomeData", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch data and transform it when config is on", async () => {
    vi.spyOn(useConfigExports, "useConfig").mockReturnValue({
      isEnabled: true,
      isHappy: true,
      region: ["TW"],
    });

    const { result, waitFor } = renderHook(() => useFetchSomeData(), {
      wrapper: QueryClientWrapper,
    });
    await waitFor(() => result.current.isFetched);
    expect(result.current.someData).toBe("MOCK_DATA");
    expect(result.current.region).toEqual(["TW"]);
  });

  it("should fetch data but return null when config is off", async () => {
    vi.spyOn(useConfigExports, "useConfig").mockReturnValue({
      isEnabled: false,
      isHappy: true,
      region: ["JP"],
    });

    const { result, waitFor } = renderHook(() => useFetchSomeData(), {
      wrapper: QueryClientWrapper,
    });
    await waitFor(() => result.current.isFetched);
    expect(result.current.someData).toBe(null);
    expect(result.current.region).toEqual(["JP"]);
  });
});
