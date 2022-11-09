import { writable } from 'svelte/store';

export const isDark = writable(true);
export const isOpen = writable(true);

export const page = writable("Home")