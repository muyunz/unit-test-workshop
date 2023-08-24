import { describe, expect, it } from "vitest";
import ColorBadge from "./ColorBadge.tsx";
import { BadgeType } from "./ColorBadge.enums.tsx";
import { render } from "@testing-library/react";

describe("ColorBadge", function () {
  it("snapshot: type = danger", () => {
    const comp = render(<ColorBadge type={BadgeType.Danger} />);
    expect(comp).toMatchSnapshot();
  });
});
