<template>
    <section class="bio" id="bio">
        <div class="container">
            <div class="content m-auto">
                <h2 class="title w-100" data-aos="fade-down"
                    data-aos-easing="linear" data-aos-duration="250">biography</h2>
                <p data-aos="fade-up"
                   data-aos-easing="linear" data-aos-duration="500">
                    Hey ! I'm Hend Mohsen, 24 Years old, Web developer working in the industry for one and half
                    well-experienced with frond-end and back-end development.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .bio {
        .content {
            width: 60%;

            @media (max-width: 768px) {
                width: 100%;
            }

            p {
                text-align: center;
            }
        }
    }
</style>
http:// www.linkedin.com/in/hend-mohsen-15410a125
<script>
    export default {
        name: "Biography"
    };
</script>
