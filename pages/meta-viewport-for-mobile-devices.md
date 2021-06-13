---
layout: page
id: '60c5b2b0-4801-4d95-8a41-7ce543575878'
title: 'Meta viewport for mobile devices'
tags: page
excerpt: |
  Mobile devices render pages in a virtual viewport, which is usually wider than the screen, and shrink the content to fit. This viewport won't work when we want to use [[Media queries]]. If the viewport is 980px and we have media queries that target 480px, they'll never fire.

---
  
<h2 class="text-3xl font-semibold mb-4"><a href="/journals/Meta viewport for mobile devices">Meta viewport for mobile devices</a></h2>

<div class="space-y-2">
<div class="element-block ml-0"><div class="flex-1">Mobile devices render pages in a virtual viewport, which is usually wider than the screen, and shrink the content to fit. This viewport won't work when we want to use <a class="text-teal-400 group" href="/pages/media-queries"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>Media queries<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a>. If the viewport is <code>980px</code> and we have media queries that target <code>480px</code>, they'll never fire.</div></div>

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-400 group" href="/pages/apple"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>Apple<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a> introduced the <code>viewport</code> <code>meta</code> tag in <a class="text-teal-400 group" href="/pages/safari"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>Safari<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a> to let developers control the viewport's size and scale. This is not part of any web standard, but it's supported by most other mobile browsers.</div></div>

<div class="element-block ml-0"><div class="flex-1">

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

</div></div>
</div>
