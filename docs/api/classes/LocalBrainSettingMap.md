# LocalBrainSettingMap
The LocalBrainSettingMap class inherits from the [ISettingMap](../interfaces/SettingMap) interface.

## Properties

| Name | Required | Type | Description |
| ---- | :------: | ---- | ----------- |
| `name` | Y | `string` | The name of the setting (Only letters, numbers, dash and underscore). Min 2 max 50 characters |
| `displayName` | Y | `string` | The display name of the setting. Min 2 max 50 characters |
| `description` |  | `string` | The description of the setting. Min 2 max 100 characters |
| `type` | Y | `string` | The type of the setting. Possible values: `[string, number, boolean, integer]` |
| `isSecret` |  | `boolean` | True if this is a secret setting (for example: Api Keys, passwords, etc). The input will be masked (as password) in the setting screen |
| `scope` |  | `string` | The scope of this setting. Possible values: <br/> `application`: The setting can only be changed on brain settings screen.<br/>  `chat_overridable`: The setting can be changed in the chat window (only for current chat) and in the brain settings screen<br/>  Defaults to `application` |
| `capabilities` |  | `string[]` | List of capabilities name that this setting is for. For example, if that's a setting that only applies to the `conversation` capability, fill this field with `conversation`. If empty it will be applied to all capabilities. See [brain manifest](/docs/brains/development/manifest) for a list of all supported capabilities |
| `defaultValue` |  | `string` | The default value of the setting. Should match the type, if type is "integer" you can only have numbers here |
| `required` |  | `boolean` | Indicates if the setting is required. Defaults to false |
| `enumValues` |  | `string[]` | The allowed enum values. If this property is set, the property will be an enum. Obs: The options here should match the type. For example, if type is integer, we can only have numbers here. When type is string each option must have at least 1 character and at most 60 |

