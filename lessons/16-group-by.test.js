// Practical use: `groupBy`

function groupBy(items, getKey) {
  return items.reduce((acc, item, index, array) => {
    const key = getKey(item, index, array)

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(item)

    return acc
  }, {})
}

describe('groupBy', () => {
  it('should group items into an object by key returned by getKey fn', () => {
    expect(
      groupBy([1, 2, 3, 4, 5], x => (x % 2 ? 'odd' : 'even'))
    ).toEqual({
      even: [2, 4],
      odd: [1, 3, 5],
    })

    expect(
      groupBy([7.2, 4.6, 1.1, 7.3], x => Math.round(x))
    ).toEqual({
      7: [7.2, 7.3],
      5: [4.6],
      1: [1.1],
    })

    expect(
      groupBy(['Kyle', 'Anna', 'Krios', 'Tali'], x => x.length)
    ).toEqual({
      4: ['Kyle', 'Anna', 'Tali'],
      5: ['Krios'],
    })
  })
})
