<script lang="ts">
    export let URL:string = "", MSG:string = "No MSG :(", SVG:string = "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636";
    export let isSelf:string = "true", fill:string = "false";
</script>

{#if isSelf === "true"}
    <a href="{URL}" target="_self" class="p-1">
        <button class="w-56 p-2 flex space-x-1 rounded-md hover:bg-gray-800 dark:hover:bg-gray-300 hover:shadow-md transition-shadow duration-0 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class:fill-current="{fill === "true"}" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="{SVG}"/>
            </svg>
            <span>{MSG}</span>
        </button>
    </a>
    {:else if isSelf === "false"}
    <a href="{URL}" target="_blank" rel="noopener noreferrer" class="p-1">
        <button class="hover:underline w-56 p-2 flex space-x-1 rounded-md hover:bg-gray-800 dark:hover:bg-gray-300 hover:shadow-md transition-shadow duration-0 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class:fill-current="{fill === "true"}" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="{SVG}"/>
            </svg>
            <span>{MSG}</span>
        </button>
    </a>
{/if}