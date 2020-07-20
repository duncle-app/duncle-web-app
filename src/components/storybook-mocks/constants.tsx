import {Library} from "../../model";
import {NoteProps} from "../atoms/Note/Note";
import {dateNowIso, readableDate} from "../../utils/dateUtil";

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

export const newNote: NoteProps = {
    message: "Bought $5,050 and wants more where that came from.",
    dateCreated: readableDate(dateNowIso()),
    author: "Mr Sir"
}

export const newNotes: NoteProps[] = [
    {
        message: "Personal foul on #69 - he was giving him the business",
        dateCreated: readableDate(dateNowIso()),
        author: "Mr. Sir"
    },
    {
        message: "Attempted to call person, but there was no answer",
        dateCreated: readableDate(dateNowIso()),
        author: "Terry"
    },
    {
        message: "Bought $5,050 and wants more where that came from.",
        dateCreated: readableDate(dateNowIso()),
        author: "Mr Sir"
    },
    {
        message: "Significant understanding likes to have a shower in the morning.",
        dateCreated: readableDate(dateNowIso()),
        author: "Jeff"
    },
    {
        message: "The legend of the raven's roar visits Japan in the winter.",
        dateCreated: readableDate(dateNowIso()),
        author: "Jeff"
    },
    {
        message: "Nothing of importance gambles with lives, happiness, and even destiny itself!",
        dateCreated: readableDate(dateNowIso()),
        author: "Terry"
    },
    {
        message: "Lonely Henry is interdependant on the relatedness of motivation, subcultures, and management.",
        dateCreated: readableDate(dateNowIso()),
        author: "Mr Sir"
    },
]
