import type { Address } from "./Address"

export class Member {
    firstname!: string;
    lastname!: string;
    dateBirth!: string;
    birthCountry!: string;
    gender!: string;
    nationality!: string;
    email!: string;
    phoneNumber!: string;
    phoneIndicator!: string;
    address!: Address;
}