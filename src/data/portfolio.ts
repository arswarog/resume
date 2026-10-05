export type Experience = Readonly<{
  icon: string
  role: string
  location: string
  startYear: string
  endYear: string
  bulletPoints: readonly string[]
}>

export type Education = Readonly<{
  date: string
  title: string
  subtitle: string
}>

export type FeaturedWork = Readonly<{
  title: string
  description: string
  roles: readonly string[]
  image: string
}>

export type Project = Readonly<{
  name: string
  url?: string
  comingSoon?: boolean
}>

export type ProjectOverview = Readonly<{
  caseStudies: readonly Project[]
  sideProjects: readonly Project[]
}>

export const experienceData = [
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
] as const satisfies readonly Experience[]

export const educationData = [
  {
    date: "Sep 2015 - May 2019",
    title: "B.F.A. in Graphic Design",
    subtitle: "Pratt Institute — Brooklyn, NY",
  },
  {
    date: "Mar 2021 - Aug 2021",
    title: "UX Design Certificate",
    subtitle: "Google UX Design - Coursera",
  },
  {
    date: "Jan 2020 - Mar 2020",
    title: "Front-End Web Development Bootcamp",
    subtitle: "General Assembly — New York, NY",
  },
] as const satisfies readonly Education[]

export const featuredWork = [
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
] as const satisfies readonly FeaturedWork[]

export const projectOverview = {
  caseStudies: [
    { name: "Wellnest", url: "#" },
    { name: "ScoutHire", url: "#" },
  ],
  sideProjects: [
    { name: "Formless", url: "#" },
    { name: "Gridsnap", comingSoon: true },
    { name: "OrbitPay Mobile App", comingSoon: true },
    { name: "Siteflow Page Builder", comingSoon: true },
  ],
} as const satisfies ProjectOverview
