import { Library } from "../../model";
import Contact from "../../model/contact";
import User from "../../model/user";

export const newLibrary: Library = new Library(
  "West Side Elementary",
  "K - 2",
  "100",
  "Mr. Sir City",
  "MN",
  "Mr.Sir",
  "111111",
    new Contact(
        "Juneau Mauston",
        "608-847-5616",
        "bluehman@maustonschools.org"
    ),
    new User(
        "mrsir@gmail.com",
        "secret",
        "Mr",
        "Sir",
        "id",
        "rev"
    )

);
