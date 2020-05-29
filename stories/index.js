import React from 'react'
import { storiesOf } from '@storybook/react'
import { Ripple, DualBall, Ball } from '../src'

export default { title: 'Button' }
storiesOf('Spinners', module)
  .add('Ball', () => <Ball />)
  .add('DualBall', () => <DualBall />)
  .add('Ripple', () => <Ripple />)
