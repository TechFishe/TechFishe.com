<script lang="ts">
    import "../app.css";
    import { isDark, isOpen, page } from './store.js'
    import SideButton from "./lib/sideButton.svelte";

    export const prerender = true;
</script>

<div class:dark="{$isDark === true}" class="flex w-screen h-screen">
    <nav class:shadow-lg="{$isOpen === true}" class:shadow-md="{$isOpen === false}" class="backdrop-blur-[2px] z-20 w-screen h-13 -top-1 p-2 items-center justify-between absolute flex rounded bg-gray-100/75 dark:bg-gray-600/75 text-gray-800 dark:text-gray-50 transition-shadow ease-in-out">
        <span class="flex text-3xl font-bold tracking-wide">TechFishe.com</span>
        <button class="flex p-2 rounded-full hover:scale-110 hover:text-fuchsia-500 hover:bg-gray-300 dark:hover:bg-gray-800 hover:shadow-md transition ease-in-out" on:click={() => $isDark = !$isDark}>
            {#if $isDark === true}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
            {/if}
        </button>
    </nav>
    <div class:-translate-x-64="{$isOpen === false}" class="z-10 absolute flex place-content-center w-60 h-screen bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-50 rounded transition-transform duration-500 ease-in-out">
        <div class="w-60 absolute top-16 grid grid-cols-1 justify-center">
            <h2 class="text-center p-1 font-bold text-2xl border-b-2 border-gray-800 dark:border-gray-50">Main Menu</h2>
            {#if $page === "Home"}
                <SideButton URL="/" MSG="Home Page!" fill="true" SVG="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                <SideButton URL="/About" MSG="About Page!" SVG="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                {:else if $page === "About"}
                    <SideButton URL="/" MSG="Home Page!" SVG="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                    <SideButton URL="/About" MSG="About Page!" fill="true" SVG="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            {/if}
            <SideButton URL="https://github.com/TechFishe/TechFishe.com-2.0" isSelf="false" MSG="Source Code!" SVG="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </div>
        <button class:left-64="{$isOpen === true}" class:left-[17rem]="{$isOpen === false}" class="rotate-90 left-64 absolute animate-bounce-side top-2/4 flex p-2 rounded-full hover:text-fuchsia-500 hover:bg-gray-300/50 dark:hover:bg-gray-700/50 hover:shadow-md transition ease-in-out" on:click={() => isOpen.set(!$isOpen)}>
            {#if $isOpen === true}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>                  
            {/if}
        </button>
    </div>
    <slot />
</div>