import { Base } from "src/base";
import { Model, ChatRequest, ChatResponse } from "./types";

const modelsResource = "models";
const chatResource = "chat/completions";

export class OpenAIService extends Base {
  getModels(): Promise<Model[]> {
    return this.invoke(`${modelsResource}`);
  }

  getModelByName(name: string): Promise<Model> {
    return this.invoke(`${modelsResource}/${name}`);
  }

  createChatCompletion(newChat: ChatRequest): Promise<ChatResponse> {
    return this.invoke(`${chatResource}`, {
      method: "POST",
      data: JSON.stringify(newChat),
    });
  }
}
