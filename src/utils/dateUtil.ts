export const dateNowIso = () => new Date().toISOString();

function isIsoDate(str: string): boolean {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    var d = new Date(str);
    return d.toISOString() === str;
}

export function readableDate(s: string): string {
    var b = s.split(/\D+/);
    // @ts-ignore
    const date: Date = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]))
    return date.toDateString();
}