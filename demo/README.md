# [S-BEnD](https://github.com/lindsayevans/S-BEnD) DEMO

S-BEnD selectors are defined in [`MyFoo.module.css`](./components/MyFoo/MyFoo.module.css)

Scope is defined in [`package.json`](../package.json#L13):<br>
`@parcel/transformer-css.cssModules.pattern: "💧∘[local]"`

Also forces CSS Modules to output unmangled classnames in the global scope for some reason that eludes me now but seemed like a good idea at 3am

---

## Run

```sh
pnpm start
```
