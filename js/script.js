const { createApp } = Vue

createApp({
    data() {
        return {

            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    onlineStatus: 1,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                    shownMess: "",
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    onlineStatus: 1,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                    shownMess: "",
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    onlineStatus: 1,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                    shownMess: "",
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    onlineStatus: 1,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                    shownMess: "",
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    onlineStatus: 1,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                    shownMess: "",
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    onlineStatus: 1,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                    shownMess: "",
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    onlineStatus: 1,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                    shownMess: "",
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    onlineStatus: 1,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                    shownMess: "",
                }
            ],      

            indexView: 0,
            indexMemory: 0,
            imageBg: 'img/mine.jpg',

            newMyChat: "",
            filter: "",

            filterArray: [],

            valueName: "",
            valuePic: "",

        }
    },

    methods: {

        changeIndexView(index) {
            this.indexView = index;
            console.log(this.indexView);
        },

        sendChat() {
            const trimInput = this.newMyChat.trim();
        
            // Controlla se l'input non è vuoto
            if (trimInput !== '') {
            this.indexMemory = this.indexView;

            const newElement = this.contacts[this.indexView];
            const newData = moment().format('DD/MM/YYYY HH:mm:ss'); //moment.js

            newElement.messages.push({
                date: newData,
                message: this.newMyChat,
                status: 'received'});
            }
            this.newMyChat = "";

            this.$nextTick(() => {
                // Scorri fino in fondo al pannello della conversazione
                const conversationPannel = document.getElementById('conversation-pannel');
                if (conversationPannel) {
                    conversationPannel.scrollTop = conversationPannel.scrollHeight;
                }
            });
        },

        answerChat() {
            this.contacts[this.indexMemory].onlineStatus = 2; // Modifica solo l'elemento corrispondente all'indice this.indexMemory
        
            setTimeout(() => {
                const newElement = this.contacts[this.indexMemory];
                const newData = moment().format('DD/MM/YYYY HH:mm:ss');
        
                newElement.messages.push({
                    date: newData,
                    message: 'ok',
                    status: 'sent'              
                });
        
                newElement.shownMess = {
                    date: newData,
                    message: 'ok',
                    status: 'sent'
                };
        
                this.contacts[this.indexMemory].onlineStatus = 3;
        
            }, 1000);
        
            setTimeout(() => {
                this.contacts[this.indexMemory].onlineStatus = 1;
            }, 2000);
        },

        filterMethod() {
            this.filterArray = [];
            const contactsEl = this.contacts; 

            contactsEl.forEach(element => {
                if (element.name.toLowerCase().includes(this.filter.toLowerCase())) {
                    this.filterArray.push(element);
                }
            });

            console.log(this.filterArray)
        },

        filterClean() {
            this.filterArray = [];
            this.filter = "";
        },

        deleteMessage(index) {
            const newElement = this.contacts[this.indexView].messages;
            newElement.splice(index, 1);
        },

        deleteAllMessages() {
            const newElement = this.contacts[this.indexView];
            newElement.messages = [];
        },

        deleteChat(index) {
            this.contacts.splice(index, 1);
        },

        salvaElementoMounted() {
            this.contacts.forEach(function(element) {
                const sentMessages = element.messages.filter(function(message) {
                    return message.status === 'sent';
                });
                if (sentMessages.length > 0) {
                    element.shownMess = sentMessages[sentMessages.length - 1];
                }
            }, this);  //il this alla fine serve a far si che venga pushato
                        //sempre l'oggetto di cui sto parlando nel ciclo
        },

        newContactInput(valueName, valuePic) {
            console.log("Valore dell'input A:", valueName);
            console.log("Valore dell'input B:", valuePic);

            this.contacts.push({
                name: valueName,
                avatar: valuePic,
                visible: true,
                onlineStatus: 1,
                messages: [],
                shownMess: "",
            })

            this.valueName = "";
            this.valuePic = "";

        },

        newContactInputClean(valueName, valuePic) {
            this.valueName = "";
            this.valuePic = "";
        },

        getTextStyle(text) {
            // Controllo se il testo contiene spazi o se è uno spam senza spazi
            if (text.indexOf(" ") !== -1) {
                return { overflowWrap: "break-word" };
            } else {
                return { wordBreak: "break-all" };
            }
        }
    },

    computed: {
        filteredList() {
            return this.contacts.filter(element => {
                return element.name.toLowerCase().indexOf(this.filter.toLowerCase()) !==-1
            })
        },
    },

    mounted() {
        this.salvaElementoMounted();
    },

}).mount("#app");