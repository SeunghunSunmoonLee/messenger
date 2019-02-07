import React from 'react';
import { shallow } from 'enzyme';
import {Row} from 'antd'
import {Users} from './Users'
import {initialState} from './reducers'
it('renders Users correctly', () => {
  const wrapper = shallow(<Users users={[...initialState.users]} />);

  expect(wrapper.find(Row).map(node => node.text()).length).toEqual(4);
});

