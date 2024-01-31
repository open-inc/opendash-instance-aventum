import { useTranslation } from "@opendash/core";
import { RouteProps } from "@opendash/router";
import { observer } from "mobx-react-lite";
import React from "react";
import { ExamplePageState } from "./ExamplePageState";

export const ExamplePage = observer(
  ({ state }: RouteProps<ExamplePageState>) => {
    const t = useTranslation();

    console.log(state.products);

    return (
      <div>
        {t("app:example.content", {
          count: state.products.length,
        })}
      </div>
    );
  }
);
