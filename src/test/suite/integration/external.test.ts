import * as assert from "assert";
import * as path from "path";
import CairoParser from "../../../lib/main";
import FunctionCommentDescParser from "../../../lib/parser/function-comment/desc";
import FunctionSignatureRegexParser from "../../../lib/parser/function-signature/regex";
import FunctionCommentImplicitArgsParser from "../../../lib/parser/function-comment/implicit-args";
import FunctionCommentExplicitArgsParser from "../../../lib/parser/function-comment/explicit-args";
import FunctionCommentReturnsParser from "../../../lib/parser/function-comment/returns";
import FunctionCommentRaisesParser from "../../../lib/parser/function-comment/raises";

suite("integration-test: external", () => {
  test("0", () => {
    const pathFile = path.resolve(
      __dirname,
      "../../../../test_assets/ERC20.cairo"
    );

    // parse whole scope
    const functionScopeLines = CairoParser.parseFunctionScope(pathFile, "external");

    // Function signature parsing
    const functionSignatureParser = new FunctionSignatureRegexParser();

    // Comment parsing
    // parse comment lines
    const commentLines = CairoParser.parseCommentLines(functionScopeLines![0]);

    const functionCommentDescParser = new FunctionCommentDescParser();
    const functionCommentImplicitArgsParser =
      new FunctionCommentImplicitArgsParser();
    const functionCommentExplicitArgsParser =
      new FunctionCommentExplicitArgsParser();
    const functionCommentReturnsParser = new FunctionCommentReturnsParser();
    const functionCommentRaisesParser = new FunctionCommentRaisesParser();

    const parsingTarget = [
      {
        attributeName: "external",
        functionName: "transfer",
        functionSignature: {
          implicitArgs: [
            { name: "syscall_ptr", type: "felt*" },
            { name: "pedersen_ptr", type: "HashBuiltin*" },
            { name: "range_check_ptr", type: "" },
          ],
          explicitArgs: [
            {name: "recipient", type: "felt"},
            {name: "amount", type: "Uint256"},
          ],
          returns: [{ name: "success", type: "felt" }],
          
        },
        functionComment: {
          desc: [{ name: "", type: "", desc: "Perform transfer to recipient" }],
          implicitArgs: [
            { name: "syscall_ptr", type: "felt*", desc: "" },
            { name: "pedersen_ptr", type: "HashBuiltin*", desc: "" },
            { name: "range_check_ptr", type: "", desc: "" },
          ],
          explicitArgs: [
            {name: "recipient", type: "felt", desc: "the address of ERC20 recipient"},
            {name: "amount", type: "Uint256", desc: "the amount of ERC20 transfer"},
          ],
          returns: [{ name: "success", type: "felt", desc: "1 if transfer was successful, 0 otherwise" }],
          raises: [
            {name: 'amount', "type": "", desc: "amount is not a valid Uint256"},
            {name: 'recipient', "type": "", desc: "cannot transfer to the zero address"},
            {name: 'amount', "type": "", desc: "transfer amount exceeds balance"},
          ]
        },
      },
    ];

    var parsingOutput = [
      {
        attributeName: functionSignatureParser.getAttributeName(
          functionScopeLines![0]
        ),
        functionName: functionSignatureParser.getFunctionName(
          functionScopeLines![0]
        ),
        functionSignature: {
          implicitArgs: functionSignatureParser.getImplicitArgs(
            functionScopeLines![0]
          ),
          explicitArgs: functionSignatureParser.getExplicitArgs(
            functionScopeLines![0]
          ),
          returns: functionSignatureParser.getReturns(functionScopeLines![0]),
        },
        functionComment: {
          desc: functionCommentDescParser.parseCommentLines(commentLines!),
          implicitArgs: functionCommentImplicitArgsParser.parseCommentLines(
            commentLines!
          ),
          explicitArgs: functionCommentExplicitArgsParser.parseCommentLines(
            commentLines!
          ),
          returns: functionCommentReturnsParser.parseCommentLines(
            commentLines!
          ),
          raises: functionCommentRaisesParser.parseCommentLines(commentLines!),
        },
      },
    ];

    assert.deepEqual(parsingTarget, parsingOutput, "failed to parse");
  });

  
});