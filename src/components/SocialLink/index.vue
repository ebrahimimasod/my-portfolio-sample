<template>
    <div class="social-link-container">
        <div class="social-link-text-container">
            <span class="social-link-text">FOLLOW ME ON :</span>
            <span class="social-link-line"/>
        </div>

        <div class="social-link-icons">
            <a href="">
                <Icon
                        size="30"
                        color="var(--theme-color)"
                        type="fab fa-facebook"
                />
            </a>
            <a href="">
                <Icon
                        size="30"
                        color="var(--theme-color)"
                        type="fab fa-twitter"
                />
            </a>
            <a href="">
                <Icon
                        size="30"
                        color="var(--theme-color)"
                        type="fab fa-linkedin"
                />
            </a>
        </div>
    </div>
</template>

<script>
    import Icon from "../Icon";

    export default {
        components: {Icon},
        name: "social-link",
    };
</script>

<style scoped>
    .social-link-container {
        position: absolute;
        right: 10px;
        flex-direction: column;
        top: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 400px;
    }

    .social-link-container .social-link-text-container {
        transform: rotate(90deg);
        position: absolute;
        width: max-content;
    }

    .social-link-container .social-link-text-container .social-link-text {
        color: var(--theme-color);
        font-weight: bold;
    }

    .social-link-container .social-link-text-container .social-link-line {
        height: 1px;
        width: 50px;
        display: inline-flex;
        background-color: var(--theme-color);
        margin-bottom: 3px;
        margin-left: 10px;
    }

    .social-link-container .social-link-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        bottom: -70px;
        margin-right: 5px;
    }

    .social-link-container .social-link-icons a {
        color: var(--theme-color);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
    }

    .social-link-container {
        z-index: 9;
    }

    .social-link-container .social-link-icons > a {
        font-size: 25px;
        margin-top: 10px;
    }
</style>