import { Base } from "./base";
import { ChatGPT3 } from "./chatGPT3/index";
declare class OpenAI extends Base {
}
interface OpenAI extends ChatGPT3 {
}
export default OpenAI;
