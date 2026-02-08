import { getCategory, getHub } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { ServiceCategoryPage } from "@/components/ServiceCategoryPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Cleanup Services | Flood Doctor",
  description:
    "Cleanup Services for Residential properties across Northern Virginia.",
  path: "/services/residential/cleanup-services/",
});

export default function CategoryPage() {
  const hub = getHub("residential");
  const category = getCategory("residential", "cleanup-services");
  if (!hub || !category) return null;

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Services", url: "https://flood.repair/services/" },
    { name: "Residential", url: "https://flood.repair/services/residential/" },
    { name: "Cleanup Services", url: "https://flood.repair/services/residential/cleanup-services/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <ServiceCategoryPage
        title={hub.title}
        description={category.description}
        hubSlug={hub.slug}
        category={category}
      />
    </>
  );
}
