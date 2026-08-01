import { Component } from '@angular/core';

@Component({
  selector: 'app-bycategory',
  templateUrl: './bycategory.component.html',
  styleUrl: './bycategory.component.css'
})
export class BycategoryComponent {




  
  
    products: Product[] = [];
  
    constructor(private SearchService: SearchService) { }
  
    ngOnInit() {
      this.products = this.SearchService.getProductsByCategory('allen-keys');
    }
  
  
  
    // safety ppes
    ppeMainItems = [
      { name: "Hand Gloves", link: "/handgloves" },
      { name: "Safety Boots (Ankle)", link: "/safetyboots" },
      { name: "Safety Harness & Lanyards", link: "/safetyharnessandlanyards" },
      { name: "Fall Arrestors", link: "/fallarrestors" },
      { name: "Safety Eye Goggles", link: "/safetygoogles" },
      { name: "Safety Shoes", link: "/safetyshoes" },
      { name: "Flash Lights", link: "/flashlights" },
      { name: "Safety Rainwears", link: "/safetyrainwears" },
      { name: "Gas Detectors", link: "/gasdetectors" },
      { name: "Emergency Eye Wash Station", link: "/emergencyeyewash" },
      { name: "Spill Kits", link: "/spillkits" },
      { name: "First Aids", link: "/firstaids" },
      { name: "First cat", link: "/firstcat" }
    ];
  
  
    ppeBrands = [
      { name: "Beta", link: "/beta" },
      { name: "Dickies", link: "/dickies" },
      { name: "Portwest", link: "/portwest" },
      { name: "Redwings", link: "/redwings" },
      { name: "Safety Joggers", link: "/safetyjoggers" },
      { name: "Super Steel", link: "/supersteel" },
      { name: "3M", link: "/threem" },
      { name: "MSA", link: "/msa" },
      { name: "Uvex", link: "/uvex" }
    ];
  
    ppeClothing = [
      { name: "Disposables", link: "/disposables" },
      { name: "Coveralls / Overalls", link: "/coveralls" },
      { name: "Reflective Jackets", link: "/reflectivevests" },
      { name: "Lab Coats", link: "/labcoats" },
      { name: "Fire-Resistant Suits", link: "/firesuits" },
      { name: "Chemical-Resistant Wears", link: "/chemicalresistant" },
      { name: "Rainwears", link: "/rainwear" },
      { name: "Umbrellas", link: "/umbrellas" }
    ];
  
    ppeSecurity = [
      { name: "Security Gears", link: "/securitygears" },
      { name: "Stanchions", link: "/stanchions" }
    ];
  
  
    headProtection = [
      { name: 'Safety Helmets', link: '/safetyhelmets' },
      { name: 'Bump Caps', link: '/bumpcaps' },
      { name: 'Welding Helmets', link: '/weldinghelmets' },
      { name: 'Face Shields', link: '/faceshields' }
    ];
  
    eyeProtection = [
      { name: 'Safety Goggles', link: '/safetygoggles' },
      { name: 'Safety Spectacles', link: '/safetyspectacles' },
      { name: 'Welding Safety Glasses', link: '/weldingsafetyglasses' }
    ];
  
    respHearProtection = [
      { name: 'Nose Masks', link: '/nosemasks' },
      { name: 'Earplugs', link: '/earplugs' },
      { name: 'Earmuffs', link: '/earmuffs' }
    ];
  
    lifeSavingEquipment = [
      { name: 'Life Jackets', link: '/lifejackets' },
      { name: 'Life Vests', link: '/lifevests' },
      { name: 'Life Buoys', link: '/lifebuoys' }
    ];
  
    // powertools
  
