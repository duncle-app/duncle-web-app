import { Library } from "../../model";
import User from "../../model/user";

export const newLibrary: Library = {
    libraryName: "West Side Elementary",
    librarian: "K - 2",
    assistant: "Mr. Sir",
    street: "Mr. Sir City",
    district: "District",
    city: "City",
    county: "County",
    state: "Wisconsin",
    zip: "54545",
    email: "se@gg.com",
    phoneNumber: 1112223333,
    level: "K - 4",
    size: 100,
    dateUpdated: "2020-07-14T22:04:54+0000",
    assignedRep: "Mr. Sir",
}


export const newLibrary2: Library = {
    libraryName: "Northwest Elementary",
    librarian: "K only",
    assistant: "Mrs. Thicc",
    street: "Mr. Sir City",
    district: "OP District",
    city: "Target Corp. City",
    county: "TGT Lane",
    state: "Wisconsin",
    zip: "54545",
    email: "this.is.a.long.email@gmail.com",
    phoneNumber: 1112223333,
    level: "K - 4",
    size: 9000,
    dateUpdated: "2020-07-22T22:04:54+0000",
    assignedRep: "Terry",
}

export const NoLibrary: Library = {
    libraryName: "Default Library",
    librarian: "Default",
    assistant: "Default",
    street: "Default",
    district: "Default",
    city: "Default",
    county: "Default",
    state: "Default",
    zip: "Default",
    email: "Default",
    phoneNumber: 1112223333,
    level: "Default",
    size: 0,
    dateUpdated: "2000-00-00T00:00:00+0000",
    assignedRep: "Default",
}
