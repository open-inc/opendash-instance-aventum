import { useTranslation } from "@opendash/core";
import { RouteProps } from "@opendash/router";
import { observer } from "mobx-react-lite";
import React from "react";
import { ExampleCloudFunctionState } from "./ExampleCloudFunctionState";

export const ExampleCloudFunctionPage = observer(
  ({ state }: RouteProps<ExampleCloudFunctionState>) => {
    const t = useTranslation();

    console.log(state.products);

    return <div>{JSON.stringify(state.products, null, 2)}</div>;
  }
);
