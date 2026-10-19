import { describe, expect, it } from "vitest";

import {
  getAdjacentProjects,
  getFeaturedProjects,
  getProject,
  getProjectSlugs,
  getProjects,
} from "@/lib/projects";

describe("project content layer", () => {
  it("discovers project MDX slugs", () => {
    const slugs = getProjectSlugs();

    expect(slugs).toContain("cerwin-gps");
    expect(slugs).toContain("gpstech");
  });

  it("loads the Cerwin GPS project", () => {
    const project = getProject("cerwin-gps");

    expect(project.slug).toBe("cerwin-gps");
    expect(project.title).toBeTruthy();
    expect(project.description).toBeTruthy();
    expect(project.category).toBeTruthy();
    expect(project.technologies.length).toBeGreaterThan(0);
    expect(project.status).toBeTruthy();
    expect(project.year).toBeTruthy();
    expect(project.role).toBeTruthy();
    expect(project.content.trim()).not.toBe("");
  });

  it("loads the GPSTech project", () => {
    const project = getProject("gpstech");

    expect(project.slug).toBe("gpstech");
    expect(project.title).toBeTruthy();
    expect(project.description).toBeTruthy();
    expect(project.technologies.length).toBeGreaterThan(0);
    expect(project.year).toBeTruthy();
    expect(project.role).toBeTruthy();
    expect(project.content.trim()).not.toBe("");
  });

  it("puts featured projects before non-featured projects", () => {
    const projects = getProjects();

    expect(projects.length).toBeGreaterThan(0);

    let foundNonFeatured = false;

    for (const project of projects) {
      if (!project.featured) {
        foundNonFeatured = true;
        continue;
      }

      expect(foundNonFeatured).toBe(false);
    }
  });

  it("sorts projects alphabetically within the same featured group", () => {
    const projects = getProjects();

    for (let index = 1; index < projects.length; index += 1) {
      const previous = projects[index - 1];
      const current = projects[index];

      if (previous.featured === current.featured) {
        expect(previous.title.localeCompare(current.title)).toBeLessThanOrEqual(
          0,
        );
      }
    }
  });

  it("returns only featured projects", () => {
    const featuredProjects = getFeaturedProjects();

    expect(featuredProjects.length).toBeGreaterThan(0);
    expect(featuredProjects.every((project) => project.featured)).toBe(true);
  });

  it("returns adjacent projects in the configured order", () => {
    const projects = getProjects();

    expect(projects.length).toBeGreaterThanOrEqual(2);

    const first = getAdjacentProjects(projects[0].slug);

    expect(first.previous).toBeNull();
    expect(first.next?.slug).toBe(projects[1].slug);

    const second = getAdjacentProjects(projects[1].slug);

    expect(second.previous?.slug).toBe(projects[0].slug);

    if (projects[2]) {
      expect(second.next?.slug).toBe(projects[2].slug);
    } else {
      expect(second.next).toBeNull();
    }
  });

  it("returns null neighbors for an unknown slug", () => {
    const result = getAdjacentProjects("does-not-exist");

    expect(result).toEqual({
      previous: null,
      next: null,
    });
  });

  it("throws when requesting a missing project", () => {
    expect(() => getProject("does-not-exist")).toThrow(
      'Project "does-not-exist" was not found.',
    );
  });
});
