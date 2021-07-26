// `concat` with `reduce`

function concat(...items) {
  return items.reduce((acc, item) => {
    Array.isArray(item) ? acc.push(...item) : acc.push(item)

    return acc
  }, [])
}

describe('concat', () => {
  it('should return a shallow copy if no 2nd array is provided or its empty', () => {
    const a = [1, 2, 3]
    const firstResult = concat(a)
    expect(a !== firstResult).toEqual(true)
    expect(firstResult).toEqual([1, 2, 3])

    const secondResult = concat(a, [])
    expect(secondResult).toEqual([1, 2, 3])
  })

  it('should return an array with the items of both arrays in order', () => {
    expect(concat([1, 2, 3], [4, 5, 6])).toEqual([
      1, 2, 3, 4, 5, 6,
    ])
  })

  it('arguments should not need to be arrays, nor limited to 2 args', () => {
    expect(concat(1, 2, 3)).toEqual([1, 2, 3])
  })

  it('should flatten arrays, but not nested arrays', () => {
    expect(concat([1, 2], [3, 4, [5]])).toEqual([
      1,
      2,
      3,
      4,
      [5],
    ])
  })
})
