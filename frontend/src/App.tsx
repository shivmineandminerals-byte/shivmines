import type { RouteRecord } from "vite-react-ssg";

import RootLayout from "@/RootLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Contact from "@/pages/Contact";
import Guides from "@/pages/Guides";
import GuideDetail from "@/pages/GuideDetail";
import Industries from "@/pages/Industries";
import IndustryDetail from "@/pages/IndustryDetail";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import Quality from "@/pages/Quality";
import SupplierIndia from "@/pages/SupplierIndia";
import ExporterIndia from "@/pages/ExporterIndia";
import SiteMapPage from "@/pages/SiteMapPage";
import NotFound from "@/pages/NotFound";
import { products } from "@/data/products";
import { guides } from "@/data/guides";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blog";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      {
        path: "products/:slug",
        Component: ProductDetail,
        getStaticPaths: () => products.map((p) => `products/${p.slug}`),
      },
      { path: "contact", Component: Contact },
      { path: "quality", Component: Quality },
      { path: "silica-sand-supplier-india", Component: SupplierIndia },
      { path: "silica-sand-exporter-india", Component: ExporterIndia },
      { path: "sitemap-page", Component: SiteMapPage },
      { path: "guides", Component: Guides },
      {
        path: "guides/:slug",
        Component: GuideDetail,
        getStaticPaths: () => guides.map((g) => `guides/${g.slug}`),
      },
      { path: "industries", Component: Industries },
      {
        path: "industries/:slug",
        Component: IndustryDetail,
        getStaticPaths: () => industries.map((i) => `industries/${i.slug}`),
      },
      { path: "blog", Component: Blog },
      {
        path: "blog/:slug",
        Component: BlogDetail,
        getStaticPaths: () => blogPosts.map((p) => `blog/${p.slug}`),
      },
      // Prerendered to dist/404.html — Vercel serves it with a real 404 status.
      { path: "404", Component: NotFound },
      // Client-side catch-all (direct hits to unknown URLs are handled by Vercel's 404.html).
      { path: "*", Component: NotFound },
    ],
  },
];
