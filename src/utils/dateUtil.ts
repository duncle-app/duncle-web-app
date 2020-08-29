import moment from "moment";

export const dateNowIso = () => moment().format();

export function isIsoDate(str: string): boolean {
    return moment(str, moment.ISO_8601).isValid()
}

export function readableDate(date: string): string {
    if (isIsoDate(date)) {
        return moment(date).format("MMMM do, H:mm")
    } else {
        console.error(`The provided string ${date} is not in ISO format. Pass in an ISO string`)
        return date
    }
}