// Implementing our own `reduce` method

Array.prototype.fold = function (reducer, initialValue) {
  let accumulatedValue = initialValue
  let index = 0

  if (arguments.length === 1) {
    accumulatedValue = this[0]
    index++
  }

  for (index; index < this.length; index++) {
    const currentItem = this[index]

    accumulatedValue = reducer(
      accumulatedValue,
      currentItem,
      index,
      this
    )
  }

  return accumulatedValue
}

describe('fold', () => {
  const letters = ['a', 'b', 'c']
  const strConcat = (acc, str) => acc + str

  test('with an initial value', () => {
    expect(letters.fold(strConcat, '')).toEqual(
      letters.reduce(strConcat, '')
    )
  })

  test('without an initial value', () => {
    expect(letters.fold(strConcat)).toEqual(
      letters.reduce(strConcat)
    )
  })
})
