import { RouterLayoutBasic } from "@opendash/core";
import { RouterLayoutProps } from "@opendash/router";
import { observer } from "mobx-react-lite";
import React from "react";

export const Layout = observer(function Layout(props: RouterLayoutProps) {
  return (
    <RouterLayoutBasic {...props} padding={false}>
      {props.children}
    </RouterLayoutBasic>
  );
});
