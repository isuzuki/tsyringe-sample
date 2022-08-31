import "reflect-metadata"
import { container } from "tsyringe"

import { CreateItemUseCase } from "./create-item-use-case"
import { InMemoryItemRepository } from "./item-repository"

function main() {
  container.register('ItemRepository', {
    useClass: InMemoryItemRepository
  })

  const useCase = container.resolve(CreateItemUseCase)
  const item = useCase.execute({ name: "item1", price: 10000 })
  console.log(item)
}

main()