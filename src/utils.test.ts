import { describe, test, expect } from "vitest";
import { promiseAll } from "./utils.ts";

describe("promiseAll", () => {
  test("case-1", async () => {
    const result = await promiseAll([
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ]);

    expect(result).toEqual([1, 2, 3]);
  });

  test("case-2", async () => {
    const result = await promiseAll([
      1,
      Promise.resolve(2),
      Promise.resolve(3),
    ]);
    expect(result).toEqual([1, 2, 3]);
  });
});
