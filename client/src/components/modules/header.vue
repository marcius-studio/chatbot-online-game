<template>
    <div class="header bg-secondary z-depth-1" v-if="$store.getters.auth">
        <div class="container grid-xl">
            <div class="unit">
                <section class="unit-section">
                    <router-link :to="{name: 'chat'}" class="tile tile-list" tag="div" v-if="$store.getters.auth">
                        <figure class="avatar text-uppercase mr c-hand" :data-initial="user.name || 'Noname' | cut"
                            style="background-color: #6490f1;"></figure>
                        <span class="material-icons c-hand text-secondary"
                            @click="$store.commit('logout')">exit_to_app</span>
                    </router-link>
                    <router-link :to="{name: 'auth'}" class="material-icons"
                        v-else-if="!$store.getters.auth && $route.name != 'auth'">keyboard_backspace</router-link>
                </section>
                <section class="unit-section unit-section-main">
                    <router-link :to="{name: 'admin'}" class="material-icons c-hand" tag="span"
                        v-if="$store.getters.isAdmin"> supervised_user_circle </router-link>
                    <router-link :to="{name: 'user'}" class="material-icons c-hand ml" tag="span"
                        v-if="$store.getters.auth"> account_circle </router-link>

                    <!-- Place this tag where you want the button to render. -->
                    <!--github-button class="ml" href="https://github.com/nikitamarcius" data-size="large"
                        aria-label="Follow @nikitamarcius on GitHub" style="height: 27px;">Follow</github-button-->
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import { user } from '../user/queries'

    import GithubButton from 'vue-github-button'

    export default {
        data: () => ({
            user: {}
        }),
        apollo: {
            user,
            $subscribe: {
                user: user('subscription'),
            }
        },
        components: {
            GithubButton
        }
    }
</script>