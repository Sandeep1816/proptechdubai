import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourwebsite.com/",
      lastModified: new Date().toISOString(),
    },
  ];
}
