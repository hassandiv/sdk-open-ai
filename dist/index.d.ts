import { Base } from "./base";
import { OpenAIService } from "./openAI/index";
declare class OpenAI extends Base {
}
interface OpenAI extends OpenAIService {
}
export default OpenAI;
