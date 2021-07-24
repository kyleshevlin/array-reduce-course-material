// `join` with `reduce`

function join(items, separator = ',') {
  return items.reduce((acc, item) => {
    item = String(item)

    return acc ? `${acc}${separator}${item}` : item
  }, '')
}

describe('join', () => {
  it('should return an empty string for an empty array', () => {
    expect(join([])).toEqual('')
  })

  it('should coerce values to strings', () => {
    expect(join([1])).toEqual('1')
  })

  it('should concatenate the string w/ a separator between each item', () => {
    expect(join(['a', 'b', 'c'], '-')).toEqual('a-b-c')
  })

  it('should use `,` as the default separator', () => {
    expect(join(['a', 'b', 'c'])).toEqual('a,b,c')
  })
})
