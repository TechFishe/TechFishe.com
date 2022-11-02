<script lang="ts">
    let isDark: boolean = true, isOpen: boolean = true;
</script>

<div class:dark="{isDark === true}" class="dark flex w-screen h-screen">
    <nav class:shadow-lg="{isOpen === true}" class:shadow-md="{isOpen === false}" class="z-20 w-screen h-13 -top-1 p-2 items-center justify-between absolute flex rounded bg-gray-100 dark:bg-gray-600 transition-shadow ease-in-out">
        <span class="flex text-gray-800 dark:text-gray-50 text-3xl font-bold tracking-wide">TechFishe.com</span>
        <button class="flex p-2 rounded-full text-gray-800 dark:text-gray-50 hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-700 hover:shadow-md transition-transform ease-in-out" on:click={() => isDark = !isDark}>
            {#if isDark === true}
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
    <div class:-translate-x-64="{isOpen === false}" class="z-10 absolute flex place-content-center w-60 h-screen bg-gray-200 dark:bg-gray-700 rounded transition-transform duration-500 ease-in-out">
        <h2 class="text-gray-800 dark:text-gray-50 absolute top-16 font-bold text-2xl">Main Menu</h2>
        <button class:left-64="{isOpen === true}" class:left-72="{isOpen === false}" class="absolute animate-bounce-side top-2/4 flex p-2 rounded-full text-gray-800 dark:text-gray-50 hover:bg-gray-300 dark:hover:bg-gray-700 hover:shadow-md transition-transform ease-in-out" on:click={() => isOpen = !isOpen}>
            {#if isOpen === true}
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
    <main class="bg-gray-50 dark:bg-gray-800 flex w-screen place-content-center">
        <span class="self-center text-gray-800 dark:text-gray-50">This is the about page</span>
    </main>
</div>