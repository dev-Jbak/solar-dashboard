<template>
    <!-- <div class="glass h-full w-full rounded-lg text-white p-6 overflow-auto break-all flex flex-col gap-2"> -->
    <div class="glass h-full w-full rounded-lg text-white overflow-auto break-all flex flex-col gap-3 p-3 max-h-full">
    <!-- <div class="h-full w-full bg-bg-primary rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-5 text-white flex flex-col gap-2 p-6 overflow-auto break-all"> -->
        <h2 v-if="title" class="font-bold text-xl">
            {{ title }}
        </h2>

        <div class="flex-grow overflow-auto flex max-h-full">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            title: String,
            centerContent: {
                type: Boolean,
                default: true
            },
        }
    }
</script>

<style scoped>
.glass {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.3);

    /* background: -moz-linear-gradient(top,  rgba(255,255,255, 0.01) 0%, rgba(255,255,255, 0.05) 100%); FF3.6-15 */
    /* background: -webkit-linear-gradient(45deg,  rgba(18,22,40, 0.05) 20%,rgba(255,255,255, 0.1) 100%); Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(255,255,255, 0.1) 0%,rgba(255,255,255, 0.1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

}
</style>