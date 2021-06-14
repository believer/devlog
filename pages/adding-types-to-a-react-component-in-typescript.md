---
layout: page
id: '60c6fc03-d9b1-49b7-ac5a-98d0539ef763'
title: 'Adding types to a React component in TypeScript'
tags: page
excerpt: |
  In the types for [[React]], @types/react, there's an included helper for typing components called React.FC (or the longer version React.FunctionComponent). However, there are some downsides to using this.

---
  
<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" href="/pages/adding-types-to-a-react-component-in-typescript">Adding types to a React component in TypeScript</a></h2>

<div class="space-y-3">
<div class="element-block ml-0"><div class="flex-1">In the types for <a class="text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" href="/pages/react"><span class="text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-500 group-hover:text-teal-900">]]</span></a>, <code>@types/react</code>, there's an included helper for typing components called <code>React.FC</code> (or the longer version <code>React.FunctionComponent</code>). However, there are some downsides to using this.</div></div>

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

<div class="element-block ml-0"><div class="flex-1">There are multiple types we could use for the component's return type: <code>React.ReactElement</code>, <code>JSX.Element</code>, <code>React.ReactNode</code>. To not be too wide or too narrow with the typings, it's better to just rely on <a class="text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" href="/pages/typescript"><span class="text-gray-500 group-hover:text-teal-900">[[</span>TypeScript<span class="text-gray-500 group-hover:text-teal-900">]]</span></a>'s inference by not adding an explicit type.</div></div>

<hr class="border-gray-700 !my-5" />

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" href="/pages/kent-c.-dodds"><span class="text-gray-500 group-hover:text-teal-900">[[</span>Kent C. Dodds<span class="text-gray-500 group-hover:text-teal-900">]]</span></a>. (<a class="text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" href="/journals/2021-03-04"><span class="text-gray-500 group-hover:text-teal-900">[[</span>2021-03-04<span class="text-gray-500 group-hover:text-teal-900">]]</span></a>). <em>How to write a React Component in TypeScript</em>. <a class="text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" href="https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript" target="_blank" rel="noopener noreferrer">https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><a class="text-gray-400" href="/pages/typescript">#TypeScript</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><strong class="text-rose-400">ID:</strong> 210614085847</div></div>
</div>


<section class="mt-8 space-y-2">
<header class="text-gray-400">Linked references</header>
<a class="block bg-gray-800 p-4 rounded text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-900 hover:ring-teal-400" href="/journals/2021-06-14">2021-06-14</a>
  </section>
