<script>
    import { page } from '../../store.js';
    page.set("About")

    export const prerender = true;
</script>

<svelte:head>
    <title>TechFishe.com | About</title>
</svelte:head>

<main class="defaultBox">
    <div class="absolute top-16">
        <h1 class="text-3xl font-bold tracking-wide text-center">About!</h1>
        <h3 class="text-2xl p-2 font-semibold tracking-wide">About me</h3>
    </div>
</main>