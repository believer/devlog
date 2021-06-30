---
layout: 'page'
slug: 'dont-use-shorthands-in-css'
title: |
  Don't use shorthands in CSS
tags: 'page'
excerpt: |
  In CSS we have shorthands which makes it easier to write certain properties, for example background or margin. However, these affect more properties than what you're probably aiming for.
---

<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/dont-use-shorthands-in-css">Don't use shorthands in CSS</a></h2>

<div class="space-y-3">
<div class="element-block ml-0"><div class="flex-1">In <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/css"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>CSS<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> we have shorthands which makes it easier to write certain properties, for example <code>background</code> or <code>margin</code>. However, these affect more properties than what you're probably aiming for.</div></div>

<div class="element-block ml-0"><div class="flex-1">Instead use specific properties such as <code>background-color</code> or <code>margin-left</code></div></div>

<div class="element-block ml-0"><div class="flex-1">

```css
/*
 Here's an example where we want to change the background color to red.
*/
.test {
  background: red;
}
 
/*
 By using background we implicitly set all other values to initial
 when we only wanted to change the background color
*/
.test {
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: red;
}
```

</div></div>

<hr class="border-gray-700 !my-5" />

<div class="element-block ml-0"><div class="flex-1">CSS Wizardry. (<a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/journals/2016-12-12"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>2016-12-12<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>). <em>"CSS Shorthand Syntax Considered an Anti-Pattern"</em>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/" target="_blank" rel="noopener noreferrer">https://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><a class="dark:text-gray-400 text-gray-500" href="/pages/css">#CSS</a>, <a class="dark:text-gray-400 text-gray-500" href="/pages/development">#Development</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><strong class="text-rose-600 dark:text-rose-400">ID:</strong> 210427103751</div></div>
</div>


<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-800 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-06-22">2021-06-22</a>
  </section>
