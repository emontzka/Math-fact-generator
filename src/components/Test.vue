<template>
	<div class="test">
		<button v-on:click="addProblem">Add Math Problem</button>
		<ul class="problemList">
			<li v-for="(problem, index) in problems" class="problem">
				{{ problem.multiplicand }} x {{ problem.multiplier }} = <input class="answer" onload="console.log('clicked')" v-on:keyup.enter="checkAnswer(index)"  type="number" />
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
export default { 
  name: 'test',
  data () {
    return {
      problems: [
      ],
      wrongAnswers: [
      ],
      totalAnswered: 0,
      totalCorrect: 0
    }
  },
  methods: {
  	randomize: function( low = 2, high = 12) {
  		return Math.floor(Math.random() * (high - low)) + low;
  	},
  	addProblem: function() {

  		const num1 = this.randomize()
  		const num2 = this.randomize()

      // let addPromise = new Promise((resolve, reject) => {
        
      // })

  		this.problems.push({
  			multiplicand: num1,
  			multiplier: num2,
  			product: num1 * num2,
  			result: ""
  		})

  	},
  	checkAnswer: function(index) {
  		if ( parseInt(this.problems[index].product) !== parseInt(event.target.value) || '') {
  			this.wrongAnswers.push(this.problems[index])
  			// console.log('oops!')
  		} else {
  			// console.log('right answer!')
  			this.totalCorrect++;
  			// console.log(this.totalCorrect)
  		}
  		this.addProblem();
  	}
  },
  updated: function() {
    // console.log(document.querySelector('.problemList').lastChild.querySelector('.answer'))    
    document.querySelector('.problemList').lastChild.querySelector('.answer').focus()
    // problems: function() {
    //   // console.log('hello')
    //   // console.dir(this.problems.length)
    //   let probLength = this.problems.length
    //   let problemNodes = document.querySelectorAll('.problem')
    //   console.log(document.querySelector('.problemList').lastChild.innerHTML)
      

      // console.log(problem.product)
      // console.log(problems)
      // let thisIndex = this.problems.length;
      // var lastProblem = document.querySelectorAll('.problemList li')
      // console.log("watch method: " + lastProblem)
    // }
  }
}
</script>

