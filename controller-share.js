/** @param {NS} ns */
export async function main(ns) {
    ns.disableLog("ALL");

    const targetRamPB = 15; 
    const threadCount = 2000000;
    const loopDelayMs = 10000; 
    const targetRamGB = targetRamPB * 1000000;
    const shareCostGB = ns.getScriptRam("share.js");
    const requiredRamGB = shareCostGB * threadCount;

    ns.tprint(`[Share Manager] Initializing...`);
    ns.tprint(`Target RAM: ${targetRamPB} PB (${targetRamGB.toLocaleString()} GB)`);
    ns.tprint(`Configured Threads: ${threadCount.toLocaleString()}`);

    if (requiredRamGB > targetRamGB) {
        ns.tprint(`[Warning] ${threadCount} threads require ${requiredRamGB.toLocaleString()} GB, which exceeds your target of ${targetRamGB.toLocaleString()} GB.`);
    }

    while (true) {
        const pid = ns.run("share.js", threadCount);

        /* if (pid === 0) {
            ns.tprint(`[ERROR] Failed to run share.js with ${threadCount} threads. Check available RAM on home/server.`);
        } else {
            ns.tprint(`[SUCCESS] Executed share loop with ${threadCount} threads.`);
        } */

        await ns.sleep(loopDelayMs);
    }
}
