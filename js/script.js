const { createApp } = Vue

createApp({
    data() {
        return {

            contacts: [
                {
                    name: 'Jack Sparrow',
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
                    answers: [
                        "Perché il rum finisce sempre? Ecco perché!",
                        "Ma dov'è la scimmia? Mi ci vuole un bersaglio.",
                        "Complicazioni sono sopraggiunte! Ma superate!",
                        ],
                },
                {
                    name: 'Miranda Priestly',
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
                    answers: [
                        "Qualcuno sa dirmi perché il mio caffè non è ancora qui? È morta per caso?",
                        "Fai tutto con estrema calma, sai quanto la cosa possa rendermi felice.",
                        "I dettagli sulla tua incompetenza non mi interessano.",
                        ],
                },
                {
                    name: 'Dante Alighieri ',
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
                    answers: [
                        "Amor, che a nullo amato amar perdona, mi prese del costui piacer sì forte, che, come vedi, ancor non m'abbandona.",
                        "Nel mezzo del cammin di nostra vita…",
                        "Più è tacer, che ragionare, onesto.",
                        "Ma che ho scritto a fare la Divina Commedia se poi siamo regrediti maranza?",
                        ],
                },
                {
                    name: 'Eren Jaeger',
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
                    answers: [
                        "Farò fuori tutti i giganti! Dal primo all'ultimo!"
                        ],
                },
                {
                    name: 'Frida Kahlo',
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
                    answers: [
                        "Dipingo i fiori per non farli morire...",
                        "SOLO LA VITA RIESCE A ESSERE OSCENA, INDEGNA, UMILIANTE.",
                        "CHE FAREI IO SENZA L'ASSURDO?",
                        ],
                },
                {
                    name: 'Spider-Man',
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
                    answers: [
                        "Non ho un documento d'identità con me, lo sai? Sennò l'anonimato del supereroe finirebbe.",
                        "Andrai in battaglia vestito da giovane pastorello fico o hai la tuta?",
                        "Sono solo un amichevole Spider-Man di quartiere!",
                        ],
                },
                {
                    name: 'Barbie',
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
                    answers: [
                        "Io fascista? io non comando le ferrovie o il flusso del commercio!",
                        "Il rosa non è solo un colore, è un atteggiamento.",
                        "Avete mai pensato di morire!",
                        ],
                },
                {
                    name: 'Iron-Man',
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
                    answers: [
                        "Io sono Iron-Man.",
                        "Due Vodka Martini, molto secchi, molte olive e molto in fretta.",
                        "È Natale! Siamo più cattivi!",
                        "Ehi, bimbo ragno!",
                        "Ci mettiamo un po' a riscaldarci, questo te lo concedo. Ma facciamo la conta dei presenti: tuo fratello, il semidio; un super soldato, una leggenda vivente che vive nella leggenda; un uomo con grossi problemi nel gestire la propria rabbia; un paio di assassini provetti. E tu bellimbusto sei riuscito a fare incazzare tutti quanti.",
                        "Noi abbiamo un Hulk.",
                        ],
                }
            ],      

            indexView: 5,
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

                this.$nextTick(() => {
                    // Scorri fino in fondo al pannello della conversazione
                    const conversationPannel = document.getElementById('conversation-pannel');
                    if (conversationPannel) {
                        conversationPannel.scrollTop = conversationPannel.scrollHeight;
                    }
                });
        
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

        newContactInputClean() {
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
        },
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