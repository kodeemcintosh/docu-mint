import { render, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';

import { FormBuilder } from './FormBuilder';

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  'next/head',
  () =>
    function Head(props: { children: ReactNode }) {
      // eslint-disable-next-line testing-library/no-node-access
      return props.children;
    }
);

describe('Builder component', () => {
  describe('Render method', () => {
    it('should a page title', async () => {
      const title = 'Random title';

      render(<FormBuilder />);

      await waitFor(() => {
        expect(document.title).toEqual(title);
      });
    });
  });
});
