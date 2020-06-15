<template>
    <div>

        <div class="form-group" v-for="i in schema" v-if="!i.disabled"
            :class="{'has-error' : ($v.form[i.data].$invalid && Object.keys(form).length > 0)}">
            <input class="form-input input-lg" :type="i.type" v-model="form[i.data]" required>
            <label>{{i.name}}</label>
        </div>

        <label class="form-checkbox flex-centered-vertical mb" :class="{'is-error': $v.form.isLocal.$invalid}">
            <input type="checkbox" v-model="form['isLocal']">
            <i class="form-icon"></i> <span class="ml05 text-secondary">Я из Рязани (Рязанская область)</span>
        </label>

        <button class="btn btn-primary btn-lg btn-block mb" :disabled="$v.form.$invalid" @click="validateBeforeSubmit">
            Зарегистрироваться
        </button>

        <div class="text-secondary mb">Нажимая на кнопку, вы даете согласие на обработку своих
            персональных данных</div>

    </div>
</template>

<script>
    import gql from 'graphql-tag'
    import { email, minLength, maxLength, required } from "vuelidate/lib/validators"

    export default {
        data: () => ({
            form: {
                isLocal: false
            },
            schema: [
                {
                    name: 'Электронная почта',
                    data: 'email',
                },
                {
                    name: 'Имя',
                    data: 'name',
                },
                {
                    name: 'Пароль',
                    data: 'password',
                    type: 'password',
                },
            ],
        }),
        validations() {
            return {
                form: {
                    name: {
                        required,
                        minLength: minLength(4),
                        maxLength: maxLength(10)
                    },
                    email: {
                        required,
                        email
                    },
                    isLocal: {
                        required,
                    },
                    password: {
                        required,
                        minLength: minLength(4),
                        maxLength: maxLength(10)
                    }
                }
            }
        },
        methods: {
            validateBeforeSubmit() {
                if (!this.$v.form.$invalid) this.submit()
            },
            submit() {
                this.$apollo.mutate({
                    mutation: gql`mutation signup($name:String!, $email:String!, $password:String!, $isLocal:Boolean!) { signup( data: {name:$name, email:$email, password:$password, isLocal:$isLocal })}`,
                    variables: this.form,
                }).then(() => {
                    this.$notice.success('Вы зарегистрировались!')
                    this.$router.push({ name: 'auth' })
                }).catch(data => this.$notice.error(data.graphQLErrors[0].message))
            },
        },
    }
</script>