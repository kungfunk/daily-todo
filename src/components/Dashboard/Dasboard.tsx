import { useEffect, useState } from "react";
import { useSession } from "../../hooks/useSession";
import { Task } from "../../interfaces/tasks";
import { supabase } from "../../lib/supabase";

export const Dashboard = () => {
  const session = useSession();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskData, setNewTaskData] = useState({
    description: "",
    type: "LIFE",
    status: "OPEN",
  });

  const loadTasks = async () => {
    const { data } = await supabase.from("tasks").select<"*", Task>("*");
    setTasks(data || []);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleLogout = async () => {
    supabase.auth.signOut().catch(console.error);
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    await supabase
      .from("tasks")
      .insert({ ...newTaskData, user_id: session?.user.id });

    // just for testing
    loadTasks();
  };

  const handleDelete = async (id: Task["id"]) => {
    await supabase.from("tasks").delete().eq("id", id);
    loadTasks();
  };

  return (
    <>
      <p>dashboard</p>
      <div>
        {tasks.map((task) => (
          <p key={task.id}>
            {task.description}{" "}
            <button onClick={() => handleDelete(task.id)}>delete</button>
          </p>
        ))}
      </div>
      <button onClick={() => handleLogout()}>logout</button>
      <form onSubmit={handleOnSubmit}>
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
        <button type="submit">Add task</button>
      </form>
    </>
  );
};
