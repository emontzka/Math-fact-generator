<template>
	<div class="test">
    <timer :generator='generatorOn' @stopTheGenerator="generatorOn = $event"></timer>
		<button v-on:click="addProblem" v-if="generatorOn">Add Math Problem</button>
		<ul class="problemList" v-if="generatorOn">
			<li v-for="(problem, index) in problems" class="problem">
				{{ problem.multiplicand }} x {{ problem.multiplier }} = <input class="answer" v-on:keyup.enter="checkAnswer(index)"  type="number" />
			</li>
		</ul>
		<hr>
		<h3>Wrong answers</h3>
		<ul class="wrongAnswerList">
			<li v-for="(wrongAnswer, index) in wrongAnswers">
				{{ wrongAnswer.multiplicand }} x {{ wrongAnswer.multiplier }} = {{wrongAnswer.product}}
			</li>
		</ul>
	</div>

</template>

<script>
// import { eventBus } from '../main';
import Timer from './Timer.vue'

export default { 
  name: 'test',
  data () {
    return {
      problems: [
      ],
      wrongAnswers: [
      ],
      generatorOn: true,
      totalAnswered: 0,
      totalCorrect: 0
    }
  },
  components: {
    Timer
  },
  methods: {
  	randomize: function( low = 2, high = 12) {
  		return Math.floor(Math.random() * (high - low)) + low;
  	},
  	addProblem: function() {

  		const num1 = this.randomize()
  		const num2 = this.randomize()

  		this.problems.push({
  			multiplicand: num1,
  			multiplier: num2,
  			product: num1 * num2,
  			result: ""
  		})

  	},
  	checkAnswer: function(index) {
      if (event.target.value.length === 0) { return }
      // } else {
      if ( parseInt(this.problems[index].product) !== parseInt(event.target.value) ) {
        this.wrongAnswers.push(this.problems[index])
        // console.log('oops!')
      } else {
          // console.log('right answer!')
          this.totalCorrect++;
          // console.log(this.totalCorrect)
        }
        console.log('value is ' + event.target.value.length)
        this.addProblem();
      // }

  	}
  },
  updated: function() {
    // console.log(document.querySelector('.problemList').lastChild.querySelector('.answer'))   
    var problemList = document.querySelector('.problemList');
    if (problemList.querySelectorAll('.problem').length > 1) {
      document.querySelector('.problemList').lastChild.querySelector('input').focus();
    }
  }
}
</script>

