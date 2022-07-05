import { BaseCommentParser } from "../interfaces/function-comment";

export default class FunctionCommentExplicitArgsParser extends BaseCommentParser {
  constructor() {
    super();
  }

  isStartScope(line: string): boolean {
    const result = line.match(/#\s?(\w+\s?\w+)/);
    if (result) {
      if (result[1] === "Explicit args") {
        return true;
      }
    }
    return false;
  }

  returnOutput(line: string): FunctionComment | null {
    if (this.isInsideScope(line)) {
      const matchCommentLines = line.match(/#\s+(.+)/);

      if (matchCommentLines) {
        const matchInterface = line.match(/(\w+)(\((\w+)\)):(.*)/)
        if (matchInterface) {
          return {"name": matchInterface[1], "type": matchInterface[3], "desc": matchInterface[4].trim()};
        }
      }
    }
    return null;
  }

  isEndScope(line: string): boolean {
    const result = line.match(/#\s?(\w+\s?\w+)/);
    if (result) {
      if (result[1] !== "Explicit args") {
        return true;
      }
    }
    return false;
  }
}
