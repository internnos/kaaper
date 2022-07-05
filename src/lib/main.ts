import * as fs from "fs";
import FunctionSignatureRegexParser from "../lib/parser/function-signature/regex";
import FunctionCommentDescParser from "../lib/parser/function-comment/desc";
import FunctionCommentImplicitArgsParser from "./parser/function-comment/implicit-args";
import { BaseCommentParser } from "./parser/interfaces/function-comment";
import FunctionCommentExplicitArgsParser from "./parser/function-comment/explicit-args";

// TODO: refactor this
let map = new Map();
map.set("constructor", /@constructor\s[\w\s\{\}\:\*\,\(\)\#\->\#]+\s/gm);

export default class CairoParser {
  // public supportedComments: Map<string, BaseCommentParser>;
  public supportedScopes: Array<string>;
  public supportedComments: Array<BaseCommentParser>;

  constructor() {
    this.supportedScopes = ["constructor"];
    this.supportedComments = [new FunctionCommentDescParser()];
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

  static parseCommentLines(line: string): RegExpMatchArray | null {
    const comments = line.match(/#\s+(.+)/gm);
    return comments;
  }

  // static parse

  // parseWholeScope(filePath: string): Map<string, string> {
  //   for (const supportedScope of this.supportedScopes){
  //     // parse the whole scope
  //     const output = new Map<string, string | Map <string,string>>;
  //     // const functionSignature = new Map<string, Map<string, string>>

  //     const text = CairoParser.parseFunctionScope(filePath, supportedScope);

  //     // parse the function signature
  //     const functionSignatureParser = new FunctionSignatureRegexParser();
  //     const constructorName = functionSignatureParser.getAttributeName(text);
  //     const functionName = functionSignatureParser.getFunctionName(text)
  //     const implicitArgs = functionSignatureParser.getImplicitArgs(text);
  //     const explicitArgs = functionSignatureParser.getExplicitArgs(text);

  //     output.set("scope", constructorName)
  //     output.set("name", functionName)
  //     output.set("implicitArgs", implicitArgs)
  //     output.set("explicitArgs", explicitArgs)

  //     // parse the comments
  //     const commentLines = CairoParser.parseCommentLines(text);
  //     for (const commentParser of this.supportedComments) {
  //       const commentResult = new Map<string, string>
  //       if (commentLines) {
  //         for (const commentLine of commentLines) {
  //           const commentOutput = commentParser.parseCommentLine(commentLine);
  //           if (commentOutput) {

  //           }
  //         }

  //       }
  //     }
  //   }

  //   // for (supportedScope) this.supportedScopes) {
  //   //   const scope = CairoParser.parseFunctionScope(filePath, supportedScope);
  //   // }
  //   // const lines = text.split("\n");
  //   // const result = new Map<string, string>();
  //   // lines.forEach((line) => {
  //   //   const comments = this.parseCommentLines(line);
  //   //   if (comments) {
  //   //     comments.forEach((comment) => {
  //   //       const commentName = comment.match(/(\w+\s?\w+)/)[1];
  //   //       if (this.supportedScopes.includes(commentName)) {
  //   //         const scope = this.parseFunctionScope(filePath, commentName);
  //   //         result.set(commentName, scope);
  //   //       }
  //   //     });
  //   //   }
  //   // }
  //   // );
  //   return result;
  // }
}
