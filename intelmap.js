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


		var firstlook = new OpenLayers.Layer.GeoRSS("Firstlook.org News", 
			"http://api.geonames.org/rssToGeoRSS?feedUrl=https://firstlook.org/theintercept/feed/?post_type=article&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false",
			{'icon':imgreenico, sphericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});
		
		var poynter = new OpenLayers.Layer.GeoRSS("poynter.org", "http://api.geonames.org/rssToGeoRSS?feedUrl=http://www.poynter.org/category/latest-news/feed&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false",
			{'icon':imblueico, spericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});

		var nyt = new OpenLayers.Layer.GeoRSS("New York Times World", "http://api.geonames.org/rssToGeoRSS?feedUrl=http://rss.nytimes.com/services/xml/rss/nyt/World.xml&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false%22",
			{'icon':imyellowico, spericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});

		var npr = new OpenLayers.Layer.GeoRSS("National Public Radio World News", "http://api.geonames.org/rssToGeoRSS?feedUrl=http://www.npr.org/rss/rss.php?id=1004&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false%22",
			{'icon':imorangeico, spericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});

		var SyriaDeeply = new OpenLayers.Layer.GeoRSS("Beta.SyriaDeeply.org", "http://api.geonames.org/rssToGeoRSS?feedUrl=http://beta.syriadeeply.org/category/forum/feed&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false",
                        {'icon':imyellowico, spericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});
		
		map.addLayers([
		osm,
		intelmapnews,
		firstlook,
		poynter,
		nyt,
		npr,
		SyriaDeeply
		]);
				
		map.addControl(new OpenLayers.Control.LayerSwitcher({}));		
		map.addControl(new OpenLayers.Control.MousePosition({element: $('location')}));
	
		

		
		map.setCenter(new OpenLayers.LonLat(17.99,59.3),3);
		
		map.getNumZoomLevels = function(){
		return 15;
		};
	}
	

		
