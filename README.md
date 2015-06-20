# inline-css-for-svg
Javascript function to inline CSS rules into an SVG element

# Usage
When working with SVG in HTML, it's handy to style SVG using CSS.

```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="20" x2="80" y2="80"></line>
</svg>

<style>
  line{
    stroke: rgb(0, 0, 0);
    stroke-width: 10px;
  }
</style>
```

However, if you save or export this SVG directly, other programs such as Illustrator or Inkscape will not know how to style the SVG.

Pass an SVGElement to `inlineAllStylesheets()` to inline CSS properties.

```
inlineAllStylesheets(document.querySelector('svg'));
```

The resultant SVG element will have all the properties from CSS rules that apply to it set as inline attributes:

```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="20" x2="80" y2="80" stroke="rgb(0, 0, 0)" stroke-width="10px"></line>
</style>
```

See [example.html](example.html) to see how this can be used to download SVG files using javascript that can be viewed in other editors.

# Limitations
Styles with selectors set on ancestors of the SVG element will not be inlined.

For example, if you have a declaration like...

```
body{
  font-family: sans-serif;
}
```

...it will not be inlined. Better to be explicit about styling the SVG elements:

```
svg{
  font-family: sans-serif;
}
```
