<template>
    <div class="section" id="section5">
        <SectionTitle
                title="Want To Hire Me?"
                sub-title="If You Like My Work"
        />
        <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col-6">
                    <div class="input-container">
                        <text-filed
                                v-model="email"
                                id="email"
                                placeholder="enter your email"
                        />
                        <button class="submit-form-btn">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SectionTitle from "../../../components/SectionTitle/index";
    import TextFiled from "../../../components/TextFiled/index";

    export default {
        name: "section5",
        data(){
            return {
                email:''
            }
        },
        components: {TextFiled, SectionTitle}
    }
</script>

<style scoped>
    #section5 {
        margin-top: 200px;
    }

    .input-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
    }

    .input-container .submit-form-btn {
        outline: none;
        border: none;
        text-align: center;
        color: var(--base-color);
        background-color: var(--theme-color);
        width: 200px;
        height: 50px;
    }
</style>