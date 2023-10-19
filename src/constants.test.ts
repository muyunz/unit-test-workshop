import { describe, test, expect } from "vitest";
import { QueryKeys } from "./constants.ts";

// 沒任何意義
describe("useless test", () => {
  test("case-1", async () => {
    expect(QueryKeys.fetchSomeData).toEqual("fetchSomeData");
  });
});
