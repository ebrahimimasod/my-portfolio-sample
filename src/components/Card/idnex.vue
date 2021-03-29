<template>
    <div class="card">
        <div class="card-icon-container">
            <Icon
                    color="var(--theme-color)"
                    size="70"
                    :type="icon"/>
        </div>
        <div class="card-title">
            <span>{{title}}</span>
        </div>

        <div class="card-body">
            <p>{{body}}</p>
        </div>

        <div class="card-actions">
            <a href="" class=card-action-btn>
                Learn more
            </a>
        </div>
    </div>
</template>

<script>
    import Icon from "../Icon/index";

    export default {
        name: "Card",
        components: {Icon},
        props: {
            icon: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            body: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .card {
        padding: 56px 56px;
        margin-bottom: 100px;
        box-shadow: 0 0 20px #754ef930;
        border-radius: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: none;
    }

    .card .card-icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 60px;
        font-size: 80px;
        color: var(--theme-color);
    }


    .card .card-title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        font-weight: bold;
    }

    .card .card-body {
        color: #ccc;
        font-size: 15px;
        padding: 0 50px;
        text-align: center;
        margin-bottom: 100px;
    }

    .card .card-body p {
        margin: 0;
    }

    .card .card-actions {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card .card-actions .card-action-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--theme-color);
        padding: 5px 25px;
        color: var(--base-color);
    }
</style>