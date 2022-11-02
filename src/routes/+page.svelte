<script lang="ts">
    let count: number = 0;
    let isDark: boolean = true, isOpen: boolean = true;
</script>

<div class:dark="{isDark === true}" class="dark flex w-screen h-screen">
    <nav class:shadow-lg="{isOpen === true}" class:shadow-md="{isOpen === false}" class="z-20 w-screen h-13 -top-1 p-2 items-center justify-between absolute flex rounded bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-50 transition-shadow ease-in-out">
        <span class="flex text-3xl font-bold tracking-wide">TechFishe.com</span>
        <button class="flex p-2 rounded-full hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-700 hover:shadow-md transition-transform ease-in-out" on:click={() => isDark = !isDark}>
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
    <div class:-translate-x-64="{isOpen === false}" class="z-10 absolute flex place-content-center w-60 h-screen bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-50 rounded transition-transform duration-500 ease-in-out">
        <div class=" w-60 absolute top-16 grid grid-cols-1 gap-2 divide-y divide-solid justify-center">
            <h2 class="text-center p-1 font-bold text-2xl">Main Menu</h2>
            <a href="/About" target="_self" class="p-2">
                <button class="flex space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span>About page!</span>
                </button>
            </a>
        </div>
        <button class:left-64="{isOpen === true}" class:left-72="{isOpen === false}" class="absolute animate-bounce-side top-2/4 flex p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 hover:shadow-md transition-transform ease-in-out" on:click={() => isOpen = !isOpen}>
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
        <div class="self-center grid grid-cols-1 gap-1">
            <button class="text-gray-50 flex space-x-1 justify-center bg-fuchsia-500 rounded-md p-2 text-lg shadow-md shadow-fuchsia-500/50 hover:shadow-lg hover:bg-fuchsia-600 hover:shadow-fuchsia-600/50 hover:scale-105 transition ease-in-out" on:click={() => count++}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z" clip-rule="evenodd" />
                </svg>
                <span>Click me!</span>
            </button>
            <h1 class="text-gray-800 dark:text-gray-50">You have clicked this button {count} times!</h1>
        </div>
    </main>
</div>
