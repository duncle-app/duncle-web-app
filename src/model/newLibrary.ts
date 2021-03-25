import NoteDAO from "./noteDAO";

export default interface NewLibrary {
  _id: string;
  libraryName: string;
  librarian: string;
  street: string;
  district: string;
  city: string;
  county: string;
  state: string;
  zip: string;
  email: string;
  phoneNumber: number;
  dateUpdated: string;
  assignedRep: string;
  totalSales: number;
  lastSale: number;
  level?: string;
  size?: number;
  assistant?: string;
  extension?: string;
  dateLastSale?: string;
  dateLastContact?: string;
  dateNextContact?: string;
  notes: NoteDAO[];
}
