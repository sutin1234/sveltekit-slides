import type { LOADING } from "$lib/core/interfaces/loading";
import { writable } from "svelte/store";
export const initialize: LOADING = {
    text: 'Loading...'

}
export const loadingState = writable(false)
export const loading = writable(initialize)