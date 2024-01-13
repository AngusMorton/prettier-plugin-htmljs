## A Prettier Plugin for Marko
This is a prettier plugin for Marko that uses the htmljs parser instead of the `@marko/compiler` to parse the AST. The high-level goal of this plugin is to match the way Prettier formats HTML documents so that a plain HTML marko document formats identically to an HTML document, with some caveats.

Some differences between this plugin and `prettier-plugin-marko` include:

**Empty lines follow Prettier's rules**
This is arguably a bug in `prettier-plugin-marko`. In this plugin, empty lines are collapsed into a single line in the same way as the HTML plugin. Similarly whitespace between top-level static elements follow the same rules.

See: https://prettier.io/docs/en/rationale.html#empty-lines

```marko
<div class="parent">

    <div>The newlines at the start and end of parent's body will be removed.</div>

    <div>But newlines between will be preserved.</div>

<div>
```

Becomes:
```marko
<div class="parent">
    <div>The newlines at the start and end of parent's body will be removed.</div>

    <div>But newlines between will be preserved.</div>
<div>
```

**Non-void tags have separate close tag**

__Why? Compatibility with Prettier's HTML formatting.__

```marko
<div/>
```

Becomes:

```marko
<div></div>
```


**No concise mode support**
Marko code written in concise mode will be rewritten as HTML tags (probably). It's entirely untested and unsupported.

__Why? Code length isn't worth optimizing for and concise mode increase the barrier to entry for new devs. But also because I didn't want to implement it.__

**JS-style comments**
HTML-style comments are converted into JS-style comments when printing.

For example:
```marko
<!-- This is an HTML comment. -->
<button>Press Me</button>
```

Is converted to:
```marko
// This is an HTML comment.
<button>Press Me</button>
```

__Why? Because JS-style comments can be used and parsed everywhere and it's more consistent/uniform.__

#### Roadmap
* Tags API Support.
* Improve `htmlWhitespaceSensitivity` support.
* Prettier ignore directive support.