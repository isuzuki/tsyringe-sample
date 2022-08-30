import { CreateItemUseCase } from "./create-item-use-case"
import { ItemRepository } from "./item-repository"

function main() {
  const useCase = new CreateItemUseCase(new ItemRepository())
  const item = useCase.execute({ name: "item1", price: 10000 })
  console.log(item)
}

main()