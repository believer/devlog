---
layout: 'page'
slug: 'use-the-objects-identifier-type'
title: |
  Use the object's identifier type
tags: 'page'
excerpt: |
  tags: TypeScript, Development

pid: 211117191049
---

<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/use-the-objects-identifier-type">Use the object's identifier type</a></h2>

<div class="space-y-3">
<div class="element-block"><div class="bg-gray-800 py-2 px-4 flex-1 rounded-sm"><strong>tags:</strong> <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/typescript"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>TypeScript<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/development"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Development<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>

<strong>pid:</strong> 211117191049</div></div>

<div class="element-block ml-0"><div class="flex-1">Select the object's identifier type instead of using for example <code>string</code> when you have a function that should only take a specific identifier. This will make the code easier to refactor and also make it more evident what the function is expecting.</div></div>

<div class="element-block ml-0"><div class="flex-1">

```ts
type Task = {
  id: string
}

// This is fine, but might require refactoring if the id ever changes type
function getTask(id: string) {}

// Better alternative
function getTask(id: Task['id']) {}
```

</div></div>

<hr class="border-gray-700 !my-5" />

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/erik-rasmussen"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Erik Rasmussen<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/journals/2021-11-09"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>2021-11-09<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://twitter.com/erikras/status/1457999235564154882" target="_blank" rel="noopener noreferrer">Tweet</a></div></div>
</div>

<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-700 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-11-17">2021-11-17</a>
  </section>
