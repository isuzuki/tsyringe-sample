import { Box } from "./box"

export interface BoxRepository {
  put(box: Box): void
  findOneById(id: string): Box | undefined
}

export class InMemoryBoxRepository {
  private entities: Map<string, Box> = new Map<string, Box>()

  put(box: Box): void {
    this.entities.set(box.id, box)
  }

  findOneById(id: string): Box | undefined {
    return this.entities.get(id)
  }
}