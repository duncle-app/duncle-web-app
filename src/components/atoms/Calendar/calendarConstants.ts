import moment from "moment";
import {OutlookResponse} from "./FullCalendar";

export const events = [
    {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Two day event",
    },
    {
        start: moment().add(2, "days").toDate(),
        end: moment().add(4, "days").toDate(),
        title: "3 day event, after the two day event",
    },
]

export const outlookResponse: OutlookResponse = {
    "@odata.context": "https://outlook.office.com/api/beta/$metadata#Me/Events(Subject,Organizer,Start,End)",
    "value": [
        {
            "@odata.id": "https://outlook.office.com/api/beta/Users('ddfcd489-628b-40d7-b48b-57002df800e5@1717622f-1d94-4d0c-9d74-709fad664b77')/Events('AAMkAGI28tEyDAAA=')",
            "@odata.etag": "W/\"nfZyf7VcrEKLNoU37KWlkQAA/LpDWw==\"",
            "Id": "AAMkAGI28tEyDAAA=",
            "Subject": "Scrum",
            "Start": {
                "DateTime": "2020-07-18T17:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": {
                "DateTime": "2020-07-18T17:30:00",
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
                "DateTime": "2020-07-18T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "End": {
                "DateTime": "2020-07-23T00:00:00",
                "TimeZone": "Pacific Standard Time"
            },
            "Organizer": {
                "EmailAddress": {
                    "Name": "user0TestUser",
                    "Address": "user0@a830edad9050849NDA1.onmicrosoft.com"
                }
            }
        },
    ]