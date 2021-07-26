// `find` with `reduce`

function find(items, predicate) {
  return items.reduce((acc, item, index, array) => {
    if (acc !== undefined) return acc

    if (predicate(item, index, array)) {
      return item
    }

    return acc
  }, undefined)
}

describe('find', () => {
  it('should return undefined when there is no match', () => {
    expect(find([1, 2, 3], x => x === 4)).toEqual(undefined)
  })

  it('should return the first item that satisfies the predicate', () => {
    const item1 = { a: 1 }
    const item2 = { a: 1 }

    expect(find([item1, item2], obj => obj.a === 1)).toBe(item1)
  })
})
