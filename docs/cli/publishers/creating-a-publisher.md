# Creating a Publisher

Before you can publish a package, you need to create a publisher.
A publisher is a named entity that is used to publish packages to the registry. A publisher can be an individual or an organization.

Obs: You need to be authenticated to create a publisher ([see authentication](../getting-started#authentication)).

Creating a publisher is very simple, just run the following command:

```shell
hubai publisher create --name "foo" --displayName "Foo Bar"
```

The `--name` parameter is the name of the publisher, and the `--displayName` is the name that will be displayed for the user.

After the publisher is created, you can check the details by running:

```shell
hubai publisher list
```

## Publisher Rules

:::danger
**DO NOT USE** name of companies or organizations that you don't own, if you do, your publisher will be deleted and all the packages will be removed from the registry.
:::

### Name

- Must be unique
- Must be between 2 and 50 characters
- Can only contain letters, numbers, and underscores

### Display Name

- Must be unique
- Must be between 2 and 50 characters
- Can only contain letters, numbers, and spaces
