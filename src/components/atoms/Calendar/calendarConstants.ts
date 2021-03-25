import moment from "moment";
// import {CalendarEvent} from "./FullCalendar";

export const events = [
  {
    start: moment().toISOString(),
    end: moment().add(1, "days").toDate(),
    title: "Iso date",
  },
  {
    start: moment().add(2, "days").toDate(),
    end: moment().add(4, "days").toDate(),
    title: "3 day event, after the two day event",
  },
];

// https://graph.microsoft.com/v1.0/me/events?$select=subject,organizer,start,end
export const outlookResponse: OutlookResponse = {
  "@odata.context":
    "https://graph.microsoft.com/v1.0/$metadata#users('sergnioa%40gmail.com')/events(subject,organizer,start,end)",
  value: [
    {
      "@odata.etag": 'W/"cu93d2JG20qH6ZI0k1tbIwABhOPRGA=="',
      id:
        "AQMkADAwATMwMAItMTljZC1iMTRjLTAwAi0wMAoARgAAA9ti9fRLfGhDntco2Bn73LMHAHLvd3cAYkbbSofpkjSTW1sAIwAAAgENAAAAcu93dwBiRttKh_mSNJNbWwAjAAGE5gpaAAAA",
      subject: "repeat event",
      start: {
        dateTime: "2020-07-29T15:00:00.0000000",
        timeZone: "UTC",
      },
      end: {
        dateTime: "2020-07-29T15:30:00.0000000",
        timeZone: "UTC",
      },
      organizer: {
        emailAddress: {
          name: "sergio najera",
          address: "outlook_D7FC0A00C2A69999@outlook.com",
        },
      },
    },
    {
      "@odata.etag": 'W/"cu93d2JG20qH6ZI0k1tbIwABhOPRMg=="',
      id:
        "AQMkADAwATMwMAItMTljZC1iMTRjLTAwAi0wMAoARgAAA9ti9fRLfGhDntco2Bn73LMHAHLvd3cAYkbbSofpkjSTW1sAIwAAAgENAAAAcu93dwBiRttKh_mSNJNbWwAjAAGE5gpZAAAA",
      subject: "new event",
      start: {
        dateTime: "2020-07-28T19:30:00.0000000",
        timeZone: "UTC",
      },
      end: {
        dateTime: "2020-07-28T21:00:00.0000000",
        timeZone: "UTC",
      },
      organizer: {
        emailAddress: {
          name: "sergio najera",
          address: "outlook_D7FC0A00C2A69999@outlook.com",
        },
      },
    },
    {
      "@odata.etag": 'W/"cu93d2JG20qH6ZI0k1tbIwABhOPRDg=="',
      id:
        "AQMkADAwATMwMAItMTljZC1iMTRjLTAwAi0wMAoARgAAA9ti9fRLfGhDntco2Bn73LMHAHLvd3cAYkbbSofpkjSTW1sAIwAAAgENAAAAcu93dwBiRttKh_mSNJNbWwAjAAGE5gpYAAAA",
      subject: "message",
      start: {
        dateTime: "2020-07-23T00:00:00.0000000",
        timeZone: "UTC",
      },
      end: {
        dateTime: "2020-07-27T00:00:00.0000000",
        timeZone: "UTC",
      },
      organizer: {
        emailAddress: {
          name: "sergio najera",
          address: "outlook_D7FC0A00C2A69999@outlook.com",
        },
      },
    },
    {
      "@odata.etag": 'W/"cu93d2JG20qH6ZI0k1tbIwABhOPRCQ=="',
      id:
        "AQMkADAwATMwMAItMTljZC1iMTRjLTAwAi0wMAoARgAAA9ti9fRLfGhDntco2Bn73LMHAHLvd3cAYkbbSofpkjSTW1sAIwAAAgENAAAAcu93dwBiRttKh_mSNJNbWwAjAAGE5gpXAAAA",
      subject: "Mister Sirrrr",
      start: {
        dateTime: "2020-07-21T15:00:00.0000000",
        timeZone: "UTC",
      },
      end: {
        dateTime: "2020-07-21T20:00:00.0000000",
        timeZone: "UTC",
      },
      organizer: {
        emailAddress: {
          name: "sergio najera",
          address: "outlook_D7FC0A00C2A69999@outlook.com",
        },
      },
    },
    {
      "@odata.etag": 'W/"cu93d2JG20qH6ZI0k1tbIwABhOPQjQ=="',
      id:
        "AQMkADAwATMwMAItMTljZC1iMTRjLTAwAi0wMAoARgAAA9ti9fRLfGhDntco2Bn73LMHAHLvd3cAYkbbSofpkjSTW1sAIwAAAgENAAAAcu93dwBiRttKh_mSNJNbWwAjAAGE5gpWAAAA",
      subject: "Mr sir",
      start: {
        dateTime: "2020-07-20T15:00:00.0000000",
        timeZone: "UTC",
      },
      end: {
        dateTime: "2020-07-20T15:30:00.0000000",
        timeZone: "UTC",
      },
      organizer: {
        emailAddress: {
          name: "sergio najera",
          address: "outlook_D7FC0A00C2A69999@outlook.com",
        },
      },
    },
  ],
};

interface OutlookEvent {
  "@odata.etag": string;
  id: string;
  subject: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  organizer: {
    emailAddress: {
      name: string;
      address: string;
    };
  };
}

export type FullCalendarProps = {
  outlookResponse: OutlookResponse;
};

export interface OutlookResponse {
  "@odata.context": string;
  value: OutlookEvent[];
}
