import { addFileDocumentation, addFuncDocumentation } from "./src/utils/common";

const repo = "";

const gitlog = require("gitlog").default;
var fs = require("fs");

// );
console.log(`
==================================
             Start
==================================
`);
const glob = require("glob");

const extensionList = ["java", "js", "ts", "cs"];
const funcKeywords = ["public", "private", "protected"];

const generateDocs = function (src) {
  const paths = glob.sync(src + "/**/*.{" + extensionList.join(",") + "}", {
    ignore: ["**/*.min.*", "**/assets/**", "**/node_modules/**", "**/dist/**"],
  });
  console.log(paths.length);
  for (let path of paths) {
    if (path.includes(["node_modules"])) continue;
    if (
      ["node_modules", "assets"].some((substring) => path.includes(substring))
    )
      continue;
    var fileContents;
    try {
      fileContents = fs.readFileSync(path, "utf-8");
      let fileStr = "";
      fileStr += addFileDocumentation(path);
      for (const line of fileContents.split(/\r?\n/)) {
        // console.log(line);
        for(let keyword of funcKeywords){
          if(line.includes(keyword) ){
            let numOfSpace = line.indexOf(keyword)
            fileStr += addFuncDocumentation(numOfSpace, line);
            break;
          }
        }
        fileStr += line + "\n";
      }
      fs.writeFileSync(path, fileStr)
    } catch (err) {
      // Here you get the error when the file was not found,
      // but you also get any other error
      console.log("err path: ", path, err);
    }
  }
};

generateDocs(repo);

console.log(`
==================================
              END
==================================
`);

