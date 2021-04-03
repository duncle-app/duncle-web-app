import { v4 as uuidv4 } from "uuid";
import { dateNowIso } from "./dateUtil";

export const createNewNote = (message: string, author: string) => ({
  id: uuidv4(),
  message,
  dateCreated: dateNowIso(),
  author,
});
