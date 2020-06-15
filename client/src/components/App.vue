<template>
    <div class="content">
        <div class="content-header" style="z-index: 9999;">
            <theader />
        </div>
        <div class="content-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import theader from './modules/header'
    import chat from './chat'

    export default {
        components: {
            theader,
            chat
        }
    }
</script>