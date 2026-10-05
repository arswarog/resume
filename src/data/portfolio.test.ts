import { describe, expect, it } from "vitest"

import {
  educationData,
  experienceData,
  featuredWork,
  projectOverview,
} from "./portfolio"

describe("portfolio data", () => {
  it("contains the expected experience records and required fields", () => {
    expect(experienceData).toHaveLength(2)
    expect(experienceData[0]).toMatchObject({
      role: "Product Designer, Tailwind",
      location: "Remote",
      startYear: "2022",
      endYear: "Present",
      icon: "/images/icon/tailwind-icon.svg",
    })
    expect(experienceData.every(({ bulletPoints }) => bulletPoints.length > 0)).toBe(true)
    expect(experienceData.every(({ icon, role, location, startYear, endYear }) =>
      [icon, role, location, startYear, endYear].every(Boolean),
    )).toBe(true)
  })

  it("contains every education record with required fields", () => {
    expect(educationData).toHaveLength(3)
    expect(educationData.map(({ title }) => title)).toEqual([
      "B.F.A. in Graphic Design",
      "UX Design Certificate",
      "Front-End Web Development Bootcamp",
    ])
    expect(educationData.every(({ date, title, subtitle }) =>
      [date, title, subtitle].every(Boolean),
    )).toBe(true)
  })

  it("preserves featured work content and project image URLs", () => {
    expect(featuredWork).toHaveLength(2)
    expect(featuredWork.map(({ image }) => image)).toEqual([
      "/images/feature-work/feature-img-1.png",
      "/images/feature-work/feature-img-2.png",
    ])
    expect(featuredWork.every(({ title, description, roles, image }) =>
      title && description && image && roles.length > 0,
    )).toBe(true)
  })

  it("preserves project URLs and both comingSoon states", () => {
    expect(projectOverview.caseStudies).toEqual([
      { name: "Wellnest", url: "#" },
      { name: "ScoutHire", url: "#" },
    ])
    expect(projectOverview.sideProjects).toEqual([
      { name: "Formless", url: "#" },
      { name: "Gridsnap", comingSoon: true },
      { name: "OrbitPay Mobile App", comingSoon: true },
      { name: "Siteflow Page Builder", comingSoon: true },
    ])

    expect(projectOverview.caseStudies.every(({ url }) => url === "#")).toBe(true)
    expect(projectOverview.sideProjects[0]).not.toHaveProperty("comingSoon")
    expect(projectOverview.sideProjects.slice(1).every((project) =>
      "comingSoon" in project && project.comingSoon === true,
    )).toBe(true)
  })
})
