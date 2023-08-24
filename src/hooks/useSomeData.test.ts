import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { useSomeData } from "./useSomeData.ts";

describe("useSomeData", () => {
  it("should transform data object to string", () => {
    const { result } = renderHook(() =>
      useSomeData({
        data: {
          foo: "Hi,",
          bar: "Balabababa",
        },
      }),
    );
    expect(result.current).toBe("Hi, Balabababa");
  });
});
