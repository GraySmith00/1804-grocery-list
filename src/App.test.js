import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import App from './App';

describe('App', () => {
  it('should update the state with a grocery when addGrocery is called', () => {
    // Expectation
    const mockGrocery = { name: 'banana', quantity: 6 }
    const wrapper = shallow(<App />)
    const expected = [{name: 'banana', quantity: 6, starred: false}]

    // Execution
    wrapper.instance().addGrocery(mockGrocery)

    // Expectation
    expect(wrapper.state('groceries')).toEqual(expected)
  })
})
