"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Pencil, Trash2 } from "lucide-react";

import axios from "axios";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import Loader from "@/components/loader";

export default function SkillsAdmin() {
  const [skills, setSkills] = useState([]);
  const [editingSkill, setEditingSkill] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSkillData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/skills");
        setSkills(res.data);
      } catch (error) {
        console.log("Error while fetching skill data");
      } finally {
        setLoading(false);
      }
    };

    loadSkillData();
  }, []);

  const handleAdd = (data) => {
    setSkills((prev) => [data, ...prev]);
  };

  const handleUpdate = (data) => {
    setSkills((prev) => prev.map((s) => (s._id === data._id ? data : s)));
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/skills/${id}`);
    setSkills((prev) => prev.filter((s) => s._id !== id));
    toast.success("Skill Deleted");
  };
  if (loading) return <Loader text="Loading Skills..." />;
  return (
    <Card className="p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <p className="text-sm text-slate-500">
            Manage your technical skill set
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Plus className="h-4 w-4 mr-1" />
              Add Skill
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>Add Skill</DialogTitle>
            </DialogHeader>
            <SkillForm onAdd={handleAdd} />
          </DialogContent>
        </Dialog>
      </div>

      {/* SKILLS GRID */}
      {skills.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="group relative rounded-xl border bg-white dark:bg-slate-900 p-4 hover:shadow-lg transition-all"
              >
                {/* ACTIONS */}
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => setEditingSkill(skill)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-xl">
                      <DialogHeader>
                        <DialogTitle>Edit Skill</DialogTitle>
                      </DialogHeader>
                      <SkillForm skill={editingSkill} onUpdate={handleUpdate} />
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
                        <AlertDialogTitle>Delete this skill?</AlertDialogTitle>
                      </AlertDialogHeader>

                      <p className="text-sm text-slate-500">
                        This action cannot be undone.
                      </p>

                      <div className="flex justify-end gap-2 mt-4">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600"
                          onClick={() => handleDelete(skill._id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>

                {/* NAME */}
                <p className="text-sm font-semibold text-center">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>No Skills Added yet</p>
        </div>
      )}
    </Card>
  );
}

/* -------------------------------- */
/* FORM */

function SkillForm({ skill, onAdd, onUpdate }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: skill?.name || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      if (skill?._id) {
        const res = await axios.put(`/api/skills/${skill._id}`, data);
        onUpdate?.(res.data);
        toast.success("Skill updated");
      } else {
        const res = await axios.post("/api/skills", data);
        onAdd?.(res.data);
        toast.success("Skill added");
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save skill");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Skill Name</label>
        <Input
          defaultValue={skill?.name}
          {...register("name", { required: true })}
          placeholder="e.g. React, MongoDB"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        {isSubmitting
          ? skill
            ? "Updating..."
            : "Saving..."
          : skill
          ? "Update Skill"
          : "Save Skill"}
      </Button>
    </form>
  );
}
