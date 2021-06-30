---
layout: 'page'
slug: 'abortcontroller-can-be-used-to-cancel-multiple-request'
title: |
  AbortController can be used to cancel multiple request
tags: 'page'
excerpt: |
  Let's say the user clicks a link while we are still loading some data. Then we can use AbortController, a controller object that allows us to abort one or more web requests, to tell the browser to cancel and ignore the request.
---

<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/abortcontroller-can-be-used-to-cancel-multiple-request">AbortController can be used to cancel multiple request</a></h2>

<div class="space-y-3">
<div class="element-block ml-0"><div class="flex-1">Let's say the user clicks a link while we are still loading some data. Then we can use <code>AbortController</code>, a controller object that allows us to abort <strong class="text-rose-600 dark:text-rose-400">one or more web requests</strong>, to tell the browser to cancel and ignore the request.</div></div>

<div class="element-block ml-0"><div class="flex-1">

```js
const { signal } = new AbortController();
  
// Pass the same signal to multiple promises
fetch('url-one', { signal });
fetch('url-two', { signal });
  
// Cancel all requests
controller.abort();
```

</div></div>

<hr class="border-gray-700 !my-5" />

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/ryan-florence"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Ryan Florence<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. (<a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/journals/2021-06-21"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>2021-06-21<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>). <em>"AbortController"</em>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://ryanflorence.dev/p/abortcontroller" target="_blank" rel="noopener noreferrer">https://ryanflorence.dev/p/abortcontroller</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/mdn"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>MDN<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <em>AbortController</em>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://developer.mozilla.org/en-US/docs/Web/API/AbortController" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/API/AbortController</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><a class="dark:text-gray-400 text-gray-500" href="/pages/development">#Development</a>, <a class="dark:text-gray-400 text-gray-500" href="/pages/react">#React</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><strong class="text-rose-600 dark:text-rose-400">ID:</strong> 210622110339</div></div>
</div>


<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-800 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-06-22">2021-06-22</a>
  </section>
