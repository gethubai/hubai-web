# Extension Class

Extensions are the main way to extend the functionality of the HubAI app. It allows you to add new pages, sidebars, toolbars, languages, themes, and a lot of other things to the app.

## IExtension

The IExtension interface is the base interface for all extensions. It defines the basic properties and methods that all extensions must have.

You can use either a class or an object literal to create an extension. If you use a class, it must implement the IExtension interface.

### Literal object

```typescript
import { IExtension, AppContext } from '@hubai/core';

const config = require('../package.json');
const emptyExtension: IExtension = {
  name: config.name,
  version: config.version,
  main: config.main,
  author: config.author,
  activate(context: AppContext) {},
  dispose(context: AppContext) {},
};

export default emptyExtension;
```

### Class object

```typescript
import { AppContext, IExtension, UniqueId } from '@hubai/core';

export class EmptyExtension implements IExtension {
  id: UniqueId = 'emptyExtension';

  name: string = 'Empty Extension';

  activate(context: AppContext): void {
    console.log('activating test extension!');
  }
  dispose(context: AppContext): void {
    console.log('disposing test extension!');
  }
}
```

### Activate and dispose

The activate and dispose methods are called when the extension is activated and disposed.

The extension is activated when the app starts and disposed when the app is closed or when the extension is uninstalled.

### App Context

The AppContext object is passed to the activate and dispose methods. Use the services to add new pages, sidebars, toolbars, languages, themes, and a lot of other things to the app.

```typescript
export declare class AppContext {
  services: AppContextServices;
  constructor(services: AppContextServices);
}

export declare class AppContextServices {
  sidebar: ISidebarService;
  activityBar: IActivityBarService;
  menuBar: IMenuBarService;
  editor: IEditorService;
  notification: INotificationService;
  theme: IColorThemeService;
  problems: IProblemsService;
  settings: ISettingsService;
  extension: IExtensionService;
  layout: ILayoutService;
}
```
