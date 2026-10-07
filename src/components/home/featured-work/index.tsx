import { buttonVariants } from "@/components/ui/button"
import { featuredWork } from "@/data/portfolio"
import { appUrl, assetUrl } from "@/lib/urls"

const FeaturedWork = () => (
  <section>
    <div className="container">
      <div className="border-x border-border">
        <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
          <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured work</p>
            <a href={appUrl("/")} className={buttonVariants({ variant: "outline", className: "h-auto py-3 px-5" })}>Download Portfolio</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
          {featuredWork.map((value, index) => {
            const isRightCol = index % 2 === 1
            return (
              <div key={value.title} className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? "md:border-l md:border-border" : ""}`}>
                <a href={appUrl("/")} className="overflow-hidden">
                  <img src={assetUrl(value.image)} alt="Image" width={490} height={300} className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out" />
                </a>
                <div className="flex flex-col gap-1 sm:gap-2 px-2">
                  <a href={appUrl("/")}><h4>{value.title}</h4></a>
                  <p>{value.description}</p>
                  <div className="flex"><p>{value.roles.join(", ")}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
)

export default FeaturedWork