    powerToolCategories = [
      { name: 'Heat Guns', link: '/heatguns' },
      { name: 'Cutting Machines', link: '/cuttingmachine' },
      { name: 'Mixers', link: '/mixers' },
      { name: 'Polishers', link: '/polishers' },
      { name: 'Spray Guns', link: '/sprayguns' },
      { name: 'Bag Closer Machines', link: '/bagclosermachines' },
      { name: 'Nailers', link: '/nailers' },
      { name: 'Guns & Trimmers', link: '/trimmers' },
      { name: 'Impulse Sealers', link: '/impulsesealers' },
      { name: 'Planers', link: '/planers' },
      { name: 'PPR Machines', link: '/pprmachines' },
      { name: 'Routers', link: '/routers' },
      { name: 'Sanders', link: '/sanders' },
      { name: 'Edge Binding Machines', link: '/edgebinders' },
      { name: 'Wall Chasers', link: '/wallchasers' },
      { name: 'Grease Guns', link: '/greaseguns' },
      { name: 'Combo Kits', link: '/combokits' }
    ];
  
    drillCategories = [
      { name: 'Corded Drills', link: '/cordeddrills' },
      { name: 'Cordless Drills & Drivers', link: '/cordlessdrillsanddrivers' },
      { name: 'Rotary Hammer Drills', link: '/rotaryhammerdrills' },
      { name: 'Drill Presses', link: '/drillpresses' },
      { name: 'Magnetic Drills', link: '/magneticdrills' },
      { name: 'Core Drills', link: '/coredrills' }
    ];
  
    grinderCategories = [
      { name: 'Angle Grinders', link: '/anglegrinders' },
      { name: 'Bench Grinders', link: '/benchgrinders' },
      { name: 'Die Grinders', link: '/diegrinders' },
      { name: 'Mini Grinders', link: '/minigrinders' }
    ];
  
    sawCategories = [
      { name: 'Circular Saws', link: '/circularsaws' },
      { name: 'Jig Saws', link: '/jigsaws' },
      { name: 'Reciprocating Saws', link: '/reciprocatingsaws' },
      { name: 'Table Saws', link: '/tablesaws' },
      { name: 'Mitre Saws', link: '/mitresaws' },
      { name: 'Chain Saws', link: '/chainsaws' },
      { name: 'Band Saws', link: '/bandsaws' }
    ];
  
    impactWrenchCategories = [
      { name: 'Cordless Impact Wrenches', link: '/cordlessimpactwrenches' },
      { name: 'Electric Impact Wrenches', link: '/electricimpactwrenches' },
      { name: 'Pneumatic Impact Wrenches', link: '/pneumatic' }
    ];
  
    jackHammerCategories = [
      { name: 'Demolition Breakers', link: '/demolitionbreakers' },
      { name: 'Pneumatic Jack Hammers', link: '/jackhammers/pneumatic' }
    ];
  
    blowerCategories = [
      { name: 'Cordless Blowers', link: '/cordlessblowers' },
      { name: 'Electric Blowers', link: '/electricblowers' },
      { name: 'Gasoline Blowers', link: '/gasolineblowers' }
    ];
  
    blowerBrands = [
      { name: 'Bosch', link: '/bosch-blowers' },
      { name: 'Makita', link: '/makita-blowers' },
      { name: 'Ingco', link: '/ingco-blowers' }
    ];
  
  
    powerBrands = [
      { name: 'Ingco', link: '/ingco' },
      { name: 'Maxmech', link: '/maxmech' },
      { name: 'Total', link: '/total' },
      { name: 'Makita', link: '/makita' },
      { name: 'Bosch', link: '/bosch' },
      { name: 'Dewalt', link: '/dewalt' },
      { name: 'Stanley', link: '/stanley' },
      { name: 'Edon', link: '/edon' }
    ];
  
    // sealants and adhesives
  
    sealantAdhesiveCategories = [
      { name: 'Silicone Sealants', link: '/siliconsealants' },
      { name: 'PU (Polyurethane) Sealants', link: '/pufoamsealants' },
      { name: 'Epoxy Adhesives', link: '/epoxyadhesives' },
      { name: 'Construction Adhesives', link: '/constructionadhesives' },
      { name: 'Glues', link: '/woodglues' },
      // { name: 'Tile Adhesives', link: '/tileadhesives' },
      { name: 'Contact Adhesives', link: '/contactadhesives' },
      { name: 'Waterproof Sealants', link: '/waterproofsealants' },
      { name: 'Spray Paints & Leak Fillers', link: '/spraypaints' },
      // { name: 'Gums', link: '/gums' }
    ];
  
