function calculate(arr) {
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i]

    if (elem === null) {
      return 0
    }// else if (elem.typeof !== undefined && elem !== '')
  }

    // } else if (elem.typeof !== undefined && elem !== '') {
    //   elem = elem.filter((word) => word = NaN)
    // }



    const n1 = arr[0]
    const operands = arr[1]
    const n2 = arr[2]

    switch (operands) {
      case '+':
        return (n1 + n2)

      case '-':
        return (n1 - n2)

      case '*':
        return (n1 * n2)

      case '/':
        return (n1 / n2)

      default:
        return NaN
    }
}



module.exports = calculate
