<script>
    import { isOpen } from "../../store.js";
</script>

<main class:pl-[19.75rem]="{$isOpen === true}" class:pl-20="{$isOpen === false}" class="place-content-center mt-[3.5rem] pr-2 h-fit flex-col w-screen snap-y snap-mandatory transition-all duration-700 ease-in-out">
    <slot />
</main>