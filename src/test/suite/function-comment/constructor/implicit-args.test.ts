import * as assert from "assert";
import * as path from "path";
import FunctionCommentImplicitArgsParser from "../../../../lib/parser/function-comment/implicit-args"
import CairoParser from "../../../../lib/main";

suite("function-comment: constructor: implicit-args", () => {
  test("parse line 2", () => {
    const pathFile = path.resolve(
      __dirname,
      "../../../../../test_assets/ERC20.cairo"
    );
    const functionText = CairoParser.parseFunctionScope(
      pathFile,
      "constructor"
    );
    const commentText = CairoParser.parseCommentLines(functionText);

    const implicitArgsParser = new FunctionCommentImplicitArgsParser();

    const line = 2;
    assert.equal("# Implicit args:", commentText![line].trim(), `check line ${line}`);
    implicitArgsParser.setStartScope(commentText![line]);

    const resultLineParsing = implicitArgsParser.parseCommentLine(commentText![line]);
    const isEndScope = implicitArgsParser.isEndScope(commentText![line]);

    assert.equal(
      true,
      implicitArgsParser.runningScope,
      `failed to get running scope line ${line}`
    );
    assert.equal(false, isEndScope, `failed to get end scope line ${line}`);
    assert.equal(
      null,
      resultLineParsing,
      `failed to get resultLineParsing line ${line}`
    );
  });


  // test("parse line 1", () => {
  //   const pathFile = path.resolve(
  //     __dirname,
  //     "../../../../../test_assets/ERC20.cairo"
  //   );
  //   const functionText = CairoParser.parseFunctionScope(
  //     pathFile,
  //     "constructor"
  //   );
  //   const commentText = CairoParser.parseCommentLines(functionText);
  //   const implicitArgsParser = new FunctionCommentimplicitArgsParser();
  //   implicitArgsParser.setStartScope(commentText![0]);

  //   const line = 1;
  //   assert.equal(
  //     "#   Initialize the contract",
  //     commentText![line].trim(),
  //     `check line ${line}`
  //   );

  //   assert.equal("# Desc:", implicitArgsParser.startLine);
  //   assert.notEqual(line, implicitArgsParser.startLine);

  //   assert.equal(
  //     true,
  //     implicitArgsParser.runningScope,
  //     `failed to get running scope line ${line}`
  //   );

  //   const isEndScope = implicitArgsParser.isEndScope(commentText![line]);
  //   assert.equal(false, isEndScope, `failed to get end scope line ${line}`);

  //   const resultLineParsing = implicitArgsParser.parseCommentLine(commentText![line]);

  //   const targetLineParsing = {
  //     name: "",
  //     type: "",
  //     desc: "Initialize the contract",
  //   };
  //   assert.deepEqual(
  //     targetLineParsing,
  //     resultLineParsing,
  //     `failed to get resultLineParsing line ${line}`
  //   );
  // });

  // test("parse line 2", () => {
  //   const pathFile = path.resolve(
  //     __dirname,
  //     "../../../../../test_assets/ERC20.cairo"
  //   );
  //   const functionText = CairoParser.parseFunctionScope(
  //     pathFile,
  //     "constructor"
  //   );
  //   const commentText = CairoParser.parseCommentLines(functionText);
  //   const implicitArgsParser = new FunctionCommentimplicitArgsParser();
  //   implicitArgsParser.setStartScope(commentText![0]);

  //   const line = 2;
  //   assert.equal(
  //     "# Implicit args:",
  //     commentText![line].trim(),
  //     `check line ${line}`
  //   );

  //   assert.equal("# Desc:", implicitArgsParser.startLine);
  //   assert.notEqual(line, implicitArgsParser.startLine);
  //   const isEndScope = implicitArgsParser.isEndScope(commentText![line]);
  //   assert.equal(true, isEndScope, `failed to get end scope line ${line}`);

  //   implicitArgsParser.setEndScope(commentText![line]);

  //   assert.equal(
  //     false,
  //     implicitArgsParser.runningScope,
  //     `failed to get running scope line ${line}`
  //   );

  //   const resultLineParsing = implicitArgsParser.parseCommentLine(commentText![line]);

  //   assert.deepEqual(
  //     null,
  //     resultLineParsing,
  //     `failed to get resultLineParsing line ${line}`
  //   );
  // });

  // test("parse whole comment", () => {
  //   const pathFile = path.resolve(
  //     __dirname,
  //     "../../../../../test_assets/ERC20.cairo"
  //   );
  //   const functionText = CairoParser.parseFunctionScope(
  //     pathFile,
  //     "constructor"
  //   );
  //   const commentText = CairoParser.parseCommentLines(functionText);

  //   const implicitArgsParser = new FunctionCommentimplicitArgsParser();

  //   const resultLineParsing = implicitArgsParser.parseCommentLines(commentText!);

  //   const targetLineParsing = [{name: "", type: "", desc: "Initialize the contract"}];
    
  //   assert.deepEqual(targetLineParsing, resultLineParsing, "failed to get resultLineParsing");
  // });
});
