import { describe, expect, it } from "vitest"

import { cn } from "./utils"

describe("cn", () => {
  it("merges conflicting Tailwind classes", () => {
    expect(cn("rounded-md px-2", "px-4")).toBe("rounded-md px-4")
  })

  it("ignores optional and falsy inputs", () => {
    expect(
      cn("text-sm", undefined, null, false, "", 0, {
        "font-medium": true,
        italic: false,
      }),
    ).toBe("text-sm font-medium")
  })
})
