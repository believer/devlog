---
layout: 'page'
slug: 'recommended-way-of-importing-react'
title: |
  Recommended way of importing React
tags: 'page'
excerpt: |
  tags: Development, React

pid: 211115185038
---

<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/recommended-way-of-importing-react">Recommended way of importing React</a></h2>

<div class="space-y-3">
<div class="element-block"><div class="bg-gray-800 py-2 px-4 flex-1 rounded-sm"><strong>tags:</strong> <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/development"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Development<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>

<strong>pid:</strong> 211115185038</div></div>

<div class="element-block ml-0"><div class="flex-1">There are a bunch of ways to import <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. Below are all the valid formats of importing <code>useState</code> from React. They have all been used at different times throughout the history of React. Read <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/kent-c.-dodds"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Kent C. Dodds<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>'s blog post below if you want to read a great summary of the differences.</div></div>

<div class="element-block ml-0"><div class="flex-1">

```js
// global
window.React.useState()

// CommonJS
const React = require('react')
React.useState()

// ESModules default import
import React from 'react'
React.useState()

// ESModules named import
import { useState } from 'react'
useState()

// ESModules namespace import
import * as React from 'react'
React.useState()
```

</div></div>

<div class="element-block ml-0"><div class="flex-1">Since React 17 was released we don't need to import React explicitly because of the new <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/jsx"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>JSX<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> transform. This means that only the final two formats above are needed today.</div></div>

<div class="element-block ml-0"><div class="flex-1">I would recommend using the last format, the namespaced import, with some of the benefits being</div></div>

<div class="element-block ml-4"><div class="flex-1">No need to update the import every time we need something else, like <code>useEffect</code> or <code>useReducer</code>.</div></div>

<div class="element-block ml-4"><div class="flex-1">Namespaced versions of the hooks are immediately obvious where they came from. Maybe you are also importing a custom <code>useState</code> hook. Down the line it will be easier to maintain because you don't need to look up which of the hooks you have imported.</div></div>

<div class="element-block ml-8"><div class="flex-1">

```js
import * as React from 'react'
import Auth from './auth'

React.useState()
Auth.useState()
```

</div></div>





<div class="element-block ml-0"><div class="flex-1">To make it easier to type I would recommend adding a snippet for it in your <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/ide"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>IDE<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. Here's <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://snippets.willcodefor.beer/javascript/imra" target="_blank" rel="noopener noreferrer">my snippet</a> which you can copy to <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/ultisnips"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Ultisnips<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> or <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/vs-code"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>VS Code<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>.</div></div>

<hr class="border-gray-700 !my-5" />

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/kent-c.-dodds"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Kent C. Dodds<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <em>Importing React Through the Ages</em>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://epicreact.dev/importing-react-through-the-ages/" target="_blank" rel="noopener noreferrer">Link</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/journals/2020-02-22"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>2020-02-22<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <em>The React team's recommendation</em>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://github.com/facebook/react/pull/18102" target="_blank" rel="noopener noreferrer">Link</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/michael-jackson"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Michael Jackson<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/journals/2021-11-02"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>2021-11-02<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://twitter.com/mjackson/status/1455320815361167362" target="_blank" rel="noopener noreferrer">Tweet</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/dan-abramov"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Dan Abramov<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/journals/2020-09-23"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>2020-09-23<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://twitter.com/dan_abramov/status/1308739731551858689" target="_blank" rel="noopener noreferrer">Tweet</a></div></div>
</div>


<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-700 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-11-15">2021-11-15</a>
  </section>
