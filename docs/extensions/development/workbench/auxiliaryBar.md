---
sidebar_position: 5
---

# Auxiliary Bar

The auxiliary bar is a bar that is shown at the right side of the editor (just like sidebar, but in the right). It can be used to show some information or actions related to the current selected editor.

![Workbench Core Components](./workbench-core.jpg)

## Adding a new AuxiliaryBar item

```typescript

const AuxiliaryBarView = () => {
  return (
    <div>My Auxiliary Bar Content</div>
  );
};

context.services.auxiliaryBar.addAuxiliaryBar({
  key: 'myExtension.auxiliaryBar',
  title: 'My Extension Bar',
});

context.services.auxiliaryBar.onTabClick(() => {
  const tab = context.services.auxiliaryBar.getCurrentTab();

  if (tab) {
    context.services.auxiliaryBar.setChildren(<AuxiliaryBarView />)
  }

  context.services.auxiliaryBar.setAuxiliaryBarView(!tab); 
});

```