import { RouteProps } from "@opendash/router";
import { observer } from "mobx-react-lite";
import React from "react";
import { ExamplePageState } from "./ExamplePageState";

export const ExamplePage = observer(
  ({ state }: RouteProps<ExamplePageState>) => {
    return <div>Hallo Welt</div>;
  }
);
