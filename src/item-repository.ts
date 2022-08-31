import { Item } from "./item"

export interface ItemRepository {
  put(item: Item): void
  findOneById(id: string): Item | undefined
}

export class InMemoryItemRepository {
  private entities: Map<string, Item> = new Map<string, Item>()

  put(item: Item): void {
    this.entities.set(item.id, item)
  }

  findOneById(id: string): Item | undefined {
    return this.entities.get(id)
  }
}