import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jsdom-global/register'

Enzyme.configure({ adapter: new Adapter() })

import Board from '../Board.jsx'
import Player from '../Player.jsx'

describe('<Board />', () => {
  test('should not have Player components', () => {
    const wrapper = Enzyme.shallow(<Board board={[]} />)
    expect(wrapper.find(Player)).toHaveLength(0)
  })
  test('should have nine Player components', () => {
    const wrapper = Enzyme.shallow(<Board board={Array(9).fill('x')} />)
    expect(wrapper.find(Player)).toHaveLength(9)
  })
})