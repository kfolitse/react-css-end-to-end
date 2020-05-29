import React from 'react'
import renderer from 'react-test-renderer'
import { Ball } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Ball />).toJSON()
  expect(tree).toMatchSnapshot()
})
