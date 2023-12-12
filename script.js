/* below is data for navigation bar*/
new Vue({
    el:'#navBar',
    data(){
        return{
            links:[
                {link:'index.html',description:"MainPage"},
                {link:'gallery.html',description:"Gallery"},
                {link:'schedule.html',description:"Schedule"},
                {link:'getStock.html',description:"getStock"},
                {link:'Number_Guessing.html',description:"guessNumberGame"},
            ]
        }
    }
});
/* below is data for game images in gallery page*/
new Vue({
    el:'#game_image',
    data(){
        return{
            games:[
                {game:"pictures/game_image/Zelda.jpg",description:"Zelda",site:"https://zelda.nintendo.com/breath-of-the-wild/"},
                {game:"pictures/game_image/BindingofIssac.jpg",description:"Binding of Issac",site:"https://en.wikipedia.org/wiki/The_Binding_of_Isaac_(video_game)"}, 
                {game:"pictures/game_image/Hades.jpg",description:"Hades",site:"https://www.supergiantgames.com/games/hades/"}, 
                {game:"pictures/game_image/Hollow_Knight.webp",description:"Hollow Knight",site:"https://www.hollowknight.com/"}, 
                {game:"pictures/game_image/Slay_the_spire.jpg",description:"Slay the Spire",site:"https://en.wikipedia.org/wiki/Slay_the_Spire"},
            ],
        }
    },
    methods:{
        imageto:function(index){
            window.location.href = this.games[index].site;
        }
    }
})
/* below is data for hometown images in gallery page*/
new Vue({
  el:'#hometown_image',
  data(){
      return{
        homeTown:[
          {place:"pictures/hometown_image/home_1.webp",description:"GuangDong"},
          {place:'pictures/hometown_image/home_2.jpeg',description:'GuangDong'},
          {place:'pictures/hometown_image/home_3.jpeg',description:'GuangDong'},
          {place:'pictures/hometown_image/home_4.jpg',description:'TaiShan'},
          {place:'pictures/hometown_image/home_5.jpg',description:'TaiShan'}]
      }
  },
})
/* below is the code for number guessing game*/
new Vue({
    el: '#gametime',
    data: {
      gameStarted: false,
      gameWon: false,
      correctNumber: 0,
      userGuess: null,
      feedback: ''
    },
    methods: {
      startGame() {
        this.gameStarted = true;
        this.gameWon = false;
        this.correctNumber = this.getRandomNumber();
        this.userGuess = null;
        this.feedback = '';
      },
      checkGuess() {
        if (this.userGuess === this.correctNumber) {
          this.gameWon = true;
          this.feedback = '';
        } else if (this.userGuess < this.correctNumber) {
          this.feedback = 'Too small! Try again.';
        } else {
          this.feedback = 'Too large! Try again.';
        }
      },
      resetGame() {
        this.gameStarted = false;
        this.gameWon = false;
        this.correctNumber = 0;
        this.userGuess = null;
        this.feedback = '';
      },
      getRandomNumber() {
        return Math.floor(Math.random() * 101); // Random number between 0 and 100
      }
    }
  });
/* below is the code for check stock game*/
new Vue({
    el: '#checkStock',
    data: {
      stockSymbol: '',
      stockPrice: null,
      errorMessage: null
    },
    methods: {
      getStockPrice() {
        const apiKey = 'PRJKWBE5PTJSVGHB';
        const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.stockSymbol}&apikey=${apiKey}`;
  
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            if (data['Global Quote'] && data['Global Quote']['05. price']) {
              this.stockPrice = data['Global Quote']['05. price'];
              this.errorMessage = null;
            } else {
              this.stockPrice = null;
              this.errorMessage = 'Error fetching stock price. Please check the stock symbol.';
            }
          })
          .catch(error => {
            this.stockPrice = null;
            this.errorMessage = 'Error fetching stock price. Please try again later.';
          });
      }
    }
  });