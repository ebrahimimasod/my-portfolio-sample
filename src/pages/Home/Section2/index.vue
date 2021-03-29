<template>
    <div
            v-if="cards.length"
            class="section2" id="section2">
        <div class="container">
            <div class="row">
                <div
                        v-for="(cardItem , index) in cards"
                        :key="index"
                        class="col-4 card-container">
                    <Card
                    :icon="cardItem.icon"
                    :title="cardItem.title"
                    :body="cardItem.body"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "../../../components/Card/idnex";

    export default {
        name: "section2",
        data() {
            return {
                cards: [
                    {
                        icon: 'fa fa-clock',
                        title: 'On time',
                        body: `All i want to have client
                                setisfaction & this is my
                                aim`
                    },
                    {
                        icon: 'fa fa-american-sign-language-interpreting',
                        title: 'Clean work',
                        body: `All i want to have client
                                setisfaction & this is my
                                aim`
                    },
                    {
                        icon: 'fa fa-award',
                        title: 'Client setisfaction',
                        body: `All i want to have client
                                setisfaction & this is my
                                aim`
                    },
                ]
            }
        },
        components: {Card}
    }
</script>

<style scoped>
    #section2 {
        margin: 100px 0;
    }


    .card-container {
        padding: 0 8px;
    }


</style>