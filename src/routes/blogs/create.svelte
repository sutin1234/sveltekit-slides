<script lang="ts">
	import { seo } from '$lib/store/seo';
	import { goto } from '$app/navigation';
	import { updateState } from '$lib/store/loading';
	import supabase from '$lib/db';
	import TextEditor from '$lib/components/TextEditor.svelte';

	$seo = {
		...$seo,
		title: 'Thinny.dev | เขียน blog บทความ ใหม่',
		url: '/blogs/create',
		type: 'blog'
	};
	let imagePreview = '';

	$: blog = {
		title: '',
		description: '',
		detail: '',
		cover_image: '',
		published: new Date()
	};
	const imageChange = ({ target }) => {
		const file = target.files[0];
		console.log(file);
		if (file) {
			uploadImage(file);
		} else {
			blog.cover_image = '';
		}
	};
	const downloadImage = async (imagePath: string) => {
		const { data } = await supabase.storage.from('public').download(imagePath);
		if (data) {
			const fd = new FileReader();
			fd.onloadend = (ev) => (imagePreview = ev.target.result.toString());
			fd.readAsDataURL(data);
			getImagePubliUrl(imagePath);
		}
	};
	const uploadImage = async (imageFile: File) => {
		updateState(true);
		const { data, error } = await supabase.storage.from('cover-image').upload(`${imageFile.name}`, imageFile);
		if (data) {
			updateState(false);
			downloadImage(data.Key);
		}
	};
	const getImagePubliUrl = async (imagePath: string) => {
		const { publicURL } = supabase.storage.from('public').getPublicUrl(imagePath);
		if (publicURL) {
			blog.cover_image = publicURL.replace('/public', '');
		}
	};
	const postBlog = async () => {
		const { data, error } = await supabase.from('blogs').insert(blog);
		if (data) {
			goto('/blogs');
		} else {
			console.log(error);
		}
	};

	const titleChange = ({ target }) => (blog.title = target.value);
	const descriptionChange = ({ target }) => (blog.description = target.value);
	// const detailChange = ({ target }) => (blog.detail = target.value);
	const dataChange = ({ detail }) => (blog.detail = detail);
</script>

<div class="lg:p-12 max-w-xl m-0 mx-auto shadow rounded-lg">
	{#if imagePreview}
		<div class="p-4">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img class="bg-cover bg-center object-contain h-96" src={imagePreview} alt="cover image" />
		</div>
	{/if}

	<div class="p-4">
		<label for="title" class="*label">Blog cover image</label>
		<input type="file" id="cover_image" name="cover_image" class="*input" on:change={imageChange} />
	</div>
	<div class="p-2">
		<label for="title" class="*label">Blog title</label>
		<input type="text" id="title" name="title" class="*input" value={blog.title} on:change={titleChange} />
	</div>
	<div class="p-2">
		<label for="description" class="*label">Blog Description</label>
		<textarea class="*input" cols="30" rows="2" value={blog.description} on:change={descriptionChange} />
	</div>
	<!-- <div class="p-2">
		<label for="detail" class="*label">Blog Detail</label>
		<textarea class="*input" cols="30" rows="5" value={blog.detail} on:change={detailChange} />
	</div> -->
	<div class="p-2">
		<label for="detail" class="*label">Blog Detail</label>
		<div class="editor">
			<TextEditor on:dataChange={dataChange} />
		</div>
	</div>
	<div class="p-2">
		<button class="*primaryBtn" on:click={postBlog}>Post</button>
	</div>
</div>
