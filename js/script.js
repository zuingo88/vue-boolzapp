function initVue() {
  new Vue({
    el: "#app",
    data: {
      contacts: [
        {
          name: "SpongeBob",
          avatar: "img/spongebob.jpg",
          messages: [
            {
              date: "10/01/2020",
              hour: "15:30",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "15:50",
              text: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "16:15",
              text: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Peter",
          avatar: "img/peter.jpg",
          messages: [
            {
              date: "20/03/2020",
              hour: "16:30",
              text: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020",
              hour: "16:30",
              text: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020",
              hour: "16:35",
              text: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Roger",
          avatar: "img/roger.jpg",
          messages: [
            {
              date: "28/03/2020",
              hour: "10:10",
              text: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020",
              hour: "10:20",
              text: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020",
              hour: "16:15",
              text: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Carletto",
          avatar: "img/carletto.jpg",
          messages: [
            {
              date: "10/01/2020",
              hour: "15:30",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "15:50",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Gigi",
          avatar: "img/gigi.jpg",
          messages: [
            {
              date: "10/01/2020",
              hour: "15:30",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "15:50",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Igor calcetto",
          avatar: "img/igor.jpg",
          messages: [
            {
              date: "10/01/2020",
              hour: "15:30",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "15:50",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Amore",
          avatar: "img/miriam.jpg",
          messages: [
            {
              date: "10/01/2020",
              hour: "15:30",
              text: "ciao amo, che fai?",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "15:50",
              text: "Sto per finire di lavorare, tu?",
              status: "received",
            },
            {
              date: "10/01/2020",
              hour: "15:52",
              text: "preparo la borsa e vado a giocare il calcetto con igor, come tutti i giovedì",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "15:58",
              text: "amore ma oggi è martedì...",
              status: "received",
            },
          ],
          selected: 0,
        },
      ],
    },
    methods: {
      selection: function (index) { 
        this.selected = index;
        console.log(this.selected);
      },
    },
  });
}

initVue();

document.addEventListener("DOMContentLoaded", initVue);