    // traffic safety
    trafficSafetyCategories = [
      { name: 'Traffic Cones', link: '/trafficcones', count: '' },
      { name: 'Road Barriers', link: '/roadbarriers', count: '' },
      { name: 'Warning Signs', link: '/warningsigns', count: '' },
      { name: 'Speed Bumps', link: '/speedbumps', count: '' },
      { name: 'Reflectors', link: '/reflectors', count: '' },
      { name: 'Safety Vests', link: '/safetyvests', count: '' },
      { name: 'Caution Tapes', link: '/cautiontapes', count: '' },
      { name: 'Wheel Chokes', link: '/wheelchokes', count: '' },
      { name: 'Convex Mirrors', link: '/convexmirrors', count: '' },
      { name: 'Inspection Mirrors', link: '/inspectionmirrors', count: '' },
      { name: 'Metal Detectors', link: '/metaldetectors', count: '' }
    ];
  
    fireSafetyCategories = [
      { name: 'Fire Extinguishers', link: '/fireextinguishers', count: '' },
      { name: 'Fire Blankets', link: '/fireblankets', count: '' },
      { name: 'Smoke & Fire Alarms', link: '/smokefirealarms', count: '' },
      { name: 'Fire Hose', link: '/firehose', count: '' },
      { name: 'Fire Hose Cabinet', link: '/firehosecabinet', count: '' }
    ];
  
    // workshop and garage
    workshopGarageCategories = [
      { name: 'Tool Cabinets', link: '/toolscabinets' },
      { name: 'Work Bench vices', link: '/workbenches' },
      { name: 'Air Compressors', link: '/aircompressors' },
      { name: 'Power Extension & Reels', link: '/powerextensionandreels' },
      { name: 'Tools Sets', link: '/toolssets' },
      { name: 'Car Creepers', link: '/carcreepers' },
      { name: 'Grease Buckets', link: '/greasebuckets' },
      { name: 'Testing Buckets', link: '/testingbuckets' },
      { name: 'Rotary Hand Pumps', link: '/rotarypumps' },
  
    ];
  
    liftingHandlingCategories = [
      { name: 'Jacks & Lifts', link: '/jackandlifts' },
      { name: 'Chain Blocks & Hoists', link: '/chainblocksandhoists' },
      { name: 'Drum Handling Equipment', link: '/drumhandlingequipments' },
      { name: 'Engine Cranes', link: '/enginecranes' },
      { name: 'Lifting Belts', link: '/liftingbelts' },
      { name: 'Pallet Trucks', link: '/palletetrucks' },
      { name: 'Pallet Stackers', link: '/palletestackers' },
      { name: 'Trolleys', link: '/trolleys' }
    ];
  
    wheelServiceCategories = [
      { name: 'Wheel Balancers', link: '/wheelbalancers' },
      { name: 'Wheel Alignment Gauges', link: '/wheelsalignmentguages' },
      { name: 'Wheel Chocks', link: '/wheelchocks' },
      { name: 'Wheel Lockers', link: '/wheellockers' },
      { name: 'Tire Changers', link: '/tirechangers' }
    ];
  
  
    ladderCategories = [
      { name: 'Step Ladders', link: '/stepladders', count: '' },
      { name: 'Extension Ladders', link: '/extensionladders', count: '' },
      { name: 'Folding Ladders', link: '/foldingladders', count: '' }
    ];
  
    // Electricalequipments
    electricalCategories = [
      { name: 'Batteries', link: '/batteries' },
      { name: 'Bag Closer Machines', link: '/bagclosermachines' },
      { name: 'Auto Compressors', link: '/autocompressors' },
      { name: 'Cable Wires & Cable Boosters', link: '/cablewireandboosters' },
      // { name: 'Extension Cable Wires', link: '/extensioncablewires' },
      { name: 'Plasma Cutters', link: '/plasmacutters' },
      { name: 'Air Compressors', link: '/aircompressors' },
      { name: 'Battery Testers', link: '/batterychargers' },
      { name: 'Battery Chargers', link: '/batterychargers' }
    ];
  
