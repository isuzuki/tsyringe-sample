import { Item } from "./item"

export class Box {
  constructor(
    readonly id: string,
    readonly items: Item[]
  ) {}

  static create(id: string): Box {
    return new Box(id, [])
  }

  addItem(item: Item): Box {
    return {
      ...this,
      items: [...this.items, item]
    }
  }
}