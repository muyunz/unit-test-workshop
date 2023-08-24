import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import List from "./List";
import { expect, it } from "vitest";

it("should add input when click the + button", async () => {
  // ref: https://github.com/testing-library/user-event/issues/1054#issuecomment-1239407837
  const user = userEvent.setup();
  render(<List />);

  // create 3 items
  const button = screen.getByText(/\+/i);
  await user.click(button);
  await user.click(button);
  await user.click(button);
  expect(screen.getAllByRole("textbox")).toHaveLength(3);
});

it("should delete input when click the - button", async () => {
  const user = userEvent.setup();
  render(<List />);

  // create 3 items
  const button = screen.getByText(/\+/i);
  await user.click(button);
  await user.click(button);
  await user.click(button);
  const inputs = screen.getAllByRole<HTMLInputElement>("textbox");
  const listItems = screen.getAllByRole<HTMLLIElement>("listitem");
  await user.type(inputs[0], "0");
  await user.type(inputs[1], "1");
  await user.type(inputs[2], "2");
  // 0 1 2
  const deleteButtonOf2ndListItem = within(listItems[1]).getByRole("button");
  await user.click(deleteButtonOf2ndListItem);
  // 0 2
  const finalInputs = screen.getAllByRole<HTMLInputElement>("textbox");
  expect(finalInputs).toHaveLength(2);
  expect(finalInputs[1].value).toBe("2");
});
