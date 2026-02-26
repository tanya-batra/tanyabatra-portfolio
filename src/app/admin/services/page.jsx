"use client";

import { useEffect, useState } from "react";

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
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Pencil,
  Trash2,
  X,

  // Development
  Code,
  Server,
  Laptop,
  Shield,
  Settings,
  Zap,

  // Business / SaaS
  Briefcase,
  ShoppingCart,
  Upload,
  Globe,
  Layers,
  Database,
  Cloud,
  Monitor,
  Cpu,
  Lock,
  Rocket,
  Workflow,
  Wrench,
  Smartphone,
  Palette,
  BarChart3,
  Users,
} from "lucide-react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Loader from "@/components/loader";

/* ICON OPTIONS */
const icons = {
  // Core Dev
  Code,
  Server,
  Laptop,
  Database,
  Cloud,
  Cpu,
  Monitor,

  // Security / Auth
  Shield,
  Lock,

  // APIs / Tools
  Settings,
  Workflow,
  Wrench,

  // Performance / Growth
  Zap,
  Rocket,
  BarChart3,

  // Business / SaaS
  Briefcase,
  Layers,
  Users,

  // Ecommerce / Products
  ShoppingCart,

  // Mobile / UI
  Smartphone,
  Palette,

  // Deployment
  Upload,
  Globe,
};

export default function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadServiceData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/services");
        setServices(res.data);
      } catch (error) {
        console.log("Error while fetching services: ", error);
      } finally {
        setLoading(false);
      }
    };

    loadServiceData();
  }, []);

  const handleAdd = (data) => {
    setServices((prev) => [data, ...prev]);
  };

  const handleUpdate = (data) => {
    setServices((prev) => prev.map((s) => (s._id === data._id ? data : s)));
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/services/${id}`);
    setServices((prev) => prev.filter((s) => s._id !== id));
    toast.success("Services Deleted");
  };
  if (loading) return <Loader text="Loading Services..." />;
  return (
    <div className="p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Services</h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Plus className="h-4 w-4" />
              Add Service
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add Service</DialogTitle>
            </DialogHeader>

            <ServiceForm onAdd={handleAdd} />
          </DialogContent>
        </Dialog>
      </div>

      {/* TABLE */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.length > 0 ? (
          services.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <Card
                key={index}
                className="group relative border bg-white dark:bg-slate-900 hover:shadow-lg transition"
              >
                {/* HEADER */}
                <CardHeader className="flex flex-row items-start gap-4 pb-3">
                  {/* ICON */}
                  <div
                    className={`relative z-10 mb-6 flex items-center justify-center
            h-14 w-14 rounded-2xl
            bg-gradient-to-br from-[#eef2ff] to-[#e0e7ff]
            ring-1 ring-indigo-200/60
            group-hover:from-[#496cbf]/20 group-hover:to-indigo-400/20
            transition-all duration-500`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-base leading-tight">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                {/* CONTENT */}
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                    {service.description}
                  </p>
                </CardContent>

                {/* ACTIONS */}
                <CardFooter className="flex justify-end gap-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => setEditingService(service)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Edit Service</DialogTitle>
                      </DialogHeader>
                      <ServiceForm
                        service={editingService}
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
                          Delete this service?
                        </AlertDialogTitle>
                      </AlertDialogHeader>

                      <p className="text-sm text-slate-500">
                        This action cannot be undone.
                      </p>

                      <div className="flex justify-end gap-2 mt-4">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600"
                          onClick={() => handleDelete(service._id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <div className="col-span-full py-10 text-center text-slate-500">
            No Services Posted yet
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------- */
/* FORM */

function ServiceForm({ service, onAdd, onUpdate }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      title: service?.title || "",
      description: service?.description || "",
      icon: service?.icon || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      if (service?._id) {
        const res = await axios.put(`/api/services/${service._id}`, data);
        onUpdate?.(res.data);
        toast.success("Service updated");
      } else {
        const res = await axios.post("/api/services", data);
        onAdd?.(res.data);
        toast.success("Service added");
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save service");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div>
        <label className="text-sm font-medium">Service Title</label>
        <Input
          defaultValue={service?.title}
          placeholder="e.g. Front-End Development"
          {...register("title", { required: true })}
        />
      </div>

      <div>
        <label className="text-sm font-medium">Description</label>
        <Textarea
          defaultValue={service?.description}
          placeholder="Briefly describe this service..."
          rows={5}
          {...register("description", { required: true })}
        />
      </div>

      <div>
        <label className="text-sm font-medium">Icon</label>
        <Select
          defaultValue={service?.icon}
          onValueChange={(val) => setValue("icon", val)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose an icon" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(icons).map((icon) => {
              const I = icons[icon];
              return (
                <SelectItem key={icon} value={icon}>
                  <div className="flex items-center gap-2">
                    <I className="h-4 w-4" />
                    {icon}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600"
        >
          {isSubmitting
            ? service
              ? "Updating..."
              : "Saving..."
            : service
            ? "Update Service"
            : "Save Service"}
        </Button>
      </div>
    </form>
  );
}
