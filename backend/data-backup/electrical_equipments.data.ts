import { Product } from '../models/Product';

export const ELECTRICAL_EQUIPMENTS_PRODUCTS: Product[] = [


    // Electrical equipments
    // starts at 11001 
    // ends at 13000

    {
        id: 11001,
        name: 'Ingco Lithium Battery FBLI2002 – 4Ah 20V (P20S)',
        category: 'batteries',
        group: 'Electrical Equipments',
        brand: 'Ingco',
        price: 50000,


        images: [
            'assets/img/battery and battery chargers/Ingco  Battery - 4ah - 20v.webp',
            'assets/img/battery and battery chargers/Ingco  Battery - 4ah - 20v.webp-4.jpg',
            'assets/img/battery and battery chargers/Ingco  Battery - 4ah - 20v.webp-5.jpg',
            'assets/img/battery and battery chargers/Ingco  Battery - 4ah - 20v.webp2.jpeg',
            'assets/img/battery and battery chargers/Ingco  Battery - 4ah - 20v.webp3.webp'

        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
The Ingco FBLI2002 20V 4.0Ah Lithium-Ion Battery is a high-performance power source designed for use with all Ingco P20S cordless tools. It provides reliable and long-lasting energy, making it ideal for both professional and DIY applications.
With a 4.0Ah capacity, this battery delivers extended runtime, allowing users to work longer without frequent recharging. It is suitable for tools such as drills, angle grinders, saws, and other cordless equipment.
The battery features advanced lithium-ion technology with no memory effect, ensuring consistent performance and longer lifespan. It also includes built-in protection against overcharging, overheating, and overload, enhancing safety during use.
An LED battery level indicator allows users to easily monitor remaining power, improving efficiency on the job. This battery is a reliable and essential accessory for anyone using Ingco 20V cordless tools.
`,

        specification: `
  - Product Name: Lithium-Ion Battery
  - Model: FBLI2002
  - Voltage: 20V
  - Capacity: 4.0Ah
  - Battery Type: Lithium-Ion
  - Compatibility: Ingco P20S Tools
  - Indicator: LED battery level indicator
  - Protection: Overcharge, overheat, overload protection
  - Weight: Approx. 0.6 – 0.7 kg
  - Usage: Power supply for cordless tools
  `,

        features: `
  - High-capacity 4.0Ah for longer runtime
  - Compatible with all Ingco P20S tools
  - No memory effect for efficient charging
  - LED battery indicator for power monitoring
  - Built-in safety protection system
  - Durable and long-lasting performance
  - Lightweight and easy to handle
  - Fast charging capability (with compatible charger)
  - Ideal for professional and DIY use
  `
    },


    {
        id: 11002,
        name: 'Maxmech Battery Charger BC650 – 12V/24V Heavy Duty Booster',
        category: 'battery-chargers',
        group: 'Electrical Equipments',
        brand: 'Maxmech',
        price: 150000,


        images: [
            'assets/img/battery and battery chargers/maxmech cd 650-battery tester.jpg',
            'assets/img/chargers/maxmech-bc650-2.jpg',
            'assets/img/chargers/maxmech-bc650-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
The Maxmech BC650 Battery Charger is a heavy-duty professional charger designed for charging and boosting 12V and 24V lead-acid batteries. It is suitable for cars, trucks, agricultural equipment, and industrial applications.
This charger features a powerful boost function that allows for quick charging and engine starting support, making it ideal for workshops, mechanics, and fleet operators.
Built with a durable and portable design, it comes with wheels and handles for easy movement, especially in workshop environments. The charger includes an ampere meter for monitoring charging levels and a selector switch for normal or fast charging modes.
With support for both 12V and 24V systems, the BC650 is versatile enough to handle a wide range of vehicles, from small cars to heavy-duty trucks. It also features strong insulated clamps for secure and safe battery connection.
This charger is reliable, efficient, and essential for automotive and industrial battery maintenance.
`,

        specification: `
  - Product Name: Battery Charger Booster
  - Model: BC650
  - Voltage: 12V / 24V
  - Input Voltage: 230V
  - Frequency: 50Hz
  - Charging Capacity: Up to 1000Ah
  - Charging Current: Approx. 60–75A
  - Boost Function: Yes (engine start support)
  - Display: Analog ampere meter
  - Mobility: Wheels and handle
  - Battery Type: Lead-acid / Sealed lead-acid
  - Usage: Cars, trucks, industrial batteries
  `,

        features: `
  - Dual voltage (12V/24V) compatibility
  - Heavy-duty charging and boost function
  - Fast and efficient battery charging
  - Built-in ampere meter for monitoring
  - Durable and portable with wheels
  - Strong insulated clamps for safety
  - Suitable for cars, trucks, and heavy equipment
  - Reliable for workshop and industrial use
  - Easy-to-use control system
  `
    },


    {
        id: 11003,
        name: 'Powerflex MMA 300ES Waterproof Welding Machine',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Powerflex',

        model: 'MMA 300ES',
        price: 260000,
        inStock: true,

        images: [
            'assets/img/welding machines/Powerflex Welder MMA 300ES Welding Machine-1.png',
            'assets/img/welding machines/Powerflex Welder MMA 300ES Welding Machine-3.png',
            'assets/img/welding machines/Powerflex Welder MMA 300ES Welding Machine-2.png'
        ],

        description: `The Powerflex MMA 300ES Waterproof Welding Machine is a compact inverter welding machine designed for professional and industrial welding applications. It features advanced IGBT inverter technology, stable arc performance, energy efficiency, and a durable waterproof construction suitable for demanding work environments.`,

        specification: `
Model: MMA 300ES
Brand: Powerflex
Machine Type: Inverter Arc Welding Machine
Technology: IGBT Inverter
Input Voltage: 220V - 240V, 50/60Hz
Output Current Range: 20A - 300A
Rated Output Current: 300A
Duty Cycle: 60%
Protection Class: IP21S
Insulation Class: F
Electrode Diameter: 1.6mm - 5.0mm
Cooling System: Forced Air Cooling
Waterproof Design: Yes
Display Type: Digital Display
Application: Steel Fabrication, Construction, Maintenance, Workshop and Industrial Welding

Accessories Included:
• Electrode Holder Cable
• Earth Clamp Cable
• Welding Machine
• Carrying Strap
• User Manual
`,

        features: `
• Advanced IGBT inverter technology
• Waterproof and durable construction
• Digital current display
• Stable welding arc
• Energy-efficient performance
• Hot Start function
• Anti-Stick protection
• Overload and overheating protection
• Lightweight and portable design
• Suitable for various electrode sizes
`,

        power: '300A',

        showSimilar: true
    },

    {
        id: 11004,
        name: 'Maxmech Air Compressor BA 1500-80 – 80L 1500W',
        category: 'air-compressors',
        group: 'Electrical Equipments',
        brand: 'Maxmech',
        price: 450000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274241/Astonic-Mart/Products/air%20compressors/maxmech_air_compressor-80l.jpg',
            'assets/img/aircompressors/maxmech-80l-2.jpg',
            'assets/img/aircompressors/maxmech-80l-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
The Maxmech BA 1500-80 Air Compressor is a heavy-duty 80-litre air compressor designed for professional and industrial applications. It is ideal for workshops, automotive repair, spray painting, tyre inflation, and powering pneumatic tools.
Powered by a 1500W motor, this compressor delivers reliable and consistent air pressure for continuous operation. The large 80-litre tank ensures sufficient air storage, reducing the need for frequent refilling and improving work efficiency.
It features a maximum pressure of 8 bar, making it suitable for a wide range of tasks including spray painting, air tools operation, and cleaning applications.
The compressor is built with a durable metal tank and comes with wheels for easy mobility within workshops. It also includes a pressure gauge and control system for monitoring and adjusting air output.
This air compressor is a reliable and essential machine for mechanics, technicians, and industrial users who require steady and powerful air supply.
`,

        specification: `
  - Product Name: Air Compressor
  - Model: BA 1500-80
  - Power: 1500W
  - Voltage: 220–240V
  - Frequency: 50/60Hz
  - Tank Capacity: 80 Litres
  - Maximum Pressure: 8 Bar
  - Speed: Approx. 1050 rpm
  - Air Delivery: Approx. 170 L/min
  - Mobility: Wheels for easy movement
  - Usage: Workshop, automotive, spray painting, industrial
  `,

        features: `
  - Large 80L tank for longer operation
  - Powerful 1500W motor
  - High air delivery for pneumatic tools
  - Durable and heavy-duty construction
  - Easy mobility with wheels
  - Stable and reliable performance
  - Suitable for professional and industrial use
  - Pressure control and monitoring system
  - Ideal for spray painting and tyre inflation
  `
    },

    {
        id: 11005,
        name: 'Ingco Car Air Compressor AAC2508 – 12V Twin Cylinder',
        category: 'auto-air-compressors',
        group: 'Electrical Equipments',
        brand: 'Ingco',
        price: 95000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274137/Astonic-Mart/Products/air%20compressors/Ingco_auto_compressor-120psi.jpg',
            'assets/img/aircompressors/ingco-aac2508-2.jpg',
            'assets/img/aircompressors/ingco-aac2508-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The Ingco AAC2508 12V Car Air Compressor is a portable and high-performance twin cylinder air compressor designed for fast and efficient tyre inflation.It is ideal for cars,SUVs,and light trucks,making it perfect for emergency roadside use and everyday convenience.The powerful dual-cylinder motor delivers faster airflow and higher efficiency compared to single-cylinder compressors,allowing you to inflate tyres quickly and easily.It connects directly to your vehicle battery using heavy-duty clamps,ensuring stable power supply during operation.The compressor is built with a durable metal body for long-lasting performance and features a pressure gauge for accurate monitoring.It also comes with an air hose and nozzle accessories,making it suitable for inflating tyres,sports equipment,and other inflatables.This compact and portable compressor is an essential tool for every vehicle owner.`,

        specification: `
  - Product Name: Car Air Compressor
  - Model: AAC2508
  - Voltage: 12V DC
  - Type: Twin Cylinder
  - Power Source: Car Battery (Crocodile Clamps)
  - Max Pressure: Approx. 150 PSI
  - Air Flow: High-speed inflation
  - Hose: Heavy-duty air hose
  - Accessories: Nozzles included
  - Usage: Car tyres, SUV, light truck, inflatables
  `,

        features: `
  - Twin cylinder for faster inflation
  - Portable and easy to carry
  - Connects directly to car battery
  - Durable metal construction
  - High pressure output
  - Accurate pressure gauge
  - Multi-purpose use
  - Easy to operate
  - Ideal for emergency situations
  `
    },

    {
        id: 11006,
        name: 'TOTAL Auto Air Compressor 12V (TTAC1406)',
        category: 'auto-air-compressors',
        group: 'Electrical Equipments',
        brand: 'TOTAL',
        model: 'TTAC1406',
        price: 80000,
        discountPrice: 75000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274258/Astonic-Mart/Products/air%20compressors/TOTAL_AUTO_AIR_COMPRESSOR_12V_TTAC1406.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274243/Astonic-Mart/Products/air%20compressors/TOTAL_AUTO_AIR_COMPRESSOR_12V_TTAC1406_-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274248/Astonic-Mart/Products/air%20compressors/TOTAL_AUTO_AIR_COMPRESSOR_12V_TTAC1406_-3.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274250/Astonic-Mart/Products/air%20compressors/TOTAL_AUTO_AIR_COMPRESSOR_12V_TTAC1406_-4.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274253/Astonic-Mart/Products/air%20compressors/TOTAL_AUTO_AIR_COMPRESSOR_12V_TTAC1406_-5.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274255/Astonic-Mart/Products/air%20compressors/TOTAL_AUTO_AIR_COMPRESSOR_12V_TTAC1406_-7.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The TOTAL TTAC1406 Auto Air Compressor is a compact and portable 12V tyre inflator designed for quick inflation of car tyres, motorcycles, bicycles, sports balls and other inflatables. It connects directly to a vehicle's 12V power outlet and delivers a maximum pressure of 140 PSI with an airflow rate of 35L/min. The built-in pressure gauge allows accurate monitoring during inflation, while the integrated LED light makes it convenient for roadside emergencies and nighttime use. Its lightweight design and included accessories make it an essential tool for every vehicle owner.`,

        specification: `
  - Product Name: Auto Air Compressor
  - Brand: TOTAL
  - Model: TTAC1406
  - Power Supply: DC 12V
  - Rated Current: 10A
  - Maximum Pressure: 140 PSI (10 Bar)
  - Air Flow Rate: 35 L/min
  - Pressure Accuracy: ±1 PSI
  - Power Cord Length: 3m
  - Weight: 1.75kg
  - Built-in Pressure Gauge: Yes
  - LED Work Light: Yes
  - Power Source: Vehicle Cigarette Lighter Socket
  - Application: Cars, Motorcycles, Bicycles, Balls and Inflatables

    accessories:
  - 1 x TOTAL TTAC1406 Air Compressor
  - 1 x 3m Power Cord with Cigarette Lighter Plug
  - 1 x Battery Clip Set
  - 4 x Nozzle Adapters
  - 1 x Air Hose
  - 1 x User Manual
  `,

        features: `
  - Fast tyre inflation performance
  - Maximum pressure of 140 PSI
  - High airflow rate of 35L/min
  - Built-in pressure gauge
  - Integrated LED light for emergencies
  - Compact and lightweight design
  - Easy operation through vehicle 12V socket
  - Suitable for multiple inflation tasks
  - Portable and easy to store
  - Ideal for roadside emergencies and travel
  `,

    },


    {
        id: 11007,
        name: 'Ingco Booster Cable HBTCP2001 – Heavy Duty Jump Starter Cable',
        category: 'cable-wire-and-boosters',
        group: 'Electrical Equipments',
        brand: 'Ingco',
        price: 18000,

        variations: [
            { size: '200A', price: 18000, inStock: true }
        ],

        images: [
            'assets/img/cablewires/ingco booster cable HBTCP2001.jpg3.jpg',
            'assets/img/automotive/hbtcp2001-2.jpg',
            'assets/img/automotive/hbtcp2001-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The Ingco HBTCP2001 Booster Cable is a heavy-duty jump starter cable designed for transferring power from one vehicle battery to another in emergency situations.It is ideal for cars,SUVs,and light vehicles with low or dead batteries.The cable is made with high-quality copper-clad aluminum wires to ensure efficient conductivity and reliable performance.It features strong insulated clamps that provide a secure grip on battery terminals,ensuring safe and stable connections during use.The thick insulation protects against heat and wear,making it durable for repeated use.This booster cable is compact,flexible,and easy to store in your vehicle,making it an essential emergency tool for every driver.`,

        specification: `
  - Product Name: Booster Cable
  - Model: HBTCP2001
  - Current Rating: 200A
  - Cable Length: Approx. 2.5–3 meters
  - Material: Copper-clad aluminum
  - Clamp Type: Heavy-duty insulated clamps
  - Voltage: 12V systems
  - Usage: Jump starting vehicles
  `,

        features: `
  - Heavy-duty 200A capacity
  - Strong insulated clamps for secure connection
  - High conductivity cable
  - Durable and heat-resistant insulation
  - Flexible and easy to handle
  - Compact and portable design
  - Ideal for emergency use
  - Suitable for cars and light vehicles
  - Reliable performance
  `
    },


    {
        id: 11008,
        name: 'Maxmech Plasma Cutter CUT-100 – 100A Industrial Cutting Machine',
        category: 'plasma-cutters',
        group: 'Electrical Equipments',
        brand: 'Maxmech',
        price: 650000,

        images: [
            'assets/img/welding machines/maxmech cut 100 plasma cutter.jpg',
            'assets/img/welding/maxmech-cut100-2.jpg',
            'assets/img/welding/maxmech-cut100-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The Maxmech CUT-100 Plasma Cutter is a heavy-duty industrial cutting machine designed for precise and efficient cutting of various conductive metals including steel,stainless steel,and aluminium.It delivers up to 100A output power,making it suitable for professional fabrication,construction,and workshop applications.The machine uses advanced inverter technology to ensure stable arc performance,high efficiency,and reliable operation even under demanding conditions.It features high-frequency arc ignition for smooth and contactless cutting,improving accuracy and reducing material damage.The CUT-100 is capable of cutting thick metal materials up to approximately 30mm depending on usage conditions,making it ideal for heavy-duty tasks.It is built with overload and thermal protection systems to enhance safety and durability.The compact and portable design allows easy movement within the workshop,while maintaining strong performance for continuous operation.`,

        specification: `
  - Product Name: Plasma Cutter
  - Model: CUT-100
  - Output Current: Up to 100A
  - Input Voltage: 3 Phase 380V
  - Technology: IGBT Inverter
  - Cutting Thickness: Up to 30mm (approx.)
  - Arc Start: High-frequency (HF)
  - Duty Cycle: Approx. 60%
  - Cooling: Air cooling system
  - Usage: Industrial cutting, fabrication, construction
  `,

        features: `
  - Powerful 100A cutting performance
  - Cuts steel, stainless steel, and aluminium
  - High-frequency arc start for smooth cutting
  - Advanced inverter technology for efficiency
  - Stable arc and precise cutting results
  - Overload and thermal protection
  - Heavy-duty industrial design
  - Portable and easy to handle
  - Suitable for professional workshop use
  `
    },


    {
        id: 11009,
        name: 'Maxmech 7.5KVA Welding Generator WG350 – 350A Dual Function',
        category: 'petrol-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        brand: 'Maxmech',
        price: 988000,



        images: [
            'assets/img/generators/MAXMECH_7.5KVA_Welding_Generator_WG350.jpg',
            'assets/img/generators/MAXMECH_7.5KVA_Welding_Generator_WG350-3.png',
            'assets/img/generators/MAXMECH_7.5KVA_Welding_Generator_WG350-2.png'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The Maxmech WG350 7.5KVA Welding Generator is a powerful dual-purpose machine designed for both welding and electricity generation.It is ideal for construction sites,workshops,and industrial applications where reliable power and welding capability are required.This generator delivers strong welding performance while also supplying stable electrical output for tools and equipment.It is built with 100% copper coil for durability and efficient conductivity,ensuring long-lasting performance even under heavy use.The machine features a manual start system and a rugged design suitable for outdoor and site operations.With its high output capacity and fuel-efficient engine,it provides consistent power for welding,cooling fans,grinders,and other essential tools.This welding generator is a dependable solution for professionals who need mobility,performance,and versatility in one machine.`,

        specification: `
  - Product Name: Welding Generator
  - Model: WG350
  - Capacity: 7.5KVA
  - Rated Power: Approx. 5.0KW
  - Max Power: Approx. 5.5KW
  - Voltage: 230V
  - Frequency: 50–60Hz
  - Welding Output: Up to 350A
  - Coil: 100% Copper
  - Start System: Manual
  - Function: Welding + Power Generation
  - Usage: Construction, workshop, industrial
  `,

        features: `
  - Dual function (generator + welding machine)
  - High 350A welding output
  - Strong 7.5KVA power capacity
  - 100% copper coil for durability
  - Fuel-efficient engine
  - Rugged and portable design
  - Stable power output for tools
  - Suitable for heavy-duty use
  - Ideal for construction and workshops
  `
    },

    {
        id: 11010,
        name: 'TOTAL Silent Diesel Generator 8.0KW TP280001 – 8KVA',
        category: 'desiel-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        brand: 'Total',
        price: 1800000,



        images: [
            'assets/img/generators/TOTAL Silent diesel generator 8.000W (TP280001).jpg',
            'assets/img/generators/total-tp280001-2.jpg',
            'assets/img/generators/total-tp280001-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The TOTAL TP280001 Silent Diesel Generator is a high-performance 8.0KW power generator designed for reliable and quiet operation in homes,offices,and industrial environments.It features a powerful diesel engine that delivers stable output power of up to 8KW with a rated output of 7.5KW,making it suitable for running multiple appliances and equipment efficiently.The generator is built with a soundproof enclosure to minimize noise during operation,ensuring a quieter working environment.It is equipped with an electric start system and a maintenance-free battery for easy operation.The unit includes an AVR voltage regulator for stable power supply and protection of sensitive devices.With a large 25-litre fuel tank,it provides long runtime and improved efficiency.The durable construction with copper coil alternator ensures long-lasting performance and reliability,while wheels and handles allow easy movement.This generator is ideal for backup power,construction sites,and commercial use.`,

        specification: `
  - Product Name: Diesel Generator
  - Model: TP280001
  - Power Output (Max): 8.0KW
  - Rated Output: 7.5KW
  - Voltage: 220–240V
  - Frequency: 50Hz
  - Phase: Single Phase
  - Engine: 4-Stroke Diesel
  - Engine Power: Approx. 13HP
  - Displacement: 668cc
  - Starting System: Electric Start
  - Fuel Tank Capacity: 25 Litres
  - Noise Level: Approx. 76dB
  - Cooling System: Air-cooled
  - Alternator: Copper Coil
  - Weight: Approx. 236 kg
  - Usage: Home, office, industrial backup
  `,

        features: `
  - Silent operation with soundproof enclosure
  - Powerful 8KW output capacity
  - Fuel-efficient diesel engine
  - Electric start for easy operation
  - AVR for stable voltage output
  - Large fuel tank for long runtime
  - Durable copper coil alternator
  - Strong and heavy-duty construction
  - Wheels and handles for mobility
  - Suitable for home and industrial use
  `
    },


    {
        id: 11011,
        name: 'TOTAL Inverter Generator 2.2KW TP530001 – Portable Silent Petrol',
        category: 'inverter-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        brand: 'Total',
        price: 450000,

        variations: [
            { size: '2.2KW', price: 450000, inStock: true }
        ],

        images: [
            'assets/img/generators/TOTAL INVERTER GASOLINE GENERATOR 2.200W (TP530001.jpg',
            'assets/img/generators/total-tp530001-2.jpg',
            'assets/img/generators/total-tp530001-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The TOTAL TP530001 Inverter Generator is a compact and fuel-efficient 2.2KW gasoline generator designed for portable and quiet power supply.It uses advanced inverter technology to produce clean and stable electricity,making it safe for sensitive electronics such as laptops,TVs,and mobile devices.The generator features a low-noise operation system,ideal for home use,camping,outdoor activities,and small business applications.It is equipped with an easy recoil start system and an eco-mode function that adjusts engine speed based on load,improving fuel efficiency and reducing noise.The lightweight and portable design with a carry handle makes it easy to transport and store.With reliable performance and modern inverter technology,this generator is perfect for users who need clean,powerful,and quiet electricity in a compact form.`,

        specification: `
  - Product Name: Inverter Generator
  - Model: TP530001
  - Max Power Output: 2.2KW
  - Rated Power: Approx. 2.0KW
  - Voltage: 220–240V
  - Frequency: 50Hz
  - Fuel Type: Petrol (Gasoline)
  - Starting System: Recoil Start
  - Technology: Inverter (Clean Power)
  - Noise Level: Low noise operation
  - Fuel Tank Capacity: Approx. 4–5 Litres
  - Runtime: Varies based on load
  - Portability: Lightweight with handle
  - Usage: Home, camping, electronics, small business
  `,

        features: `
  - Inverter technology for clean and stable power
  - Safe for sensitive electronics
  - Quiet operation for home and outdoor use
  - Fuel-efficient eco mode system
  - Compact and lightweight design
  - Easy recoil start
  - Portable with carry handle
  - Reliable performance
  - Ideal for backup and mobile power needs
  `
    },


    {
        id: 11012,
        name: 'Maxmech TIG/MMA-250 Welding Machine – 250A Inverter Dual Function',
        category: 'tig-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Maxmech',
        price: 320000,



        images: [
            'assets/img/welding machines/maxmech tigmma 250.jpg',
            'assets/img/welding/maxmech-tigmma250-2.jpg',
            'assets/img/welding/maxmech-tigmma250-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The Maxmech TIG/MMA-250 Welding Machine is a powerful dual-function inverter welder designed for both TIG and MMA welding applications.It uses advanced IGBT inverter technology to deliver stable arc performance,high efficiency,and reliable operation for professional and workshop use.The machine supports a wide current range up to 250A,making it suitable for welding stainless steel,carbon steel,iron,copper,and other metals.It features high-frequency arc start for smooth ignition and precise welding results.The compact and portable design allows easy movement while maintaining strong performance.The welder is equipped with multiple protection systems including overheat,overload,and voltage protection to ensure durability and safety during operation.With its dual functionality and strong output,this welding machine is ideal for fabrication,construction,and maintenance work.`,

        specification: `
  - Product Name: Welding Machine
  - Model: TIG/MMA-250
  - Output Current: Up to 250A
  - Input Voltage: 220–240V
  - Technology: IGBT Inverter
  - Welding Type: TIG / MMA (Stick)
  - Duty Cycle: Approx. 60%
  - No-load Voltage: Approx. 56–66V
  - Arc Start: High-frequency (HF)
  - Cooling: Fan-cooled system
  - Weight: Approx. 6–10 kg
  - Usage: Fabrication, construction, workshop
  `,

        features: `
  - Dual function TIG and MMA welding
  - Powerful 250A output
  - Advanced inverter technology for efficiency
  - Smooth and stable arc performance
  - High-frequency arc start
  - Lightweight and portable design
  - Overheat and overload protection
  - Suitable for multiple metals
  - Ideal for professional and DIY use
  `
    },

    {
        id: 11013,
        name: 'Maxmech MMA-500T Welding Machine – 500A Heavy Duty Inverter',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Maxmech',
        price: 480000,



        images: [
            'assets/img/welding machines/maxmech MMA-500T.jpg',
            'assets/img/welding/maxmech-mma500t-2.jpg',
            'assets/img/welding/maxmech-mma500t-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The Maxmech MMA-500T Welding Machine is a heavy-duty inverter arc welder designed for industrial and professional welding applications.It delivers powerful output up to 500A,making it suitable for welding thick metals and handling demanding fabrication tasks.The machine uses advanced inverter technology to ensure stable arc performance,efficient power consumption,and consistent welding results.It is ideal for welding steel,iron,and other ferrous materials in construction,workshops,and fabrication environments.The rugged and durable design allows it to withstand tough working conditions while remaining portable for easy movement.It features built-in protection systems including overheat,overload,and voltage protection to enhance safety and durability.This welding machine is a reliable choice for professionals who require strong performance and efficiency in heavy-duty operations.`,

        specification: `
  - Product Name: Welding Machine
  - Model: MMA-500T
  - Output Current: Up to 500A
  - Input Voltage: 220–240V / 380V (varies by model)
  - Technology: Inverter
  - Welding Type: MMA (Arc/Stick)
  - Duty Cycle: Approx. 60%
  - No-load Voltage: Approx. 60–75V
  - Cooling: Fan-cooled system
  - Usage: Industrial welding, fabrication, construction
  `,

        features: `
  - Powerful 500A output capacity
  - Suitable for heavy-duty welding
  - Stable arc performance
  - Energy-efficient inverter technology
  - Durable and rugged construction
  - Overheat and overload protection
  - Portable design
  - Ideal for thick metal welding
  - Reliable for industrial use
  `
    },

    {
        id: 11014,
        name: 'Maxmech MIG/MMA-250 Welding Machine – 250A Dual Function Inverter',
        category: 'mig-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Maxmech',
        price: 650000,


        images: [
            'assets/img/welding machines/maxmech migmma-250.jpg',
            'assets/img/welding machines/maxmech migmma-250.jpg-2.webp',
            'assets/img/welding/maxmech-migmma250-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The Maxmech MIG/MMA-250 Welding Machine is a versatile dual-function inverter welder designed for both MIG and MMA welding applications.It delivers up to 250A output,making it suitable for light to medium-duty fabrication,automotive work,and general welding tasks.The machine uses advanced inverter technology to provide stable arc performance,efficient energy consumption,and consistent welding results.It supports MIG welding for clean and fast welding with minimal spatter,as well as MMA welding for strong and reliable joints on various metals including steel and iron.The compact and portable design allows easy movement in workshops and job sites.It is equipped with built-in protection systems such as overheat,overload,and voltage protection to ensure safe and durable operation.This welding machine is ideal for professionals and DIY users who need flexibility and performance in one unit.`,

        specification: `
  - Product Name: Welding Machine
  - Model: MIG/MMA-250
  - Output Current: Up to 250A
  - Input Voltage: 220–240V
  - Technology: IGBT Inverter
  - Welding Type: MIG / MMA (Stick)
  - Duty Cycle: Approx. 60%
  - No-load Voltage: Approx. 50–60V
  - Wire Feed: Automatic (MIG)
  - Cooling: Fan-cooled system
  - Usage: Fabrication, automotive, workshop
  `,

        features: `
  - Dual function MIG and MMA welding
  - Clean MIG welding with less spatter
  - Powerful 250A output
  - Stable arc performance
  - Energy-efficient inverter technology
  - Portable and compact design
  - Built-in safety protection systems
  - Suitable for multiple metal types
  - Ideal for workshop and automotive use
  `
    },


    {
        id: 11015,
        name: 'Maxmech Arc Welding Machine 500A – Heavy Duty MMA Inverter',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Maxmech',
        price: 300000,

        images: [
            'assets/img/welding machines/arc welding 500.png',
            'assets/img/welding/maxmech-arc500-2.jpg',
            'assets/img/welding/maxmech-arc500-3.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The Maxmech Arc Welding 500A Machine is a heavy-duty inverter welding machine designed for professional and industrial applications.It delivers powerful output up to 500A,making it suitable for welding thick metals and handling demanding fabrication work.The machine uses advanced inverter technology to ensure stable arc performance,efficient power usage,and consistent welding results.It is ideal for welding steel,iron,and other ferrous materials in construction sites,workshops,and fabrication industries.The rugged design ensures durability in tough working environments while maintaining portability for easy movement.It is equipped with multiple protection systems including overheat,overload,and voltage protection to ensure safety and long service life.This welding machine is reliable,efficient,and built for heavy-duty performance.`,

        specification: `
  - Product Name: Arc Welding Machine
  - Model: ARC 500
  - Output Current: Up to 500A
  - Input Voltage: 220–240V / 380V (varies by model)
  - Technology: Inverter
  - Welding Type: MMA (Arc/Stick)
  - Duty Cycle: Approx. 60%
  - No-load Voltage: Approx. 60–75V
  - Cooling: Fan-cooled system
  - Usage: Industrial welding, fabrication, construction
  `,

        features: `
  - Powerful 500A output for heavy-duty welding
  - Stable arc and smooth performance
  - Energy-efficient inverter technology
  - Durable and rugged construction
  - Overheat and overload protection
  - Portable design for easy handling
  - Suitable for thick metal welding
  - Reliable for industrial use
  - Ideal for professional welders
  `
    },


    {
        id: 11016,
        name: 'Gloor Welding Torch',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Gloor',
        price: 30100,

        images: [
            'assets/img/welding accessories/gloor torch welding torch.jpg',
        ],

        inStock: true,
        description: 'This Gloor Welding Torch is a professional-grade gas welding and cutting torch designed for precision flame control, durability, and efficient metalworking applications. Manufactured with high-quality metal components and a robust nickel-plated body, it offers excellent resistance to heat, corrosion, and wear, making it suitable for continuous industrial and workshop use.\n\nThe torch is engineered for various welding operations including gas welding, brazing, soldering, heating, and metal cutting applications. Its lightweight ergonomic construction makes handling easy, while the precision nozzle delivers a stable, controllable flame for clean and accurate work.\n\nBuilt for reliability, the Gloor torch features durable valves, strong connectors, and a balanced grip that improves user comfort during prolonged operation. It is suitable for fabrication workshops, automotive repairs, industrial maintenance, engineering projects, and professional welding operations.\n\nDesigned for versatility and dependable performance, the Gloor Welding Torch is a trusted solution for professionals requiring accurate flame control and long-lasting build quality in demanding environments.',

        specification: `
  Product Type: Gas Welding Torch
  Brand: Gloor
  Material: Heavy-duty nickel-plated metal body
  Flame Type: Adjustable precision flame
  Application: Welding, cutting, brazing, soldering, heating
  Operation: Gas-powered torch system
  Design: Lightweight ergonomic handling
  Construction: Industrial-grade durable build
  Nozzle: Precision flame outlet
  Usage: Workshop, fabrication, automotive, industrial maintenance
  `,

        features: `
  Durable industrial-grade construction
  Nickel-plated body for corrosion resistance
  Adjustable flame control for precision work
  Suitable for welding and cutting applications
  Ideal for brazing, soldering, and heating tasks
  Lightweight design for easy handling 
  Strong connectors and reliable valves
  Stable flame performance
  Long-lasting heavy-duty build quality
  Suitable for professional workshop use
  `,

        jumiaLink: 'https://www.jumia.com.ng/catalog/?q=gloor+welding+torch',
        kongaLink: 'https://www.konga.com/search?search=gloor+welding+torch'
    },



    {
        id: 11017,
        name: 'TOTAL 2.0Ah Lithium-Ion Battery Pack (TFBLI20011)',
        category: 'batteries',
        group: 'Electrical Equipments',
        showSimilar: true,

        brand: 'Total',

        price: 32000,
        discountPrice: 28000,

        images: [
            'assets/img/battery and battery chargers/TOTAL 2.0Ah Lithium-Ion Battery Pack (TFBLI20011).jpg',
            'assets/img/battery and battery chargers/TOTAL 2.0Ah Lithium-Ion Battery Pack (TFBLI20011).jpg-3.webp',
            'assets/img/battery and battery chargers/TOTAL 2.0Ah Lithium-Ion Battery Pack (TFBLI20011)-2.jpeg'
        ],

        videos: [
            'https://www.youtube.com/watch?v=9L2mQ5rP8vA'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The TOTAL TFBLI20011 Lithium-Ion Battery Pack is a professional rechargeable power source designed for TOTAL P20S cordless tools and workshop applications. Built with advanced 20V lithium-ion technology, this battery delivers stable power output, reliable runtime and efficient charging performance for professional and DIY operations. Its compact lightweight design, integrated LED battery indicator and universal P20S compatibility provide improved portability, convenient charge monitoring and flexible multi-tool usage. Suitable for cordless drills, impact drivers, grinders, pressure washers, saws and other TOTAL 20V cordless equipment. Specifications verified from official TOTAL product listings and catalogs. :contentReference[oaicite:0]{index=0}',

        specification: `
  - Product Name: TOTAL Lithium-Ion Battery Pack
  - Model Number: TFBLI20011
  - Brand: TOTAL Tools
  - Battery Type: Lithium-Ion (Li-Ion)
  - Voltage: 20V
  - Battery Capacity: 2.0Ah
  - Battery Platform: TOTAL P20S System
  - Battery Indicator: LED Power Indicator
  - Compatibility: All TOTAL P20S Cordless Tools
  - Charging Type: Rechargeable Battery Pack
  - Weight: Approximately 0.38 - 0.60 kg
  - Housing Type: Heavy-Duty Impact Resistant Housing
  - Power Source: Rechargeable Lithium-Ion Cells
  - Application: Cordless power tool operation

  Applications
  - Cordless drills
  - Impact drivers
  - Cordless grinders
  - Pressure washers
  - Cordless saws
  - Workshop maintenance
  - Construction operations
  - DIY repair projects
  - Professional fabrication
  - Industrial cordless tool applications

  Accessories
  - Lithium-Ion Battery Pack
  - User Manual
  - Color Box Packaging
  `,

        features: `
  - Powerful 20V lithium-ion battery system
  - Stable and reliable power output
  - Lightweight compact battery design
  - LED battery power indicator
  - Compatible with TOTAL P20S tools
  - Fast charging support capability
  - Durable impact-resistant housing
  - Long-lasting battery performance
  - No memory effect technology
  - Ideal for professional cordless applications
  `
    },


    {
        id: 11018,
        name: 'EDON Inverter Welding Machine (TB-400)',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,

        brand: 'Edon',

        price: 165000,
        discountPrice: 155000,

        images: [
            'assets/img/welding machines/edon tb 400 inverter welding machine.jpg-2.avif',
            'assets/img/welding machines/edon tb 400 inverter welding machine.jpg-3.jpg',
            'assets/img/welding machines/edon tb 400 inverter welding machine.jpg',
            'assets/img/welding machines/edon tb 400 inverter welding machine.jpg-4.jpeg',
            'assets/img/welding machines/edon tb 400 inverter welding machine.jpg-5.jpg'
        ],

        videos: [
            'https://www.youtube.com/watch?v=5mR2Q8vL4pA'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The EDON TB-400 Inverter Welding Machine is a professional heavy-duty welding machine designed for metal fabrication, steel welding, workshop maintenance and construction applications. Built with advanced inverter technology, this welding machine delivers stable arc performance, efficient power consumption and reliable continuous welding operation for industrial and workshop tasks. Its compact portable body, digital current adjustment system and strong cooling performance provide improved welding efficiency, smooth arc stability and operator convenience during extended operation. Suitable for welders, fabricators, technicians, construction workers and industrial maintenance professionals.',

        specification: `
  - Product Name: EDON Inverter Welding Machine
  - Model Number: TB-400
  - Brand: EDON
  - Machine Type: MMA Inverter Welding Machine
  - Voltage: 220-240V ~ 50/60Hz
  - Output Current Range: 20A - 400A
  - Electrode Capacity: 1.6 mm - 5.0 mm
  - Cooling System: Air Cooling Fan System
  - Display Type: Digital Display
  - Protection Features: Overheat and Overload Protection
  - Technology: IGBT Inverter Technology
  - Body Design: Compact Portable Structure
  - Power Source: Corded Electric
  - Application: Metal welding and fabrication operations

  Applications
  - Steel welding
  - Metal fabrication
  - Gate welding
  - Workshop maintenance
  - Construction welding
  - Industrial repair work
  - Pipe welding
  - Engineering fabrication
  - Home workshop projects
  - General welding operations

  Accessories
  - Welding Machine
  - Electrode Holder Cable
  - Earth Clamp Cable
  - Face Shield
  - Wire Brush
  - User Manual
  - Carton Box Packaging
  `,

        features: `
  - Advanced inverter welding technology
  - Stable and smooth arc performance
  - Digital welding current adjustment
  - Compact portable body design
  - Efficient energy-saving operation
  - Strong cooling fan system
  - Overheat and overload protection
  - Suitable for industrial welding tasks
  - Reliable continuous welding performance
  - Ideal for workshop and fabrication applications
  `
    },


    {
        id: 11019,
        name: 'EDON ARC 500S Inverter Welding Machine',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,

        brand: 'Edon',

        price: 165000,
        discountPrice: 155000,

        images: [
            'assets/img/welding machines/edon arc 500s welding machine.jpg',
            'assets/img/welding machines/edon arc 500s welding machine-3.jpeg',
            'assets/img/welding machines/edon arc 500s welding machine-2.jpg'
        ],

        videos: [
            'https://www.youtube.com/watch?v=5mR2Q8vL4pA'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The EDON ARC 500S Inverter Welding Machine is a professional heavy-duty MMA arc welding machine designed for metal fabrication, steel welding, workshop maintenance and industrial construction applications. Built with advanced inverter technology, this welding machine delivers stable arc performance, efficient energy consumption and reliable continuous welding operation for demanding workshop tasks. Its compact portable structure, digital current adjustment system and powerful cooling performance provide improved welding efficiency, smooth arc stability and operator convenience during extended operation. Suitable for welders, fabricators, technicians, metalworkers and industrial maintenance professionals.',

        specification: `
  - Product Name: EDON Inverter Welding Machine
  - Model Number: ARC 500S
  - Brand: EDON
  - Welding Type: MMA / ARC Welding Machine
  - Voltage: 220-240V ~ 50/60Hz
  - Output Current Range: 20A - 500A
  - Electrode Capacity: 1.6 mm - 5.0 mm
  - Technology: IGBT Inverter Technology
  - Cooling System: High-speed Air Cooling Fan
  - Display Type: Digital Display
  - Protection Features: Overheat and Overload Protection
  - Body Design: Compact Portable Structure
  - Handle Type: Portable Carry Handle
  - Power Source: Corded Electric
  - Application: Metal welding and fabrication operations

  Applications
  - Steel welding
  - Metal fabrication
  - Gate welding
  - Workshop maintenance
  - Construction welding
  - Pipe welding
  - Industrial repair work
  - Engineering fabrication
  - General metal joining
  - Professional welding operations

  Accessories
  - Welding Machine
  - Electrode Holder Cable
  - Earth Clamp Cable
  - Face Shield
  - Wire Brush
  - User Manual
  - Carton Box Packaging
  `,

        features: `
  - Advanced IGBT inverter technology
  - Stable and smooth arc welding performance
  - Digital current adjustment system
  - Compact portable body structure
  - Efficient energy-saving operation
  - Strong cooling fan performance
  - Overheat and overload protection system
  - Suitable for industrial welding tasks
  - Reliable continuous welding operation
  - Ideal for workshop and fabrication applications
  `
    },


    {
        id: 11020,
        name: 'EDON MMA 400S Inverter Welding Machine',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,

        brand: 'Edon',

        price: 380000,
        discountPrice: 365000,

        images: [
            'assets/img/welding machines/edon mma 400s weld machine.jpg',
        ],

        videos: [
            'https://www.youtube.com/watch?v=cXwvPDU0g34'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The EDON MMA 400S Inverter Welding Machine is a professional heavy-duty MMA arc welding machine designed for steel fabrication, metal joining, construction welding and industrial maintenance operations. Built with advanced IGBT inverter technology, this welding machine delivers stable arc performance, efficient energy consumption and reliable continuous welding operation for workshop and industrial tasks. Its compact portable structure, digital current adjustment system and strong air cooling performance provide improved welding efficiency, smooth arc stability and operator convenience during extended operation. Suitable for welders, fabricators, technicians, construction workers and industrial maintenance professionals. The MMA 400S is classified as an MMA/ARC stick welding machine using coated electrodes. :contentReference[oaicite:0]{index=0}',

        specification: `
  - Product Name: EDON Inverter Welding Machine
  - Model Number: MMA 400S
  - Brand: EDON
  - Welding Type: MMA / ARC Welding Machine
  - Technology: IGBT Inverter Technology
  - Voltage: 220-240V ~ 50/60Hz
  - Output Current Range: 20A - 400A
  - No-load Voltage: 65V
  - Rated Duty Cycle: 60%
  - Electrode Capacity: 1.6 mm - 5.0 mm
  - Cooling System: High-speed Air Cooling Fan
  - Display Type: Digital Display
  - Protection Features: Overheat and Overload Protection
  - Body Design: Compact Portable Structure
  - Handle Type: Portable Carry Handle
  - Power Source: Corded Electric
  - Application: Metal welding and fabrication operations

  Applications
  - Steel welding
  - Metal fabrication
  - Gate welding
  - Construction welding
  - Pipe welding
  - Workshop maintenance
  - Industrial repair work
  - Engineering fabrication
  - General metal joining
  - Professional welding operations

  Accessories
  - Welding Machine
  - Electrode Holder Cable
  - Earth Clamp Cable
  - Face Shield
  - Wire Brush
  - User Manual
  - Carton Box Packaging
  `,

        features: `
  - Advanced IGBT inverter technology
  - Stable and smooth arc welding performance
  - Digital current adjustment system
  - Compact portable body structure
  - Efficient energy-saving operation
  - Strong cooling fan performance
  - Hot start and anti-stick function
  - Overheat and overload protection system
  - Reliable continuous welding operation
  - Ideal for workshop and fabrication applications
  `
    },


    {
        id: 11021,
        name: 'EDON CUT-60 Plasma Cutter Welding Machine',
        category: 'plasma-cutters',
        group: 'Electrical Equipments',
        showSimilar: true,

        brand: 'Edon',

        price: 690000,
        discountPrice: 670000,

        images: [
            'assets/img/welding machines/edon cut 60 plasma cutter.jpg',
            'assets/img/welding machines/edon cut 60 plasma cutter.jpg-2.avif',

        ],

        videos: [
            'https://www.youtube.com/watch?v=9rL2Q4mP7vA'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The EDON CUT-60 Plasma Cutter Welding Machine is a professional industrial plasma cutting machine designed for fast and accurate cutting of steel, stainless steel, aluminum and other conductive metals. Built with advanced inverter plasma technology, this machine delivers stable cutting performance, smooth arc ignition and efficient metal cutting operation for fabrication workshops, construction projects and industrial maintenance tasks. Its compact portable body, digital current adjustment system and high-efficiency cooling performance provide improved cutting precision, energy efficiency and reliable continuous operation. Suitable for welders, fabricators, metal workers, engineers and industrial workshop professionals.',

        specification: `
  - Product Name: EDON Plasma Cutter Machine
  - Model Number: CUT-60
  - Brand: EDON
  - Machine Type: Inverter Plasma Cutting Machine
  - Voltage: 220-240V ~ 50/60Hz
  - Output Current Range: 20A - 60A
  - Rated Input Power: 6.5 KVA
  - Cutting Thickness: 1 - 20 mm
  - Maximum Cutting Thickness: 25 mm
  - Arc Starting Method: High Frequency Start
  - Cooling System: High-speed Air Cooling Fan
  - Display Type: Digital Display
  - Protection Features: Overheat and Overload Protection
  - Technology: IGBT Inverter Technology
  - Body Design: Compact Portable Structure
  - Power Source: Corded Electric
  - Application: Metal cutting and fabrication operations

  Applications
  - Steel cutting
  - Stainless steel cutting
  - Aluminum cutting
  - Metal fabrication
  - Industrial maintenance
  - Construction metal work
  - Workshop cutting operations
  - Pipe cutting
  - Engineering fabrication
  - Sheet metal cutting

  Accessories
  - Plasma Cutter Machine
  - Plasma Cutting Torch
  - Earth Clamp Cable
  - Air Pressure Regulator
  - Hose Connector
  - User Manual
  - Carton Box Packaging
  `,

        features: `
  - Advanced IGBT inverter plasma technology
  - Fast and accurate metal cutting performance
  - Smooth high-frequency arc starting system
  - Digital current adjustment control
  - Compact portable machine design
  - Efficient energy-saving operation
  - Strong cooling fan performance
  - Overheat and overload protection system
  - Reliable continuous industrial operation
  - Ideal for workshop and fabrication applications
  `
    },


    {
        id: 11022,
        name: 'EDON CUT-100 Plasma Cutter Welding Machine',
        category: 'plasma-cutters',
        group: 'Electrical Equipments',
        showSimilar: true,

        brand: 'Edon',

        price: 750000,
        discountPrice: 720000,

        images: [
            'assets/img/welding machines/edon cut 100 plasma cutter.jpg-3.png',
            'assets/img/welding machines/edon cut 100 plasma cutter.jpg-2.avif',
            'assets/img/welding machines/edon cut 100 plasma cutter.jpg'
        ],

        videos: [
            'https://www.youtube.com/watch?v=6rL2Q8mP4vA'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The EDON CUT-100 Plasma Cutter Machine is a professional industrial plasma cutting system designed for high-speed cutting of steel, stainless steel, aluminum and other conductive metals. Built with advanced IGBT inverter technology, this plasma cutter delivers stable cutting performance, smooth arc ignition and efficient heavy-duty metal cutting operation for fabrication workshops, engineering projects and industrial maintenance tasks. Its compact portable body, digital current adjustment system and powerful cooling performance provide improved cutting precision, energy efficiency and reliable continuous operation. Suitable for welders, fabricators, metal workers, engineers and industrial workshop professionals.',

        specification: `
  - Product Name: EDON Plasma Cutter Machine
  - Model Number: CUT-100
  - Brand: EDON
  - Machine Type: Inverter Plasma Cutting Machine
  - Voltage: 380V ~ 50/60Hz
  - Output Current Range: 20A - 100A
  - Rated Input Power: 15 KVA
  - Cutting Thickness: 1 - 35 mm
  - Maximum Cutting Thickness: 40 mm
  - Arc Starting Method: High Frequency Start
  - Cooling System: High-speed Air Cooling Fan
  - Display Type: Digital Display
  - Protection Features: Overheat and Overload Protection
  - Technology: IGBT Inverter Technology
  - Body Design: Industrial Portable Structure
  - Power Source: Corded Electric
  - Application: Heavy-duty metal cutting operations

  Applications
  - Steel cutting
  - Stainless steel cutting
  - Aluminum cutting
  - Sheet metal fabrication
  - Industrial maintenance
  - Construction metal work
  - Pipe cutting
  - Engineering fabrication
  - Workshop cutting operations
  - Heavy-duty industrial cutting

  Accessories
  - Plasma Cutter Machine
  - Plasma Cutting Torch
  - Earth Clamp Cable
  - Air Pressure Regulator
  - Hose Connector
  - User Manual
  - Carton Box Packaging
  `,

        features: `
  - Advanced IGBT inverter plasma technology
  - Powerful heavy-duty cutting performance
  - Smooth high-frequency arc starting system
  - Digital current adjustment control
  - Industrial portable body structure
  - Efficient energy-saving operation
  - Strong cooling fan performance
  - Overheat and overload protection system
  - Reliable continuous industrial operation
  - Ideal for workshop and fabrication applications
  `
    },


    {
        id: 11023,
        name: 'EDON CUT-120 Plasma Cutter Welding Machine',
        category: 'plasma-cutters',
        group: 'Electrical Equipments',
        showSimilar: true,

        brand: 'Edon',

        price: 1300000,
        discountPrice: 1200000,

        images: [
            'assets/img/welding machines/edon cut 120 plasma cutter.jpeg-2.webp',
            'assets/img/edon-cut100-plasma-cutter/edon-cut100.jpg',
        ],

        videos: [
            'https://www.youtube.com/watch?v=8mQ2R4vL5pA'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The EDON CUT-120 Plasma Cutter Machine is a professional industrial heavy-duty plasma cutting system designed for fast and accurate cutting of thick steel, stainless steel, aluminum and conductive metals. Built with advanced IGBT inverter plasma technology, this machine delivers stable cutting performance, smooth arc ignition and efficient continuous metal cutting operation for fabrication industries, engineering workshops and industrial construction projects. Its reinforced industrial body, digital current adjustment system and high-efficiency cooling performance provide improved cutting precision, durability and reliable heavy-duty operation. Suitable for industrial welders, engineers, fabricators and heavy-duty metal workshop professionals.',

        specification: `
  - Product Name: EDON Plasma Cutter Machine
  - Model Number: CUT-120
  - Brand: EDON
  - Machine Type: Inverter Plasma Cutting Machine
  - Voltage: 380V ~ 50/60Hz
  - Output Current Range: 20A - 120A
  - Rated Input Power: 18 KVA
  - Cutting Thickness: 1 - 45 mm
  - Maximum Cutting Thickness: 50 mm
  - Arc Starting Method: High Frequency Start
  - Cooling System: Industrial Air Cooling Fan
  - Display Type: Digital Display
  - Protection Features: Overheat and Overload Protection
  - Technology: IGBT Inverter Technology
  - Body Design: Heavy-Duty Industrial Structure
  - Power Source: Corded Electric
  - Application: Industrial heavy-duty metal cutting operations

  Applications
  - Thick steel cutting
  - Stainless steel cutting
  - Industrial fabrication
  - Heavy-duty metal cutting
  - Construction metal work
  - Pipe cutting
  - Engineering fabrication
  - Workshop cutting operations
  - Industrial maintenance
  - Sheet metal processing

  Accessories
  - Plasma Cutter Machine
  - Plasma Cutting Torch
  - Earth Clamp Cable
  - Air Pressure Regulator
  - Hose Connector
  - User Manual
  - Carton Box Packaging
  `,

        features: `
  - Advanced industrial IGBT plasma technology
  - Powerful heavy-duty cutting performance
  - Smooth high-frequency arc starting system
  - Digital current adjustment control
  - Heavy-duty industrial body construction
  - Efficient energy-saving operation
  - Strong industrial cooling fan system
  - Overheat and overload protection system
  - Reliable continuous industrial operation
  - Ideal for fabrication and engineering applications
  `
    },

    {
        id: 11024,
        name: 'Safire NM250 Welding Torch',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,

        brand: 'Safire',

        price: 100000,
        discountPrice: 87000,

        images: [
            'assets/img/welding accessories/Saffire-Nm250-Cutting-Torch.jpg',
            'assets/img/welding accessories/Saffire-Nm250-Cutting-Torch-2.jpg',
            'assets/img/welding accessories/Saffire-Nm250-Cutting-Torch-3.avif',
            'assets/img/welding accessories/Saffire-Nm250-Cutting-Torch-4.jpg'

        ],

        videos: [
            'https://www.youtube.com/watch?v=3G9mL2Q7rXQ'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The Safire NM250 Welding Torch is a professional heavy-duty oxy-fuel cutting torch designed for industrial metal cutting, fabrication and workshop operations. Constructed with durable brass and stainless-steel components, it delivers reliable gas flow control and precise flame performance for cutting mild steel, pipes and metal plates in engineering workshops, fabrication environments and industrial maintenance applications.',

        specification: `
  - Product Name: Safire NM250 Welding Torch
  - Model: NM250
  - Brand: Safire
  - Torch Type: Oxy-Fuel Cutting Torch
  - Fuel Type: Acetylene / LPG / Propane
  - Torch Length: 450mm – 520mm
  - Head Angle: 90°
  - Body Material: Brass and Stainless Steel
  - Hose Connection: 3/8" BSP
  - Cutting Capacity: Up to 100mm – 300mm Steel
  - Gas Type: Oxygen and Fuel Gas
  - Application: Industrial Metal Cutting

  Applications
  - Steel plate cutting
  - Pipe cutting
  - Metal fabrication
  - Industrial maintenance
  - Construction fabrication
  - Engineering workshop operations
  - Scrap metal cutting
  - Structural steel work
  - Workshop cutting tasks
  - General industrial applications

  Accessories
  - NM250 Cutting Torch
  - Torch Nozzle
  - Hose Connectors
  - User Manual
  `,

        features: `
  - Heavy-duty industrial torch construction
  - Durable brass and stainless-steel body
  - Strong flame cutting performance
  - Compatible with acetylene and LPG
  - Precision gas flow control
  - Reliable industrial cutting operation
  - Suitable for thick steel cutting
  - Ergonomic professional design
  - Durable workshop performance
  - Ideal for fabrication and engineering operations
  `
    },


    {
        id: 11025,
        name: 'INGCO 3.2kW Inverter Gasoline Generator with ECO Mode (GEIF40001)',
        category: 'inverter-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        brand: 'INGCO',
        price: 550000,
        variations: [
            { size: '3.2KW', price: 450000, inStock: true }
        ],
        images: [
            'assets/img/generators/Ingco 3.2 kW Inverter Gasoline Generator – GEIF40001.webp',
            'assets/img/generators/Ingco 3.2 kW Inverter Gasoline Generator – GEIF40001-2.webp',
            'assets/img/generators/Ingco 3.2 kW Inverter Gasoline Generator – GEIF40001.webp-3.jpeg'
        ],

        inStock: true,

        description: `The INGCO Inverter Gasoline Generator GEIF40001 is a high-performance portable power solution designed for homes, offices, outdoor events, workshops, construction sites, and backup power applications. Powered by a reliable gasoline engine, this inverter generator delivers stable and clean power output suitable for sensitive electronic devices such as laptops, televisions, refrigerators, and communication equipment.
The generator features advanced inverter technology for efficient fuel consumption, reduced noise operation, and stable voltage regulation. Its ECO mode automatically adjusts engine speed according to load demand, helping to reduce fuel usage and extend engine lifespan.
Built with a compact and portable design, the generator is easy to transport and operate. It is equipped with overload protection, low oil shutdown protection, and multiple output sockets for safe and convenient power distribution.
The INGCO GEIF40001 is ideal for residential backup power, outdoor activities, workshops, mobile businesses, and professional applications requiring reliable portable electricity.
Items Included in the Package:
• 1 × INGCO Inverter Generator
• User Manual
• Tool Kit
• DC Charging Cable`,

        specification: `Category: Inverter Generators
Parent Category: Generators
Brand: INGCO
Model: GEIF40001
Generator Type: Inverter Gasoline Generator
Rated Power Output: 3.2kW
Maximum Output: 3.5kW
Engine Type: 4-Stroke Air-cooled Gasoline Engine
Starting System: Recoil Start
Fuel Type: Petrol
Fuel Tank Capacity: 7.5L
Noise Level: Low Noise Operation
ECO Mode: Yes
Voltage Output: 220V
Frequency: 50Hz
Protection Features: Overload Protection & Low Oil Shutdown
Application: Backup and portable power supply
Suitable Use: Homes, offices, workshops, outdoor use`,

        features: `Advanced inverter technology for stable power output
3.2kW rated output for reliable performance
ECO mode for fuel efficiency and reduced noise
Suitable for sensitive electronic equipment
Compact and portable design
Low oil shutdown protection system
Overload protection for safe operation
Ideal for home, workshop, and outdoor applications`,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },


    {
        id: 11026,
        name: 'EDON Super Arc 5000 Inverter Welding Machine',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'EDON',


        price: 650000,

        images: [
            'assets/img/welding machines/edon super arc 5000 weld machine.jpg-4.png',
            'assets/img/welding machines/edon super arc 5000 weld machine.jpg-3.png',
            'assets/img/welding machines/edon super arc 5000 weld machine.jpg-2.png',
            'assets/img/welding machines/edon super arc 5000 weld machine.jpg'
        ],

        inStock: true,

        description: `The EDON Super Arc 5000 is a high-performance industrial inverter welding machine engineered for heavy-duty welding operations in fabrication plants, construction sites, shipyards, engineering workshops, and maintenance facilities. Built with advanced IGBT inverter technology, the machine delivers powerful output, excellent arc stability, and efficient energy utilization.
Designed for MMA/DC welding applications, the Super Arc 5000 provides high current output suitable for demanding industrial tasks and larger electrode sizes. Its robust design, digital controls, and protective systems ensure reliable operation in challenging environments.
The machine is ideal for professional welders handling structural steel fabrication, industrial maintenance, heavy machinery repairs, and production welding operations.
Items Included in the Package:
• 1 × EDON Super Arc 5000 Welding Machine
• 1 × Electrode Holder Cable
• 1 × Earth Clamp Cable
• User Manual`,

        specification: `Category: MMA Welding Machines
Parent Category: Welding Machines
Brand: EDON
Model: Super Arc 5000
Welding Type: MMA / DC Inverter
Input Voltage: 380V Three Phase
Output Current Range: 30–500A
Duty Cycle: 60%
Technology: IGBT Inverter
Display: Digital Display
Protection Class: IP21S
Cooling System: Forced Air Cooling
Application: Heavy-duty industrial welding`,

        features: `Powerful high-current welding output
Advanced IGBT inverter technology
Stable arc performance and reduced spatter
Suitable for heavy industrial applications
Digital display for precise current adjustment
Overcurrent and overvoltage protection
Durable industrial-grade construction
Ideal for fabrication, construction, and maintenance work`,
        

        jumiaLink: 'https://www.jumia.com.ng/edon-super-arc-5000-inverter-welding-machine-industrial-heavy-duty-419567151.html',
        kongaLink: 'https://www.konga.com/'
    },


    {
        id: 11027,
        name: 'EDON Super Arc 4000 Inverter Welding Machine',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'EDON',


        price: 560000,

        images: [
            'assets/img/welding machines/edon super arc 4000 welding machine.png',
            'assets/img/welding machines/edon super arc 4000 welding machine-2.png',
            'assets/img/welding machines/edon super arc 4000 welding machine.png-3.jpg',
            'assets/img/welding machines/edon super arc 4000 welding machine.png-4.jpg'
        ],

        inStock: true,

        description: `The EDON Super Arc 4000 is a heavy-duty industrial inverter welding machine designed for fabrication, construction, maintenance, and steel structure welding applications. Utilizing advanced IGBT inverter technology, the machine delivers stable arc performance, improved efficiency, and reliable welding quality under demanding working conditions.
The welder supports MMA (Stick Welding) and is suitable for a wide range of electrodes used in industrial and workshop environments. Features such as Hot Start, Arc Force, and Anti-Stick improve arc ignition, welding stability, and overall operator convenience.
Its rugged construction and digital display make it ideal for professional welders, fabrication workshops, engineering companies, and industrial maintenance operations.
Items Included in the Package:
• 1 × EDON Super Arc 4000 Welding Machine
• 1 × Electrode Holder Cable
• 1 × Earth Clamp Cable
• User Manual`,

        specification: `Category: MMA Welding Machines
Parent Category: Welding Machines
Brand: EDON
Model: Super Arc 4000
Welding Type: MMA / DC Inverter
Input Voltage: 380V Three Phase
Output Current Range: 20–400A
Electrode Size: 1.6–5.0mm
Duty Cycle: 60%
Technology: IGBT Inverter
Display: Digital Display
Protection Class: IP21S
Cooling System: Forced Air Cooling
Application: Industrial welding and fabrication`,

        features: `Advanced IGBT inverter technology
Stable arc and reduced spatter
Hot Start function for easy arc ignition
Arc Force control for improved welding stability
Anti-Stick protection
Digital current display
Heavy-duty industrial construction
Suitable for fabrication and structural welding`,
        
        jumiaLink: 'https://www.jumia.com.ng/edon-super-arc-4000-inverter-welding-machine-heavy-duty-419567074.html',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 11028,
        name: 'Maxmech MIG 200 Welding Machine',

        category: 'mig-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'MAXMECH',
        price: 170000,

        images: [
            'assets/img/welding machines/Maxmech MIG 200 Welding Machine.jpg',
            'assets/img/welding machines/Maxmech MIG 200 Welding Machine-2.jpg',
            'assets/img/welding machines/Maxmech MIG 200 Welding Machine-3.jpg'
        ],

        inStock: true,

        description: `The Maxmech MIG 200 Welding Machine is a versatile inverter welding unit designed for MIG gas-shielded welding, flux-cored welding, and MMA/Stick welding applications. It delivers stable arc performance, smooth wire feeding, and efficient welding results for fabrication workshops, automotive repairs, construction projects, and general metalworking. Its compact design ensures portability while providing reliable welding performance for both professional and industrial users. Items Included in the Package: • 1 × Maxmech MIG 200 Welding Machine • Welding Torch • Earth Clamp • Electrode Holder • User Manual`,

        specification: `Category: MIG Welders
Parent Category: Welding and Soldering
Brand: MAXMECH
Model: MIG-200
Input Voltage: 220V ±15%, 50/60Hz
Rated Input Power: 3.5kVA
Welding Current Range (MIG): 50–200A
Welding Current Range (MMA): 20–180A
Duty Cycle: 30%
Wire Diameter: 0.6–0.9mm
Electrode Diameter: 2.5–4.0mm
Insulation Class: F
Protection Class: IP21S
Cooling Method: Fan Cooled
Application: MIG, Flux-Cored and MMA Welding
Suitable Use: Fabrication, maintenance, automotive repair and construction welding`,

        features: `200A inverter welding output
Supports MIG and MMA welding
Stable arc performance
Smooth wire feeding system
Compact and portable design
Over-voltage and over-current protection
Energy-efficient inverter technology
Suitable for workshop and industrial applications`
    },

    {
        id: 11029,
        name: '1.2mm MIG Welding Wire',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,

        brand: 'Generic',

        price: 75000,



        variations: [
            { size: '1.2mm', price: 75000, inStock: true },
            { size: '0.8mm', price: 73000, inStock: true },
            { size: '0.1mm', price: 75000, inStock: true },

        ],
        images: [
            'assets/img/welding accessories/mig welding wire 1.2mm.jpg',
            'assets/img/welding accessories/mig welding wire 1.2mm.jpg-2.jpeg',
            'assets/img/welding accessories/mig welding wire 1.2mm.jpg-3.webp',
            'assets/img/welding accessories/mig welding wire 1.2mm.jpg-4.jpg'
        ],

        videos: [],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The 1.2mm MIG Welding Wire is a high-quality solid welding wire designed for MIG/MAG welding applications involving mild steel and low-alloy steel materials. It provides stable arc performance, smooth wire feeding, low spatter generation and strong weld penetration for professional fabrication, construction, maintenance and industrial welding operations. Suitable for use with CO₂ or mixed shielding gases, this welding wire delivers reliable weld quality and excellent mechanical properties.',

        specification: `
- Product Name: MIG Welding Wire
- Wire Diameter: 1.2mm
- Wire Type: Solid MIG Wire
- Material: Copper-Coated Mild Steel
- Classification: ER70S-6
- Shielding Gas: CO₂ or Argon/CO₂ Mix
- Spool Type: Plastic/Metal Spool
- Tensile Strength: ≥ 70 ksi
- Wire Surface: Copper Coated
- Welding Process: MIG/MAG Welding
- Application Material: Mild Steel and Low Alloy Steel
- Polarity: DCEP (Reverse Polarity)

Applications
- Steel fabrication
- Structural welding
- Construction projects
- Manufacturing plants
- Automotive repairs
- Metal workshops
- Industrial maintenance
- General fabrication works
- Pipe welding
- Equipment repairs

Accessories
- Welding Wire Spool
- Product Label
- Protective Packaging
`,

        features: `
- 1.2mm heavy-duty welding wire
- Smooth and consistent wire feeding
- Stable arc performance
- Low spatter generation
- Excellent weld penetration
- High tensile strength welds
- Suitable for CO₂ and mixed gases
- Copper-coated for improved conductivity
- Ideal for industrial fabrication
- Reliable welding performance
`
    },

    {
        id: 11030,
        name: 'INGCO Auto Air Compressor 12V',
        category: 'auto-air-compressors',
        group: 'Electrical Equipments',
        showSimilar: true,

        brand: 'INGCO',
        model: 'AAC1408',

        price: 90000,
        discountPrice: 85000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274120/Astonic-Mart/Products/air%20compressors/ingco_auto_air_comp_AAC1408.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274132/Astonic-Mart/Products/air%20compressors/ingco_auto_air_comp_AAC1408.webp-2.png',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274117/Astonic-Mart/Products/air%20compressors/ingco_auto_air_comp_AAC1408-3.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274134/Astonic-Mart/Products/air%20compressors/ingco_auto_air_comp_AAC1408.webp-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274135/Astonic-Mart/Products/air%20compressors/ingco_auto_air_comp_AAC1408.webp-5.webp'

        ],

        videos: [],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The INGCO AAC1408 Auto Air Compressor is a compact portable 12V air inflator designed for vehicle tyres, motorcycle tyres, bicycle tyres, sports equipment and general inflation tasks. Its lightweight design, integrated LED work light and multiple nozzle adapters make it a convenient emergency tool for drivers, workshops and roadside applications.',

        specification: `
- Product Name: Auto Air Compressor
- Model: AAC1408
- Brand: INGCO
- Power Supply: DC 12V
- Rated Current: 10A
- Maximum Pressure: 140 PSI (10 Bar)
- Maximum Air Flow: 35 L/min
- Power Connection: Cigarette Lighter Plug
- Cable Length: 3m
- Work Light: Integrated LED Light
- Battery Clips: Included
- Nozzle Adapters: 4 Pieces
- Application: Tyre Inflation and General Air Filling

Applications
- Car tyre inflation
- SUV tyre inflation
- Motorcycle tyre inflation
- Bicycle tyre inflation
- Sports balls
- Inflatable toys
- Emergency roadside use
- General air filling

Accessories
- Auto Air Compressor
- 3m Power Cord
- Battery Clips
- 4 Nozzle Adapters
- User Manual
`,

        features: `
- Compact and portable design
- 140 PSI maximum pressure
- 35 L/min air delivery
- Built-in LED work light
- 12V vehicle power operation
- 3m power cord
- Includes battery clips
- Includes 4 inflation adapters
- Ideal for emergency tyre inflation
- Easy to store in vehicles
`
    },

    {
        id: 11031,
        name: 'TOTAL Gasoline Generator 800W',
        category: 'petrol-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        showSimilar: true,

        brand: 'TOTAL',
        model: 'TP18001',

        power: '800W',


        price: 175000,
        discountPrice: 165000,

        images: [
            'assets/img/generators/TOTAL GASOLINE GENERATOR 800W (TP18001).jpg',
            'assets/img/generators/TOTAL GASOLINE GENERATOR 800W (TP18001)-4.jpg',
            'assets/img/generators/TOTAL GASOLINE GENERATOR 800W (TP18001)-3.jpg',
            'assets/img/generators/TOTAL GASOLINE GENERATOR 800W (TP18001)-2.webp'
        ],

        videos: [
            'https://www.youtube.com/watch?v=i9nW4jYtPec'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The TOTAL TP18001 Gasoline Generator is a compact and portable power generation unit designed for emergency backup power, outdoor activities, lighting applications and small equipment operation. Powered by a reliable 63cc 2-stroke gasoline engine producing 1.8HP, it delivers a maximum output of 800W and a rated output of 650W. Its lightweight design, recoil starting system and air-cooled engine make it suitable for homes, shops, camping and outdoor work environments where portable power is required.',

        specification: `
- Product Name: Gasoline Generator
- Model: TP18001
- Brand: TOTAL
- Maximum Output: 0.8kW (800W)
- Rated Output: 0.65kW (650W)
- Rated Voltage: 220-240V
- Rated Frequency: 50Hz
- Rated Speed: 3000 RPM
- Engine Type: 2-Stroke Gasoline Engine
- Engine Power: 1.8HP
- Engine Displacement: 63cc
- Cooling System: Air-Cooled
- Starting System: Recoil Start
- Alternator Type: Aluminum Coil
- Fuel Tank Capacity: 4.0L
- Dry Weight: 16kg
- Power Source: Gasoline
- Application: Portable Power Supply

Applications
- Emergency backup power
- Home lighting
- Outdoor events
- Camping trips
- Small appliances
- Mobile workshops
- Security lighting
- Small power tools
- Recreational activities
- General portable power use

Accessories
- Generator Unit
- Spark Plug Wrench
- User Manual
- Carton Box Packaging
`,

        features: `
- Portable 800W gasoline generator
- Reliable 1.8HP 2-stroke engine
- Compact and lightweight design
- Easy recoil starting system
- Air-cooled engine technology
- 4L fuel tank capacity
- Stable power output
- Suitable for emergency power supply
- Ideal for outdoor and mobile applications
- Durable and easy-to-maintain construction
`
    },

    {
        id: 11032,
        name: 'INGCO Gasoline Generator 2.8kW',
        category: 'petrol-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        showSimilar: true,

        brand: 'INGCO',
        model: 'GE30005',

        power: '2.8kW',

        price: 390000,
        discountPrice: 370000,

        images: [
            'assets/img/generators/ingco GE30005 - Gasoline generator.jpg',
            'assets/img/generators/ingco GE30005 - Gasoline generator-2.jpg',
            'assets/img/generators/ingco GE30005 - Gasoline generator-5.jpg',
            'assets/img/generators/ingco GE30005 - Gasoline generator-4.jpg',
            'assets/img/generators/ingco GE30005 - Gasoline generator-3.jpg',
        ],

        videos: [
            'https://www.youtube.com/watch?v=W-X49n5F4Pg'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The INGCO GE30005 Gasoline Generator is a portable power generation unit designed for homes, small businesses, workshops, outdoor activities and emergency backup applications. Powered by a reliable 210cc 4-stroke OHV gasoline engine, it delivers a maximum output of 2.8kW and a rated output of 2.5kW. Its air-cooled engine, recoil starting system and durable frame construction provide dependable performance for powering appliances, tools and lighting systems during power outages and remote operations.',

        specification: `
- Product Name: Gasoline Generator
- Model: GE30005
- Brand: INGCO
- Rated Voltage: 220-240V
- Rated Frequency: 50Hz
- Maximum Output: 2.8kW
- Rated Output: 2.5kW
- Rated Speed: 3000 RPM
- Engine Type: 4-Stroke OHV
- Engine Displacement: 210cc
- Cooling System: Air-Cooled
- Ignition System: T.C.I
- Starting System: Recoil Start
- Alternator Type: Aluminum Coil
- Fuel Tank Capacity: 15L
- Dry Weight: 42kg
- Fuel Type: Gasoline
- Application: Portable Power Supply

Applications
- Home backup power
- Small business operations
- Workshop equipment
- Outdoor events
- Camping activities
- Construction sites
- Security lighting
- Emergency power supply
- Small power tools
- Farm operations

Accessories
- Generator Unit
- Spark Plug Wrench
- User Manual
- Carton Box Packaging
`,

        features: `
- Maximum output of 2.8kW
- Rated output of 2.5kW
- Reliable 210cc OHV engine
- Air-cooled engine design
- Recoil starting system
- Large 15L fuel tank
- Stable power delivery
- Durable portable frame
- Suitable for emergency backup power
- Ideal for home and commercial use
`
    },

    {
        id: 11033,
        name: 'TOTAL Silent Diesel Generator 5000W - TP250003',
        category: 'desiel-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        showSimilar: true,

        brand: 'TOTAL',
        model: 'TP250003',

        power: '5000W',

        price: 1550000,
        discountPrice: 1500000,

        images: [
            'assets/img/generators/TOTAL SILENT DIESEL GENERATOR 5.000W (TP250003).jpg',
            'assets/img/generators/TOTAL SILENT DIESEL GENERATOR 5.000W (TP250003).jpg-2.webp',
            'assets/img/generators/TOTAL SILENT DIESEL GENERATOR 5.000W (TP250003).jpg-3.webp',
            'assets/img/generators/TOTAL SILENT DIESEL GENERATOR 5.000W (TP250003).jpg-4.webp',
            'assets/img/generators/TOTAL SILENT DIESEL GENERATOR 5.000W (TP250003).jpg-5.webp'
        ],

        videos: [],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The TOTAL TP250003 Silent Diesel Generator is a heavy-duty power generation solution designed for industrial, commercial and backup power applications. Powered by a robust 418cc 9HP diesel engine, it delivers a maximum output of 5.0kW with reliable fuel efficiency and long operating life. Its silent canopy design helps reduce operating noise while providing protection for internal components. The electric start system, copper coil alternator and AVR voltage regulation ensure stable and dependable power delivery for demanding environments.',

        specification: `
- Product Name: Silent Diesel Generator
- Model: TP250003
- Brand: TOTAL
- Generator Type: Silent Diesel Generator
- Rated Voltage: 220-240V / 380-415V
- Rated Frequency: 50Hz
- Phase: Three Phase
- Maximum Output: 5.0kW @ 380-415V
- Rated Output: 4.5kW @ 380-415V
- Maximum Output (Single Phase): 1.6kW @ 220-240V
- Rated Output (Single Phase): 1.5kW @ 220-240V
- Engine Power: 9.0HP
- Engine Displacement: 418cc
- Engine Type: Air-Cooled Diesel Engine
- Rated Speed: 3000 RPM
- Starting System: Electric Start
- Alternator Type: Copper Coil
- DC Output: 12V / 8.3A
- Fuel Tank Capacity: 17L
- Battery: 30Ah Maintenance-Free Battery
- Dry Weight: 172kg
- Voltage Regulation: AVR
- Noise Type: Silent Canopy
- Fuel Type: Diesel

Applications
- Industrial backup power
- Commercial facilities
- Construction sites
- Workshops and factories
- Farms and agricultural operations
- Office power backup
- Residential emergency power
- Security systems
- Equipment operation
- Remote site power supply

Accessories
- Electric Start Battery
- Transport Wheels
- Transport Handles
- User Manual
- Carton Box Packaging
`,

        features: `
- Powerful 9HP diesel engine
- 5.0kW maximum output
- Silent canopy design
- Electric key start system
- AVR voltage stabilization
- Heavy-duty copper alternator
- Large 17L fuel tank
- 30Ah maintenance-free battery
- Reliable industrial performance
- Suitable for commercial and backup power applications
`
    },

    {
        id: 11034,
        name: 'INGCO Gasoline Generator 3.5kW -GE35006',
        category: 'petrol-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        showSimilar: true,

        brand: 'INGCO',
        model: 'GE35006',

        power: '3.5kW',


        price: 400000,
        discountPrice: 380000,

        images: [
            'assets/img/generators/INGCO Gasoline Generator 3.5kW-5.jpg',
            'assets/img/generators/INGCO Gasoline Generator 3.5kW-3.jpg',
            'assets/img/generators/INGCO Gasoline Generator 3.5kW-4.webp',
            'assets/img/generators/INGCO Gasoline Generator 3.5kW-2.jpg',
            'assets/img/generators/INGCO Gasoline Generator 3.5kW.webp'
        ],

        videos: [
            'https://www.youtube.com/watch?v=vWEJnRusSyQ'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The INGCO GE35006 Gasoline Generator is a reliable portable power solution designed for homes, offices, workshops, construction sites and emergency backup applications. Powered by a durable 208cc 4-stroke OHV gasoline engine, it delivers a maximum output of 3.5kW and a rated output of 2.8kW. Featuring a copper coil alternator, recoil starting system and air-cooled engine design, it provides dependable power for appliances, lighting systems and power tools during outages and off-grid operations.',

        specification: `
- Product Name: Gasoline Generator
- Model: GE35006
- Brand: INGCO
- Rated Voltage: 220-240V
- Rated Frequency: 50Hz
- Maximum Output: 3.5kW
- Rated Output: 2.8kW
- Rated Speed: 3000 RPM
- Engine Type: 4-Stroke OHV
- Engine Displacement: 208cc
- Cooling System: Air-Cooled
- Ignition System: T.C.I
- Starting System: Recoil
- Alternator Type: Copper Coil
- Fuel Tank Capacity: 15L
- DC Output: 12V / 8.3A
- Dry Weight: 42kg
- Fuel Type: Gasoline
- Application: Portable Power Supply

Applications
- Home backup power
- Office equipment power supply
- Workshop operations
- Construction site power
- Outdoor events
- Farm operations
- Security systems
- Emergency lighting
- Power tools operation
- General portable electricity supply

Accessories
- Generator Unit
- Spark Plug Wrench
- User Manual
- Carton Box Packaging
`,

        features: `
- Maximum output of 3.5kW
- Rated output of 2.8kW
- Reliable 208cc OHV engine
- Copper coil alternator
- Air-cooled engine design
- Recoil starting system
- Large 15L fuel tank
- Stable power delivery
- Durable portable frame
- Suitable for home and commercial backup power
`
    },

    {
        id: 11035,
        name: 'TOTAL Gasoline Generator 3000W',
        category: 'petrol-generators',
        parentCategory: 'generators',
        showSimilar: true,

        brand: 'TOTAL',
        group: 'Electrical Equipments',
        model: 'TP130005',

        power: '3000W',
        price: 400000,
        discountPrice: 370000,

        images: [
            'assets/img/generators/TOTAL Gasoline Generator 3000W manual.jpg',
            'assets/img/generators/TOTAL Gasoline Generator 3000W manual.jpg-2.jpeg',
            'assets/img/generators/TOTAL Gasoline Generator 3000W manual.jpg-3.jpg',
            'assets/img/generators/TOTAL Gasoline Generator 3000W manual.jpg-4.webp'
        ],

        videos: [
            'https://www.youtube.com/watch?v=RRgfCwmmtEQ'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The TOTAL TP130005 Gasoline Generator is a dependable portable power solution designed for homes, offices, workshops, farms and construction sites. Powered by a reliable 210cc 4-stroke OHV gasoline engine, it delivers a maximum output of 3.0kW and a rated output of 2.8kW. Its air-cooled engine, recoil starting system and durable frame construction provide stable and efficient power for appliances, lighting systems and power tools during power outages and off-grid operations.',

        specification: `
- Product Name: Gasoline Generator
- Model: TP130005
- Brand: TOTAL
- Rated Voltage: 220-240V
- Rated Frequency: 50Hz
- Maximum Output: 3.0kW
- Rated Output: 2.8kW
- Rated Speed: 3000 RPM
- Engine Type: 4-Stroke OHV
- Engine Displacement: 210cc
- Cooling System: Air-Cooled
- Ignition System: T.C.I
- Starting System: Recoil Start
- Alternator Type: Aluminum Coil
- Fuel Tank Capacity: 15L
- Dry Weight: 42kg
- Fuel Type: Gasoline
- Application: Portable Power Supply

Applications
- Home backup power
- Office equipment power supply
- Workshop operations
- Construction site power
- Outdoor events
- Farm operations
- Security systems
- Emergency lighting
- Power tools operation
- General portable electricity supply

Accessories
- Generator Unit
- Spark Plug Wrench
- User Manual
- Carton Box Packaging
`,

        features: `
- Maximum output of 3.0kW
- Rated output of 2.8kW
- Reliable 210cc OHV engine
- Recoil starting system
- Air-cooled engine design
- Large 15L fuel tank
- Stable power delivery
- Durable portable frame
- Easy maintenance operation
- Suitable for home and commercial backup power
`
    },

    {
        id: 11036,
        name: 'TOTAL Gasoline Generator 3500W - TP135006',
        category: 'petrol-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        showSimilar: true,

        brand: 'TOTAL',
        model: 'TP135006',

        power: '3500W',

        price: 470000,
        discountPrice: 450000,

        images: [
            'assets/img/generators/TOTAL 3500W manual start gen.jpg',
            'assets/img/generators/TOTAL 3500W manual start gen.jpg-2.jpg',
            'assets/img/generators/TOTAL 3500W manual start gen.jpg-3.jpg',
            'assets/img/generators/TOTAL 3500W manual start gen.jpg-4.jpg',
            'assets/img/generators/TOTAL 3500W manual start gen.jpg-5.jpg',
            'assets/img/generators/TOTAL 3500W manual start gen.jpg-6.jpg',
            'assets/img/generators/TOTAL 3500W manual start gen.jpg-7.webp'
        ],

        videos: [],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The TOTAL TP135006 Gasoline Generator is a portable and dependable power generation unit designed for homes, offices, workshops, construction sites and emergency backup applications. Powered by a durable 208cc 4-stroke OHV gasoline engine, it delivers a maximum output of 3.5kW and a rated output of 2.8kW. Its robust frame construction, air-cooled engine system and reliable recoil start mechanism provide stable electricity for appliances, lighting systems and power tools in both residential and commercial environments.',

        specification: `
- Product Name: Gasoline Generator
- Model: TP135006
- Brand: TOTAL
- Rated Voltage: 220-240V
- Rated Frequency: 50Hz
- Maximum Output: 3.5kW
- Rated Output: 2.8kW
- Rated Speed: 3000 RPM
- Engine Type: 4-Stroke OHV
- Engine Displacement: 208cc
- Cooling System: Air-Cooled
- Ignition System: T.C.I
- Starting System: Recoil Start
- Alternator Type: Copper Coil
- Fuel Tank Capacity: 15L
- DC Output: 12V / 8.3A
- Dry Weight: 45kg
- Fuel Type: Gasoline
- Application: Portable Power Supply

Applications
- Home backup power
- Office equipment power supply
- Workshop operations
- Construction site power
- Outdoor events
- Farm operations
- Security systems
- Emergency lighting
- Power tools operation
- General portable electricity supply

Accessories
- Generator Unit
- Spark Plug Wrench
- User Manual
- Carton Box Packaging
`,

        features: `
- Maximum output of 3.5kW
- Rated output of 2.8kW
- Reliable 208cc OHV engine
- Copper coil alternator
- Air-cooled engine design
- Recoil starting system
- Large 15L fuel tank
- Stable power delivery
- Durable portable frame
- Suitable for home and commercial backup power
`
    },


    {
        id: 11038,
        name: 'TOTAL Gasoline Generator 3500W Electric Start',
        category: 'petrol-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        showSimilar: true,

        brand: 'TOTAL',
        model: 'TP135006E',

        power: '3500W',


        price: 500000,
        discountPrice: 480000,

        images: [
            'assets/img/generators/TOTAL Generator 3500W Electric Start.jpg',
            'assets/img/generators/TOTAL Generator 3500W Electric Start-2.jpeg',
            'assets/img/generators/TOTAL Generator 3500W Electric Start.jpg-3.webp',
            'assets/img/generators/TOTAL Generator 3500W Electric Start.jpg-4.jpeg'
        ],

        videos: [],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The TOTAL TP135006E Gasoline Generator is a reliable portable power generation unit designed for homes, offices, workshops, farms and construction sites. Powered by a durable 208cc 4-stroke OHV gasoline engine, it delivers a maximum output of 3.5kW and a rated output of 2.8kW. Equipped with both electric and recoil starting systems, this generator provides convenient operation and dependable power for appliances, lighting systems and power tools during outages and off-grid applications.',

        specification: `
- Product Name: Gasoline Generator
- Model: TP135006E
- Brand: TOTAL
- Rated Voltage: 220-240V
- Rated Frequency: 50Hz
- Maximum Output: 3.5kW
- Rated Output: 2.8kW
- Rated Speed: 3000 RPM
- Engine Type: 4-Stroke OHV
- Engine Displacement: 208cc
- Cooling System: Air-Cooled
- Ignition System: T.C.I
- Starting System: Electric Start + Recoil Start
- Alternator Type: Copper Coil
- Fuel Tank Capacity: 15L
- DC Output: 12V / 8.3A
- Battery: Included
- Dry Weight: 48kg
- Fuel Type: Gasoline
- Application: Portable Power Supply

Applications
- Home backup power
- Office equipment power supply
- Workshop operations
- Construction site power
- Outdoor events
- Farm operations
- Security systems
- Emergency lighting
- Power tools operation
- General portable electricity supply

Accessories
- Generator Unit
- Electric Start Battery
- Spark Plug Wrench
- User Manual
- Carton Box Packaging
`,

        features: `
- Maximum output of 3.5kW
- Rated output of 2.8kW
- Reliable 208cc OHV engine
- Electric and recoil starting systems
- Copper coil alternator
- Air-cooled engine design
- Large 15L fuel tank
- Stable power delivery
- Durable portable frame
- Suitable for home and commercial backup power
`
    },


    {
        id: 11039,
        name: 'Maxmech Plasma Cutter CUT-60',
        category: 'plasma-cutters',
        group: 'Electrical Equipments',

        brand: 'Maxmech',
        model: 'CUT-60',

        price: 570000,

        images: [
            'assets/img/welding machines/maxmech cut 60 plasma cutter.jpg',
            'assets/img/welding machines/maxmech cut 60 plasma cutter.jpg-2.jpeg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Maxmech CUT-60 Plasma Cutter is a professional inverter plasma cutting machine designed for clean, fast and accurate cutting of conductive metals including mild steel, stainless steel, galvanized steel, aluminum and copper. Utilizing advanced inverter technology, the machine delivers stable cutting performance, high efficiency and reduced power consumption.
The machine features a non-contact pilot arc starting system that improves cutting quality and extends consumable life. Its compact and portable design makes it suitable for fabrication workshops, construction sites, maintenance operations and industrial metalworking applications.
Designed for demanding cutting tasks, the CUT-60 provides smooth cuts with minimal slag while maintaining excellent cutting speed and precision.
  `,

        specification: `
  - Product Name: Plasma Cutter
  - Brand: Maxmech
  - Model: CUT-60
  - Input Voltage: 220V AC
  - Phase: Single Phase
  - Frequency: 50/60Hz
  - Rated Input Power: 10 KVA
  - Rated Input Current: 45.7A
  - Output Current Range: 20–60A
  - No Load Voltage: 415V
  - Duty Cycle: 60%
  - Air Pressure Requirement: 0.4–0.6 MPa
  - Arc Start: Non-Touch Pilot Arc
  - Cutting Thickness: 0.1–20mm
  - Cooling System: Fan Cooled
  - Application: Metal Cutting
  `,

        features: `
  - Adjustable cutting current from 20A to 60A
  - Non-touch pilot arc ignition
  - Clean and precise cutting performance
  - Suitable for mild steel, stainless steel and aluminum
  - Compact and portable design
  - High cutting speed and efficiency
  - Reduced slag and smooth cutting edges
  - Advanced inverter technology
  - Durable industrial-grade construction
  - Ideal for fabrication and maintenance workshops
  `
    },

    {
        id: 11040,
        name: 'Maxmech Plasma Cutter CUT-40',
        category: 'plasma-cutters',
        group: 'Electrical Equipments',
        brand: 'Maxmech',
        model: 'CUT-40',
        price: 280000,

        images: [
            'assets/img/welding machines/maxmech cut 40 plasma cutter.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Maxmech CUT-40 Plasma Cutter is a compact inverter plasma cutting machine designed for clean and efficient cutting of conductive metals including mild steel, stainless steel, aluminum, copper and galvanized materials. Built with advanced inverter technology, it delivers stable cutting performance, energy efficiency and reliable operation for workshop and field applications.

The machine is lightweight and portable, making it suitable for fabrication shops, maintenance operations, construction sites and metalworking professionals. With smooth arc performance and adjustable output current, the CUT-40 provides accurate cuts with minimal distortion and reduced slag formation.
  `,

        specification: `
  - Product Name: Plasma Cutter
  - Brand: Maxmech
  - Model: CUT-40
  - Input Voltage: 220V AC
  - Phase: Single Phase
  - Frequency: 50/60Hz
  - Output Current Range: 20–40A
  - Rated Input Power: 4.8–7.0 KVA
  - No Load Voltage: 230–280V
  - Duty Cycle: 60%
  - Air Pressure Requirement: 3–5 Bar
  - Cutting Thickness: 1–10mm Clean Cut
  - Maximum Cutting Thickness: 12–20mm
  - Cooling System: Fan Cooled
  - Protection Class: IP21S
  - Application: Metal Cutting
  `,

        features: `
  - Advanced inverter technology
  - Adjustable cutting current from 20A to 40A
  - Compact and portable design
  - Clean and precise metal cutting
  - Suitable for mild steel, stainless steel and aluminum
  - High cutting efficiency
  - Stable arc performance
  - Fan-cooled for improved durability
  - Easy operation and maintenance
  - Ideal for fabrication and maintenance work
  `
    },

    {
        id: 11041,
        name: 'TOTAL TW21302 Inverter MMA Welding Machine-130A',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',

        brand: 'TOTAL',

        price: 180000,
        discountPrice: 17000,

        power: '130A',

        images: [
            'assets/img/welding machines/total welding mahine -130a-tw21302-2.webp',
            'assets/img/welding machines/total welding mahine -130a-tw21302-3.jpeg',
            'assets/img/welding machines/total welding mahine -130a-tw21302-3.jpeg'

        ],

        inStock: true,

        jumiaLink: '',
        kongaLink: '',

        description: `
TOTAL TW21302 Inverter MMA Welding Machine is a compact and efficient inverter welding machine designed for light to medium-duty welding applications. It is suitable for workshop operations, fabrication jobs, maintenance work, gate construction, and general metal welding tasks.
Built with advanced inverter technology, the machine delivers stable welding performance, energy efficiency, and smooth arc operation. Its lightweight portable design makes it easy to carry and convenient for both indoor and outdoor welding jobs.
The TOTAL TW21302 supports MMA (Manual Metal Arc) welding and is compatible with different welding electrode types for mild steel and general fabrication applications. It is designed with overload and thermal protection systems to ensure safe and reliable operation during extended use.
`,

        specification: `
  - Product Name: Inverter MMA Welding Machine
  - Model: TW21302
  - Brand: TOTAL
  - Welding Type: MMA (Manual Metal Arc)
  - Output Current: 130A
  - Voltage: 220-240V ~ 50/60Hz
  - Technology: Inverter Technology
  - Electrode Compatibility: Suitable for various MMA electrodes
  - Cooling System: Air Cooling
  - Protection Features: Thermal and overload protection
  - Usage: Fabrication, maintenance, workshop, gate and metal welding
  `,

        features: `
  - Advanced inverter welding technology
  - Stable and efficient welding performance
  - Compact and lightweight portable design
  - Energy-saving operation
  - Smooth arc starting and welding control
  - Thermal and overload protection system
  - Suitable for workshop and fabrication tasks
  - Compatible with different welding electrodes
  - Durable construction for long-term use
  `
    },


    {
        id: 11042,
        name: 'TOTAL TW21605 Inverter MMA Welding Machine-160A',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',

        brand: 'TOTAL',

        price: 235000,
        discountPrice: 210000,

        power: '160A',

        images: [
            'assets/img/welding machines/total welding mahine -160a-tw21605.jpg',
            'assets/img/welding machines/total welding mahine -160a-tw21605-3.jpg',
            'assets/img/welding machines/total welding mahine -160a-tw21605-2.avif'
        ],

        inStock: true,

        jumiaLink: '',
        kongaLink: '',

        description: `
TOTAL TW21605 Inverter MMA Welding Machine is a high-performance inverter welding machine designed for professional and industrial welding applications. It is suitable for fabrication workshops, construction work, maintenance operations, gate production, and general metal welding tasks.
Equipped with advanced inverter technology, the machine delivers stable arc performance, efficient power consumption, and smooth welding operation. Its compact and portable design makes transportation easy while providing reliable performance for both indoor and outdoor use.
The TOTAL TW21605 supports MMA (Manual Metal Arc) welding and is compatible with different welding electrodes for welding mild steel and other metals. Built with thermal and overload protection systems, it ensures safe and durable operation during extended working hours.
`,

        specification: `
  - Product Name: Inverter MMA Welding Machine
  - Model: TW21605
  - Brand: TOTAL
  - Welding Type: MMA (Manual Metal Arc)
  - Output Current: 160A
  - Voltage: 220-240V ~ 50/60Hz
  - Technology: Inverter Technology
  - Electrode Compatibility: Suitable for various MMA electrodes
  - Cooling System: Air Cooling
  - Protection Features: Thermal and overload protection
  - Usage: Fabrication, construction, maintenance, gate and metal welding
  `,

        features: `
  - Advanced inverter welding technology
  - Stable and smooth arc performance
  - Energy-efficient operation
  - Compact and portable design
  - Thermal and overload protection system
  - Suitable for professional fabrication work
  - Compatible with multiple welding electrodes
  - Durable construction for industrial applications
  - Ideal for workshop and site welding operations
  `
    },


    {
        id: 11043,
        name: 'TOTAL TW22005 Inverter MMA Welding Machine',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'TOTAL',
        price: 320000,
        discountPrice: 295000,

        power: '200A',

        images: [
            'assets/img/welding machines/total welding mahine -200a-tw22005.jpg',
            'assets/img/welding machines/total welding mahine -200a-tw22005-4.jpg',
            'assets/img/welding machines/total welding mahine -200a-tw22005-3.jpg',
            'assets/img/welding machines/total welding mahine -200a-tw22005-2.jpg'
        ],

        inStock: true,

        jumiaLink: '',
        kongaLink: '',

        description: `
TOTAL TW22005 Inverter MMA Welding Machine is a powerful and efficient inverter welding machine designed for professional fabrication, construction, industrial maintenance, and heavy-duty welding applications. It is suitable for welding mild steel, metal structures, gates, and various fabrication projects.
Built with advanced inverter technology, the machine delivers stable welding current, smooth arc performance, and energy-efficient operation. Its compact portable design allows easy transportation while maintaining reliable performance for both workshop and outdoor site operations.
The TOTAL TW22005 supports MMA (Manual Metal Arc) welding and is compatible with a wide range of welding electrodes. It is equipped with thermal and overload protection systems to ensure safe, stable, and long-lasting operation during demanding welding tasks.
`,

        specification: `
  - Product Name: Inverter MMA Welding Machine
  - Model: TW22005
  - Brand: TOTAL
  - Welding Type: MMA (Manual Metal Arc)
  - Output Current: 200A
  - Voltage: 220-240V ~ 50/60Hz
  - Technology: Inverter Technology
  - Electrode Compatibility: Suitable for various MMA electrodes
  - Cooling System: Air Cooling
  - Protection Features: Thermal and overload protection
  - Usage: Fabrication, construction, maintenance, industrial and metal welding
  `,

        features: `
  - Advanced inverter welding technology
  - Powerful 200A welding output
  - Stable and smooth arc performance
  - Energy-efficient operation
  - Compact and portable design
  - Thermal and overload protection system
  - Suitable for industrial and fabrication work
  - Compatible with multiple welding electrodes
  - Durable construction for long-term professional use
  `
    },


    {
        id: 11044,
        name: 'TOTAL TW22505 Inverter MMA Welding Machine',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',

        brand: 'TOTAL',

        price: 440000,
        discountPrice: 410000,

        power: '250A',

        images: [
            'assets/img/welding machines/total welding mahine -250a-tw22505.jpg'
        ],

        inStock: true,

        jumiaLink: '',
        kongaLink: '',

        description: `
TOTAL TW22505 Inverter MMA Welding Machine is a heavy-duty professional inverter welding machine designed for industrial fabrication, construction work, engineering workshops, maintenance operations, and demanding metal welding applications. It is suitable for welding steel structures, gates, pipes, and various industrial fabrication projects.
Featuring advanced inverter technology, the machine delivers stable welding current, smooth arc control, fast arc starting, and energy-efficient performance. Its robust yet portable design makes it suitable for both workshop and on-site welding operations.
The TOTAL TW22505 supports MMA (Manual Metal Arc) welding and is compatible with different welding electrodes for a wide range of welding tasks. Built with thermal protection and overload safety systems, the machine ensures reliable and durable operation during prolonged use.
`,

        specification: `
  - Product Name: Inverter MMA Welding Machine
  - Model: TW22505
  - Brand: TOTAL
  - Welding Type: MMA (Manual Metal Arc)
  - Output Current: 250A
  - Voltage: 220-240V ~ 50/60Hz
  - Technology: Inverter Technology
  - Electrode Compatibility: Suitable for various MMA electrodes
  - Cooling System: Air Cooling
  - Protection Features: Thermal and overload protection
  - Usage: Industrial fabrication, construction, maintenance, and metal welding
  `,

        features: `
  - Advanced inverter welding technology
  - Powerful 250A welding performance
  - Stable and smooth arc operation
  - Energy-saving and efficient performance
  - Compact and portable heavy-duty design
  - Fast arc starting capability
  - Thermal and overload protection system
  - Suitable for industrial and fabrication applications
  - Durable construction for professional long-term use
  `
    },

    {
        id: 11045,
        name: 'MAXMECH MMA-400T Inverter Welding Machine',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',

        brand: 'MAXMECH',

        price: 395000,
        discountPrice: 360000,

        power: '400A',

        images: [
            'assets/img/welding machines/maxmech MMA-400T.jpg-2.jpg',
            'assets/img/welding machines/maxmech MMA-400T.jpg',
            'assets/img/welding machines/maxmech MMA-400T.jpg-3.webp',
            'assets/img/welding machines/maxmech MMA-400T.jpg-4.jpg',
            'assets/img/welding machines/maxmech MMA-400T.jpg-5.jpg'
        ],

        inStock: true,

        jumiaLink: '',
        kongaLink: '',

        description: `
MAXMECH MMA-400T Inverter Welding Machine is a heavy-duty industrial inverter welding machine designed for professional fabrication, construction, engineering, and industrial welding applications. It is suitable for welding steel structures, pipes, gates, fabrication materials, and heavy metal components.
Built with advanced IGBT inverter technology, the machine delivers stable arc performance, smooth welding output, and energy-efficient operation. Its powerful 400A welding capacity makes it suitable for demanding industrial and workshop operations requiring continuous and reliable welding performance.
The MAXMECH MMA-400T features durable industrial construction with an efficient cooling system, overload protection, and thermal safety features for long working hours. It supports MMA (Manual Metal Arc) welding and works with a wide range of welding electrodes for various metal fabrication tasks.
`,

        specification: `
  - Product Name: Inverter MMA Welding Machine
  - Model: MMA-400T
  - Brand: MAXMECH
  - Welding Type: MMA (Manual Metal Arc)
  - Output Current: 20-400A
  - Input Voltage: AC 220V / 380V ~ 50/60Hz
  - Rated Input Power: Approx. 11kVA
  - Technology: Advanced IGBT Inverter Technology
  - Duty Cycle: 60% at 400A
  - No-load Voltage: 70V
  - Cooling System: Air Cooling
  - Protection Class: IP21S
  - Usage: Industrial fabrication, construction, maintenance, and heavy-duty welding
  `,

        features: `
  - Powerful 400A industrial welding performance
  - Advanced IGBT inverter technology
  - Stable arc and smooth welding operation
  - Energy-efficient performance
  - Heavy-duty industrial construction
  - Thermal and overload protection system
  - Efficient cooling for extended operation
  - Compatible with multiple MMA electrodes
  - Suitable for fabrication workshops and construction sites
  `
    },


    {
        id: 11046,
        name: 'MAXMECH BC-50 Battery Charger',
        category: 'battery-chargers',
        group: 'Electrical Equipments',
        brand: 'MAXMECH',

        price: 110000,
        discountPrice: 97000,

        power: '12V/24V',

        images: [
            'assets/img/battery and battery chargers/maxmech bc-50 battery charger.jpg',
            'assets/img/battery and battery chargers/maxmech bc-50 battery charger.jpg-2.jpg',
            'assets/img/battery and battery chargers/maxmech bc-50 battery charger.jpg-3.jpg',
        ],

        inStock: true,

        jumiaLink: '',
        kongaLink: '',

        description: `
MAXMECH BC-50 Battery Charger is a heavy-duty automotive battery charger designed for charging, maintaining, and boosting 12V and 24V batteries. It is suitable for cars, trucks, buses, tractors, generators, workshops, garages, and industrial battery maintenance applications.
Built with durable components and efficient charging technology, the charger delivers reliable battery charging performance while helping extend battery life. It features a built-in amp meter for monitoring charging status and includes overload and thermal protection systems for safe operation.
Its portable steel body construction with carrying handle makes it convenient for workshop and mobile service use. The MAXMECH BC-50 is ideal for mechanics, automotive technicians, fleet operators, and general battery charging tasks.
`,

        specification: `
  - Product Name: Battery Charger
  - Model: BC-50
  - Brand: MAXMECH
  - Charging Voltage: 12V / 24V
  - Input Voltage: 220-240V ~ 50/60Hz
  - Charging Current: Approx. 30A-50A
  - Rated Capacity: Approx. 480W / 960W
  - Display Type: Analog Amp Meter
  - Protection Features: Thermal and Overload Protection
  - Body Type: Portable Metal Body
  - Usage: Automotive Battery Charging and Maintenance
  - Suitable Batteries: Lead-Acid Batteries
  `,

        features: `
  - Heavy-duty battery charging performance
  - Supports both 12V and 24V batteries
  - Built-in amp meter display
  - Thermal and overload protection system
  - Durable portable metal construction
  - Easy-to-carry handle design
  - Suitable for workshop and garage use
  - Reliable charging and battery maintenance
  - Ideal for automotive and industrial batteries
  `
    },


    {
        id: 11047,
        name: 'MAXMECH TIG/MMA-400 Inverter Welding Machine',
        category: 'tig-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'MAXMECH',
        price: 780000,
        discountPrice: 720000,
        power: '380A',

        images: [
            'assets/img/welding machines/maxmech TIG MMA-400.jpg',
            'assets/img/welding machines/maxmech TIG MMA-400.jpg-2.jpg',
            'assets/img/welding machines/maxmech TIG MMA-400.jpg-4.png',
            'assets/img/welding machines/maxmech TIG MMA-400.jpg-3.png'
        ],

        inStock: true,

        jumiaLink: '',
        kongaLink: '',

        description: `
MAXMECH TIG/MMA-400 Inverter Welding Machine is a heavy-duty industrial welding machine designed for both TIG (Tungsten Inert Gas) and MMA (Manual Metal Arc) welding applications. It is suitable for fabrication workshops, pressure vessel manufacturing, pipe installation, construction projects, stainless steel welding, maintenance work, and industrial metal fabrication.
Built with advanced MOSFET inverter technology, the machine delivers stable arc performance, smooth welding output, and efficient energy utilization. It supports both argon welding and manual electrode welding, making it a versatile solution for professional welders and industrial users.
The MAXMECH TIG/MMA-400 features digital preset functions, arc force compensation, thermal protection, overcurrent protection, and a durable industrial design for reliable long-hour operation in demanding environments.
`,

        specification: `
  - Product Name: TIG/MMA Inverter Welding Machine
  - Model: TIG/MMA-400
  - Brand: MAXMECH
  - Welding Type: TIG (Argon Welding) / MMA (Manual Metal Arc)
  - Rated Input Voltage: 3 Phase AC 380V
  - Rated Input Power: 18KVA
  - Rated Input Current: 18.5A
  - Output Current Range: TIG 10-380A / MMA 10-380A
  - Rated Output Voltage: 25.2V
  - No Load Voltage: 70V
  - Duty Cycle: 60%
  - Insulation Class: F
  - Cooling System: Air Cooling
  - Technology: MOSFET Inverter Technology
  - Usage: Fabrication, Pipe Welding, Construction, Industrial Welding
  `,

        features: `
  - Dual TIG and MMA welding functionality
  - Advanced MOSFET inverter technology
  - Stable arc and smooth welding performance
  - Digital preset control system
  - Fast dynamic arc response
  - Arc force compensation function
  - Overcurrent and overheating protection
  - Durable industrial-grade construction
  - Suitable for fabrication and pressure vessel welding
  - Reliable performance for professional welding operations
  `
    },

    {
        id: 11048,
        name: 'Portable Oxygen Acetylene Welding & Cutting Kit',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,
        brand: 'Generic',
        model: 'Oxy-Acetylene Kit',
        price: 400000,
        discountPrice: 350000,
        images: [
            'assets/img/welding accessories/oxygen and acetylene gas cutting kit.webp',
            'assets/img/welding accessories/oxygen and acetylene gas cutting kit-2.webp',
            'assets/img/welding accessories/oxygen and acetylene gas cutting kit-3.webp',
            'assets/img/welding accessories/oxygen and acetylene gas cutting kit-4.webp',
            'assets/img/welding accessories/oxygen and acetylene gas cutting kit-5.webp',
            'assets/img/welding accessories/oxygen and acetylene gas cutting kit-6.webp',
            'assets/img/welding accessories/oxygen and acetylene gas cutting kit-7.webp'
        ],
        inStock: true,
        jumiaLink: '',
        kongaLink: '',
        description: `
Portable Oxygen Acetylene Welding and Cutting Kit is a complete gas welding, brazing, soldering and metal cutting solution designed for fabrication workshops, automotive repair, plumbing, maintenance work and industrial applications. The kit includes oxygen and acetylene regulators, cutting torch, welding nozzles, hoses, safety goggles and essential accessories packed in a durable carrying case for convenient transportation and storage.
`,
        specification: `
  - Product Name: Oxygen Acetylene Welding & Cutting Kit
  - Brand: Generic
  - Fuel Gas: Acetylene
  - Oxidizing Gas: Oxygen
  - Regulator Type: Dual Gauge Regulators
  - Hose Length: Approx. 2.5m – 3m
  - Torch Type: Cutting and Welding Torch
  - Nozzle Type: Interchangeable Welding Tips
  - Carrying Case: Heavy-Duty Plastic Case
  - Application: Welding, Cutting, Brazing and Soldering
  `,
        accessories: `
  - 1 x Oxygen Regulator
  - 1 x Acetylene Regulator
  - 1 x Cutting Torch Handle
  - 1 x Cutting Attachment
  - 3 x Welding Nozzles
  - 1 x Twin Welding Hose
  - 1 x Protective Welding Goggles
  - 1 x Spark Lighter
  - 1 x Multi-Purpose Wrench
  - 1 x Carry Storage Case
  - User Manual
  `,
        features: `
  - Complete oxy-acetylene welding kit
  - Suitable for welding and metal cutting
  - Durable brass torch construction
  - Dual-gauge pressure regulators
  - Interchangeable welding nozzles
  - Portable carrying case
  - Suitable for brazing applications
  - Suitable for soldering operations
  - Easy setup and operation
  - Ideal for workshops and fabrication shops
  - Professional-grade performance
  - Durable and long-lasting components
  `
    },


    {
        id: 11049,
        name: 'TIG-C Series DC Inverter TIG/MMA Welder',
        category: 'tig-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,

        brand: 'Generic',
        model: 'TIG-C Series',

        price: 0,
        discountPrice: 0,

        images: [
            'assets/img/welding machines/duba giant welding machine.webp'
        ],

        inStock: false,

        variations: [
            { size: '200A', price: 0, inStock: true },
            { size: '250A', price: 0, inStock: true },
            { size: '315A', price: 0, inStock: true }
        ],

        description: `TIG-C Series DC Inverter TIG/MMA Welder is a professional dual-function welding machine designed for both TIG (Tungsten Inert Gas) and MMA (Stick) welding applications. Built with advanced inverter technology, it delivers stable arc performance, excellent welding quality and energy efficiency. Suitable for welding stainless steel, carbon steel, alloy steel, copper and other ferrous metals, it is widely used in fabrication workshops, maintenance operations, construction sites and industrial manufacturing environments.`,

        specification: `
  - Product Name: DC Inverter TIG/MMA Welder
  - Brand: Generic
  - Model: TIG-C Series
  - Welding Process: TIG / MMA (Stick)
  - Input Voltage: 380V
  - Frequency: 50/60Hz
  - Rated Input Power: 9.8 - 14.3KVA
  - Output Current Range: 200A - 315A
  - Duty Cycle: 60%
  - No Load Voltage: 56V - 70V
  - Efficiency: ≥85%
  - Power Factor: ≥0.93
  - Protection Class: IP21S
  - Insulation Class: F
  - Cooling System: Forced Air Cooling
  - Electrode Diameter: 1.6 - 5.0mm
  - Applicable Materials: Stainless Steel, Carbon Steel, Alloy Steel and Copper
  - Technology: IGBT Inverter Technology

  Accessories Included:
  - 1 x TIG-C Series TIG/MMA Welder
  - 1 x TIG Torch
  - 1 x Electrode Holder
  - 1 x Earth Clamp
  - 1 x Welding Cable Set
  - 1 x Gas Hose
  - 1 x User Manual
  `,

        features: `
  - Dual TIG and MMA welding functions
  - Advanced IGBT inverter technology
  - Stable welding arc performance
  - High welding efficiency
  - Low power consumption
  - Hot Start function
  - Arc Force control
  - Anti-Stick protection
  - Digital display for precise settings
  - Compact and rugged industrial design
  - Over-voltage protection
  - Over-current protection
  - Overheat protection
  - Suitable for stainless steel fabrication
  - Professional industrial welding performance
  `
    },

    {
        id: 11050,
        name: 'WORXFLEX MMA320 DC Inverter Welding Machine',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,

        brand: 'WORXFLEX',
        model: 'MMA320',

        price: 32000,
        discountPrice: 290000,

        images: [
            'assets/img/welding machines/workflex welding machines-mma320-3.png',
            'assets/img/welding machines/workflex welding machines-mma320.png',
            'assets/img/welding machines/workflex welding machines-mma320-2.png'
        ],

        inStock: true,

        description: `The WORXFLEX MMA320 DC Inverter Welding Machine is a compact and powerful arc welding machine designed for professional welders, fabricators, workshops and construction applications. Featuring advanced inverter technology, it provides stable arc performance, reduced spatter and excellent welding quality. Its lightweight portable design with digital display makes it ideal for both indoor and outdoor welding jobs.`,

        specification: `
  - Product Name: DC Inverter MMA Welder
  - Brand: WORXFLEX
  - Model: MMA320
  - Welding Type: MMA / Arc Welding
  - Technology: IGBT Inverter
  - Input Voltage: 220V ±15%
  - Frequency: 50/60Hz
  - Rated Input Power: 7.6kW
  - Duty Cycle: 60%
  - Output Current Range: 20A - 320A
  - No Load Voltage: 65V
  - Electrode Diameter: 1.6mm - 5.0mm
  - Display Type: Digital Current Display
  - Cooling System: Forced Air Cooling
  - Insulation Class: F
  - Protection Class: IP21S
  - Connector Type: Large Industrial Connector
  - Application: Steel Fabrication, Gates, Doors, Tanks, Construction and General Repairs

  Accessories Included:
  - 1 x Electrode Holder with Cable
  - 1 x Earth Clamp with Cable
  - 1 x Power Plug
  - 1 x User Manual
  `,

        features: `
  - Advanced IGBT inverter technology
  - Stable welding arc performance
  - Digital current display
  - Adjustable welding current
  - Low spatter welding operation
  - Hot start function
  - Overheat protection
  - Over-voltage protection
  - Compact and portable design
  - Energy-saving operation
  - Large industrial cable connectors
  - Suitable for continuous workshop use
  `
    },

    {
        id: 11051,
        name: 'WORXFLEX MINI 200 DC Inverter Welding Machine',
        category: 'mma-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,

        brand: 'WORXFLEX',
        model: 'MINI 200',

        price: 97000,
        discountPrice: 85000,

        images: [
            'assets/img/welding machines/workflex welding machines-mini200.png',
            'assets/img/welding machines/workflex welding machines-mini200-2.png'
        ],

        inStock: true,

        description: `The WORXFLEX MINI 200 DC Inverter Welding Machine is a compact and lightweight MMA arc welder designed for household repairs, light fabrication, maintenance work and mobile welding applications. Built with advanced inverter technology, it provides stable arc performance, energy efficiency and smooth welding operation while remaining highly portable and easy to carry.`,

        specification: `
  - Product Name: DC Inverter MMA Welder
  - Brand: WORXFLEX
  - Model: MINI 200
  - Welding Type: MMA / Arc Welding
  - Technology: IGBT Inverter
  - Input Voltage: 220V ±15%
  - Frequency: 50/60Hz
  - Rated Input Power: 4.8kW
  - Output Current Range: 20A - 200A
  - Duty Cycle: 60%
  - No Load Voltage: 60V
  - Electrode Diameter: 1.6mm - 3.2mm
  - Cooling System: Forced Air Cooling
  - Insulation Class: F
  - Protection Class: IP21S
  - Display Type: Digital Display
  - Application: Home Repairs, Gates, Burglar Proofs, Light Fabrication and Maintenance Work

  Accessories Included:
  - 1 x Electrode Holder with Cable
  - 1 x Earth Clamp with Cable
  - 1 x Welding Shield
  - 1 x Chipping Hammer/Brush
  - 1 x User Manual
  `,

        features: `
  - Compact mini inverter design
  - Lightweight and highly portable
  - Advanced IGBT technology
  - Stable arc performance
  - Energy-saving operation
  - Anti-stick welding function
  - Hot start capability
  - Overheat protection
  - Over-voltage protection
  - Suitable for 1.6mm to 3.2mm electrodes
  - Easy-to-use current adjustment
  - Ideal for household and workshop applications
  `
    },

    {
        id: 11052,
        name: 'TOTAL Gasoline Generator (TP165006)',
        category: 'petrol-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        brand: 'TOTAL',
        price: 850000,
        power: '5.0kW Rated / 6.5kW Max',
        discountPrice: 800000,

        images: [
            'assets/img/generators/total gasoline generator 6.5kva TP165006-2.jpg',
            'assets/img/generators/total gasoline generator 6.5kva TP165006-3.jpg',
            'assets/img/generators/total gasoline generator 6.5kva TP165006-4.jpg',
            'assets/img/generators/total gasoline generator 6.5kva TP165006-5.jpg',
            'assets/img/generators/total gasoline generator 6.5kva TP165006-6.jpg',
            'assets/img/generators/total gasoline generator 6.5kva TP165006-7.jpg',
            'assets/img/generators/total gasoline generator 6.5kva TP165006-10.jpg',
            'assets/img/generators/total gasoline generator 6.5kva TP165006-9.jpg',
            'assets/img/generators/total gasoline generator 6.5kva TP165006-8.jpg'
        ],

        inStock: true,

        description: 'The TOTAL TP165006 is a heavy-duty 6.5kW maximum output gasoline generator designed for construction sites, workshops, offices, homes, farms, and backup power applications. Powered by a 420cc 4-stroke OHV engine with both electric and recoil starting systems, it delivers reliable power output and long runtime. The generator features a copper-wire alternator, large 25L fuel tank, and wheel kit for easier transportation.',

        specification: `
  Model: TP165006
  Generator Type: Gasoline Generator
  Rated Voltage: 220-240V
  Rated Frequency: 50Hz
  Rated Output Power: 5.0kW
  Maximum Output Power: 6.5kW
  Rated Speed: 3000rpm
  Engine Type: 4-Stroke OHV
  Engine Displacement: 420cc
  Cooling System: Air-Cooled
  Ignition System: T.C.I
  Starting System: Recoil + Electric Start
  Alternator Type: Copper Wire
  Fuel Tank Capacity: 25L
  Dry Weight: 80kg
  Wheel Kit: Yes
  Auxiliary Handle: Yes

  Accessories:
  Auxiliary Handle Set
  Transport Wheels
  Battery for Electric Start
  User Manual
  Tool Kit
  Carton Packaging
  `,

        features: `
  Powerful 6.5kW maximum output
  Reliable 5.0kW continuous running power
  Large 420cc 4-stroke OHV engine
  Dual starting system (electric and recoil)
  Copper-wound alternator for durability and efficiency
  Large 25L fuel tank for extended operation
  Air-cooled engine for reliable performance
  Heavy-duty frame construction
  Transport wheels and handles for mobility
  Suitable for homes, offices, workshops, farms, and construction sites
  Stable power supply for tools, equipment, and appliances
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 11053,
        name: 'TOTAL Diesel Generator (TP450001)',
        category: 'desiel-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        model: '',
        brand: 'TOTAL',
        price: 1100000,
        power: '4.5kW Rated / 5.0kW Max',
        discountPrice: 980000,

        images: [
            'assets/img/generators/TOTAL Diesel Generator (TP450001).jpg',
            'assets/img/generators/TOTAL Diesel Generator (TP450001)-5.jpg',
            'assets/img/generators/TOTAL Diesel Generator (TP450001)-4.jpg',
            'assets/img/generators/TOTAL Diesel Generator (TP450001)-3.jpg',
            'assets/img/generators/TOTAL Diesel Generator (TP450001)-2.jpg',
            'assets/img/generators/TOTAL Diesel Generator (TP450001)-6.jpg'
        ],

        inStock: false,

        description: 'The TOTAL TP450001 Diesel Generator is a heavy-duty single-phase power generator designed for homes, offices, workshops, farms, and construction sites. Powered by a reliable 9HP diesel engine with electric and recoil starting systems, it provides stable and efficient power output for tools, equipment, lighting, and essential appliances. The generator features a copper-wound alternator, AVR voltage regulation, and transport wheels for dependable performance and easy mobility.',

        specification: `
  Model: TP450001
  Generator Type: Diesel Generator
  Rated Voltage: 220V - 240V
  Rated Frequency: 50Hz
  Phase: Single Phase
  Rated Output Power: 4.5kW
  Maximum Output Power: 5.0kW
  Rated Speed: 3000rpm
  DC Output: 12V, 8.3A
  Engine Type: 4-Stroke Diesel
  Engine Power: 9.0HP
  Engine Displacement: 418cc
  Cooling System: Air-Cooled
  Starting System: Electric + Recoil Start
  Alternator Type: Copper Coil
  Voltage Regulation: AVR
  Fuel Tank Capacity: 15L
  Dry Weight: 102kg

  Accessories:
  Auxiliary Handle Set
  Transport Wheels
  Electric Start Battery
  Tool Kit
  User Manual
  Carton Packaging
  `,

        features: `
  Powerful 5.0kW maximum output capacity
  Reliable 4.5kW continuous power output
  Heavy-duty 9HP diesel engine
  Electric and recoil starting systems
  Copper-wound alternator for improved durability
  AVR voltage regulation for stable power delivery
  Air-cooled engine for efficient operation
  15L fuel tank for extended runtime
  Built-in 12V DC output for battery charging applications
  Heavy-duty frame construction
  Wheels and auxiliary handles for easier transportation
  Suitable for homes, workshops, farms, offices, and construction sites
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 11054,
        name: 'Double Cylinder Car Air Compressor Tyre Inflator Repair Kit',
        category: 'auto-air-compressors',
        group: 'Electrical Equipments',
        brand: 'Generic',
        price: 63250,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274050/Astonic-Mart/Products/air%20compressors/double_cylinder_auto_air_compressor.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274039/Astonic-Mart/Products/air%20compressors/double_cylinder_auto_air_compressor-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274041/Astonic-Mart/Products/air%20compressors/double_cylinder_auto_air_compressor-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274044/Astonic-Mart/Products/air%20compressors/double_cylinder_auto_air_compressor-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274047/Astonic-Mart/Products/air%20compressors/double_cylinder_auto_air_compressor-5.jpg'
        ],

        inStock: true,

        description: `The Double Cylinder Car Air Compressor Tyre Inflator is a heavy-duty portable inflation system designed for fast and efficient tyre inflation of cars, SUVs, pickup trucks, vans, and light-duty commercial vehicles. Equipped with dual cylinders for higher airflow and faster inflation performance, it features an easy-to-read analogue pressure gauge for accurate tyre pressure monitoring. The unit comes complete with a puncture repair kit and a rugged toolbox for convenient storage and transportation. Ideal for roadside emergencies, vehicle maintenance, off-road adventures, and workshop applications, this inflator delivers reliable performance whenever you need it.

Items Included in the Package:
• 1 × Double Cylinder Air Compressor
• 1 × Analogue Pressure Gauge
• 1 × Air Hose
• 1 × Battery Connection Cable
• 1 × Puncture Repair Kit
• 1 × Set of Inflation Nozzles
• 1 × Heavy-Duty Carrying Tool Box
• User Manual`,

        specification: `
Category: Auto Air Compressors
Group: Electrical Equipments
Brand: Generic
Model: Double Cylinder Tyre Inflator Kit
Compressor Type: Double Cylinder
Voltage: 12V DC
Maximum Pressure: 150 PSI
Pressure Gauge: Analogue Gauge
Power Source: Vehicle Battery Connection
Air Hose Length: Heavy-Duty Flexible Hose
Cable Length: Extended Power Cable
Duty Cycle: Continuous Heavy-Duty Operation
Application: Tyre Inflation and Emergency Repairs
Suitable For: Cars, SUVs, Pickups and Vans
Storage Case: Heavy-Duty Tool Box
Packing Type: Carrying Case
`,

        features: `
High-performance double cylinder design
Fast tyre inflation capability
150 PSI maximum pressure
Built-in analogue pressure gauge
Heavy-duty metal construction
Direct battery connection
Portable and compact design
Suitable for cars and SUVs
Ideal for off-road vehicles
Reliable emergency inflation solution
Durable air hose assembly
Includes puncture repair kit
Multiple inflation accessories included
Heavy-duty carrying toolbox
Easy storage and transportation

Accessories:
1 × Air Hose
1 × Battery Connection Cable
1 × Puncture Repair Kit
1 × Inflation Nozzle Set
1 × Heavy-Duty Tool Box
User Manual
`,

        capacity: '150 PSI',
        power: '12V DC'
    },

    {
        id: 11055,
        name: 'TOTAL Electrode Holder',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'TOTAL',
        price: 6500,

        images: [
            'assets/img/welding accessories/TOTAL ELECTRODE HOLDER 300A.jpg',
            'assets/img/welding accessories/TOTAL ELECTRODE HOLDER 500A.jpg',
            'assets/img/welding accessories/TOTAL ELECTRODE HOLDER 800A.jpg',
            'assets/img/welding accessories/TOTAL ELECTRODE HOLDER 1.000A.jpg'
        ],

        variations: [
            {
                model: 'TWAH30006', capacity: '300A', inStock: true, price: 6500
            },
            {
                model: 'TWAH50006', capacity: '500A', inStock: true, price: 9000
            },

            {
                model: 'TWAH80006', capacity: '800A', inStock: true, price: 13500
            },
            {
                model: 'TWAH10006', capacity: '1000A', inStock: true, price: 16500
            }
        ],

        inStock: true,

        description: `The TOTAL Electrode Holder Series is designed for professional MMA (Stick) welding applications, providing secure electrode clamping and efficient current transmission for stable welding performance. Manufactured with high-conductivity copper alloy jaws and durable heat-resistant insulation, these electrode holders ensure maximum safety, reliability, and durability in demanding welding environments. Suitable for fabrication workshops, construction sites, steelworks, maintenance operations, and industrial welding applications. Available in multiple current ratings ranging from 300A to 1000A to meet different welding requirements.

Items Included in the Package:
• 1 × TOTAL Electrode Holder
• Product Label`,

        specification: `
Category: Welding Accessories
Parent Category: Welding Machines
Group: Electrical Equipments
Brand: TOTAL
Series: TWAH Electrode Holder Series
Type: Electrode Holder
Current Ratings: 300A / 500A / 600A / 800A / 1000A
Material: Copper Alloy and Heat-Resistant Insulation
Handle Type: Ergonomic Insulated Handle
Electrode Compatibility: Standard MMA Welding Electrodes
Application: MMA / ARC / Stick Welding
Usage: Industrial and Professional Welding
Color: Yellow and Black
Packing Type: Label Packed
`,

        features: `
Available in multiple current ratings
High-conductivity copper jaws
Excellent current transfer
Strong electrode gripping force
Heat-resistant insulated handle
Durable industrial construction
Reliable arc stability
Comfortable ergonomic grip
Easy electrode replacement
Heavy-duty welding performance
Suitable for fabrication workshops
Suitable for construction applications
Enhanced operator safety
Long service life
Professional-grade welding accessory

Accessories:
Product Label
`,

        capacity: '300A - 1000A',
        power: 'Manual Welding Accessory'
    },

    {
        id: 11056,
        name: 'Workflex BX1-315 AC Arc Welding Machine',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Workflex',
        price: 380000,

        images: [
            'assets/img/welding machines/workflex arc weld bx1-315.png'
        ],

        inStock: true,

        description: 'The Workflex BX1-315 AC Arc Welding Machine is a heavy-duty transformer-based welding machine designed for industrial fabrication, construction, maintenance workshops, and steel fabrication applications. Equipped with a powerful 315A output capacity, it delivers stable arc performance, deep weld penetration, and reliable operation for welding mild steel, carbon steel, and structural steel materials.\n\nIts rugged wheeled design allows easy movement around workshops and job sites, while the stepless current adjustment system enables precise control for various electrode sizes and welding thicknesses. The machine features fan cooling and thermal protection for extended service life and dependable performance in demanding environments.',

        specification: `
Product Type: AC Arc Welding Machine
Model: BX1-315
Brand: Workflex
Rated Output Current: 315A
Current Range: 60-315A
Input Voltage: 380V Single Phase
Frequency: 50/60Hz
Rated Duty Cycle: 35%
No Load Voltage: 74V
Input Capacity: 24kVA
Electrode Diameter: 2.0-6.0mm
Cooling System: Forced Air Cooling
Insulation Class: F
Protection Class: IP21S
Adjustment Type: Stepless Current Adjustment
Mobility: Wheel Mounted
Machine Type: Transformer Arc Welder
Application: Mild Steel, Carbon Steel and Structural Steel Welding
  `,

        features: `
315A welding output
Heavy-duty transformer design
Stepless current adjustment
Stable welding arc
Deep penetration performance
Forced air cooling system
Suitable for 2.0mm to 6.0mm electrodes
Industrial-grade steel housing
Wheel-mounted for easy mobility
Reliable workshop performance
Low maintenance design
Suitable for fabrication and construction work
  `
    },

    {
        id: 11057,
        name: 'Workflex BX1-400 AC Arc Welding Machine',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Workflex',
        price: 420000,

        images: [
            'assets/img/welding machines/workflex arc weld bx1-400.png'
        ],

        inStock: true,

        description: 'The Workflex BX1-400 AC Arc Welding Machine is a powerful industrial transformer welder engineered for demanding welding applications. Delivering up to 400A output current, it provides excellent arc stability, strong penetration, and reliable performance for structural steel fabrication, construction projects, equipment repairs, and heavy-duty maintenance work.\n\nBuilt with a rugged steel housing and wheel-mounted design, the machine offers durability and easy mobility around workshops and job sites. Its stepless current adjustment system allows precise control for different electrode sizes and material thicknesses, ensuring quality welds across a wide range of applications.',

        specification: `
Product Type: AC Arc Welding Machine
Model: BX1-400
Brand: Workflex
Rated Output Current: 400A
Current Adjustment Range: 80-400A
Input Voltage: 380V
Frequency: 50/60Hz
Rated Input Capacity: 31kVA
Duty Cycle: 35%
No-Load Voltage: 76V
Electrode Diameter: 2.5-6.0mm
Cooling System: Forced Air Cooling
Insulation Class: F
Protection Class: IP21S
Current Control: Stepless Adjustment
Machine Type: Transformer Welder
Mobility: Wheel Mounted
Application: Mild Steel, Carbon Steel and Structural Steel Welding
  `,

        features: `
400A maximum welding output
Heavy-duty transformer technology
Stepless current regulation
Stable and smooth welding arc
Deep weld penetration
Forced air cooling system
Supports 2.5mm to 6.0mm electrodes
Industrial steel cabinet construction
Built-in output terminals
Easy mobility with transport wheels
Reliable performance for heavy fabrication
Suitable for workshop and site operations
  `
    },


    {
        id: 11058,
        name: 'Workflex BX1-630 AC Arc Welding Machine',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Workflex',
        price: 580000,

        images: [
            'assets/img/welding machines/workflex arc weld bx1-630.png'
        ],

        inStock: true,

        description: 'The Workflex BX1-630 AC Arc Welding Machine is a high-capacity industrial transformer welder designed for heavy fabrication, steel construction, engineering workshops, shipbuilding, and maintenance operations. Delivering up to 630A welding output, the machine provides excellent arc stability, deep penetration, and reliable performance for demanding welding tasks.\n\nBuilt with a robust steel enclosure and wheel-mounted design, the BX1-630 offers durability and mobility for industrial environments. Its stepless current adjustment system allows operators to precisely control welding current for different electrode sizes and material thicknesses.',

        specification: `
Product Type: AC Arc Welding Machine
Model: BX1-630
Brand: Workflex
Rated Output Current: 630A
Current Adjustment Range: 150-630A
Input Voltage: 220V / 380V
Frequency: 50/60Hz
Rated Input Capacity: 45kVA
Duty Cycle: 35%
No Load Voltage: 78V
Electrode Diameter: 3.2-8.0mm
Cooling System: Forced Air Cooling
Insulation Class: F
Protection Class: IP21S
Current Control: Stepless Adjustment
Machine Type: Transformer Arc Welder
Mobility: Wheel Mounted
Application: Heavy-Duty Steel Fabrication and Industrial Welding
  `,

        features: `
630A maximum welding output
Heavy-duty transformer technology
Dual voltage operation (220V/380V)
Stepless current adjustment
Stable welding arc performance
Deep weld penetration
Forced air cooling system
Supports 3.2mm to 8.0mm electrodes
Industrial steel cabinet construction
Built-in output terminals
Wheel-mounted for easy movement
Suitable for fabrication workshops and construction sites
Long service life and reliable operation
  `
    },


    {
        id: 11059,
        name: 'Workflex BX6-250A AC Arc Welding Machine',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Workflex',
        price: 135000,

        images: [
            'assets/img/welding machines/workflex arc weld bx6-250a.png'
        ],

        inStock: true,

        description: 'The Workflex BX6-250A AC Arc Welding Machine is a compact transformer-based welder designed for light to medium-duty welding applications. It delivers stable welding performance for fabrication, maintenance, gate construction, steel work, and repair operations. Its portable design with carrying handles makes transportation easy between workshops and job sites.\n\nThe machine features adjustable welding current, durable transformer technology, and reliable arc performance suitable for mild steel and general metal fabrication tasks.',

        specification: `
Product Type: AC Arc Welding Machine
Model: BX6-250A
Brand: Workflex
Rated Output Current: 250A
Current Adjustment Range: 60-250A
Input Voltage: 220V / 380V
Frequency: 50/60Hz
Rated Input Capacity: 12kVA
Duty Cycle: 35%
No Load Voltage: 48V
Electrode Diameter: 2.0-5.0mm
Cooling System: Air Cooling
Insulation Class: F
Protection Class: IP21S
Current Adjustment: Rotary Knob Control
Machine Type: Transformer Arc Welder
Application: Mild Steel Fabrication and Repair Welding
  `,

        features: `
250A welding output
Compact and portable design
Dual voltage operation
Smooth arc performance
Adjustable welding current
Heavy-duty transformer construction
Air-cooled system
Suitable for 2.0mm to 5.0mm electrodes
Strong metal housing
Easy transportation handles
Reliable workshop performance
Low maintenance operation
  `
    },


    {
        id: 11060,
        name: 'Workflex BX6-300A AC Arc Welding Machine',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Workflex',
        price: 155000,

        images: [
            'assets/img/welding machines/workflex arc weld bx6-300.png',
            'assets/img/welding machines/workflex arc weld bx6-300-2.png'
        ],

        inStock: true,

        description: 'The Workflex BX6-300A AC Arc Welding Machine is a compact transformer-based welding machine designed for fabrication workshops, gate construction, metal repairs, and maintenance operations. Delivering up to 300A welding output, it provides stable arc performance and reliable operation for welding mild steel, carbon steel, and structural steel materials.\n\nIts portable design, carrying handles, and transport wheels make movement easy around workshops and job sites. The machine features adjustable current control, air cooling, and rugged construction for long-lasting performance.',

        specification: `
Product Type: AC Arc Welding Machine
Model: BX6-300A
Brand: Workflex
Rated Output Current: 120-300A
Maximum Output Current: 300A
Input Voltage: 230V / 415V
Frequency: 50Hz
Open Circuit Voltage: 55V
Rated Output Voltage: 24.8V - 32V
Duty Cycle: 35% @ 300A
Duty Cycle: 60% @ 200A
Duty Cycle: 100% @ 120A
Protection Class: IP21
Insulation Class: F
Current Control: Rotary Adjustment
Cooling System: Air Cooling
Machine Type: Transformer Arc Welder
Electrode Diameter: 2.5-5.0mm
Application: Fabrication, Repair and Maintenance Welding
  `,

        features: `
300A maximum output
Dual voltage operation
Portable carrying strap
Heavy-duty transformer design
Adjustable welding current
Smooth arc performance
Air-cooled construction
Transport wheels for mobility
IP21 protection rating
Class F insulation
Suitable for workshop use
Durable steel housing
  `
    },

    {
        id: 11062,
        name: 'MAXMECH WG-380Ei Welding Generator',
        category: 'petrol-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        brand: 'MAXMECH',
        model: 'WG-380Ei',

        price: 750000,
        discountPrice: 730000,

        power: '2.5kVA',
        capacity: '300A Welding Output',

        images: [
            'assets/img/generators/Maxmech wg-380ei welding generator-1.png',
            'assets/img/generators/Maxmech wg-380ei welding generator-2.jpg',
            'assets/img/generators/Maxmech wg-380ei welding generator-3.jpg',
            'assets/img/generators/Maxmech wg-380ei welding generator.jpg'
        ],

        inStock: true,
        showSimilar: true,

        description: 'The MAXMECH WG-380Ei Welding Generator is a heavy-duty petrol-powered machine that combines welding functionality with portable power generation. Designed for fabrication workshops, construction sites, maintenance operations, and field repairs, it provides stable welding output and dependable AC power for tools and equipment. Its rugged steel frame, electric start system, and fuel-efficient engine make it ideal for professional welding applications.',

        specification: `
Product Type: Welding Generator
Brand: MAXMECH
Model: WG-380Ei
Engine Type: Petrol Engine
Starting System: Electric Start
Generator Output: 2.5kVA
Rated Voltage: 220-240V
Frequency: 50Hz
Maximum Welding Current: 300A
Welding Rod Capacity: Up to 6.0mm
Cooling System: Air Cooled
Frame Type: Heavy-Duty Steel Frame
Fuel Type: Petrol
Application: Welding and Portable Power Supply

Accessories Included:
1 × MAXMECH WG-380Ei Welding Generator
1 × Electrode Holder
1 × Earth Clamp
1 × Welding Cable Set
1 × Tool Kit
1 × User Manual
  `,

        features: `
Dual-purpose welding and power generation
Maximum welding output of 300A
Electric start system
Supports up to 6.0mm electrodes
Portable heavy-duty design
Fuel-efficient petrol engine
Air-cooled engine system
Stable welding performance
Strong steel protective frame
Suitable for construction and fabrication work
Easy operation and maintenance
Ideal for workshop and field applications
  `
    },

    {
        id: 11063,
        name: '10-25 Male & Female Cable Connector for Welding Machine',
        category: 'welding-accessories',
        parentCategory: 'welding machines',
        group: 'Electrical Equipments',

        brand: 'Generic',
        model: '10-25 Cable Connector',

        price: 9500,

        images: [
            'assets/img/welding accessories/10 by 25 male & female cable connector.jpg',
            'assets/img/welding accessories/10 by 25 male & female cable connector-2.jpg',
            'assets/img/welding accessories/10 by 25 male & female cable connector-3.jpg',
            'assets/img/welding accessories/10 by 25 male & female cable connector-4.jpg',
            'assets/img/welding accessories/10 by 25 male & female cable connector-5.jpg'

        ],

        inStock: true,
        showSimilar: true,

        description: 'The 10-25 Male & Female Cable Connector is a durable quick-connect welding cable fitting designed for secure and efficient connection of welding leads to welding machines. Manufactured from high-conductivity brass with a heat-resistant insulating cover, it ensures excellent current transfer, minimal power loss, and reliable performance in welding applications. Suitable for MMA, ARC, and inverter welding machines.',

        specification: `
Product Type: Welding Cable Connector
Model: 10-25
Connector Type: Male & Female
Material: Brass Core with Insulated Cover
Cable Capacity: 10-25mm²
Current Rating: Up to 200A
Connection Type: Quick Connect
Application: MMA, ARC and Inverter Welding Machines
Heat Resistant: Yes
Corrosion Resistant: Yes
Color: Black

Accessories Included:
1 × Male Cable Connector
1 × Female Cable Connector
  `,

        features: `
High-conductivity brass contacts
Quick and secure connection
Suitable for 10-25mm² welding cables
Heat-resistant insulation
Low power loss
Durable construction
Easy installation
Corrosion-resistant design
Reliable current transfer
Compatible with most inverter welders
Professional-grade performance
Long service life
  `
    },

    {
        id: 11064,
        name: 'EL-SECN ER70S-6 MIG/MAG Welding Wire',
        category: 'welding-accessories',
        parentCategory: 'welding machines',
        group: 'Electrical Equipments',

        brand: 'EL-SECN',
        model: 'ER70S-6',

        price: 68000,
        discountPrice: 64000,

        images: [
            'assets/img/welding accessories/EL-SECN  MIG MAG Welding Wire.png',
            'assets/img/welding accessories/EL-SECN  MIG MAG Welding Wire-2.png',
            'assets/img/welding accessories/EL-SECN  MIG MAG Welding Wire-3.webp'
        ],

        variations: [
            {
                size: '0.8mm',
                price: 62000,
                inStock: true
            },
            {
                size: '1.0mm',
                price: 65000,
                inStock: true
            },
            {
                size: '1.2mm',
                price: 68000,
                inStock: true
            }
        ],

        inStock: true,
        showSimilar: true,

        description: 'The EL-SECN ER70S-6 MIG/MAG Welding Wire is a premium copper-coated solid welding wire designed for gas-shielded welding of mild steel and low-alloy steel. It provides smooth wire feeding, stable arc performance, low spatter generation, and excellent weld bead appearance. Suitable for fabrication workshops, steel structures, automotive repairs, shipbuilding, and general industrial welding applications.',

        specification: `
Product Type: MIG/MAG Welding Wire
Brand: EL-SECN
Model: ER70S-6
Wire Type: Solid Copper-Coated Welding Wire
Welding Process: MIG/MAG
Shielding Gas: CO₂ / Argon-CO₂ Mixed Gas
Material: Mild Steel
Net Weight: 15kg
Spool Type: Industrial Plastic Spool
Standard: AWS A5.18 ER70S-6
Tensile Strength: ≥ 500MPa
Application: Structural Steel, Fabrication and General Welding

Available Sizes:
0.8mm
1.0mm
1.2mm

Accessories Included:
1 × 15kg MIG Welding Wire Spool
  `,

        features: `
ER70S-6 premium welding wire
Copper-coated for smooth feeding
Excellent arc stability
Low spatter generation
Strong weld penetration
High tensile strength
Clean and uniform weld beads
Suitable for CO₂ and mixed gas welding
Ideal for mild steel fabrication
Professional industrial-grade quality
Compatible with most MIG welders
Reliable welding performance
  `
    },

    {
        id: 11065,
        name: 'MAXMECH E71T-GS Flux Cored Welding Wire 1.0mm 1kg',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Maxmech',
        price: 17000,
        discountPrice: 15000,

        images: [
            'assets/img/welding accessories/MAXMECH Flux Cored Welding Wire 1.0mm 1kg.png',
            'assets/img/welding accessories/MAXMECH Flux Cored Welding Wire 1.0mm 1kg-2.png'
        ],

        model: 'E71T-GS',

        inStock: true,

        description: 'MAXMECH E71T-GS Flux Cored Welding Wire is a self-shielded welding wire designed for gasless MIG welding of mild steel and galvanized steel. It provides stable arc performance, good penetration, and smooth weld bead appearance, making it suitable for maintenance, fabrication, repairs, and outdoor welding applications where shielding gas is not available.',

        specification: `
  Brand: MAXMECH
  Model: E71T-GS
  Product Type: Flux Cored Welding Wire
  Standard: AWS A5.20 E71T-GS
  Wire Diameter: 1.0mm
  Net Weight: 1kg
  Welding Process: FCAW (Flux Cored Arc Welding)
  Shielding Gas Required: No
  Polarity: DCEN (Direct Current Electrode Negative)
  Material Compatibility:
  - Mild Steel
  - Carbon Steel
  - Galvanized Steel
  Welding Position:
  - Flat
  - Horizontal
  - Vertical
  - Overhead
  Spool Type: D100 Plastic Spool
  `,

        features: `
  Self-shielded gasless welding wire
  Stable arc and smooth wire feeding
  Good penetration and bead appearance
  Suitable for outdoor welding applications
  Low spatter performance
  Easy slag removal
  Ideal for light fabrication and repairs
  Compatible with most flux-cored MIG welders
  Suitable for carbon and mild steel welding
  Convenient 1kg spool size
  `
    },

    {
        id: 11066,
        name: 'MAXMECH BC370-18I Heavy Duty Battery Charger',
        category: 'battery-chargers',
        group: 'Electrical Equipments',
        brand: 'Maxmech',
        price: 65000,
        discountPrice: 55000,

        images: [
            'assets/img/battery and battery chargers/maxmech bc-370 battery charger..jpg',
            'assets/img/battery and battery chargers/maxmech bc-370 battery charger-2.png'
        ],

        model: 'BC370-18I',

        inStock: true,

        description: 'The MAXMECH BC370-18I is a heavy-duty smart battery charger designed for charging automotive, inverter, truck, motorcycle, and industrial lead-acid batteries. It features a durable metal housing, intelligent charging control, and built-in protection systems to ensure safe and efficient battery charging.',

        specification: `
  Model: BC370-18I
  Product Type: Smart Battery Charger
  Power: 370W
  Charging Type: Automatic Smart Charging
  Battery Compatibility:
  - Automotive Batteries
  - Inverter Batteries
  - Motorcycle Batteries
  - Truck Batteries
  - Lead-Acid Batteries
  Housing Material: Metal
  Display Type: Digital Display
  Protection Features:
  - Overload Protection
  - Short Circuit Protection
  - Overcharge Protection
  Cooling System: Air Cooled
  Carry Handle: Yes
  Application: Battery Charging and Maintenance
  `,

        features: `
  Powerful 370W charging capacity
  Smart charging technology
  Digital display and control panel
  Durable heavy-duty metal casing
  Portable design with carry handle
  Suitable for multiple battery types
  Overload and short-circuit protection
  Safe and efficient charging operation
  Ideal for workshops and garages
  Reliable battery maintenance solution
  `
    },


    {
        id: 11067,
        name: 'Kubwe Rubber Welding Cable 100 Yard Roll',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Kubwe',
        price: 550000,

        variations: [
            {
                size: '25mm',
                price: 550000,
                inStock: true
            },
            {
                size: '35mm',
                price: 650000,
                inStock: true
            },
            {
                size: '50mm',
                price: 770000,
                inStock: true
            },
            {
                size: '75mm',
                price: 920000,
                inStock: true
            }
        ],

        images: [
            'assets/img/welding accessories/welding cable-2.jpg',
            'assets/img/welding accessories/welding cable.jpg',
            'assets/img/welding accessories/welding cable-3.jpg',
            'assets/img/welding accessories/welding cable-4.webp'
        ],

        inStock: true,

        description: 'Kubwe Rubber Welding Cable is a heavy-duty flexible copper welding cable designed for connecting welding machines, electrode holders, and earth clamps. Manufactured with fine-stranded copper conductors and a durable rubber sheath, it provides excellent flexibility, conductivity, and resistance to abrasion, heat, oil, and harsh workshop conditions.',

        specification: `
  Brand: Kubwe
  Product Type: Rubber Welding Cable
  Roll Length: 100 Yards (Approx. 91.4m)
  Conductor Material: Flexible Copper
  Insulation Material: Rubber
  Sheath Type: Heavy Duty Rubber
  Cable Color: Black
  Application:
  - Arc Welding Machines
  - MIG Welders
  - TIG Welders
  - Earth Connections
  - Electrode Holders

  Available Sizes:
  - 25mm²
  - 35mm²
  - 50mm²
  - 75mm²
  `,

        features: `
  High-conductivity copper conductor
  Heavy-duty rubber insulation
  Excellent flexibility for easy handling
  Heat-resistant construction
  Oil and abrasion resistant
  Suitable for industrial welding applications
  Durable and long-lasting performance
  Low voltage drop characteristics
  Ideal for welding leads and grounding cables
  Suitable for indoor and outdoor use
  `,

        showSimilar: true
    },


    {
        id: 11068,
        name: 'TOTAL Auto Air Compressor 12V 120 PSI (TTAC2506)',
        category: 'auto-air-compressors',
        group: 'Electrical Equipments',
        brand: 'TOTAL',
        model: 'TTAC2506',

        price: 85000,
        discountPrice: 80000,

        images: [
        
            'https://res.cloudinary.com/taus5tit/image/upload/v1786058767/total_auto_air_compressor_12v_120_psi_ttac2506-4_gn6vly.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274273/Astonic-Mart/Products/air%20compressors/total_auto_air_compressor_12v_120_psi_ttac2506.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274265/Astonic-Mart/Products/air%20compressors/total_auto_air_compressor_12v_120_psi_ttac2506-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274266/Astonic-Mart/Products/air%20compressors/total_auto_air_compressor_12v_120_psi_ttac2506-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274267/Astonic-Mart/Products/air%20compressors/total_auto_air_compressor_12v_120_psi_ttac2506-5.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274269/Astonic-Mart/Products/air%20compressors/total_auto_air_compressor_12v_120_psi_ttac2506-6.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274270/Astonic-Mart/Products/air%20compressors/total_auto_air_compressor_12v_120_psi_ttac2506-7.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The TOTAL TTAC2506 Auto Air Compressor is a heavy-duty 12V portable air compressor designed for rapid tyre inflation and emergency roadside applications. Equipped with a powerful duplex (twin-cylinder) system, it delivers a high airflow rate of 45L/min and a maximum pressure of 120 PSI. The compressor connects directly to a vehicle battery using battery clips, ensuring stable power delivery for demanding inflation tasks. It features an integrated work light for night-time use, a durable pressure gauge for accurate readings, and comes with multiple adapters for inflating tyres, sports equipment, air mattresses and other inflatables. The included canvas carrying bag makes transportation and storage convenient.`,

        specification: `
  - Product Name: Auto Air Compressor
  - Brand: TOTAL
  - Model: TTAC2506
  - Voltage: 12V DC
  - Rated Current: 18A
  - Cylinder Type: Duplex (Twin Cylinder)
  - Maximum Pressure: 120 PSI / 8 Bar / 827 kPa
  - Maximum Air Flow: 45 L/min
  - Power Supply: Vehicle Battery Clips
  - Air Hose Length: 3m
  - Pressure Gauge Accuracy: ±1 PSI
  - Integrated LED Work Light: Yes
  - Carrying Bag: Included
  - Application: Cars, SUVs, Motorcycles, Bicycles and Inflatables
  `,

        features: `
  - Powerful twin-cylinder design
  - High airflow rate of 45L/min
  - Fast tyre inflation performance
  - Maximum pressure of 120 PSI
  - Built-in LED work light
  - Accurate pressure gauge
  - Heavy-duty battery clip connection
  - Portable and compact design
  - Suitable for emergency roadside use
  - Multi-purpose inflation capability

  
  accessories: 
  - 1 x TOTAL TTAC2506 Air Compressor
  - 1 x 3m Air Hose with Brass Quick-Release Adapter
  - 1 x Set of Battery Clips
  - 4 x Inflation Adapters
  - 1 x Canvas Carrying Bag
  - 1 x User Manual
  `,

    },


    {
        id: 11069,
        name: 'INGCO AAC1601 Auto Air Compressor',
        category: 'auto-air-compressors',
        group: 'Electrical Equipments',
        brand: 'INGCO',

        model: 'AAC1601',
        price: 80000,
        inStock: true,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274104/Astonic-Mart/Products/air%20compressors/INGCO_AAC1601_Auto_Air_Compressor-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274115/Astonic-Mart/Products/air%20compressors/INGCO_AAC1601_Auto_Air_Compressor.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274108/Astonic-Mart/Products/air%20compressors/INGCO_AAC1601_Auto_Air_Compressor-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274109/Astonic-Mart/Products/air%20compressors/INGCO_AAC1601_Auto_Air_Compressor-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786274113/Astonic-Mart/Products/air%20compressors/INGCO_AAC1601_Auto_Air_Compressor-5.jpg'
        ],

        description: `The INGCO AAC1601 Auto Air Compressor is a portable 12V tire inflator designed for cars, motorcycles, bicycles, sports balls, and inflatable equipment. It features a digital pressure display, automatic shut-off, and a compact design that makes it ideal for emergency roadside use and routine tire maintenance.`,

        specification: `
Model: AAC1601
Voltage: 12V DC
Maximum Pressure: 160 PSI (11 Bar)
Maximum Air Flow: 35 L/min
Rated Power: 100W
Current Draw: 10A
Power Source: Vehicle Cigarette Lighter Socket
Pressure Display: Digital LCD
Pressure Units: PSI / BAR / KPA
Cord Length: 3m
Auto Shut-Off: Yes
Integrated Work Light: Yes
Application: Cars, Motorcycles, Bicycles, Sports Equipment, Inflatables

Accessories Included:
• 3m Power Cord with Cigarette Lighter Plug
• Ball Inflator Adapter
• Tire Valve Adapter
• Air Bed Adapter
`,
        features: `
• Maximum pressure of 160 PSI
• Digital pressure display
• Automatic shut-off at preset pressure
• Compact and portable design
• Built-in work light
• Easy-to-read LCD display
• Suitable for cars, motorcycles and bicycles
• Multiple inflation adapters included
`,
        power: '12V',
        pressure: '160 PSI / 11 Bar',
        flowRate: '35 L/min',

        showSimilar: true
    },

    {
        id: 11070,
        name: 'Powerflex MMA 250ES Waterproof Welding Machine',
        category: 'mma-welding-machines',
        parentCategory: 'welding machines',
        group: 'Electrical Equipments',
        brand: 'Powerflex',

        model: 'MMA 250ES',
        price: 235000,
        inStock: true,

        images: [
            'assets/img/welding machines/Powerflex Welder MMA 250ES Welding Machine.jpg'
        ],

        description: `The Powerflex MMA 250ES Waterproof Welding Machine is a compact inverter arc welder designed for fabrication, maintenance, construction, and workshop applications. Built with advanced inverter technology, it delivers stable arc performance, energy efficiency, and reliable welding results while maintaining a lightweight and portable design.`,

        specification: `
Model: MMA 250ES
Brand: Powerflex
Machine Type: MMA Inverter Welding Machine
Technology: IGBT Inverter
Input Voltage: 220V-240V, 50/60Hz
Output Current Range: 20A-250A
Rated Output: Up to 250A
Duty Cycle: 60%
Protection Class: IP21S
Insulation Class: F
Electrode Capacity: 1.6mm-4.0mm
Cooling System: Forced Air Cooling
Display Type: Digital Display
Waterproof Design: Yes
Application: Fabrication, Construction, Maintenance, Workshop and Industrial Welding

Accessories Included:
• Electrode Holder Cable
• Earth Clamp Cable
• Carrying Strap
• User Manual
`,

        features: `
• Advanced IGBT inverter technology
• Waterproof construction
• Stable welding arc
• Digital current display
• Energy-saving performance
• Hot Start function
• Anti-Stick protection
• Overheat and overload protection
• Lightweight and portable design
• Suitable for multiple electrode sizes
`,

        power: '250A',

        showSimilar: true
    },


    {
        id: 11071,
        name: 'TOTAL 2PCS 4.0Ah Lithium-Ion Battery Pack',
        category: 'power-tool-batteries',
        group: 'Power Tool Accessories',
        parentCategory: 'Cordless Tool Accessories',
        brand: 'TOTAL',

        price: 75000,
        inStock: true,

        images: [
            'assets/img/battery and battery chargers/total 2pcs 4a.h battery.webp'
        ],

        description: `
  TOTAL rechargeable lithium-ion battery pack set consisting of
  two 4.0Ah batteries designed for TOTAL cordless power tools.
  Provides extended runtime, reliable performance, and fast charging
  compatibility with TOTAL P20S cordless tool systems.
  `,

        specification: `
  Brand: TOTAL
  Product Type: Rechargeable Battery Pack Set
  Battery Type: Lithium-Ion
  Quantity: 2 Pieces
  Voltage: 20V Max
  Capacity: 4.0Ah Each
  Compatible System: TOTAL P20S Series
  Rechargeable: Yes
  Battery Indicator: Yes
  Application: Cordless Power Tools
  `,

        features: `
  • Includes two 4.0Ah lithium-ion batteries
  • Long runtime for demanding applications
  • Lightweight and durable construction
  • Fast charging capability
  • Integrated battery level indicator
  • No memory effect
  • Compatible with TOTAL P20S cordless tools
  • Reliable power output and extended service life
  `,


        capacity: '4.0Ah',
        showSimilar: true
    },

    {
        id: 11072,
        name: 'NBC-500 Industrial CO₂/MIG Welding Machine With Wire Feeder',
        category: 'mig-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'EDON',

        price: 1920000,
        inStock: true,

        images: [
            'assets/img/welding machines/NBC-500 Industrial CO₂ MIG Welding Machine With Wire Feeder.png-1.jpg',
            'assets/img/welding machines/NBC-500 Industrial CO₂ MIG Welding Machine With Wire Feeder-3.jpg',
            'assets/img/welding machines/NBC-500 Industrial CO₂ MIG Welding Machine With Wire Feeder.png'
        ],

        description: 'The NBC-500 Industrial CO₂/MIG Welding Machine is a heavy-duty inverter welding system designed for continuous industrial welding operations. Equipped with a separate wire feeder, it delivers stable arc performance, high deposition rates, deep penetration, and excellent welding quality for fabrication, construction, shipbuilding, and steel structure applications.',

        specification: `
Model: NBC-500
Type: Industrial CO₂/MIG Welding Machine
Welding Process: MIG/MAG (Gas Shielded Welding)
Input Voltage: 380V Three Phase
Frequency: 50/60Hz
Rated Output Current: Up to 500A
Output Voltage Range: Adjustable
Wire Diameter Capacity: 0.8mm – 1.6mm
Duty Cycle: Industrial Heavy Duty
Cooling System: Forced Air Cooling
Wire Feeding System: External Wire Feeder
Display: Digital Display
Protection Class: IP21
Insulation Class: F
Application: Mild Steel, Carbon Steel, Stainless Steel Fabrication
Machine Weight: Heavy Duty Industrial Design

Accessories:
External Wire Feeder
MIG Welding Torch
Earth Clamp
Control Cable
Gas Hose
Wire Feed Rollers
User Manual
  `,

        features: `
High Output Current Up To 500A
Separate Industrial Wire Feeder
Stable Arc Performance
Suitable For Continuous Production Work
Excellent Weld Penetration
Digital Parameter Display
Overheat Protection System
Industrial Duty Cycle
Supports Large Wire Spools
Ideal For Structural Steel Fabrication
Reliable Three-Phase Operation
  `
    },

    {
        id: 11073,
        name: 'DELFLEX CD630 Battery Charger & Booster',
        category: 'battery-chargers',
        group: 'Electrical Equipments',
        brand: 'DELFLEX',

        price: 250000,
        discountPrice: 220000,

        images: [
            'assets/img/battery and battery chargers/delflex plus battery charger cd630.png',

        ],

        description: `
The DELFLEX CD630 Battery Charger & Booster is a heavy-duty professional battery charging and engine starting unit designed for workshops, automotive service centres, fleet operators, and garages. It supports both 12V and 24V batteries and provides fast charging as well as powerful engine boost assistance for cars, vans, trucks, buses, agricultural equipment, and light commercial vehicles.

Its rugged steel cabinet, integrated carrying handles, and simple control panel make it ideal for demanding workshop environments.
`,

        specification: `
• Brand: DELFLEX
• Model: CD630
• Product Type: Battery Charger & Engine Booster
• Input Voltage: 220–240V AC, 50/60Hz
• Output Voltage: 12V / 24V
• Charging Modes: Normal Charge & Fast Charge
• Engine Start (Boost) Function
• Heavy-Duty Transformer
• Built-in Ammeter
• Thermal Overload Protection
• Reverse Polarity Protection
• Heavy-Duty Charging Cables
• Steel Cabinet Construction
• Integrated Carry Handles
• Suitable for Lead-Acid Batteries
• Ideal for Cars, SUVs, Vans, Trucks and Commercial Vehicles

Accessories Included:
• Positive Battery Clamp
• Negative Battery Clamp
• Charging Cables
• Power Cable
• User Manual
`,

        features: `
• Charges both 12V and 24V batteries
• Powerful engine starting (boost) function
• Heavy-duty workshop construction
• Easy-to-read charging indicator
• Multiple charging settings
• Built-in overload protection
• Suitable for professional automotive workshops
• Durable steel housing
• Portable with integrated handles
• Reliable performance for heavy-duty applications
`,

        power: '220–240V AC',

        inStock: true,
        showSimilar: true
    },

    {
        id: 11074,
        name: 'DELFLEX PLUS CD700 Battery Charger & Booster',
        category: 'battery-chargers',
        group: 'Electrical Equipments',
        brand: 'DELFLEX',

        price: 300000,
        discountPrice: 280000,

        images: [
            'assets/img/battery and battery chargers/delflex plus battery charger cd700.png',

        ],

        description: `
The DELFLEX PLUS CD700 Battery Charger & Booster is a heavy-duty professional battery charging and engine starting unit designed for automotive workshops, fleet maintenance facilities, service centres and garages. It supports both 12V and 24V lead-acid batteries while providing powerful engine boost assistance for cars, SUVs, vans, trucks, buses and agricultural machinery.

Its heavy-duty transformer, robust steel cabinet and simple control panel ensure reliable charging performance and dependable engine starting even in demanding workshop environments.
`,

        specification: `
• Brand: DELFLEX
• Model: CD700
• Product Type: Battery Charger & Engine Booster
• Input Voltage: 220–230V AC
• Frequency: 50/60Hz
• Output Voltage: 12V / 24V
• Charging Current:
  - 12V: 52A
  - 24V: 53A
• Engine Starting Current:
  - 12V: 700A
  - 24V: 700A
• Protection Rating: IP20
• Heavy-Duty Transformer
• Built-in Ammeter
• Engine Start (Boost) Function
• Fast Charge Function
• Thermal Overload Protection
• Reverse Polarity Protection
• Heavy-Duty Steel Cabinet
• Integrated Carry Handles
• Suitable Battery Capacity:
  - 12V: 50–800Ah
  - 24V: 50–600Ah
• Suitable for Lead-Acid Batteries

Accessories Included:
• Heavy-Duty Positive Battery Clamp
• Heavy-Duty Negative Battery Clamp
• Charging Cables
• AC Power Cable
• User Manual
`,

        features: `
• Charges both 12V and 24V batteries
• Powerful 700A engine start assistance
• Heavy-duty industrial construction
• Fast charging capability
• Built-in overload protection
• Reverse polarity protection
• Easy-to-use control panel
• Suitable for cars, SUVs, buses and trucks
• Reliable workshop performance
• Portable design with integrated carrying handles
`,

        power: '220–230V AC',

        inStock: true,
        showSimilar: true
    },


    {
        id: 11075,
        name: 'Nakata Oxygen Regulator',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Nakata',
        price: 45000,
        discountPrice: 40000,

        images: [
            'assets/img/welding accessories/Nakata Oxygen Regulator.png',
            'assets/img/welding accessories/Nakata Oxygen Regulator-2.jpg',
            'assets/img/welding accessories/Nakata Oxygen Regulator-3.webp'
        ],

        description: 'The Nakata Oxygen Regulator is a heavy-duty gas control device designed for precise regulation of oxygen flow and pressure in welding, cutting and industrial gas applications. It features a durable brass body, dual pressure gauges and a reliable adjustment system for safe and accurate gas delivery.',

        specification: `
Brand: Nakata
Type: Oxygen Regulator
Gas Type: Oxygen
Body Material: Forged Brass
Gauge Type: Dual Pressure Gauges
Inlet Connection: Standard Oxygen Cylinder Connection
Outlet Connection: Hose Connector
Maximum Inlet Pressure: 300 Bar
Working Pressure: Adjustable
Pressure Display: PSI and Bar
Flow Control: Precision Adjustment Knob
Application: Gas welding, cutting, fabrication workshops and industrial use
Corrosion Resistance: Yes
Heavy Duty: Yes

Accessories:
Dual Pressure Gauges
Hose Connector
Pressure Adjustment Knob
Cylinder Nut
User Manual
`,

        features: `
• Heavy-duty brass construction
• Accurate pressure regulation
• Dual gauge monitoring system
• Easy-to-read pressure indicators
• Smooth pressure adjustment
• Leak-resistant connections
• Suitable for welding and cutting operations
• Industrial-grade performance
`,

        inStock: true,
        showSimilar: true,

        jumiaLink: '',
        kongaLink: ''
    },

    {
        id: 11076,
        name: 'Nakata Acetylene Regulator',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Nakata',
        price: 45000,
        discountPrice: 40000,

        images: [
            'assets/img/welding accessories/Nakata Acetylene Regulator-1.jpg',
            'assets/img/welding accessories/Nakata Acetylene Regulator-2.webp',
            'assets/img/welding accessories/Nakata Acetylene Regulator-3.jpeg'
        ],

        description: 'The Nakata Acetylene Regulator is a heavy-duty gas pressure regulator designed for safe and precise control of acetylene gas during welding, brazing, heating and cutting operations. It features a rugged brass construction, dual pressure gauges and an easy-adjust control handle for reliable performance in industrial and workshop environments.',

        specification: `
Brand: Nakata
Type: Acetylene Regulator
Gas Type: Acetylene (C₂H₂)
Body Material: Forged Brass
Gauge Type: Dual Pressure Gauges
Cylinder Pressure Gauge: 0–25 Bar
Working Pressure Gauge: 0–2.5 Bar
Maximum Inlet Pressure: 25 Bar
Outlet Pressure: Adjustable
Inlet Connection: Standard Acetylene Cylinder Connection
Outlet Connection: Hose Tail Connector
Pressure Display: PSI and Bar
Control Valve: Precision Adjustment Handle
Thread Type: Left-Hand Thread
Application: Gas welding, oxy-acetylene cutting, brazing, heating and fabrication work
Corrosion Resistance: Yes
Heavy Duty: Yes

Accessories:
Dual Pressure Gauges
Hose Connector
Pressure Adjustment Handle
Cylinder Nut
User Manual
`,

        features: `
• Heavy-duty forged brass body
• Accurate pressure regulation
• Dual gauge pressure monitoring
• Easy-to-read pressure indicators
• Smooth gas flow adjustment
• Leak-resistant construction
• Designed specifically for acetylene cylinders
• Suitable for welding and cutting applications
`,

        inStock: true,
        showSimilar: true,

        jumiaLink: '',
        kongaLink: ''
    },

    {
        id: 11077,
        name: 'INGCO SI00108 Electric Soldering Iron-100W',
        category: 'soldering-equipment',
        group: 'electrical equipment',
        brand: 'INGCO',
        model: 'SI00108',
        price: 25000,


        images: [
            'assets/img/soldering tools/INGCO SI00108 Electric Soldering Iron.jpeg',
            'assets/img/soldering tools/INGCO SI00108 Electric Soldering Iron-2.webp',
            'assets/img/soldering tools/INGCO SI00108 Electric Soldering Iron-4.webp',
            'assets/img/soldering tools/INGCO SI00108 Electric Soldering Iron-3.webp',
            'assets/img/soldering tools/INGCO SI00108 Electric Soldering Iron-5.jpg',
            'assets/img/soldering tools/INGCO SI00108 Electric Soldering Iron-6.jpg',
            'assets/img/soldering tools/INGCO SI0268 Electric Soldering Iron-7.jpg'
        ],

        description: 'The INGCO SI00108 Electric Soldering Iron is a professional-grade soldering tool designed for electrical maintenance, electronic assembly, PCB repairs, cable connections and general workshop applications. It features a fast-heating element, durable replaceable tip and ergonomic insulated handle for safe and efficient operation.',

        specification: `
Brand: INGCO
Model: SI00108
Type: Electric Soldering Iron
Voltage: 220–240V
Frequency: 50/60Hz
Input Power: 100W
Preheating Time: 3–5 Minutes
Tip Type: Straight Tip Head
Tip Material: Copper Alloy
Heating Element: High Efficiency Heater
Handle Material: Heat Resistant Insulated Plastic
Temperature Type: Fixed Temperature
Application: Electronics Repair, Cable Soldering, PCB Assembly, Electrical Maintenance and DIY Projects

Accessories:
Support Stand
Replaceable Tip
Protective Cover
User Manual
`,

        features: `
• Powerful 100W heating capacity
• Fast 3–5 minute preheating time
• Durable long-life replaceable tip
• Heat-resistant ergonomic handle
• Stable temperature output
• Suitable for electrical and electronic repairs
• Lightweight and easy to handle
• Professional workshop quality
• Includes support stand
`,

        inStock: true,
        showSimilar: true,

        jumiaLink: '',
        kongaLink: ''
    },

    {
        id: 11078,
        name: 'INGCO SI0268 Electric Soldering Iron-60W',
        category: 'soldering-equipment',
        group: 'electrical equipment',
        brand: 'INGCO',
        model: 'SI0268',
        price: 22000,


        images: [
            'assets/img/soldering tools/INGCO SI0268 Electric Soldering Iron.jpeg',
            'assets/img/soldering tools/INGCO SI0268 Electric Soldering Iron-2.jpg',
            'assets/img/soldering tools/INGCO SI0268 Electric Soldering Iron-3.jpg',
            'assets/img/soldering tools/INGCO SI0268 Electric Soldering Iron-4.jpg',
            'assets/img/soldering tools/INGCO SI0268 Electric Soldering Iron-5.jpg',
            'assets/img/soldering tools/INGCO SI0268 Electric Soldering Iron-6.jpg',
            'assets/img/soldering tools/INGCO SI0268 Electric Soldering Iron-7.jpg'
        ],

        description: 'The INGCO SI0268 Electric Soldering Iron is a compact and reliable soldering tool designed for electronic repairs, electrical maintenance, PCB assembly, cable soldering and DIY applications. It features a durable heating element, fast heat-up performance and a long-life replaceable tip for continuous operation.',

        specification: `
Brand: INGCO
Model: SI0268
Type: Electric Soldering Iron
Voltage: 220–240V
Frequency: 50/60Hz
Input Power: 60W
Preheating Time: 3–5 Minutes
Tip Type: Straight Tip Head
Tip Material: Copper Alloy
Heating Element: High Efficiency Heater
Temperature Type: Fixed Temperature
Handle Material: Heat Resistant Plastic
Cord Length: Approximately 1.2m
Application: Electronic Repairs, PCB Soldering, Electrical Maintenance, Cable Connections and DIY Projects

Accessories:
Support Stand
Replaceable Tip
User Manual
`,

        features: `
• 60W efficient heating performance
• Fast 3–5 minute preheating time
• Durable long-life replaceable tip
• Straight tip design for precision work
• Heat-resistant ergonomic handle
• Lightweight and easy to operate
• Suitable for electronics and electrical repairs
• Reliable performance for workshop and home use
• Includes metal support stand
`,

        inStock: true,
        showSimilar: true,

        jumiaLink: '',
        kongaLink: ''
    },


    {
        id: 11079,
        name: 'TOTAL Battery Charger 12/24V (TBC1601)',
        category: 'battery-chargers',
        group: 'Electrical Equipments',
        brand: 'TOTAL',
        model: 'TBC1601',
        price: 88000,

        images: [
            'assets/img/battery and battery chargers/TOTAL Battery Charger 12 24V (TBC1601).jpg',
            'assets/img/battery and battery chargers/TOTAL Battery Charger 12 24V (TBC1601)-2.jpeg',
            'assets/img/battery and battery chargers/TOTAL Battery Charger 12 24V (TBC1601)-3.jpeg',
            'assets/img/battery and battery chargers/TOTAL Battery Charger 12 24V (TBC1601)-4.jpeg'
        ],

        description: 'The TOTAL TBC1601 Battery Charger is a professional 12V/24V automotive battery charger designed for charging lead-acid batteries used in cars, trucks, motorcycles, generators and other vehicles. It features overload protection, durable metal housing and efficient charging performance for workshops, garages and industrial applications.',

        specification: `
Brand: TOTAL
Model: TBC1601
Type: Battery Charger
Input Voltage: 220–240V
Input Frequency: 50/60Hz
Output Voltage: 12V / 24V
Charging Current: 16A
Battery Capacity Range: 30–300Ah
Charging Type: Automatic Charging
Display Type: Analog Ammeter
Cooling System: Built-in Cooling Ventilation
Protection Features:
Overload Protection
Short Circuit Protection
Reverse Polarity Protection
Overheating Protection

Housing Material: Metal
Application:
Cars
SUVs
Motorcycles
Trucks
Generators
Agricultural Equipment

Accessories:
Charging Cables
Battery Clamps
Power Cord
Fuse
User Manual
`,

        features: `
• Dual voltage 12V and 24V operation
• Maximum charging current of 16A
• Suitable for batteries from 30Ah to 300Ah
• Built-in overload protection
• Reverse polarity protection
• Short circuit protection
• Durable metal enclosure
• Analog charging indicator
• Easy to operate
• Ideal for workshops and garages
`,

        power: '16A',
        inStock: true,
        showSimilar: true,

        jumiaLink: '',
        kongaLink: ''
    },

    {
        id: 11080,
        name: 'Bosch GBA 18V Battery',
        group: 'Electrical Equipments',
        category: 'batteries',
        showSimilar: true,
        brand: 'Bosch',
        price: 90000,

        images: [
            'assets/img/battery and battery chargers/Bosch GBA 18V Battery-1.jpg',
            'assets/img/battery and battery chargers/Bosch GBA 18V Battery-2.jpg',
            'assets/img/battery and battery chargers/Bosch GBA 18V Battery-3.jpg',
            'assets/img/battery and battery chargers/Bosch GBA 18V Battery-4.jpg'
        ],

        inStock: true,

        description: 'The Bosch GBA 18V Battery is a high-performance lithium-ion power source designed for Bosch Professional 18V cordless tools. It provides reliable runtime, fast charging capability and long service life, making it suitable for construction, woodworking, metalworking and general workshop applications.',

        specification: `
  - Product Name: GBA 18V Battery
  - Brand: Bosch
  - Battery Type: Lithium-Ion
  - Voltage: 18V
  - Platform: Bosch Professional 18V System
  - Compatibility: Bosch Professional 18V Cordless Tools
  - Charging Technology: Fast Charging Compatible
  - Housing Material: Impact Resistant Plastic
  - Color: Blue and Black
  - Weight: Varies by Capacity

  Accessories Included
  - 1 × Bosch GBA 18V Battery
  `,

        features: `
  - High-performance lithium-ion technology
  - Compatible with Bosch Professional 18V tools
  - Long runtime and extended service life
  - Fast charging capability
  - Lightweight and compact design
  - Robust impact-resistant housing
  - No memory effect
  - Low self-discharge rate
  - Reliable power delivery
  - Suitable for professional applications
  `
    },


    {
        id: 3116,
        name: 'INGCO ING-CB70035 Industrial Battery Charger',
        category: 'battery-chargers',
        group: 'Electrical Equipments',
        brand: 'Ingco',
        model: 'ING-CB70035',

        price: 420000,
        discountPrice: 395000,

        images: [
            'assets/img/battery and battery chargers/INGCO ING-CB70035 Industrial Battery Charger-1.webp',
            'assets/img/battery and battery chargers/INGCO ING-CB70035 Industrial Battery Charger-2.jpg',
            'assets/img/battery and battery chargers/INGCO ING-CB70035 Industrial Battery Charger-3.jpg',
            'assets/img/battery and battery chargers/INGCO ING-CB70035 Industrial Battery Charger-4.webp',
            'assets/img/battery and battery chargers/INGCO ING-CB70035 Industrial Battery Charger-5.jpeg',
        ],

        description:
            'Heavy-duty industrial trolley battery charger designed for charging and starting 12V and 24V automotive batteries.',

        specification: `
Input Voltage: 230V~50Hz
Charging Voltage: 12V / 24V
Rated Output Current: 40A
Boost Current:
12V - 70A
24V - 75A

Maximum Starting Current: 450A
Battery Capacity: 160–1200Ah
Maximum Charger Power: 2.8kW
Maximum Starting Power: 20.6kW
Protection Class: IP20
Insulation Class: H
Fuse: 6 × 80A
Weight: 22kg

Accessories:
Charging Cables
Battery Clamps
User Manual
`,

        features: `
• Normal charging mode
• Quick charging mode
• Quick starting function
• Temperature control system
• Heavy-duty trolley design
• Overload protection
• Suitable for 12V and 24V batteries
`,

        inStock: true,
        showSimilar: true
    },

    {
        id: 11081,
        name: 'INGCO ING-CD2201 Industrial Battery Charger',
        category: 'battery-chargers',
        group: 'Electrical Equipments',
        brand: 'Ingco',
        model: 'ING-CD2201',

        price: 280000,
        discountPrice: 265000,

        images: [
            'assets/img/powertools/ingco-ingcd2201-1.webp',
            'assets/img/powertools/ingco-ingcd2201-2.webp',
            'assets/img/powertools/ingco-ingcd2201-3.webp'
        ],

        description:
            'The INGCO ING-CD2201 Industrial Battery Charger is a reliable heavy-duty charging solution engineered for workshops, garages, fleet operators, and automotive service centres. Designed to charge both 12V and 24V batteries efficiently, it combines normal charging, quick charging, and quick-start capabilities to ensure dependable battery maintenance and emergency engine starting. Its robust construction, high-performance transformer, and user-friendly controls make it an ideal choice for professional applications.',

        specification: `
Input Voltage: 220–240V ~ 50/60Hz
Charging Voltage: 12V / 24V
Rated Charging Current: 16A / 18A
Boost Current: 20A
Battery Capacity Range: 70–300Ah
Insulation Class: H
Charging Modes:
Normal Charge
Quick Charge
Quick Start Function

Weight: 15kg

Accessories:
Charging Cables
Battery Clamps
User Manual
`,

        features: `
• Suitable for 12V and 24V batteries
• Normal charging mode for battery maintenance
• Quick charge function for reduced charging time
• Quick-start capability for emergency situations
• Heavy-duty industrial design
• High-efficiency transformer system
• Built-in protection against overload
• Ideal for workshops, garages and commercial fleets
• Easy-to-read charging indicators
• Durable metal housing construction
`,

        inStock: true,
        showSimilar: true
    },

    {
        id: 11082,
        name: 'EDON BX1-400-1 AC Arc Welding Machine',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,
        brand: 'EDON',

        price: 450000,
        discountPrice: 430000,

        images: [
            'assets/img/welding machines/EDON BX1-400-1 AC Arc Welding Machine.png',
            'assets/img/welding machines/EDON BX1-400-1 AC Arc Welding Machine-2.jpeg'
        ],

        inStock: true,

        description: 'The EDON BX1-400-1 AC Arc Welding Machine is a heavy-duty transformer-based welding unit designed for industrial fabrication, maintenance workshops and construction applications. It features adjustable welding current, dual voltage operation and stable arc performance suitable for prolonged welding operations.',

        specification: `
  - Product Name: AC Arc Welding Machine
  - Brand: EDON
  - Model: BX1-400-1
  - Type: Transformer Arc Welder
  - Input Voltage: 220V / 380V
  - Frequency: 50/60 Hz
  - Rated Input Power: Approx. 18–22 kVA
  - Welding Current Range: 60–400 A
  - Output Type: AC
  - Electrode Capacity: 2.5–6.0 mm
  - Duty Cycle: Industrial Grade
  - Cooling Method: Air Cooled
  - Insulation Class: F
  - Protection Class: IP21
  - Application: Structural Steel, Fabrication, Construction and Repairs

  Accessories Included
  - 1 × Electrode Holder Cable
  - 1 × Earth Clamp Cable
  - 1 × Input Power Cable
  - 1 × User Manual
  `,

        features: `
  - Heavy-duty transformer construction
  - Adjustable welding current control
  - Dual-voltage 220V/380V operation
  - Stable welding arc
  - Suitable for continuous operation
  - Supports electrodes up to 6.0 mm
  - Durable metal housing
  - Reliable cooling system
  - Easy current adjustment
  - Ideal for industrial fabrication
  `
    },

    {
        id: 11083,
        name: 'Ingco Electrode Holder WAH8008',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Ingco',
        showSimilar: true,

        price: 12000,


        images: [
            'assets/img/welding accessories/ingco WAH3008 electrode holder-300a.jpeg',
            'assets/img/welding accessories/ingco WAH5008 electrode holder-500a.jpeg',
            'assets/img/welding accessories/ingco WAH5008 electrode holder-1000a.jpeg',
            'assets/img/welding accessories/Ingco Electrode Holder - WAH8008.jpeg'
        ],


        variations: [
            { model: 'WAH3008', size: '300A', price: 6500, inStock: true },
            { model: 'WAH5008', size: '500A', price: 10000, inStock: true },
            { model: 'WAH8008', size: '800A', price: 13000, inStock: true },
            { model: 'WAH10008', size: '1000A', price: 16000, inStock: true }
        ],
        inStock: true,

        description: 'The Ingco WAH8008 Electrode Holder is a heavy-duty welding accessory engineered for secure electrode clamping and efficient current transfer during MMA welding operations. Featuring a high-quality copper contact system and insulated handle, it ensures reliable conductivity, improved safety and comfortable operation. Designed for demanding workshop, fabrication and industrial applications.',

        specification: `
  - Product Name: Electrode Holder
  - Brand: Ingco
  - Model: WAH8008
  - Rated Current: 800A
  - Type: Electrode Holder
  - Suitable Welding Process: MMA Welding
  - Compatible Welder Capacity: Below 630A
  - Contact Material: Copper
  - Clamp Type: Spring Clamp
  - Handle Material: High-Quality Insulated Material
  - Design: Ergonomic Heavy-Duty Design
  - Application: Arc Welding Operations
  - Packaging: Color Box

  Accessories Included
  - 1 × Ingco Electrode Holder WAH8008
  `,

        features: `
  - Rated for heavy-duty 800A welding current
  - High conductivity copper contact system
  - Strong electrode gripping mechanism
  - Durable insulated handle for operator safety
  - Suitable for MMA welding machines below 630A
  - Ergonomic design for comfortable handling
  - Heavy-duty construction for industrial use
  - Reliable current transfer performance
  - Corrosion-resistant components
  - Designed for fabrication and workshop applications
  `
    },

    {
        id: 11084,
        name: 'EDON DC Inverter TIG MMA Inverter Welding Machine TIG-200',
        category: 'tig-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Edon',
        showSimilar: true,

        price: 400000,
        discountPrice: 370000,

        images: [
            'assets/img/welding machines/EDON DC Inverter TIG MMA Inverter Welding Machine TIG-200.avif',

        ],

        inStock: true,

        description: 'The EDON TIG-200 DC Inverter Welding Machine is a versatile TIG and MMA welding system engineered for precision welding applications. Built with advanced IGBT inverter technology, it delivers stable arc performance, energy efficiency and excellent welding quality. Suitable for stainless steel, carbon steel, copper and other ferrous metals, this compact welder is ideal for fabrication workshops, maintenance professionals and industrial applications.',

        specification: `
  - Product Name: DC Inverter TIG MMA Welding Machine
  - Brand: Edon
  - Model: TIG-200
  - Type: TIG/MMA Inverter Welder
  - Technology: IGBT Inverter
  - Input Voltage: 220V
  - Frequency: 50/60Hz
  - Phase: Single Phase
  - Rated Power Capacity: 5 kVA
  - TIG Output Current: 10–180A
  - MMA Output Current: 20–160A
  - Rated Output Voltage: 17.2V
  - Duty Cycle: 30% @ 40°C
  - No Load Voltage: 61V
  - Efficiency: 85%
  - Power Factor: 0.73
  - Electrode Diameter: 1.6–4.0mm
  - Protection Class: IP21S
  - Insulation Class: F
  - Cooling System: Forced Air Cooling
  - Suitable Materials: Carbon Steel, Stainless Steel and Copper
  - Weight: Approx. 8.15kg
  - Dimensions: 410 × 165 × 305mm
  - Application: TIG and MMA Welding Operations

  Accessories Included
  - 1 × TIG-200 Welding Machine
  - 1 × TIG Torch
  - 1 × Electrode Holder
  - 1 × Earth Clamp
  - Welding Cables
  - Gas Hose
  - User Manual
  `,

        features: `
  - Advanced IGBT inverter technology
  - Dual TIG and MMA welding functions
  - Stable arc with excellent welding performance
  - Compact and lightweight design
  - Energy-efficient operation
  - Forced air cooling system
  - Suitable for stainless steel and carbon steel welding
  - Supports electrodes from 1.6mm to 4.0mm
  - Portable and easy to transport
  - Ideal for fabrication, repair and maintenance work
  `
    },

    {
        id: 11085,
        name: 'EDON DC Inverter TIG MMA Welding Machine TIG-250',
        category: 'tig-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Edon',
        showSimilar: true,

        price: 480000,
        discountPrice: 450000,

        images: [
            'assets/img/welding machines/edon tig 250 welding machine.jpeg',
            'assets/img/welding machines/edon tig 250 welding machine-2.jpeg'
        ],

        inStock: true,

        description: 'The EDON TIG-250 DC Inverter Welding Machine is a professional TIG and MMA welder engineered for precision fabrication, maintenance and industrial applications. Built with advanced IGBT inverter technology, it delivers stable arc performance, high efficiency and reliable welding quality. Suitable for stainless steel, carbon steel, alloy steel and copper materials, the TIG-250 combines portability, durability and excellent welding performance for workshop and field operations.',

        specification: `
  - Product Name: DC Inverter TIG MMA Welding Machine
  - Brand: Edon
  - Model: TIG-250
  - Type: TIG/MMA Inverter Welder
  - Technology: IGBT Inverter
  - Input Voltage: 220V
  - Frequency: 50/60Hz
  - Phase: Single Phase
  - Rated Input Capacity: 6.0 kVA
  - TIG Output Current: 10–200A
  - MMA Output Current: 10–200A
  - Maximum Output Current: 250A
  - Rated Duty Cycle: 60%
  - No Load Voltage: 61V
  - Efficiency: 85%
  - Power Factor: 0.73
  - Electrode Diameter: 1.6–5.0mm
  - Protection Class: IP21S
  - Insulation Class: F
  - Cooling System: Forced Air Cooling
  - Suitable Materials: Carbon Steel, Stainless Steel, Copper and Alloy Steel
  - Dimensions: 480 × 275 × 355mm
  - Weight: 13.2kg
  - Application: TIG and MMA Welding

  Accessories Included
  - 1 × TIG-250 Welding Machine
  - 1 × TIG Torch
  - 1 × Electrode Holder
  - 1 × Earth Clamp
  - Welding Cables
  - Gas Hose
  - User Manual
  `,

        features: `
  - Advanced IGBT inverter technology
  - Dual TIG and MMA welding functions
  - Maximum output current of 250A
  - Stable arc performance
  - High welding efficiency
  - Compact and portable design
  - Digital display interface
  - Suitable for workshop and industrial applications
  - Forced air cooling system
  - Durable and reliable construction
  `
    },

    {
        id: 11086,
        name: 'Portable Oxy-Acetylene Gas Welding and Cutting Kit',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Generic',
        showSimilar: true,

        price: 400000,
        discountPrice: 380000,

        images: [
            'assets/img/welding accessories/Portable Oxy-Acetylene Gas Welding and Cutting Kit.png',

        ],

        inStock: true,

        description: 'The Portable Oxy-Acetylene Gas Welding and Cutting Kit is a compact and versatile solution designed for welding, brazing, heating and metal cutting applications. Featuring oxygen and acetylene cylinders, precision regulators, high-pressure hoses and a durable cutting torch, this kit provides reliable performance for fabrication workshops, maintenance operations, plumbing services and industrial applications. Its portable design allows easy transportation and convenient field use.',

        specification: `
  - Product Name: Portable Oxy-Acetylene Gas Welding and Cutting Kit
  - Type: Gas Welding and Cutting Set
  - Fuel Gas: Acetylene
  - Oxidizing Gas: Oxygen
  - Cylinder Type: Portable Cylinders
  - Regulator Type: Dual Gauge Regulators
  - Hose Type: High Pressure Twin Hose
  - Torch Type: Gas Welding/Cutting Torch
  - Torch Material: Brass Construction
  - Application: Welding, Cutting, Brazing and Heating
  - Usage: Industrial, Workshop and Maintenance Applications
  - Frame Material: Heavy Duty Steel Carrier
  - Portability: Compact and Lightweight Design

  Accessories Included
  - 1 × Oxygen Cylinder
  - 1 × Acetylene Cylinder
  - 1 × Oxygen Regulator
  - 1 × Acetylene Regulator
  - 1 × Welding/Cutting Torch
  - Twin Gas Hoses
  - Torch Tips
  - Safety Goggles
  - Cylinder Carrier Frame
  `,

        features: `
  - Complete portable gas welding system
  - Suitable for welding and cutting operations
  - Durable brass torch assembly
  - Precision dual-gauge regulators
  - High-pressure flexible hoses
  - Compact and easy to transport
  - Heavy-duty steel cylinder carrier
  - Ideal for brazing and heating applications
  - Reliable gas flow control
  - Designed for professional and industrial use
  `
    },

    {
        id: 11087,
        name: 'MAXMECH ULB 20-2.0Ah 20V Universal Lithium-Ion Battery Pack',
        category: 'batteries',
        group: 'Electrical Equipments',
        brand: 'MAXMECH',
        price: 19000,

        images: [
            'assets/img/battery and battery chargers/maxmech batteries.png'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
The MAXMECH ULB 20-2.0Ah 20V Universal Lithium-Ion Battery Pack is a rechargeable power source designed for MAXMECH 20V cordless power tools. Built with high-quality lithium-ion cells, it delivers reliable performance, longer runtime, and consistent power output for drilling, cutting, grinding, fastening, and other cordless applications.
Its lightweight, compact design reduces user fatigue while providing quick installation and removal through the slide-on battery interface. The battery incorporates protection against overcharging, over-discharging, overheating, and short circuits to maximize safety and extend battery life.
Ideal for professionals, technicians, workshop users, and DIY enthusiasts, this battery ensures dependable cordless performance across compatible MAXMECH 20V tools.
`,

        specification: `
  - Product Name: Universal Lithium-Ion Battery Pack
  - Brand: MAXMECH
  - Model: ULB 20-2.0Ah
  - Battery Voltage: 20V DC
  - Battery Type: Lithium-Ion
  - Capacity: 2.0Ah
  - Battery Platform: MAXMECH 20V Universal Series
  - Rechargeable: Yes
  - Charging Method: Compatible MAXMECH Charger
  - Battery Protection: Overcharge, Over-discharge, Overload & Short Circuit Protection
  - Installation: Slide-On Battery System
  - Housing Material: Heavy-duty ABS Plastic
  - Application: Compatible with MAXMECH 20V Cordless Power Tools
  `,

        features: `
  - Genuine MAXMECH 20V lithium-ion battery
  - 2.0Ah capacity for reliable runtime
  - High-performance rechargeable battery
  - Fast slide-in installation
  - Lightweight and compact design
  - No memory effect for maximum efficiency
  - Stable power delivery throughout use
  - Built-in protection against overload and overheating
  - Durable impact-resistant housing
  - Ideal for drills, impact drivers, grinders, saws, and other compatible MAXMECH cordless tools
  `,

    },

    {
        id: 11088,
        name: 'Earth Clamp for Welding Machine',
        category: 'welding-accessories',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        showSimilar: true,
        brand: 'Dahua',
        price: 4500,
        images: [
            'assets/img/welding accessories/800A Earth Clamp for Welding Machine.jpg'
        ],
        variations: [
            { size: '300A', price: 4500, inStock: true },
            { size: '500A', price: 6500, inStock: true },
            { size: '800A', price: 8500, inStock: true },
        ],
        inStock: true,
        jumiaLink: '',
        kongaLink: '',
        description: `The Dahua Earth Clamp is a heavy-duty welding accessory designed to provide a secure and reliable grounding connection between the welding machine and the workpiece. Manufactured from high-quality steel with copper contact plates, it ensures excellent electrical conductivity, reduced resistance, and stable arc performance throughout the welding process. The strong spring-loaded mechanism delivers a firm grip on metal surfaces, preventing accidental disconnection during operation. Suitable for MMA (Stick), MIG, TIG, ARC, and inverter welding machines, the clamp is widely used in fabrication workshops, construction sites, automotive repairs, metalworking, and industrial maintenance. Available in 300A, 500A, and 800A current ratings, users can select the appropriate capacity based on their welding machine and application requirements.`,
        specification: `
  - Brand: Dahua
  - Product Type: Earth Clamp (Ground Clamp)
  - Available Ratings: 300A, 500A & 800A
  - Material: Heavy-Duty Steel Body
  - Contact Material: High-Conductivity Copper
  - Finish: Corrosion-Resistant Zinc Plating
  - Clamp Mechanism: Heavy-Duty Spring Loaded
  - Connection Type: Bolt-On Cable Connection
  - Application: Welding Ground Connection
  - Compatible Welding Processes: MMA (Stick), MIG, TIG, ARC & Inverter Welding
  - Suitable For: Welding Workshops, Fabrication, Construction, Automotive & Industrial Maintenance

  Package Includes:
  - 1 × Earth Clamp
  `,
        features: `
  - Available in 300A, 500A, and 800A capacities
  - Heavy-duty steel construction for long service life
  - Copper contact plates for maximum electrical conductivity
  - Strong spring mechanism ensures a firm grip
  - Provides stable grounding for improved welding performance
  - Minimizes voltage drop and electrical resistance
  - Corrosion-resistant finish for durability
  - Easy cable installation with bolt connection
  - Compatible with most ARC, MIG, TIG, MMA, and inverter welding machines
  - Ideal for professional welders, workshops, construction sites, and industrial applications
  `
    },

    {
        id: 11089,
        name: 'EDON TIG-400 IGBT Inverter Welding Machine',
        model: 'TIG-400',
        category: 'tig-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'EDON',
        price: 900000,
        showSimilar: true,
        images: [
            'assets/img/welding machines/EDON TIG-400 IGBT Inverter Welding Machine-1.avif',
            'assets/img/welding machines/EDON TIG-400 IGBT Inverter Welding Machine-2.jpeg',
            'assets/img/welding machines/EDON TIG-400 IGBT Inverter Welding Machine-3.jpeg',
            'assets/img/welding machines/EDON TIG-400 IGBT Inverter Welding Machine.jpeg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The EDON TIG-400 IGBT Inverter Welding Machine is a professional three-phase DC welding machine designed for high-performance TIG (Argon Arc) and MMA (Stick) welding. Built with advanced IGBT inverter technology, it provides a stable welding arc, excellent efficiency, and precise current control for welding stainless steel, carbon steel, alloy steel, copper, and other ferrous metals. The machine features adjustable arc force, up-slope, down-slope, post-flow control, and selectable 2T/4T operation for improved weld quality and operator convenience. It is suitable for fabrication workshops, heavy industries, construction, maintenance, shipbuilding, and metal manufacturing.`,

        specification: `
  - Brand: EDON
  - Model: TIG-400
  - Product Type: IGBT Inverter TIG/MMA Welding Machine
  - Welding Process: DC TIG & MMA (Stick)
  - Input Voltage: AC 3-Phase 380V ±15%
  - Frequency: 50/60Hz
  - TIG Output Current: 10–400A
  - MMA Output Current: 20–380A
  - No-Load Voltage: 75V
  - Rated Duty Cycle: 30% @ 40°C
  - Efficiency: 85%
  - Power Factor: 0.93
  - Insulation Class: F
  - Protection Class: IP21S
  - Electrode Diameter: 1.6–6.0mm
  - Up Slope Time: 0–10 Seconds
  - Down Slope Time: 0–10 Seconds
  - Post Flow Time: 0–10 Seconds
  - Dimensions: 600 × 330 × 520mm
  - Weight: 30kg

  Package Includes:
  - 1 × EDON TIG-400 Welding Machine
  - 1 × TIG Torch
  - 1 × Electrode Holder
  - 1 × Earth Clamp
  - User Manual
  `,

        features: `
  - Advanced IGBT inverter technology
  - Supports both TIG and MMA welding
  - Welding current up to 400A
  - Stable arc with minimal spatter
  - Adjustable Arc Force control
  - Adjustable up-slope and down-slope
  - Adjustable post-flow gas control
  - 2T/4T trigger operation
  - Digital current display
  - Over-current and overheat protection
  - High efficiency and energy saving
  - Suitable for stainless steel, carbon steel, alloy steel and copper
  - Ideal for fabrication workshops, construction and industrial applications
  `
    },

    {
        id: 11090,
        name: 'Digital Inverter ARC Welding Machine 200A',
        category: 'arc-welding-machines',
        group: 'Electrical Equipments',
        parentCategory: 'welding machines',
        brand: 'Generic',
        price: 145000,


        images: [
            'assets/img/power tools/Digital Inverter ARC Welding Machine 200A.jpg'
        ],

        videos: [],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `The Digital Inverter ARC Welding Machine 200A is a compact, lightweight, and energy-efficient welding machine designed for professional and DIY welding applications. Built with advanced IGBT inverter technology, it delivers a stable welding arc, reduced power consumption, and excellent welding performance on mild steel, stainless steel, and other ferrous metals. Its portable design, digital display, and protective carrying case make it an excellent choice for workshops, fabrication, construction sites, maintenance work, and home repairs.`,

        specification: `
- Product Name: Digital Inverter ARC Welding Machine
- Brand: Generic
- Model: MMA-200 (or equivalent)
- Welding Process: MMA / ARC (Stick Welding)
- Inverter Technology: IGBT
- Rated Voltage: 220-240V AC
- Frequency: 50/60Hz
- Rated Output Current: 20A - 200A
- Duty Cycle: 60%
- No-Load Voltage: 65V
- Electrode Diameter: 1.6 mm - 4.0 mm
- Display: Digital LCD/LED Current Display
- Cooling System: Forced Air Cooling
- Protection Class: IP21S
- Insulation Class: F
- Housing Material: Metal with Impact-Resistant Plastic Cover
- Weight: Approx. 4.5 kg
- Accessories Included: Electrode Holder with Cable, Earth Clamp with Cable, Power Cord, Carrying Case, User Manual
  `,

        features: `
- Advanced IGBT inverter technology for stable arc performance
- Compact, lightweight, and highly portable
- Digital display for accurate current adjustment
- Suitable for 1.6 mm to 4.0 mm welding electrodes
- Low power consumption with high welding efficiency
- Hot Start for easier arc ignition
- Arc Force improves welding stability
- Anti-Stick function prevents electrode sticking
- Built-in overheating and overload protection
- Ideal for fabrication, maintenance, construction, and repair work
  `
    },

    {
        id: 11091,
        name: 'Portable 12V Jump Starter with Air Compressor - 4 In 1 ',
        category: 'jumper-starters',
        group: 'electrical equipments',
        brand: 'Generic',
        price: 150000,
        showSimilar: true,

        images: [
            'assets/img/jumper starters/Portable Car Jump Starter & Air Compressor - Yellow - 4 In 1 - 12v.jpg',
            'assets/img/jumper starters/Portable Car Jump Starter & Air Compressor - Yellow - 4 In 1 - 12v-2.jpg',
            'assets/img/jumper starters/Portable Car Jump Starter & Air Compressor - Yellow - 4 In 1 - 12v-3.jpg',
            'assets/img/jumper starters/Portable Car Jump Starter & Air Compressor - Yellow - 4 In 1 - 12v-4.jpg',
            'assets/img/jumper starters/Portable Car Jump Starter & Air Compressor - Yellow - 4 In 1 - 12v-5.jpg',
            'assets/img/jumper starters/Portable Car Jump Starter & Air Compressor - Yellow - 4 In 1 - 12v-6.jpg'
        ],

        inStock: true,

        description: 'The Portable 12V Jump Starter with Air Compressor is a multifunction automotive emergency power unit designed to jump-start 12V vehicle batteries, inflate tyres, and provide emergency lighting. It features heavy-duty battery clamps, a built-in air compressor with pressure gauge, integrated work light, battery condition meter, and rechargeable sealed lead-acid battery, making it an essential roadside emergency tool for cars, SUVs, motorcycles, and light commercial vehicles.',

        specification: `
Product Type: Portable Jump Starter
Battery Voltage: 12V DC
Battery Type: Rechargeable Sealed Lead-Acid Battery
Starting Current: Approx. 300A
Peak Current: Approx. 600A
Air Compressor: Built-in
Compressor Pressure: Up to 260 PSI
Pressure Gauge: Analog
Work Light: Built-in Halogen Lamp
Battery Status Indicator: Analog Voltmeter
Charging Input: AC 220–240V, 50/60Hz
Output: 12V DC
Application: Cars, SUVs, Motorcycles, Vans, Light Trucks

accessories:
Battery clamps
Built-in air hose
AC charging cable
DC charging adapter
Inflation nozzle adapters
User manual

  `,

        features: `
Powerful jump starter for 12V vehicle batteries
Built-in air compressor for tyre inflation
Integrated emergency work light
Heavy-duty insulated battery clamps
Built-in battery condition indicator
Rechargeable portable design
Ideal for roadside emergencies and vehicle maintenance
Suitable for cars, motorcycles, SUVs, and light commercial vehicles
Easy-to-carry housing with ergonomic handle
  `,

  

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
  id: 11092,
  name: 'HIGH-POWER Multi-Function Jump Starter',
  category: 'jumper-starters',
        group: 'electrical equipments',
  brand: 'HIGH-POWER',
  price: 73000,
  showSimilar: true,

  images: [
    'assets/img/jumper starters/jumper starter with power bank.jpg'
  ],

  inStock: true,

  description: 'The HIGH-POWER Multi-Function Jump Starter is a compact emergency power solution designed to jump-start petrol and diesel vehicles, charge mobile devices, and provide portable lighting whenever needed. Built with a high-capacity lithium battery, it delivers powerful peak current for starting cars, SUVs, motorcycles, pickups, boats, and light trucks with weak or discharged batteries. The unit also functions as a portable power bank with USB charging ports and features an integrated LED flashlight with multiple lighting modes for emergency roadside situations. Supplied with an intelligent battery clamp, air compressor, charging accessories, and a durable carrying case, it is an essential emergency companion for every vehicle owner.',

  specification: `
Product Type: Multi-Function Jump Starter
Brand: HIGH-POWER
Model: Multi-Function Jump Starter
Battery Type: Rechargeable Lithium Battery
Battery Capacity: 20000mAh
Starting Voltage: 12V
Peak Current: 2000A
USB Output: 5V
DC Output: 12V
Charging Input: 15V DC
LED Flashlight: Yes
Flashlight Modes: High, SOS, Strobe
Air Compressor: Included
Display: LED Battery Indicator
Suitable For: Petrol and Diesel Vehicles
Application: Cars, SUVs, Pickups, Vans, Motorcycles and Boats

Package Includes:
Heavy-duty Smart Battery Clamps
Portable Air Compressor
AC Charging Adapter
Car Charging Adapter
USB Charging Cable
User Manual
Carrying Case
  `,

  features: `
Powerful 2000A peak current for reliable engine starting
Suitable for most 12V petrol and diesel vehicles
High-capacity lithium battery provides long standby time
Integrated LED flashlight with emergency modes
Functions as a portable USB power bank
Intelligent battery clamps with multiple safety protections
Portable air compressor for tyre inflation
Compact and lightweight design for easy storage
Durable carrying case for convenient transportation
Ideal for roadside emergencies, travel, workshops, and everyday vehicle use
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

    {
        id: 11093,
        name: 'INGCO CSILI2001 Cordless Soldering Iron',
        category: 'soldering-equipment',
        group: 'electrical equipment',
        brand: 'INGCO',
        model: 'CSILI2001',
        price: 48000,
        discountPrice: 43000,
        showSimilar: true,

        images: [
            'assets/img/soldering tools/INGCO CSILI2001 Cordless Soldering Iron-1.webp',
            'assets/img/soldering tools/INGCO CSILI2001 Cordless Soldering Iron-2.jpg',
            'assets/img/soldering tools/INGCO CSILI2001 Cordless Soldering Iron.jpg'
        ],

        inStock: true,

        description: 'The INGCO CSILI2001 Cordless Soldering Iron is a portable 20V lithium-ion soldering tool designed for convenient soldering without the restrictions of a power cord. Delivering 40W of heating power, it reaches working temperature within 3 to 5 minutes, making it suitable for electrical repairs, electronics assembly, automotive wiring, cable splicing, DIY projects, and maintenance work. Its lightweight ergonomic design and straight tip provide excellent control for precision soldering in workshops, homes, and field service applications. As part of the INGCO P20S cordless platform, it is compatible with INGCO 20V lithium-ion batteries, allowing users to share batteries across multiple INGCO cordless tools.',

  specification: `
Product Type: Cordless Soldering Iron
Brand: INGCO
Model: CSILI2001
Voltage: 20V
Input Power: 40W
Heating Time: 3–5 Minutes
Tip Type: Straight Tip
Power Source: INGCO 20V Lithium-Ion Battery
Battery Platform: INGCO P20S
Battery Included: No
Charger Included: No
Application: Electronics Repair, Electrical Installation, Wire Soldering, Automotive Wiring, DIY Projects and General Maintenance

Package Includes:
Cordless Soldering Iron
Straight Soldering Tip
User Manual
Battery and Charger Sold Separately
  `,

        features: `
20V cordless design provides maximum portability
40W heating element delivers efficient soldering performance
Ready for use within 3–5 minutes
Compatible with the INGCO P20S battery platform
Lightweight ergonomic handle for comfortable operation
Straight precision tip for accurate soldering
Ideal for electronics, electrical wiring, automotive repairs, and maintenance work
No power cord allows easy use in confined or remote locations
Durable construction for professional and DIY applications
Easy tip replacement and maintenance
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 11094,
        name: 'EDON PROMAX EPM-AXQ-160A Gasoline Welding Generator',
        category: 'petrol-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        brand: 'EDON PROMAX',
        model: 'EPM-AXQ-160A',
        price: 485000,
        discountPrice: 465000,
        showSimilar: true,

        images: [
            'assets/img/generators/EDON PROMAX EPM-AXQ-160A Gasoline Welding Generator.png',
            'assets/img/generators/EDON PROMAX EPM-AXQ-160A Gasoline Welding Generator-2.png',
            'assets/img/generators/EDON PROMAX EPM-AXQ-160A Gasoline Welding Generator-3.png'
        ],

        inStock: true,

        description: 'The EDON PROMAX EPM-AXQ-160A Gasoline Welding Generator is a portable engine-driven welding machine designed to provide reliable DC welding power together with auxiliary AC power for light-duty electrical equipment. It is suitable for welding mild steel, stainless steel, and general fabrication work on construction sites, farms, workshops, maintenance operations, and remote locations where mains electricity is unavailable. Built with a durable tubular steel frame and powered by a reliable gasoline engine, it delivers stable welding performance while also functioning as a portable generator for powering small tools and equipment.',

        specification: `
Product Type: Gasoline Welding Generator
Brand: EDON PROMAX
Model: EPM-AXQ-160A
Engine Type: 4-Stroke Air-Cooled Gasoline Engine
Fuel Type: Petrol (Gasoline)
Starting System: Recoil Start
Welding Output: DC
Rated Welding Current: 120A
Current Adjustment Range: 50–160A
No-Load Voltage: 50–60V
Rated Welding Voltage: 22–28V
Auxiliary Output Voltage: DC 220V
Auxiliary Output Power: 1kVA (1kW DC)
Duty Cycle: 60%
Recommended Electrode Diameter: 2.5–4.0mm
Cooling System: Air Cooled
Frame Type: Heavy-Duty Tubular Steel Frame
Application: Construction, Fabrication, Maintenance, Farm Work and Field Repairs

Package Includes:
Welding Generator
Electrode Holder with Cable
Earth Clamp with Cable
Welding Face Shield
Protective Gloves
Spark Plug Wrench
Tool Kit
Operator's Manual
  `,

        features: `
2-in-1 welding machine and portable generator
Maximum welding current of 160A
Suitable for MMA (Stick) welding applications
Stable DC welding output for smooth arc performance
Supports 2.5mm, 3.2mm and 4.0mm electrodes
Heavy-duty gasoline engine for dependable outdoor operation
Portable open-frame design for easy transportation
Recoil start system for simple operation
Durable steel frame protects the machine in harsh environments
Ideal for construction sites, workshops, farms and maintenance work
Can supply auxiliary power for compatible light-duty equipment
Low maintenance and fuel-efficient operation
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 11095,
        name: 'TOTAL Diesel Generator and Welder 4600W / 50-180A (TP446001)',
        category: 'desiel-generators',
        group: 'Electrical Equipments',
        parentCategory: 'generators',
        brand: 'TOTAL',
        price: 1500000,
        showSimilar: true,

        images: [
            'assets/img/generators/TOTAL DIESEL GENERATOR AND WELDER 4600W (TP446001).jpg',
            'assets/img/generators/TOTAL DIESEL GENERATOR AND WELDER 4600W (TP446001)-2.jpeg',
            'assets/img/generators/TOTAL DIESEL GENERATOR AND WELDER 4600W (TP446001)-3.jpeg',
            'assets/img/generators/TOTAL DIESEL GENERATOR AND WELDER 4600W (TP446001)-4.jpg'
        ],

        inStock: true,

        description: 'The TOTAL TP446001 Diesel Generator and Welder combines reliable power generation with professional arc welding capability in one heavy-duty machine. Powered by a robust 9HP diesel engine, it delivers up to 4.6kW of electrical output while providing a welding current range of 50–180A for maintenance, fabrication, and construction work. Featuring both electric and recoil start, a copper coil alternator, and a large 15L fuel tank, this generator is ideal for workshops, farms, construction sites, and remote locations where electricity and welding are required simultaneously.',

        specification: `
Product Type: Diesel Generator and Welder
Brand: TOTAL
Model: TP446001
Rated Voltage: 220–240V
Rated Frequency: 50Hz
Phase: Single Phase
Maximum Output: 4.6kW
Rated Speed: 3000RPM
DC Output: 12V / 8.3A
Engine Type: 4-Stroke Air-Cooled Diesel Engine
Engine Power: 9HP
Engine Displacement: 418cc
Starting System: Electric & Recoil Start
Alternator: 100% Copper Coil
Fuel Tank Capacity: 15L
Battery: 30Ah Maintenance-Free Battery
Insulation Class: F
Welding Current: 50–180A
Suitable Electrode Size: 1.6–4.0mm

Package Includes:
TOTAL TP446001 Diesel Generator and Welder
Battery
Starting Key
Tool Kit
User Manual

Note:
Welding accessories are not included.
  `,

        features: `
Dual-function generator and arc welder
Maximum power output of 4.6kW
Adjustable welding current from 50A to 180A
Powerful 9HP diesel engine
Electric and recoil starting system
100% copper alternator for stable performance
Large 15L fuel tank for extended operation
12V DC output for battery charging
Supports 1.6–4.0mm welding electrodes
Heavy-duty steel frame construction
Suitable for workshops, construction sites, farms, fabrication and maintenance work
Reliable performance for professional and industrial applications
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },
    //  electrical equipments end at 13000



]