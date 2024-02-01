import { RouteContext } from "@opendash/router";
import { makeAutoObservable } from "mobx";
import Parse from "Parse";

interface Product {
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  self_link: string;
}

export class ExampleParseQueryState {
  ctx: RouteContext;

  products: Product[] = [];

  constructor(ctx: RouteContext) {
    this.ctx = ctx;

    ctx.setTitle("app:parsequery.title");
    ctx.setDescription(undefined);

    makeAutoObservable(this);

    this.init();
  }

  async init() {
    const products = Parse.Object.extend("products");
    const response = new Parse.Query(products);
    const results = await response.find();

    this.setProducts(results as Product[]);
  }

  setProducts(products: Product[]) {
    this.products = products;
  }
}
