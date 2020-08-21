import moment from "moment";

export const dateNowIso = () => moment().format();

export function isIsoDate(str: string): boolean {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    var d = new Date(str);
    return d.toISOString() === str;
}

// todo - deprecated if using moment - see docs for further details - https://momentjs.com/docs/#/displaying/format/
export function readableDate(isoDate: string): string {
    var b = isoDate.split(/\D+/);
    // @ts-ignore
    const date: Date = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]))
    return date.toDateString();
}