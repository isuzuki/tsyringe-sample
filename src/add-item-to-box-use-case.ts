import { ItemRepository } from "./item-repository"
import { BoxRepository } from "./box-repository"
import { inject, injectable } from "tsyringe"

@injectable()
export class AddItemToBoxUseCase {
  constructor(
    @inject("ItemRepository")
    private readonly itemRepository: ItemRepository,
    @inject("BoxRepository")
    private readonly boxRepository: BoxRepository
  ) {}

  execute(itemId: string, boxId: string) {
    const item = this.itemRepository.findOneById(itemId)
    if (!item) {
      throw new Error("Not exists item.")
    }

    const box = this.boxRepository.findOneById(boxId)
    if (!box) {
      throw new Error("Not exists box.")
    }

    this.boxRepository.put(box.addItem(item))
  }
}