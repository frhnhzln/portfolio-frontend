import { ExperienceCard } from "@/components/ExperienceCard";
import { SkillsetCard } from "@/components/SkillsetCard";
import { StatusCard } from "@/components/StatusCard";
import { ProfileCard } from "@/components/ProfileCard";
import { ProjectCard } from "@/components/ProjectCard";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] p-6 md:p-10 flex flex-col items-center selection:bg-blue-500/30">
      <div className="w-full max-w-7xl space-y-12 md:space-y-24 flex flex-col">
        {/* Header Section */}
        <section className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-end gap-12 pt-10">
          <div className="flex flex-col items-center lg:items-start gap-10">
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                Developer Portfolio // 2026
              </p>
              <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                Hi, I'm{" "}
                <span className="text-blue-500 uppercase">Farhan Hazlan</span>.
                <br />I build{" "}
                <span className="italic font-extralight text-gray-500">
                  DIGITAL EXPERIENCES
                </span>{" "}
                <span className="text-white">with precision.</span>
              </h1>
            </div>
            <StatusCard />
          </div>
          <ProfileCard />
        </section>

        {/* Experience & Skillset */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          <div className="lg:col-span-7">
            <ExperienceCard
              company="Ingots Sdn.Bhd"
              role="Software Engineer"
              description="Leading the digital transformation and revamp of the ingots.io trading ecosystem."
              logoSrc="/images/ingots-removebg-preview.png"
            />
          </div>
          <div className="lg:col-span-5">
            <SkillsetCard />
          </div>
        </section>

        {/* Bento Grid Projects Showcase */}
        <section className="space-y-12 pb-32 w-full">
          <div className="flex items-center gap-6">
            <h2 className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-black whitespace-nowrap">
              Selected Works
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-10">
            <ProjectCard
              title="INGOTS DUAL ASSET"
              description="Simplified trading for the next generation of investors. Focus on clarity and performance."
              imageSrc="/images/ingots-platform.png"
              accentColor="blue"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard
                title="BLOCKCHAIN MYCERT"
                description="Secure credentialing system built on private ledger technology."
                imageSrc="/images/mycert.jpg"
                accentColor="purple"
                stats={[
                  { label: "Network", value: "Ethereum" },
                  { label: "Security", value: "SSL-Grade" },
                ]}
              />
              <ProjectCard
                title="EPR-FORM AUTOLIV"
                description="Internal enterprise resource planning and automation tool."
                imageSrc="/images/erp.jpg"
                accentColor="green"
                stats={[
                  { label: "Efficiency", value: "+42%" },
                  { label: "Users", value: "500+ Staff" },
                ]}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
