const { createServer } = require("net");
const { spawn } = require("child_process");
const path = require("path");

const DEFAULT_PORT = 3000;

function findFreePort(port) {
  return new Promise((resolve) => {
    const server = createServer();
    server.listen(port, () => {
      server.close(() => resolve(port));
    });
    server.on("error", () => {
      resolve(findFreePort(port + 1));
    });
  });
}

findFreePort(DEFAULT_PORT).then((port) => {
  if (port !== DEFAULT_PORT) {
    console.log(`Port ${DEFAULT_PORT} is in use, using port ${port} instead.`);
  }
  const nextBin = path.join(__dirname, "node_modules", "next", "dist", "bin", "next");
  const child = spawn(process.execPath, [nextBin, "dev", "-p", port], {
    stdio: "inherit",
  });
  child.on("close", (code) => process.exit(code));
});
