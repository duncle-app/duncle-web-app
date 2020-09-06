import moment from "moment";
import { isEmpty } from "lodash";

export const dateNowIso = () => moment().format();

export function isIsoDate(str: string): boolean {
    return moment(str, moment.ISO_8601).isValid()
}

export function readableDate(date: string): string {
    if (isIsoDate(date)) {
        return moment(date).format("MMMM Do, H:mm")
    } else {
        console.error(`The provided string ${date} is not in ISO format. Pass in an ISO string`)
        return date
    }
}