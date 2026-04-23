import { ref } from 'vue';

export const usePasswordChecker = () => {
	const password = ref('');
	const errors = ref([]);
	const checked = ref(false);

	const checkPassword = () => {
		const val = password.value;
		const result = [];

		if (val.length < 4 || val.length > 8) {
			result.push('Length must be between 4 and 8 characters.');
		}
		if (!/[a-z]/.test(val)) {
			result.push('Must contain at least one lowercase letter.');
		}
		if (!/[A-Z]/.test(val)) {
			result.push('Must contain at least one uppercase letter.');
		}
		if (!/[0-9]/.test(val)) {
			result.push('Must contain at least one number.');
		}
		if (!/[^a-zA-Z0-9]/.test(val)) {
			result.push('Must contain at least one special character.');
		}

		errors.value = result;
		checked.value = true;
	};

	// Same as checkPassword, but without regex
	const checkPasswordNoRegEx = () => {
		const val = password.value;
		const result = [];

		// Length check
		if (val.length < 4 || val.length > 8) {
			result.push('Length must be between 4 and 8 characters.');
		}

		// Lowercase check
		let hasLower = false;
		let hasUpper = false;
		let hasDigit = false;
		let hasSpecial = false;
		for (let i = 0; i < val.length; i++) {
			const c = val[i];
			if (c >= 'a' && c <= 'z') hasLower = true;
			else if (c >= 'A' && c <= 'Z') hasUpper = true;
			else if (c >= '0' && c <= '9') hasDigit = true;
			else hasSpecial = true;
		}

		if (!hasLower) {
			result.push('Must contain at least one lowercase letter.');
		}
		if (!hasUpper) {
			result.push('Must contain at least one uppercase letter.');
		}
		if (!hasDigit) {
			result.push('Must contain at least one number.');
		}
		if (!hasSpecial) {
			result.push('Must contain at least one special character.');
		}

		errors.value = result;
		checked.value = true;
	};

	return { password, errors, checked, checkPassword, checkPasswordNoRegEx };
};
