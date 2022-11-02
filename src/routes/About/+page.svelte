<script lang="ts">
    import { isDark } from '../store.js';
</script>

<div class:dark="{$isDark === true}" class="dark flex w-screen h-screen">
    <main class="bg-gray-50 dark:bg-gray-800 flex w-screen place-content-center">
        <span class="self-center text-gray-800 dark:text-gray-50">This is the about page</span>
    </main>
</div>