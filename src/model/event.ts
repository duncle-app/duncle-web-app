export default interface event {
    name: string;
    startDate: string;
    endDate?: string;
    libraryId: string;
    hasContacted: boolean;
    dateCreated: string;
    dateUpdated: string;
}