import React from 'react';

import { HomeBase } from './Home';

function setup(injectedProps = {}) {
  const props = {
    t: jest.fn(),
    navigation: jest.fn(),
    ...injectedProps,
  };
  const wrapper = shallow(<HomeBase {...props} />, {
    disableLifecycleMethods: false,
  });

  return {
    props,
    wrapper,
  };
}

describe('Visit', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
