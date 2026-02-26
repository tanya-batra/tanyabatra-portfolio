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
import { Plus, Pencil, Trash2, MessageSquareQuote } from "lucide-react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Loader from "@/components/loader";

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState([]);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTestimonialsData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/testimonials");
        setTestimonials(res.data);
      } catch (error) {
        console.log("Error while fething testimonials: ", error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonialsData();
  }, []);

  const handleAdd = (data) => {
    setTestimonials((prev) => [data, ...prev]);
  };

  const handleUpdate = (data) => {
    setTestimonials((prev) => prev.map((t) => (t._id === data._id ? data : t)));
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/testimonials/${id}`);
    setTestimonials((prev) => prev.filter((t) => t._id !== id));
    toast.success("Testimonials Deleted");
  };
  if (loading) return <Loader text="Loading Testimonials..." />;
  return (
    <Card className="p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Testimonials
          </h2>
          <p className="text-sm text-slate-500">
            Manage client feedback & reviews
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Plus className="h-4 w-4 mr-1" />
              Add Testimonial
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>Add Testimonial</DialogTitle>
            </DialogHeader>

            <TestimonialForm onAdd={handleAdd} />
          </DialogContent>
        </Dialog>
      </div>

      {/* TESTIMONIAL GRID */}
      {testimonials.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl border bg-white dark:bg-slate-900 p-6 hover:shadow-xl transition-all"
            >
              {/* ACTIONS */}
              <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => setEditingTestimonial(item)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-xl">
                    <DialogHeader>
                      <DialogTitle>Edit Testimonial</DialogTitle>
                    </DialogHeader>

                    <TestimonialForm
                      testimonial={editingTestimonial}
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
                        Delete this testimonial?
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

              {/* QUOTE ICON */}
              <MessageSquareQuote className="h-8 w-8 text-blue-600 mb-4 opacity-80" />

              {/* MESSAGE */}
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                “{item.content}”
              </p>

              {/* CLIENT */}
              <div className="border-t pt-4">
                <p className="font-semibold leading-tight">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-500">No Testimonials yet</p>
        </div>
      )}
    </Card>
  );
}

/* -------------------------------- */
/* FORM */

function TestimonialForm({ testimonial, onAdd, onUpdate }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: testimonial?.name || "",
      role: testimonial?.role || "",
      content: testimonial?.content || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      if (testimonial?._id) {
        const res = await axios.put(
          `/api/testimonials/${testimonial._id}`,
          data
        );
        onUpdate?.(res.data);
        toast.success("Testimonial updated");
      } else {
        const res = await axios.post("/api/testimonials", data);
        onAdd?.(res.data);
        toast.success("Testimonial added");
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
        <label className="text-sm font-medium">Client Name</label>
        <Input
          placeholder="Enter client name"
          defaultValue={testimonial?.name}
          {...register("name", { required: true })}
        />
      </div>

      <div>
        <label className="text-sm font-medium">Role / Profession</label>
        <Input
          placeholder="Startup Founder, Business Owner..."
          defaultValue={testimonial?.role}
          {...register("role", { required: true })}
        />
      </div>

      <div>
        <label className="text-sm font-medium">Testimonial Message</label>
        <Textarea
          placeholder="Write client feedback..."
          defaultValue={testimonial?.content}
          className="min-h-[120px]"
          {...register("content", { required: true })}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        {isSubmitting
          ? testimonial
            ? "Updating..."
            : "Saving..."
          : testimonial
          ? "Update Testimonial"
          : "Save Testimonial"}
      </Button>
    </form>
  );
}
