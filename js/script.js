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
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
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
              date: "20/03/2020 16:30:00",
              text: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
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
              date: "28/03/2020 10:10:40",
              text: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
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
              date: "10/01/2020 15:30:55",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
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
              date: "10/01/2020 15:30:55",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
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
              date: "10/01/2020 15:30:55",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
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
              date: "10/01/2020 15:30:55",
              text: "ciao amo, che fai?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Sto per finire di lavorare, tu?",
              status: "received",
            },
            {
              date: "10/01/2020 15:52:55",
              text:
                "preparo la borsa e vado a giocare il calcetto con igor, come tutti i giovedì",
              status: "sent",
            },
            {
              date: "10/01/2020 15:58:55",
              text: "amore ma oggi è martedì...",
              status: "received",
            },
          ],
        },
      ],
    },
    methods: {
      loga: function () {
        console.log(this.contacts);
      },
    },
  });
}

initVue();

document.addEventListener("DOMContentLoaded", initVue);
