"use server";
import { supabase } from "@/src/libs/connectSupabase";
import { z } from "zod";
import { auth } from "@/auth";
import { TaskType } from "@/src/types/type";
import { revalidatePath } from "next/cache";
import { FilterStatusType } from "@/src/types/type";

export async function deleteTask(id: string) {
  const user = await auth();
  const userEmail = user?.user?.email;

  const { error } = await supabase
    .from("todo-list")
    .delete()
    .eq("id", id)
    .eq("user", userEmail);

  if (error) {
    throw new Error(error.message);
  }
  revalidatePath("/dashboard");
  return "Successfully Deleted Task";
}

export async function getTasks(
  status?: FilterStatusType,
  order?: "asc" | "desc"
) {
  const user = await auth();
  const userEmail = user?.user?.email;

  let query = supabase.from("todo-list").select("*").eq("user", userEmail);

  if (status !== "todos" && status) {
    query = query.eq("status", status);
  }
  if (!order || order == "desc") {
    query = query.order("created_at", { ascending: false });
  }
  if (order === "asc") {
    query = query.order("created_at", { ascending: true });
  }

  const { data, error } = await query;
  if (error) {
    console.error(error);
    return [];
  }
  return data as TaskType[];
}

const taskFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1).nullable(),
  status: z.enum(["pending", "done", "in-progress"]),
});

export async function addTaskToDatabase(formData: FormData) {
  const validatedFields = taskFormSchema.safeParse({
    title: formData.get("title-task"),
    description: formData.get("description-task"),
    status: formData.get("status-task"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Task.",
    };
  }
  const user = await auth();

  if (!user) {
    return {
      errors: ["User Not Found"],
      message: "Missing Fields. Failed to Create Task.",
    };
  }
  const { data, error } = await supabase
    .from("todo-list")
    .insert([
      {
        user: user?.user?.email,
        title: validatedFields.data.title,
        description: validatedFields.data.description,
        status: validatedFields.data.status,
      },
    ])
    .select();
  if (error) {
    return {
      errors: error.message,
      message: "Failed to Create Task.",
    };
  }
  revalidatePath("/dashboard");
  return {
    data,
    message: "Successfully Created Task.",
  };
}
