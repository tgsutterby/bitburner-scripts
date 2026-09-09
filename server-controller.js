/** @param {NS} ns */
export async function main(ns) {

ns.disableLog("ALL");

const servers = [
    "n00dles",
    "foodnstuff",
    "sigma-cosmetics",
    "joesguns",
    "hong-fang-tea",
    "harakiri-sushi",
    "iron-gym",
    "zer0",
    "nectar-net",
    "CSEC",
    "max-hardware",
    "phantasy",
    "omega-net",
    "neo-net",
    "silver-helix",
    "the-hub",
    "netlink",
    "johnson-ortho",
    "computek",
    "crush-fitness",
    "avmnite-02h",
    "catalyst",
    "summit-uni",
    "zb-institute",
    "I.I.I.I",
    "rothman-uni",
    "syscore",
    "rho-construction",
    "alpha-ent",
    "aevum-police",
    "millenium-fitness",
    "lexo-corp",
    "snap-fitness",
    "global-pharm",
    "galactic-cyber",
    "aerocorp",
    "deltaone",
    "omnia",
    "unitalife",
    "defcomm",
    "icarus",
    "zeus-med",
    "univ-energy",
    "solaris",
    "nova-med",
    "taiyang-digital",
    "infocomm",
    "zb-def",
    "run4theh111z",
    "titan-labs",
    "microdyne",
    "applied-energetics",
    "fulcrumtech",
    "stormtech",
    "helios",
    "vitalife",
    "kuai-gong",
    "omnitek",
    "4sigma",
    "clarkinc",
    "b-and-a",
    "powerhouse-fitness",
    "blade",
    "nwo",
    "The-Cave",
    "megacorp",
    "fulcrumassets",
    "ecorp"
];

const hackPercent = 0.10;

while (true) {
  
    for (const target of servers) {

        if (!ns.hasRootAccess(target)) {
            continue;
        }

        const maxMoney = ns.getServerMaxMoney(target);
        const currentMoney = ns.getServerMoneyAvailable(target);

        if (maxMoney <= 0 || currentMoney >= maxMoney) {
            continue;
        }

        const multiplier = maxMoney / Math.max(currentMoney, 1);

        const threads = Math.ceil(
            ns.growthAnalyze(target, multiplier)
        );

        if (threads > 0) {
            ns.run("grow.js", threads, target);
        }
    }

    await waitForScript(ns, "grow.js");

    for (const target of servers) {

        if (!ns.hasRootAccess(target)) {
            continue;
        }

        const security = ns.getServerSecurityLevel(target);
        const minimum = ns.getServerMinSecurityLevel(target);

        if (security <= minimum) {
            continue;
        }

        const securityNeeded = security - minimum;

        const weakenPerThread = ns.weakenAnalyze(1);

        const threads = Math.ceil(
            securityNeeded / weakenPerThread
        );

        if (threads > 0) {
            ns.run("weaken.js", threads, target);
        }
    }

    await waitForScript(ns, "weaken.js");

    for (const target of servers) {

        if (!ns.hasRootAccess(target)) {
            continue;
        }

        const maxMoney = ns.getServerMaxMoney(target);
        const currentMoney = ns.getServerMoneyAvailable(target);

        if (maxMoney <= 0 || currentMoney <= 0) {
            continue;
        }

        const targetMoney = maxMoney * hackPercent;

        if (currentMoney <= targetMoney) {
            continue;
        }

        const moneyToHack = currentMoney - targetMoney;

        const hackPercentPerThread = ns.hackAnalyze(target);

        const threads = Math.ceil(
            (moneyToHack / currentMoney) / hackPercentPerThread
        );

        if (threads > 0) {
            ns.run("hack.js", threads, target);
        }
    }

    await waitForScript(ns, "hack.js");

    for (const target of servers) {

        if (!ns.hasRootAccess(target)) {
            continue;
        }

        const security = ns.getServerSecurityLevel(target);
        const minimum = ns.getServerMinSecurityLevel(target);

        if (security <= minimum) {
            continue;
        }

        const securityNeeded = security - minimum;

        const weakenPerThread = ns.weakenAnalyze(1);

        const threads = Math.ceil(
            securityNeeded / weakenPerThread
        );

        if (threads > 0) {
            ns.run("weaken.js", threads, target);
        }
    }

    await waitForScript(ns, "weaken.js");

}


}

async function waitForScript(ns, scriptName) {


while (true) {

    const processes = ns.ps(ns.getHostname());

    let running = false;

    for (const process of processes) {

        if (process.filename === scriptName) {
            running = true;
            break;
        }
    }

    if (!running) {
        break;
    }

    await ns.sleep(1000);
}

}
