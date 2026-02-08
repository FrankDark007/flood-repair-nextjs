import Link from "next/link";
import { pages } from "@/content/site";
import { blogPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: pages.blog.title,
  description: pages.blog.description,
  path: "/blog/",
});

export default function BlogPage() {
  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Blog", url: "https://flood.repair/blog/" },
  ];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Blog" title={pages.blog.headline} description={pages.blog.subhead} />
      <Container className="py-12 md:py-16">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="rounded-2xl border border-border bg-white p-5 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{post.category}</p>
                <h2 className="mt-3 font-display text-xl font-semibold text-ink">{post.title}</h2>
                <p className="mt-2 text-sm text-muted">{post.description}</p>
                <p className="mt-4 text-xs text-muted">{post.date} · {post.readTime}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
