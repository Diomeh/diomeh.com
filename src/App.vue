<script setup lang="ts">
    import { ref, computed, Ref, DefineComponent } from 'vue';

    import About         from './components/About.vue';
    import Contact       from './components/Contact.vue';
    import Frontpage     from './components/Frontpage.vue';
    import Navbar        from './components/Navbar.vue';
    import NotFound      from './components/NotFound.vue';
    import Work          from './components/Work.vue';

    interface Route {
        name: string;
        component: DefineComponent<any, any, any>;
    }

    interface RouteMap {
        [key: string]: Route;
    }

    const routes: RouteMap = {
        '/': {
            name: 'Home',
            component: Frontpage,
        },
        '/about': {
            name: 'About',
            component: About,
        },
        '/work': {
            name: 'Work',
            component: Work,
        },
        '/contact': {
            name: 'Contact',
            component: Contact,
        },
    };

    const currentPath: Ref<string> = ref(window.location.hash);

    window.addEventListener('hashchange', () => {
        currentPath.value = window.location.hash;
    });

    const currentView = computed(() => {
        return routes[currentPath.value.slice(1) || '/'] || NotFound;
    });
</script>

<template>
    <Navbar />
    <component :is="currentView.component" :name="currentView.name" />
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
</style>
