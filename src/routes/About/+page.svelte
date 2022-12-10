<script>
    import Main from '$lib/containers/main.svelte';
    import BaseSection from '$lib/containers/baseSection.svelte';

    import { page } from '../../store.js';
    page.set("About")

    export const prerender = true;
</script>

<svelte:head>
    <title>TechFishe.com | About</title>
</svelte:head>

<Main>
    <BaseSection title="About!" important={true}>
        <h3 class="text-2xl p-2 font-semibold tracking-wide">About me</h3>
    </BaseSection>
</Main>