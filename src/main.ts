import "reflect-metadata"
import { container } from "tsyringe"

import { CreateItemUseCase } from "./create-item-use-case"
import { InMemoryItemRepository } from "./item-repository"
import { CreateBoxUseCase } from "./create-box-use-case"
import { InMemoryBoxRepository } from "./box-repository"
import { AddItemToBoxUseCase } from "./add-item-to-box-use-case";

function main() {
  container
    .register('ItemRepository', { useClass: InMemoryItemRepository })
    .register('BoxRepository', { useClass: InMemoryBoxRepository })

  const createItemUseCase = container.resolve(CreateItemUseCase)
  const item = createItemUseCase.execute({ name: "item1", price: 10000 })
  console.log(item)

  const createBoxUseCase = container.resolve(CreateBoxUseCase)
  const box = createBoxUseCase.execute()
  console.log(box)

  const addItemToBoxUseCase = container.resolve(AddItemToBoxUseCase)
  addItemToBoxUseCase.execute(item.id, box.id)
}

main()