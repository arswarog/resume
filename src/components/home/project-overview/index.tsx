import { projectOverview } from "@/data/portfolio"
import { appUrl, assetUrl } from "@/lib/urls"

const ProjectOverview = () => (
  <section>
    <div className="container">
      <div className="border-x border-border">
        <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16">
          <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
            <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">Case studies</p>
            <div className="flex flex-col gap-2.5">
              {projectOverview.caseStudies.map((value) => (
                <a key={value.name} href={value.url} className="group flex items-center gap-2">
                  <h4>{value.name}</h4>
                  <img src={assetUrl("/images/icon/tile-arrow-icon.svg")} alt="tile-icon" width={24} height={24} className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
            <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">Side Projects</p>
            <div className="flex flex-col gap-2.5">
              {projectOverview.sideProjects.map((value) => {
                const isComingSoon = "comingSoon" in value && value.comingSoon === true
                const content = (
                  <div className="group flex flex-wrap items-center gap-2">
                    <h4 className={isComingSoon ? "text-muted-foreground" : "text-primary"}>{value.name}</h4>
                    {!isComingSoon ? (
                      <img src={assetUrl("/images/icon/tile-arrow-icon.svg")} alt="tile-icon" width={24} height={24} className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in" />
                    ) : (
                      <div className="py-1.5 px-3 bg-muted rounded-lg"><p className="text-xs md:text-base font-normal text-muted-foreground">Coming Soon</p></div>
                    )}
                  </div>
                )
                return isComingSoon ? <div key={value.name}>{content}</div> : <a key={value.name} href={appUrl("/")} className="group">{content}</a>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ProjectOverview
