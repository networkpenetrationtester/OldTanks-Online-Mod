Hello! This guide shows you how you can get 2012-2013 textures in OldTanks!

**It is recommended that you back up your `C:\Games\OldTanks Online` folder before modifying anything.**
**Also remember to clear the cache (`clear-cache.bat`) before starting up the game to apply new textures!**
**You can launch the game normally by reverting `C:\Games\OldTanks Online\META-INF\AIR\application.xml`**.

Copy the `OldTanks Online` folder from here into `C:\Games\`.
It contains a modified `StandaloneLoader.swf` (derived from [bjuonday](https://github.com/bjuonday)) which can be configured to override the swrver used for resources.
You can change this in the included modified `META-INF\AIR\application.xml` (default is `https://resources.oldtanksonline.ru/Preloader.swf`).

Download & extract my [NNBounce-node](https://github.com/networkpenetrationtester/NNBounce-node) Resource Proxy Server.
It's a TypeScript HTTP proxy, which can either load resources from your disk, or from a URL you specify in `config.json`. (Or do both with a cache)

*Only 1 person in a house/group needs the server if multiple are playing. You could save other people the hassle by hosting one instance and port forwarding it.*

Merge the `NNBounce-node-master` folder from here into your downloaded copy of `NNBounce-node` (folder name will be `NNBounce-node-master` after downloading).
You need all of those modified game files to load textures, and the modified game won't launch without the NNBounce server.
I have created a script to start the game and server in one simple click. :)

Download & extract [bjuonday's otgithub mod](https://github.com/bjuonday/otgithub).
This repo is a fork of tdlcompiler's otgithub, except with modern textures. We will only be using the `resources` folder.

*You may also attempt pointing the target URL into the root folder of bjuonday's otgithub repository, but with a few rules set to keep modified versions of files. I will test this.*
	
In the NNBounce-node-master folder, open `config.json` with your favorite text editor, and set the `HttpServer.OverrideCachePath` field to the path of [bjuonday](https://github.com/bjuonday)'s `otgithub-main` folder you downloaded.
Example: `"OverrideCachePath": "C:\Users\<Your Computer Username Here>\Downloads\otgithub-main"`

You're all done! Now simply run `play.bat`, and watch the resources as they load from your disk.