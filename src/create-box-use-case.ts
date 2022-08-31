import { BoxRepository } from "./box-repository"
import { Box } from "./box"
import { inject, injectable } from "tsyringe"

@injectable()
export class CreateBoxUseCase {
  constructor(
    @inject("BoxRepository")
    private readonly boxRepository: BoxRepository
  ) {}

  execute(): Box {
    const id = Math.random().toString().slice(-8)
    const box = Box.create(id)

    this.boxRepository.put(box)

    return box
  }
}