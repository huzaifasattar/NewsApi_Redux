const apiData = [
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: null,
    title:
      "Turkey earthquake: Drone flies over Hatay revealing extent of destruction",
    description:
      "New vision shows the extent of the earthquake damage across the city in southern Turkey.",
    url: "https://www.bbc.co.uk/news/av/world-europe-64564357",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1079D/production/_128558476_p0f1pr97.jpg",
    publishedAt: "2023-02-08T02:22:37Z",
    content:
      "BBC reports from Antakya, a city reduced to rubble. Video, 00:00:53BBC reports from Antakya, a city reduced to rubble",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Turkey earthquake: How survivors cope with trauma",
    description:
      "The deadly earthquakes in Turkey and Syria are having a devastating impact on people's mental health.",
    url: "https://www.bbc.co.uk/news/world-64720622",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/15133/production/_128732368_dilek.jpg",
    publishedAt: "2023-02-26T01:08:22Z",
    content:
      "The death toll from the devastating earthquakes that recently struck Turkey and Syria has climbed beyond 50,000 - and left many more people homeless. It has taken a terrible toll on mental health for… [+5730 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Turkey and Syria earthquake: Bodies found in search for volleyball team",
    description:
      "A school group of 39 people were in a hotel in southern Turkey when the building collapsed.",
    url: "https://www.bbc.co.uk/news/world-europe-64579269",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/2799/production/_128573101_84681410-a7c6-11ed-a78d-79f011f7ba06.jpg",
    publishedAt: "2023-02-09T11:11:39Z",
    content:
      "Three bodies have been found as rescuers in Turkey search a collapsed hotel for a group of school volleyball players following Monday's earthquakes. \r\nThe bodies of two teachers and a student were re… [+2235 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Turkey earthquake: Erdogan 'responsible for this' opposition leader says",
    description:
      "Many are accusing the Turkish government of being underprepared ahead of Monday's huge quakes.",
    url: "https://www.bbc.co.uk/news/world-europe-64566296",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1481B/production/_128559938_mediaitem128559937.jpg",
    publishedAt: "2023-02-08T10:40:56Z",
    content:
      "Anger is growing in Turkey over the government's perceived failure to prepare after thousands died in two huge earthquakes on Monday.\r\nThe death toll in Turkey has risen to 6,957, according to the co… [+4267 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "6.4 magnitude earthquake hits southern Turkey",
    description:
      "The tremor was reported near Turkey's border with Syria, weeks after another quake killed thousands.",
    url: "https://www.bbc.co.uk/news/world-europe-64711228",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
    publishedAt: "2023-02-20T17:57:16Z",
    content:
      "A 6.4 magnitude earthquake has struck southern Turkey, weeks after a deadly quake devastated the region. \r\nTurkey's disaster and emergency agency Afad said the tremor occurred at 20.04 local time (17… [+377 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Turkey earthquake: How do search and rescue teams save people?",
    description:
      "A search and rescue operation is under way, with specialist teams arriving from around the world.",
    url: "https://www.bbc.co.uk/news/world-64569943",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/16E00/production/_128569639_gettyimages-1246870394.jpg",
    publishedAt: "2023-02-08T18:06:26Z",
    content:
      "Thousands of people have been killed after a massive earthquake struck Turkey and Syria on Monday. \r\nA search and rescue operation is under way, with specialist teams arriving from around the world. … [+3974 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Isaac Schultz",
    title:
      "Turkey Earthquake Did Not Damage Famous Göbekli Tepe Site, Archaeologists Say",
    description:
      "The magnitude 7.8 earthquake that devastated south-central Turkey and northern Syria did not damage the ancient site of Göbekli Tepe, according researchers there.Read more...",
    url: "https://gizmodo.com/gobekli-tepe-turkey-earthquake-undamaged-archaeology-1850107303",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ee8d00bdba372c5692e13636e532ed1a.jpg",
    publishedAt: "2023-02-13T19:30:00Z",
    content:
      "The magnitude 7.8 earthquake that devastated south-central Turkey and northern Syria did not damage the ancient site of Göbekli Tepe, according researchers there.\r\nThe quake struck a week ago, with a… [+2779 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Turkey earthquake rescue: How two sisters were saved from the rubble",
    description:
      "The BBC witnesses the hours-long rescue of Merve and Irem from a collapsed apartment block in Turkey.",
    url: "https://www.bbc.co.uk/news/world-middle-east-64612317",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1FCC/production/_128604180_rescue2.jpg",
    publishedAt: "2023-02-11T18:55:57Z",
    content:
      'Media caption, Watch: Rescuers use specialist cameras to free Irem And Merve from the rubble of their building in Antakya\r\n"Merve! Irem! Merve! Irem," rescue worker Mustafa Ozturk is shouting. Everyo… [+6188 chars]',
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: null,
    title:
      "Full moon captured in majestic shot. Biden heckled at SOTU. The week in 33 photos",
    description:
      "Thousands of people are dead after a 7.8 magnitude earthquake rocked Turkey and Syria on Monday, February 6.",
    url: "https://www.cnn.com/2023/02/09/world/gallery/photos-this-week-february-2-february-9/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230209172240-21-week-in-photos-020923.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-02-10T00:05:20Z",
    content:
      "Thousands of people are dead after a 7.8 magnitude earthquake rocked Turkey and Syria on Monday, February 6.\r\nThe quake struck 23 kilometers (14.2 miles) east of Nurdagi, Turkey, the US Geological Su… [+430 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Turkey-Syria earthquake: Survivors rescued after 278 hours under flattened buildings",
    description:
      "The three men are found alive under the rubble some 278 hours after the earthquake hit Turkey.",
    url: "https://www.bbc.co.uk/news/world-europe-64686793",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/9408/production/_128669873_gettyimages-1247222414.jpg",
    publishedAt: "2023-02-18T05:06:55Z",
    content:
      "Rescue workers in Turkey have pulled at least three men from the rubble, more than 11 days after they were trapped when an earthquake hit the country.\r\nHakan Yasinoglu had been stuck under a flattene… [+2780 chars]",
  },
];
export default apiData;
