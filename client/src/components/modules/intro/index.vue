<template>
    <div class="modal modal-md" :class="{'active': show}">
        <div class="modal-overlay" @click="toggle"></div>
        <div class="modal-container">
            <!--div class="modal-header content-padding">
            <a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
            <div class="modal-title">Наши партнеры</div>
          </div-->
            <div class="modal-body scroll-hidden-x">
                <component :is="componentId"></component>
            </div>
            <div class="modal-footer border-top">
                <div class="unit">
                    <div class="unit-section text-left">
                        <div class="material-icons text-primary c-hand" @click="componentId = 'partners'"
                            v-if="componentId == 'videoPromo'">keyboard_backspace</div>
                        <div class="text-sm text-secondary" v-else>Пролистайте список <br> партнеров до конца</div>
                    </div>
                    <div class="unit-section">
                        <button class="btn btn-primary" @click="componentId = 'videoPromo'"
                            v-if="componentId == 'partners'">Продолжить</button>
                        <button class="btn btn-primary" @click="toggle" v-else>Закрыть</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
    import { mapState } from 'vuex'

    import partners from './partners'
    import videoPromo from './video'

    export default {
        data: () => ({
            componentId: 'partners',
        }),
        computed: mapState({
            show: state => state.chat.show
        }),
        methods: {
            toggle() {
                if (this.componentId == 'videoPromo') {
                    this.$store.commit('toggleIntro')
                    this.componentId = 'partners'
                }
            }
        },
        components: {
            partners,
            videoPromo
        }
    }
</script>