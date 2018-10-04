export class ProductItemModel
{
    ProductId: Number;
    ProductName: string;
    ProductDetail: string;

    constructor(id:Number, productName:string, productDetail:string)
    {
        this.ProductId = id;
        this.ProductName = productName;
        this.ProductDetail = productDetail;
    }
}