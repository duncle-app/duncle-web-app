import event from "./event";

export default interface User {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  dateCreated: string;
  dateUpdated: string;
  role: "admin" | "user";
  events: event[];
}
