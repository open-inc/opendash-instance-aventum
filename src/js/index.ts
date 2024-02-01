import "antd/dist/reset.css";

import "./parse.config";

import { init, StorageAdapterLS } from "@opendash/core";
import { registerIconPack } from "@opendash/icons";
import { ParsePlugin } from "@opendash/plugin-parse";
import { ComponentType } from "react";
import { $parse, CustomParseFieldProps } from "@opendash/plugin-parse";

import { Layout } from "./components/Layout";

import { ExamplePage } from "./pages/example/ExamplePage";
import { ExamplePageState } from "./pages/example/ExamplePageState";

import { ExampleCloudFunctionPage } from "./pages/cloudfunction/ExampleCloudFunction";
import { ExampleCloudFunctionState } from "./pages/cloudfunction/ExampleCloudFunctionState";

import { ExampleParseQuery } from "./pages/parsequery/ExampleParseQuery";
import { ExampleParseQueryState } from "./pages/parsequery/ExampleParseQueryState";
import { ExampleParseQueryTable } from "./pages/parsequery/ExampleParseQueryTable";

init("opendash", async (factory) => {
  // Icons
  // @ts-ignore
  registerIconPack(await import("@opendash/icons/dist/fa-regular.json"));

  // Languages
  factory.registerLanguage("en", "English");
  factory.registerLanguage("de", "Deutsch", "en", true);

  // Logo
  factory.ui.setLogoImage("/logo.svg");

  // Ant Design Translations
  factory.registerAntDesignTranslation(
    "en",
    () => import("antd/lib/locale/en_US")
  );
  factory.registerAntDesignTranslation(
    "de",
    () => import("antd/lib/locale/de_DE")
  );

  // App Translations
  factory.registerTranslationResolver(
    "en",
    "app",
    async () => await import("./translations/app/en.json")
  );
  factory.registerTranslationResolver(
    "de",
    "app",
    async () => await import("./translations/app/de.json")
  );

  // Adapter + Plugins
  factory.registerDeviceStorageAdapter(new StorageAdapterLS());

  await factory.use(
    new ParsePlugin({
      authLdapActive: false,
    })
  );

  // Routes
  factory.registerStatefullRoute({
    path: "/example",
    layout: Layout as React.ComponentType<React.PropsWithChildren>,
    state: ExamplePageState,
    componentSync: ExamplePage,
  });

  factory.registerStatefullRoute({
    path: "/cloudfunction",
    layout: Layout as React.ComponentType<React.PropsWithChildren>,
    state: ExampleCloudFunctionState,
    componentSync: ExampleCloudFunctionPage,
  });

  factory.registerStatefullRoute({
    path: "/parsequery",
    layout: Layout as React.ComponentType<React.PropsWithChildren>,
    state: ExampleParseQueryState,
    componentSync: ExampleParseQuery,
  });

  $parse.ui.setClassConfig({
    className: "products",
    titleFields: ["name"],
    displayFields: ["name", "self_link", "createdAt", "updatedAt"],
    createFields: ["name", "self_link"],
    editFields: ["name", "self_link"],
  });

  $parse.ui.setDefaultView("products", {
    type: "table",
  });

  factory.registerRoute({
    path: "/parsequerytable/*",
    component: async () => ({ default: ExampleParseQueryTable }),
  });

  // Navigation
  factory.registerStaticNavigationItem({
    id: "example/frontpage",
    group: "example",
    place: "frontpage",
    order: 1,
    label: "app:example.title",
    icon: "fa:smile",
    color: "#782235",
    link: "/example",
    routeCondition: "**",
    activeCondition: "/",
  });

  factory.registerStaticNavigationItem({
    id: "cloudfunction/frontpage",
    group: "example2",
    place: "frontpage",
    order: 2,
    label: "app:cloudfunction.title",
    icon: "fa:cloud",
    color: "#782235",
    link: "/cloudfunction",
    routeCondition: "**",
    activeCondition: "/",
  });

  factory.registerStaticNavigationItem({
    id: "parsequery/frontpage",
    group: "example3",
    place: "frontpage",
    order: 3,
    label: "app:parsequery.title",
    icon: "fa:box",
    color: "#782235",
    link: "/parsequery",
    routeCondition: "**",
    activeCondition: "/",
  });

  factory.registerStaticNavigationItem({
    id: "parsequery/frontpage2",
    group: "example4",
    place: "frontpage",
    order: 3,
    label: "app:parsequery.title",
    icon: "fa:table",
    color: "#782235",
    link: "/parsequerytable",
    routeCondition: "**",
    activeCondition: "/",
  });

  /*
  factory.registerStaticNavigationGroup({
    label: "app:example.title",
    order: 1,
    id: "example/sidebargroup",
  });
  factory.registerStaticNavigationItem({
    id: "example/sidebar1",
    group: "example/sidebargroup",
    place: "sidebar",
    order: 1,
    label: "app:example.title",
    icon: "fa:smile",
    color: "#782235",
    link: "/example",
    routeCondition: "**",
    activeCondition: "/",
    permission: "example:can-access-example",
  });*/
}).then((app) => {
  console.log("init open.DASH");
});
