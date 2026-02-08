import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const post = blogPosts.find((item) => item.slug === "burst-pipe-cleanup-winter-prep");

export const metadata = post
  ? buildMetadata({
      title: post.title + " | Flood Doctor",
      description: post.description,
      path: "/blog/burst-pipe-cleanup-winter-prep/",
    })
  : undefined;

export default function BlogPostPage() {
  if (!post) return notFound();

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Blog", url: "https://flood.repair/blog/" },
    { name: post.title, url: "https://flood.repair/blog/burst-pipe-cleanup-winter-prep/" },
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Flood Doctor" },
    publisher: { "@type": "Organization", name: "Flood Doctor" },
    mainEntityOfPage: "https://flood.repair/blog/burst-pipe-cleanup-winter-prep/",
  };

  return (
    <article className="bg-white">
      <JsonLd data={[breadcrumbSchema(crumbs), blogSchema]} />
      <Container className="py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{post.category}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted">{post.description}</p>
        <p className="mt-3 text-xs text-muted">{post.date} · {post.readTime}</p>
        <div className="mt-10 space-y-8 text-sm text-muted">
          <p>{post.intro}</p>
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-2">
              <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
