// `min` and `max` with `reduce`

function min(numbers) {
  return numbers.reduce(
    (acc, number) => (number < acc ? number : acc),
    Infinity
  )
}

describe('min', () => {
  it('should return the lowest number in the list', () => {
    expect(min([1, 3, 2])).toEqual(1)
    expect(min([6, 0, 4])).toEqual(0)
    expect(min([-1, -5, -2])).toEqual(-5)
  })

  it('should return Infinity if provided an empty array', () => {
    expect(min([])).toEqual(Infinity)
  })
})

function max(numbers) {
  return numbers.reduce(
    (acc, number) => (number > acc ? number : acc),
    -Infinity
  )
}

describe('max', () => {
  it('should return -Infinity if provided an empty array', () => {
    expect(max([])).toEqual(-Infinity)
  })

  it('should return the highest number in the list', () => {
    expect(max([1, 3, 2])).toEqual(3)
    expect(max([6, 0, 4])).toEqual(6)
    expect(max([-1, -5, -2])).toEqual(-1)
  })
})
