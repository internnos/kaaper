import * as assert from "assert";
import * as path from "path";
import FunctionCommentRaisesParser from "../../../../lib/parser/function-comment/raises"
import CairoParser from "../../../../lib/main";

suite("function-comment: constructor: returns", () => {
  test("parse line 14", () => {
    const pathFile = path.resolve(
      __dirname,
      "../../../../../test_assets/ERC20.cairo"
    );
    
    const functionText = CairoParser.parseFunctionScope(
      pathFile,
      "constructor"
    );
    const commentText = CairoParser.parseCommentLines(functionText);

    const raisesParser = new FunctionCommentRaisesParser();

    const line = 12;
    assert.equal("    # Raises:", commentText![line].trim(), `check line ${line}`);
    raisesParser.setStartScope(commentText![line]);
    
    assert.equal(commentText![line], raisesParser.startLine);

    const resultLineParsing = raisesParser.parseCommentLine(commentText![line]);

    assert.equal(
      true,
      raisesParser.runningScope,
      `failed to get running scope line ${line}`
    );
    assert.equal(false, raisesParser.isEndScope(commentText![line]), `failed to get end scope line ${line}`);
    assert.equal(
      null,
      resultLineParsing,
      `failed to get resultLineParsing line ${line}`
    );
  });


  // test("parse line 13", () => {
  //   const pathFile = path.resolve(
  //     __dirname,
  //     "../../../../../test_assets/ERC20.cairo"
  //   );
  //   const functionText = CairoParser.parseFunctionScope(
  //     pathFile,
  //     "constructor"
  //   );
  //   const commentText = CairoParser.parseCommentLines(functionText);
  //   const raisesParser = new FunctionCommentRaisesParser();
  //   raisesParser.setStartScope(commentText![6]);

  //   const line = 13;
  //   assert.equal("#   None", commentText![line].trim(), `check line ${line}`);
  //   assert.notEqual(commentText![line], raisesParser.startLine);
  //   const isEndScope = raisesParser.isEndScope(commentText![line]);
  //   assert.equal(false, isEndScope, `failed to get end scope line ${line}`);

  //   assert.equal(true, raisesParser.runningScope, `failed to get running scope line ${line}`);
  //   const resultLineParsing = raisesParser.parseCommentLine(commentText![line]);
    
  //   const targetLineParsing = {name: "", type: "", desc: "None"};
  //   assert.deepEqual(targetLineParsing, resultLineParsing, `failed to get resultLineParsing line ${line}`);
  // })

  // test("parse line 14", () => {
  //   const pathFile = path.resolve(
  //     __dirname,
  //     "../../../../../test_assets/ERC20.cairo"
  //   );
  //   const functionText = CairoParser.parseFunctionScope(
  //     pathFile,
  //     "constructor"
  //   );
  //   const commentText = CairoParser.parseCommentLines(functionText);
  //   const raisesParser = new FunctionCommentRaisesParser();
  //   raisesParser.setStartScope(commentText![6]);

  //   const line = 14;
  //   assert.equal("# Raises:", commentText![line].trim(), `check line ${line}`);
  //   assert.notEqual(commentText![line], raisesParser.startLine);
  //   assert.equal(true, raisesParser.isEndScope(commentText![line]), `failed to get end scope line ${line}`);
  //   raisesParser.setEndScope(commentText![line]);

  //   assert.equal(false, raisesParser.runningScope, `failed to get running scope line ${line}`);
  //   const resultLineParsing = raisesParser.parseCommentLine(commentText![line]);
    
  //   assert.deepEqual(null, resultLineParsing, `failed to get resultLineParsing line ${line}`);
  // })


  // test("parse whole scope", () => {
  //   const pathFile = path.resolve(
  //     __dirname,
  //     "../../../../../test_assets/ERC20.cairo"
  //   );
  //   const functionText = CairoParser.parseFunctionScope(
  //     pathFile,
  //     "constructor"
  //   );
  //   const commentText = CairoParser.parseCommentLines(functionText);
  //   const raisesParser = new FunctionCommentRaisesParser();

  //   const targetLineParsing = [
  //     {name: "", type: "", desc: "None"},
  //   ]
  //   const resultLineParsing = raisesParser.parseCommentLines(commentText!);
    
  //   assert.deepEqual(targetLineParsing, resultLineParsing, `failed to get resultLineParsing on whole scope`);
  // })

});
