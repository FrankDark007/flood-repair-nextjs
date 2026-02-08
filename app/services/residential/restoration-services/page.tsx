import { getCategory, getHub } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { ServiceCategoryPage } from "@/components/ServiceCategoryPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Residential Restoration Services | Flood Doctor",
  description:
    "Residential restoration services across Northern Virginia for water, flood, and storm events.",
  path: "/services/residential/restoration-services/",
});

export default function CategoryPage() {
  const hub = getHub("residential");
  const category = getCategory("residential", "restoration-services");
  if (!hub || !category) return null;

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Services", url: "https://flood.repair/services/" },
    { name: "Residential", url: "https://flood.repair/services/residential/" },
    { name: "Restoration Services", url: "https://flood.repair/services/residential/restoration-services/" },
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
