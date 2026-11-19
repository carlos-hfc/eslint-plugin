import { Linter } from 'eslint'

declare const plugin: {
  configs: {
    next: Linter.Config[]
    node: Linter.Config[]
    react: Linter.Config[]
    reactNative: Linter.Config[]
  }
}

export = plugin