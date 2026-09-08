
/** @param {NS} ns */
export async function main(ns) {

    const servers = ["home"];

    for (let i = 0; i < servers.length; i++) {
        const found = ns.scan(servers[i]);

        for (const server of found) {
            if (!servers.includes(server)) {
                servers.push(server);
            }
        }
    }

    for (const server of servers) {

        if (server === "home") continue;
        if (ns.hasRootAccess(server)) continue;

        ns.brutessh(server);
        ns.ftpcrack(server);
        ns.relaysmtp(server);
        ns.httpworm(server);
        ns.sqlinject(server);

        ns.nuke(server);

        ns.tprint("NUKED: " + server);

        ns.connect(server);
        await ns.installBackdoor();
        ns.connect("home");
    }
}
