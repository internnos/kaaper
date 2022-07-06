import { BaseCommentParser } from "../interfaces/function-comment";

export default class FunctionCommentDescParser extends BaseCommentParser {
  constructor() {
    super();
    this.name = "Desc";
  }

  parseCommentLine(line: string): FunctionComment | null {
    if (this.runningScope === true && this.startLine !== line) {
      const match = line.match(/#\s+(.+)/);
      if (match) {
        const response = { name: "", type: "", desc: match[1] };
        return response;
      }
    }
    return null;
  }



}
