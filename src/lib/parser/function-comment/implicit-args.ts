import { BaseCommentParser } from "../interfaces/function-comment";

export default class FunctionCommentImplicitArgsParser extends BaseCommentParser {
  constructor() {
    super();
  }

  isStartScope(line: string): boolean {
    const result = line.match(/#\s?(\w+\s?\w+)/);
    if (result) {
      if (result[1] === "Implicit args") {
        return true;
      }
    }
    return false;
  }

  returnOutput(line: string): FunctionComment | null {
    if (this.isInsideScope(line)) {
      const matchCommentLines = line.match(/#\s+(.+)/);
      if (matchCommentLines) {
        const matchInterface = line.match(/#\s+(\w+)(\(?([\w\*]+)\))?$/)
        if (matchInterface) {
          if (matchInterface[3]){
            return {"name": matchInterface[1], "type": matchInterface[3], "desc": ""};

          }
          return {"name": matchInterface[1], "type": "", "desc": ""};
        }
      }
    }
    return null;
  }

  isEndScope(line: string): boolean {
    const result = line.match(/#\s?(\w+\s?\w+)/);
    if (result) {
      if (result[1] !== "Implicit args") {
        return true;
      }
    }
    return false;
  }
}
