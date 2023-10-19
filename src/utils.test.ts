import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { afterDate, promiseAll } from "./utils.ts";

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

  test("case-3", () => {
    // 有很多寫法
    return expect(
      Promise.all([
        Promise.resolve().then(() => {
          throw new Error("error");
        }),
        Promise.resolve(2),
        Promise.resolve(3),
      ]),
    ).rejects.toBeDefined();
  });
});

describe("afterDate", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("after case", async () => {
    vi.setSystemTime(new Date(2000, 1, 1, 13));
    expect(afterDate(new Date(2023, 1, 1, 13))).toBeFalsy();
  });

  test("before case", async () => {
    vi.setSystemTime(new Date(2000, 1, 1, 13));
    expect(afterDate(new Date(1999, 1, 1, 13))).toBeTruthy();
  });
});
