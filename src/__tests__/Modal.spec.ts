/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import Modal from '../routes/modal/+page.svelte';

test('should render', () => {
	const { getByText } = render(Modal);

	expect(() => getByText('Modal Dialog')).not.toThrow();
});
