/** @param {NS} ns */
export async function main(ns) {

    const servers = [
        "millenium-fitness",
        "lexo-corp",
        "syscore",
        "summit-uni",
        "aevum-police",
        "netlink",
        "alpha-ent",
        "rothman-uni",
        "rho-construction",
        "catalyst",
        "n00dles",
        "foodnstuff",
        "sigma-cosmetics",
        "joesguns",
        "hong-fang-tea",
        "harakiri-sushi",
        "nectar-net",
        "max-hardware",
        "zer0",
        "phantasy",
        "neo-net",
        "silver-helix",
        "iron-gym",
        "omega-net",
        "computek",
        "johnson-ortho",
        "the-hub",
        "crush-fitness"
    ];

    const threads = Math.floor(ns.getServerMaxRam(ns.getHostname()) / ns.getScriptRam("hack.js"));

    while (true) {

        for (let i = 0; i < threads; i++) {
            ns.run("hack.js", 1, servers[i % servers.length]);
        }

        await ns.sleep(ns.getHackTime(servers[0]));
    }
}
