<template>
	<q-page class="q-pa-md">
		<div class="metronome-container q-mx-auto" style="max-width: 500px">
			<q-card>
				<q-card-section class="bg-primary text-white text-center">
					<div class="text-h4 text-weight-bold">Metronome</div>
				</q-card-section>

				<q-card-section class="text-center">
					<div class="text-h2 q-mb-md">{{ bpm }} BPM</div>

					<q-slider
						v-model="bpm"
						:min="30"
						:max="300"
						:step="1"
						label
						color="primary"
						class="q-mb-lg"
					/>

					<div class="row justify-center q-gutter-sm q-mb-lg">
						<q-input
							v-model.number="bpm"
							type="number"
							filled
							dense
							style="width: 100px"
							:min="30"
							:max="300"
							label="BPM"
						/>
						<q-input
							v-model.number="beatsPerMeasure"
							type="number"
							filled
							dense
							style="width: 100px"
							:min="1"
							:max="12"
							label="Beats"
						/>
					</div>

					<div class="beat-dots q-mb-lg row justify-center q-gutter-sm">
						<div
							v-for="beat in beatsPerMeasure"
							:key="beat"
							class="beat-dot"
							:class="{
								active: isPlaying && currentBeat === beat - 1,
								accent: beat === 1,
							}"
						/>
					</div>

					<q-btn
						:icon="isPlaying ? 'stop' : 'play_arrow'"
						:label="isPlaying ? 'Stop' : 'Start'"
						:color="isPlaying ? 'negative' : 'positive'"
						size="xl"
						rounded
						@click="toggle"
					/>
				</q-card-section>
			</q-card>
		</div>
	</q-page>
</template>

<script setup>
import { useMetronome } from '@/composables/useMetronome';

const { bpm, isPlaying, currentBeat, beatsPerMeasure, toggle } = useMetronome();
</script>

<style scoped>
.beat-dot {
	width: 28px;
	height: 28px;
	border-radius: 50%;
	background: #e0e0e0;
	transition: background 0.05s ease;
}

.beat-dot.active {
	background: var(--q-primary);
	box-shadow: 0 0 12px var(--q-primary);
}

.beat-dot.accent {
	border: 2px solid var(--q-primary);
}

.beat-dot.accent.active {
	background: #ff5722;
	box-shadow: 0 0 16px #ff5722;
}
</style>
