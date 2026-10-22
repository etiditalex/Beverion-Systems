import type { MetadataRoute } from "next";
import { company, posts, products, services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/products",
    "/portfolio",
    "/partners",
    "/blog",
    "/opportunities",
    "/contact",
    ...services.map((service) => `/services/${service.slug}`),
    ...products.map((product) => `/products/${product.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return paths.map((path) => ({
    url: `${company.url}${path}`,
  }));
}
