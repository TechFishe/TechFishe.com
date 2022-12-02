<script lang="ts">
    export let zindex:string = "z-20", val:boolean = false, title:string = "no title :(";
</script>

<div class:-translate-x-64="{val === false}" class="{zindex} absolute flex place-content-center w-60 h-screen bg-gray-700/[0.85] backdrop-blur-sm dark:bg-gray-200 rounded transition-transform duration-500 ease-in-out">
    <div class="w-60 absolute top-16 grid grid-cols-1 justify-center">
        <h2 class="text-center flex space-x-2 justify-center p-2 border-b-2 border-gray-50 dark:border-gray-800">
            <span class="font-bold text-2xl">{title}</span>
            <button class="flex p-1.5 rounded-full hover:scale-110 hover:bg-gray-800 dark:hover:bg-gray-300 hover:shadow-md transition ease-in-out" on:click>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg> 
            </button>
        </h2>
        <slot></slot>
    </div>
</div>