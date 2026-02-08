import { getCategory, getServiceBySlug } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export const generateStaticParams = () => {
  const category = getCategory("commercial", "cleanup-services");
  if (!category) return [];
  return category.items.map((item) => ({ service: item.slug }));
};

export const generateMetadata = ({ params }: { params: { service: string } }) => {
  const service = getServiceBySlug("commercial", "cleanup-services", params.service);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/commercial/cleanup-services/${params.service}/`,
  });
};

export default function ServiceDetailPage({ params }: { params: { service: string } }) {
  const service = getServiceBySlug("commercial", "cleanup-services", params.service);
  if (!service) return notFound();

  const crumbs = [
    { name: "Home", url: "https://flood.repair/" },
    { name: "Services", url: "https://flood.repair/services/" },
    { name: "Commercial", url: "https://flood.repair/services/commercial/" },
    { name: "Cleanup Services", url: "https://flood.repair/services/commercial/cleanup-services/" },
    {
      name: service.title,
      url: `https://flood.repair/services/commercial/cleanup-services/${params.service}/`,
    },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema(service), faqSchema(service.faqs)]} />
      <ServicePage service={service} />
    </>
  );
}
