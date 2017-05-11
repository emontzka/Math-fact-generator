<template>
	<div>
		<button @click="startTimer(.3)">Start Timer</button>
		<p>{{ minutes }} {{ seconds }}</p>
	</div>
</template>

<script>
	export default {
		name: 'timer',
		data () {
			return {
				minutes: 0,
				seconds: 0,
				now: Math
			}
		},
		props: ['generatorOn'],
		methods: {
			startTimer: function (theMinutes=3) {
				console.log(theMinutes);
				var endDate = Date.parse(new Date()) + (theMinutes * 60 * 1000);

				window.setInterval(() => {
					var t = endDate - (Date.parse(new Date()));
					if ( t > -1000 ) {
						// this.generatorOn = true;
						this.seconds = Math.floor((t / 1000) % 60);
						this.minutes = Math.floor((t / 1000 / 60) % 60);	
					} else {
						return;
					}

				},1000)

				// function myfunc() {
				// 	var t = endDate - (Date.parse(new Date()));
				//   	if (t > 0  ) {
				//     	this.seconds = Math.floor((t / 1000) % 60);
				// 			this.minutes = Math.floor((t / 1000 / 60) % 60);
				//    	} else {
				//     window.clearInterval(IntervalID);
				//     }
				//   }
				//   var IntervalID = window.setInterval(myfunc, 1000);

				// return this.seconds++
			}
		}
	}
</script>