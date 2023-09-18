---
sidebar_position: 5
---

# Brain commands

You can see a full list of all the available commands by running:

```shell
hubai brain --help
```

## Create

You can create a new brain from a template by running:

```shell
hubai brain create
```

Then just choose the template you want to use and follow the instructions.

## Package

To generate a package, go to the root folder of your brain project and run:

```shell
hubai brain package
```

## Publish

Publishes the brain to the package registry. You need to be authenticated to publish a brain ([see authentication](getting-started#authentication)).

```shell
hubai brain publish
```
