Vue.createApp({
    data() {
        return {
            unAge : "50",
            uneImg: "https://assets.catawiki.nl/assets/2018/5/3/1/5/0/150a08a0-0617-43c0-afb2-be749365d94e.jpg"
        };
    },
    methods: {
        affichageRandomDuNom() {
            const nombreRandom = Math.random();
            if (nombreRandom > 0.5) {
                return 'Speedy gonzales';
            } else {
                return 'Mousctachos';
            }
        },
        affichagePlusDix() {
            const Plus = 50 + 10 ;
            return Plus
        },
        Aleatoire () {
        var hasard = Math.random();
        return hasard
    }
}
}).mount('#monApp');