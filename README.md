Hello! This guide shows you how you can get 2012-2013 textures in OldTanks!

1.	Copy the OldTanks Online folder from here into `C:\Games`.
	It contains a modified `StandaloneLoader.swf` (by bjuonday) which can be manually configured to request `Preloader.swf` from any URL. You can change this in the `META-INF/application.xml` (default is `https://resources.oldtanksonline.ru/Preloader.swf`).
	
2.	Download & extract my NNBounce-node Resource Proxy repo. https://github.com/networkpenetrationtester/NNBounce-node
	It's a TypeScript HTTP proxy, which can either load resources from your disk, or from a URL you specify in `config.json`.

3.	Copy the `www` folder from here into the NNBounce-node repo folder.
	You need those modified game files, and to start the server for it to launch.

4.	Download & extract otgithub-app (LATEST TAG RELEASE) titled "Important". (https://github.com/bjuonday/otgithub/archive/refs/tags/app.zip)
	This is where you can find 2013 textures in the same folder structure as OldTanks.
	
5.	In the NNBounce-node repo `config.json`, set the `HttpServer.OverrideCachePath` field to the path of bjuonday's otgithub folder you downloaded.

	`"BasePath": "C:/Users/<you>/Downloads/otgithub"`

6. Open NNBounce project.
   
7. Run `npm install` (may have to download types too)

8. Run `node index.ts`

9. Run `play.bat`! Watch the resources as they load from your disk.



