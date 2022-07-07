import { describe, test } from 'jest-circus'

import { renderMinMax } from '@utils/number-field'

let option: {
  limitNumberBy: 'range'
  lowest?: 40
  highest?: 99
}

describe('renderMinMax', () => {
  test('Get number attributes', () => {
    expect(renderMinMax(option)).toBe('object')
  })
})
