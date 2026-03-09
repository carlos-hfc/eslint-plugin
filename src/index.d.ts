import { Linter } from 'eslint';

declare const plugin: {
  configs: {
    node: Linter.Config[];
    react: Linter.Config[];
  };
};

export = plugin;