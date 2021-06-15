---
layout: page
id: '60c8dfac-0582-45a5-b619-949f9c9c02fb'
title: 'Frontend testing workshop'
tags: page
excerpt: |
  This is a workshop in [[Frontend]] [[Testing]] that I held at [[Hemnet]]. The idea was to have it sort of like a [[Mob programming]] session so that each participant got to code and get a feel for the code instead of just sitting and listening to me talk about it.

---
  
<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/frontend-testing-workshop">Frontend testing workshop</a></h2>

<div class="space-y-3">
<div class="element-block ml-0"><div class="flex-1">This is a workshop in <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/frontend"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Frontend<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/testing"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Testing<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> that I held at <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/hemnet"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Hemnet<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. The idea was to have it sort of like a <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/mob-programming"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Mob programming<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> session so that each participant got to code and get a feel for the code instead of just sitting and listening to me talk about it.</div></div>

<div class="element-block ml-0"><div class="flex-1">The focus of the workshop was for the participants to get better knowledge in testing some of the more uncommon/advanced testing paths.</div></div>

<div class="element-block ml-0"><div class="flex-1">We're using <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/jest"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Jest<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/testing-library"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Testing Library<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, and <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react-query"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React Query<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>.</div></div>

<div class="element-block ml-0"><div class="flex-1"><h3 class="text-lg font-semibold">Context</h3></div></div>

<div class="element-block ml-4"><div class="flex-1">We'll start off by testing <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>'s context. The full starting code is available in the <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://github.com/believer/frontend-testing-workshop" target="_blank" rel="noopener noreferrer">testing repo</a>. The relevant code are these three files where we have set up a tiny application with a <code><Text></code> component that gets a text from the context and displays it to the user.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// AppContext.js
import React from 'react'
	  
// Create a React context and set the default text value to an empty string
export const AppContext = React.createContext({
  text: '',
})
	  
// Create a custom hook to make it easier to access the context
export const useApp = () => React.useContext(AppContext)
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// App.js
import { AppContext, useApp } from './AppContext'
	  
export const Text = () => {
  const { text } = useApp()
	  
  return <div>{text}</div>
}
	  
export default function App({ text }) {
  return (
    <AppContext.Provider value={{ text }}>
      <Text />
    </AppContext.Provider>
  )
}
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// App.test.js
import App, { Text } from './App'
import { screen, render } from '@testing-library/react'
	  
// All the tests we'll create prepared as TODOs
test.todo('renders app')
test.todo('Text using a mocked useApp hook')
test.todo('Text by importing the context')
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">Let's start with the first test, that the app renders correctly.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// App.test.js
	  
test('renders app', () => {
  // Render the App component and pass a text prop
  // The text prop is added to the context
  render(<App text="Frontend testing is fun!" />)
	  
  // Assert that the document contains a text with the value
  // that we passed to the context. The toBeInTheDocument assertion comes
  // from @testing-library/jest-dom
  expect(screen.getByText(/frontend testing is fun/i)).toBeInTheDocument()
})
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">Next, we want to try render the <code><Text></code> component in isolation and here's where we'll start seeing some issues. If we just try to render the component, <code>render(<Text />)</code>, and use the same assertion as above we'll get an error that the text can't be found. This happens because the <code><Text></code> component is no longer wrapped in a React context and it get's the default value for <code>text</code> which we defined in when creating the context using <code>React.createContext</code>.</div></div>

<div class="element-block ml-4"><div class="flex-1">To get around this we'll need some way of getting the data to the component. Our first attempt will be to mock the response of the custom hook, <code>useApp</code>, that we've defined for our context.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// App.test.js
// This import will be a mocked version as defined by jest.mock below
import { useApp } from './AppContext'
		  		  
// This is a mock that automatically determines what the file contains
// and provides mocked functions for each exported value
jest.mock('./AppContext')
	  
// Mock the response of the useApp hook before each test runs
beforeEach(() => {
  useApp.mockReturnValue({
    text: 'Frontend testing is fun!',
  })
})
		  
test('Text using a mocked useApp hook', () => {
  // Render the Text component
  render(<Text />)
		  		  
  // Since the useApp hook is now mocked, we'll get a passing text
  expect(screen.getByText(/frontend testing is fun/i)).toBeInTheDocument()
})
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">This works fine. However, if we were to remove the <code>text</code> prop from our first test and only use <code>render(<App />)</code> that test would still pass! That is because we've effectively mocked the entire context for all tests, which is not really want we want.</div></div>

<div class="element-block ml-4"><div class="flex-1">Let's try it another way. This time by adding the context inside our test.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// App.test.js
// Import the AppContext, note that this is the real version and
// not a mocked version
import { AppContext } from './AppContext'
	  
test('Text by importing the context', () => {
  // Wrap our Text component in the AppContext.Provider and
  // provide it with the value we want displayed in the Text component
  render(
    <AppContext.Provider value={{ text: 'Frontend testing is fun' }}>
      <Text />
    </AppContext.Provider>
  )
	  
  expect(screen.getByText(/frontend testing is fun/i)).toBeInTheDocument()
})
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">Now this is much better. Now we're not messing with the first test and are instead asserting that the <code>Text</code> component works using the correct context. This is a trivial example, but for bigger contexts that are used across multiple files this would be a great solution for testing in isolation but still maintaining the integration testing aspect.</div></div>

<div class="element-block ml-4"><div class="flex-1">The final code for our tests looks like this and it's available in the repo on the branch <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://github.com/believer/frontend-testing-workshop/tree/1-context-complete" target="_blank" rel="noopener noreferrer">1-context-complete</a></div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
import App, { Text } from './App'
import { screen, render } from '@testing-library/react'
import { AppContext } from './AppContext'

test('renders app', () => {
  render(<App text="Frontend testing is fun!" />)

  expect(screen.getByText(/frontend testing is fun/i)).toBeInTheDocument()
})

test('Text by importing the context', () => {
  render(
    <AppContext.Provider value={{ text: 'Frontend testing is fun' }}>
      <Text />
    </AppContext.Provider>
  )

  expect(screen.getByText(/frontend testing is fun/i)).toBeInTheDocument()
})
```

</div></div>



<div class="element-block ml-0"><div class="flex-1"><h3 class="text-lg font-semibold">Async</h3></div></div>

<div class="element-block ml-4"><div class="flex-1">For our second testing scenario we are going to test an asynchronous hook. For this we'll use <code>react-query</code>'s ``</div></div>


</div>


<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-800 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-06-16">2021-06-16</a>
  </section>
