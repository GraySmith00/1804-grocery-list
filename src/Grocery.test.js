import React from 'react'
import { shallow, mount } from 'enzyme'
import Grocery from './Grocery'

describe('Grocery', () => {
  it('should have the text of banana in the h2', () => {
    // Setup
    const wrapper = shallow(<Grocery name='banana'/>)
    const expected = <h2>Item: banana</h2>

    // Execution
      
    // Expectation
    expect(wrapper.contains(expected)).toEqual(true)
  })

  it('should match the snapshot', () => {
    // Setup
    const wrapper = shallow(
      <Grocery 
        name='apple'
        quantity={6}
        starred={false}
      />
    )

    // Execution && Expectation
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('has the class of starred if the starred prop is true', () => {
    // Setup
    const wrapper = shallow(
      <Grocery 
        name='apple'
        quantity={6}
        starred={true}
      />
    )
    
    // Execution && Expectation
    expect(wrapper.is('.starred')).toEqual(true)
  })

  it('hasn\'t the class of starred if the starred prop is false', () => {
    // Setup
    const wrapper = shallow(
      <Grocery 
        name='apple'
        quantity={6}
        starred={false}
      />
    )
    
    // Execution && Expectation
    expect(wrapper.is('.starred')).toEqual(false)
  })

  it('calls onPurchase when the purchase button is clicked', () => {
    // Setup
    const onPurchaseMock = jest.fn()
    const wrapper = shallow(
      <Grocery 
        name='apple'
        quantity={6}
        starred={false}
        onPurchase={onPurchaseMock}
      />
    )

    // Execution
    wrapper.find('.purchase-btn').simulate('click')

    // Expectation
    expect(onPurchaseMock).toHaveBeenCalled()
  })

})
