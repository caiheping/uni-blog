<template>
    <view>
        <web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/component/web-view"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
            }
        }
    }
</script>

<style>

</style>