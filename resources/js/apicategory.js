const apicategory = new Vue({
    el: '#apicategory',
    data: {
        nombre: 'Alvaro',
        slug: '',
        div_mensaje_slug: 'Slug Existe',
        div_clase_slug: 'badge badge-danger',
        div_aparecer: false,
        deshabilitar_boton: 0
    },
    computed: {
        generarSlug: function() {
            var char = {
                "á": "a",
                "é": "e",
                "í": "i",
                "ó": "o",
                "ú": "u",
                "Á": "A",
                "É": "E",
                "Í": "I",
                "Ó": "O",
                "Ú": "U",
                "ñ": "n",
                "Ñ": "N",
                " ": "-",
                "_": "-"
            }
            var expr = /[áéíóúÁÉÍÓÚÑñ_ ]/g;
            this.slug = this.nombre.trim().replace(expr, function(e) {
                return char[e]
            }).toLowerCase()


            return this.slug;

            //return this.nombre.trim().replace(/ /g, '-').toLowerCase()
        }
    },
    methods: {
        getCategory() {
            let url = '/api/categoria/' + this.slug;
            axios.get(url).then(response => {
                this.div_mensaje_slug = response.data;
                //console.log(this.div_mensaje_slug);
                if (this.div_mensaje_slug === "Slug Disponible") {
                    this.div_clase_slug = 'badge badge-success';
                    this.deshabilitar_boton = 0;

                } else {
                    this.div_clase_slug = 'badge badge-danger';
                    this.deshabilitar_boton = 1;

                }
                this.div_aparecer = true;
            })
        }
    }
});