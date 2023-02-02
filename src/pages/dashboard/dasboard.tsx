import { useEffect, useState } from "react";
import { Task } from "../../lib/types";
import { supabase } from "../../lib/supabase";
import { TaskView } from "../../components/task-view";
import { TaskForm } from "../../components/task-form";
import { LogoutButton } from "../../components/logout-button";
import { TaskList } from "../../components/task-list";

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
      <div>
        <LogoutButton />
      </div>
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
