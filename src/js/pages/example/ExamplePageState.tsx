import { RouteContext } from "@opendash/router";
import { makeAutoObservable } from "mobx";

interface Product {
  id: string;
  name: string;
  self_link: string;
}

export class ExamplePageState {
  ctx: RouteContext;

  products: Product[] = [];

  constructor(ctx: RouteContext) {
    this.ctx = ctx;

    ctx.setTitle("app:example.title");
    ctx.setDescription(undefined);

    makeAutoObservable(this);

    this.init();
  }

  async init() {
    const response = await fetch("https://api.predic8.de/shop/v2/products");

    const data = await response.json();

    this.setProducts(data.products);
  }

  setProducts(products: Product[]) {
    this.products = products;
  }
}
