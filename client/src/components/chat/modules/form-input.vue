<template>
    <div class="form-group form-action">
        <input class="form-input bg-secondary" v-model="input" placeholder="Введите сообщение" @keyup.enter="submit">
        <span class="material-icons action c-hand" :class="{'disabled': input.length < 3}" @click="submit"
            style="right: 1rem;"> send </span>
    </div>
</template>


<script>
    export default {
        data: () => ({
            input: '',
        }),
        methods: {
            submit() {
                if (this.input.length >= 3) {
                    this.$emit('message', this.input)
                    this.input = ''
                }

            }
        },
    }
</script>