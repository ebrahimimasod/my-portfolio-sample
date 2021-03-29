<template>
  <div class="section1" id="section1">
    <div class="container-fluid p-0 h-100">
      <div class="row m-0 h-100">
        <div class="container p-0 h-100">
          <SectionContent />
        </div>
      </div>
    </div>
    <span class="section1_footer_text"> BE CREATIVE </span>
    <SocialLink />
  </div>
</template>

<script>
import SocialLink from "../../../components/SocialLink/index";
import SectionContent from "./section-content";

export default {
  name: "section1",
  components: { SocialLink, SectionContent },
};
</script>

<style >
#section1 {
  height: 100vh;
  position: relative;
  background-color: var(--theme-color);
}

#section1::before {
  z-index: 0;
  content: "";
  position: absolute;
  width: 70%;
  left: 30%;
  top: 0;
  height: 98%;
  background-color: var(--base-color);
}

#section1::after {
  content: "";
  position: absolute;
  width: 30%;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 0;
  background-color: var(--theme-color);
}
#section1 > .container-fluid {
  z-index: 1;
  position: relative;
}

#section1 .section1_footer_text {
  position: absolute;
  bottom: 6%;
  color: #fff;
  z-index: 1;
  left: 6%;
}
#section1 .social-link-container {
  z-index: 9;
}

#section1 .social-link-container .social-link-icons > a {
  font-size: 25px;
  margin-top: 10px;
  color:var(--theme-color)
}
</style>