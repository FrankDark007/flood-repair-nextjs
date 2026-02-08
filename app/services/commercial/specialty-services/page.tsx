import { getCategory, getHub } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { ServiceCategoryPage } from "@/components/ServiceCategoryPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Specialty Services | Flood Doctor",
  description:
    "Specialty Services for Commercial properties across Northern Virginia.",
  path: "/services/commercial/specialty-services/",
});

export default function CategoryPage() {
  const hub = getHub("commercial");
  const category = getCategory("commercial", "specialty-services");
  if (!hub || !category) return null;

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Services", url: "https://flood.repair/services/" },
    { name: "Commercial", url: "https://flood.repair/services/commercial/" },
    { name: "Specialty Services", url: "https://flood.repair/services/commercial/specialty-services/" },
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
