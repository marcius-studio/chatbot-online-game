<template>
    <div>

        <div class="form-group" v-for="i in schema" v-if="!i.disabled"
            :class="{'has-error' : ($v.form[i.data].$invalid && Object.keys(form).length > 0)}">
            <input class="form-input input-lg" :type="i.type" v-model="form[i.data]" required>
            <label>{{i.name}}</label>
        </div>

        <button class="btn btn-primary btn-lg btn-block mb" :disabled="$v.form.$invalid" @click="validateBeforeSubmit">
            Восстановить пароль
        </button>

        <div class="text-secondary">
            Новый пароль будет отправлен на электронный адрес
        </div>

    </div>
</template>

<script>
    import gql from 'graphql-tag'
    import { email, minLength, required } from "vuelidate/lib/validators"

    export default {
        data: () => ({
            form: {},
            schema: [
                {
                    name: 'Электронная почта',
                    data: 'email',
                },
            ],
        }),
        validations() {
            return {
                form: {
                    email: {
                        required,
                        email
                    },
                }
            }
        },
        methods: {
            validateBeforeSubmit() {
                if (!this.$v.form.$invalid) this.submit()
            },
            submit() {
                this.$apollo.mutate({
                    mutation: gql`mutation restorePassword($email:String!){ restorePassword(email:$email) }`,
                    variables: this.form
                })
                    .then(() => {
                        this.$notice.info('Мы отправили новый пароль на почту')
                        this.$router.push({ name: 'auth' })
                    })
                    .catch(err => this.$notice.error(err.graphQLErrors[0].message))
            },
        },
    }
</script>