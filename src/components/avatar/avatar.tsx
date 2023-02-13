import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
import classes from "./avatar.module.css";

interface AvatarProps {
  seed: string;
  size?: "small" | "big";
}

export const Avatar = ({ seed, size = "small" }: AvatarProps) => {
  const avatar = createAvatar(funEmoji, {
    seed,
    radius: 10,
    size: size === "small" ? 40 : 200,
  });

  const svg = avatar.toDataUriSync();

  return <img className={classes.avatar} src={svg} alt={seed} title={seed} />;
};
