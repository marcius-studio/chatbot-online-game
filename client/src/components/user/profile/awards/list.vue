<template>
    <div>
        <div class="section" v-for="i in filteredItems" v-if="user.score >= i.price && i.count > 0">
            <div class="section-item section-item-filled z-depth-1">
                <div class="tile tile-list mb0">
                    <div class="tile-section hide-sm tile-icon" v-if="i.logo">
                        <figure class="icon icon-lg text-uppercase" style="background: #f3f4f8; padding: 0.2rem;">
                            <img :src="logo[i.logo]" alt="">
                        </figure>
                    </div>
                    <div class="tile-section tile-content">
                        <div class="text-semibold"> {{i.name || 'Noname'}}</div>
                        <div class="text-sm ">
                            <span class="text-secondary">{{i.company }}</span>
                        </div>
                    </div>
                    <div class="tile-section mr text-right hide-sm">
                        <div class="text-bold"> {{i.price }} Баллов</div>
                        <div class="text-sm text-secondary">Осталось: {{i.count >= 999 ? '∞' : i.count}}</div>
                    </div>
                    <div class="tile-section hide-sm">
                        <a class="btn material-icons btn-square" style="font-size: 25px;" :href="i.link" target="_blank"
                            :disabled="i.disable" v-if="i.link">chevron_right</a>
                        <button class="btn material-icons btn-square" style="font-size: 25px;" @click="submit(i)"
                            :disabled="i.disable" v-else>chevron_right</button>
                    </div>
                </div>


                <!--Mobile Size action -->
                <div class="show-sm">
                    <div class="divider mb05 mt05"></div>

                    <div class="tile tile-list">
                        <div class="tile-section tile-content">
                            <div class="text-bold"> {{i.price }} Баллов</div>
                            <div class="text-sm text-secondary">Осталось: {{i.count >= 999 ? '∞' : i.count}}</div>
                        </div>
                        <div class="tile-section">
                            <a class="btn material-icons btn-square" style="font-size: 25px;" :href="i.link"
                                target="_blank" :disabled="i.disable" v-if="i.link">chevron_right</a>
                            <button class="btn material-icons btn-square" style="font-size: 25px;" @click="submit(i)"
                                :disabled="i.disable" v-else>chevron_right</button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import gql from 'graphql-tag'

    import logoMixin from '../../../modules/intro/mixins/logoMixin'

    export default {
        mixins: [logoMixin],
        props: {
            items: {
                type: Array,
                default: () => ([])
            },
            user: Object,
            default: () => ({})
        },
        computed: {
            filteredItems() {
                return this.items.sort((a, b) => b.price - a.price)
            }
        },
        methods: {
            submit(i) {
                if (confirm('Вы уверены, что хотите потратить баллы? Можно выбрать только один подарок.')) this.$apollo.mutate({
                    mutation: gql`mutation receiveAward($id:ID!, $awardId:ID!){ receiveAward(id:$id, awardId:$awardId, )}`,
                    variables: { id: this.$store.getters.id, awardId: i._id }
                })
                    .then(({ data }) => {
                        this.$notice.success('🎁 Поздравляем с выбором подарка! Информация о способе получения доступна в профиле и направлена на почту 📧. Рекомендуем проверить папку "спам".', { timeout: 0 })
                    })
                    .catch(err => this.$notice.error(err.graphQLErrors[0].message))
            }
        },
    }
</script>