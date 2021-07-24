// `sum` and `product` with `reduce

function sum(numbers) {
  return numbers.reduce((total, number) => total + number, 0)
}

describe('sum', () => {
  it('should return 0 for an empty list', () => {
    expect(sum([])).toEqual(0)
  })

  it('should return the sum of all its values', () => {
    expect(sum([1, 2, 3])).toEqual(6)
    expect(sum([-4, -5, -6])).toEqual(-15)
  })
})

function product(numbers) {
  return numbers.reduce(
    (total, number) => total * number,
    numbers.length ? 1 : 0
  )
}

describe('product', () => {
  it('should return 0 for an empty array', () => {
    expect(product([])).toEqual(0)
  })

  it('should return the product of all its values', () => {
    expect(product([1, 2, 3])).toEqual(6)
    expect(product([-4, -5, -6])).toEqual(-120)
  })
})
