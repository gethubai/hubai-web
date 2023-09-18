# Brain Manifest

Every brain needs a manifest file `package.json` at the root of the project. This file contains the brain metadata and settings.


| Name                                                    | Required | Type                                       | Details                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------- | :------: | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brain.name`                                                  |    Y     | `string`                                   | The name of the brain - only letters. The name must be unique to the package registry.                                                                                                                                                                                                                                                    |
| `version`                                               |    Y     | `string`                                   | [SemVer](https://semver.org/) compatible version.                                                                                                                                                                                                                                                                      |
| `publisher`                                             |    Y     | `string`                                   | The [publisher name](/docs/cli/publishers/creating-a-publisher#name)                                                                                                                                                                                                          |
| `engines`                                               |    Y     | `object`                                   | An object containing at least the `hubai` key matching the versions of HubAI that the extension is compatible with. Cannot be `*`. For example: `^0.10.5` indicates compatibility with a minimum HubAI version of `0.10.5`. |
| `license`                                               |          | `string`                                   | Refer to [npm's documentation](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#license). If you do have a `LICENSE` file in the root of your extension, the value for `license` should be `"SEE LICENSE IN <filename>"`.                                                                                                     |
| `brain.displayName`                                           |          | `string`                                   | The display name for the extension used in the Marketplace.The display name must be unique to the Marketplace.                                                                                                                                                                                                                                                            |
| `brain.description`                                           |          | `string`                                   | A short description of what your brain does.                                                                                                                                                                                                                                                    
| `brain.capabilities`                                                |          | `array`                                    | Array of supported brain capabilities. Possible values: `[conversation, voice_transcription, image_recognition]`.       |
| `categories`                                            |          | `string[]`                                 | The categories you want to use for the extensions. Allowed values: `[chat, brain, workbench, ai, themes, other]`                                                                                                          |
| `keywords`                                              |          | `array`                                    | An array of **keywords** to make it easier to find the package. These are included with other package **Tags** on the Marketplace. This list is currently limited to 5 keywords.                                                                                                                                   |
| `main`                                                  |          | `string`                                   | The entry point to your extension.                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                   |
| `brain.settingsMap`                                              |          | `array`                                   | Array of [LocalBrainSettingMap](/docs/api/classes/LocalBrainSettingMap). Use this field to specify all the settings that your brain needs to work                                                                                                                                                                                                                 |
| `icon`                                              |          | `string`                                   | Path of the icon file for your brain (must be a path relative to the root folder of your project)                                                                                                                                                                                                                 |

## Full Manifest example

Here's a complete example of how a package.json for a brain must look like (with all the settings above):

```json
{
  "name": "test-brain",
  "version": "1.0.0",
  "type": "commonjs",
  "main": "./src/main.js",
  "icon": "assets/icon.png",
  "engines": {
    "node": ">= 18.12 <19",
    "hubai": "^0.0.1"
  },
  "scripts": {...},
  "brain": {
    "name": "TestBrain",
    "displayName": "Test Brain",
    "description": "This is a brain created for testing",
    "capabilities": [
      "conversation",
      "voice_transcription"
    ],
    "settingsMap": [
      {
        "displayName": "Test parameter",
        "description": "You can insert any value here :)",
        "name": "test",
        "type": "string",
        "required": false
      },
      {
        "displayName": "Scoped parameter",
        "description": "User can override this parameter in the chat window",
        "name": "scopedTest",
        "type": "string",
        "required": false,
        "scope": "chat_overridable"
      }
    ]
  },
  "publisher": "test",
  "author": "Author Name",
  "keywords": [
    "TestBrain",
    "test"
  ],
  "categories": [
    "brain"
  ],
  "license": "Apache-2.0",
  "dependencies": {
    "@hubai/brain-sdk": "^1.0.1",
    "tslib": "~2.5"
  },
  "volta": {
    "node": "18.12.1"
  }
}

```