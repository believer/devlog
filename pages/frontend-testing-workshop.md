---
layout: page
id: '60c8fcdc-1f65-4acd-af4b-6e7fcc95e364'
title: 'Frontend testing workshop'
tags: page
excerpt: |
  This is a workshop in Frontend Testing that I held at Hemnet. The idea was to have it sort of like a Mob programming session so that each participant got to code and get a feel for the code instead of just sitting and listening to me talk about it.

---
  
<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/frontend-testing-workshop">Frontend testing workshop</a></h2>

<div class="space-y-3">
<div class="element-block ml-0"><div class="flex-1">This is a workshop in <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/frontend"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Frontend<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/testing"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Testing<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> that I held at <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/hemnet"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Hemnet<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. The idea was to have it sort of like a <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/mob-programming"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Mob programming<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> session so that each participant got to code and get a feel for the code instead of just sitting and listening to me talk about it.</div></div>

<div class="element-block ml-0"><div class="flex-1">The focus of the workshop was for the participants to get better knowledge in testing some of the more uncommon/advanced testing paths.</div></div>

<div class="element-block ml-0"><div class="flex-1">The code is available at <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://github.com/believer/frontend-testing-workshop" target="_blank" rel="noopener noreferrer">believer/frontend-testing-workshop</a> and split into three branches: <code>1-context</code>, <code>2-async</code> and <code>3-hooks</code>. Each branch also has a sibling with the completed state for that scenario. The completed branch names are the same but with <code>-complete</code> added at the end, e.g. <code>1-context-complete</code>.</div></div>

<div class="element-block ml-0"><div class="flex-1">We're using <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/jest"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Jest<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/testing-library"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>Testing Library<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>, and <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react-query"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React Query<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>.</div></div>

<div class="element-block ml-0"><div class="flex-1"><h3 class="text-lg font-semibold" id="sections">Sections</h3></div></div>

<div class="element-block ml-4"><div class="flex-1"><a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="#context">Context</a></div></div>

<div class="element-block ml-4"><div class="flex-1"><a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="#async">Async</a></div></div>

<div class="element-block ml-4"><div class="flex-1"><a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="#custom-hooks">Custom-hooks</a></div></div>



<div class="element-block ml-0"><div class="flex-1"><h3 class="text-lg font-semibold" id="context">Context</h3></div></div>

<div class="element-block ml-4"><div class="flex-1">We'll start off by testing <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/react"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>React<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>'s context. The full starting code is available in the <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://github.com/believer/frontend-testing-workshop" target="_blank" rel="noopener noreferrer">testing repo</a>. The relevant code are these three files where we have set up a tiny application with a <code>&lt;Text&gt;</code> component that gets a text from the context and displays it to the user.</div></div>

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

<div class="element-block ml-4"><div class="flex-1">Next, we want to try render the <code>&lt;Text&gt;</code> component in isolation and here's where we'll start seeing some issues. If we just try to render the component, <code>render(&lt;Text /&gt;)</code>, and use the same assertion as above we'll get an error that the text can't be found. This happens because the <code>&lt;Text&gt;</code> component is no longer wrapped in a React context and it get's the default value for <code>text</code> which we defined in when creating the context using <code>React.createContext</code>.</div></div>

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

<div class="element-block ml-4"><div class="flex-1">This works fine. However, if we were to remove the <code>text</code> prop from our first test and only use <code>render(&lt;App /&gt;)</code> that test would still pass! That is because we've effectively mocked the entire context for all tests, which is not really want we want.</div></div>

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



<div class="element-block ml-0"><div class="flex-1"><h3 class="text-lg font-semibold" id="async">Async</h3></div></div>

<div class="element-block ml-4"><div class="flex-1">For our second testing scenario we are going to test an asynchronous hook. For this we'll use <code>react-query</code>'s <code>useQuery</code> hook and fetch a character from the Star Wars <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/api"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>API<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. The code is on the branch <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://github.com/believer/frontend-testing-workshop/tree/2-async" target="_blank" rel="noopener noreferrer">2-async</a>. This is what we're starting out with</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// App.js
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
	  
// Create a client for making queries
const queryClient = new QueryClient()
	  
// Call the Star Wars API and return the JSON data
// This can be any function, as long as it returns a promise
const fetchLuke = async () => {
  const response = await fetch('https://swapi.dev/api/people/1/')
  return response.json()
}
	  
const Luke = () => {
  // Set up the useQuery hook with a unique key, 'luke', which is used
  // for caching and pass our fetching function
  const { isLoading, data } = useQuery('luke', fetchLuke)
	  
  // Loading state
  if (isLoading) {
    return <div>Loading...</div>
  }
	  
  // Display the name of the character
  return <div>{data.name}</div>
}
	  
export default function App() {
  return (
    // Set up the provider with the client we created
    <QueryClientProvider client={queryClient}>
      <Luke />
    </QueryClientProvider>
  )
}
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// App.test.js
import App from './App'
import { screen, render } from '@testing-library/react'
	  
