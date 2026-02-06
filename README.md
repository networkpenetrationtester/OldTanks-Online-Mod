Hello! This guide shows you how you can get 2012-2013 textures in OldTanks!

**It is recommended that you back up your _OldTanks Online_ folder before modifying anything.**
**Also remember to clear the cache before starting up the game!**

Copy the OldTanks Online folder from here into `C:\Games`.
It contains a modified `StandaloneLoader.swf` (by bjuonday) which can be manually configured to request `Preloader.swf` from any URL.
You can change this in the included, modified `META-INF/AIR/application.xml` (default is `https://resources.oldtanksonline.ru/Preloader.swf`).

Download & extract my [NNBounce-node](https://github.com/networkpenetrationtester/NNBounce-node) Resource Proxy repo.
It's a TypeScript HTTP proxy, which can either load resources from your disk, or from a URL you specify in `config.json`.

Copy the `www` folder, `config.json`, `play.bat`, and `quit.bat` from here into the NNBounce-node repo folder.
You need those modified game files to load textures, and the modified game won't launch without the NNBounce server.

Download & extract [bjuonday's otgithub mod](https://github.com/bjuonday/otgithub).
This repo is a fork of tdlcompiler's otgithub, except with modern textures.
You may delete the `resourcesmodern` folder, as well as all other files, as we only need the `resources` folder.
	
In the NNBounce-node-master folder, open `config.json`.
Set the `HttpServer.OverrideCachePath` field to the path of bjuonday's otgithub folder you downloaded (Double backslashes).

`"OverrideCachePath": "C:\\Users\\<you>\\Downloads\\otgithub-main"`

You're all done! Now simply run `play.bat`, and watch the resources as they load from your disk.