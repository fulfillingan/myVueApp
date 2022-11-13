let app = new Vue({
    el: '.main',
    data: {
      showMain: true,
      showSocial: false,
      showAchievements: false,
      showQuestions: false,
      showResult: false,
      number: 0,
      score: {
        'barhat': 0,
        'alasnick': 0,
        'limonmak': 0,
        'morkov': 0,
        'yablkor': 0,
        'pryanaya': 0,
      },
      totalGame: localStorage.getItem('titortTotalGame') ? JSON.parse(localStorage.getItem('titortTotalGame')) : {
        'barhat': 0,
        'alasnick': 0,
        'limonmak': 0,
        'morkov': 0,
        'yablkor': 0,
        'pryanaya': 0,
        'nikak' : 0,
      },
      totalGames: localStorage.getItem('titortTotalGames') ? localStorage.getItem('titortTotalGames') : 0,
      questions: questions,
      results: results,
      resultTaste: 'barhat',
    },
    methods: {
      goToMain() {
          this.showMain = true
          this.showSocial = false
          this.showAchievements = false
          this.showQuestions = false
          this.showResult = false
      },
      goToSocial() {
          this.showMain = false
          this.showSocial = true
          this.showAchievements = false
          this.showQuestions = false
          this.showResult = false
      },
      goToAchievements() {
          if(this.totalGames > 0) {
            this.showMain = false
            this.showSocial = false
            this.showAchievements = true
            this.showQuestions = false
            this.showResult = false
          } else {
            this.goToQuestions()
          }
      },
      goToQuestions() {
        this.score = {
          'barhat': 0,
          'alasnick': 0,
          'limonmak': 0,
          'morkov': 0,
          'yablkor': 0,
          'pryanaya': 0,
        }
        this.showMain = false
        this.showSocial = false
        this.showAchievements = false
        this.showQuestions = true
        this.showResult = false
      },
      goToResult(taste) {
          this.showMain = false
          this.showSocial = false
          this.showAchievements = false
          this.showQuestions = false
          this.showResult = true
          this.resultTaste = taste
      },
      nextQuestions(answer) {
          if(this.number == 9) {
          this.number = 0
          this.endGame();
          } else {
            this.number++
          }
          eval(answer)
      },
      endGame() {
          this.totalGames++;
          localStorage.setItem('titortTotalGames', this.totalGames)
          //Бархат
          if(this.score.barhat > this.score.alasnick && this.score.barhat > this.score.limonmak && this.score.barhat > this.score.morkov && this.score.barhat > this.score.yablkor && this.score.barhat > this.score.pryanaya && this.score.barhat > 5) {
              this.goToResult('barhat')
              this.totalGame.barhat++
          }
          //Сникерс
          else if (this.score.alasnick > this.score.barhat && this.score.alasnick > this.score.limonmak && this.score.alasnick > this.score.morkov && this.score.alasnick > this.score.yablkor && this.score.alasnick > this.score.pryanaya && this.score.alasnick > 5) {
              this.goToResult('alasnick')
              this.totalGame.alasnick++
          } 
          //Лимон-мак
          else if (this.score.limonmak > this.score.barhat && this.score.limonmak > this.score.alasnick && this.score.limonmak > this.score.morkov && this.score.limonmak > this.score.yablkor && this.score.limonmak > this.score.pryanaya && this.score.limonmak > 5) {
              this.goToResult('limonmak')
              this.totalGame.limonmak++
          } 
          //Морковь
          else if (this.score.morkov > this.score.barhat && this.score.morkov > this.score.alasnick && this.score.morkov > this.score.limonmak && this.score.morkov > this.score.yablkor && this.score.morkov > this.score.pryanaya && this.score.morkov > 5) {
              this.goToResult('morkov')
              this.totalGame.morkov++
          } 
          //Яблоко-корица
           else if (this.score.yablkor > this.score.barhat && this.score.yablkor > this.score.alasnick && this.score.yablkor > this.score.limonmak && this.score.yablkor > this.score.morkov && this.score.yablkor > this.score.pryanaya && this.score.yablkor > 5) {
              this.goToResult('yablkor')
              this.totalGame.yablkor++
          } 
          //Пряная вишня
           else if (this.score.pryanaya > this.score.barhat && this.score.pryanaya > this.score.alasnick && this.score.pryanaya > this.score.limonmak && this.score.pryanaya > this.score.morkov && this.score.pryanaya > this.score.yablkor && this.score.pryanaya > 5) {
              this.goToResult('pryanaya')
              this.totalGame.pryanaya++
          }
          //Ни один из вариантов
          else {
              this.goToResult('nikak')
              this.totalGame.nikak++
          }
          localStorage.setItem('titortTotalGame', JSON.stringify(this.totalGame));
      }
    },
    computed: {
      totalScore() {
        let score=0
        for(let i in this.totalGame) {
        score+=(this.totalGame[i]*results[i].points)
        }
        return score
      },
      openTastes() {
        let count=0
        for(let i in this.totalGame) {
          if(this.totalGame[i]>0) count++
      }
      return count
      },
      favoriteTaste() {
        let max='nikak'
        for(let i in this.totalGame) {
          if(this.totalGame[i]>this.totalGame[max]) {
            max=i
          }
          return results[max].name
        }
      },
      showResultTaste() {
        return {
          'barhat': this.totalGame.barhat > 0 ? true : false,
          'alasnick': this.totalGame.alasnick > 0 ? true : false,
          'limonmak': this.totalGame.limonmak > 0 ? true : false,
          'morkov': this.totalGame.morkov > 0 ? true : false,
          'yablkor': this.totalGame.yablkor > 0 ? true : false,
          'pryanaya': this.totalGame.pryanaya > 0 ? true : false,
          'nikak': this.totalGame.nikak > 0 ? true : false,
        }
      }
  }
})
let audio = new Audio('audio/soundtrack1.mp3')
let audio_btn = document.querySelector('.btn__sound')
let audio_icon = document.querySelector('.btn__sound i')

audio.muted = true;
audio.autoplay = true;
audio.volume = 0.2

audio.addEventListener('loadmetadata', function() {
  audio.currentTime = 0 + Math.random() * (audio.duration + 1 - 0)
})

audio_btn.addEventListener('click', function() {
  if(audio.muted) {
      audio.muted= false
      audio_icon.classList.add('fa-volume-up')
      audio_icon.classList.remove('fa-volume-off')
  } else if(!audio.muted) {
      if(!audio.muted) {
      audio.muted= true
      audio_icon.classList.add('fa-volume-off')
      audio_icon.classList.remove('fa-volume-up')
  }
  }
})