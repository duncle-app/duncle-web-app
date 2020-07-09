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

export const newLibrary2: Library = new Library(
  "Northwestern Side Elementary",
  "K - 2",
  "500",
  "Hennepin City",
  "MN",
  "55408",
  "1200 east road",
    new Contact(
        "Steve Duncan",
        "608-847-5616",
        "bluehman@maustonschools.org"
    ),
    new User(
        "doggie@gmail.com",
        "secret",
        "Doggie",
        "Hudson",
        "id",
        "rev"
    )
);


