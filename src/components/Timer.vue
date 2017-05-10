<template>
	<div>
		<button @click="startTimer(4)">Start Timer</button>
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
				// console.log('end date ' + endDate);
				window.setInterval(() => {
					var t = endDate - (Date.parse(new Date()));
					this.seconds = Math.floor((t / 1000) % 60);
					this.minutes = Math.floor((t / 1000 / 60) % 60);
				},1000)
				// console.log(Date.parse(new Date()));
				// const endDate = Date.parse(new Date()) + (minutes * 60 * 1000);
				// const IntervalID = setInterval(getRemainingTime, 1000);
				// var getRemainingTime = function() {
				// 	let t = endDate - (Date.parse(new Date()));
				// 	let second = Math.floor((t / 1000) % 60);
				// 	let minute = Math.floor((t / 1000 / 60) % 60);
				// 	return this.seconds++
				// }
				// var IntervalID = setInterval(this.getRemainingTime, 1000);
				// getRemainingTime();
				// return this.seconds++
			}
		}
	}
</script>