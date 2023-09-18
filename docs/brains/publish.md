# Publishing a brain

After you finish the development of your brain, you can publish it to the package registry so that other users can install and use it.

:::tip
Make sure to create a publisher before publishing your brain ([see creating a publisher](../cli/publishers/creating-a-publisher.md)).
:::

## Content

- Add a `readme.md` file to the root folder of your brain project to correctly describe your brain. This file will be displayed in the MarketPlace when the user clicks on your brain. 
- Add a `license.md` file to the root folder of your brain project to correctly describe the license of your brain
- Add a `changelog.md` file to the root folder of your brain project to correctly describe the changes of your brain (applicable when publishing a new version of your brain)

## Publishing

Before publishing your brain, you must correctly fill the `package.json` file with your brain's information.

See the [package.json reference](/docs/brains/development/manifest) for more information.

After that, go to the root folder of your brain project and run:

```shell
hubai brain publish
```

This will publish your brain to the package registry.

If everything goes well, you will be able to see your brain in the MarketPlace tab of the HubAI app.

:::caution
You need to be authenticated to publish a brain ([see authentication](../cli/getting-started.md#authentication)).
:::
