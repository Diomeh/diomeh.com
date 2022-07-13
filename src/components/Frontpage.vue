<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        data: function () {
            return {
                menuElements: [
                    {
                        text: 'Hello,',
                        hrefText: 'About',
                        href: '#/about',
                    },
                    {
                        text: 'I am',
                        hrefText: 'Work',
                        href: '#/work',
                    },
                    {
                        text: 'David',
                        hrefText: 'Contact',
                        href: '#/contact',
                    },
                ],
                screenTapped: false
            };
        },

        methods: {
            toggleScreen: function (event: MouseEvent) {
                // prevent toggle if clicking anchor tag
                if((event.target as HTMLElement).nodeName === 'A') {
                    return;
                }
                this.screenTapped = !this.screenTapped;
            },
        },
    });
</script>

<template>
    <!-- TODO: add transition on click -->
    <main class="frontpage" @click="toggleScreen($event)">
        <div v-if="screenTapped" class="text-container" :class="screenTapped ? 'tapped' : ''">
            <h1 v-for="e in menuElements"><a :href="e.href">{{ e.hrefText }}</a></h1>
        </div>
        <div v-else class="text-container">
            <h1 v-for="e in menuElements">{{ e.text }}</h1>
        </div>

        <div class="image-container">
            <img src="../assets/images/icons/isotype_purple.svg" alt="" />
        </div>

        <!-- TODO: add small animation on load to grab user focus -->
        <div class="helper-container">
            <p>tap anywhere</p>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @import '../assets/scss/_index.scss';

    .frontpage {
        @extend .font-title;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0.5rem;

        .text-container {
            margin: 1rem 2rem;

            h1 {
                font-size: 5rem;
                height: 5rem;
                font-weight: bold;
                color: $color-text-primary-tint;
                margin: 1rem 0;

                &:first-child {
                    color: $color-text-secondary;
                    margin-top: 0;
                }

                &:last-child {
                    margin-bottom: 0;
                }

                a {
                    text-decoration: none;
                    transition: color 0.2s ease-in-out;
                    color: inherit;
                }
            }
                
            &.tapped h1 {
                a {
                    height: inherit;
                }

                &:hover {
                    color: $color-text-primary;
                    background-color: $color-white;
                
                    &::before {
                        content: '';
                        position: absolute;
                        top: auto;
                        left: 0;
                        width: 100%;
                        height: inherit;
                        background-color: $color-white;
                        z-index: -1;
                    }
                }
            }
        }

        .image-container {
            // 16px refers to the margin applied to the body
            margin: 0 -16px 0 0;
            align-self: flex-end;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            overflow: hidden;
            position: relative;

            // keep image on top of drawer
            z-index: 2;

            img {
                width: 100%;
                height: 100%;
                margin-right: -40%;
                transform: rotate(180deg) scale(1.5);
            }
        }

        .helper-container {
            @extend .font-content;
            
            align-self: center;
            justify-content: flex-end;
            color: $color-text-secondary-tint;

            p {
                margin: 0;
            }
        }
    }
</style>
