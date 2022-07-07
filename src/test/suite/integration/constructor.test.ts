import * as assert from "assert";
import * as path from "path";
import CairoParser from "../../../lib/main";
import FunctionCommentDescParser from "../../../lib/parser/function-comment/desc";
import FunctionSignatureRegexParser from "../../../lib/parser/function-signature/regex";
import FunctionCommentImplicitArgsParser from "../../../lib/parser/function-comment/implicit-args";
import FunctionCommentExplicitArgsParser from "../../../lib/parser/function-comment/explicit-args";
import FunctionCommentReturnsParser from "../../../lib/parser/function-comment/returns";
import FunctionCommentRaisesParser from "../../../lib/parser/function-comment/raises";

test("parse whole scope", () => {
    const pathFile = path.resolve(
      __dirname,
      "../../../../test_assets/ERC20.cairo"
    );
    const functionScopeLines = CairoParser.parseFunctionScope(
      pathFile,
      "constructor"
    );
    const commentLines = CairoParser.parseCommentLines(functionScopeLines);

    // Function signature parsing
    const functionSignatureParser = new FunctionSignatureRegexParser();
    const attributeName =
      functionSignatureParser.getAttributeName(functionScopeLines);
    const functionName =
      functionSignatureParser.getFunctionName(functionScopeLines);
    const functionSignatureImplicitArgsResult =
      functionSignatureParser.getImplicitArgs(functionScopeLines);
    const functionSignatureExplicitArgsResult = functionSignatureParser.getExplicitArgs(functionScopeLines);

    assert.equal(attributeName, "constructor", "failed to get attribute name");
    assert.equal(functionName, "constructor", "failed to get function name");
    

    const functionSignatureImplicitArgsTarget = [
        { name: "syscall_ptr", type: "felt*" },
        { name: "pedersen_ptr", type: "HashBuiltin*" },
        { name: "range_check_ptr", type: "" },
      ];

    const functionSignatureExplicitArgsTarget = [
    { name: "name", type: "felt" },
    { name: "symbol", type: "felt" },
    { name: "decimals", type: "Uint256" },
    { name: "initial_supply", type: "Uint256" },
    { name: "recipient", type: "felt" },
    ];

    assert.deepEqual(functionSignatureImplicitArgsTarget, functionSignatureImplicitArgsResult, "failed to get implicit args");
    assert.deepEqual(functionSignatureExplicitArgsTarget, functionSignatureExplicitArgsResult, "failed to get explicit args");


    // Comment parsing
    const functionCommentDescParser = new FunctionCommentDescParser();
    const functionCommentImplicitArgsParser = new FunctionCommentImplicitArgsParser();
    const functionCommentExplicitArgsParser = new FunctionCommentExplicitArgsParser()
    const functionCommentReturnsParser = new FunctionCommentReturnsParser()
    const functionCommentRaisesParser = new FunctionCommentRaisesParser()


    const functionCommentDescParserResult = functionCommentDescParser.parseCommentLines(commentLines!);
    const functionCommentImplicitArgsResult = functionCommentImplicitArgsParser.parseCommentLines(commentLines!);
    const functionCommentExplicitArgsResult = functionCommentExplicitArgsParser.parseCommentLines(commentLines!);
    const functionCommentReturnsResult = functionCommentReturnsParser.parseCommentLines(commentLines!);
    const functionCommentRaisesResult = functionCommentRaisesParser.parseCommentLines(commentLines!);


    

    // assert.deepEqual(functionSignatureImplicitArgsTarget, functionCommentImplicitArgsResult, "failed to get explicit args");
    
    

  });