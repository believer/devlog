---
layout: 'page'
id: '60d17b3f-a86a-4757-a241-7c26ccbd191f'
title: |
  What's new in React 18
tags: 'page'
excerpt: |
  Automatic batching
---

<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/what's-new-in-react-18">What's new in React 18</a></h2>

<div class="space-y-3">
<div class="element-block ml-0"><div class="flex-1"><h2 class="text-xl font-semibold" id="automatic-batching">Automatic batching</h2></div></div>

<div class="element-block ml-4"><div class="flex-1">If two <code>setState</code> hooks are called inside a function, they are batched together and only perform one re-render. However, if we were to use these same hooks inside any other context, like a <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/promise"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Promise<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, an event listener or a <code>setTimeout</code> you would get two renders. It was possible to get the same behavior using <code>unstable_batchedUpdates</code>, but as of <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> 18 it's now turned on by default.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
const handleClick = () => {
  setCount(count + 1)
  setClicked(true)
}
const [count, setCount] = React.useState(0)
const [clicked, setClicked] = React.useState(false)
	  
// These calls are batched together and only perform
// on re-render. This works before React 18
const handleClick = () => {
  setCount(count + 1)
  setClicked(true)
}
	  
// Before React 18, all three of the following cases would perform
// two re-renders. 
fetch('...').then(() => {
  setCount(count + 1)
  setClicked(true)
})
	  
element.addEventlistener('click', () => {
  setCount(count + 1)
  setClicked(true) 
})
	  
setTimeout(() => {
  setCount(count + 1)
  setClicked(true) 
}, 1000)
	  
// If you really want the updates to not be batched you can use
// the flushSync utility from react-dom
import { flushSync } from 'react-dom'
	  
const handleClick = () => {
  flushSync(() => {
    setCount(count + 1)
  })
  
  flushSync(() => {
    setClicked(true)
  })
}
```

</div></div>



<div class="element-block ml-0"><div class="flex-1"><h2 class="text-xl font-semibold" id="transitions">Transitions</h2></div></div>

<div class="element-block ml-4"><div class="flex-1">Transitions tell <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> which updates are urgent and which are not. A good example would be an input field that filters out a list. Entering an input would be marked as urgent and the filtering of the list is secondary. If the list is in the process of filtering, typing in the input would <strong class="text-rose-600 dark:text-rose-400">interrupt</strong> the filtering and discard the result.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
import { startTransition } from 'react'
	  
// Urgent: Show what was typed
setInputValue(value)
	  
startTransition(() => {
  // Secondary: Show results
  setSearchQuery(value)
})
```

</div></div>



<div class="element-block ml-0"><div class="flex-1"><h2 class="text-xl font-semibold" id="suspense-and-ssr">Suspense and SSR</h2></div></div>

<div class="element-block ml-4"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> 18 supports two features for better <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/ssr"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>SSR<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>: streaming HTML and selective hydration. <strong class="text-rose-600 dark:text-rose-400">Streaming HTML</strong> means that you can send some pieces of you UI directly and have it wait for other parts that might take longer to load. This works by using the <code>&lt;Suspense&gt;</code> component.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```jsx
// We render the important parts straight away
<Navigation />
<Article />
// The comments can take longer to load and aren't as important as the
// article. Therefore, we can make the UI wait for this
<Suspense fallback={<Spinner />}>
  <Comments />
</Suspense>
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">Hydration is the final part of making you page interactive when using SSR. It happens after the <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/javascript"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>JavaScript<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> has been fetched and loaded. Previously, this part would block the pattern above, but with <strong class="text-rose-600 dark:text-rose-400">selective hydration</strong> each part can start hydrating whenever that part is ready. If the user starts interacting with a component before it's been fully hydrated, React will <strong class="text-rose-600 dark:text-rose-400">prioritize</strong> hydrating that component.</div></div>



<hr class="border-gray-700 !my-5" />

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/evening-kid"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>evening kid<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. (<a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/journals/2021-06-10"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>2021-06-10<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>). <em>What’s new in React 18</em>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://www.youtube.com/watch?v=bpVRWrrfM1M" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=bpVRWrrfM1M</a></div></div>

<div class="element-block ml-0"><div class="flex-1"></div></div>

<div class="element-block ml-0"><div class="flex-1"><strong class="text-rose-600 dark:text-rose-400">ID:</strong> 210621072907</div></div>
</div>


<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-800 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-06-21">2021-06-21</a>
  </section>
