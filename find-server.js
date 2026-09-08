/** @param {NS} ns */
export async function main(ns) {
  const target = "megacorp";
  const visited = new Set();
  const path = [];

  function dfs(current) {
    visited.add(current);
    path.push(current);

    if (current === target) {
      return true;
    }

    for (const neighbor of ns.scan(current)) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true;
      }
    }

    path.pop();
    return false;
  }

  if (dfs("home")) {
    ns.tprint(`Path to ${target}: ${path.join(" -> ")}`);
    ns.tprint(`Terminal Command: connect ${path.slice(1).join("; connect ")}`);
  } else {
    ns.tprint(`Server ${target} not found.`);
  }
}
