import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { ReactNode, ReactPortal } from 'react';

import Modal from 'src/components/atoms/utils/Modal/index';

describe('Modal Snapshots', () => {
  let portalContainer: Element | null = null;
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((children: ReactNode, container: Element) => {
      portalContainer = container;
      return children;
    }) as (children: ReactNode, container: Element, key?: null | string) => ReactPortal;
  });

  test('renders Modal with default options', async () => {
    const tree = renderer.create(
      <Modal open>
        <span>Modal</span>
      </Modal>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
    expect(portalContainer).toBe(document.body);
  });
});
