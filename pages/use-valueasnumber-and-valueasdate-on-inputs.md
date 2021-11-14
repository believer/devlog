---
layout: 'page'
slug: 'use-valueasnumber-and-valueasdate-on-inputs'
title: |
  Use valueAsNumber and valueAsDate on inputs
tags: 'page'
excerpt: |
  If you want to get the value of an input as a number or a date you can easily parse the value of a type="text" input. However, there's an easier solution by using valueAsNumber or valueAsDate. The attributes are only available for certain input types. The attributes return NaN if not available or if the value is invalid.
---

<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/use-valueasnumber-and-valueasdate-on-inputs">Use valueAsNumber and valueAsDate on inputs</a></h2>

<div class="space-y-3">
<div class="element-block ml-0"><div class="flex-1">If you want to get the value of an input as a number or a date you can easily parse the value of a <code>type="text"</code> input. However, there's an easier solution by using <code>valueAsNumber</code> or <code>valueAsDate</code>. The attributes are only available <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#input-type-attr-summary" target="_blank" rel="noopener noreferrer">for certain input types</a>. The attributes return <code>NaN</code> if not available or if the value is invalid.</div></div>

<div class="element-block ml-0"><div class="flex-1">Browser support is great, <code>valueAsNumber</code> is supported by all browsers (even <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/ie"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>IE<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>) and <code>valueAsDate</code> is supported by all browsers except IE.</div></div>

<div class="element-block ml-0"><div class="flex-1">

```js
// This will always return NaN since valueAsNumber is not available on text inputs
<input type="text" onChange={e => console.log(e.target.valueAsNumber)} />

// Return the value as an integer or a float
// depending on the input's step attribute
<input type="number" onChange={e => console.log(e.target.valueAsNumber)} />

// Return the date as a UNIX timestamp, i.e. new Date().getTime()
<input type="date" onChange={e => console.log(e.target.valueAsNumber)} />

// Return the date as a JS Date object
<input type="date" onChange={e => console.log(e.target.valueAsDate)} />
```

</div></div>

<hr class="border-gray-700 !my-5" />

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/mdn"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>MDN<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/journals/2021-11-10"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>2021-11-10<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <em>HTMLInputElement</em>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement" target="_blank" rel="noopener noreferrer">Link</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/can-i-use"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Can I Use<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/journals/2021-11-10"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>2021-11-10<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <em>HTMLInputElement API: valueAsNumber</em>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://caniuse.com/mdn-api_htmlinputelement_valueasnumber" target="_blank" rel="noopener noreferrer">Link</a></div></div>
</div>


<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-800 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-11-10">2021-11-10</a>
  </section>
