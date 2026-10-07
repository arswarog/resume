import { describe, expect, it } from "vitest"

import {
  educationData,
  experienceData,
  featuredWork,
  projectOverview,
} from "./portfolio"

describe("portfolio data", () => {
  it("preserves every experience record, role, detail, and bullet point", () => {
    expect(experienceData).toEqual([
      {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Product Designer, Tailwind",
        location: "Remote",
        startYear: "2022",
        endYear: "Present",
        bulletPoints: [
          "Led end-to-end redesign of dashboard UI, improving user retention by 23%",
          "Collaborated with engineers and product managers to ship features faster",
          "Designed components used in a system adopted by 4+ internal teams",
        ],
      },
      {
        icon: "/images/icon/asana-icon.svg",
        role: "UI/UX Designer - Asana",
        location: "New York, NY",
        startYear: "2019",
        endYear: "2022",
        bulletPoints: [
          "Created design systems for client projects across finance and healthcare",
          "Conducted user testing and research to validate designs",
          "Helped junior designers grow via mentorship",
        ],
      },
    ])
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

  it("preserves every featured-work title, description, role, and image", () => {
    expect(featuredWork).toEqual([
      {
        title: "Branding + Web Design for Cleaning Services",
        description:
          "Developed a modern brand identity and a responsive web experience tailored for a professional cleaning company, focused on clarity and usability.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/feature-img-1.png",
      },
      {
        title: "Brand Identity for a Health Care Company",
        description:
          "Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/feature-img-2.png",
      },
    ])
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
