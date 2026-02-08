import { getServiceBySlug } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const service = getServiceBySlug("residential", "specialty-services", "hardwood-floor-drying");

export const metadata = service
  ? buildMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/residential/specialty-services/hardwood-floor-drying/",
    })
  : undefined;

export default function ServiceDetailPage() {
  if (!service) return notFound();

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Services", url: "https://flood.repair/services/" },
    { name: "Residential Services", url: "https://flood.repair/services/residential/" },
    { name: "Specialty Services", url: "https://flood.repair/services/residential/specialty-services/" },
    { name: service.title, url: "https://flood.repair/services/residential/specialty-services/hardwood-floor-drying/" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema(service), faqSchema(service.faqs)]} />
      <ServicePage service={service} />
    </>
  );
}
