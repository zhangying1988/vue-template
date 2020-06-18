<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
    }
</script>

<style scoped>
    .tabbar {
        display: flex;
        flex-direction: row;
    }

</style>
