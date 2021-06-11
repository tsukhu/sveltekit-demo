import { render } from '@testing-library/svelte';
import Modal from '../routes/Modal.svelte';

test('should render', () => {
	const results = render(Modal);

	expect(() => results.getByText('Modal Dialog')).not.toThrow();
});
