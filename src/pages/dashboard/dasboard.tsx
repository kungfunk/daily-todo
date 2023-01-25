import { useEffect, useState } from "react";
import { useSession } from "../../hooks/useSession";
import { Task } from "../../lib/types";
import { supabase } from "../../lib/supabase";
import { Button } from "../../components/button";
import { TaskView } from "../../components/task-view";
import { generateSlug } from "../../lib/slug";

export const Dashboard = () => {
  const session = useSession();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskData, setNewTaskData] = useState({
    description: "",
    type: "work",
    is_closed: false,
  });

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

  const handleLogout = async () => {
    supabase.auth.signOut().catch(console.error);
  };

  const handleAddTask = async (e: any) => {
    e.preventDefault();

    await supabase.from("tasks").insert({
      ...newTaskData,
      user_id: session!.user.id,
      slug: generateSlug(),
    });

    // just for testing
    loadTasks();
  };

  return (
    <>
      <div>
        <a onClick={handleLogout}>Logout</a>
      </div>
      <div>
        {tasks.map((task) => (
          <TaskView
            key={task.slug}
            slug={task.slug}
            description={task.description}
            type={task.type}
          />
        ))}
      </div>
      <form onSubmit={handleAddTask}>
        <textarea
          id="description"
          name="description"
          value={newTaskData.description}
          onChange={(e) =>
            setNewTaskData({ ...newTaskData, description: e.target.value })
          }
        ></textarea>
        <select
          id="type"
          name="type"
          value={newTaskData.type}
          onChange={(e) =>
            setNewTaskData({ ...newTaskData, type: e.target.value })
          }
        >
          <option value="LIFE">life</option>
          <option value="WORK">work</option>
        </select>
        <Button type="submit">Add task</Button>
      </form>
    </>
  );
};
