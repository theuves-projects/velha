import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jsdom-global/register'

Enzyme.configure({ adapter: new Adapter() })

import Alert from '../Alert.jsx'
import Player from '../Player.jsx'

describe('<Alert />', () => {
  test('should have two Player component', () => {
    const wrapper = Enzyme.mount(
      <Alert buttonColor='black' />
    )
    expect(wrapper.find(Player)).toHaveLength(2)
  })
  test('should have one Player component', () => {
    const wrapper = Enzyme.mount(
      <Alert
        buttonColor='black'
        winner='x'
      />
    )
    expect(wrapper.find(Player)).toHaveLength(1)
  })
  test('should renderize the button icon whe the alert is closed', () => {
    const wrapper = Enzyme.render(<Alert
      buttonColor='black'
      buttonIconClosed='foo'
    />)
    expect(wrapper.find('.material-icons').text()).toBe('foo')
  })
  test('should renderize the button icon whe the alert is opened', () => {
    const wrapper = Enzyme.render(<Alert
      buttonColor='black'
      isOpen={true}
      buttonIconOpened='bar'
      buttonIconClosed='foo'
    />)
    expect(wrapper.find('.material-icons').text()).toBe('bar')
  })
})