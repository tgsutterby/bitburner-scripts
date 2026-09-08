/** @param {NS} ns */
export async function main(ns) {


const servers = ["home"];

// Find every server
for (let i = 0; i < servers.length; i++) {

    for (const server of ns.scan(servers[i])) {

        if (!servers.includes(server)) {
            servers.push(server);
        }
    }
}

ns.tprint("Found " + (servers.length - 1) + " servers.");
ns.tprint("");

// Root everything possible
for (const target of servers) {

    if (target === "home") {
        continue;
    }

    if (ns.hasRootAccess(target)) {
        ns.tprint("ALREADY ROOTED: " + target);
        continue;
    }

    ns.brutessh(target);
    ns.ftpcrack(target);
    ns.relaysmtp(target);
    ns.httpworm(target);
    ns.sqlinject(target);

    if (ns.nuke(target)) {
        ns.tprint("ROOTED: " + target);
    } else {
        ns.tprint("SKIPPED: " + target);
    }
}

ns.tprint("");
ns.tprint("DONE.");


}
