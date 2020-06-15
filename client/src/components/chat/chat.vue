<template>
    <div ref="chat" class="chat" style="overflow-y: auto; height: 100%;">
        <div class="container container-padding grid-md ">
            <div class="chat-message" :class="{'owner': i.type}" v-for="i in messages">
                <figure class="avatar avatar-lg tooltip tooltip-right" data-tooltip="Квантомен"
                    :data-initial="$store.getters.getAvatarName" v-if="!i.type">
                    <img :src="botAvatar">
                </figure>
                <div class="message-text" v-html="i.message"></div>
            </div>
        </div>

        <!--Fab btn-->
        <div class="fab-container" style="bottom: 4rem;">
            <button class="btn-fab shadow-primary" @click="$store.commit('toggleIntro')">
                <i class="material-icons">thumb_up_alt</i>
            </button>
        </div>
      

    </div>
</template>


<script>
    import gql from 'graphql-tag'
    import { mapState } from 'vuex'

    // components
    import botAvatar from '../../static/image/botAvatar.jpg'

    export default {
        props: {
            message: {
                type: Object,
                default: () => ({}),
            }
        },
        data: () => ({
            botAvatar,
            messages: [
                /*
                 {
                     message: 'text1',
                     type: 0,
                 },
                 {
                     message: 'text2',
                     type: 1,
                 }
                */
            ],
        }),
        watch: {
            message({ message }) {
                this.setMessage({ message })
            },
        },
        mounted() {
            this.$bus.$on('chatInput-bot', (message) => {
                this.setMessage({ message, type: 0 })
            })

            this.$bus.$on('chatInput',  (message) => {
                this.setMessage({ message, type: 1 })
            })
        },
        updated() {
            // scroll bottom on each update
            if (this.$refs.chat) this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
        },
        methods: {
            setMessage({ type = 0, ...data }) {
                this.messages = this.messages.concat([{ ...data, type }])
            },
        },
    }
</script>