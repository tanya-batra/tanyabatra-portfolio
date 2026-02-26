"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Plus,
  Pencil,
  Trash2,
  Briefcase,
  Calendar,
  Building2,
} from "lucide-react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Loader from "@/components/loader";

export default function ExperienceAdmin() {
  const [experiences, setExperiences] = useState([]);
  const [editingExperience, setEditingExperience] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadExperiencesData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/experiences");
        setExperiences(res.data);
      } catch (error) {
        console.log("Error while fetching experiences: ", error);
      } finally {
        setLoading(false);
      }
    };

    loadExperiencesData();
  }, []);

  const handleAdd = (data) => {
    setExperiences((prev) => [data, ...prev]);
  };

  const handleUpdate = (data) => {
    setExperiences((prev) => prev.map((e) => (e._id === data._id ? data : e)));
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/skills/${id}`);
    setExperiences((prev) => prev.filter((e) => e._id !== id));
    toast.success("Experience Deleted");
  };

  if (loading) return <Loader text="Loading Experiences..." />;

  return (
    <Card className="p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-slate-500">
            Manage your professional journey
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Plus className="h-4 w-4 mr-1" />
              Add Experience
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>Add Experience</DialogTitle>
            </DialogHeader>
            <ExperienceForm onAdd={handleAdd} />
          </DialogContent>
        </Dialog>
      </div>

      {/* EXPERIENCE LIST */}
      <div className="space-y-6 relative before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-700">
        {experiences.length > 0 ? (
          experiences.map((exp, index) => (
            <div key={index} className="relative pl-14 group transition-all">
              {/* TIMELINE DOT */}
              <div className="absolute left-2 top-5 h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <Briefcase className="h-3.5 w-3.5 text-white" />
              </div>

              {/* CARD */}
              <Card className="p-5 hover:shadow-lg transition border">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {exp.company}
                      </span>

                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 line-clamp-2">
                      {exp.description}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => setEditingExperience(exp)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>

                      <DialogContent className="max-w-xl">
                        <DialogHeader>
                          <DialogTitle>Edit Experience</DialogTitle>
                        </DialogHeader>
                        <ExperienceForm
                          experience={editingExperience}
                          onUpdate={handleUpdate}
                        />
                      </DialogContent>
                    </Dialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="icon" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Delete this experience?
                          </AlertDialogTitle>
                        </AlertDialogHeader>

                        <p className="text-sm text-slate-500">
                          This action cannot be undone.
                        </p>

                        <div className="flex justify-end gap-2 mt-4">
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-red-600"
                            onClick={() => handleDelete(exp._id)}
                          >
                            Delete
                          </AlertDialogAction>
                        </div>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </Card>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center">
            <p>No Experience Posted yet</p>
          </div>
        )}
      </div>
    </Card>
  );
}

/* -------------------------------- */
/* FORM */

function ExperienceForm({ experience, onAdd, onUpdate }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      title: experience?.title || "",
      company: experience?.company || "",
      period: experience?.period || "",
      description: experience?.description || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      if (experience?._id) {
        const res = await axios.put(`/api/experiences/${experience._id}`, data);
        onUpdate?.(res.data);
        toast.success("Experience updated");
      } else {
        const res = await axios.post("/api/experiences", data);
        onAdd?.(res.data);
        toast.success("Experience added");
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save experience");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Job Title</label>
        <Input
          defaultValue={experience?.title}
          {...register("title", { required: true })}
          placeholder="Full Stack Developer"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Company</label>
        <Input
          defaultValue={experience?.company}
          {...register("company", { required: true })}
          placeholder="Company name"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Period</label>
        <Input
          defaultValue={experience?.period}
          {...register("period", { required: true })}
          placeholder="Jan 2024 – Present"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Description</label>
        <Textarea
          rows={4}
          defaultValue={experience?.description}
          placeholder="Describe your responsibilities and achievements"
          {...register("description", { required: true })}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        {isSubmitting
          ? experience
            ? "Updating..."
            : "Saving..."
          : experience
          ? "Update Experience"
          : "Save Experience"}
      </Button>
    </form>
  );
}
