<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        data: function () {
            return {
                menuElements: [
                    {
                        text: 'Home',
                        href: '/',
                    },
                    {
                        text: 'About Me',
                        href: '/about',
                    },
                    {
                        text: 'Work',
                        href: '/work',
                    },
                    {
                        text: 'Contact',
                        href: '/contact',
                    },
                ],
                drawerIsOpen: false,
            };
        },
        mounted: function () {},

        methods: {
            toggleDrawer: function () {
                this.drawerIsOpen = !this.drawerIsOpen;
            },
        },
    });
</script>

<template>
    <div class="w-100 header-container">
        <div class="nav-icon" :class="drawerIsOpen ? 'open' : ''" @click="toggleDrawer">
            <img src="../assets/images/icons/isotype.svg" alt="" />
        </div>

        <div class="nav-title">avid Urbina</div>

        <div class="nav-menu">
            <span class="nav-button" @click="toggleDrawer">
                <font-awesome-icon icon="bars" />
            </span>

            <!-- TODO: add accessibility options. See https://developer.mozilla.org/en-US/docs/Web/CSS/transform#accessibility_concernss -->
            <div id="drawer" class="drawer nav-menu-mobile h-100" :class="drawerIsOpen ? 'w-100' : ''">              
                <a href="#" class="d-none" @click="toggleDrawer">&times;</a>

                <div class="drawer-item" v-for="v in menuElements">
                    <a :href="v.href">{{ v.text }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    // TODO: figure out how to auto import scss styles through some config wizardry.
    @import '../assets/scss/_index.scss';

    * {
        @extend .font-title;
        color: $color-white;
    }

    .header-container {
        padding: 0.5rem;
        display: inline-flex;
        align-items: center;

        img {
            margin-top: 5px;
            height: 50px;
        }

        .nav-title {
            font-size: 2.25rem;
            margin-left: -5px;
        }
    }

    .nav-menu {
        margin-left: auto;
    }

    .nav-button {
        transition: all 0.2s ease-in-out;
        padding: 0.5rem;
        color: $color-black;
        font-size: 2rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

        &:hover {
            background-color: $color-black;
            color: $color-white;
        }
    }

    .drawer {
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: $color-black;
        overflow-x: hidden;
        padding-top: 70px;
        transition: all 0.5s ease-out;
        
        .drawer-item {
            width: 100%;

            &:hover {
                background-color: $color-white;
            }
        }

        a {
            padding:1rem 0 1rem 3rem;
            text-decoration: none;
            font-size: 2.5rem;
            color: $color-white;
            display: block;
            transition: all 0.3s ease;
            white-space: nowrap;

            &:hover {
                color: $color-black;
            }
        }
    }

    .nav-icon {
        transition: all 0.5s ease-out;
    }

    .nav-icon.open {
        // TODO: revisit translate after I'm not so tired
        transform: translateX(80vw) rotateY(180deg);
        z-index: 2;
    }
</style>
