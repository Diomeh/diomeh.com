<script setup lang="ts">
    import PageHeader from './components/PageHeader.vue';
    import Frontpage from './components/Frontpage.vue';
</script>

<template>
    <PageHeader />
    <Frontpage />
</template>

<style lang="scss">
    @import './assets/scss/_index.scss';

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        background-color: $color-bg;
    }

    #app {
    }
</style>
