Hello! This guide shows you how you can get 2012-2013 textures in OldTanks!

**It is recommended that you back up your `C:\Games\OldTanks Online` folder before modifying anything.**
**Also remember to clear the cache (`clear-cache.bat`) before starting up the game to apply new textures!**
**You can launch the game normally by reverting `C:\Games\OldTanks Online\META-INF\AIR\application.xml`.**
**Simply set the `<content>` line to:**
```xml
<content>StandaloneLoader.swf</content>
```

## MOD INSTALLATION:

Copy the `OldTanks Online` folder from here into `C:\Games\`.
It contains a modified `StandaloneLoader.swf` (derived from [bjuonday](https://github.com/bjuonday)) which I have modified to allow users to override the config values for resources, prelauncher, and loader.
It also contains the `Prelauncher.swf` and `Loader.swf` files, which are required for this specific version of mod.
You can change this in the included modified `META-INF\AIR\application.xml`.

## TWO METHODS OF LOADING RESOURCES:

## 1. Easy, remotely hosted, using override for `Prelauncher.swf`, `Loader.swf`, and using [bjuonday's otgithub mod](https://github.com/bjuonday/otgithub) resource webserver.

Edit the `<content>` line of `C:\Games\OldTanks Online\META-INF\AIR\application.xml`,
```xml
<content>StandaloneLoader.swf?prelauncher=C:\Games\OldTanks Online\Prelauncher.swf&loader=C:\Games\OldTanks Online\Loader.swf&resources=https://bjuonday.github.io/otgithub/resources/</content>
```

## 2. Difficult, but locally hosted. (customizable, faster load time, saves bandwidth)
Download & extract my [NNBounce-node](https://github.com/networkpenetrationtester/NNBounce-node) Resource Proxy Server.
It's a TypeScript HTTP proxy, which can either load resources from your disk, or from a URL you specify in `config.json`. (Or do both with a cache)

*Only 1 person in a house/group needs the server if multiple are playing.*
*You could save other people the hassle by hosting one instance and port forwarding it.*

Merge the `NNBounce-node-master` folder from here into your downloaded copy of `NNBounce-node` (folder name will be `NNBounce-node-master` after downloading).
You need all of those modified game files to load textures, and the modified game won't launch without the NNBounce server.
I have created a script to start the game and server in one simple click. :)

Download & extract [bjuonday's otgithub mod](https://github.com/bjuonday/otgithub).
This repo is a fork of tdlcompiler's otgithub, except with modern textures. We will only be using the `resources` folder.
	
In the NNBounce-node-master folder, open `config.json` with your favorite text editor, and set the `HttpServer.OverrideCachePath` field to the path of [bjuonday](https://github.com/bjuonday)'s `otgithub-main` folder you downloaded.
Example: `"OverrideCachePath": "C:\Users\<Your Computer Username Here>\Downloads\otgithub-main"`

Edit the `<content>` line of `C:\Games\OldTanks Online\META-INF\AIR\application.xml`,
```xml
<content>StandaloneLoader.swf?prelauncher=http://localhost:8080/Prelauncher.swf&loader=http://localhost:8080/Loader.swf&resources=http://localhost:8080/resources/</content>
```

Run `start-server.sh` or `start-server.bat` in `NNBounce-node` directory to start resource server.

## You're all done! Now simply start the game and immerse yourself in 2014 nostolgia.
