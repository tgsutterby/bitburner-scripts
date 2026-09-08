
/** @param {NS} ns */
export async function main(ns) {

    const maxCost = 1e12; // $1 trillion

    const servers = ns.cloud.getServerNames();

    for (const oldServer of servers) {

        const files = ns.ls(oldServer);

        ns.killall(oldServer);

        const name = oldServer;

        ns.cloud.deleteServer(oldServer);

        let ram = 1;

        while (ram * 2 <= ns.cloud.getRamLimit()) {
            if (ns.cloud.getServerCost(ram * 2) > maxCost) {
                break;
            }

            ram *= 2;
        }

        if (ns.cloud.getServerCost(ram) > ns.getServerMoneyAvailable("home")) {
            ns.tprint("NOT ENOUGH MONEY FOR: " + name);
            continue;
        }

        ns.cloud.purchaseServer(name, ram);

        ns.tprint("UPGRADED " + name + " TO " + ns.format.ram(ram));

        if (files.length > 0) {
            ns.scp(files, name, "home");
        }
    }

    ns.tprint("ALL SERVERS UPGRADED.");
}
