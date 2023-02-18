import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
import { ImgHTMLAttributes } from "react";

type AvatarProps = {
  seed: string;
  size?: "small" | "big";
} & ImgHTMLAttributes<HTMLImageElement>;

export const Avatar = ({ seed, size = "small", ...rest }: AvatarProps) => {
  const sizeInPx = size === "small" ? 40 : 100;
  const avatar = createAvatar(funEmoji, {
    seed,
    radius: 10,
    size: sizeInPx,
  });

  const svg = avatar.toDataUriSync();

  return <img {...rest} width={sizeInPx} height={sizeInPx} src={svg} />;
};
