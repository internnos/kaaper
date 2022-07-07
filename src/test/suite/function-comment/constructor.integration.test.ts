import * as assert from "assert";
import * as path from "path";
import FunctionCommentDescParser from "../../../lib/parser/function-comment/desc";
import FunctionCommentImplicitArgsParser from "../../../lib/parser/function-comment/implicit-args";
import CairoParser from "../../../lib/main";
import FunctionCommentExplicitArgsParser from "../../../lib/parser/function-comment/explicit-args";
import FunctionCommentReturnsParser from "../../../lib/parser/function-comment/returns";

suite("function-comment: constructor", () => {
  test("get desc comments", () => {
    // const pathFile = path.resolve(
    //   __dirname,
    //   "../../../../test_assets/ERC20.cairo"
    // );
    // const functionText = CairoParser.parseFunctionScope(
    //   pathFile,
    //   "constructor"
    // );
    // const commentText = CairoParser.parseCommentLines(functionText);
    // const descParser = new FunctionCommentDescParser();

    // const desc = descParser.parseCommentLines(commentText!);
    // const targetDesc = [{name: "", "type": "", desc: "Initialize the contract"}]
    // assert.deepEqual(targetDesc, desc, "failed to get desc");
  });

  // test("get implicit args comments", () => {
  //   const pathFile = path.resolve(
  //     __dirname,
  //     "../../../../test_assets/ERC20.cairo"
  //   );
  //   const functionText = CairoParser.parseFunctionScope(
  //     pathFile,
  //     "constructor"
  //   );

  //   const commentText = CairoParser.parseCommentLines(functionText);
  //   const implicitArgsParser = new FunctionCommentImplicitArgsParser();

  //   {
  //     const line = 2;
  //     assert.equal(
  //       "# Implicit args:",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = implicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = implicitArgsParser.isEndScope(commentText![line]);
  //     assert.equal(
  //       true,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //   }

  //   {
  //     const line = 3;
  //     assert.equal(
  //       "#   syscall_ptr(felt*)",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = implicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = implicitArgsParser.isEndScope(commentText![line]);
  //     const output = implicitArgsParser.parseCommentLine(commentText![line]);

  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     const targetOutput = { name: "syscall_ptr", type: "felt*", desc: "" };
  //     assert.deepEqual(
  //       targetOutput,
  //       output,
  //       `failed to get desc comment line ${line}`
  //     );
  //   }

  //   {
  //     const line = 4;
  //     assert.equal(
  //       "#   pedersen_ptr(HashBuiltin)",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = implicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = implicitArgsParser.isEndScope(commentText![line]);
  //     const output = implicitArgsParser.parseCommentLine(commentText![line]);

  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     const targetOutput = {
  //       name: "pedersen_ptr",
  //       type: "HashBuiltin",
  //       desc: "",
  //     };
  //     assert.deepEqual(
  //       targetOutput,
  //       output,
  //       `failed to get desc comment line ${line}`
  //     );
  //   }

  //   {
  //     const line = 5;
  //     assert.equal(
  //       "#   range_check_ptr",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = implicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = implicitArgsParser.isEndScope(commentText![line]);
  //     const output = implicitArgsParser.parseCommentLine(commentText![line]);

  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     const targetOutput = { name: "range_check_ptr", type: "", desc: "" };
  //     assert.deepEqual(
  //       targetOutput,
  //       output,
  //       `failed to get desc comment line ${line}`
  //     );
  //   }

  //   {
  //     const line = 6;
  //     assert.equal(
  //       "# Explicit args:",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = implicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = implicitArgsParser.isEndScope(commentText![line]);
  //     const output = implicitArgsParser.parseCommentLine(commentText![line]);

  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(true, isEndScope, `failed to get desc comment line ${line}`);
  //     assert.equal(null, output, `failed to get desc comment line ${line}`);
  //   }
  // });

  // test("get explicit args comments", () => {
  //   const pathFile = path.resolve(
  //     __dirname,
  //     "../../../../test_assets/ERC20.cairo"
  //   );

  //   const functionText = CairoParser.parseFunctionScope(
  //     pathFile,
  //     "constructor"
  //   );

  //   const commentText = CairoParser.parseCommentLines(functionText);
  //   const explicitArgsParser = new FunctionCommentExplicitArgsParser();

  //   {
  //     const line = 6;
  //     assert.equal(
  //       "# Explicit args:",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = explicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = explicitArgsParser.isEndScope(commentText![line]);
  //     const output = explicitArgsParser.parseCommentLine(commentText![line]);

  //     assert.equal(
  //       true,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(null, output, `failed to get desc comment line ${line}`);
  //   }

  //   {
  //     const line = 7;
  //     assert.equal(
  //       "#   name(felt): the address of the ERC20 sender",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = explicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = explicitArgsParser.isEndScope(commentText![line]);
  //     const output = explicitArgsParser.parseCommentLine(commentText![line]);

  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     const targetOutput = {
  //       name: "name",
  //       type: "felt",
  //       desc: "the address of the ERC20 sender",
  //     };
  //     assert.deepEqual(
  //       targetOutput,
  //       output,
  //       `failed to get desc comment line ${line}`
  //     );
  //   }

  //   {
  //     const line = 8;
  //     assert.equal(
  //       "#   symbol(felt): the address of the ERC20 recipient",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = explicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = explicitArgsParser.isEndScope(commentText![line]);
  //     const output = explicitArgsParser.parseCommentLine(commentText![line]);

  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     const targetOutput = {
  //       name: "symbol",
  //       type: "felt",
  //       desc: "the address of the ERC20 recipient",
  //     };
  //     assert.deepEqual(
  //       targetOutput,
  //       output,
  //       `failed to get desc comment line ${line}`
  //     );
  //   }

  //   {
  //     const line = 9;
  //     assert.equal(
  //       "#   decimals(uint256): floating point of the token",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = explicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = explicitArgsParser.isEndScope(commentText![line]);
  //     const output = explicitArgsParser.parseCommentLine(commentText![line]);

  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     const targetOutput = {
  //       name: "decimals",
  //       type: "uint256",
  //       desc: "floating point of the token",
  //     };
  //     assert.deepEqual(
  //       targetOutput,
  //       output,
  //       `failed to get desc comment line ${line}`
  //     );
  //   }

  //   {
  //     const line = 10;
  //     assert.equal(
  //       "#   initial_supply(uint256): amount of ERC20 transfer",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = explicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = explicitArgsParser.isEndScope(commentText![line]);
  //     const output = explicitArgsParser.parseCommentLine(commentText![line]);
  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     const targetOutput = {
  //       name: "initial_supply",
  //       type: "uint256",
  //       desc: "amount of ERC20 transfer",
  //     };
  //     assert.deepEqual(
  //       targetOutput,
  //       output,
  //       `failed to get desc comment line ${line}`
  //     );
  //   }

  //   {
  //     const line = 11;
  //     assert.equal(
  //       "#   recipient(felt): amount of ERC20 transfer",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = explicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = explicitArgsParser.isEndScope(commentText![line]);
  //     const output = explicitArgsParser.parseCommentLine(commentText![line]);

  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     const targetOutput = {
  //       name: "recipient",
  //       type: "felt",
  //       desc: "amount of ERC20 transfer",
  //     };
  //     assert.deepEqual(
  //       targetOutput,
  //       output,
  //       `failed to get desc comment line ${line}`
  //     );
  //   }

  //   {
  //     const line = 12;
  //     assert.equal(
  //       "# Returns:",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = explicitArgsParser.setStartScope(commentText![line]);
  //     const isEndScope = explicitArgsParser.isEndScope(commentText![line]);
  //     const output = explicitArgsParser.parseCommentLine(commentText![line]);
  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(true, isEndScope, `failed to get desc comment line ${line}`);
  //     assert.equal(null, output, `failed to get desc comment line ${line}`);
  //   }
  // });

  // test("get returns comments", () => {
  //   const pathFile = path.resolve(
  //     __dirname,
  //     "../../../../test_assets/ERC20.cairo"
  //   );

  //   const functionText = CairoParser.parseFunctionScope(
  //     pathFile,
  //     "constructor"
  //   );

  //   const commentText = CairoParser.parseCommentLines(functionText);
  //   const returnsParser = new FunctionCommentReturnsParser();

  //   {
  //     const line = 12;
  //     assert.equal(
  //       "# Returns:",
  //       commentText![line].trim(),
  //       `check line ${line}`
  //     );
  //     const setStartScope = returnsParser.setStartScope(commentText![line]);
  //     const isEndScope = returnsParser.isEndScope(commentText![line]);
  //     const output = returnsParser.parseCommentLine(commentText![line]);
  //     assert.equal(
  //       true,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(null, output, `failed to get desc comment line ${line}`);
  //   }

  //   {
  //     const line = 13;
  //     assert.equal("#   None", commentText![line].trim(), `check line ${line}`);
  //     const setStartScope = returnsParser.setStartScope(commentText![line]);
  //     const isEndScope = returnsParser.isEndScope(commentText![line]);
  //     const output = returnsParser.parseCommentLine(commentText![line]);
  //     assert.equal(
  //       false,
  //       setStartScope,
  //       `failed to get desc comment line ${line}`
  //     );
  //     assert.equal(
  //       false,
  //       isEndScope,
  //       `failed to get desc comment line ${line}`
  //     );

  //     const targetOutput = { name: "", type: "", desc: "None" };
  //     assert.deepEqual(
  //       targetOutput,
  //       output,
  //       `failed to get desc comment line ${line}`
  //     );
  //   }
  // });
});
