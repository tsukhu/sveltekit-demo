function emailValidator() {
	return function email(value: string) {
		return (
			(value &&
				!!value.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)) ||
			'Please enter a valid email'
		);
	};
}

function requiredValidator() {
	return function required(value: string | null | undefined) {
		return (value !== undefined && value !== null && value !== '') || 'This field is required';
	};
}

export { emailValidator, requiredValidator };
