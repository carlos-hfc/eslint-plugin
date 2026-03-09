# @carlos-hfc/eslint-plugin

ESLint plugin with configurations for React and Node.js projects.

## Setup

### React

Install dependencies:

```bash
npm i -D eslint @carlos-hfc/eslint-plugin
```

Create eslint file:

```bash
touch eslint.config.js
```

Add to `eslint.config.js`:

```js
import plugin from "@carlos-hfc/eslint-plugin"

export default plugin.configs.react
```

### Node.js

Install dependencies:

```bash
npm i -D eslint @carlos-hfc/eslint-plugin
```

Create eslint file:

```bash
touch eslint.config.js
```

Add to `eslint.config.js`:

```js
import plugin from "@carlos-hfc/eslint-plugin"

export default plugin.configs.node
```

## License

MIT

## Repository

[GitHub](https://github.com/carlos-hfc/eslint-plugin)