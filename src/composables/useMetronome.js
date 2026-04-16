import { ref, computed, onUnmounted } from "vue";

export const useMetronome = () => {
	const bpm = ref(120);
	const isPlaying = ref(false);
	const currentBeat = ref(0);
	const beatsPerMeasure = ref(4);

	let audioCtx = null;
	let timerId = null;

	const intervalMs = computed(() => 60000 / bpm.value);

	const getAudioContext = () => {
		if (!audioCtx) {
			audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		}
		return audioCtx;
	};

	const playClick = (isAccent) => {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		oscillator.frequency.value = isAccent ? 1000 : 800;
		gainNode.gain.value = isAccent ? 1.0 : 0.5;

		oscillator.start(ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
		oscillator.stop(ctx.currentTime + 0.1);
	};

	const tick = () => {
		const isAccent = currentBeat.value === 0;
		playClick(isAccent);
		currentBeat.value = (currentBeat.value + 1) % beatsPerMeasure.value;
	};

	const start = () => {
		if (isPlaying.value) return;
		isPlaying.value = true;
		currentBeat.value = 0;
		tick();
		timerId = setInterval(tick, intervalMs.value);
	};

	const stop = () => {
		isPlaying.value = false;
		currentBeat.value = 0;
		if (timerId) {
			clearInterval(timerId);
			timerId = null;
		}
	};

	const toggle = () => {
		isPlaying.value ? stop() : start();
	};

	onUnmounted(() => {
		stop();
		if (audioCtx) {
			audioCtx.close();
			audioCtx = null;
		}
	});

	return {
		bpm,
		isPlaying,
		currentBeat,
		beatsPerMeasure,
		start,
		stop,
		toggle,
	};
};
