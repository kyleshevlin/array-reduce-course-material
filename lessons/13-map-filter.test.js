// `map` and `filter` with `reduce`

function map(items, transform) {
  return items.reduce((acc, item) => {
    acc.push(transform(item))
    return acc
  }, [])
}

describe('map', () => {
  it('should be a different reference', () => {
    const original = [1, 2, 3]
    const transformed = map(original, x => x * 1)
    expect(original !== transformed).toEqual(true)
  })

  it('should return an array of the same length', () => {
    const original = [1, 2, 3]
    const transformed = map(original, x => x * 1)
    expect(original.length === transformed.length).toEqual(true)
  })

  it('should transform every item correctly', () => {
    expect(map([1, 2, 3], x => x * x)).toEqual([1, 4, 9])
  })
})

function filter(items, predicate) {
  return items.reduce((acc, item) => {
    if (predicate(item)) {
      acc.push(item)
    }
    return acc
  }, [])
}

describe('filter', () => {
  it('should be a different refernece', () => {
    const original = [1, 2, 3]
    const filtered = filter(original, x => x > 1)
    expect(original !== filtered).toEqual(true)
  })

  it('should keep items that pass the predicate', () => {
    expect(filter([1, 2, 3], x => x > 1)).toEqual([2, 3])
  })
})
