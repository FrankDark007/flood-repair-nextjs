import { getServiceBySlug } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const service = getServiceBySlug("commercial", "restoration-services", "commercial-water-damage");

export const metadata = service
  ? buildMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/commercial/restoration-services/commercial-water-damage/",
    })
  : undefined;

export default function ServiceDetailPage() {
  if (!service) return notFound();

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Services", url: "https://flood.repair/services/" },
    { name: "Commercial Services", url: "https://flood.repair/services/commercial/" },
    { name: "Restoration Services", url: "https://flood.repair/services/commercial/restoration-services/" },
    { name: service.title, url: "https://flood.repair/services/commercial/restoration-services/commercial-water-damage/" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema(service), faqSchema(service.faqs)]} />
      <ServicePage service={service} />
    </>
  );
}
