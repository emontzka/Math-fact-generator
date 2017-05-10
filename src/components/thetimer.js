<span class="minutes"></span><span class="seconds"></span>



<script type="text/javascript">
	var secondsSpan = document.querySelector('.seconds');
	var minutesSpan = document.querySelector('.minutes');

	function countDown ( minutes = 3 ) {
	const futureTime = Date.parse(new Date()) + (minutes * 60 * 1000);
	console.log(futureTime);
	var getRemainingTime = function() {
		let t = futureTime - (Date.parse(new Date())) ;
		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		// console.log('time is ' + t + ' and ' + seconds );
		if ( futureTime >  (Date.parse(new Date()))) {
		console.log('future ' + futureTime);
		console.log('now ' + Date.parse(new Date()));
		secondsSpan.innerHTML = ':' + ('0' + seconds).slice(-2);
		minutesSpan.innerHTML = ('0' + minutes).slice();
	} else {
		secondsSpan.style.display = 'none';
		minutesSpan.style.display = 'none';
		
		clearInterval(IntervalID)
		alert('TIME\'S UP!')
	}
	}

	var IntervalID = setInterval(getRemainingTime, 1000);
}
countDown();
</script>