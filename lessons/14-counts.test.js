// Practical use: `counts`

function counts(items, getKey = item => item) {
  return items.reduce((acc, item, index, array) => {
    const key = getKey(item, index, array)

    if (acc[key] === undefined) {
      acc[key] = 0
    }

    acc[key]++

    return acc
  }, {})
}

describe('counts', () => {
  it('should count values', () => {
    expect(counts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])).toEqual({
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    })

    expect(
      counts([
        'apple',
        'orange',
        'apple',
        'orange',
        'apple',
        'banana',
      ])
    ).toEqual({
      apple: 3,
      banana: 1,
      orange: 2,
    })

    expect(counts([true, true, false, false, false])).toEqual({
      true: 2,
      false: 3,
    })
  })

  it('should be able to work on non-primitive values', () => {
    const items = [
      { color: 'red', size: 'M' },
      { color: 'blue', size: 'M' },
      { color: 'red', size: 'S' },
      { color: 'red', size: 'L' },
      { color: 'blue', size: 'S' },
    ]

    expect(counts(items, item => item.color)).toEqual({
      red: 3,
      blue: 2,
    })

    expect(counts(items, item => item.size)).toEqual({
      L: 1,
      M: 2,
      S: 2,
    })
  })
})
