
/** @param {NS} ns */
export async function main(ns) {

    const servers = [
        "4sigma"
    ];

    const maxThreads = 25000;

    const availableThreads = Math.floor(
        ns.getServerMaxRam(ns.getHostname()) / ns.getScriptRam("grow.js")
    );

    const threads = Math.min(availableThreads, maxThreads);

    while (true) {

        for (let i = 0; i < threads; i++) {
            ns.run("grow.js", 1, servers[i % servers.length]);
        }

        await ns.sleep(ns.getGrowTime(servers[0]));
    }
}
