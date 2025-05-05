export interface TaskType {
  id: string;
  title: string;
  description?: string;
  status: "pending" | "done" | "in-progress";
  created_at: number;
}

export type FilterStatusType = "todos" | "pending" | "in-progress" | "done";
