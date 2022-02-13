---
title: SvelteKit is amazing
description: SvelteKit is absolutely amazing.
created: 2021-06-10
tags:
  - 'SvelteKit'
  - 'Markdown'
---

<script context="module">
 import { seo, updateSeoTag } from '$lib/store/seo';
 import supabase from '$lib/db';

 export const load = async ({ url, params }) => {
  const { slug } = params;
  const title = slug.replace(/-/g, ' ');

  let { data: blog, error } = await supabase
   .from('blogs')
   .select('*')
   .eq('title', title)
   .single();

  if (error) {
   throw new Error(error.message);
  }

  updateSeoTag({
   title,
   description: blog.description,
   image: blog.cover_image,
   keywords: blog.title,
   url: `/blogs/${slug}`
  });
  return {
   props: {
    blog
   }
  };
 };
</script>

<script lang="ts">
    import { dateThai } from '$lib/utils';
    import { Calendar, Edit } from '$lib/components/icons/index';
    import Highlight from 'svelte-highlight';
    export let blog;
 $: published_date = dateThai(blog.published);
</script>

<div class="content lg:px-10 px-2">
		<h1 class="text-3xl py-2 pt-5 text-left font-bold">{$seo.title}</h1>
		<div class="">
			<small class="text-gray-400">
				<Calendar />
				{published_date}
			</small>
			<small class="text-gray-400">
				<Edit />
				{blog.author}
			</small>
		</div>
  <div class="py-4">
			<div>{@html blog.description}</div>
		</div>
	</div>

# Onions

Layers. Onions have layers. Ogres have layers. Onions have layers. You get it? We both have layers.

Oh, you both have layers. Oh. You know, not everybody like onions.

```js
const year = "2001";
const movie = "Shrek";