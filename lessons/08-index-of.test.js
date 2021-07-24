// `indexOf` with `reduce`

function indexOf(items, value, fromIndex = 0) {
  if (fromIndex < 0) {
    // adding a negative number is subtraction
    fromIndex = items.length + fromIndex
  }

  return items.reduce((acc, item, index) => {
    if (index < fromIndex) return acc
    if (acc !== -1) return acc
    if (value === item) return index

    return acc
  }, -1)
}

describe('indexOf', () => {
  it('should return -1 when there is no match', () => {
    expect(indexOf([1, 2, 3], 4)).toEqual(-1)
  })

  it('should return the first index of a value', () => {
    expect(indexOf([1, 2, 2], 2)).toEqual(1)
  })

  it('should return -1 if the fromIndex is > than array.length', () => {
    expect(indexOf([1], 1, 2)).toEqual(-1)
  })

  it('should find the first value at the fromIndex or greater when positive', () => {
    expect(indexOf([1, 2, 3, 1, 2, 3], 1, 3)).toEqual(3)
    expect(indexOf([1, 2, 3, 1, 2, 3], 2, 3)).toEqual(4)
  })

  it('should determine the fromIndex from the end of the list if its a negative number', () => {
    expect(indexOf([1, 2, 3], 2, -1)).toEqual(-1)
    expect(indexOf([1, 2, 3], 3, -1)).toEqual(2)
    expect(indexOf([1, 2, 3, 1, 2, 3], 1, -4)).toEqual(3)
    expect(indexOf([1, 2, 3, 1, 2, 3], 2, -4)).toEqual(4)
  })
})
