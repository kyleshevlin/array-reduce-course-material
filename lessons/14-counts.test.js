// Practical use: `counts`

function counts(items) {
  return items.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 0
    }

    acc[cur]++

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
  })
})
