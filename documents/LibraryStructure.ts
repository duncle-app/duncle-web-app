// @ts-ignore
import User from "../src/model/user";

interface Library {
    _id: string;
    _rev?: string;
    library: string;
    librarian: string;
    assistant: string;
    street: string;
    district: string;
    city: string;
    county: string;
    state: string; // default to WI
    zip: number;
    email: string;
    phone: number; // but display as (XXX)-XXX-XXXX
    extension: string;
    level: string;
    size: number;
    date_next_contact: string; // todo - ??? or date
    notes: Object;
        user: User;
        date_created: string; // todo - ??? or date
    total_sales: number;
    last_sale: number;
    date_updated: string; // todo - ??? or date
    rep: Object;
    user2: User;
}
interface User { // TABLE
    _id: string;
    _rev?: string;
    first_name: string;
    last_name: string;
    email: string;
    date_created: string;
    date_updated: string;
    role: Object;
}
interface Role {
    _id: string;
    _rev?: string;
    admin: string;
    user3: string;
}