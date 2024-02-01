import { useTranslation } from "@opendash/core";
import { RouteProps } from "@opendash/router";
import { observer } from "mobx-react-lite";
import { ParseSetView } from "@opendash/plugin-parse";
import { TableViewType } from "@opendash/plugin-parse/dist/types";
import React from "react";
import { $parse, CustomParseFieldProps } from "@opendash/plugin-parse";
import { ExampleParseQueryState } from "./ExampleParseQueryState";

export const ExampleParseQueryTable = observer(
  ({ state }: RouteProps<ExampleParseQueryState>) => {
    const t = useTranslation();

    return (
      <ParseSetView
        className="products"
        view={
          {
            type: "table",
          } as TableViewType
        }
      />
    );
  }
);
