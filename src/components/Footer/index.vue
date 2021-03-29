<template>
    <footer>
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-4 footer-column footetr-logo-container">
                    <span class="footer-logo"> Portfolio </span>
                </div>

                <div class="col-4 footer-column footetr-links-container">
                    <NavLinks/>
                </div>

                <div class="col-4 footer-column footetr-icons-container">
                    <div class="social-link-icons">
                        <a href="">
                            <Icon
                                    size="30"
                                    color="var(--base-color)"
                                    type="fab fa-facebook"
                            />
                        </a>
                        <a href="">
                            <Icon
                                    size="30"
                                    color="var(--base-color)"
                                    type="fab fa-twitter"
                            />
                        </a>
                        <a href="">
                            <Icon
                                    size="30"
                                    color="var(--base-color)"
                                    type="fab fa-linkedin"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import Icon from "../Icon";
    import NavLinks from "../NavLinks";

    export default {
        components: {Icon, NavLinks},
        name: "footer",
    };
</script>

<style>
    footer {
        height: 200px;
        background-color: var(--theme-color);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 50px 0;
    }

    footer .footer-column {
        height: 100%;
        display: flex;
        align-items: center;
    }

    footer .footer-column.footetr-icons-container {
        justify-content: flex-end;
    }

    footer .footer-column.footetr-icons-container .social-link-icons > a {
        font-size: 30px;
        margin-left: 35px;
        color: var(--base-color);
    }

    footer .footer-column.footetr-logo-container {
        font-size: 40px;
        color: var(--base-color);
        justify-content: flex-start;
    }

    footer .footer-column.footetr-links-container {
        justify-content: center;
    }

    footer .footer-column.footetr-links-container .nav-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    footer .footer-column.footetr-links-container .nav-container .link-item {
        color: var(--base-color);
    }
</style>