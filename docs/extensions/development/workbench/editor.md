---
sidebar_position: 4
---

# Editor (Tabs)

The editor service is used to add new tabs (window) to the app.

![Workbench Core Components](./workbench-core.jpg)

## Adding a new tab window

To add a new tab window, we need to create a new object with the following properties, and then call the `add` method from the `editor` service:

```typescript
const TabWindow = () => {
  return <div>Hello world!</div>;
};

const tabWindow = {
  id: 'myExtension.tabWindow',
  name: 'My extension Window',
  icon: 'pass',
  renderPanel: () => <TabWindow />,
};

context.services.editor.open(tabWindow, undefined);
```

The `id` property is used to identify the tab window. It must be unique. If you try to add a tab window with an id that already exists, the previous tab window will be opened instead of the new one.

The `renderPanel` method is used to render the content of the tab window. If you just want to select an existing tab (that is already open), you can pass undefined to the `renderPanel` method.

The second parameter of the `open` method is the `groupId`. It is used to group tab windows. If you want to open a tab window into the default group, you can pass undefined to the `groupId` parameter.

## Opening or selecting a tab window

To select or open a tab window, we need to first check if the tab window is already open, and then call the `open` method from the `editor` service:

```typescript
const tabId = 'myExtension.window';
let renderPane;

// Check if tab is already opened
if (!context.services.editor.isOpened(tabId)) {
    renderPane = () => (<TabWindow />;
}

context.services.editor.open({
    id: tabId,
    name: 'My extension Window',
    icon: 'pass',
    renderPane,
}, 'groupId');
```

## Closing a tab window

To close a tab window, we need to call the `closeTab` method from the `editor` service:

```typescript
const groupId = context.services.editor.getGroupIdByTab('myExtension.window');
context.services.editor.closeTab('myExtension.window', groupId);
```

## Closing all tab windows

To close all tab windows, we need to call the `closeAll` method from the `editor` service:

```typescript
context.services.editor.closeAll();
```

## Getting the groupId of a tab window

To get the groupId of a tab window, we need to call the `getGroupIdByTab` method from the `editor` service:

```typescript
const groupId = context.services.editor.getGroupIdByTab('myExtension.window');
```

## Set Active tab window

To set the active tab window, we need to call the `setActive` method from the `editor` service:

```typescript
const groupId = context.services.editor.getGroupIdByTab('myExtension.window');
context.services.editor.setActive(groupId, 'myExtension.window');
```

## Editor Events 

The editor service has the following events:

### onUpdateTab

This event is fired when a tab is updated. 

```typescript
context.services.editor.onUpdateTab((tab: IEditorTab) => {
    // Do something
});
```

### onOpenTab
This event is fired when a tab is opened. 

```typescript
context.services.editor.onOpenTab((tab: IEditorTab) => {
    // Do something
});
```

### onCloseTab
This event is fired when a tab is closed. 

```typescript
context.services.editor.onCloseTab((tabId: UniqueId, groupId?: UniqueId) => {
    // Do something
});
```

### onMoveTab
This event is fired when a tab is moved. 

```typescript
context.services.editor.onMoveTab((updateTabs: IEditorTab<any>[], groupId?: UniqueId) => {
    // Do something
});
```

### onSelectTab
This event is fired when a tab is selected. 

```typescript
context.services.editor.onSelectTab((tabId: UniqueId, groupId?: UniqueId) => {
    // Do something
});
```

### onCloseAll
This event is fired when all tabs are closed. 

```typescript
context.services.editor.onCloseAll((groupId?: UniqueId) => {
    // Do something
});
```
