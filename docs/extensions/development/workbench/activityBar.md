---
sidebar_position: 3
---

# ActivityBar

The ActivityBar is the vertical bar on the left side of the window. It contains icons for various activities to navigate trough the app.

The activity bar and the sidebar are related by id. When the user clicks on an item in the activity bar, the sidebar will be changed to the one with the same id.

![Workbench Core Components](./workbench-core.jpg)


## Adding a new ActivityBar item

To add a new activity bar item, we need to create a new object with the following properties, and then call the `add` method from the `activityBar` service:

```typescript
const activityBar = {
  id: 'ActivityBarId',
  name: 'MyActivityBar',
  title: 'My activity bar',
  icon: 'checklist',
};

context.services.activityBar.add(activityBar);
```

[You can use any icon from vscode-codicons library](https://microsoft.github.io/vscode-codicons/dist/codicon.html)

If you want to use an image as an icon, you can use the `render` method for that:

```typescript
const activityBar = {
  id: 'ActivityBarId',
  name: 'MyActivityBar',
  title: 'My activity bar',
  render: () => (<img src="https://via.placeholder.com/100" alt="My activity bar icon" />),
};

context.services.activityBar.add(activityBar);
```

## Removing an ActivityBar item

To remove an activity bar item, we need to call the `remove` method from the `activityBar` service:
(You should call the remove on dispose method of the extension)

```typescript
context.services.activityBar.remove('ActivityBarId');
```

## Set the active ActivityBar item

To set the active activity bar item, we need to call the `setActive` method from the `activityBar` service:

```typescript
context.services.activityBar.setActive('ActivityBarId');
```

## Toggle the ActivityBar visibility

To toggle the activity bar visibility, we need to call the `toggleBar` method from the `activityBar` service:

```typescript
context.services.activityBar.toggleBar();
```

## Detecting ActivityBar Item Click
To detect when an activity bar item is clicked, we need to subscribe to the `onClick` event from the `activityBar` service:

```typescript
context.services.activityBar.onClick((id: string, item: IActivityBarItem) => {
  // Do something
});
```


## Detecting ActivityBar Item Change
To detect when the active activity bar item is changed, we need to subscribe to the `onChange` event from the `activityBar` service:

```typescript
context.services.activityBar.onChange((prevSelectedId: string, nextSelectedId: string) => {
  // Do something
});
```