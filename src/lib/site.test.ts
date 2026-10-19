import { describe, expect, it } from "vitest";

import { siteConfig } from "@/lib/site";

describe("siteConfig", () => {
  it("contains the required site identity", () => {
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.description).toBeTruthy();
    expect(siteConfig.url).toMatch(/^https?:\/\//);
    expect(siteConfig.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("contains the expected navigation routes", () => {
    const hrefs = siteConfig.nav.map((item) => item.href);

    expect(hrefs).toEqual([
      "/",
      "/about",
      "/projects",
      "/experience",
      "/blog",
      "/contact",
    ]);
  });

  it("contains external social profiles", () => {
    expect(siteConfig.social.github).toMatch(/^https?:\/\//);
    expect(siteConfig.social.linkedin).toMatch(/^https?:\/\//);
  });
});
