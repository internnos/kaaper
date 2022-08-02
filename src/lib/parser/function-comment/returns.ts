import { BaseCommentParser } from "../interfaces/function-comment";
import { FunctionComment } from "../../types";

export default class FunctionCommentReturnsParser extends BaseCommentParser {
  constructor(functionCommentText: string) {
    super(functionCommentText);
    this.name = "Returns";
    this.regex = /(\w+)(\((\w+)\)):(.*)/gm;
  }

  parseCommentLine(line: string): FunctionComment | null {
    const lineCommentInsideScope = this.isInsideScope(line, this.regex);
    if (lineCommentInsideScope) {
      const start = lineCommentInsideScope.index!;
      const matchInterface = {
        name: lineCommentInsideScope[1].trim(),
        type: lineCommentInsideScope[3].trim(),
        desc: lineCommentInsideScope[4].trim(),
        charIndex: {
          start: start,
          end: start + lineCommentInsideScope[0].length,
        },
      };
      return matchInterface;
    }
    return null;
  }
}
