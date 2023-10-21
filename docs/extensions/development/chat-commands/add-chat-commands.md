# Adding commands to chat

To add a new command to the chat, we need to add an entry into the `contributes` section of the `package.json` file:

```json
{
  "extension": {
    "contributes": {
      "chat": {
        "commands": {
          "act": [
            {
              "path": "./src/chatCompletions/act.json",
              "language": "en"
            }
          ],
          "prompt": [
            {
              "path": "./src/chatCompletions/prompt.json",
              "language": "en"
            }
          ]
        }
      }
    }
  }
}
```

The `commands` property is an object where the key is the command name and the value is an array of objects with the following properties:

- `path`: The path to the file that contains the command completions.
- `language`: The language of the command completions.

The file that contains the command completions must be a JSON file with the following structure:

```json
[
  {
    "label": "translatorLanguage",
    "insertText": "I want you to act as an ${1:language} translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in ${1:language}. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level ${1:language} words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is \"istanbulu cok seviyom burada olmak cok guzel\"",
    "shortDescription": "Act as a translator",
    "description":"This is the super amazing translator language command. use it with wise"
  },
]
```

- `label` is the name of the command. It must be unique. In the example above, the user can type '/act translatorLanguage' to use the command. (Assuming that the command name is 'act')
- `insertText` is the text that will be inserted into the chat when the user selects the command. You can use placeholders to insert dynamic values into the text. The placeholders are defined using the following syntax: `${index:placeholderName}`. The `index` is the index of the placeholder. The `placeholderName` is the name of the placeholder. The `placeholderName` is optional. If you don't specify a name, the placeholder will be named `arg${index}`. Refer to the [vscode documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_placeholders) for more information about placeholders. (We use monaco editor in the chat, so the syntax is the same)
- `shortDescription` is the short description of the command. It is displayed in the command list when the user types '/' in the chat.
- `description` is the description of the command. It is displayed in the command list when the user types '/' in the chat and selects the command.