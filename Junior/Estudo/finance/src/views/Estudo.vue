<template>
    <div>
        <v-row>
            <v-col cols="12">
                <div class="kodfun-galeri">
                    <div class="ms-2"
                        style="background-image: url('https://www.todoestudo.com.br/wp-content/uploads/2017/06/montanha.jpg')">
                    </div>
                    <div class="ms-2"
                        style="background-image: url('https://www.todoestudo.com.br/wp-content/uploads/2017/06/montanha.jpg')">
                    </div>
                    <div class="ms-2"
                        style="background-image: url('https://www.todoestudo.com.br/wp-content/uploads/2017/06/montanha.jpg')">
                    </div>
                    <div class="ms-2"
                        style="background-image: url('https://www.todoestudo.com.br/wp-content/uploads/2017/06/montanha.jpg')">
                    </div>
                    <div class="ms-2"
                        style="background-image: url('https://www.todoestudo.com.br/wp-content/uploads/2017/06/montanha.jpg')">
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>

</template>

<script>
export default {

}
</script>

<style>
.kodfun-galeri {
    display: flex;
    height: 20rem;
    /* gap: 1rem; */
}

.kodfun-galeri>div {
    flex: 1;
    border-radius: 1rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 50%;
    transition: all .8s cubic-bezier(.25, .4, .45, 1.4);
}

.kodfun-galeri>div:hover {
    flex: 5;
}
</style>