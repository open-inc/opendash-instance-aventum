import { useTranslation } from "@opendash/core";
import { RouteProps } from "@opendash/router";
import { observer } from "mobx-react-lite";
import React from "react";
import { $parse, CustomParseFieldProps } from "@opendash/plugin-parse";
import { ExampleParseQueryState } from "./ExampleParseQueryState";

export const ExampleParseQuery = observer(
  ({ state }: RouteProps<ExampleParseQueryState>) => {
    const t = useTranslation();

    return <div>{JSON.stringify(state.products, null, 2)}</div>;
  }
);
