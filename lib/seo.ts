import type { Metadata } from "next";
import { business, siteMeta } from "@/content/site";

export const baseUrl = new URL(business.domain);

export const buildMetadata = (input: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata => {
  const url = new URL(input.path, baseUrl).toString();
  const image = input.image
    ? new URL(input.image, baseUrl).toString()
    : new URL("/graphics/og-default.png", baseUrl).toString();

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: business.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
};

export const defaultMetadata: Metadata = {
  metadataBase: baseUrl,
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: business.domain,
    siteName: business.name,
    type: "website",
    images: [
      {
        url: new URL("/graphics/og-default.png", baseUrl).toString(),
        width: 1200,
        height: 630,
        alt: siteMeta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [new URL("/graphics/og-default.png", baseUrl).toString()],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};
