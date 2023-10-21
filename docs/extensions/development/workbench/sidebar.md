---
sidebar_position: 2
---

# Sidebar

The sidebar is the secondary navigation of the app. It will be changed when the user clicks on an item in the activity bar, so they are related by id.

![Workbench Core Components](./workbench-core.jpg)

## Adding a new Sidebar item

To add a new sidebar item, we need to create a new object with the following properties, and then call the `add` method from the `sidebar` service:

### Simple sidebar without a toolbar

```typescript
const SidebarView = () => {
  return (
    <div className="container" style={{ width: '100%', height: '100%' }}>
      <Content>Hello world!</Content>
    </div>
  );
};

const sidebar = {
  id: 'myExtension.sidebar',
  title: 'SidebarPanel',
  render: () => <SidebarView />,
};

context.services.sidebar.add(sidebar);
```

### Sidebar with a toolbar

```typescript

const SidebarView = () => {
  const headerToolBar = [
    {
      icon: 'refresh',
      id: 'myExtension.sidebar.reload',
      title: 'Reload',
      onClick: () => {
        console.log('OnReload!');
      },
    },
    {
      icon: 'add',
      id: 'myExtension.sidebar.add',
      title: localize('myExtension.sidebar.addItem', 'Add Item'), // Use the localize if you want to support multiple languages
      onClick: () => {
        console.log('On add');
      },
    },
  ];

  return (
    <div className="container" style={{ width: '100%', height: '100%' }}>
      <Header
        title={localize('myExtension.sidebarTitle', 'Todo List')}
        toolbar={<Toolbar data={headerToolBar || []} />}
      />
      <Content>Hello world!</Content>
    </div>
  );
};

const sidebar = {
  id: 'myExtension.sidebar',
  title: 'SidebarPanel',
  render: () => <SidebarView />,
};

context.services.sidebar.add(sidebar);
```

The sidebar will be shown when the user clicks on the activity bar item that has the `myExtension.sidebar` id.

## Removing a Sidebar item

To remove a sidebar item, we need to call the `remove` method from the `sidebar` service:
(You should call the remove on dispose method of the extension)

```typescript
context.services.sidebar.remove('myExtension.sidebar');
```

## Set the active Sidebar item

The active sidebar item is set when the user clicks on the activity bar item that has the same id. But you can also set it programmatically by calling the `setActive` method from the `sidebar` service:

```typescript
context.services.sidebar.setActive('myExtension.sidebar');
```