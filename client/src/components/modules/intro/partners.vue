<template>
  <div class="columns partners" style="padding: 2rem;">
    <div class="column col-4 col-sm-6" v-for="i in filteredItems">
      <div class="partner-item tooltip c-hand" :data-tooltip="i.name" :style="'background:' + (i.color || '#f3f4f8')">
        <a :href="i.link" target="_blank" class="partner-content flex-centered">
          <img :src="logo[i.logo]">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import logoMixin from './mixins/logoMixin'

  export default {
    mixins: [logoMixin],
    computed: {
      filteredItems() {
        return this.items.sort((a, b) => a.sort - b.sort)
      }
    },
    data: () => ({
      items: [
        {
          name: 'Ростелеком',
          logo: 'rostelecom',
          link: 'https://ryazan.rt.ru/',
          sort: 1
        },
        {
          name: 'Рельеф-Центр',
          logo: 'relefCentr',
          color: '#f1d80d',
          link: 'https://relefopt.ru/',
          sort: 1
        },
        {
          name: 'Прио-Внешторгбанк',
          logo: 'prioBank',
          link: 'https://priovtb.com/',
          sort: 1
        },
        {
          name: 'Эмиль БОНТЭ',
          logo: 'emelBonte',
          link: 'https://bonte-bakery.this.su/',
          color: '#35130f',
          sort: 1
        },
        {
          name: 'Мой Бизнес',
          logo: 'moyBiznes',
          link: 'https://mb-62.ru/',
          sort: 1
        },


        {
          name: 'Альфа-стоматология',
          logo: 'alphaStomatologiya',
          link: 'https://www.alfa62.ru/',
          sort: 3
        },
        {
          name: 'Макаронс от Анны Тарасовой',
          logo: 'annaTarasova',
          link: 'https://vk.com/wow_tatasova',
          sort: 4
        },


        {
          name: 'Танцевальная студия \n«Art-Rise»',
          logo: 'artRise',
          link: 'http://art-riseproject.ru/',
          sort: 3
        },
        {
          name: 'Библиотека им. Горького',
          logo: 'bibliotekaGorkogo',
          link: 'https://rounb.ru/',
          sort: 5
        },
        {
          name: 'Клиника «Династия»',
          logo: 'dinastiyaStamotologiya',
          link: 'https://www.dynasty62.ru/',
          sort: 3
        },
      
        {
          name: 'ГАУК «Рязанская областная филармония»',
          logo: 'filarmoniya',
          link: 'http://rznfilarmonia.ru/',
          sort: 5
        },

        {
          name: 'Моно-кафе «Хорошие Руки»',
          logo: 'horoshiyeRuki',
          link: 'https://vk.com/handsrzn',
          color: '#fff',
          sort: 4
        },
        {
          name: 'Кафе «Cream Soda»',
          logo: 'kremSoda',
          link: 'https://vk.com/creamsodabar',
          sort: 4
        },
        {
          name: 'МАУК «Лесопарк»',
          logo: 'lesopark',
          link: 'https://lesopark62.ru/',
          sort: 5
        },


        {
          name: 'Peach.Shop',
          logo: 'peachShop',
          link: 'https://www.instagram.com/peach.shoop/',
          sort: 4
        },
        {
          name: 'Кофейня «Привет, Десерт!»',
          logo: 'privetDesert',
          link: 'https://vk.com/privet.desert62',
          sort: 4
        },
        {
          name: 'ООО «ПРОБИЗНЕС»',
          logo: 'proBiznes',
          link: 'https://www.probisnes.ru/',
          sort: 6
        },
        {
          name: 'Издание «Pro Город» Рязань',
          logo: 'proGorod',
          link: 'https://progorod62.ru/',
          sort: 6
        },
        {
          name: 'РязГМУ им. акад. И.П. Павлова',
          logo: 'rgmu',
          link: 'https://rzgmu.ru/',
          color: 'white',
          sort: 2
        },


        {
          name: 'РГРТУ им. В.Ф. Уткина',
          logo: 'rgtu',
          link: 'http://www.rsreu.ru/',
          color: 'white',
          sort: 2
        },
        {
          name: 'РГУ им. С. А. Есенина',
          logo: 'rgu',
          link: 'https://www.rsu.edu.ru/',
          sort: 2
        },
        {
          name: 'Робошкола',
          logo: 'roboshkola',
          link: 'https://robotschool.ru/',
          sort: 3
        },
        {
          name: 'Служба доставки роллов \n«Roll.Hub»',
          logo: 'rollHub',
          link: 'https://eda.yandex/restaurant/roll_hub_lenina_9',
          color: '#000',
          sort: 4
        },
        {
          name: 'Магазин развивающих игр\nи игрушек «Знайчишка»',
          logo: 'znaychishka',
          link: 'https://znaichishka.ru/',
          sort: 3
        },


        {
          name: 'Школа 360',
          logo: 'school360',
          link: 'http://школа360.рф/',
          sort: 3
        },
        {
          name: 'РГАТУ им. П.А. Костычева',
          logo: 'rgatu',
          color: 'white',
          link: 'http://rgatu.ru/',
          sort: 2
        },
        {
          name: 'ООО «Технотон»',
          logo: 'tekhnoton',
          link: 'https://vk.com/technoton62',
          sort: 6
        },
        {
          name: 'Цветы и Кофе \n«The Moments»',
          logo: 'theMoments',
          link: 'https://www.instagram.com/the_moments_place/',
          sort: 4
        },
        {
          name: 'Научно-популярные программы \n«Умная Рязань»',
          logo: 'umnayaRyazan',
          color: '#98d5da',
          link: 'http://smartryazan.ru/',
          sort: 3
        },


        {
          name: 'Студия цветов и декора \n«Ваниль»',
          logo: 'vanil',
          color: '#868786',
          link: 'https://vk.com/vanilladecor',
          sort: 4
        },
        {
          name: 'Детский центр-сад\n«Я Люблю МОНТЕССОРИ»',
          logo: 'yaLyublyuMontessori',
          link: 'http://ilovemontessori.ru/',
          sort: 3
        },
        {
          name: 'Детский коррекционный центр \n«Особое детство»',
          logo: 'osoboyeDetstvo',
          color: 'white',
          link: 'https://osoboe-detstvo.ru/',
          sort: 3
        },

        // ---------------------

        {
          name: 'Ассоциация Предпринимателей \nРязанской области',
          logo: 'apr',
          link: 'https://62apr.ru/',
          sort: 4
        },
        {
          name: 'ООГДЮО «Российское \nдвижение школьников»',
          logo: 'dsh',
          link: 'https://62apr.ru/',
          sort: 2
        },
        {
          name: 'Международная школа \nскорочтения Васильевой Л. Л.',
          logo: 'mhv',
          link: 'http://www.chitai.ru/',
          sort: 2
        },
        {
          name: '#ХАДИКОВМАРАФОН',
          logo: 'hadikovMarafon',
          link: 'https://dmitrykhadikov.ru/marafon',
          sort: 3
        },
        {
          name: 'Сеть кинотеатров КИНОМАКС',
          logo: 'kinomax',
          link: 'https://kinomax.ru/ryazan',
          sort: 3
        },
        {
          name: 'Магазин натуральной косметики \n«KremKrem»',
          logo: 'kremKrem',
          link: 'https://vk.com/kremkrem_shop',
          sort: 3
        },

        {
          name: 'Оздоровительный комплекс \n«Звездный»',
          logo: 'zvezdniy',
          link: 'https://www.zvezdnyi.com/',
          sort: 3
        },


// ---------------------
        {
          name: 'Никита Марций \nFull Stack разработчик',
          logo: 'nikitamarcius',
          color: '#36393e',
          link: 'https://github.com/nikitamarcius',
          sort: 10
        }
      ]
    })
  }
</script>