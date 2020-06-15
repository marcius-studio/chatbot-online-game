<template>
    <div class="content h100">
        <div class="content-header content-padding">
            <div class="container grid-lg" style="padding: 0;">
                <div class="unit">
                    <div class="unit-section" v-if="!$store.getters.auth && $route.name != 'auth'">
                        <router-link :to="{name: 'auth'}" class="material-icons">keyboard_backspace</router-link>
                    </div>
                    <div class="unit-section" v-else>
                        <div class="icon tooltip tooltip-right mr" style="background: transparent;"
                            :data-tooltip="'Министерство образования и молодёжной \nполитики Рязанской области'">
                            <img class="auth-logo" :src="logo.minobr">
                        </div>
                        <div class="icon tooltip tooltip-right" style="background: transparent;" data-tooltip="Кванториум Рязань">
                            <img class="auth-logo" :src="logo.kvantorium">
                        </div>
                    </div>
                    <div class="unit-section h5 text-bold">
                        {{$route.name == 'signup' ? 'Регистрация' : $route.name == 'auth' ? 'Вход в игру' : 'Сброс пароля'}}
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body">
            <div class="flex-centered" style="min-height: 100%;">
                <div class="container grid-xs">

                    <div class="h2 text-bold mb2" v-if="$route.name == 'auth'" style=" line-height: 50px; margin-top: -1rem;">Ночь <br> в технопарке</div>

                    <router-view class="width100"></router-view>

                </div>
            </div>
        </div>
        <!--div class="content-footer">
            <div class="container grid-sm flex-centered mb">
                <span class="tooltip" :data-tooltip="'Министерство образования и молодёжной \nполитики Рязанской области'" style="margin-right: 3rem;">
                    <img class="auth-logo" :src="logo.minobr">
                </span>
                <span class="tooltip" data-tooltip="Кванториум Рязань">
                    <img class="auth-logo" :src="logo.kvantorium">
                </span>
            </div>
        </div-->
    </div>
</template>


<script>
    import signin from './signin'
    import signup from './signup'

    // logos
    import kvantorium from '../../../static/logos/kvantorium.png'
    import minobr from '../../../static/logos/minobr.png'

    export default {
        data: () => ({
            form: {},
            componentId: 'signup',
            logo: {
                kvantorium,
                minobr
            }
        }),
        watch: {

        },
        components: {
            signin,
            signup
        }
    }
</script>