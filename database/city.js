class City {
  constructor({ id, link, name, longName, communities }) {
    this.id = id;
    this.link = link;
    this.name = name;
    this.longName = longName;
    this.communities = communities;
    this.priceRanges = [
      'Under $100,000',
      '$100,000 - $200,000',
      '$200,000 - $300,000',
      '$300,000 - $400,000',
      '$400,000 - $500,000',
      '$500,000 - $600,000',
      '$600,000 - $700,000',
      '$700,000 - $800,000',
      '$800,000 - $900,000',
      '$900,000 - $1,000,000',
      '$1,000,000+',
    ];
  }
  makeLink(str) {
    return str.toLowerCase().replace(/\s|\$|,|\+/g, '');
  }
  priceLinks(type) {
    const baseUrl = `${ this.link }-${ type }`;

    return this.priceRanges.map(priceRange => {
      return {
        title: priceRange,
        link: `${ baseUrl }/${ this.makeLink(priceRange) }`
      };
    });
  }
  communityFilter(letters) {
    if (Array.isArray(letters)) {
      return this.communities.filter(community => letters.includes(community.name[0]));
    }

    return this.communities.filter(community => community.name.startsWith(letters));
  }
}

const jensenBeach = {
  id: 1,
  link: 'jensen-beach',
  name: 'Jensen Beach',
  longName: 'Jensen Beach Homes & Condos',
  communities: [{"name":"Admiral Condos","link":"the-admiral"},{"name":"Arch Heights Homes","link":"arch-heights"},{"name":"Atlantis Condos","link":"atlantis"},{"name":"Atlantis A Condos","link":"atlantis-a"},{"name":"Atlantis B Condos","link":"atlantis-b"},{"name":"Atlantis by the Sea Condos","link":"atlantis-by-the-sea"},{"name":"Banyan Terrace Homes","link":"banyan-terrace"},{"name":"Bay Tree Homes","link":"bay-tree"},{"name":"Beach Club Colony","link":"beach-club-colony"},{"name":"Beacon 21 Condos","link":"beacon-21"},{"name":"Blount Pitchford Homes","link":"blount-pitchford"},{"name":"Blue Diamond Homes","link":"blue-diamond"},{"name":"Blue Heron Homes","link":"blue-heron"},{"name":"Brennan Court Homes","link":"brennan-court"},{"name":"Cinnamon Tree Homes","link":"cinnamon-tree"},{"name":"Claridge by the Sea Condos","link":"claridge-by-the-sea"},{"name":"Coconut Way Homes","link":"coconut-way"},{"name":"Corano Del Rio Homes","link":"corano-del-rio"},{"name":"Cross Roads Hill Homes","link":"cross-roads-hill"},{"name":"Diamond Sands Homes","link":"diamond-sands"},{"name":"Dune Condo Condos","link":"dune-condo"},{"name":"Dune Walk Condos","link":"dune-walk"},{"name":"Eden’s Refuge Homes","link":"eden%E2%80%99s-refuge"},{"name":"Empress Condos","link":"empress"},{"name":"Fairwinds Cove Condos","link":"fairwinds-cove"},{"name":"Falls of Jensen Beach Homes","link":"falls-of-jensen-beach"},{"name":"Fishermans Haven Homes","link":"fishermans-haven"},{"name":"Gaines Estates Homes","link":"gaines-estates"},{"name":"Glutchs Homes","link":"glutchs"},{"name":"Green Turtle Cove Condos","link":"Green-Turtle-Cove"},{"name":"Henderson Landing Homes","link":"henderson-landing"},{"name":"Holiday Out At St Lucie Homes","link":"holiday-out-at-st-lucie"},{"name":"Holly Creek Homes","link":"holly-creek"},{"name":"Hutchinson Island Club Condos","link":"hutchinson-island-club"},{"name":"Indian Ridge Homes","link":"indian-ridge"},{"name":"Indian River Drive Homes","link":"indian-river-drive"},{"name":"Indian River Gardens Homes","link":"indian-river-gardens"},{"name":"Indian River Landing Condos","link":"indian-river-landing"},{"name":"Indian River Point Homes","link":"indian-river-point"},{"name":"Indian River Villas Condos","link":"indian-river-villas"},{"name":"Island Beach Club Condos","link":"island-beach-club"},{"name":"Island Club Condos","link":"island-club"},{"name":"Island Crest Condos","link":"island-crest"},{"name":"Island Dunes Country Club Condos","link":"island-dunes-country-club"},{"name":"Island Dunes Oceanside condos","link":"island-dunes-oceanside"},{"name":"Island Village Homes","link":"island-village"},{"name":"Islandia Condos","link":"islandia"},{"name":"Jensen Beach Club Condos","link":"jensen-beach-club"},{"name":"Jensen Beach Country Club Homes","link":"jensen-beach-country-club"},{"name":"Jensen Beach Homesites Homes","link":"jensen-beach-homesites"},{"name":"Jensen Heights Homes","link":"jensen-heights"},{"name":"Jensen Highlands Homes","link":"jensen-highlands"},{"name":"Jensen Park Estates Condos","link":"jensen-park-estates"},{"name":"Jensen Park Villas Homes","link":"jensen-park-villas"},{"name":"Jensen Village (NEW CONSTRUCTION)","link":"jensen-village"},{"name":"King Neptune Estates Homes","link":"king-neptune-estates"},{"name":"Legion Heights Homes","link":"legion-heights"},{"name":"Leilani Heights Homes","link":"leilani-heights"},{"name":"Millers Homes","link":"millers"},{"name":"Miramar Condos","link":"miramar"},{"name":"Miramar II Condos","link":"miramar-ii"},{"name":"Miramar Royale Condos","link":"miramar-royale"},{"name":"Mockingbird Homes","link":"mockingbird"},{"name":"Montego Cove Condos","link":"montego-cove"},{"name":"Moon River Homes","link":"moon-river"},{"name":"Nettles Island Homes","link":"nettles-island"},{"name":"Newport Jensen Homes","link":"newport-jensen"},{"name":"Oak Lane Manor Homes","link":"oak-lane-manor"},{"name":"Oaks At Indian River Homes","link":"oaks-at-indian-river"},{"name":"Ocean Bay Villas Condos","link":"ocean-bay-villas"},{"name":"Ocean Breeze Homes","link":"ocean-breeze"},{"name":"Ocean Dunes Condos","link":"ocean-dunes"},{"name":"Ocean Towers Condos","link":"ocean-towers"},{"name":"Oceana Condos","link":"oceana"},{"name":"Oceanrise Condos","link":"oceanrise"},{"name":"Outrigger Harbour Condos","link":"outrigger%20harbour"},{"name":"Palmetto Grove Homes","link":"palmetto-grove"},{"name":"Pelican Pointe Homes","link":"pelican-pointe"},{"name":"Petermans Homes","link":"petermans"},{"name":"Pine Castle Homes","link":"pine-castle"},{"name":"Pine Grove Homes","link":"pine-grove"},{"name":"Pine Lake Village Homes","link":"pine-lake-village"},{"name":"Pineapple Bluff Homes","link":"pineapple-bluff"},{"name":"Pineapple Plantation Homes","link":"pineapple-plantation"},{"name":"Pinecrest Lakes Homes","link":"pinecrest-lakes"},{"name":"Pinelake Village Homes","link":"pinelake-village"},{"name":"Pitchford Homes","link":"pitchford"},{"name":"Portofino of Jensen Condos","link":"portofino-of-jensen"},{"name":"Princess of Hutchinson Island Condos","link":"princess-of-hutchinson-island"},{"name":"Regency Island Dunes Condos","link":"regency-island-dunes"},{"name":"Renar River Place Condos","link":"renar-river-place"},{"name":"Rigels Cove Homes","link":"rigels-cove"},{"name":"Rio St Lucie Homes","link":"rio-st-lucie"},{"name":"River Club Condo","link":"river-club-condo"},{"name":"River Terrace Homes","link":"river-terrace"},{"name":"River Vista Condos","link":"river-vista"},{"name":"River Watch Homes","link":"river-watch"},{"name":"Sago Sands Homes","link":"sago-sands"},{"name":"Sailfish Cove Homes","link":"sailfish-cove"},{"name":"Sand Dollar Condos","link":"sand-dollar"},{"name":"Savanna Highland Homes","link":"savanna-highland"},{"name":"Savanna Hills Homes","link":"savanna-hills"},{"name":"Savanna Oaks Homes","link":"savanna-oaks"},{"name":"Savanna Skyline Homes","link":"savanna-skyline"},{"name":"Savannas Club Condos","link":"savannas-club"},{"name":"Sea Winds Condos","link":"sea-winds"},{"name":"Seaside of Stuart Condos","link":"seaside-of-stuart"},{"name":"Seaview Ter Homes","link":"seaview-ter"},{"name":"Sewalls Landing Homes","link":"sewalls-landing"},{"name":"Skyline Homes","link":"skyline"},{"name":"Skyline Park Homes","link":"skyline-park"},{"name":"South Jensen Heights Homes","link":"south-jensen-heights"},{"name":"Spring Hill Homes","link":"spring-hill"},{"name":"St Lucie River Heights Homes","link":"st-lucie-river-heights"},{"name":"St Lucie Vista Estates Homes","link":"st-lucie-vista-estates"}]
};

exports.get = id => {
  const row = jensenBeach;

  return new City(row)
}
