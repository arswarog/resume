import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "./App"

describe("App", () => {
  it("renders the complete one-page shell in section order", () => {
    render(<App />)

    expect(screen.getByRole("heading", { name: "Elena Marsh" })).toBeInTheDocument()
    expect(screen.getByText((_, element) => element?.tagName === "P" && element.textContent?.includes("2026 © Designed by") === true)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Download Portfolio" })).toHaveAttribute("href", "/")
    expect(screen.getByRole("link", { name: "shadcnspace.com" })).toHaveAttribute("href", "https://shadcnspace.com/")

    const main = screen.getByRole("main")
    const children = Array.from(main.children)
    expect(children.map(({ tagName }) => tagName)).toEqual([
      "SECTION", "DIV", "SECTION", "DIV", "SECTION", "DIV",
      "SECTION", "DIV", "SECTION", "DIV", "SECTION", "DIV",
    ])
    const sections = Array.from(main.querySelectorAll(":scope > section"))
    expect(sections).toHaveLength(6)
    expect(sections[0]).toHaveTextContent("Elena Marsh")
    expect(sections[1]).toHaveTextContent("About Me")
    expect(sections[2]).toHaveTextContent("Featured work")
    expect(sections[3]).toHaveTextContent("Experience")
    expect(sections[4]).toHaveTextContent("Education")
    expect(sections[5]).toHaveTextContent("Case studies")
  })
})
