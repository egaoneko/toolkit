import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { ReactNode, ReactPortal } from 'react';

import Portal from 'src/components/atoms/utils/Portal/index';

describe('Portal Snapshots', () => {
  let portalContainer: Element | null = null;
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((children: ReactNode, container: Element) => {
      portalContainer = container;
      return children;
    }) as (children: ReactNode, container: Element, key?: null | string) => ReactPortal;
  });

  afterEach(() => {
    portalContainer = null;
    (ReactDOM.createPortal as jest.Mock).mockClear();
  });

  test('renders portal with default options', async () => {
    const tree = renderer.create(
      <Portal>
        <div>Test</div>
      </Portal>,
    );
    await renderer.act(async () => {
      expect(tree.toJSON()).toMatchSnapshot();
      expect(portalContainer).toBe(document.body);
    });
  });

  test('renders portal with container', async () => {
    const container = document.createElement('div');
    const tree = renderer.create(
      <Portal container={container}>
        <div>Test</div>
      </Portal>,
    );
    await renderer.act(async () => {
      expect(tree.toJSON()).toMatchSnapshot();
      expect(tree.root.props.container).toBe(container);
      expect(portalContainer).toBe(container);
    });
  });

  test('renders portal with disablePortal', async () => {
    const tree = renderer.create(
      <Portal disablePortal>
        <div>Test</div>
      </Portal>,
    );
    await renderer.act(async () => {
      expect(tree.toJSON()).toMatchSnapshot();
      expect(tree.root.props.disablePortal).toBeTruthy();
      expect(portalContainer).toBeNull();
    });
  });
});
