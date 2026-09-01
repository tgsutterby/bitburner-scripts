/** @param {NS} ns */
export async function main(ns) {

    await ns.cloud.renameServer("old-server-name", "new-server-name");
    await ns.cloud.renameServer("old-server-name-2", "new-server-name");
    await ns.cloud.renameServer("old-server-name-3", "new-server-name");
    await ns.cloud.renameServer("old-server-name-4", "new-server-name");
    await ns.cloud.renameServer("old-server-name-5", "new-server-name");

}

/** Add or remove lines and run the script. */
