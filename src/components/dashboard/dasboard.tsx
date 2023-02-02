import { useEffect, useState } from "react";
import { Task } from "../../lib/types";
import { supabase } from "../../lib/supabase";
import { TaskView } from "../task-view";
import { TaskForm } from "../task-form";
import { TaskList } from "../task-list";

export const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const { data } = await supabase
      .from("tasks")
      .select("*")
      .eq("is_closed", false);
    setTasks(data || []);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <TaskList>
        {tasks.map((task) => (
          <TaskView
            key={task.slug}
            slug={task.slug}
            description={task.description}
            type={task.type}
          />
        ))}
      </TaskList>
      <TaskForm />
    </>
  );
};
