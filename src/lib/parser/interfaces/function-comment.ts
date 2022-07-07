export abstract class BaseCommentParser {
  public startLine: string;
  public runningScope: boolean;
  public endScope: boolean;
  public startEndScopeRegexp: RegExp;
  public name: string;

  constructor() {
    this.startLine = "";
    this.runningScope = false;
    this.endScope = false;
    this.startEndScopeRegexp = /#\s?(\w+\s?\w+)/;
    this.name = ""
  }

  setStartScope(line: string) {
    const result = line.match(this.startEndScopeRegexp);
    if (result) {
      if (result[1] === this.name) {
        this.runningScope = true;
        this.startLine = line;
      }
    }
  }


  isEndScope(line: string): boolean {
    const result = line.match(this.startEndScopeRegexp);
    if (result) {
      if (result[1] !== this.name) {
        return true
      }
    }
    return false
  }

  setEndScope(line: string) {
    if (this.isEndScope(line)) {
      this.runningScope = false;
      this.endScope = true;
    }
  }

  parseCommentLine(line: string): FunctionComment | null {
    throw new Error("NOT IMPLEMENTED!");
  }

  parseCommentLines(lines: RegExpMatchArray): Array<FunctionComment> | null {
    var result : Array<FunctionComment> = [];

    for (const line of lines) {
      this.setStartScope(line)
      if (this.isEndScope(line) === true) {
        this.setEndScope(line)
      }
      if (this.runningScope === true && this.startLine !== line)   {
        console.log(line)
        const functionComment = this.parseCommentLine(line)
        if (functionComment) {
          result.push(functionComment)
        }
      }
      
    }
    return null
  }

}
