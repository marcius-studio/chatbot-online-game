<template>
    <div class="container container-padding grid-md">
        <div class="mb">
            <div class="text-bold h5 c-hand text-capitalize" @click="updateUser">{{user.name}}
                <span class="material-icons text-secondary" style="font-size: 15px;"> create </span>
            </div>
            <span class="text-bold">🎁 {{user.score}}</span> Баллов
            <!--span class="text-bold">{{user.level}}</span> уровень -->
        </div>

        <div v-if="user.gift && Object.keys(user.gift).length > 0">
            
            <div v-if="user.gift.textMessage" v-html="user.gift.textMessage"></div>
            <div v-else>
                <div>Ваш подарок: <b>{{user.gift.name}}</b></div>
                <div class="text-sm text-secondary" >Забрать ваш подарок можно по адресу: г.Рязань, ул. Дзержинского, д.6 до
                    15 июня с 9:00 до 17:00, предварительно связавшись по телефону 55-92-80 (доб.3). (Валентина Сергеевна,
                    методист; Мария Геннадьевна, заместитель директора). </div>
            </div>
            
        </div>

        <!--Awards-->
        <awards class="mt" :user="user"></awards>
    </div>
</template>

<script>
    import gql from 'graphql-tag'

    import { user } from "../queries"

    // components
    import awards from './awards'

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
        methods: {
            updateUser() {
                const name = prompt('Введите имя', this.user.name)
                if (name && name.length >= 3) this.$apollo.mutate({
                    mutation: gql`mutation updateUser($name:String!, $id:ID!){ updateUser(name:$name, id:$id)}`,
                    variables: { name, id: this.$store.getters.id }
                })
                    .then(({ data }) => {
                        this.$notice.success('Данные обновлены', { timeout: 0 })
                    })
                    .catch(err => this.$notice.error(err.graphQLErrors[0].message))
            }
        },
        components: {
            awards
        }
    }
</script>