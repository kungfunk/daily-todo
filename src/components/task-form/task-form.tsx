import { useState } from "react";
import { useSession } from "../../hooks/useSession";
import { generateSlug } from "../../lib/slug";
import { supabase } from "../../lib/supabase";
import { Button } from "../button";

export const TaskForm = (): JSX.Element => {
  const session = useSession();
  const [newTaskData, setNewTaskData] = useState({
    description: "",
    type: "work",
    is_closed: false,
  });

  const handleAddTask = async (e: any) => {
    e.preventDefault();

    await supabase.from("tasks").insert({
      ...newTaskData,
      user_id: session!.user.id,
      slug: generateSlug(),
    });
  };

  return (
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
  );
};
