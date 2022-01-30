import { writable } from "svelte/store";

export const seo = writable({
    favicon: '/favicon.png',
    title: "Thinny.dev | เว็บไซต์เพื่อการเรียนรู้การเขียนโปรแกรม",
    description: "Thinny.dev | เว็บไซต์เพื่อการเรียนรู้การเขียนโปรแกรม",
    type: 'article',
    url: '',
    image: '',
    site_name: 'Sutin Injitt'
})