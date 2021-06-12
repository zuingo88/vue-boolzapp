function initVue() {

  new Vue({

    el: "#app",

    data: {

      //elenco dei contatti con relativi messaggi
      contacts: 
      [
        {
          name: "SpongeBob",
          avatar: "img/spongebob.jpg",
          messages: 
          [
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
              text: "Ma di quale cane parli?",
              status: "received",
            },
          ],
        },
        {
          name: "Peter",
          avatar: "img/peter.jpg",
          messages: 
          [
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
              text: "Mi piacerebbe ma siamo in zona rossa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Roger",
          avatar: "img/roger.jpg",
          messages: 
          [
            {
              date: "28/03/2020",
              hour: "10:10",
              text: "Marianna va in campagna",
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
          messages:
          [
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
          messages: 
          [
            {
              date: "10/01/2020",
              hour: "15:30",
              text: "chi sei?",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "15:50",
              text: "...sono lillo.",
              status: "received",
            },
          ],
        },
        {
          name: "Rick Sanchez",
          avatar: "img/rick.png",
          messages: 
          [
            {
              date: "10/01/2020",
              hour: "15:30",
              text: "Ciao rick",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "15:50",
              text: "ciao",
              status: "received",
            },
            {
              date: "10/01/2020",
              hour: "16:01",
              text: "che hai fatto ieri?",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "16:04",
              text: "niente di chè...sono stato un cetriolo",
              status: "received",
            },
          ],
        },
        {
          name: "Morty",
          avatar: "img/morty.png",
          messages: 
          [
            {
              date: "10/01/2020",
              hour: "15:30",
              text: "come è andata l'avventura con i vendicatori?",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "15:50",
              text: "solito pasticcio infernale",
              status: "received",
            },
            {
              date: "10/01/2020",
              hour: "15:52",
              text: "scommetto che c'entra nonno rick",
              status: "sent",
            },
            {
              date: "10/01/2020",
              hour: "15:58",
              text: "che te lo dico a fare...",
              status: "received",
            },
          ],
        },
      ],

      //variabile per salvare l'oggetto contact in contacts, creato tramite v-for
      selected: "", 

      //nuovo messaggio
      newMsg: 
      {
        text: "",
        hour: "",
        status: "sent",
      },

      //risposta automatica
      newMsgText: "",
      answer: 
      {
        text: "...ok.",
        hour: "",
        status: "received",
      },

      search: "",
    },

    updated() 
    {
      const container = this.$el.querySelector("#conversation");
      container.scrollTop = container.scrollHeight;
    },

    methods: 
    {
      selection: function (contact) 
      {
        //copia l'oggetto contact sul quale effettuo il click nella variabile selected
        this.selected = contact;
      },

      createNewMsg: function () 
      {
        //assegno ad una variabile il testo dell'oggetto newMsg e prendo il suo valore da un input
        //aggiungo il nuovo messaggio all'array di messaggi del contatto selezionato
        //svuoto l'input
        this.newMsg.text = this.newMsgText;
        this.newMsg.hour = dayjs().format("HH:mm");

        if (this.newMsgText) {
          this.selected.messages.push({ ...this.newMsg });
          this.newMsgText = "";
        }
        this.createAnswer();
      },

      createAnswer: function () 
      {
        //con la stessa logica precedente, aggiungo la risposta all'array di messaggi del contatto selezionato
        const rightContact = this.selected;
        setTimeout(() => {
          this.answer.hour = dayjs().format("HH:mm");
          rightContact.messages.push(this.answer);
        }, 2000);
      },

      filter: function () 
      {
        //inserisco in un array i contatti che nel nome hanno il testo immesso nell'input search
        //stampo la lista dei contatti ottenuta tramite v-for in filter()
        const namesArr = [];

        for (let i = 0; i < this.contacts.length; i++) {
          const contact = this.contacts[i];
          const name = contact.name;
          if (name.toLowerCase().includes(this.search.toLowerCase())) {
            namesArr.push(contact);
          }
        }
        return namesArr;

        //alternativa filter
        // const namesArr = this.contacts.filter((element) =>
        //   element.name.toLowerCase().includes(this.search.toLowerCase())
        // );
        // return namesArr;
      },
    },
  });
}

initVue();

document.addEventListener("DOMContentLoaded", initVue);
