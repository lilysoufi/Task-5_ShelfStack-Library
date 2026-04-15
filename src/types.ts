
export type bookId = string;

export interface Book {
    readonly id : string;
    title : string;
    isbn : string;
    author : string;
}

export interface Loan {
    readonly id : string;
    readonly bookId : string;
    readonly memberId : string;
}