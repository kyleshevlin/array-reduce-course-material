// Practical use: `groupBy`

function groupBy(items, grouper) {
  return items.reduce((acc, item) => {
    const result = grouper(item)

    if (!acc[result]) {
      acc[result] = []
    }

    acc[result].push(item)

    return acc
  }, {})
}

describe('groupBy', () => {
  it('should use grouper', () => {
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
