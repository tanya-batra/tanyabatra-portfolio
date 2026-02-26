/* ===============================
   Dynamic SEO Metadata
================================= */

import ProjectDetailsClient from "./ProjectDetailsClient";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`
  );

  const project = await res.json();

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Tanya Batra Portfolio`,
    description: project.description,
    keywords: project.keywords.join(", "),
  };
}

/* ===============================
   Project Details Page
================================= */

export default async function ProjectDetailsPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  return <ProjectDetailsClient id={id} />;
}
