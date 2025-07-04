
export interface IBookModel {
    _id?: string,
    title: string,
    author: string,
    genre: "" | "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY",
    isbn: string,
    description?: string,
    copies: number | string,
    available?: boolean
};

export interface UpdateValueAction {
    type: "update_value";
    payload: {
        input: keyof IBookModel;
        value: string
    };
};

export interface IBorrowBookSummary {
    _id: string
    book: {
        title: string;
        isbn: string,
        author: string,
    };
    totalQuantity: number;
}

export interface ResetAction {
    type: "reset"
}


export type Action = UpdateValueAction | ResetAction;