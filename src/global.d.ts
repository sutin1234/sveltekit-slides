/// <reference types="@sveltejs/kit" />
interface ImportMetaEnv {
	VITE_SUPABASE_URL: string;
	VITE_SUPABASE_ANON_KEY: string;
	SUPABASE_PRIVATE_KEY: string;
	SUPABASE_JWT_SECRET: string;
}