    generatorCategories = [
      { name: 'Diesel Generators', link: '/desielgenerators' },
      { name: 'Petrol Generators', link: '/petrolgenerators' },
      { name: 'Inverter Generators', link: '/invertergenerators' }
    ];
  
    weldingCategories = [
      { name: 'TIG Welding Machines', link: '/tigweldingmachines' },
      { name: 'MMA Welding Machines', link: '/mmaweldingmachines' },
      { name: 'MIG Welding Machines', link: '/migweldingmachines' },
      { name: 'Arc Welding Machines', link: '/arcweldingmachines' },
      { name: 'Welding Accessories', link: '/weldingaccessories' }
    ];
  
    // Measuringandtesting
  
    measuringTestingCategories: Category[] = [
      {
        name: 'Fuel Testing & Measuring',
        id: 'fuelTesting',
        number: 15,
        items: [
  
          { name: 'Hydrometers', link: '/hydrometers' },
          { name: 'Flow Meters', link: '/flowmeters' },
          { name: 'Thermometers', link: '/thermometers' },
          { name: 'Measuring Cans', link: '/measuringcans' },
          { name: 'Testing Paste', link: '/testingpastes' },
          { name: 'Measuring Cylinders', link: '/measuringcylinders' },
          { name: 'Fuel Testing Kits', link: '/fueltestingkits' },
  
        ]
      },
  
      {
        name: 'General Measuring Instruments',
        id: 'generalMeasuring',
        number: 20,
        items: [
          { name: 'General Meters', link: '/generalmeters' },
          { name: 'General Testers', link: '/generaltesters' },
          { name: 'Multimeters', link: '/multimeters' },
          { name: 'Clamp Meters', link: '/clampmeters' },
          { name: 'Battery Testers', link: '/batterytesters' },
          { name: 'Measuring Tapes', link: '/measuringtapes' },
          { name: 'Laser Distance Meters', link: '/laserdistancemeters' },
          { name: 'Dial Indicators', link: '/dialindicators' },
          { name: 'General Gauges', link: '/gauges' },
          { name: 'Measuring Wheels', link: '/measuringwheels' },
          { name: 'General Testers', link: '/generaltesters' },
          { name: 'Infrared Thermometers', link: '/infraredthermometers' },
          { name: 'Digital Thermometers', link: '/digitalthermometers' }
        ],
  
        children: [
  
          {
            name: 'Calipers',
            id: 'calipers',
            number: 10,
            items: [
              { name: 'Digital Calipers', link: '/digitalcalipers', number: 5 },
              { name: 'Vernier Calipers (Analogue)', link: '/verniercalipers', number: 5 }
            ]
          },
  
          {
            name: 'Micrometers',
            id: 'micrometers',
            number: 4,
            items: [
              { name: 'Micrometers (Analogue)', link: '/analoguemicrometers' },
              { name: 'Micrometers (Digital)', link: '/digitalmicrometers' }
            ]
          }
  
        ]
  
      },
  
      {
        name: 'Water & Lab Testers',
        id: 'waterTesters',
        number: 3,
        items: [
          { name: 'Water Testers', link: '/watertesters' },
          { name: 'Alcohol Testers', link: '/alcoholtesters' },
          { name: 'pH Meters', link: '/phmeters' },
          { name: 'Concrete Testers', link: '/concretemeters' },
          { name: 'Testing Buckets', link: '/testingbuckets' },
          { name: 'Moisture Testers', link: '/moisturetesters' }
        ]
      },
  
      {
        name: 'Leveling Tools',
        id: 'levelingTools',
        number: 12,
        items: [
          { name: 'Spirit Levels', link: '/spiritlevels' },
          { name: 'Dumpy Levels (Auto Levels)', link: '/dumpinglevels' },
          { name: 'Survey Tripods', link: '/surveytripods' },
          { name: 'Laser Levels', link: '/laserlevels' }
        ]
      },
  
      {
        name: 'Measuring Scales',
        id: 'measuringScales',
        number: 2,
        children: [
  
          {
            name: 'Analogue Scales',
            id: 'analogueScales',
            items: [
              { name: 'Spring Balances', link: '/springbalances' },
              { name: 'Beam Balances', link: '/beambalances' },
              { name: 'Mechanical Platform Scales', link: '/mechanicalplatformscales' },
              { name: 'Analogue Scales(Analogue)', link: '/analoguekitchenscales' }
  
            ]
          },
  
          {
            name: 'Digital Scales',
            id: 'digitalScales',
            items: [
              { name: 'Platform Scales', link: '/platformscales' },
              { name: 'Crane Scales', link: '/cranescales' },
              { name: 'Hanging Scales', link: '/hangingscales' },
              { name: 'Analytical & Lab Balances', link: '/analyticalbalances' },
              { name: 'Bathroom Scales', link: '/bathroomscales' },
              { name: 'Kitchen Scales(Digital)', link: '/kitchenscales' },
              { name: 'Pocket Scales', link: '/pocketscales' },
              // { name: 'Weighbridges', link: '/weighbridges' },
              { name: 'Pricing Scales', link: '/pricingscales' }
            ]
          }
  
        ]
      }
  
    ];
  
