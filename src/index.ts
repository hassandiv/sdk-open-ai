import { Base } from "./base";
import { ChatGPT3 } from "./chatGPT3/index";
import { applyMixins } from "./untils";

class OpenAI extends Base {}
interface OpenAI extends ChatGPT3 {}

applyMixins(OpenAI, [ChatGPT3]);

export default OpenAI;
