import { writable } from 'svelte/store';

export const page = writable("Home")
export const isOpen = writable(true);