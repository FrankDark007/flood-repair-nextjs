import { getCategory, getHub } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { ServiceCategoryPage } from "@/components/ServiceCategoryPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Commercial Cleanup Services | Flood Doctor",
  description:
    "Commercial cleanup services for sewage, mold, smoke, and odor issues across Northern Virginia.",
  path: "/services/commercial/cleanup-services/",
});

export default function CategoryPage() {
  const hub = getHub("commercial");
  const category = getCategory("commercial", "cleanup-services");
  if (!hub || !category) return null;

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Services", url: "https://flood.repair/services/" },
    { name: "Commercial", url: "https://flood.repair/services/commercial/" },
    { name: "Cleanup Services", url: "https://flood.repair/services/commercial/cleanup-services/" },
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
