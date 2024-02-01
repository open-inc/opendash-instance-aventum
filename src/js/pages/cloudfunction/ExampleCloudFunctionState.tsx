import { RouteContext } from "@opendash/router";
import { makeAutoObservable } from "mobx";
import Parse from "Parse";

interface Product {
  id: string;
  name: string;
  self_link: string;
}

export class ExampleCloudFunctionState {
  ctx: RouteContext;

  products: Product[] = [];

  constructor(ctx: RouteContext) {
    this.ctx = ctx;

    ctx.setTitle("app:cloudfunction.title");
    ctx.setDescription(undefined);

    makeAutoObservable(this);

    this.init();
  }

  async init() {
    const response = await Parse.Cloud.run("democloudfunction");

    this.setProducts(response);
  }

  setProducts(products: Product[]) {
    this.products = products;
  }
}