test.todo('renders loading state')
test.todo('renders data')
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">First we'll test that the loading state renders correctly. We don't need to do anything special for this case.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// App.test.js
test('renders loading state', () => {
  // Render the App component
  render(<App />)
	  
  // Assert 
  expect(screen.getByText(/loading.../i)).toBeInTheDocument()
})
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">Next, we'll want to make sure that the app actually display our character, Luke Skywalker. To make the test pass we only need to add async/await and use a <code>findBy*</code> query.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// Make the test asynchronous by adding async to the callback
test('renders data', async () => {
  render(<App />)
	  
  // Using await and a findBy* query the assertion will wait until the
  // document contains the text we're looking for. If it takes too long
  // the test will timeout.
  expect(await screen.findByText(/luke skywalker/i)).toBeInTheDocument()
})
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">However, this would call the real API which is not ideal. The response could change, the service could be down or slow to respond. By adding a <code>beforeEach</code> with a mocked response we can ensure that our test won't be flaky.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      name: 'Luke Skywalker',
    }),
  })
})
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">The final code is available on the branch <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://github.com/believer/frontend-testing-workshop/tree/2-async-complete" target="_blank" rel="noopener noreferrer">2-async-complete</a>.</div></div>



<div class="element-block ml-0"><div class="flex-1"><h3 class="text-lg font-semibold" id="custom-hooks">Custom hooks</h3></div></div>

<div class="element-block ml-4"><div class="flex-1">For our third and final scenario we'll test a custom React hook. The hook we're testing is trivial, but we'll add some features using <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/tdd"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>TDD<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a> as we go along. The code is available on the branch <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://github.com/believer/frontend-testing-workshop/tree/3-hooks" target="_blank" rel="noopener noreferrer">3-hooks</a> and the two files we'll use are</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// useCustomHook.js
import React from 'react'
	  
export const useCustomHook = () => {
  const [state] = React.useState('Initial')
	  
  return state
}
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// useCustomHook.test.js
import { act, renderHook } from '@testing-library/react-hooks'
import { useCustomHook } from './useCustomHook'
	  
test.todo('custom hook return state')
test.todo('custom hook with custom initial value')
test.todo('custom hook with updater')
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">The first test is pretty straightforward</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// useCustomHook.test.js
	  
test('custom hook return state', () => {
  // We use the renderHook utility to wrap our custom hook. This will return
  // an object with the current value of the hook and as well as any errors
  const { result } = renderHook(() => useCustomHook())
	  
  // result.current is the current value that is returned
  expect(result.current).toEqual('Initial')
})
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">The criteria has changed and we now need to be able to pass in the initial value of the hook. This is where we'll start using <a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/pages/tdd"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>TDD<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>. Let's add a new test that tests this criteria and update the code for our hook.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// useCustomHook.test.js
	  
test('custom hook with custom initial value', () => {
  // Pass in an initial value to the hook
  const { result } = renderHook(() => useCustomHook('newInitial'))
	  
  // Assert that the hook takes our passed value
  expect(result.current).toEqual('newInitial')
})
	  
// Once we've confirmed that the test is indeed failing we can
// make the necessary updates that will make it pass
	  
// useCustomHook.js
// Add the ability to pass in a value, but set the default value – which
// is used if no value is passed – to what we had before 'Initial'.
// This will make sure that our first test doesn't break
export const useCustomHook = (initial = 'Initial') => {
  const [state] = React.useState(initial)
	  
  return state
}
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">Awesome, we've fulfilled the new demands for the custom hook. Unfortunately, the conditions changed again while we were fixing the last case. Now we also need to be able to update the value from outside the hook. For this we'll return the setter part of <code>useState</code> so that the consumer can update the internal value. Again we'll do this using TDD.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```js
// useCustomHook.test.js
	  
// We now want to return two values from our hook, the current value and
// a function to update the value with. Let's use the same style as useState
// uses, an array with two values: [value, updateFunction]
	  
test('custom hook return state', () => {
  const { result } = renderHook(() => useCustomHook())
  
  // The current value will now be the first item in an array
  expect(result.current[0]).toEqual('Initial')
})
	  
test('custom hook with custom initial value', () => {
  const { result } = renderHook(() => useCustomHook('newInitial'))
	  
  // The current value will now be the first item in an array
  expect(result.current[0]).toEqual('newInitial')
})
	  
test('custom hook with updater', () => {
  const { result } = renderHook(() => useCustomHook())
	  
  // The act utility is used to make the test run closer to how
  // React actually calls it in the browser. The test passes without
  // the act, but we would see an error in the test runner
  act(() => {
    // Call the second item of the returned array with our updated value
    result.current[1]('newInitial')
  })
	  
  // Assert that our value is the updated one
  expect(result.current[0]).toEqual('newInitial')
})
	  
// Finally once are tests are updated, we can rebuild the hook to make
// all tests pass
	  
// useCustomHook.js
// Since we're now returning exactly the same as what useState returns
// [state, setState], we can simply return the useState hook.
export const useCustomHook = (initial = 'Initial') => React.useState(initial)
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">This was the complete code of our final scenario and the competed code is available in <a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="https://github.com/believer/frontend-testing-workshop/tree/3-hooks-complete" target="_blank" rel="noopener noreferrer">3-hooks-complete</a> branch.</div></div>


</div>


<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
<a class="block bg-gray-100 dark:bg-gray-800 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/journals/2021-06-16">2021-06-16</a>
  </section>
