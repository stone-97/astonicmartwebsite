import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';
import { Category } from '../../../../../core/models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationService } from '../../../../../core/services/pagination.service';


@Component({
  selector: 'app-screwdriverbits',
  templateUrl: './screwdriverbits.component.html',
  styleUrl: './screwdriverbits.component.css'
})
export class ScrewdriverbitsComponent {



dealsOfWeek: Product[] = [];

  filteredProducts: Product[] = [];
  products: Product[] = [];

  uniqueBrands: string[] = [];
  selectedBrands: string[] = [];

  minPrice: number = 0;
  maxPrice: number = Infinity;

  constructor
    (private SearchService: SearchService,
      private route: ActivatedRoute,
      private router: Router,
      public paginationService: PaginationService) { }


  ngOnInit() {

    // load electric pressure washer products only
    this.products =
      this.SearchService.getProductsByCategory(
        'screwdriver-bits');

    // default view
    this.filteredProducts = [...this.products];

    // unique brands
    this.uniqueBrands = [
      ...new Set(this.products.map(p => p.brand))
    ].sort();

    // search query support
    this.route.queryParams.subscribe(queryParams => {

      const query = queryParams['search'];

      if (query) {

        this.filteredProducts =
          this.products.filter(product =>

            product.name
              .toLowerCase()
              .includes(query.toLowerCase())

          );

      } else {

        this.filteredProducts = [...this.products];

      }

      this.paginationService.calculateTotalpages(
        this.filteredProducts.length
      );

    });

    this.dealsOfWeek = this.SearchService.getDealsOfWeek();
  }



  toggleBrandFilter(brand: string) {
    const index = this.selectedBrands.indexOf(brand);

    if (index > -1) {
      this.selectedBrands.splice(index, 1);
    } else {
      this.selectedBrands.push(brand);
    }

    this.applyFilters();
  }

  applyFilters() {
    let list = [...this.products];

    // brand filter
    if (this.selectedBrands.length > 0) {
      list = list.filter(product =>
        this.selectedBrands.includes(product.brand)
      );
    }



    // price filter
    list = list.filter(product =>
      product.price >= this.minPrice &&
      product.price <= this.maxPrice
    );

    this.filteredProducts = list;

    this.paginationService.calculateTotalpages(
      this.filteredProducts.length
    );
  }



  openProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }









  featuredBrands = [
    { name: 'Ingco', link: '/brand/ingco' },
    { name: 'Total', link: '/brand/total' },
    { name: 'Bosch', link: '/brand/bosch' },
    { name: '3M', link: '/brand/3m' },
    { name: 'Stanley', link: '/brand/stanley' },
    { name: 'Edon', link: '/brand/edon' },
    { name: 'Tolsen', link: '/brand/tolsen' },
    { name: 'Makita', link: '/brand/makita' }
  ];

  // safety ppes
  ppeMainItems = [
    { name: "Hand Gloves", link: "/handgloves" },
    { name: "Safety Boots (Ankle)", link: "/safetyboots" },
    { name: "Safety Harness & Lanyards", link: "/safetyharnessandlanyards" },
    { name: "Fall Arrestors", link: "/fallarrestors" },
    { name: "Safety Eye Goggles", link: "/safetyeyegoogles" },
    { name: "Safety Shoes", link: "/safetyshoes" },
    { name: "Flash Lights", link: "/flashlights" },
    { name: "Head Lamps", link: "/headlamps" },
    { name: "Safety Rainwears", link: "/safetyrainwears" },
    { name: "Gas Detectors", link: "/gasdetectors" },
    { name: "Emergency Eye Wash Station", link: "/emergencyeyewash" },
    { name: "Spill Kits", link: "/spillkits" },
    { name: "First Aids", link: "/firstaids" },
    { name: "Tapes And Adhesives", link: "/tapesandadhesives" },
    { name: "Safety Signs", link: "/safetysigns" },
    { name: "Breathing Apparatus", link: "/breathingapparatus" },
    { name: "Lockout / Tagout (LOTO)", link: "/lockoutstations" },
  ];


  ppeBrands = [
    { name: "Beta", link: "/beta" },
    { name: "Dickies", link: "/dickies" },
    { name: "Portwest", link: "/portwest" },
    { name: "Redwings", link: "/redwings" },
    { name: "Safety Jogger", link: "/safetyjogger" },
    { name: "Super Steel", link: "/supersteel" },
    { name: "3M", link: "/threem" },
    { name: "MSA safety", link: "/msa" },
    { name: "Uvex", link: "/uvex" }
  ];

  ppeClothing = [
    { name: "Disposables", link: "/disposables" },
    { name: "Coveralls / Overalls", link: "/coveralls" },
    { name: "Reflective Jackets", link: "/reflectivevests" },
    { name: "Lab Coats", link: "/labcoats" },
    { name: "Fire-Resistant Suits", link: "/fireresistantwears" },
    { name: "Chemical-Resistant Wears", link: "/chemicalwears" },
    { name: "Cold Room Wears", link: "/coldroomwears" },
    { name: "Rainwears", link: "/rainwear" },
    { name: "Media Jackets", link: "/mediajackets" },
    { name: "Umbrellas", link: "/umbrellas" },
    { name: "Welding Protection Wears", link: "/weldingprotectionwears" }
  ];

  ppeSecurity = [
    { name: "Security Gears", link: "/securitygears" },
    { name: "Stanchions", link: "/stanchions" },
    { name: 'Walkie Talkies', link: '/walkietalkies' },
    { name: 'Metal Detectors', link: '/metaldetectors' },
    { name: 'Personal Safety', link: '/personalsafety' },
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


  // powertools

  powerToolCategories = [
    { name: 'Heat Guns', link: '/heatguns' },
    { name: 'Cutting Machines', link: '/cuttingmachines' },
    { name: 'Hand Mixers', link: '/handmixers' },
    { name: 'Angle Polishers', link: '/polishers' },
    { name: 'Spray Guns', link: '/sprayguns' },
    { name: 'Bag Closer Machines', link: '/bagclosermachines' },
    { name: 'Nailers', link: '/nailers' },
    { name: 'Trimmers', link: '/trimmers' },
    { name: 'General Gun Tools', link: '/generalguntools' },
    { name: 'Impulse Sealers', link: '/impulsesealers' },
    { name: 'Planers', link: '/planers' },
    { name: 'PPR And Threading Machines', link: '/pprandthreadingmachines' },
    { name: 'Power Crimping Tools', link: '/powercrimpingtools' },
    { name: 'Routers', link: '/routers' },
    { name: 'Sanders', link: '/sanders' },
    { name: 'Edge Binding Machines', link: '/edgebandingmachines' },
    { name: 'Wall Chasers', link: '/wallchasers' },
    { name: 'Vibrators', link: '/vibrators' },
    { name: 'Electric Pipe Benders', link: '/electricpipebenders' },
    { name: 'Airless-Sprayers', link: '/airlesssprayers' },
    { name: 'Electrical Cable Cutter', link: '/electricalcablecutters' },
    { name: 'Electrical Cable Pullers', link: '/electricalcablepullers' },



    // ✅ IMPORTANT
    { name: 'Combo Kits', link: '/combokits' }
  ];

  drillCategories = [
    { name: 'Corded Drills', link: '/cordeddrills' },
    {
      name: 'Cordless Drills & Drivers',
      link: '/cordlessdrillsanddrivers'
    },

    {
      name: 'Rotary Hammer Drills',
      link: '/rotaryhammerdrills',
      subCategories: [
        {
          name: 'Electrical Rotary Hammer Drills',
          link: '/electricalrotaryhammerdrills'
        },
        {
          name: 'Cordless Rotary Hammer Drills',
          link: '/cordlessrotaryhammerdrills'
        }
      ]
    },

    { name: 'Drill Presses', link: '/drillpresses' },
    { name: 'Magnetic Drills', link: '/magneticdrills' },
    { name: 'Core Drills', link: '/coredrills' },
    { name: 'Earth Augers', link: '/earthaugers' }
  ];



  grinderCategories = [
    {
      name: 'Angle Grinders', link: '/anglegrinders',
      subCategories: [
        { name: 'Cordless Angle Grinders', link: '/cordlessanglegrinders' },
        { name: 'Electric Angle Grinders', link: '/electricanglegrinders' }
      ]
    },
    { name: 'Bench Grinders', link: '/benchgrinders' },
    { name: 'Die & Mini Grinders', link: '/dieandminigrinders' }
  ];


  sawCategories = [
    { name: 'Circular Saws', link: '/circularsaws' },
    { name: 'Jig Saws', link: '/jigsaws' },
    { name: 'Reciprocating Saws', link: '/reciprocatingsaws' },
    { name: 'Table Saws', link: '/tablesaws' },
    { name: 'Mitre Saws', link: '/mitresaws' },
    { name: 'Chain Saws', link: '/chainsaws' },
    { name: 'Band Saws', link: '/bandsaws' },
    { name: 'Cut-off Saws', link: '/cutoffsaws' },
  ];

  impactWrenchCategories = [
    { name: 'Cordless Impact Wrenches', link: '/cordlessimpactwrenches' },
    { name: 'Electric Impact Wrenches', link: '/electricimpactwrenches' },
    { name: 'Pneumatic Impact Wrenches', link: '/pneumaticimpactwrenches' }
  ];

  jackHammerCategories = [
    { name: 'Demolition Breakers', link: '/demolitionbreakers' },
    { name: 'Pneumatic Jack Hammers', link: '/pneumaticjackhammers' },
    { name: 'Gasoline Jack Hammers', link: '/gasolinejackhammers' },

  ];


  powerToolPressureWashers = {
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
      { name: 'Karcher', link: '/karcher' },
      { name: 'Total', link: '/total' }
    ],
    accessories: {
      name: 'Pressure Washer Accessories',
      link: '/pressurewashersaccessories'
    }
  };

  blowerCategories = [
    { name: 'Cordless Blowers', link: '/cordlessblowers' },
    { name: 'Electric Blowers', link: '/electricblowers' },
    { name: 'Gasoline Blowers', link: '/gasolineblowers' }
  ];

  blowerBrands = [
    { name: 'Bosch', link: '/bosch-blowers' },
    // { name: 'Makita', link: '/makita-blowers' },
    { name: 'Ingco', link: '/ingco-blowers' },
    { name: 'Total', link: '/total-blowers' }
  ];



  powerBrands = [
    { name: 'Ingco', link: '/ingco' },
    { name: 'Maxmech', link: '/maxmech' },
    { name: 'Total', link: '/total' },
    { name: 'Makita', link: '/makita' },
    { name: 'Bosch', link: '/bosch' },
    { name: 'Dewalt', link: '/dewalt' },
    { name: 'Stanley', link: '/stanley' },
    { name: 'Edon', link: '/edon' },
    { name: 'Powerflex', link: '/powerflex' }
  ];

  // sealants and adhesives

  sealantAdhesiveCategories = [
    { name: 'Silicone Sealants', link: '/siliconesealants' },
    { name: 'PU (Polyurethane) Sealants', link: '/pufoamsealants' },
    { name: 'Epoxy Adhesives', link: '/epoxyadhesives' },
    { name: 'Construction Adhesives', link: '/constructionadhesives' },
    { name: 'Glues', link: '/glues' },
    { name: 'Contact Adhesives', link: '/contactadhesives' },
    { name: 'Waterproof Sealants', link: '/waterproofsealants' },
    { name: 'Caulking & PU Foam Guns', link: '/caulkingfoamguns' },
    { name: 'Gums', link: '/gums' }
  ];


  marineOffshore = [
    { name: 'Dredge Pipe Floaters', link: '/dredgepipefloaters' },
    { name: 'Life Jackets', link: '/lifejackets' },
    { name: 'Life Vests', link: '/lifevests' },
    { name: 'Life Buoys', link: '/lifebuoys' },
    { name: 'Marine Safety Equipment', link: '/marinesafetyequipment' }
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
    { name: 'Wheel Chocks', link: '/wheelchokes', count: '' },
    { name: 'Cable Ramps', link: '/cableramps', count: '' },
    { name: 'Convex Mirrors', link: '/convexmirrors', count: '' },
    { name: 'Inspection Mirrors', link: '/inspectionmirrors', count: '' },
    { name: 'Metal Detectors', link: '/metaldetectors', count: '' },
    { name: 'Traffic Control Systems', link: '/trafficcontrolsystems', },
    { name: 'Traffic And Solar Lights', link: '/trafficandsolarlights', }
  ];

  fireSafetyCategories = [
    { name: 'Fire Extinguishers', link: '/fireextinguishers', count: '' },
    { name: 'Fire Blankets', link: '/fireblankets', count: '' },
    { name: 'Smoke & Fire Alarms', link: '/smokeandfirealarms', count: '' },
    { name: 'Fire Hose', link: '/firehose', count: '' },
    { name: 'Fire Hose Cabinet', link: '/firehosecabinet', count: '' },
    { name: 'Emergency Fire Systems', link: '/emergencyalertsystems', count: '' }
  ];

  // workshop and garage
  workshopGarageCategories = [
    { name: 'Tool Cabinets', link: '/toolscabinets' },
    { name: 'Work Bench vices', link: '/workbenches' },
    { name: 'Air Compressors', link: '/aircompressors' },
    { name: 'Auto Air Compressors', link: '/autoaircompressors' },
    { name: 'Air Compressor Accessories', link: '/aircompressoraccessories' },
    { name: 'Power Extension & Reels', link: '/powerextensionandreels' },
    { name: 'Tool Sets', link: '/toolsets' },
    { name: 'Car Creepers', link: '/carcreepers' },
    { name: 'Grease Buckets', link: '/greasebuckets' },
    { name: 'Testing Buckets', link: '/testingbuckets' },
    { name: 'Rotary Hand Pumps', link: '/rotarypumps' },
    { name: 'hydraulic shop press', link: '/hydraulicshoppress' },
    { name: 'Pressure Kits', link: '/pressurekits' },
    { name: 'Engines & Motors', link: '/enginesandmotors' },
    { name: 'Wheel Chokes', link: '/wheelchokes', },
    { name: 'Oil Extractors & Drainers', link: '/oilextractorsanddrainers' },
    { name: 'Hydraulic Pump', link: '/hydraulicpumps', },
    { name: 'General Automotive Tools', link: '/generalautomotivetools', },



  ];

  liftingHandlingCategories = [
    { name: 'Jacks & Lifts', link: '/jackandlifts' },
    { name: 'Chain Blocks & Hoists', link: '/chainblocksandhoists' },
    { name: 'Drum Handling Equipment', link: '/drumhandlingequipments' },
    { name: 'Engine Cranes', link: '/enginecranes' },
    { name: 'Lifting Belts', link: '/liftingbelts' },
    { name: 'Pallet Trucks', link: '/palletetrucks' },
    { name: 'Pallet Stackers', link: '/palletestackers' },
    { name: 'Trolleys', link: '/trolleys' },
    { name: 'Veritcal Clamps', link: '/verticalclamps' }
  ];

  wheelServiceCategories = [
    { name: 'Wheel Balancers', link: '/wheelbalancers' },
    { name: 'Wheel Alignment Gauges', link: '/wheelalignmentguages' },
    { name: 'Wheel Chocks', link: '/wheelchocks' },
    { name: 'Wheel Locks', link: '/wheelocks' },
    { name: 'Tire Changers', link: '/tirechangers' },
    { name: 'General Automotive Tools & Equipment', link: '/generalautomotivetools' }
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
    { name: 'Auto Air Compressors', link: '/autoaircompressors' },
    { name: 'Cable Wires & Cable Boosters', link: '/cablewireandboosters' },
    // { name: 'Extension Cable Wires', link: '/extensioncablewires' },
    { name: 'Plasma Cutters', link: '/plasmacutters' },
    { name: 'Air Compressors', link: '/aircompressors' },
    { name: 'Battery Testers', link: '/batterytesters' },
    { name: 'Battery Chargers', link: '/batterychargers' },
    { name: 'Jumper Starters', link: '/jumperstarters' },
    { name: 'Soldering Equipment', link: '/solderingequipment' },
  ];

  generatorCategories = [
    { name: 'Desiel Generators', link: '/desielgenerators' },
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

      items: [
        { name: 'General Meters', link: '/generalmeters' },
        { name: 'General Testers', link: '/generaltesters' },
        { name: 'Multimeters', link: '/multimeters' },
        { name: 'Digital Clamp Meters', link: '/clampmeters' },
        { name: 'Battery Testers', link: '/batterytesters' },
        { name: 'Measuring Tapes', link: '/measuringtapes' },
        { name: 'Dial Indicators', link: '/dialindicators' },
        { name: 'General Gauges', link: '/generalgauges' },
        { name: 'Measuring Wheels', link: '/measuringwheels' },
        { name: 'General Testers', link: '/generaltesters' },
        { name: 'GPS Trackers', link: '/gpstrackers' },
        { name: 'Infrared Thermometers', link: '/infraredthermometers' },
        { name: 'Digital Thermometers', link: '/digitalthermometers' },
        { name: 'Scanners And Detectors', link: '/scannersanddetectors' },
        { name: 'Thickness Gauges', link: '/thicknessgauges' },
        { name: 'Gas Detectors', link: '/gasdetectors' },
        { name: 'Digital Multimeters', link: '/digitalmultimeters' },
        { name: 'Dial Bore Gauges', link: '/dialboregauges' },
        { name: 'Gas Analyzers', link: '/gasanalyzers' },
        { name: 'Dipping Tape', link: '/dippingtape' },
      ],

      children: [

        {
          name: 'Calipers',
          id: 'calipers',

          items: [
            { name: 'Digital Calipers', link: '/digitalcalipers', number: 5 },
            { name: 'Vernier Calipers (Analogue)', link: '/verniercalipers', number: 5 }
          ]
        },

        {
          name: 'Micrometers',
          id: 'micrometers',

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

      items: [
        { name: 'Water Testers', link: '/watertesters' },
        { name: 'Alcohol Testers', link: '/alcoholtesters' },
        { name: 'pH Meters', link: '/phmeters' },
        { name: 'Concrete Testers', link: '/concretemeters' },
        { name: 'Testing Buckets', link: '/testingbuckets' },
        { name: 'Moisture Testers', link: '/moisturetesters' },
        { name: 'Moisture Analyzers', link: '/moistureanalyzers' },
        { name: 'Centrifuges', link: '/centrifuges' }
      ]
    },

    {
      name: 'Leveling Tools',
      id: 'levelingTools',

      items: [
        { name: 'Spirit Levels', link: '/spiritlevels' },
        { name: 'Dumpy Levels (Auto Levels)', link: '/dumpinglevels' },
        { name: 'Survey Poles And Tripods', link: '/surveytripods' },
        { name: 'Laser Distance Meters', link: '/laserdistancemeters' },
        { name: 'Laser Levels', link: '/laserlevels' },
        { name: 'Survey Instruments', link: '/surveyinstruments' }
      ]
    },

    {
      name: 'Measuring Scales',
      id: 'measuringScales',

      children: [

        {
          name: 'Analogue Scales',
          id: 'analogueScales',
          items: [
            { name: 'Spring Balances', link: '/springbalances' },
            { name: 'Beam Balances', link: '/beambalances' },
            { name: 'Mechanical Platform Scales', link: '/mechanicalplatformscales' },
            { name: 'Analogue Kitchen Scales', link: '/analoguekitchenscales' }

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


        },




        {
          name: 'Scale Accessories', link: '/scaleaccessories'
        }


      ]

    },


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
    { name: 'Tool Bags', link: '/toolbags' },
    { name: 'Tool Boxes', link: '/toolboxes' },
    { name: 'Tool Cabinets', link: '/toolscabinets' },
    { name: 'Hand Riveters', link: '/handriveters' },
    { name: 'Crimping Tools', link: '/crimpingtools' },
    { name: 'Tiles Cutters', link: '/tilescutters' },
    { name: 'General Drivers', link: '/drivers' },
    { name: 'Flaring Tools', link: '/flaringtools' },
    { name: 'Bearing Pullers', link: '/bearingpullers' },
    { name: 'Toolssets', link: '/toolssets' },
    { name: 'Hand Saws', link: '/handsaws' },
    { name: 'Hole Saws', link: '/holesaws' },
    { name: 'Allen Keys', link: '/allenkeys' },
    { name: 'putty knives', link: '/puttyknife' },
    { name: 'Staple Guns', link: '/stapleguns' },
    { name: 'Tap And Die', link: '/tapanddie' },
    { name: 'Hand Grease Guns', link: '/handgreaseguns' },
    { name: 'Air Nail Guns', link: '/airnailguns' },
    { name: 'Manual Spray Guns', link: '/manualsprayguns' },
    { name: 'Door Hardware', link: '/doorhardware' },
    { name: 'Suction Cups', link: '/suctioncups' },
    { name: 'Pipe Threaders', link: '/pipethreaders' },
    { name: 'Cable Puller Sand Fish Tapes', link: '/cablepullersandfishtapes' },
    { name: 'Pipe Cutters', link: '/pipecutters' },
    { name: 'Cable Cutters', link: '/cablecutters' },
    { name: 'pipe benders', link: '/pipebenders' },
    { name: 'Torque Wrenches', link: '/torquewrenches' },
    { name: 'Plastering Tools', link: '/plasteringtools' },
    { name: 'Hand Gear Winches ', link: '/handgearwinches' },


  ];

  handToolAccessories = [
    { name: 'Drill Bits', link: '/drillbits' },
    { name: 'Saw Blades', link: '/sawblades' },
    { name: 'Sanding Pads', link: '/sandingpads' },
    { name: 'Polishing Pads & Buffers', link: '/polishingpadsandbuffers' },
    { name: 'Cutting & Grinding Disc', link: '/cuttingandgrindingdiscs' },
    { name: 'Screw Driver Bits', link: '/screwdriverbits' },
    { name: 'Grinding Stones And Wheels', link: '/grindingstonesandwheels' },
    { name: 'Core Cutters And Bits', link: '/corecuttersandbits' },
    { name: 'Router Bits', link: '/routerbits' },

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
    { name: 'Plate Compactors', link: '/platecompactors' },
    { name: 'Concrete Vibrators', link: '/concretevibrators' },
    { name: 'Power Trowels', link: '/powertrowels' },
    { name: 'Testing Equipment', link: '/testingequipment' },
    { name: 'Fall Arrestors', link: '/fallarresters' },
    { name: 'Poker Hoses', link: '/pokerhoses' },
    { name: 'Rebar Machines', link: '/rebarmachines' },
    { name: 'Drum Trucks', link: '/drumtrucks' },
    { name: 'Concrete Pumps', link: '/concretepumps' },
    { name: 'Drum Roller Compactors', link: '/drumrollercompactors' },
    { name: 'Road Marking  Machines', link: '/roadmarkingmachines' },
    { name: 'Concrete Screeders', link: '/concretescreeders' },
    { name: 'generalconcreteequipment', link: '/generalconcreteequipment' },
  ];


  Lubricantschemicalandprotectivesprayers = [
    {
      name: 'Chemical Applications And Sprayer', link: '/chemicalapplicationsandsprayers'
    },

    {
      name: 'Lubricants', link: '/lubricants'
    },
    {
      name: 'Spray Paints', link: '/spraypaints'
    }
  ];

  // pumping machines
  pumpingMachines = [
    { name: 'Water Pumps', link: '/waterpumps' },
    { name: 'Submersible Pumps', link: '/submersiblepumps' },
    { name: 'Fuel Transfer Pumps', link: '/fueltransferpumps' },
    { name: 'Hand Rotary Pumps', link: '/rotarypumps' },
    { name: 'Pressure Pumps', link: '/pressurepumps' },
    { name: 'Vacuum Pumps', link: '/vacuumpumps' }
  ];

  // Cleaning and garden supplies
  cleaningGardenSupplies = {
    main: [
      { name: 'Cleaning Accessories', link: '/cleaningaccessories' },
      { name: 'Scrubbers And Sweepers', link: '/scrubbersandsweepers' },
      { name: 'Garden Sprinklers', link: '/gardensprinklers' },
      { name: 'Knapsack Sprayers', link: '/knapsacksprayers' },
      { name: 'Steam Cleaner Machines', link: '/steamecleanermachines' },
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
        { name: 'Karcher', link: '/karcher' },
        { name: 'Total', link: '/total' },
      ],
      accessories: { name: 'pressure Washer Accessories', link: '/pressurewashersaccessories' }
    },

    blowers: {
      categories: this.blowerCategories,
      brands: this.blowerBrands
    },

    hose: [
      { name: 'Water And Pump Hose', link: '/waterandpumphose' },
      { name: 'Pressure Hose', link: '/pressurehose' },
      { name: 'Hose Accessories', link: '/hoseaccessories' },
      { name: 'Hydraulic Hose', link: '/hydraulichose' },
      { name: 'Hose Reels', link: '/hosereels' }
    ],

    vacuumCleaners: {
      categories: [
        { name: 'Cyclone Vacuum Cleaners', link: '/cyclonevacuumcleaners' },
        { name: 'Wet & Dry Vacuum Cleaners', link: '/wetanddryvacuumcleaners' },
        { name: 'Industrial Vacuum Cleaners', link: '/industrialvacuumcleaners' }
      ],
      brands: [
        { name: 'Ingco', link: '/ingco' },
        { name: 'Total', link: '/total' },
        { name: 'Bosch', link: '/bosch' }
      ]
    },

    lawnMowers: {
      categories: [
        { name: 'Gasoline Lawn Mowers ', link: '/gasolinelawnmowers' },
        { name: 'Electric And Cordless Lawn Mowers', link: '/electricandcordlesslawnmowers' }
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
      accessories: { name: 'Brush Cutter Accessories', link: '/brushcutteraccessories' }
    }
  };

  // farm equipments

  farmCategories = [
    { name: 'Farm Machines', link: '/farmmachines' },
    { name: 'Farm Tools', link: '/farmtools' },
    { name: 'Knapsack Sprayers', link: '/knapsacksprayers' },
    { name: 'Agro Chemicals', link: '/agrochemicals' },
  ];


}





