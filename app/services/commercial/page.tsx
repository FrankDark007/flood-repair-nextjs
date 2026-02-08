import { getHub } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { ServiceHubPage } from "@/components/ServiceHubPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Commercial Services | Flood Doctor",
  description:
    "Commercial restoration, cleanup, and technical services for facilities across Northern Virginia.",
  path: "/services/commercial/",
});

export default function CommercialServicesPage() {
  const hub = getHub("commercial");
  if (!hub) return null;

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Services", url: "https://flood.repair/services/" },
    { name: "Commercial", url: "https://flood.repair/services/commercial/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <ServiceHubPage hub={hub} />
    </>
  );
}
