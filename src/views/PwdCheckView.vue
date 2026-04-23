<template>
	<main class="pwd-check">
		<h1>Password Check</h1>

		<q-input
			v-model="password"
			:type="showPassword ? 'text' : 'password'"
			label="Password"
			outlined
			class="pwd-check__input"
		>
			<template #append>
				<q-icon
					:name="showPassword ? 'visibility_off' : 'visibility'"
					class="cursor-pointer"
					@click="showPassword = !showPassword"
				/>
			</template>
		</q-input>

		<q-btn label="Check" color="primary" class="pwd-check__btn" @click="checkPassword" />
		<q-btn
			label="Check (No RegEx)"
			color="primary"
			class="pwd-check__btn"
			@click="checkPasswordNoRegEx"
		/>

		<div v-if="checked" class="pwd-check__result">
			<div v-if="errors.length === 0" class="pwd-check__success">Password is valid.</div>
			<ul v-else class="pwd-check__errors">
				<li v-for="error in errors" :key="error">{{ error }}</li>
			</ul>
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';
import { usePasswordChecker } from '@/composables/usePasswordChecker';

const { password, errors, checked, checkPassword, checkPasswordNoRegEx } = usePasswordChecker();
const showPassword = ref(false);
</script>

<style scoped>
.pwd-check {
	padding: 24px;
	max-width: 400px;
}

.pwd-check__input {
	margin-bottom: 16px;
}

.pwd-check__btn {
	margin-bottom: 20px;
}

.pwd-check__success {
	color: green;
	font-weight: bold;
}

.pwd-check__errors {
	color: red;
	padding-left: 20px;
}
</style>
