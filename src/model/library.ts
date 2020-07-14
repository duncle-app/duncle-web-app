import Note from "./note";

export interface Library {
        libraryName: string,
        librarian: string,
        assistant: string,
        street: string,
        district: string,
        city: string,
        county: string,
        state: string,
        zip: string,
        email: string,
        phoneNumber: string,
        extension: string,
        level: string,
        size: number,
        dateUpdated: string,
        assignedRep: string, // user.first_name;
        _id?: string,
        _rev?: string,
        totalSales?: number,
        lastSale?: number,
        dateLastSale?: string,
        dateNextContact?: string,
        notes?: Note[],
}
