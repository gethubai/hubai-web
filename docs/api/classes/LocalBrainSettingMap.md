# LocalBrainSettingMap
The LocalBrainSettingMap class inherits from the [ISettingMap](../interfaces/SettingMap) interface.

## Properties

| Name | Required | Type | Description |
| ---- | :------: | ---- | ----------- |
| `name` | Y | `string` | The name of the setting (Only letters, numbers, dash and underscore). Min 2 max 50 characters |
| `displayName` | Y | `string` | The display name of the setting. Min 2 max 50 characters |
| `description` |  | `string` | The description of the setting. Min 2 max 100 characters |
| `type` | Y | `string` | The type of the setting. Possible values: `[string, number, boolean, integer]` |
| `scope` |  | `string` | The scope of this setting. Possible values: <br/> `application`: The setting can only be changed on brain settings screen.<br/>  `chat_overridable`: The setting can be changed in the chat window (only for current chat) and in the brain settings screen<br/>  Defaults to `application` |
| `defaultValue` |  | `string` | The default value of the setting. Should match the type, if type is "integer" you can only have numbers here |
| `required` |  | `boolean` | Indicates if the setting is required. Defaults to false |
| `enumValues` |  | `string[]` | The allowed enum values. If this property is set, the property will be an enum. Obs: The options here should match the type. For example, if type is integer, we can only have numbers here. When type is string each option must have at least 1 character and at most 60 |

