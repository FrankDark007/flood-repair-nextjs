import { getHub } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { ServiceHubPage } from "@/components/ServiceHubPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Residential Services | Flood Doctor",
  description:
    "Residential restoration and cleanup services for homes across Northern Virginia.",
  path: "/services/residential/",
});

export default function ResidentialServicesPage() {
  const hub = getHub("residential");
  if (!hub) return null;

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Services", url: "https://flood.repair/services/" },
    { name: "Residential", url: "https://flood.repair/services/residential/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <ServiceHubPage hub={hub} />
    </>
  );
}
