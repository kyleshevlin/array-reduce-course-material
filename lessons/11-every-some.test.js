// `every` and `some` with `reduce`

function every(items, predicate) {
  return items.reduce((acc, item, index, array) => {
    if (!acc) return acc

    return predicate(item, index, array)
  }, true)
}

describe('every', () => {
  it('should return true by default', () => {
    expect(every([], x => x)).toEqual(true)
  })

  it('should correctly use the predicate', () => {
    expect(every([1, 2, 3], x => x < 4)).toEqual(true)
    expect(every([1, 2, 3], x => x < 3)).toEqual(false)
  })
})

function some(items, predicate) {
  return items.reduce((acc, item, index, array) => {
    if (acc) return acc

    return predicate(item, index, array)
  }, false)
}

describe('some', () => {
  it('should return false by default', () => {
    expect(some([], x => x)).toEqual(false)
  })

  it('should correctly use the predicate', () => {
    expect(some([1, 2, 3], x => x < 2)).toEqual(true)
    expect(some([1, 2, 3], x => x > 4)).toEqual(false)
  })
})
