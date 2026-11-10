/**
 * Anti-AI-Design Slop Static Checker (Node.js utility)
 * Scans a project directory for generic AI anti-patterns (e.g. rounded-2xl overload,
 * default blue-to-purple gradients, missing focus states).
 */

const fs = require('fs');
const path = require('path');

const ANTI_PATTERNS = [
  {
    regex: /from-blue-\d+\s+to-purple-\d+/g,
    message: 'Generic AI gradient detected (blue-to-purple). Use restrained monochrome or bespoke single brand accent tokens.'
  },
  {
    regex: /rounded-2xl/g,
    message: 'Indiscriminate rounded-2xl on every element. Use deliberate, proportional border-radius hierarchy.'
  },
  {
    regex: /bg-indigo-\d+/g,
    message: 'Generic indigo AI accent detected. Calibrate color palette to 60-30-10 tokens.'
  }
];

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let issues = [];

  ANTI_PATTERNS.forEach(({ regex, message }) => {
    const matches = content.match(regex);
    if (matches) {
      issues.push({ file: filePath, message, count: matches.length });
    }
  });

  return issues;
}

function scanDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'build') return;
    if (fs.statSync(filePath).isDirectory()) {
      scanDir(filePath, fileList);
    } else if (/\.(js|jsx|ts|tsx|vue|css|html)$/.test(file)) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function runAudit(targetDir = '.') {
  console.log(`[Anti-AI-Design] Scanning ${targetDir} for AI design anti-patterns...`);
  const files = scanDir(targetDir);
  let totalIssues = 0;

  files.forEach(file => {
    const issues = scanFile(file);
    issues.forEach(issue => {
      totalIssues++;
      console.warn(`⚠️ [SLOP WARNING] ${issue.file}: ${issue.message} (${issue.count} occurrences)`);
    });
  });

  if (totalIssues === 0) {
    console.log('✨ [Anti-AI-Design] Audit passed! No generic AI anti-patterns found.');
  } else {
    console.log(`\n❌ Found ${totalIssues} AI anti-pattern issues. Refactor towards intentional craftsmanship.`);
  }
}

if (require.main === module) {
  const target = process.argv[2] || '.';
  runAudit(target);
}

module.exports = { runAudit };
