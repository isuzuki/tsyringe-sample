import "reflect-metadata"
import { container } from "tsyringe"

import { CreateItemUseCase } from "./create-item-use-case"

function main() {
  const useCase = container.resolve(CreateItemUseCase)
  const item = useCase.execute({ name: "item1", price: 10000 })
  console.log(item)
}

main()