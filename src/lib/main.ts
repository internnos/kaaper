import * as fs from "fs";

// TODO: refactor this
let map = new Map();
map.set("constructor", /@constructor\s[\w\s\{\}\:\*\,\(\)\#\->\#]+\s/gm);

export default class CairoParser {
  public supportedComments: Array<string>;
  
  constructor() {
    this.supportedComments = [
      "Desc",
      "Implicit args",
      "Explicit args",
      "Returns",
      "Raises",
    ];
  }
  static getRegex(name: string): RegExp {
    return map.get(name);
  }

  static parseFunctionScope(filePath: string, name: string): string {
  const text = fs.readFileSync(filePath, "utf8");
    const result = text.match(this.getRegex(name));
    if (result) {
      return result[0];
    }
    return "";
  }

  static parseComments(line: string): RegExpMatchArray | null {
    const comments = line.match(/#\s+(.+)/gm);
    return comments;
  }
 
  // parseWholeScope()


  
}
