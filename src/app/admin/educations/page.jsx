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
  GraduationCap,
  Calendar,
  School,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import Loader from "@/components/loader";

/* ---------------- PAGE ---------------- */

export default function EducationAdmin() {
  const [education, setEducation] = useState([]);
  const [editingEdu, setEditingEdu] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadEducation = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/education");
        setEducation(res.data);
      } catch (error) {
        console.log("Error while fetching educations: ", error);
      } finally {
        setLoading(false);
      }
    };
    loadEducation();
  }, []);

  const handleAdd = (data) => {
    setEducation((prev) => [data, ...prev]);
  };

  const handleUpdate = (data) => {
    setEducation((prev) => prev.map((e) => (e._id === data._id ? data : e)));
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/education/${id}`);
    setEducation((prev) => prev.filter((e) => e._id !== id));
    toast.success("Education Deleted");
  };

  if (loading) return <Loader text="Loading Educations..." />;
  return (
    <Card className="p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <p className="text-sm text-slate-500">
            Manage academic qualifications & learning journey
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Plus className="h-4 w-4 mr-1" />
              Add Education
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>Add Education</DialogTitle>
            </DialogHeader>

            <EducationForm onAdd={handleAdd} />
          </DialogContent>
        </Dialog>
      </div>

      {/* EDUCATION LIST */}
      {education.length > 0 ? (
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl border bg-white dark:bg-slate-900 p-6 transition-all hover:shadow-xl"
            >
              {/* ACTIONS */}
              <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => setEditingEdu(item)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-xl">
                    <DialogHeader>
                      <DialogTitle>Edit Education</DialogTitle>
                    </DialogHeader>

                    <EducationForm
                      education={editingEdu}
                      onUpdate={handleUpdate}
                    />
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="icon"
                      variant="destructive"
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Delete this education entry?
                      </AlertDialogTitle>
                    </AlertDialogHeader>

                    <p className="text-sm text-slate-500">
                      This action cannot be undone.
                    </p>

                    <div className="flex justify-end gap-2 mt-4">
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-red-600"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              {/* CONTENT */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold leading-tight">{item.degree}</h3>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mt-1">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>No Education Added yet</p>
        </div>
      )}
    </Card>
  );
}

/* ---------------- FORM ---------------- */

function EducationForm({ education, onAdd, onUpdate }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      degree: education?.degree || "",
      period: education?.period || "",
      description: education?.description || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      if (education?._id) {
        const res = await axios.put(`/api/education/${education._id}`, data);
        onUpdate?.(res.data);
        toast.success("Education Updated");
      } else {
        const res = await axios.post("/api/education", data);
        onAdd?.(res.data);
        toast.success("Education Added");
        reset();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Degree / Qualification</label>
        <Input
          defaultValue={education?.degree}
          {...register("degree", { required: true })}
          placeholder="Bachelor of Science in Computer Science"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Duration</label>
        <Input
          defaultValue={education?.period}
          {...register("period", { required: true })}
          placeholder="2021 - 2024"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Description</label>
        <Textarea
          defaultValue={education?.description}
          {...register("description", { required: true })}
          placeholder="Brief summary of studies, focus areas, achievements..."
          className="min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        {isSubmitting
          ? education
            ? "Updating..."
            : "Saving..."
          : education
          ? "Update Education"
          : "Save Education"}
      </Button>
    </form>
  );
}
