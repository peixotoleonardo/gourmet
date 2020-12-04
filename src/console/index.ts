import { IPresentationAdpter } from "@/domain/contracts/adpters/ipresentation.adpter";
import { GameController } from "./controller/game-controler";

class PresentationAdpter implements IPresentationAdpter {
  async run(): Promise<void> {
    await (new GameController()).start();
  }
}

export const presentationAdpter = new PresentationAdpter();

