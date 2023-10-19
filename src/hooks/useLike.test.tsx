import { afterEach, describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { useLike } from "./useLike.ts";
import * as apis from "../apis.ts";
import { QueryClient } from "react-query";

const queryClient = new QueryClient();

describe("useLike", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  // it("should call api", async () => {
  //   const likeSomebodySpy = vi.spyOn(apis, "likeSomebody");
  //   const { result } = renderHook(() => useLike(), {
  //     wrapper: ({ children }) => (
  //       <QueryClientProvider client={queryClient}>
  //         {children}
  //       </QueryClientProvider>
  //     ),
  //   });
  //   await result.current();
  //   return expect(likeSomebodySpy).toHaveBeenCalled();
  // });
});
