<script lang="ts">
    import { browser } from "$app/environment";
    import "../app.css";
    import SideButton from "./lib/btns/sideBtn.svelte";
    import SideMenu from "./lib/containers/sideMenu.svelte";

    let isDark:boolean = false, isMainOpen:boolean = true, isOnHelp:boolean = false, isPyOpen:boolean = false;
    if (browser){
        if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
            document.documentElement.classList.add("dark");
            isDark = true;
        } else{
            document.documentElement.classList.remove("dark");
            isDark = false;
        }
    }

    function changeTheme(){
        isDark = !isDark;
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        isDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }

    export const prerender = true;
</script>

<div class="grid w-screen h-screen">
    <nav class:shadow-lg="{isMainOpen === true}" class:shadow-md="{isMainOpen === false}" class="fixed backdrop-blur-[2px] z-50 w-screen h-13 -top-1 p-2 items-center justify-between flex rounded bg-gray-600/75 dark:bg-gray-100/75 transition-shadow ease-in-out">
        <span class="flex text-3xl font-bold tracking-wide">TechFishe.com</span>
        <button class="flex p-2 rounded-full mr-4 hover:scale-110 hover:text-fuchsia-500 hover:bg-gray-800 dark:hover:bg-gray-300 hover:shadow-md transition ease-in-out" on:click={changeTheme}>
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
    <div class:-translate-x-64="{isMainOpen === false}" class="fixed z-10 flex place-content-center w-60 h-screen bg-gray-700/[0.85] backdrop-blur-[2px] dark:bg-gray-200/[0.85] rounded transition-transform duration-500 ease-in-out">
        <SideMenu zindex="z-30" val={isPyOpen} title="Python" on:click={() => isPyOpen = !isPyOpen}>
            <SideButton useSVG="false" URL="/Online-Help/Python/Print" MSG="Print"/>
            <SideButton useSVG="false" URL="/Online-Help/Python/Vars" MSG="Vars"/>
            <SideButton useSVG="false" URL="/Online-Help/Python/Loops" MSG="Loops"/>
            <SideButton useSVG="false" URL="/Online-Help/Python/Functions" MSG="Functions"/>
        </SideMenu>
        <SideMenu zindex="z-20" val={isOnHelp} title="Online Help" on:click={() => isOnHelp = !isOnHelp}>
            <h3 class="sideHeader sideH3">Code</h3>
            <SideButton useSVG="false" type="menu" MSG="Python" on:click={() => isPyOpen = !isPyOpen} />
            <SideButton useSVG="false" type="menu" MSG="Sveltekit" />
        </SideMenu>
        <div class="w-60 absolute top-16 grid grid-cols-1 justify-center">
            <h2 class="sideHeader sideH2">Main Menu</h2>
            <SideButton URL="/" MSG="Home Page" val="Home" SVG="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
            <SideButton URL="/About" MSG="About Page" val="About" SVG="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            <SideButton MSG="Online Help" type="menu" val="OnHelp" SVG="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" on:click={()=> isOnHelp = !isOnHelp}/>
        </div>
        <div class="w-60 z-50 absolute grid grid-cols-1 justify-center self-end pb-4">
            <h2 class="sideHeader sideH2">Links</h2>
            <SideButton URL="https://github.com/TechFishe/TechFishe.com-2.0" isSelf="false" MSG="Source Code" SVG="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
        </div>
        <button class:left-64="{isMainOpen === true}" class:left-[17rem]="{isMainOpen === false}" class="rotate-90 left-64 absolute animate-bounce-side top-2/4 flex p-2 rounded-full text-gray-50/90 dark:text-gray-800/90 hover:text-fuchsia-500/95 hover:bg-gray-700/50 dark:hover:bg-gray-300/50 hover:shadow-md transition ease-in-out" on:click={() => isMainOpen = !isMainOpen}>
            {#if isMainOpen === true}
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