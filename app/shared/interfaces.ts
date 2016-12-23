export interface IDocument {
    id : string;
    key: string;
    value: IRevision;
    doc : IProduct;
}

export interface IProduct {
    _id  : string;
    _rev : string;
    productId : number;
    productName : string;
    productCode : string;
    releaseDate : string;
    description : string;
    price : number;
    starRating : number;
    imageUrl : string;
}

export interface IRevision {
    rev : string;
}

