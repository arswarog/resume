import { describe, expect, it } from "vitest"

import { appUrl, assetUrl } from "./urls"

describe("assetUrl", () => {
  it("builds root URLs from paths with or without a leading slash", () => {
    expect(assetUrl("images/avatar.png", "/")).toBe("/images/avatar.png")
    expect(assetUrl("/images/avatar.png", "/")).toBe("/images/avatar.png")
  })

  it("builds URLs for a subdirectory base", () => {
    expect(assetUrl("/images/avatar.png", "/resume")).toBe("/resume/images/avatar.png")
    expect(assetUrl("images/avatar.png", "/resume/")).toBe("/resume/images/avatar.png")
  })

  it("normalizes separator edge cases", () => {
    expect(assetUrl("///images/avatar.png", "///resume///")).toBe("/resume/images/avatar.png")
    expect(assetUrl("/", "/resume/")).toBe("/resume/")
  })
})

describe("appUrl", () => {
  it("builds local root links for root and empty paths", () => {
    expect(appUrl("/", "/")).toBe("/")
    expect(appUrl("", "/")).toBe("/")
    expect(appUrl("/", "/resume")).toBe("/resume/")
    expect(appUrl("", "/resume/")).toBe("/resume/")
  })

  it("builds local links for root and subdirectory deployments", () => {
    expect(appUrl("/about", "/")).toBe("/about")
    expect(appUrl("about", "/resume/")).toBe("/resume/about")
    expect(appUrl("/about", "/resume")).toBe("/resume/about")
  })

  it("does not duplicate separators at either side of the base", () => {
    expect(appUrl("///about", "///resume///")).toBe("/resume/about")
    expect(appUrl("///", "///")).toBe("/")
  })
})
