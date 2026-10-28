import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/page-header";
import { Section, SectionContent } from "@/components/layout/section";
import { BLOG_DATA } from "@/data/blog";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return BLOG_DATA.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_DATA.find((item) => item.id === id) || BLOG_DATA[0];
  return {
    title: `${post.title} - Rakesh Ray`,
    description: post.excerpt || `Read about "${post.title}" - Insights, youth inspiration, and community perspectives from Rakesh Ray, Birgunj, Parsa.`,
  };
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const post = BLOG_DATA.find((item) => item.id === id) || BLOG_DATA[0];

  return (
    <React.Fragment>
      <PageHeader
        heading={post.title}
        breadcrumb={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }]}
      />

      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <Section>
          <SectionContent>
            <div className="container">
              <div className="row justify-center">
                <div className="2xl:column-8 xl:column-9">
                  <div className="relative pb-7">
                    <Image src={post.image} alt={post.title} className="w-full rounded-3xl object-center object-cover max-h-100" />
                  </div>
                  <div className="flex flex-wrap items-center md:px-12 lg:px-20 pb-5">
                    <div className="flex items-center gap-4 text-xs md:text-sm text-body">
                      <div className="flex items-center gap-2">
                        <Avatar size="lg" className="bg-primary/10 text-primary font-bold">
                          <AvatarImage src={post.author.avatar} alt="" />
                        </Avatar>
                        <span className="font-medium text-base text-body">{post.author.name}</span>
                      </div>
                      <div className="h-3 border-l border-body/20 shrink-0" />
                      <div className="font-medium text-base text-body">{post.date}</div>
                      <div className="h-3 border-l border-body/20 shrink-0" />
                      <div className="font-medium text-base text-body"> 5 Min Read</div>
                    </div>
                  </div>

                  <article className="max-w-full dynamic-prose prose-img:w-full">
                    {/* Introduction */}
                    <h2>Introduction</h2>
                    <p>Imagine transforming your living space into a refined sanctuary of comfort while elevating your home&apos;s aesthetic value. When you invest in modern interior design concepts, thoughtful spatial planning often creates far more functional harmony than standard home arrangements—especially in open-concept living environments.</p>
                    <p>Instead of letting valuable square footage go underutilized, bespoke interior design concepts allow every room to flow seamlessly into the next while preserving architectural personality and individual character.</p>
                    <Image src={post.image} alt={post.title} />

                    <h3> What is Architectural Balance and How Does It Work? </h3>
                    <p> At its core, interior balancing is a design mechanism that harmonizes natural light, color palettes, and custom furniture proportions throughout your home:</p>

                    <ul>
                      <li>
                        <strong>Natural Light Integration:</strong> During daytime hours, strategically placed mirrors and sheer drapery maximize natural light distribution across living spaces, making interiors feel spacious and vibrant.
                      </li>
                      <li>
                        <strong>Architectural Focal Points:</strong> Accent walls, custom millwork, and curated statement lighting create visual anchors that guide the eye naturally through each room.
                      </li>
                      <li>
                        <strong>Spatial Flow &amp; Scale:</strong> Tailored furniture proportions ensure easy traffic movement while maintaining cozy, intimate conversation zones.
                      </li>
                    </ul>

                    <blockquote>
                      &ldquo;We can easily manage if we will only take, each day, the burden appointed to it. But the load will be far heavier if we carry yesterday&apos;s burden over again today, and then add the burden of the morrow before we are required to bear it.&rdquo;
                      <cite> — Sam Kurtis, Product Manager </cite>
                    </blockquote>

                    <h3> Interior Design Materials &amp; Sustainability</h3>
                    <p>
                      Selecting sustainable, premium materials is crucial for any homeowner planning a long-lasting renovation. Combining durable porcelain tiles with warm organic wood accents creates timeless appeal. Rather than following short-lived fads, curated material selections ensure your home remains elegant, comfortable, and functional for years to come.
                    </p>
                  </article>
                </div>
              </div>

            </div>
          </SectionContent>
        </Section>

      </main>
    </React.Fragment>
  );
}
