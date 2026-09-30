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
```bash
node fancyGrep.js <searchTerm> <filePath>