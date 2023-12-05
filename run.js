const { execSync } = require("child_process");

const dayIndex = process.argv.indexOf("--day");
const day = dayIndex !== -1 ? process.argv[dayIndex + 1] : null;

if (!day) {
  console.error("Please provide a valid --day parameter.");
  process.exit(1);
}

const filePath = `day-${day}/index.ts`;

try {
  execSync(`npx ts-node ${filePath}`, { stdio: "inherit" });
} catch (error) {
  console.error(`Error running ${filePath}:`, error.message);
  process.exit(1);
}
