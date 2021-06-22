---
layout: 'page'
id: '60d18980-6a47-4f40-bd69-0147d2d88742'
title: |
  Structure of CSS
tags: 'page'
excerpt: |
  The basic blocks of CSS are properties and values. Properties are a human-readable identifiers that describe what is being styled. Values indicate how to style that property. When these are paired together they create a CSS declaration
---

<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/structure-of-css">Structure of CSS</a></h2>

<div class="space-y-3">
<div class="element-block ml-0"><div class="flex-1">The basic blocks of CSS are <strong class="text-rose-600 dark:text-rose-400">properties</strong> and <strong class="text-rose-600 dark:text-rose-400">values</strong>. Properties are a human-readable identifiers that describe <em>what</em> is being styled. Values indicate <em>how</em> to style that property. When these are paired together they create a <strong class="text-rose-600 dark:text-rose-400">CSS declaration</strong></div></div>

<div class="element-block ml-0"><div class="flex-1">

```css
/* Property: color, value: red - together they form a CSS declaration */
color: red;
```

</div></div>

<div class="element-block ml-0"><div class="flex-1">CSS declarations are found within <strong class="text-rose-600 dark:text-rose-400">CSS declaration blocks</strong>. When CSS declaration blocks are paired with <strong class="text-rose-600 dark:text-rose-400">selectors</strong> (or a list of selectors) they produce <strong class="text-rose-600 dark:text-rose-400">CSS rulesets</strong> (or CSS rules).</div></div>

<div class="element-block ml-0"><div class="flex-1">

```css
/* p is a selector which together with the CSS declaration block creates a CSS rule */
p {
  /* Multiple declarations form a CSS declaration block */
  background-color: black;
  color: white;
}
```

</div></div>

<hr class="border-gray-700 !my-5" />

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/mdn"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>MDN<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <em>How CSS is structured</em>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured</a></div></div>

<div class="element-block ml-0"><div class="flex-1"></div></div>

<div class="element-block ml-0"><div class="flex-1"><strong class="text-rose-600 dark:text-rose-400">ID:</strong> 210622091048</div></div>
</div>


<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-800 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-06-22">2021-06-22</a>
  </section>
