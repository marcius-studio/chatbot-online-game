<template>
    <div>
        <div class="divider mb"></div>
        <listAwards class="mt" :items="awards" :user="user" v-if="user.isLocal" />
        <listAwards class="mt" :items="isNotLocal" :user="user" v-if="!user.isLocal" />
        <div class="mt" v-if="!user.isLocal">
            <span class="text-secondary text-sm">Подарки доступны только жителям Рязани
                и Рязанской области</span> 😔</div>
    </div>
</template>

<script>
    import { awards } from '../../queries'

    import listAwards from './list'

    export default {
        props: ['user'],
        data: () => ({
            isNotLocal: [
                {
                    name: 'Cтикеры для Телеграм',
                    company: 'Кванториум "Дружба"',
                    price: 0,
                    count: 9999,
                    logo: 'kvantorium',
                    link: 'https://ttttt.me/addstickers/kvantorium62',
                },
            ],
            awards: []
        }),
        apollo: {
            awards,
            $subscribe: {
                awards: awards('subscription'),
            }
        },
        components: {
            listAwards
        }
    }
</script>