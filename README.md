# bitburner-scripts
These are the scripts I use in BitBurner v3.0.1


--------------------------------------------------------------------------------------------------------

**Controller-weaken.js**, **controller-grow.js**, and **controller-hack.js** calculate and run the max threads that a server can run. The larger the server, the more threads it will run. Each thread is one instance of 
either weaken, grow, or hack. A 4tb server will run a little more than 2,000 threads.

   NOTE: _The server must be nuked and have backdoor for the script to work._ **AND!** _Running too many threads can freeze the game up. Start low and increase threads to see how far you can safely go._

   ***** THESE FUNCTIONS HAVE BEEN COMPILED INTO A SINGLE FILE AND UPGRADED. SEE SERVER-CONTROLLER.JS *****
   
**Weaken.js**, **grow.js**, and **hack.js** are used by the scripts above. 

   Note: _Do not "Run" these files. The control scripts run them automatically._

--------------------------------------------------------------------------------------------------------

**Server-controller.js** is an upgraded script that combines grow(), weaken(), and hack() of available servers into one script. The script loops grow, weaken, hack, weaken on a list of servers. It grows, weakens and hacks
to maximums before moving on to the next function. This file also uses weaken.js, grow.js and hack.js which must be present on the same server.

--------------------------------------------------------------------------------------------------------

**Controller-share.js** runs a specified number of virtual 'threads' that share available RAM on your home server. This boosts the reputation gain you get from working for a company or faction.

**Share.js** is used by the script above.

Note: _Do not "Run" this file. The control script runs it automatically._

--------------------------------------------------------------------------------------------------------

**Stock-trader.js** is an automatic stock trader.

--------------------------------------------------------------------------------------------------------

**Backdoor-all.js** seeks out and runs 'backdoor' on all servers.

--------------------------------------------------------------------------------------------------------

**Change-server-name.js** changes the names of purchased servers.

--------------------------------------------------------------------------------------------------------

**Find-server.js** finds the path to a specific server and displays a link to copy/paste that will take you directly to it.

--------------------------------------------------------------------------------------------------------

**Grow-company.js** can be used to grow a specific company.

--------------------------------------------------------------------------------------------------------

**Root-all.js** seeks out all servers, opens the required number of ports, and then runs nuke.exe on each server.

--------------------------------------------------------------------------------------------------------

**Upgrade servers.js** is used to upgrade all purchased servers.

--------------------------------------------------------------------------------------------------------
