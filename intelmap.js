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

		var gsico = new OpenLayers.Icon('intelmap/globalsecurity.ico', new OpenLayers.Size(15,13));
		var imredico = new OpenLayers.Icon('intelmap/redmarker.png', new OpenLayers.Size(30,25));
		var nsaico = new OpenLayers.Icon ('intelmap/nsa.png', new OpenLayers.Size(30,25));

		var intelmapnews = new OpenLayers.Layer.GeoRSS("news.intelmap.com:8080 Discussion feed", "http://api.geonames.org/rssToGeoRSS?feedUrl=http%3A%2F%2Fnews.intelmap.com%3A8080%2Frss&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false",
			{'icon':imredico, sphericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});


		var globalsecurity = new OpenLayers.Layer.GeoRSS("Globalsecurity.org", "http://api.geonames.org/rssToGeoRSS?feedUrl=http%3A%2F%2Fwww.globalsecurity.org%2Fglobalsecurity-org.xml&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false",
			{'icon':gsico, sphericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});
		
		var nsarss = new OpenLayers.Layer.GeoRSS("National Security Agency Newsroom", "http://api.geonames.org/rssToGeoRSS?feedUrl=http%3A%2F%2Fwww.dni.gov%2Findex.php%2Fodni-newsroom-feed%3Fformat%3Dfeed&&username=bradsmith&geoRSS=simple&type=rss_2.0&addUngeocodedItems=false",
			{'icon':nsaico, spericalMercator: true, useFeedTitle: false, displayInLayerSwitcher: true});

		
		map.addLayers([
		osm,
		globalsecurity,
		intelmapnews
		]);
				
		map.addControl(new OpenLayers.Control.LayerSwitcher({}));		
		map.addControl(new OpenLayers.Control.MousePosition({element: $('location')}));
	
		

		
		map.setCenter(new OpenLayers.LonLat(0, 0), 3);
		
		map.getNumZoomLevels = function(){
		return 15;
		};
	}
	

		
