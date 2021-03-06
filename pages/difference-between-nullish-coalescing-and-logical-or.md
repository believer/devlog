---
layout: 'page'
slug: 'difference-between-nullish-coalescing-and-logical-or'
title: |
  Difference between nullish coalescing (??) and logical or (||)
tags: 'page'
excerpt: |
  tags: Development, JavaScript

pid: 210922101321
---

<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/difference-between-nullish-coalescing-and-logical-or">Difference between nullish coalescing (??) and logical or (||)</a></h2>

<div class="space-y-3">
<div class="element-block"><div class="bg-gray-800 py-2 px-4 flex-1 rounded-sm"><strong>tags:</strong> <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/development"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Development<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/javascript"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>JavaScript<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>

<strong>pid:</strong> 210922101321</div></div>

<div class="element-block ml-0"><div class="flex-1"><code>||</code> (logical OR) will use the right value when the left side is <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/falsy"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>falsy<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <code>??</code> (nullish coalescing) only uses the right value when the left side is <em>nullish</em>, i.e. <code>null</code> or <code>undefined</code>.</div></div>

<div class="element-block ml-0"><div class="flex-1">

```js
// ||
console.log('' || 'default') // 'default'
console.log('test' || 'default') // 'test'

console.log(0 || 'default') // 'default'
console.log(12 || 'default') // 12

console.log(false || 'default') // 'default'
console.log(true || 'default') // true

console.log(undefined || 'default') // 'default'
console.log(null || 'default') // 'default'

// ??
console.log('' ?? 'default') // ''
console.log('test' ?? 'default') // 'test'

console.log(0 ?? 'default') // 0
console.log(12 ?? 'default') // 12

console.log(false ?? 'default') // false
console.log(true ?? 'default') // true

console.log(undefined ?? 'default') // 'default'
console.log(null ?? 'default') // 'default'
```

</div></div>
</div>


<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-700 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-09-22">2021-09-22</a>
  </section>
