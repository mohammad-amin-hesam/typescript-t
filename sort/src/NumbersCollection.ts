export class NumbersCollection {
  constructor(public data: number[]) {}

  /**
   * @Prop get
   * @Usage to call length returned value.
   * @Note this method cannot called like a function
   * @Example let num = this.length;
   */
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
