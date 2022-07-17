export class Product {
  productID: number;
  productName: string;
  productCost: number;
  productImage: string;
  productDescription: string;
  productType: string;
  productStatus: string;

  constructor(
    productID: number,
    productName: string,
    productCost: number,
    productImage: string,
    productDescription: string,
    productType: string,
    productStatus: string
  ) {
    this.productID = productID;
    this.productName = productName;
    this.productCost = productCost;
    this.productImage = productImage;
    this.productDescription = productDescription;
    this.productType = productType;
    this.productStatus = productStatus;
  }
}
