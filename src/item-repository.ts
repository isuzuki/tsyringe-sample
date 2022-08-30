import { Item } from "./item"

export class ItemRepository {
  private entities: Map<string, Item> = new Map<string, Item>()

  put(item: Item) {
    this.entities.set(item.id, item)
  }

  findOneById(id: string): Item | undefined {
    return this.entities.get(id)
  }
}