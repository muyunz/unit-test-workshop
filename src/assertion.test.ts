import { describe, test, expect } from "vitest";

describe("assertion", () => {
  // 沒任何意義
  test("assertion", async () => {
    expect(1).toBe(1);
    // expect(1).not.toBe(1); // failed
    expect(1).not.toBe(2);
    expect(1).toEqual(1);
    // expect(1).toEqual(2); // failed
    expect(2).toBeGreaterThan(1);
    expect(1).toBeLessThan(3);

    // toBe 和 toEqual 差異
    // 如果是物件 toBe 會檢查 reference，toEqual 則是 shallow compare
    // expect({ a: "1" }).toBe({ a: "1" });
    expect({ a: "1" }).toEqual({ a: "1" });

    expect(1 === 1).toBeTruthy();
    expect(1 !== 1).toBeFalsy();

    expect(undefined).toBeUndefined();
    expect(void 0).toBeUndefined();
    expect(null).toBeNull();

    expect(() => {}).toBeTypeOf("function");
    // expect(2).toBeTypeOf("string"); // failed
  });
});
