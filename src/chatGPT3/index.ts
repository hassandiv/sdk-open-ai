import { Base } from "../base";
import { Model, ChatRequest, ChatResponse } from "./types";

const modelsResource = "models";
const chatResource = "chat/completions";

export class ChatGPT3 extends Base {
  getModels(): Promise<Model[]> {
    return this.invoke(`${modelsResource}`);
  }

  getModelByName(name: string): Promise<Model> {
    return this.invoke(`${modelsResource}/${name}`);
  }

  createChatCompletion(newChat: ChatRequest): Promise<ChatResponse> {
    return this.invoke(`${chatResource}`, {
      method: "POST",
      body: JSON.stringify(newChat),
    });
  }
}