    // handtools
    handToolsCategories = [
      { name: 'Spanners & Wrenches', link: '/spannersandwrenches' },
      { name: 'Hammers & Mallets', link: '/hammersandmallets' },
      { name: 'Screwdrivers', link: '/screwdrivers' },
      { name: 'Pliers & Cutters', link: '/pliersandcutters' },
      { name: 'Sockets & Ratchets', link: '/socketsandracthets' },
      { name: 'Measuring Tapes', link: '/measuringtapes' },
      { name: 'Utility Knives & Blades', link: '/utilityknivesandblades' },
      { name: 'Chisels & Punches', link: '/chiselsandpunches' },
      { name: 'Tools Bags', link: '/toolsbags' },
      { name: 'Tools Boxes', link: '/toolsboxes' },
      { name: 'Hand Riveters', link: '/handriveters' },
      { name: 'Crimping Tools', link: '/crimpingtools' },
      { name: 'Tiles Cutters', link: '/tilescutters' },
      { name: 'Drivers', link: '/drivers' },
      { name: 'Flaring Tools', link: '/flaringtools' },
      { name: 'Bearing Pullers', link: '/bearingpullers' },
      { name: 'Toolssets', link: '/toolssets' },
      { name: 'Saw', link: '/saws' }
    ];
  
    handToolAccessories = [
      { name: 'Drill Bits', link: '/drillbits' },
      { name: 'Saw Blades', link: '/sawblades' },
      { name: 'Sanding Pads', link: '/sandingpads' },
      { name: 'Polishing Pads & Buffers', link: '/polishingpadsandbuffers' },
      { name: 'Cutting & Grinding Disc', link: '/cuttingandgrindingdisc' },
      { name: 'Allen Keys', link: '/allenkeys' },
      { name: 'Screw Driver Bits', link: '/screwdriverbits' }
    ];
  
    handToolsBrands = [
      { name: 'Stanley', link: '/stanley' },
      { name: 'Bosch', link: '/bosch' },
      { name: 'Makita', link: '/makita' },
      { name: 'Ingco', link: '/ingco' },
      { name: 'Total', link: '/total' },
      { name: 'Maxmech', link: '/maxmech' }
    ];
  
