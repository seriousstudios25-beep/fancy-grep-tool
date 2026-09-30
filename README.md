# fancyGrep - Custom Node.js CLI Tool

A custom command-line interface (CLI) tool built using Node.js as part of an extra credit activity for IT207. It combines file pattern searching with line counting and output summary metrics.

---

## Section 1 — Command Description

### Purpose
`fancyGrep` combines functionality from two core Linux utilities:
* **`grep`**: Searches a target text file for a specific keyword or substring.
* **`wc`**: Counts total lines scanned and calculates matching instances.

It provides a contextual, line-numbered output preview and prints an overall execution summary banner.

### Syntax
bash
node fancyGrep.js <searchTerm> <filePath>
## Section 2 — AI-Assisted Programming

### What I Asked AI
- How to read command-line arguments in Node.js using `process.argv`.
- How to read a file line-by-line asynchronously using Node's `fs` or `readline` modules.
- How to set up Git commands to push a local repository to GitHub via the Codio terminal.

### Where AI Helped
- Providing standard templates for parsing process arguments and reading files line-by-line.
- Troubleshooting Git syntax errors, resolving `src refspec main` errors, and guiding how to use GitHub Personal Access Tokens (PAT) for authentication.

### Where I Had to Think Independently
- Structuring the CLI output formatting so line numbers align cleanly.
- Implementing the match-counting logic to display total scanned lines versus matching occurrences.
- Verifying file paths manually when running terminal tests.

### What AI Got Wrong or Missed
- AI initially suggested raw code block formatting inside the terminal commands, which caused multi-line syntax errors when pasted directly into Codio.
- AI's default instructions assumed automatic SSH key authentication rather than requiring GitHub Personal Access Tokens (PAT).
