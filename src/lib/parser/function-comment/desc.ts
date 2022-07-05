import { BaseCommentParser } from "../interfaces/function-comment";

export default class FunctionCommentDescParser extends BaseCommentParser {
  constructor() {
    super();
  }

  isStartScope(line: string): boolean {
    const result = line.match(/#\s?(\w+\s?\w+)/);
    if (result) {
      if (result[1] === "Desc") {
        return true;
      }
    }
    return false;
  }

  parseCommentLine(line: string): FunctionComment | null {
    if (this.isInsideScope(line)) {
      const match = line.match(/#\s+(.+)/);
      if (match) {
        const response = {name: "", type: "", desc: match[1]};
        return response;
      }
    }
    return null;
  }

  isEndScope(line: string): boolean {
    const result = line.match(/#\s?(\w+\s?\w+)/);
    if (result) {
      if (result[1] !== "Desc") {
        return true;
      }
    }
    return false;
  }

  getOutput(commentLines: Array<string>): Array<FunctionComment> {
    var outputResult: Array<FunctionComment> = [];
    for (const commentLine of commentLines) {
      outputResult.push({name: "", type: "", desc: commentLine});
    }
    return outputResult;
  }
}
