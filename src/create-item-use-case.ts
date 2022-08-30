import { ItemRepository } from "./item-repository"
import { Item } from "./item"

type CreateItemInput = {
  name: string
  price: number
}

export class CreateItemUseCase {
  constructor(
    private readonly itemRepository: ItemRepository
  ) {}

  execute(input: CreateItemInput): Item {
    const id = Math.random().toString().slice(-8)
    const item = new Item(id, input.name, input.price)

    this.itemRepository.put(item)

    return item
  }
}