---
layout: page
id: '60c5b2b0-52c2-4039-9a8a-ea809d26f390'
title: 'CSS Grid tricks'
tags: page
excerpt: |
  Add columns for spacing on mobile

---
  
<h2 class="text-3xl font-semibold mb-4"><a href="/pages/css-grid-tricks">CSS Grid tricks</a></h2>

<div class="space-y-3">
<div class="element-block ml-0"><div class="flex-1"><strong class="text-rose-400">Add columns for spacing on mobile</strong></div></div>

<div class="element-block ml-4"><div class="flex-1">We have some content that we want to position in the center of the screen. For this we can use <a class="text-teal-400 group" href="/pages/css-grid"><span class="text-gray-500 group-hover:text-teal-500">[[</span>CSS Grid<span class="text-gray-500 group-hover:text-teal-500">]]</span></a>. By defining fixed values at the edges of our grid template we can achieve spacing without using <code>padding</code> when the grid resizes on a smaller screen.</div></div>

<div class="element-block ml-4"><div class="flex-1">Remember to add <a class="text-teal-400 group" href="/pages/meta-viewport-for-mobile-devices"><span class="text-gray-500 group-hover:text-teal-500">[[</span>Meta viewport for mobile devices<span class="text-gray-500 group-hover:text-teal-500">]]</span></a>, otherwise the content won't scale correctly on smaller screens and the spacings will not work.</div></div>

<div class="element-block ml-4"><div class="flex-1">

```html
<div class="grid">
	<div class="content">
      Elit suscipit consequuntur rerum alias eius. Autem soluta voluptas
      doloremque corrupti distinctio dicta Cumque sit accusamus minima magni
      voluptatum. Distinctio veritatis consectetur et eligendi dolores est
      Impedit at tenetur pariatur
	</div>
</div>
	  
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">

```css
.grid {
  display: grid;
  grid-template-columns: 20px 1fr minmax(0, 960px) 1fr 20px;
}
	  
/* From the image below we can see that our content's
  area starts at column 3 and ends at column 4 */
.content {
  grid-column: 3 / 4;
  /* This is a shorthand form of:
  * grid-column-start: 3;
  * grid-column-end: 4;
  */
}
```

</div></div>

<div class="element-block ml-4"><div class="flex-1">Here's the grid in desktop size with the grid columns highlighted using <a class="text-teal-400 group" href="/pages/chrome"><span class="text-gray-500 group-hover:text-teal-500">[[</span>Chrome<span class="text-gray-500 group-hover:text-teal-500">]]</span></a>'s <code>grid</code> tool.</div></div>

<div class="element-block ml-4"><div class="flex-1"><img alt="" src="/assets/Skärmavbild_2021-06-10_kl._08.05.50_1623305228889_0.png" /></div></div>

<div class="element-block ml-4"><div class="flex-1">The same grid on a screen size of <code>411px</code> (Pixel 2 XL) displays that our <code>1fr</code> columns are very small (or non-existent) at this point leaving only our "padding" columns and the content.</div></div>

<div class="element-block ml-4"><div class="flex-1"><img alt="" src="/assets/Skärmavbild_2021-06-10_kl._08.06.19_1623305249365_0.png" /></div></div>


</div>



<section class="mt-8 space-y-2">
<header class="text-gray-400">Linked references</header>
<a class="block bg-gray-800 p-4 rounded text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-900 hover:ring-teal-400" href="/journals/2021-06-10">2021-06-10</a>
  </section>
