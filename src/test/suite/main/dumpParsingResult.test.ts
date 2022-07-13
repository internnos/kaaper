import * as assert from "assert";
import * as path from "path";
import CairoParser from "../../../lib/main";

suite("dumpParsingResult", () => {
  test("ERC20", () => {
    const pathFile = path.resolve(
      __dirname,
      "../../../../test_assets/ERC20.cairo"
    );

    // parse whole scope
    const parsingOutput = CairoParser.getFileParsingResult(pathFile);

    const yaml = CairoParser.dumpParsingResult(parsingOutput, "docs/ERC20");
  });
});