class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize
    this.length = 0
    this.data = new Array(this.capacity)
  }

  read(index) {

    // Your code here
    return this.data[index]
  }

  push(val) {

    // Your code here
    if(this.capacity === this.length)
      this.resize()

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === undefined) {
        this.data[i] = val
        this.length++
        return
      }
    }
  }


  pop() {

    // Your code here
    let lastItemIndex = this.length - 1
    let lastItem = this.data[lastItemIndex]
    if(lastItem){
      this.length--
      return lastItem
    }
  
  }

  shift() {

    // Your code here
    let removed = this.data[0]
    for (let i = 0; i < this.length; i++) {
      let next = this.data[i + 1]
      this.data[i] = next
    }
    if(this.length> 0)
      this.length--
    return removed
  }

  unshift(val) {

    // Your code here
    if(this.capacity === this.length)
      this.resize()

    for (let i = this.data.length - 1; i > 0; i--) {
      let prev = this.data[i - 1]
      this.data[i] = prev
    }
    this.data[0] = val
    this.length++
  }

  indexOf(val) {

    // Your code here
    for (let i = 0; i < this.data.length; i++) {
      if(val === this.data[i])
        return i
    }
    return -1
  }

  resize() {

    // Your code here
    this.capacity += this.capacity
    let newData = new Array(this.capacity)
    for (let i = 0; i < this.data.length; i++) {
      newData[i] = this.data[i]
    }
    this.data = newData
  }

}


module.exports = DynamicArray;