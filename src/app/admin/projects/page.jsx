"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plus,
  Pencil,
  Trash2,
  ExternalLink,
  Github,
  ImageIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import Loader from "@/components/loader";

/* -------------------------------------------- */

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.log("Error while fetching projects: ", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleImagePreview = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewImage(url);
  };
  const handleDelete = async (id) => {
    await axios.delete(`/api/projects/${id}`);
    setProjects((prev) => prev.filter((p) => p._id !== id));
    toast.success("Project Deleted");
  };
  const handleAddProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((p) => (p._id === updatedProject._id ? updatedProject : p))
    );
  };

  if (loading) return <Loader text="Loading Projects..." />;

  return (
    <Card className="p-6 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

        {/* ADD PROJECT */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600"
              onClick={() => setPreviewImage(null)}
            >
              <Plus className="h-4 w-4" />
              Add Project
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
            </DialogHeader>

            <ProjectForm
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
              onFileSelect={handleImagePreview}
              onAdd={handleAddProject}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* TABLE */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <Card
              key={project._id}
              className="group relative flex flex-col rounded-2xl border bg-white dark:bg-slate-900
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden scroll-on-hover rounded-t-lg h-44">
                <div className="scroll-on-hover-inner">
                  {" "}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={0} // optional, Next.js will infer it
                    className="w-full object-cover"
                  />{" "}
                </div>
                {/* Top gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-t-3xl pointer-events-none" />
              </div>

              <CardContent className="flex flex-col flex-1 p-5 gap-4">
                {/* TITLE */}
                <div>
                  <h3 className="text-lg font-semibold leading-snug line-clamp-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 text-sm">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </Link>
                  )}

                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="inline-flex items-center gap-1 font-medium text-purple-600 hover:text-purple-500 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </Link>
                  )}
                </div>

                {/* ACTIONS */}
                <div className="mt-auto pt-4 border-t flex justify-end gap-2">
                  {/* EDIT */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                          setEditingProject(project);
                          setPreviewImage(project.image);
                        }}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Edit Project</DialogTitle>
                      </DialogHeader>

                      <ProjectForm
                        project={editingProject}
                        previewImage={previewImage}
                        setPreviewImage={setPreviewImage}
                        onFileSelect={handleImagePreview}
                        onUpdate={handleUpdateProject}
                      />
                    </DialogContent>
                  </Dialog>

                  {/* DELETE */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="icon" variant="destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Delete this project?
                        </AlertDialogTitle>
                      </AlertDialogHeader>

                      <p className="text-sm text-slate-500">
                        This action cannot be undone.
                      </p>

                      <div className="flex justify-end gap-2 mt-4">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600"
                          onClick={() => handleDelete(project._id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>

              {/* BOTTOM ACCENT */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-slate-500">
            No Projects Posted yet
          </div>
        )}
      </div>
    </Card>
  );
}

/* -------------------------------------------- */
/* FORM COMPONENT */

function ProjectForm({
  project,
  previewImage,
  setPreviewImage,
  onFileSelect,
  onAdd,
  onUpdate,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      title: project?.title || "",
      description: project?.description || "",
      github: project?.github || "",
      demo: project?.demo || "",
      category: project?.category || "",
      designedBy: project?.designedBy || "",
      projectDate: project?.projectDate
        ? project.projectDate.split("T")[0]
        : "",
      keywords: project?.keywords?.join(", ") || "",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();

    // append text fields ONLY
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("github", data.github || "");
    formData.append("demo", data.demo || "");
    formData.append("category", data.category || "");
    formData.append("designedBy", data.designedBy || "");
    formData.append("projectDate", data.projectDate || "");
    formData.append("keywords", data.keywords || "");

    // ✅ Append image only if new one selected
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    try {
      if (project?._id) {
        const res = await axios.put(`/api/projects/${project._id}`, formData);
        onUpdate?.(res.data);

        toast.success("Project Updated");
      } else {
        const res = await axios.post("/api/projects", formData);
        onAdd?.(res.data);
        toast.success("Project Added");
        setPreviewImage(null);
        reset();
      }
    } catch (error) {
      console.error("Project save failed", error);
      toast.error("Error while add/edit project");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid md:grid-cols-2 gap-8 h-[85vh] overflow-y-auto"
    >
      {/* FORM */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Project Title
          </label>
          <Input
            placeholder="Enter project title"
            defaultValue={project?.title}
            {...register("title")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Project Description
          </label>
          <Textarea
            placeholder="Briefly describe the project"
            defaultValue={project?.description}
            {...register("description")}
            className="min-h-[120px]"
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <Input
            placeholder="e.g. Web App, SaaS, E-commerce"
            {...register("category")}
          />
        </div>

        {/* DESIGNED BY */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Designed & Developed By
          </label>
          <Input
            placeholder="Your name or Team name"
            {...register("designedBy")}
          />
        </div>

        {/* PROJECT DATE */}
        <div>
          <label className="block text-sm font-medium mb-1">Project Date</label>
          <Input
            type="text"
            placeholder="Project Date"
            {...register("projectDate", { required: true })}
          />
        </div>

        {/* KEYWORDS */}
        <div>
          <label className="block text-sm font-medium mb-1">Keywords</label>
          <Input
            placeholder="react, nextjs, mongodb (comma separated)"
            {...register("keywords")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            GitHub Repository URL
          </label>
          <Input
            placeholder="https://github.com/username/project"
            defaultValue={project?.github}
            {...register("github")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Live Demo URL
          </label>
          <Input
            placeholder="https://yourproject.com"
            defaultValue={project?.demo}
            {...register("demo")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Project Image
          </label>

          <Input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={(e) => {
              register("image").onChange(e);
              onFileSelect(e.target.files[0]);
            }}
            className="cursor-pointer"
          />
        </div>

        <Button
          className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? project
              ? "Updating..."
              : "Adding..."
            : project
            ? "Update Project"
            : "Save Project"}
        </Button>
      </div>

      {/* IMAGE PREVIEW */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Preview
        </p>

        <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 h-64">
          {previewImage ? (
            <>
              <div className="scroll-on-hover h-full">
                <div className="scroll-on-hover-inner">
                  <Image
                    src={previewImage}
                    alt="Preview"
                    width={400}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center px-6 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md mb-3">
                <ImageIcon className="h-7 w-7" />
              </div>

              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                No image selected
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Upload an image to see preview here
              </p>
            </div>
          )}
        </div>

        <p className="text-xs text-slate-500">Image preview scrolls on hover</p>
      </div>
    </form>
  );
}
