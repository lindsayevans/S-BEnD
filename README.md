# S-BEnD

> A scalable, pragmatic, synergistic selector naming strategy empowering end-users with efficient low-code solutions to … _something, something_ toilet humour & emoji 🤘

```LOGO.LOGO
 ↓
 .
{Scope}
 ∘
{Block}
 _
(Element)
 ⅋
[Data]
```

Kinda like BEM, but with more emoji.<br>
And scoping. And no `__`. And `data-` modifiers.<br>
So, not really like BEM at all…

## OFFICIAL PRONUNCIATIONs

- IPA: `/ʃaɪt/`
- enPR: `shīt`

## FORMAL GRAMMAR or whatevs

`.S∘B_E[D] {...}`

### BNF

> oh god how did this get in here I am not good with computers

```bnf
<rule> ::= <selector> "{" <declaration>* "}" | <selector> "[" <attribute-selector> "]" "{" <declaration>* "}"
<selector> ::= "." <scope> | "." <scope> <lay-pipe> <block> | "." <scope> "[" <attribute-selector> "]"
<scope> ::= <poop-emoji>
<lay-pipe> ::= "∘"
<block> ::= <lolwut>
<attribute-selector> ::= <attribute> "=" <yolo> | <attribute> "*=" <yolo>
<attribute> ::= "data-*"
<poop-emoji> ::= <unicode-emoji-range>
<yolo> ::= <string>
<declaration> ::= <property> ":" <value> ";"
<property> ::= /* Any CSS property */
<value> ::= /* Any CSS value */
```

## EXAMPLES

### PSEUDOCODE

```html
<div class="💧∘dunnyBlock" data-theme="dark" data-state="active loading">
  <h3 class="💧∘dunnyBlock_title">
    This is My Thing
    <i class="🧱∘icon 💧∘dunnyBlock_titleIcon" data-shape="rounded">🚽</i>
  </h3>
</div>
```

```scss
.💧∘dunnyBlock {...}

.💧∘dunnyBlock_title {...}

.💧∘dunnyBlock_titleIcon {...}
.💧∘dunnyBlock_titleIcon[data-shape="rounded"] {...}
.💧∘dunnyBlock_titleIcon[data-shape="circle"] {...}

.💧∘dunnyBlock[data-theme="light"] {...}
.💧∘dunnyBlock[data-theme="dark"] {...}
.💧∘dunnyBlock[data-state*="active"] {...}
.💧∘dunnyBlock[data-state*="loading"] {...}

.💧∘dunnyBlock[data-theme="dark"] {
    .💧∘dunnyBlock_title {...}
    .💧∘dunnyBlock_titleIcon {...}
}

```

| Scope | BLock        | Elements               | Modifiers                                                                                                                                                       |
| ----- | ------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `💧`  | `dunnyBlock` | `title`<br>`titleIcon` | `[data-shape="rounded"]`<br>`[data-shape="circle"]`<br>`[data-theme="light"]`<br>`[data-theme="dark"]`<br>`[data-state*="active"]`<br>`[data-state*="loading"]` |

### SUDOCODE

I made an exmaple in [`./demo`](./demo/) for you to look at the coloured words or [click here](https://lindsayevans.github.io/S-BEnD/) if you like clicking on things

---

## ???

<!-- TODO -->

`{ :/: }`
