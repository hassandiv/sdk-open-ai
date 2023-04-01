import { Base } from "./base";
import { OpenAIService } from "./openAI/index";
import { applyMixins } from "./untils";

class OpenAI extends Base {}
interface OpenAI extends OpenAIService {}

applyMixins(OpenAI, [OpenAIService]);

export default OpenAI;
