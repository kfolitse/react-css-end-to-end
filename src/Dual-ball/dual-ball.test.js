import React from 'react'
import renderer from 'react-test-renderer'
import { DualBall } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<DualBall />).toJSON()
  expect(tree).toMatchSnapshot()
})
