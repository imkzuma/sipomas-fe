import { Key } from "react";
export interface InterfaceTableUsers {
    key: Key;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;  
    };
}