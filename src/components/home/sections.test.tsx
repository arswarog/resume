import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import Education from "./education"
import Experience from "./experience"
import FeaturedWork from "./featured-work"
import ProjectOverview from "./project-overview"

describe("static portfolio sections", () => {
  it("render all data-driven content synchronously without fetching", () => {
    const fetchMock = vi.fn()
    vi.stubGlobal("fetch", fetchMock)
    render(<><FeaturedWork /><Experience /><Education /><ProjectOverview /></>)

    expect(screen.getByText("Branding + Web Design for Cleaning Services")).toBeInTheDocument()
    expect(screen.getByText("Product Designer, Tailwind")).toBeInTheDocument()
    expect(screen.getByText("B.F.A. in Graphic Design")).toBeInTheDocument()
    expect(screen.getByText("Wellnest")).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
  })

  it("uses base-aware raw image sources and local links", () => {
    render(<FeaturedWork />)
    expect(screen.getAllByRole("img")[0]).toHaveAttribute("src", "/images/feature-work/feature-img-1.png")
    expect(screen.getByRole("link", { name: "Download Portfolio" })).toHaveAttribute("href", "/")
  })
})
