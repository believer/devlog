---
layout: page
id: '60c848aa-34ba-4ee3-b971-d3164732844d'
title: 'Array mutation'
tags: page
excerpt: |
  A great way of finding out whether an array method is mutating or not is by using https://doesitmutate.xyz/

---
  
<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" href="/pages/array-mutation">Array mutation</a></h2>

<div class="space-y-3">
<div class="element-block ml-0"><div class="flex-1">A great way of finding out whether an array method is mutating or not is by using <a class="text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" href="https://doesitmutate.xyz/" target="_blank" rel="noopener noreferrer">https://doesitmutate.xyz/</a></div></div>

<div class="element-block ml-0"><div class="flex-1">Here's an example of a bug I found recently. It was a list of users that occasionally displayed the wrong name with the wrong image. The data was stored as a JSON file and was using a <code>.sort()</code> operation before looping over each item. <code>.sort()</code> is a <strong class="text-rose-400">mutating</strong> method and by adding a <code>.slice()</code> before sorting we can create a shallow copy of the array to not alter the original data.</div></div>

<div class="element-block ml-0"><div class="flex-1">

```jsx
// React app

const data = [{ name: 'Test Testsson' }, { name: 'Aaron Aaronson' }];

// Incorrect
// The sorting operation that was used didn't really work as expected
// and since the sort method is mutating the original data
// we got some unexpected results
data.sort((a, b) => a.name > b.name).map((user) => <div>{user.name}</div>);

// Correct
// Use the slice method to create a copy of the array
// to not mutate the original data.
// Update the sorting operation to use localeCompare for better results
data
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((user) => <div>{user.name}</div>);
```

</div></div>
</div>


<section class="mt-8 space-y-2">
<header class="text-gray-400">Linked references</header>
<a class="block bg-gray-800 p-4 rounded text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-900 hover:ring-teal-400" href="/journals/2021-06-15">2021-06-15</a>
  </section>
