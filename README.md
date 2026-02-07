Hello! This guide shows you how you can get 2012-2013 textures in OldTanks!

**It is recommended that you back up your `C:\Games\OldTanks Online` folder before modifying anything.**
**Also remember to clear the cache before starting up the game to apply new textures!**
**You can launch the game normally by reverting `C:\Games\OldTanks Online\META-INF\AIR\application.xml`**.

Copy the `OldTanks Online` folder from here into `C:\Games\`.
It contains a modified `StandaloneLoader.swf` (by [bjuonday](https://github.com/bjuonday)) which can be manually configured to request a `Preloader.swf` from any URL.
You can change this in the included modified `META-INF\AIR\application.xml` (default is `https://resources.oldtanksonline.ru/Preloader.swf`).

Download & extract my [NNBounce-node](https://github.com/networkpenetrationtester/NNBounce-node) Resource Proxy Server.
It's a TypeScript HTTP proxy, which can either load resources from your disk, or from a URL you specify in `config.json`.

Merge the `NNBounce-node-master` folder from here into your downloaded copy of `NNBounce-node` (folder name will be `NNBounce-node-master` after downloading).
You need all of those modified game files to load textures, and the modified game won't launch without the NNBounce server.
I have created a script to start the game and server in one simple click. :)

Download & extract [bjuonday's otgithub mod](https://github.com/bjuonday/otgithub).
This repo is a fork of tdlcompiler's otgithub, except with modern textures.
	
In the NNBounce-node-master folder, open `config.json` with your favorite text editor, and set the `HttpServer.OverrideCachePath` field to the path of [bjuonday](https://github.com/bjuonday)'s `otgithub-main` folder you downloaded.
Example: `"OverrideCachePath": "C:\Users\<Your Computer Username Here>\Downloads\otgithub-main"`

You're all done! Now simply run `play.bat`, and watch the resources as they load from your disk.