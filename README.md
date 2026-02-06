Hello! This guide shows you how you can get 2012-2013 textures in OldTanks!

1.	Copy the OldTanks Online folder from here into `C:\Games`.
	It contains a modified `StandaloneLoader.swf` (by bjuonday) which can be manually configured to request `Preloader.swf` from any URL. You can change this in the `META-INF/application.xml` (default is `https://resources.oldtanksonline.ru/Preloader.swf`).
	
2.	Download & extract my [NNBounce-node](https://github.com/networkpenetrationtester/NNBounce-node) Resource Proxy repo.
	It's a TypeScript HTTP proxy, which can either load resources from your disk, or from a URL you specify in `config.json`.

3.	Copy the `www` folder from here into the NNBounce-node repo folder.
	You need those modified game files, and to start the server for it to launch.

4.	Download & extract [otgithub-app](https://github.com/bjuonday/otgithub/archive/refs/tags/app.zip) (LATEST TAG RELEASE TITLED "Important").
   	This repo is a fork of tdlcompiler's otgithub, except with modern textures.
	
5.	In the NNBounce-node repo `config.json`, set the `HttpServer.OverrideCachePath` field to the path of bjuonday's otgithub folder you downloaded.

	`"OverrideCachePath": "C:/Users/<you>/Downloads/otgithub"`

6. Open NNBounce project.

7. Run `node --run build`

8. Run `play.bat`! Watch the resources as they load from your disk.





