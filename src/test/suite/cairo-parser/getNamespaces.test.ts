// import * as assert from "assert";

// // Requiring the module
// // const assert = require('assert').strict;
// import * as path from "path";
// import * as fs from "fs";
// import CairoParser from "../../../lib/CairoParser";

// suite("getNamespace", () => {
//   test("should retrieve all namespaces", () => {
//     const pathFile = path.resolve(
//       __dirname,
//       "../../../../testContracts/ERC20Namespace/library.cairo"
//     );
//     // const text = fs.readFileSync(pathFile, "utf8");

//     const targetERC20File = path.resolve(
//       __dirname,
//       "../../../../testContracts/ERC20Namespace/namespaceERC20.cairo"
//     );

//     const targetInternalFile = path.resolve(
//       __dirname,
//       "../../../../testContracts/ERC20Namespace/namespaceInternal.cairo"
//     );

//     const targetERC20Text = fs.readFileSync(targetERC20File, "utf8");
//     const targetInternalText = fs.readFileSync(targetInternalFile, "utf8");

//     const namespaces = CairoParser.getNamespaceScopes(pathFile);
//     const target = [
//       {namespace: "namespace ERC20", startLineNumber: 98, endLineNumber: 200, text: targetERC20Text},
//       {namespace: "namespace internal", startLineNumber: 206, endLineNumber: 308, text: targetInternalText},
//     ]
//     assert.deepEqual(target, namespaces);

//   });

// });
