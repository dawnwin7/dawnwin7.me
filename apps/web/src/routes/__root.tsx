import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/solid-router";

import { HydrationScript } from "solid-js/web";
import { Suspense } from "solid-js";

import Header from "../components/Header";

import styleCss from "../styles.css?url";

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "@dawnwin7" },
      {
        name: "description",
        content:
          "Human ambition. Machine possibilities. dawnwin7’s corner of the internet—building connected agents, thoughtful products, and what comes next.",
      },
      { name: "theme-color", content: "#f3f1eb" },
      { property: "og:title", content: "@dawnwin7" },
      {
        property: "og:description",
        content: "A little obsessed with what comes next. Very obsessed with making it real.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: styleCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HydrationScript />
        <HeadContent />
      </head>
      <body>
        <Suspense>
          <Header />
          <Outlet />
        </Suspense>
        <Scripts />
      </body>
    </html>
  );
}
