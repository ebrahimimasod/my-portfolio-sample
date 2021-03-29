<template>
    <div
            class="portfolio-card"
            :style="getPortfolioImage">
        <div class="portfolio-card-inner">
            <div class="portfolio-card-title-container">
                <span class="portfolio-card-title">{{title}}</span>
            </div>
            <div class="portfolio-card-body">
                <p>{{description}}</p>
            </div>
            <div class="portfolio-card-action">
                <span>Full view</span>
                <Icon
                        color="var(--base-color)"
                        type="fas fa-expand-arrows-alt"
                        class="full-page-icon"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from "../Icon/index";

    export default {
        name: "portfolio-card",
        components: {Icon},
        props: {
            image: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        },
        computed: {
            getPortfolioImage() {
                return `background:url(${this.image})`;
            }
        }
    }
</script>

<style scoped>
    .portfolio-card {
        width: 100%;
        height: 350px;
        background-size: cover !important;
        background-repeat: round !important;
    }

    .portfolio-card .portfolio-card-inner {
        opacity: 0;
        height: 100%;
        width: 100%;
        background-color: #7149f8e3;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 50px;
        position: relative;
        transition: all 0.8s;

    }

    .portfolio-card:hover .portfolio-card-inner {
        opacity: 1;
        transition: all 0.8s;
    }

    .portfolio-card .portfolio-card-inner .portfolio-card-title-container {
        margin-bottom: 28px;
    }

    .portfolio-card .portfolio-card-inner .portfolio-card-title-container .portfolio-card-title {
        font-size: 30px;
        color: #fff;
    }

    .portfolio-card .portfolio-card-inner .portfolio-card-body {
        color: #b0afaf;
    }

    .portfolio-card .portfolio-card-inner .portfolio-card-body p {
        margin: 0;
    }

    .portfolio-card .portfolio-card-inner .portfolio-card-action {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #fff;
        font-size: 13px;
    }

    .portfolio-card .portfolio-card-inner .portfolio-card-action .full-page-icon {
        font-size: 25px;
        margin-left: 10px;
        cursor: pointer;
    }

</style>