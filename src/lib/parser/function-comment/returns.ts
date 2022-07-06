import { BaseCommentParser } from "../interfaces/function-comment";

export default class FunctionCommentReturnsParser extends BaseCommentParser {
  constructor() {
    super();
    this.name = "Returns";
  }

  parseCommentLine(line: string): FunctionComment | null {
    if (this.runningScope === true) {
      const matchCommentLines = line.match(/#\s+(.+)/);

      if (matchCommentLines) {
        if (matchCommentLines[1] === "None") {
          return { name: "", type: "", desc: "None" };
        }
        const matchInterface = line.match(/(\w+)(\(\w+\)):(.*)/);
        if (matchInterface) {
          return {
            name: matchInterface[1],
            type: matchInterface[2],
            desc: matchInterface[3],
          };
        }
      }
    }
    return null;
  }

}
