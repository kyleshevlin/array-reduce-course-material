// `includes` with `reduce`

function includes(items, value, fromIndex = 0) {
  fromIndex =
    fromIndex < 0 ? items.length + fromIndex : fromIndex

  return items.reduce((acc, item, index) => {
    if (fromIndex > index) return acc
    if (acc) return acc
    return item === value
  }, false)
}

describe('includes', () => {
  it('should return false when there is no match', () => {
    expect(includes([1, 2, 3], 4)).toEqual(false)
  })

  it('should return true if a match is found', () => {
    const item1 = { a: 1 }
    const item2 = { b: 2 }

    expect(includes([1, 2, 3], 2)).toEqual(true)
    expect(includes([item1, item2], item1)).toEqual(true)
  })

  it('should use fromIndex', () => {
    expect(includes([], undefined, 1)).toEqual(false)
    expect(includes([1, 2, 3], 2, 2)).toEqual(false)
    expect(includes([1, 2, 3, 1, 2, 3], 1, 2)).toEqual(true)
    expect(includes([1, 2, 3, 1, 2, 3], 1, -2)).toEqual(false)
  })
})
