const API_key = 'acbc60195a4edb0be7f7ef35843c4725';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação 
- comedia 
- terror
- romance
- documentários
*/

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'Originais',
                title: 'Originais do Netflix',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            }, {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            }, {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            }, {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            }, {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            }, {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            }, {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            },
        ]
    
    }
}