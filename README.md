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
<div class="💧∘myThing" data-theme="dark" data-state="active loading">
  <h3 class="💧∘myThing_title">
    This is My Thing
    <i class="🧱/icon 💧∘myThing_titleIcon" data-shape="rounded">🚽</i>
  </h3>
</div>
```

```scss
// 🧱.css
.🧱 {...}
.🧱∘icon {...}

// 💧.css
.💧 {...}

// 💧/MyThing.css
.💧∘myThing {...}

.💧∘myThing_title {...}

.💧∘myThing_titleIcon {...}
.💧∘myThing_titleIcon[data-shape="rounded"] {...}
.💧∘myThing_titleIcon[data-shape="circle"] {...}

.💧∘myThing[data-theme="light"] {...}
.💧∘myThing[data-theme="dark"] {...}
.💧∘myThing[data-state*="active"] {...}
.💧∘myThing[data-state*="loading"] {...}

.💧∘myThing[data-theme="dark"] {
    .💧∘myThing_title {...}
    .💧∘myThing_titleIcon {...}
}

```

| Scope | BLock     | Elements               | Modifiers                                                                                                                                                       |
| ----- | --------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `💧`  | `myThing` | `title`<br>`titleIcon` | `[data-shape="rounded"]`<br>`[data-shape="circle"]`<br>`[data-theme="light"]`<br>`[data-theme="dark"]`<br>`[data-state*="active"]`<br>`[data-state*="loading"]` |

---

## ???

<!-- TODO -->

`{ :/: }`
