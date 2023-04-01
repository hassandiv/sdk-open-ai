import { Base } from "../base";
import { Model, ChatRequest, ChatResponse } from "./types";
export declare class OpenAIService extends Base {
  getModels(): Promise<Model[]>;
  getModelByName(name: string): Promise<Model>;
  createChatCompletion(newChat: ChatRequest): Promise<ChatResponse>;
}
