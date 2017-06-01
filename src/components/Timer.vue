<template>
	<div>
		<button @click="startTimer(.3)">Start Timer</button>
		<button @click="testProps()">Test props</button>
		<p>{{ minutes }} {{ seconds }}</p>
	</div>
</template>

<script>
// import { eventBus } from '../main';
// console.dir(eventBus);
	export default {
		name: 'timer',
		data () {
			return {
				minutes: 0,
				seconds: 0
				// now: Math
			}
		},
		props: ['generator'],
		methods: {
			startTimer: function (theMinutes=3) {
				console.log(theMinutes);
				eventBus.$emit('stopTheGenerator', this.generator);
				var endDate = Date.parse(new Date()) + (theMinutes * 60 * 1000);
				var vm = this;
				window.setInterval(() => {
					var t = endDate - (Date.parse(new Date()));
					if (t >= 0) {
						vm.seconds = Math.floor((t / 1000) % 60);
						vm.minutes = Math.floor((t / 1000 / 60) % 60);
					} else {
						console.log('we are done');
						// vm.generatorOn = false;
						this.generator = false;
						eventBus.$emit('stopTheGenerator', vm.generator);
						clearInterval(window);
					}
				},1000)

				// return this.seconds++
			},
			testProps: function () {
				this.generator = false;
				this.$emit('stopTheGenerator', this.generator);
			}
		}
	}
</script>