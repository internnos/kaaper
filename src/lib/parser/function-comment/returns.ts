import { BaseCommentParser } from "../interfaces/function-comment";

export default class FunctionCommentReturnsParser extends BaseCommentParser {
  constructor() {
    super();
  }

  isStartScope(line: string): boolean {
    const result = line.match(/#\s?(\w+\s?\w+)/);
    if (result) {
      if (result[1] === "Returns") {
        return true;
      }
    }
    return false;
  }

  parseCommentLine(line: string): FunctionComment | null {
    if (this.isInsideScope(line)) {
      const matchCommentLines = line.match(/#\s+(.+)/);

      if (matchCommentLines) {
        if (matchCommentLines[1] === "None") {
          return {"name": "", "type": "", "desc": "None"};
        }
        const matchInterface = line.match(/(\w+)(\(\w+\)):(.*)/)
        if (matchInterface) {
          return {"name": matchInterface[1], "type": matchInterface[2], "desc": matchInterface[3]};
        }
      }
    }
    return null;
  }

  isEndScope(line: string): boolean {
    const result = line.match(/#\s?(\w+\s?\w+)/);
    if (result) {
      if (result[1] !== "Returns") {
        return true;
      }
    }
    return false;
  }
}
