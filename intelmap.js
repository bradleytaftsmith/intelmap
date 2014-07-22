OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";

var map; 

	function init() {
		map = new OpenLayers.Map('map', {})

		/*var controlroom = new OpenLayers.Layer.XYZ(
			"Control Room - MapBox",
			[
				"http://a.tiles.mapbox.com/v3/devseed.control-room-i/${z}/${x}/${y}.png",
       			"http://b.tiles.mapbox.com/v3/devseed.control-room-i/${z}/${x}/${y}.png",
        		"http://c.tiles.mapbox.com/v3/devseed.control-room-i/${z}/${x}/${y}.png",
        		"http://d.tiles.mapbox.com/v3/devseed.control-room-i/${z}/${x}/${y}.png"
        	], {
        		attribution: "Tiles &copy; <a href='http:/mapbox.com/'>MapBox</a>",
        		isBaseLayer: true,
        		sphericalMercator: true,
        		displayInLayerSwitcher: true,
        		numZoomLevels: 5,
        		wrapDateLine: true

        	}

        );*/
		
		var osm = new OpenLayers.Layer.OSM(
			"OSM", 
			["http://a.tile.openstreetmap.org/${z}/${x}/${y}.png",
			"http://b.tile.openstreetmap.org/${z}/${x}/${y}.png"],
			{isBaseLayer: true, displayInLayerSwitcher: false});

		var gsico = new OpenLayers.Icon('globalsecurity.ico', new OpenLayers.Size(15,13));
		var imredico = new OpenLayers.Icon('redmarker.png', new OpenLayers.Size(35,30));
		var imgreenico = new OpenLayers.Icon('greenmarker.png', new OpenLayers.Size(35,30));
		var imorangeico = new OpenLayers.Icon('orangemarker.png', new OpenLayers.Size(35,30));
		var imblueico = new OpenLayers.Icon('bluemarker.png', new OpenLayers.Size(35,30));
		var imyellowico = new OpenLayers.Icon('yellowmarker.png', new OpenLayers.Size(35,30));
		var nsaico = new OpenLayers.Icon ('nsa.png', new OpenLayers.Size(35,30));

		var intelmapnews = new OpenLayers.Layer.GeoRSS("news.intelmap.com", 
			"http://api.geonames.org/rssToGeoRSS?feedUrl=http%3A%2F%2Fnews.intelmap.com%3A8080%2Frss&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false",
			{'icon':imredico, sphericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});


		var SyriaNews = new OpenLayers.Layer.GeoRSS("SyriaNews.CC", 
			"http://api.geonames.org/rssToGeoRSS?feedUrl=http%3A%2F%2Fhttp://www.syrianews.cc/feed/&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false",
			{'icon':imgreenico, sphericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});
		
		var SyriaDeeply = new OpenLayers.Layer.GeoRSS("Beta.SyriaDeeply.org", "http://api.geonames.org/rssToGeoRSS?feedUrl=http://beta.syriadeeply.org/category/forum/feed&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false",
			{'icon':imblueico, spericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});

		var BreakingNews = new OpenLayers.Layer.GeoRSS("BreakingNews.com Syria", "http://api.geonames.org/rssToGeoRSS?feedUrl=http://www.breakingnews.com/feeds/rss/syria&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false%22",
			{'icon':imyellowico, spericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});

		var SyrianFreePress = new OpenLayers.Layer.GeoRSS("BreakingNews.com Syria", "http://api.geonames.org/rssToGeoRSS?feedUrl=http://syrianfreepress.wordpress.com/feed/&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false%22",
			{'icon':imorangeico, spericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});

		var satp.org = new OpenLayers.Layer.GeoRSS("SATP.ORG", "http://api.geonames.org/rssToGeoRSS?feedUrl=http%3A%2F%2Fsatp.org%2Fsatp.xml&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false%22",
			{'icon':imorangeico, spericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});
		

		map.addLayers([
		osm,
		//SyriaNews,
		SyriaDeeply,
		//BreakingNews,
		SyrianFreePress,
		intelmapnews,
                satp.org
		]);
				
		map.addControl(new OpenLayers.Control.LayerSwitcher({}));		
		map.addControl(new OpenLayers.Control.MousePosition({element: $('location')}));
	
		

		
		map.setCenter(new OpenLayers.LonLat(17.99,59.3),10);
		
		map.getNumZoomLevels = function(){
		return 15;
		};
	}
	

		
