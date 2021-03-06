---
layout: 'page'
slug: 'adding-types-to-a-react-component-in-typescript'
title: |
  Adding types to a React component in TypeScript
tags: 'page'
excerpt: |
  tags: TypeScript, Development, React

pid: 210614085847
---

<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/adding-types-to-a-react-component-in-typescript">Adding types to a React component in TypeScript</a></h2>

<div class="space-y-3">
<div class="element-block"><div class="bg-gray-800 py-2 px-4 flex-1 rounded-sm"><strong>tags:</strong> <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/typescript"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>TypeScript<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/development"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Development<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>

<strong>pid:</strong> 210614085847</div></div>

<div class="element-block ml-0"><div class="flex-1">In the types for <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, <code>@types/react</code>, there's an included helper for typing components called <code>React.FC</code> (or the longer version <code>React.FunctionComponent</code>). However, there are some downsides to using this.</div></div>

<div class="element-block ml-4"><div class="flex-1">The component will accept <code>children</code> even if we're not using it. This happens because <code>React.FC</code> implicitly sets the <code>children</code> and some other values.</div></div>

<div class="element-block ml-4"><div class="flex-1">We can't use generics</div></div>

<div class="element-block ml-4"><div class="flex-1">We can't use function declarations</div></div>



<div class="element-block ml-0"><div class="flex-1">

```tsx
import React from 'react'
  
interface AppProps {
  text: string
}
  
// Using React.FC
const App: React.FC<AppProps> = ({ text }) => {
  return <div>{text}</div>
}
  
// This would compile
<App text="Testing">I'm content that's not used</App>
```

</div></div>

<div class="element-block ml-0"><div class="flex-1">Since React is nothing special you can use the regular syntax for defining variables to a function. This solves all of over pain points listed above.</div></div>

<div class="element-block ml-0"><div class="flex-1">

```tsx
// Same import and interface
  
// Using regular function typings
const App = ({ text }: AppProps) => {
  return <div>{text}</div>
}
  
// This would NOT compile
<App text="Testing">I'm content that's not used</App>
  
// This would compile
<App text="Testing" />
```

</div></div>

<div class="element-block ml-0"><div class="flex-1">There are multiple types we could use for the component's return type: <code>React.ReactElement</code>, <code>JSX.Element</code>, <code>React.ReactNode</code>. To not be too wide or too narrow with the typings, it's better to just rely on <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/typescript"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>TypeScript<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>'s inference by not adding an explicit type.</div></div>

<hr class="border-gray-700 !my-5" />

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/kent-c.-dodds"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Kent C. Dodds<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. (<a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/journals/2021-03-04"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>2021-03-04<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>). <em>How to write a React Component in TypeScript</em>. <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript" target="_blank" rel="noopener noreferrer">Link</a></div></div>
</div>


<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-700 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-06-14">2021-06-14</a>
  </section>
