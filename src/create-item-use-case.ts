import { ItemRepository } from "./item-repository"
import { Item } from "./item"
import { inject, injectable } from "tsyringe"

type CreateItemInput = {
  name: string
  price: number
}

@injectable()
export class CreateItemUseCase {
  constructor(
    @inject('ItemRepository')
    private readonly itemRepository: ItemRepository
  ) {}

  execute(input: CreateItemInput): Item {
    const id = Math.random().toString().slice(-8)
    const item = new Item(id, input.name, input.price)

    this.itemRepository.put(item)

    return item
  }
}