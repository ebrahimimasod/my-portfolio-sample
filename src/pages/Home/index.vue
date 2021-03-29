<template>
   <div>
       <Header/>
       <SectionOne/>
       <SectionTwo/>
       <SectionTree/>
       <SectionFour/>
       <SectionFive/>
       <Footer/>
   </div>
</template>

<script>
    import SectionOne from "./Section1";
    import SectionTwo from "./Section2";
    import SectionTree from "./Section3";
    import SectionFour from "./Section4";
    import SectionFive from "./Section5";
    import Footer from "../../components/Footer/index";
    import Header from "../../components/Header/index";


    export default {
        name: "HomePage",
        components: {
            Footer,
            Header,
            SectionOne,
            SectionTwo,
            SectionTree,
            SectionFour,
            SectionFive,
        }
    }
</script>
