import type { MetadataRoute } from "next";
import { personal } from "@/data/personal";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: personal.name,
    short_name: personal.shortName,
    description:
      "Portfolio of Yenugula Surya Naga Sivaram — Software Engineer, Backend & Full-Stack Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080a",
    theme_color: "#08080a",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
