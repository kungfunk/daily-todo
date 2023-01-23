export interface Task {
  id: string;
  user_id: string;
  created_at: string;
  modified_at: string;
  slug: string;
  description: string;
  status: "OPEN" | "CLOSED";
  type: "WORK" | "LIFE";
}
