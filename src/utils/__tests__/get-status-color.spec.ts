import { getStatusColor } from '../get-status-color'

describe('getStatusColor', () => {
  test('return info if not defined status', () => {
    expect(getStatusColor()).toBe('info')
  })
})
