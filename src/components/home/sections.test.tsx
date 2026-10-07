import { render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"
import Education from "./education"
import Experience from "./experience"
import FeaturedWork from "./featured-work"
import ProjectOverview from "./project-overview"

const { urlBase } = vi.hoisted(() => ({ urlBase: { value: "/" } }))

vi.mock("@/lib/urls", async () => {
  const actual = await vi.importActual<typeof import("@/lib/urls")>("@/lib/urls")
  return {
    ...actual,
    assetUrl: (path: string) => actual.assetUrl(path, urlBase.value),
    appUrl: (path: string) => actual.appUrl(path, urlBase.value),
  }
})

afterEach(() => {
  urlBase.value = "/"
})

describe("static portfolio sections", () => {
  it("render all data-driven content synchronously without fetching", () => {
    const fetchMock = vi.fn()
    vi.stubGlobal("fetch", fetchMock)
    render(<><FeaturedWork /><Experience /><Education /><ProjectOverview /></>)

    expect(screen.getByText("Branding + Web Design for Cleaning Services")).toBeInTheDocument()
    expect(screen.getByText("Developed a modern brand identity and a responsive web experience tailored for a professional cleaning company, focused on clarity and usability.")).toBeInTheDocument()
    expect(screen.getByText("Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider.")).toBeInTheDocument()
    expect(screen.getByText("Product Designer, Tailwind")).toBeInTheDocument()
    expect(screen.getByText("B.F.A. in Graphic Design")).toBeInTheDocument()
    expect(screen.getByText("Wellnest")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /Formless/ })).toHaveAttribute("href", "#")
    expect(fetchMock).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
  })

  it("uses base-aware image sources and local links for a subdirectory deployment", () => {
    urlBase.value = "/resume/"
    render(<><FeaturedWork /><Experience /><Education /><ProjectOverview /></>)

    expect(screen.getAllByRole("img").every((image) => image.getAttribute("src")?.startsWith("/resume/") === true)).toBe(true)
    expect(screen.getByRole("link", { name: "Download Portfolio" })).toHaveAttribute("href", "/resume/")
    expect(screen.getByRole("link", { name: /Formless/ })).toHaveAttribute("href", "#")
  })
})
