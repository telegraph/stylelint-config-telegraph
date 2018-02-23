# stylelint-config-telegraph

This package provides TMG's base CSS .stylelintrc as an extensible shared config.

## Install

```
$ npm install --save-dev stylelint-config-telegraph
```

## Usage

Within your [stylelint config object](http://stylelint.io/user-guide/configuration/#extends) You can extend this configuration. This will serve as a base for your config, then you can make overrides in your own config object.

```json
{
  "extends": "stylelint-config-telegraph"
}
```

## Styleguide

### Selectors

#### ID

Never use ID selectors. The high specificty can cause unexpected interactions between styles.

#### Class

Class names should be in the Block Element Modifier (BEM) style. BEM allows for clean, reusable code, that makes a clear connection between the HTML markup and the styles.


## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)
