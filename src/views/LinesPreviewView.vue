<template>
	<q-page class="q-pa-md">
		<div class="q-gutter-y-md" style="max-width: 900px; margin: 0 auto">
			<div class="row items-center justify-between">
				<div class="text-h4">Lines Preview</div>
				<div class="q-gutter-sm">
					<q-btn label="Back to form" color="grey" icon="arrow_back" to="/line-form" />
					<q-btn
						label="Download PDF"
						color="primary"
						icon="picture_as_pdf"
						:disable="lines.length === 0"
						@click="downloadPdf(lines)"
					/>
				</div>
			</div>

			<q-table
				v-if="lines.length > 0"
				:rows="lines"
				:columns="columns"
				row-key="order"
				flat
				bordered
				:rows-per-page-options="[0]"
				hide-bottom
			>
				<template #body="props">
					<tr>
						<td class="text-center">{{ props.row.order }}</td>
						<template v-if="props.row.lat && props.row.lng">
							<td>{{ props.row.lat }}</td>
							<td>{{ props.row.lng }}</td>
							<td style="white-space: normal">{{ props.row.note }}</td>
						</template>
						<td v-else colspan="3" style="white-space: normal">{{ props.row.note }}</td>
					</tr>
				</template>
			</q-table>

			<q-card v-else flat bordered>
				<q-card-section class="text-center text-grey q-pa-lg">
					<q-icon name="info" size="md" class="q-mb-sm" />
					<div>No lines yet.</div>
					<q-btn label="Go to form" color="primary" flat to="/line-form" class="q-mt-sm" />
				</q-card-section>
			</q-card>
		</div>
	</q-page>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePdfExport } from '@/composables/usePdfExport';
import { useLinesStore } from '@/stores/lines';

const { lines } = storeToRefs(useLinesStore());
const { downloadPdf } = usePdfExport();

const columns = [
	{
		name: 'order',
		label: 'Order',
		field: 'order',
		align: 'center',
		sortable: true,
		style: 'width: 60px',
	},
	{ name: 'lat', label: 'Lat', field: 'lat', align: 'left', sortable: true },
	{ name: 'lng', label: 'Lng', field: 'lng', align: 'left', sortable: true },
	{ name: 'note', label: 'Note', field: 'note', align: 'left' },
];
</script>
