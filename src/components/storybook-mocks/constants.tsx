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

export const outlookResponse = {
    "@odata.context": "https://outlook.office.com/api/beta/$metadata#Me/Events(Subject,Organizer,Start,End)",
    "value": [
        {
            "@odata.id": "https://outlook.office.com/api/beta/Users('ddfcd489-628b-40d7-b48b-57002df800e5@1717622f-1d94-4d0c-9d74-709fad664b77')/Events('AAMkAGI28tEyDAAA=')",
            "@odata.etag": "W/\"nfZyf7VcrEKLNoU37KWlkQAA/LpDWw==\"",
            "Id": "AAMkAGI28tEyDAAA=",
            "Subject": "Scrum",
            "Start": {
                "DateTime": "2015-11-02T17:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": {
                "DateTime": "2015-11-02T17:30:00",
                "TimeZone": "Pacific Standard Time"
            },
            "Organizer": {
                "EmailAddress": {
                    "Name": "user0TestUser",
                    "Address": "user0@a830edad9050849NDA1.onmicrosoft.com"
                }
            }
        },
        {
            "@odata.id": "https://outlook.office.com/api/beta/Users('ddfcd489-628b-40d7-b48b-57002df800e5@1717622f-1d94-4d0c-9d74-709fad664b77')/Events('AAMkAGI28tEyCAAA=')",
            "@odata.etag": "W/\"nfZyf7VcrEKLNoU37KWlkQAA/LpDWg==\"",
            "Id": "AAMkAGI28tEyCAAA=",
            "Subject": "team lunch",
            "Start": {
                "DateTime": "2015-11-02T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": {
                "DateTime": "2015-11-03T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "Organizer": {
                "EmailAddress": {
                    "Name": "user0TestUser",
                    "Address": "user0@a830edad9050849NDA1.onmicrosoft.com"
                }
            }
        },
        {
            "@odata.id": "https://outlook.office.com/api/beta/Users('ddfcd489-628b-40d7-b48b-57002df800e5@1717622f-1d94-4d0c-9d74-709fad664b77')/Events('AAMkAGI2ADTG93AAA=')",
            "@odata.etag": "W/\"nfZyf7VcrEKLNoU37KWlkQAAA0x49w==\"",
            "Id": "AAMkAGI2G93AAA=",
            "Subject": "Weekly Meeting on Contoso Project",
            "Start": {
                "DateTime": "2014-10-13T21:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": {
                "DateTime": "2014-10-13T22:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "Organizer": {
                "EmailAddress": {
                    "Name": "Alex D",
                    "Address": "alexd@a830edad9050849NDA1.onmicrosoft.com"
                }
            }
        },
        {
            "@odata.id": "https://outlook.office.com/api/beta/Users('ddfcd489-628b-40d7-b48b-57002df800e5@1717622f-1d94-4d0c-9d74-709fad664b77')/Events('AAMkAGI2TG92AAA=')",
            "@odata.etag": "W/\"nfZyf7VcrEKLNoU37KWlkQAAA0x49g==\"",
            "Id": "AAMkAGI2TG92AAA=",
            "Subject": "Daily Team Meeting",
            "Start": {
                "DateTime": "2014-10-13T18:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": {
                "DateTime": "2014-10-13T18:30:00",
                "TimeZone": "Pacific Standard Time"
            },
            "Organizer": {
                "EmailAddress": {
                    "Name": "Alex D",
                    "Address": "alexd@a830edad9050849NDA1.onmicrosoft.com"
                }
            }
        },
        {
            "@odata.id": "https://outlook.office.com/api/beta/Users('ddfcd489-628b-40d7-b48b-57002df800e5@1717622f-1d94-4d0c-9d74-709fad664b77')/Events('AAMkAGI2TG91AAA=')",
            "@odata.etag": "W/\"nfZyf7VcrEKLNoU37KWlkQAAA0x47Q==\"",
            "Id": "AAMkAGI2TG91AAA=",
            "Subject": "Rob:Alex 1:1",
            "Start": {
                "DateTime": "2014-10-15T16:30:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": "2014-10-15T17:30:00Z",
            "Organizer": {
                "EmailAddress": {
                    "Name": "Alex D",
                    "Address": "alexd@a830edad9050849NDA1.onmicrosoft.com"
                }
            }
        },
        {
            "@odata.id": "https://outlook.office.com/api/beta/Users('ddfcd489-628b-40d7-b48b-57002df800e5@1717622f-1d94-4d0c-9d74-709fad664b77')/Events('AAMkAGI2TG90AAA=')",
            "@odata.etag": "W/\"nfZyf7VcrEKLNoU37KWlkQAAA0x46g==\"",
            "Id": "AAMkAGI2TG90AAA=",
            "Subject": "Thanksgiving Holiday",
            "Start": {
                "DateTime": "2015-11-26T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": {
                "DateTime": "2015-11-27T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "Organizer": {
                "EmailAddress": {
                    "Name": "Alex D",
                    "Address": "alexd@a830edad9050849NDA1.onmicrosoft.com"
                }
            }
        },
        {
            "@odata.id": "https://outlook.office.com/api/beta/Users('ddfcd489-628b-40d7-b48b-57002df800e5@1717622f-1d94-4d0c-9d74-709fad664b77')/Events('AAMkAGI2TG9zAAA=')",
            "@odata.etag": "W/\"nfZyf7VcrEKLNoU37KWlkQAAA0x46Q==\"",
            "Id": "AAMkAGI2TG9zAAA=",
            "Subject": "Thanksgiving Holiday",
            "Start": {
                "DateTime": "2014-11-27T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": {
                "DateTime": "2014-11-28T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "Organizer": {
                "EmailAddress": {
                    "Name": "Alex D",
                    "Address": "alexd@a830edad9050849NDA1.onmicrosoft.com"
                }
            }
        },
        {
            "@odata.id": "https://outlook.office.com/api/beta/Users('ddfcd489-628b-40d7-b48b-57002df800e5@1717622f-1d94-4d0c-9d74-709fad664b77')/Events('AAMkAGI2TG9yAAA=')",
            "@odata.etag": "W/\"nfZyf7VcrEKLNoU37KWlkQAAA0x49Q==\"",
            "Id": "AAMkAGI2TG9yAAA=",
            "Subject": "New Year's Day Holiday",
            "Start": {
                "DateTime": "2015-01-01T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": {
                "DateTime": "2015-01-02T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "Organizer": {
                "EmailAddress": {
                    "Name": "Alex D",
                    "Address": "alexd@a830edad9050849NDA1.onmicrosoft.com"
                }
            }
        },
        {
            "@odata.id": "https://outlook.office.com/api/beta/Users('ddfcd489-628b-40d7-b48b-57002df800e5@1717622f-1d94-4d0c-9d74-709fad664b77')/Events('AAMkAGI2TG9xAAA=')",
            "@odata.etag": "W/\"nfZyf7VcrEKLNoU37KWlkQAAA0x45w==\"",
            "Id": "AAMkAGI2TG9xAAA=",
            "Subject": "Christmas Holiday",
            "Start": {
                "DateTime": "2014-12-25T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": {
                "DateTime": "2014-12-26T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "Organizer": {
                "EmailAddress": {
                    "Name": "Alex D",
                    "Address": "alexd@a830edad9050849NDA1.onmicrosoft.com"
                }
            }
        }
    ]
}
