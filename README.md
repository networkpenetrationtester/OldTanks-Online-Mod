1.	Copy the OldTanks Online folder from here into C:\Games.
	It contains a modified StandaloneLoader.swf (by bjuonday) which can be manually configured to load Preloader.swf from the application.xml.
	
2.	Download my NNBounce-node repo. https://github.com/networkpenetrationtester/NNBounce-node
	It's a TypeScript HTTP proxy, saves resources in local www folder, or loads from disk using config.json
	
3.	Copy the www folder from here into the NNBounce-node repo.
	You need those files to launch the modified game.

4.	Download & Extract otgithub LATEST TAG RELEASE "Important". (https://github.com/bjuonday/otgithub/archive/refs/tags/app.zip)
	This is where you can find 2013 textures in the same format as OldTanks.
	
5.	In the NNBounce-node repo config.json, set the BasePath field to the root of bjuonday's otgithub you downloaded.
	"BasePath": "PATH/TO/bjuonday/otgithub"

6. Run npm install (install types?)
7. Run node index.ts
8. Start OldTanks!