<template>
    <div class="container container-padding grid-md">
        <div class="columns mb">
            <div class="column col-7 col-sm-12">
                <div class="form-group width100">
                    <input class="form-input"
                        style=" border: none; padding: 0.5rem 0.5rem 0.5rem 0; border-radius: 5px; "
                        placeholder="Найти по имени или почте" v-model="input">
                </div>
            </div>
            <div class="column col-5 col-sm-12 flex-centered-vertical admin-header-action">
                <!--Download exel-->
                <span>
                    <download-excel class="btn-sm bg-green c-hand label" :data="users" :fields="json_fields"> <span
                            class="material-icons" style="font-size: 15px;"> get_app </span> .xls</download-excel>
                </span>
                <div class="text-sm text-secondary ml">
                    Всего участников {{users.length}}
                </div>
            </div>
        </div>
        <!--Участники-->
        <div class="section" v-for="i in filteredItems">
            <div class="section-item section-item-filled z-depth-1">
                <div class="tile tile-list">
                    <div class="tile-section hide-sm">
                        <figure class="icon text-uppercase mr c-hand" :data-initial="i.name | cut"
                            style="background-color: #6490f1;"></figure>
                    </div>
                    <div class="tile-section  tile-content">
                        <div>
                            <span class="text-bold">{{i.name || 'Noname'}}</span> - {{i.score}} Баллов
                        </div>
                        <div class="text-secondary">{{i.email}}</div>
                    </div>
                    <div class="tile-section tile-action text-secondary hide-sm">
                        {{i.date | date('MMMM Do YYYY')}}
                    </div>
                </div>
                <div class="divider" />
                <div>
                    <span class="text-sm text-secondary">Рязань или Рязанская область</span> <span class="label"
                        :class="[i.isLocal ? 'bg-green' : 'bg-gray']">{{i.isLocal ? 'Да' : 'Нет'}}</span>
                </div>
                <div class="text-sm" v-if="i.gift && Object.keys(i.gift).length > 0">
                    <span class="text-secondary">Подарок:</span> {{i.gift.name}} от {{i.gift.company}}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import gql from 'graphql-tag'

    import { users } from '../user/queries'

    export default {
        data: () => ({
            users: [],
            input: '',
            json_fields: { // json => .xls
                'Имя': 'name',
                'Почта': 'email',
                'Рязань, Рязанская область': 'isLocal',
                'Баллы': 'score',
                'Название подарка': 'gift.name',
                'Компания': 'gift.company',
                'Квантум': 'analytics.kvantum',
                'Feedback': 'analytics.feedback',
            },
        }),
        computed: {
            // Filter by name and cut 
            filteredItems() {
                const input = this.input.toLowerCase()
                return this.users.filter(i => i.name.toLowerCase().includes(input) || i.email.toLowerCase().includes(input)).slice(0, 20)
            }
        },
        created() {
            // Fool check
            if (!this.$store.getters.isAdmin) {
                this.$router.push({ name: 'home' })
            }
        },
        apollo: {
            users,
            $subscribe: {
                users: users('subscription'),
            }
        },
    }
</script>