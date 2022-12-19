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
    <BaseSection title="About" important={true}>
        <p>Get to know me and this site a little bit better!</p>
    </BaseSection>
    <BaseSection title="About me">
        <p>Hello</p>
    </BaseSection>
</Main>