import { render } from '@testing-library/svelte';
import Modal from '../routes/Modal.svelte';

test('should render', () => {
	const { getByText } = render(Modal);

	expect(() => getByText("Modal Dialog")).not.toThrow();
});
