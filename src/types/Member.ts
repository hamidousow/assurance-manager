import type { Address } from "./Address"
import type { Contract } from "./Contract";

export interface Member {
    id: string;
    firstname: string;
    lastname: string;
    dateBirth: string;
    birthCountry: string;
    gender: string;
    nationality: string;
    email: string;
    phoneNumber: string;
    phoneIndicator: string;
    address: Address;
    contract: Contract;
}