import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

let cards = [
    { id: 0, 
      title: 'German words - Lektion 4',
      words: [ 
        { term: 'Haus', definition: 'ház'},  
        { term: 'Baum', definition: 'fa'},  
        { term: 'Auto', definition: 'autó'},  
        { term: 'Schule', definition: 'iskola'},  
        { term: 'Buch', definition: 'könyv'},  
        { term: 'Freund', definition: 'barát'},  
        { term: 'Tisch', definition: 'asztal'},  
        { term: 'Stuhl', definition: 'szék'},  
        { term: 'Wasser', definition: 'víz'},  
        { term: 'Katze', definition: 'macska'},  
        { term: 'Hund', definition: 'kutya'},  
        { term: 'Zug', definition: 'vonat'},  
        { term: 'Tür', definition: 'ajtó'},  
        { term: 'Fenster', definition: 'ablak'},
        { term: 'Uhr', definition: 'óra'},  
        { term: 'Apfel', definition: 'alma'},  
        { term: 'Blume', definition: 'virág'},  
        { term: 'Garten', definition: 'kert'},  
        { term: 'Straße', definition: 'utca'},  
        { term: 'Kind', definition: 'gyerek'}, 
    ]
    },
    { id: 1, title: 'German words - Lektion 3',
      words: [ 
        { term: 'Stuhl', definition: 'szék'},
        { term: 'Tisch', definition: 'asztal'},
        { term: 'Lampe', definition: 'lámpa'},
        { term: 'Buch', definition: 'könyv'},
        { term: 'Handy', definition: 'mobiltelefon'},
        { term: 'Koffer', definition: 'bőrönd'},
        { term: 'Brille', definition: 'szemüveg'},
        { term: 'Messer', definition: 'kés'},
        { term: 'Teller', definition: 'tányér'},
        { term: 'Schlüssel', definition: 'kulcs'},
      ]
    }, 
    { id: 2, title: 'German words - Lektion 2' },
    { id: 3, title: 'German words - Lektion 1' },
    { id: 4, title: 'German words - Lektion 4' },
    { id: 5, title: 'German words - Lektion 3' },
    { id: 6, title: 'German words - Lektion 2' },
    { id: 7, title: 'German words - Lektion 1' },
    { id: 8, title: 'English - Unit 7' },
    { id: 9, title: 'Chemistry definitions' },
  ];
const app = createApp(App)
app.config.globalProperties.$cards = cards;
app.use(router);
app.mount('#app')

// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export {
  cards,
}