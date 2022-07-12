<script setup lang="ts">
    import PageHeader from './components/PageHeader.vue';
</script>

<template>
    <PageHeader />
</template>

<style lang="scss">
    @import './assets/scss/_index.scss';

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        background-color: $color-bg;
    }

    #app {
    }
</style>
