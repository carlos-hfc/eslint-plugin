# @carlos-hfc/eslint-plugin

ESLint plugin with configurations for React and Node.js projects.

## Setup

Install the plugin and ESLint 9:

```bash
npm i -D @carlos-hfc/eslint-plugin eslint@^9
```

Then pick one config per project and add it to `eslint.config.mjs`.

### React

```js
import plugin from "@carlos-hfc/eslint-plugin"

export default plugin.configs.react
```

### React Native

```js
import plugin from "@carlos-hfc/eslint-plugin"

export default plugin.configs.reactNative
```

### Next.js

Next.js uses its own subpath import:

```js
import next from "@carlos-hfc/eslint-plugin/next"

export default next
```

### Node.js

```js
import plugin from "@carlos-hfc/eslint-plugin"

export default plugin.configs.node
```

Use only one config per project. Combining them can cause plugin conflicts.

## Compatibility

> [!NOTE]
> This plugin currently supports ESLint 9. ESLint 10 is not yet supported because `eslint-plugin-react` doesn't declare support for it


## License

MIT

## Repository

[GitHub](https://github.com/carlos-hfc/eslint-plugin)