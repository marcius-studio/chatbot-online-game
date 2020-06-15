<template>
    <div class="chat-form-action">
        <div class="columns">
            <div class="column col-4" v-for="i in buttons">
                <div class="action-button text-sm" @click="$emit('message', i)">{{i}}</div>
            </div>
            <div class="column col-4">
                <div class="action-button text-sm" @click="skipTask">Пропустить</div>
            </div>
        </div>
    </div>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        props: {
            buttons: {
                type: Array,
                default: () => (['Hello', 'Start'])
            }
        },
        methods: {
            skipTask() {
                const confirmation = confirm('Пропустить задание? Вы не сможете вернуться назад.')
                if (confirmation) {
                    this.$apollo.mutate({
                        mutation: gql`mutation skipTask($id:ID!){ skipTask(id:$id)}`,
                        variables: { id: this.$store.getters.id }
                    })
                        .then(({ data }) => {
                            this.$bus.$emit('chatInput', 'Пропустили задание 🤨')
                        }).catch(err => this.$notice.error(err.graphQLErrors[0].message))
                }

            }
        }
    }
</script>