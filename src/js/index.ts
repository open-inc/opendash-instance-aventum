import "antd/dist/reset.css";

import "./parse.config";

import { init, StorageAdapterLS } from "@opendash/core";
import { registerIconPack } from "@opendash/icons";
import { ParsePlugin } from "@opendash/plugin-parse";

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
}).then((app) => {
  console.log("init open.DASH");
});
