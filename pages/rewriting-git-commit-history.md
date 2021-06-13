---
layout: page
id: '60c1bd0a-9cfc-451c-b277-b8e82803df3e'
title: 'Rewriting Git commit history'
tags: page

---
  
<h2 class="text-3xl font-semibold mb-4"><a href="/journals/Rewriting Git commit history">Rewriting Git commit history</a></h2>

<div class="space-y-2">
<div class="element-block ml-0"><div class="flex-1"></div></div>

<div class="element-block ml-0"><div class="flex-1">If you want to fix a commit inside a <a class="text-teal-400 group" href="/pages/pr"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>PR<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a> you can use <a class="text-teal-400 group" href="/pages/git"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>Git<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a> rebasing and the easiest way to do it is using an interactive rebase. Let's say you have three commits:</div></div>

<div class="element-block ml-4"><div class="flex-1">Commit A (sha: 123)</div></div>

<div class="element-block ml-4"><div class="flex-1">Commit B (sha: 456)</div></div>

<div class="element-block ml-4"><div class="flex-1">Commit C (sha: 789)</div></div>



<div class="element-block ml-0"><div class="flex-1">Now you want to change <em>Commit B</em>. Start by finding its <a class="text-teal-400 group" href="/pages/sha"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>SHA<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a> ID using <code>git log</code>, in this example we've called it <code>456</code>.</div></div>

<div class="element-block ml-0"><div class="flex-1">Run <code>git rebase -i 456^</code> to start an interactive rebase. Note the <code>^</code> at the end which <strong class="text-rose-400">includes the commit in question in the rebase</strong></div></div>

<div class="element-block ml-0"><div class="flex-1">You'll be presented with a <a class="text-teal-400 group" href="/pages/vim"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>Vim<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a> buffer that would look something like:</div></div>

<div class="element-block ml-4"><div class="flex-1">

```md
pick 456 Commit B
pick 789 Commit C
	  
# Commands
# p, pick <commit> = use commit
# e, edit <commit> = use commit, but stop for amending
# ...
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">Notice the <em>edit</em> command, which is exactly what we want. Alter the line for <em>Commit B</em> with the edit command instead of the pick command.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```md
edit 456 Commit B
pick 789 Commit C
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">After saving, <a class="text-teal-400 group" href="/pages/how-to-save-and-quit-vim"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>How to save and quit Vim<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a>, you'll be taken back in time to <em>Commit B</em> where you can make the changes you set out to do.</div></div>

<div class="element-block ml-4"><div class="flex-1">Once your done with the changes, run <code>git rebase --continue</code> to take you back to the present.</div></div>



<div class="element-block ml-0"><div class="flex-1">If you would run <code>git log</code> at this point you would notice that the commit SHAs for Commit B and Commit C have changed. This happened be we altered history using with our rebase. To update our PR we need to do a force push, <code>git push -f</code></div></div>

<hr class="border-gray-700 !my-5" />

<div class="element-block ml-0"><div class="flex-1"><a class="text-teal-400 group" href="/pages/johnny-ji"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>Johnny Ji<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a>. (<a class="text-teal-400 group" href="/pages/2021-06-08"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>2021-06-08<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a>). <em>Engineering Culture: Keeping a Clean Commit History</em>. <a class="text-indigo-400" href="https://johnnyisji.medium.com/engineering-culture-keeping-a-clean-commit-history-453f950c1f2d" target="_blank" rel="">https://johnnyisji.medium.com/engineering-culture-keeping-a-clean-commit-history-453f950c1f2d</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><a class="text-gray-400" href="/pages/git">#Git</a></div></div>

<div class="element-block ml-0"><div class="flex-1"><strong class="text-rose-400">ID:</strong> 210609102742</div></div>
</div>
