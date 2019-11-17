<template>
    <footer>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <ul class="list-unstyled socialLinks d-flex justify-content-start align-items-start">
                    <li v-for="item in socialMediaLinks" :key="item.id">
                        <a :href="item.link" target="_blank">
                            <i :class="'fab fa-' + item.icon"></i>
                        </a>
                    </li>
                </ul>
            </div> <!-- .row -->
            <div class="row">
                <p class="copyright text-center w-100">Copyright &copy; 2019 Cairo, Egypt</p>
            </div>
        </div> <!-- .container -->
    </footer>
</template>

<style scoped lang="scss">
    footer {
        margin-bottom: 2rem;

        ul {
            margin-bottom: 1rem;
            text-align: center;

            li {
                width: 2rem;
                height: 2rem;
                line-height: 2rem;
                background-color: #626262;
                margin-right: 1rem;
                border-radius: 50%;
                text-align: center;

                &:last-of-type {
                    margin-right: 0;
                }

                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }

        .copyright {
            font-size: 1rem;
            color: #626262;
            text-transform: capitalize;
            margin-bottom: 0;
        }
    }
</style>

<script>
    export default {
        name: "HomeFooter",
        data() {
            return {
                date: new Date(),
                socialMediaLinks: [
                    {
                        id: 1,
                        icon: "behance",
                        link: "https://www.behance.net/khaledhossam00"
                    },
                    {
                        id: 2,
                        icon: "linkedin",
                        link: "https://www.linkedin.com/in/khaledhossam00"
                    },
                    {
                        id: 3,
                        icon: "facebook-f",
                        link: "https://www.facebook.com/khaledhossam00"
                    },
                    {
                        id: 4,
                        icon: "pinterest-p",
                        link: "https://www.pinterest.com/khaledhossam00/"
                    }
                ]
            };
        }
    };
</script>
