import type { SEO } from '$lib/core/interfaces/seo';
import { writable } from 'svelte/store';

const initialize: SEO = {
	favicon: '/favicon.png',
	title: 'Thinny.dev | เว็บไซต์เพื่อการเรียนรู้การเขียนโปรแกรม',
	description: 'Thinny.dev | เว็บไซต์เพื่อการเรียนรู้การเขียนโปรแกรม',
	type: 'articles',
	url: '',
	image: '',
	site_name: 'Sutin Injitt',
	keywords: 'บทความเกี่ยวกับโปรแรก Angular, Vue, SvelteKit, Rust, React, NextJS, etc...'
};

export const seo = writable(initialize);
export const updateSeoTag = (data: SEO): void => {
	seo.update((content) => {
		return { ...content, ...data };
	});
};
