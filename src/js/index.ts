import "antd/dist/reset.css";

import "./parse.config";

import { init, StorageAdapterLS } from "@opendash/core";
import { registerIconPack } from "@opendash/icons";
import { ParsePlugin } from "@opendash/plugin-parse";

import { Layout } from "./components/Layout";

import { ExamplePage } from "./pages/example/ExamplePage";
import { ExamplePageState } from "./pages/example/ExamplePageState";

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
    id: "example/frontpage2",
    group: "example",
    place: "frontpage",
    order: 2,
    label: "app:example.title",
    icon: "fa:smile",
    color: "#782235",
    link: "/example",
    routeCondition: "**",
    activeCondition: "/",
  });
}).then((app) => {
  console.log("init open.DASH");
});
