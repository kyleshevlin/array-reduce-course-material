// Practical use: `indexByKey`

function indexByKey(items, key) {
  return items.reduce((acc, item) => {
    acc[item[key]] = item
    return acc
  }, {})
}

describe('indexByKey', () => {
  it('should index by key', () => {
    const items = [
      { id: 'asdf', name: 'Kyle' },
      { id: 'hjkl', name: 'Anna' },
    ]

    expect(indexByKey(items, 'id')).toEqual({
      asdf: { id: 'asdf', name: 'Kyle' },
      hjkl: { id: 'hjkl', name: 'Anna' },
    })
    expect(indexByKey(items, 'name')).toEqual({
      Kyle: { id: 'asdf', name: 'Kyle' },
      Anna: { id: 'hjkl', name: 'Anna' },
    })
  })
})
