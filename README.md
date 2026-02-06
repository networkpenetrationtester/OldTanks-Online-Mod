Hello! This guide shows you how you can get 2012-2013 textures in OldTanks!

Copy the OldTanks Online folder from here into `C:\Games`.
It contains a modified `StandaloneLoader.swf` (by bjuonday) which can be manually configured to request `Preloader.swf` from any URL.
You can change this in the `META-INF/AIR/application.xml` (default is `https://resources.oldtanksonline.ru/Preloader.swf`).

Download & extract my [NNBounce-node](https://github.com/networkpenetrationtester/NNBounce-node) Resource Proxy repo.
It's a TypeScript HTTP proxy, which can either load resources from your disk, or from a URL you specify in `config.json`.

Copy the `www` folder, `config.example.json`, and `play.bat` from here into the NNBounce-node repo folder.
You need those modified game files to load textures, and the modified game won't launch without the NNBounce server.

Download & extract [otgithub-app](https://github.com/bjuonday/otgithub/archive/refs/tags/app.zip) (LATEST TAG RELEASE TITLED "Important").
This repo is a fork of tdlcompiler's otgithub, except with modern textures.
	
In the NNBounce-node-master folder, rename `config.example.json` to `config.json`, set the `HttpServer.OverrideCachePath` field to the path of bjuonday's otgithub folder you downloaded.

`"OverrideCachePath": "C:\Users\<you>\Downloads\otgithub-app"`

Open NNBounce project.

Run `node --run build`

Run `play.bat`! 

Watch the resources as they load from your disk.



