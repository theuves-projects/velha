import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import Scoreboard from '../Scoreboard.jsx'
import Player from '../Player.jsx'

describe('<Scoreboard />', () => {
  const component = Enzyme.shallow(<Scoreboard score={42} />)

  test('should have a Player component', () => {
    expect(component.find(Player)).toHaveLength(1)
  })
  test('should have a score equal 42', () => {
    expect(component.childAt(1).text()).toBe('42')
  })
})