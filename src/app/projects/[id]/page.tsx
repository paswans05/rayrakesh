import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionContent } from "@/components/layout/section";
import { PROJECTS_DATA } from "@/data/projects";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS_DATA.find((item) => item.id === id) || PROJECTS_DATA[0];
  return {
    title: `${project.title} - Rakesh Ray`,
    description: "Rakesh Ray is a NextJS Interior Design Landing Page Template with a modern design and a premium visual experience.",
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((item) => item.id === id) || PROJECTS_DATA[0];

  return (
    <React.Fragment>
      <PageHeader
        heading={project.title}
        breadcrumb={[{ href: "/", label: "Home" }, { href: "/projects", label: "Projects" }]}
      />

      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Section>
          <SectionContent>
            <div className="container">
              {/* Main Featured Hero Image */}
              <div className="mb-6 sm:mb-8 lg:mb-12">
                <div className="relative w-full max-h-80 md:max-h-100  lg:max-h-120  xl:max-h-150 overflow-hidden">
                  <Image src={project.image} alt={project.title} className="object-cover object-center h-full w-full " />
                </div>
              </div>

              {/* 2-Column Layout matching design mockup */}
              <div className="row sm:g-12 items-start">
                {/* Left Content Column */}
                <div className="lg:column-8 xl:column-8">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darker mb-4">
                    Here to Know About This Project
                  </h3>
                  <p className="text-body text-base/relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-body text-xl/relaxed mb-8">
                    {project.subDescription}
                  </p>

                  {/* 3 Thumbnail Images Grid */}
                  <div className="grid min-[400px]:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-7 lg:mb-10">
                    {project.gallery.slice(0, 3).map((img, idx) => (
                      <div key={idx} className="relative w-full overflow-hidden">
                        <Image
                          src={img}
                          alt={`${project.title}  ${idx + 1}`}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darker mb-3">
                    The Challenger
                  </h3>
                  <p className="text-body text-base/relaxed mb-8">
                    {project.challenge}
                  </p>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darker mb-3">
                    The Result
                  </h3>
                  <p className="text-body text-base/relaxed">
                    {project.result}
                  </p>
                </div>

                {/* Right Sidebar - Project Details Card */}
                <div className="lg:column-4 xl:column-4">
                  <div className="bg-white shadow-[0_0_13px_2px] shadow-black/8">
                    <div className="bg-primary text-white py-6 px-6 text-center font-bold text-xl lg:text-2xl leading-snug">
                      Project Details
                    </div>
                    <div className="p-6 flex flex-col gap-4">
                      <div className="not-first:border-t border-darker/8 not-first:pt-4">
                        <div className="text-body text-sm/relaxed">Client:</div>
                        <div className="text-darker text-base/relaxed font-medium">{project.client}</div>
                      </div>
                      <div className="not-first:border-t border-darker/8 not-first:pt-4">
                        <div className="text-body text-sm/relaxed">Address:</div>
                        <div className="text-darker text-base/relaxed font-medium">{project.location}</div>
                      </div>
                      <div className="not-first:border-t border-darker/8 not-first:pt-4">
                        <div className="text-body text-sm/relaxed">Service:</div>
                        <div className="text-darker text-base/relaxed font-medium">{project.category}</div>
                      </div>
                      <div className="not-first:border-t border-darker/8 not-first:pt-4">
                        <div className="text-body text-sm/relaxed">Timeline:</div>
                        <div className="text-darker text-base/relaxed font-medium">{project.year}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </Section>
      </main>
    </React.Fragment>
  );
}
