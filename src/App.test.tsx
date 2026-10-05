import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "./App"

describe("App", () => {
  it("renders the complete one-page shell in section order", () => {
    render(<App />)

    expect(screen.getByText("Now available on Figma & Code — start customizing your personal site today.")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Elena Marsh" })).toBeInTheDocument()
    expect(screen.getByText("About Me")).toBeInTheDocument()
    expect(screen.getByText("Featured work")).toBeInTheDocument()
    expect(screen.getByText("Experience")).toBeInTheDocument()
    expect(screen.getByText("Education")).toBeInTheDocument()
    expect(screen.getByText("Case studies")).toBeInTheDocument()
    expect(screen.getByText((_, element) => element?.tagName === "P" && element.textContent?.includes("2026 © Designed by") === true)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Download Portfolio" })).toHaveAttribute("href", "/")
    expect(screen.getByRole("link", { name: "shadcnspace.com" })).toHaveAttribute("href", "https://shadcnspace.com/")
  })
})
