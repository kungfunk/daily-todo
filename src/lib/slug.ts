import { customAlphabet } from "nanoid";

export const generateSlug = customAlphabet(
  "1234567890abcdefghijknmlopqrstuvwxyz",
  10
);
