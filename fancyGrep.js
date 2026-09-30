const fs = require('fs');

//Extract arguments from command line: node fancyGrep.js <searchTerm> <filePath>
const searchTerm = process.argv[2];
const filePath = process.argv[3];

//Edge Case 1: Check for missing arguments
if (!searchTerm || !filePath) {
  console.error("Error: Missing required arguments.");
  console.log("Usage: node fancyGrep.js <searchTerm> <filePath>");
  process.exit(1);
 }

 // Edge Case 2: Check if target file exists
 if (!fs.existsSync(filePath)) {
   console.error(`Error: File '${filePath}' does not exist or cannot be opened.`);
   process.exit(1);
 }

 try {
    // Read file contents synchronously 
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Edge Case 3: Empty file handling
    if (fileContent.trim().length === 0) {
       console.log(`[File '${filepath}]' is empty]`);
       console.log("Total lines scanned: 0 | Matches found: 0");
       process.exit(0);
    }
 
    const lines = fileContent.split(/\r?\n/);
    let matchCount = 0;

    console.log(`--- Searching for "${searchTerm}" in ${filePath} ---`);

    //Iterate over lines, check matches, and track line numbers
    lines.forEach((line, index) => {
       if (line.includes(searchTerm)) {
         matchCount++;
         //Display line number alongisde matching content (1-indexed)
         console.log(`Line ${index + 1}: ${line}`);
       }
    });

    console.log("---------------------------------------");
    console.log(`Summary: Scanned ${lines.length} lines. Found ${matchCount} matching instance(s).`);

 } catch (err) {
   console.error(`An unexpected error occurred: ${err.message}`);
 }