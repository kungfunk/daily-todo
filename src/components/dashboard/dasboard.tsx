import classes from "./dashboard.module.css";
import { UserMenu } from "../user-menu";
import { FilterMenu } from "../filter-menu";
import { TaskList } from "../task-list";
import { useParams } from "react-router-dom";
import { isValidTaskGroup } from "../../hooks/use-get-tasks";

export const Dashboard = () => {
  const { group } = useParams();

  if (!isValidTaskGroup(group)) {
    throw new Error("Wrong URL");
  }

  return (
    <main className={classes.dashboard}>
      <UserMenu />
      <FilterMenu />
      <div className={classes.content}>
        <TaskList group={group} />
      </div>
    </main>
  );
};
