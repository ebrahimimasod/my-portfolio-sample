<template>
    <i :class="getClass" :style="getStyles"/>
</template>

<script>
    export default {
        name: "icon",
        props: {
            type: {
                type: String,
                required: true,
            },
            class: {
                type: String,
                required: false,
                default: '',
            },
            size: {
                type: Number,
                required: false,
                default: 20,
            },
            color: {
                type: String,
                required: false,
                default: '#000000',
            }
        },
        computed: {
            getClass() {
                return this.type + this.class;
            },
            getSize() {
                return `font-size:${this.size}px`;
            },
            getColor() {
                return `color:${this.color}`;
            },
            getStyles() {
                return this.getSize + ';' + this.getColor+ ';';
            }
        }
    }
</script>

<style scoped>

</style>