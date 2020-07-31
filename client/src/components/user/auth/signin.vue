<template>
    <div>

        <div class="form-group form-action" v-for="i in schema"
            :class="{'has-error': ($v.form[i.data].$invalid && Object.keys(form).length > 0)}">
            <input class="form-input input-lg" :type="i.type" v-model="form[i.data]" required>
            <label>{{i.name}}</label>
            <router-link class="action" :to="{name:'restore-password'}" v-if="i.data == 'password'">Сбросить</router-link>
        </div>

        <div class="columns mb">
            <div class="column col-5 col-sm-6">
                <router-link :to="{name: 'signup'}" class="btn btn-link btn-lg btn-block"> Зарегистрироваться </router-link>
            </div>
            <div class="column col-7 col-sm-6">
                <button class="btn btn-primary btn-lg btn-block" :disabled="$v.form.$invalid" @click="submit">
                    Начать игру
                </button>
            </div>
        </div>

    </div>
</template>

<script>
    import gql from 'graphql-tag'
    import { required, email, minLength } from "vuelidate/lib/validators";

    export default {
        data: () => ({
            form: {},
            schema: [
                {
                    name: 'Электронная почта',
                    data: 'email',
                },
                {
                    name: 'Пароль',
                    data: 'password',
                    type: 'password',
                }
            ],
        }),
        validations: {
            form: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(3)
                }
            }
        },
        mounted() {
            localStorage.clear()
            // test auth data
            if (process.env.NODE_ENV === 'development') this.form = {
                email: 'johndoe@domain.com',
                password: '2np46j'
            }
        },
        methods: {
            submit() {
                if (!this.$v.form.$invalid) this.signin()
            },
            signin() {
                this.$apollo.mutate({
                    mutation: gql`mutation signin($email:String!, $password:String!){ signin(email:$email, password:$password){ id, access }}`,
                    variables: this.form
                })
                    .then(({ data }) => {
                        if (data.signin.id) this.$store.commit('login', { ...data.signin })
                    }).catch(err => this.$notice.error(err.graphQLErrors[0].message))
            },
        },
    }
</script>