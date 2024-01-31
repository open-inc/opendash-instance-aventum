import { RouteContext } from "@opendash/router";
import { makeAutoObservable } from "mobx";

export class ExamplePageState {
  ctx: RouteContext;

  constructor(ctx: RouteContext) {
    this.ctx = ctx;

    ctx.setTitle("app:example.title");
    ctx.setDescription(undefined);

    makeAutoObservable(this);
  }
}
