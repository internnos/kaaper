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

    assert.equal(commentText![line], implicitArgsParser.startLine);


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


  test("parse line 3", () => {
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
    implicitArgsParser.setStartScope(commentText![2]);

    const line = 3;
    assert.equal("#   syscall_ptr(felt*)", commentText![line].trim(), `check line ${line}`);
    assert.notEqual(commentText![line], implicitArgsParser.startLine);

    assert.equal(true, implicitArgsParser.runningScope, `failed to get running scope line ${line}`);
    const resultLineParsing = implicitArgsParser.parseCommentLine(commentText![line]);
    
    const targetLineParsing = {name: "syscall_ptr", type: "felt*", desc: ""};
    assert.deepEqual(targetLineParsing, resultLineParsing, `failed to get resultLineParsing line ${line}`);

    assert.equal(false, implicitArgsParser.isEndScope(commentText![line]), `failed to get end scope line ${line}`);
  })

  test("parse line 4", () => {
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
    implicitArgsParser.setStartScope(commentText![2]);

    const line = 4;
    assert.equal("#   pedersen_ptr(HashBuiltin)", commentText![line].trim(), `check line ${line}`);
    assert.notEqual(commentText![line], implicitArgsParser.startLine);

    assert.equal(true, implicitArgsParser.runningScope, `failed to get running scope line ${line}`);
    const resultLineParsing = implicitArgsParser.parseCommentLine(commentText![line]);
    
    const targetLineParsing = {name: "pedersen_ptr", type: "HashBuiltin", desc: ""};
    assert.deepEqual(targetLineParsing, resultLineParsing, `failed to get resultLineParsing line ${line}`);

    assert.equal(false, implicitArgsParser.isEndScope(commentText![line]), `failed to get end scope line ${line}`);
  })

  test("parse line 5", () => {
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
    implicitArgsParser.setStartScope(commentText![2]);

    const line = 5;
    assert.equal("#   range_check_ptr", commentText![line].trim(), `check line ${line}`);
    assert.notEqual(commentText![line], implicitArgsParser.startLine);

    assert.equal(true, implicitArgsParser.runningScope, `failed to get running scope line ${line}`);
    const resultLineParsing = implicitArgsParser.parseCommentLine(commentText![line]);
    
    const targetLineParsing = {name: "range_check_ptr", type: "", desc: ""};
    assert.deepEqual(targetLineParsing, resultLineParsing, `failed to get resultLineParsing line ${line}`);

    assert.equal(false, implicitArgsParser.isEndScope(commentText![line]), `failed to get end scope line ${line}`);
  })

});
