<template>
	<q-page class="q-pa-md">
		<div class="q-gutter-y-md" style="max-width: 1200px; margin: 0 auto">
			<q-card>
				<q-card-section class="bg-primary text-white">
					<div class="text-h4 text-weight-bold">hallo dilino</div>
					<div class="text-subtitle2 text-white text-opacity-80">
						Manage and add your lines below
					</div>
				</q-card-section>

				<q-card-section>
					<div class="text-h5">Add Line</div>
				</q-card-section>
				<q-card-section>
					<q-form @submit.prevent="onSubmit">
						<div class="row q-col-gutter-sm q-mb-sm">
							<div class="col-2">
								<q-input v-model.number="form.order" label="Order" type="number" filled dense />
							</div>
							<div class="col-5">
								<q-input v-model="form.lat" label="Lat" filled dense />
							</div>
							<div class="col-5">
								<q-input v-model="form.lng" label="Lng" filled dense />
							</div>
						</div>
						<div class="row q-col-gutter-sm items-center">
							<div class="col">
								<q-input v-model="form.note" label="Note" filled dense />
							</div>
							<div class="col-auto">
								<q-toggle v-model="form.checkField" label="Check" />
							</div>
							<div class="col-auto">
								<q-btn type="submit" label="Add Line" color="primary" icon="add" />
							</div>
						</div>
					</q-form>
				</q-card-section>
			</q-card>

			<q-card>
				<q-card-section>
					<div class="text-h5">Import / Export</div>
				</q-card-section>
				<q-card-section class="q-gutter-sm">
					<q-btn
						label="Export to clipboard"
						color="secondary"
						icon="content_copy"
						@click="exportToClipboard"
					/>
					<q-input
						v-model="importJson"
						label="Paste JSON here..."
						type="textarea"
						filled
						rows="4"
					/>
					<div class="q-gutter-sm">
						<q-btn label="Import (replace)" color="warning" icon="upload" @click="importFromJson" />
						<q-btn
							label="Import (append)"
							color="info"
							icon="playlist_add"
							@click="appendFromJson"
						/>
						<q-btn label="Import example" color="accent" icon="science" @click="importExample" />
						<q-btn label="Lines preview" color="primary" icon="visibility" to="/lines-preview" />
					</div>
				</q-card-section>
			</q-card>

			<q-card>
				<q-card-section>
					<div class="text-h5">Lines ({{ lines.length }})</div>
				</q-card-section>
				<q-list separator>
					<q-item v-for="(line, i) in lines" :key="i">
						<q-item-section avatar>
							<q-avatar color="primary" text-color="white" size="sm">
								{{ line.order }}
							</q-avatar>
						</q-item-section>
						<q-item-section>
							<q-item-label>{{ line.lat }}, {{ line.lng }}</q-item-label>
							<q-item-label caption>{{ line.note }}</q-item-label>
						</q-item-section>
					</q-item>
				</q-list>
				<q-card-section v-if="lines.length === 0" class="text-grey text-center">
					No lines yet. Add one above or import from JSON.
				</q-card-section>
			</q-card>
		</div>
	</q-page>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import exampleLines from '@/data/lines.example.json';
import { useLinesStore } from '@/stores/lines';

const store = useLinesStore();
const { lines } = storeToRefs(store);
const { addLine, setLines } = store;
const importJson = ref('');
const defaultForm = () => ({
	order: null,
	lat: '',
	lng: '',
	note: '',
	checkField: true,
});
const form = ref(defaultForm());

const exportToClipboard = async () => {
	const clipboardText = JSON.stringify(lines.value, null, 2);
	const count = clipboardText.length;

	if (!navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') {
		alert('Clipboard copy is not available in this browser or context.');
		console.error('Clipboard API is not available.');
		return;
	}

	try {
		await navigator.clipboard.writeText(clipboardText);
		clipboardCharacterCount(count);
	} catch (error) {
		alert('Failed to copy to clipboard. Please check browser permissions and try again.');
		console.error('Clipboard write failed:', error);
	}
};

const clipboardCharacterCount = (count) => {
	alert(`Copied ${count} characters to clipboard!`);
	console.log(`ty dilino, copied ${count} znakov v clipboard`);
};

const importFromJson = () => {
	const parsed = JSON.parse(importJson.value);
	setLines(parsed);
	importJson.value = '';
};

function appendFromJson() {
	const parsed = JSON.parse(importJson.value);
	parsed.forEach((line) => {
		addLine(line);
	});

	importJson.value = '';
}

const onSubmit = () => {
	addLine({ ...form.value });
	form.value = defaultForm();
};

const importExample = () => {
	setLines(exampleLines);
};
</script>