    // constructionEquipment
    constructionEquipment = [
      { name: 'Concrete Mixers', link: '/concretemixers' },
      { name: 'Jumping Rammers', link: '/jumpingrammers' },
      { name: 'Wheelbarrows', link: '/wheelbarrows' },
      { name: 'Plate Compactors', link: '/compactors' },
      { name: 'Concrete Vibrators', link: '/concretevibrators' },
      { name: 'Power Trowels', link: '/powertrowels' },
      { name: 'Construction Safety Gears', link: '/constructionsafetygear' },
      { name: 'Fall Arrestors', link: '/fallarrestors' },
      { name: 'Ropes', link: '/ropes' },
      { name: 'Poker Hoses', link: '/pokerhoses' },
      { name: 'Rod Benders', link: '/rodbenders' },
      { name: 'Steel Bar Cutting Machines', link: '/steelbarcuttingmachines' },
      { name: 'Drum Trucks', link: '/drumtrucks' }
    ];
  
  
    // pumping machines
    pumpingMachines = [
      { name: 'Water Pumps', link: '/waterpumps' },
      { name: 'Submersible Pumps', link: '/submersiblepumps' },
      { name: 'Fuel Transfer Pumps', link: '/fueltransferpumps' },
      { name: 'Hand/Rotary Pumps', link: '/handrotarypumps' },
      { name: 'Pressure Pumps', link: '/pressurepumps' },
      { name: 'Vacuum Pumps', link: '/vacuumpumps' }
    ];
  
    // Cleaning and garden supplies
    cleaningGardenSupplies = {
      main: [
        { name: 'Cleaning Accessories', link: '/cleaningaccessories' },
        { name: 'Scrubbers And Sweepers', link: '/scrubbersandsweepers' }
      ],
  
      pressureWashers: {
        categories: [
          { name: 'Electric Pressure Washers', link: '/electricpressurewashers' },
          { name: 'Petrol Pressure Washers', link: '/petrolpressurewashers' },
          { name: 'Industrial Pressure Washers', link: '/industrialpressurewashers' },
          { name: 'Cordless Pressure Washers', link: '/cordlesspressurewashers' }
        ],
        brands: [
          { name: 'Ingco', link: '/ingco' },
          { name: 'Bosch', link: '/bosch' },
          { name: 'Maxmech', link: '/maxmech' },
          { name: 'Karcher', link: '/karcher' }
        ],
        accessories: { name: 'Accessories', link: '/accessories' }
      },
  
      blowers: {
        categories: this.blowerCategories,
        brands: this.blowerBrands
      },
  
      hose: [
        { name: 'Water Hose', link: '/waterhose' },
        { name: 'Pressure Hose', link: '/pressurehose' },
        { name: 'Pump Hose', link: '/pumphose' },
        { name: 'Hose Accessories', link: '/hoseaccessories' }
      ],
  
      vacuumCleaners: {
        categories: [
          { name: 'Cyclone Vacuum Cleaners', link: '/cyclonevacummecleaners' },
          { name: 'Wet & Dry Vacuum Cleaners', link: '/wetanddryvacuumecleaners' },
          { name: 'Commercial Vacuum Cleaners', link: '/commercialvacuumcleaners' }
        ],
        brands: [
          { name: 'Ingco', link: '/ingco' },
          { name: 'Total', link: '/total' },
          { name: 'Bosch', link: '/bosch' }
        ]
      },
  
      lawnMowers: {
        categories: [
          { name: 'Hand Push Lawn Mowers', link: '/handpushlawnmowers' },
          { name: 'Self Propelled Lawn Mowers', link: '/selfpropropelledlawnmowers' },
          { name: 'Electric Lawn Mowers', link: '/electriclawnmowers' }
        ],
        brands: [
          { name: 'Ingco', link: '/ingco' },
          { name: 'Total', link: '/total' },
          { name: 'Prince Garden', link: '/princegarden' }
        ]
      },
  
      brushCutters: {
        categories: [
          { name: 'Gasoline Brush Cutters', link: '/gasolinebrushcutters' },
          { name: 'Cordless Brush Cutters', link: '/cordlessbrushcutters' }
        ],
        brands: [
          { name: 'Ingco', link: '/ingco' },
          { name: 'Total', link: '/total' },
          { name: 'Maxmech', link: '/maxmech' }
        ],
        accessories: { name: 'Accessories', link: '/accessories' }
      }
    };
  
    // farm equipments
  
    farmCategories = [
      { name: 'Farm Machines', link: '/farm-machines' },
      { name: 'Farm Tools', link: '/farm-tools' }
    ];
  
    // hydraulic shop press
    shoppress = [
      { name: 'shoppress', link: '/shoppress' }
    ]
  }
  
  
  
  
  
  
