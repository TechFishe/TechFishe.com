<script>
    import { page } from './store.js';
    page.set("Home")

    //let count: number = 0;
</script>

<svelte:head>
    <title>TechFishe.com | Home</title>
</svelte:head>

<main class="bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-50 flex w-screen place-content-center">
    <div class="absolute top-16">
        <h1 class="text-center text-3xl font-bold tracking-wide">Welcome!</h1>
        <p class="p-1">Welcome to my portfolio website! Made with love and care in SvelteKit using TailWindCSS</p>
    </div>
    <!-- <div class="self-center grid grid-cols-1 gap-1">
        <button class="text-gray-50 flex space-x-1 justify-center bg-fuchsia-500 rounded-md p-2 text-lg shadow-md shadow-fuchsia-500/50 hover:shadow-lg hover:bg-fuchsia-600 hover:shadow-fuchsia-600/50 hover:scale-105 transition ease-in-out" on:click={() => count++}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
            <span>Click me!</span>
        </button>
        <h1 class="text-gray-800 dark:text-gray-50">You have clicked this button {count} times!</h1>
    </div> -->
</main>