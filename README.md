# @ch-faustino/eslint-plugin

ESLint plugin with configurations for React and Node.js projects.

## Setup

### React

Install dependencies:

```bash
npm i -D eslint @ch-faustino/eslint-plugin
```

Create eslint file:

```bash
touch eslint.config.js
```

Add to `eslint.config.js`:

```js
import plugin from "@ch-faustino/eslint-plugin"

export default plugin.configs.react
```

### Node.js

Install dependencies:

```bash
npm i -D eslint @ch-faustino/eslint-plugin
```

Create eslint file:

```bash
touch eslint.config.js
```

Add to `eslint.config.js`:

```js
import plugin from "@ch-faustino/eslint-plugin"

export default plugin.configs.node
```