import { expect, it } from "vitest";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter.tsx";

it("case-1", () => {
  const { getByRole } = render(<Counter />);
  const buttonEl = getByRole("button");
  expect(buttonEl.textContent).toBe("Click me(0)");
});

it("case-2", () => {
  const { getByRole } = render(<Counter defaultCount={3} />);
  const buttonEl = getByRole("button");
  expect(buttonEl.textContent).toBe("Click me(3)");
});

it("case-3", async () => {
  const { getByRole } = render(<Counter defaultCount={1} />);
  const buttonEl = getByRole("button");
  await userEvent.click(buttonEl);
  expect(buttonEl.textContent).toBe("Click me(2)");
});
