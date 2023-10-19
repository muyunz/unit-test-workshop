import { describe, test, expect } from "vitest";

let magicNumber = 0;

// beforeEach, afterEach, beforeAll, afterAll

describe("setup example", () => {
  test("A", () => {
    magicNumber++;
    expect(magicNumber).toBe(1);
  });

  // 這樣會失敗
  // test("B", () => {
  //   magicNumber += 1;
  //   expect(magicNumber).toBe(1);
  // });
});
