<template>
    <div class="content">
        <div class="content-header" />
        <div class="content-body scroll-y-hidden">
            <chat ref="chat" :message="message" />
        </div>
        <div class="content-footer">
            <div class="chat-form">
                <div class="container grid-xs" v-if="message.response !== 'final'">
                    <formAction :buttons="message.buttons" @message="checkTask" />
                    <formInput @message="checkTask" />
                </div>
                <div class="content-padding flex-centered" v-else>
                    <router-link :to="{name: 'user'}" class="btn"> Перейти в личный кабинет </router-link>
                </div>
            </div>
        </div>

        <!--Modal window-->
        <intro />

    </div>
</template>

<script>
    import gql from 'graphql-tag'

    import { message } from './queries'

    // components
    import chat from './chat'
    import formAction from './modules/form-action'
    import formInput from './modules/form-input'

    import intro from '../modules/intro'

    export default {
        data: () => ({
            message: {}
        }),
        methods: {
            checkTask(message) {
                this.$bus.$emit('chatInput', message)
                this.$apollo.mutate({
                    mutation: gql`mutation checkTask($id:ID!, $message:String!){ checkTask(id:$id, message:$message)}`,
                    variables: { id: this.$store.getters.id, message }
                })
                    .then(({ data }) => {
                        this.$bus.$emit('chatInput-bot', this.message.response || 'Правильный ответ! 🤩')
                    })
                    .catch(error => {
                        if (error.graphQLErrors[0].message == 'error_task')
                            return this.$bus.$emit('chatInput-bot', 'Хм, ответ неправильный 😑')

                        this.$notice.error(error.graphQLErrors[0].message)
                    })
            },
        },
        apollo: {
            message,
            $subscribe: {
                message: message('subscription'),
            }
        },
        components: {
            formInput,
            formAction,
            chat,

            intro
        }
    }
</script>