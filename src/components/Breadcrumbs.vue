<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        props: {
            name: String
        },
        data: function() {
            return {};
        }
    })
</script>

<template>
    <div class="breadcrumb-bar">
        <span class="breadcrumb-item">Home</span>
        /
        <span class="breadcrumb-item active">{{ name }}</span>
    </div>
</template>

<style lang="scss">
    @import '../assets/scss/_index.scss';

    .breadcrumb-bar {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.5rem 1rem;
        background-color: $color-secondary-shade;
        border-bottom: 1px solid $color-secondary-tint;
        color: $color-text-secondary;
    }
    
    .breadcrumb-item {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .breadcrumb-item.active {
        color: $color-secondary-tint;
    }
</style>