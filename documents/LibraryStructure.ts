// @ts-ignore
import User from "../src/model/user";

interface Library {
    librarian: string;
    assistant: string;
    library: string;
    address: string;
    email: string;
    phone: number; // but display as (XXX)-XXX-XXXX
    extension: string;
    district: string;
    city: string;
    county: string;
    state: string; // default to WI
    level: string;
    size: number;
    date_next_contact: string; // todo - ??? or date
    notes: Object;
        user: User;
        date_created: string; // todo - ??? or date
    sales: Object;
        total_sales: number;
        last_sale: number;
        date_updated: string; // todo - ??? or date
    user2: Object; // display as Rep
        first_name: string;
        last_name: string;
        role: Object;
            admin: string;
            user3: string;
}