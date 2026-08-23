import { Product } from '../models/Product';

export const PUMPING_MACHINES_PRODUCTS: Product[] = [


    {
        id: 21001,
         name: 'INGCO Centrifugal Water Pump 0.75HP (CPM5508)',
      category: 'pressure-pumps',
      group: 'pumping machines',
      brand: 'INGCO',
         price: 95000, // adjust based on your market (commonly ₦80,000 - ₦120,000 in Nigeria)
    
         images: [
           'assets/img/pressure and water pumps/Centrifugal Water Pump 0.75HP INGCO CPM5508.jpg',
           'assets/img/tools/ingco-cpm5508-2.jpg',
           'assets/img/tools/ingco-cpm5508-3.jpg'
         ],
    
         inStock: true,
         jumiaLink: '',
         kongaLink: '',
    
         description: `The INGCO CPM5508 Centrifugal Water Pump is a reliable and efficient 0.75HP electric pump designed for domestic and light industrial water transfer applications. Built with a durable copper motor and corrosion-resistant pump body, it delivers strong water flow for homes, farms, gardens, and small-scale irrigation systems. This pump is ideal for boosting water pressure, transferring clean water, and supplying water from wells, tanks, and reservoirs. With stable performance, low noise operation, and energy efficiency, it is a dependable solution for everyday water pumping needs.`,
    
         specification: `
      - Product Name: Centrifugal Water Pump
      - Brand: INGCO
      - Model: CPM5508
      - Power: 0.75HP (550W)
      - Voltage: 220V - 240V / 50Hz
      - Motor Type: Copper winding motor
      - Max Flow Rate: Approx. 50 - 60 L/min
      - Max Head (Lift Height): Approx. 30 - 35 meters
      - Suction Depth: Up to 8 meters
      - Inlet/Outlet Diameter: 1 inch x 1 inch
      - Speed: Approx. 2850 RPM
      - Protection Class: IP44
      - Duty: Continuous operation
      - Usage: Domestic water supply, irrigation, water transfer, pressure boosting
      `,
    
         features: `
      - Efficient 0.75HP motor for steady water flow
      - Strong suction and high lift capability
      - Durable copper winding ensures long motor life
      - Corrosion-resistant pump body for extended durability
      - Low noise and energy-efficient operation
      - Compact and lightweight design for easy installation
      - Ideal for homes, farms, and small irrigation systems
      - Stable performance for continuous use
      - Easy maintenance and user-friendly design
      - Trusted INGCO quality for reliability and durability
      `
       },
       
    
    
    
    
       {
         id: 21002,
         name: 'INGCO Submersible Clean Water Pump 0.5HP (SPC3702)',
         category: 'submersible-pumps',
         group: 'pumping machines',  
         brand: 'INGCO',
         price: 70000, // adjust based on your market (commonly ₦60,000 - ₦95,000 in Nigeria)
    
         images: [
           'assets/img/pressure and water pumps/ingco Submersible_Clean_Water_Pump_0.5HP 2.jpg',
           'assets/img/tools/ingco-spc3702-2.jpg',
           'assets/img/tools/ingco-spc3702-3.jpg'
         ],
    
         inStock: true,
         jumiaLink: '',
         kongaLink: '',
    
         description: `The INGCO SPC3702 Submersible Clean Water Pump is a compact and efficient 0.5HP electric pump designed for draining and transferring clean or slightly dirty water. It operates fully submerged in water, making it ideal for removing water from tanks, wells, basements, ponds, and flooded areas. Equipped with a durable motor and corrosion-resistant housing, this pump ensures reliable performance and long service life. Its lightweight design and easy operation make it perfect for domestic use, light commercial applications, and emergency drainage.`,
    
         specification: `
      - Product Name: Submersible Clean Water Pump
      - Brand: INGCO
      - Model: SPC3702
      - Power: 0.5HP (370W)
      - Voltage: 220V - 240V / 50Hz
      - Motor Type: Copper winding motor
      - Max Flow Rate: Approx. 90 - 110 L/min
      - Max Head (Lift Height): Approx. 6 - 8 meters
      - Max Submersion Depth: Up to 7 meters
      - Outlet Diameter: 1 inch
      - Cable Length: Approx. 9 - 10 meters
      - Protection Class: IPX8 (fully submersible)
      - Duty: Continuous operation
      - Usage: Drainage, water transfer, wells, tanks, flooded areas
      `,
    
         features: `
      - Efficient 0.5HP motor for reliable water pumping
      - Fully submersible design for direct operation in water
      - High flow rate for fast drainage and water removal
      - Durable, corrosion-resistant body for long life
      - Lightweight and portable for easy handling
      - Low noise operation compared to surface pumps
      - Ideal for clean and slightly dirty water applications
      - Easy installation and maintenance
      - Suitable for homes, farms, and light commercial use
      - Trusted INGCO quality for durability and performance
      `
       },
    
    {
      id: 21003,
      name: 'VALUE Single Stage Vacuum Pump',
      category: 'vacuum-pumps',
      group: 'pumping machines',
      brand: 'VALUE',
    
      price: 165000,
    
    variations: [
      {
        model: 'VE115N',
        power: '1/4 HP',
        size: '1.5 CFM',
        description: 'Suitable for domestic air conditioners, refrigerators, and light-duty HVAC servicing.',
        inStock: true,
        price: 160000
      },
      {
        model: 'VE125N',
        power: '1/4 HP',
        size: '2.5 CFM',
        description: 'Designed for residential air conditioning and refrigeration maintenance.',
        inStock: true,
        price: 165000
      },
      {
        model: 'VE135N',
        power: '1/3 HP',
        size: '3.5 CFM',
        description: 'Ideal for residential and commercial HVAC installations and servicing.',
        inStock: true,
        price: 370000
      },
      {
        model: 'VE160N',
        power: '1/2 HP',
        size: '6.0 CFM',
        description: 'Suitable for commercial refrigeration systems, cold rooms, and heat pumps.',
        inStock: true,
        price: 290000
      },
      {
        model: 'VE180N',
        power: '3/4 HP',
        size: '8.0 CFM',
        description: 'High-capacity single-stage vacuum pump for large HVAC and refrigeration systems.',
        inStock: true,
        price:400000
      }
    ],
    
      images: [
        'assets/img/vacuum pump/Stage 1 Value Vacuum Pump VE115N.jpg',
        'assets/img/vacuum pump/Stage 1 Value Vacuum Pump VE115N-2.jpg',
        'assets/img/vacuum pump/Stage 1 Value Vacuum Pump VE135 1by3hp.jpg',
        'assets/img/vacuum pump/Stage 1 Value Vacuum Pump VE160 1by2hp.jpg',
        'assets/img/vacuum pump/Stage 1 Value Vacuum Pump VE180N-3by4-2.jpeg',
        'assets/img/vacuum pump/Stage 1 Value Vacuum Pump VE180N-3by4-3.webp',
        'assets/img/vacuum pump/Stage 1 Value Vacuum Pump VE180N-3by4.jpg'
      ],
    
      inStock: true,
    
      description: `The VALUE Single Stage Vacuum Pump is a professional HVAC and refrigeration service tool designed for evacuating air and moisture from refrigeration systems, air conditioners, cold rooms, heat pumps, and other sealed systems before refrigerant charging. Built with a durable aluminum alloy housing and efficient rotary vane technology, it delivers reliable vacuum performance for residential, commercial, and industrial applications. Available in multiple horsepower options ranging from 1/4 HP to 1 HP to suit various servicing requirements.`,
    
      specification: `
    - Product Name: VALUE Single Stage Vacuum Pump
    - Brand: VALUE
    - Pump Type: Single Stage Rotary Vane Vacuum Pump
    - Power Supply: 220-240V~50/60Hz
    - Motor Type: Oil Lubricated
    - Cooling System: Air Cooled
    - Housing Material: Aluminum Alloy
    - Handle Type: Portable Carry Handle
    - Application: HVAC & Refrigeration Service
    - Vacuum Performance: High Efficiency
    - Operating Principle: Rotary Vane
    - Suitable For: Air Conditioners, Refrigerators, Freezers, Cold Rooms, Heat Pumps, Commercial HVAC Systems
    
    Available Variants:
    - 1/4 HP – 1.5 CFM
    - 1/2 HP – 3.5 CFM
    - 3/4 HP – 6.0 CFM
    - 1 HP – 8.0 CFM
    
    Accessories Included:
    - 1 x VALUE Single Stage Vacuum Pump
    - 1 x Vacuum Pump Oil Bottle
    - 1 x User Manual
    - 1 x Carrying Carton
      `,
    
      features: `
    - High-performance single-stage rotary vane technology
    - Fast evacuation of air and moisture
    - Durable aluminum alloy construction
    - Oil-lubricated mechanism for extended service life
    - Air-cooled motor for continuous operation
    - Low vibration and low noise design
    - Easy oil filling and draining system
    - Built-in oil sight glass for oil monitoring
    - Portable and lightweight construction
    - Ergonomic carry handle
    - Corrosion-resistant housing
    - Reliable vacuum performance
    - Suitable for residential, commercial, and industrial HVAC applications
    - Ideal for refrigerant charging preparation
    - Available in 1/4 HP, 1/2 HP, 3/4 HP, and 1 HP models
      `,
    
      jumiaLink: 'https://www.jumia.com.ng/',
      kongaLink: 'https://www.konga.com/'
    },
    
    
       {
      id: 21004,
      name: 'INGCO Gasoline Water Pump 2" (GWP202) – 6.5HP Petrol Engine',
         category: 'water-pumps',
         group: 'pumping machines',  
      brand: 'INGCO',
      price: 185000, // adjust based on your market (commonly ₦160,000 - ₦250,000 in Nigeria)
    
      images: [
        'assets/img/pressure and water pumps/INGCO Gasoline Water Pump 2inch GWP202.jpg',
        'assets/img/tools/ingco-gwp202-2.jpg',
        'assets/img/tools/ingco-gwp202-3.jpg'
      ],
    
      inStock: true,
      jumiaLink: '',
      kongaLink: '',
    
      description: `The INGCO GWP202 Gasoline Water Pump is a powerful 2-inch petrol-powered pump designed for high-volume water transfer in farms, construction sites, and industrial applications. Equipped with a reliable 6.5HP engine, it delivers strong suction and discharge performance, making it ideal for irrigation, drainage, and flood control. Its 2-inch (50mm) inlet and outlet allow for fast water movement, while the rugged steel frame ensures durability and stability in tough working conditions. This pump operates independently of electricity, making it perfect for remote locations and heavy-duty outdoor use.`,
    
      specification: `
      - Product Name: Gasoline Water Pump
      - Brand: INGCO
      - Model: GWP202
    
      - Engine Power: 6.5HP
      - Engine Type: 4-stroke petrol engine
      - Fuel Type: Petrol (Gasoline)
      - Fuel Tank Capacity: Approx. 3.6L
    
      - Inlet Diameter: 2" (50mm)
      - Outlet Diameter: 2" (50mm)
    
      - Max Flow Rate: Approx. 500 - 600 L/min
      - Max Head (Lift Height): Approx. 26 - 30 meters
      - Suction Depth: Up to 7 - 8 meters
    
      - Starting System: Recoil (manual start)
      - Frame: Heavy-duty steel protective frame
    
      - Dimensions: Approx. 500 x 380 x 420 mm
      - Weight: Approx. 23 - 28 kg
    
      - Usage:
          • Farm irrigation
          • Construction site water transfer
          • Flood control and drainage
          • Pond and reservoir pumping
      `,
    
      features: `
      - Powerful 6.5HP engine for high-volume water transfer
      - Large 2-inch inlet and outlet for fast pumping
      - Strong suction and high lift capability
      - Petrol-powered – works without electricity
      - Durable steel frame for protection and stability
      - Easy recoil start system
      - Suitable for heavy-duty outdoor use
      - Efficient fuel consumption for extended operation
      - Portable design for easy movement on site
      - Trusted INGCO quality for reliability and performance
     
     
      `
    },
    
    
       {
         id: 21005,
         name: 'Electric Oil Fuel Diesel Transfer Pump 16GPM with Meter & Manual Nozzle',
         category: 'fuel-transfer-pumps',
         group: 'pumping machines',
         brand: 'Generic',
         price: 320000,
    
         images: [
           'assets/img/pumping machines/electric fuel desiel transfer oil pump.webp'
         ],
         inStock: true,
    
         description: 'The Electric Oil Fuel Diesel Transfer Pump is a high-efficiency fuel dispensing solution designed for fast and accurate transfer of diesel, kerosene, and light oils. Equipped with a powerful 110V motor, this pump delivers a strong flow rate of up to 16 gallons per minute (60L/min), making it ideal for industrial, agricultural, and workshop applications. It features a built-in mechanical flow meter for precise measurement and a manual nozzle for controlled dispensing. The self-priming rotary vane system ensures easy operation, while the heavy-duty cast iron construction guarantees durability and long-term performance in demanding environments.',
    
         specification: `
      Product Type: Electric Fuel Transfer Pump
      Voltage: 110V / 60Hz
      Power: 550W
      Max Flow Rate: 60 L/min (16 GPM)
      Pump Type: Self-Priming Rotary Vane
      Meter Type: Mechanical Flow Meter (±1% accuracy)
      Inlet/Outlet Size: 1 inch (25mm)
      Max Pressure: 3 Bar
      Max Suction Height: 5 meters
      Max Head: 10–15 meters
      Suitable Fluids: Diesel, Kerosene, Light Oils
      `,
    
         features: `
      High flow rate for fast fuel transfer (16 GPM)
      Built-in mechanical meter for accurate fuel measurement
      Durable cast iron construction for long-lasting use
      Self-priming pump for easy startup
      Manual nozzle for controlled fuel dispensing
      Compact and portable design for flexible use
      Ideal for industrial, farm, and workshop applications
      Not suitable for gasoline or highly flammable fuels
      `,
    
         jumiaLink: 'https://www.jumia.com.ng/',
         kongaLink: 'https://www.konga.com/'
       },
    
    
       {
         id:21006,
         name: 'Quantitative Fuel Dispenser Diesel Transfer Pump Kit (12V DC / 220V)',
         category: 'fuel-transfer-pumps',
         group: 'pumping machines',
         brand: 'Generic',
         price: 320000,
    
         images: [
           'assets/img/pumping machines/Quantitative 12 v dc 220v diesel transfer fuel pump.jpg'
         ],
    
         inStock: true,
    
         description: 'The Quantitative Fuel Dispenser Diesel Transfer Pump Kit is a complete fuel dispensing solution designed for accurate and efficient transfer of diesel, kerosene, and light oils. It is equipped with a high-performance self-priming pump, a precise flow meter, and an automatic or manual nozzle for controlled dispensing. Available in both 12V DC and 220V AC configurations, this pump is suitable for mobile and fixed installations such as fuel stations, farms, construction sites, and industrial operations. The system allows users to dispense fuel by volume or preset quantity, making it ideal for professional fuel management and monitoring.',
    
         specification: `
      Product Type: Quantitative Diesel Fuel Dispenser Pump Kit
      Voltage Options: 12V DC / 220V AC
      Power: 150W – 550W (depending on model)
      Max Flow Rate: 20 – 60 L/min
      Pump Type: Self-Priming Rotary Vane Pump
      Meter Type: Mechanical or Digital Flow Meter
      Measurement Accuracy: ±0.3% – ±1%
      Inlet/Outlet Size: 1 inch (25mm)
      Suction Height: 5 – 6 meters
      Hose Length: 2m (inlet), 4m (outlet)
      Suitable Fluids: Diesel, Kerosene, Light Oils
      `,
    
         features: `
      Quantitative dispensing (preset fuel volume or amount)
      Available in both battery-powered (12V) and electric (220V) versions
      High accuracy flow meter for precise measurement
      Self-priming pump for easy operation
      Durable metal body for industrial use
      Manual or automatic fuel nozzle with swivel joint
      Built-in bypass valve and strainer for safe operation
      Portable or wall-mountable design
      Suitable for fuel stations, farms, construction, and workshops
      Not suitable for gasoline (unless explosion-proof model)
      `,
          showSimilar: true,
         jumiaLink: 'https://www.jumia.com.ng/',
         kongaLink: 'https://www.konga.com/'
       },
    
       
       {
         id: 21007,
         name: '2 Inch LC Flow Meter for Diesel Fuel (Positive Displacement)',
         category: 'fuel-transfer-pumps',
         group: 'pumping machines',
         brand: 'Generic',
         price: 1500000,
    
         images: [
           'assets/img/pumping machines/2 inches liquid control flow meter.jpg'
         ],
    
         inStock: true,
    
         description: 'The 2 Inch LC Flow Meter is a high-precision positive displacement (oval gear) meter designed for accurate measurement of diesel, fuel oils, kerosene, and other industrial liquids. Built for heavy-duty applications, it delivers consistent and reliable readings even under varying flow conditions and pressure levels. This flow meter is widely used in fuel dispensing systems, tanker trucks, fuel depots, and industrial pipelines where precise fuel accountability is critical. Its robust construction, combined with advanced metering technology, ensures minimal measurement error and long-term stability. The meter features a low-pressure drop design for efficient flow, easy integration with mechanical or digital registers, and compatibility with automated fuel management systems. It is engineered for durability, offering excellent resistance to wear, corrosion, and harsh working environments, making it a dependable choice for continuous industrial operations.',
    
         specification: `
      Product Type: LC Positive Displacement Flow Meter
      Size: 2 Inch (DN50 / 50mm)
      Flow Range: 38 – 380 L/min
      Accuracy: ±0.2% – ±0.5%
      Repeatability: ≤0.05%
      Max Pressure: 10 – 18 Bar
      Measurement Units: Liters / Gallons
      Material: Aluminum / Cast Iron
      Connection Type: Flange / NPT / BSP
      Application: Diesel, Fuel Oil, Kerosene, Industrial Fluids
      `,
    
         features: `
      High accuracy fuel measurement with stable performance
      Positive displacement (oval gear) technology for precise metering
      Suitable for large flow rate applications
      Durable construction for industrial and outdoor use
      Low pressure drop for efficient fuel transfer systems
      Easy installation with flange or threaded connections
      Compatible with mechanical or digital registers
      Long service life with minimal maintenance
      Ideal for tanker trucks, fuel depots, and dispensing systems
      `,
         showSimilar: true,
         jumiaLink: 'https://www.jumia.com.ng/',
         kongaLink: 'https://www.konga.com/'
       },
    
    
    
       {
      id: 21008,
      name: 'SUMEC 3 Inch Water Pump (WP30X)',
       category: 'water-pumps',
         group: 'pumping machines',  
      showSimilar: true,
    
      brand: 'SUMEC',
    
      price: 200000,
      discountPrice: 193000,
    
      images: [
        'assets/img/pressure and water pumps/sumec water pump 3 inch.webp',
        'assets/img/pressure and water pumps/sumec water pump 3 inch.webp-2.webp'
      ],
    
      videos: [
        'https://www.youtube.com/watch?v=8mL2Q5rP7vA'
      ],
    
      jumiaLink: 'https://www.jumia.com.ng/sumec-water-pump-3inch-418778386.html',
      kongaLink: '',
    
      inStock: true,
    
      description: 'The SUMEC WP30X 3 Inch Water Pump is a high-performance petrol-powered water transfer pump designed for irrigation, construction, flood control and industrial water movement applications. Equipped with a durable 5.5HP 4-stroke OHV engine and heavy-duty pump housing, it delivers strong suction and high water discharge performance for farms, workshops, construction sites and emergency drainage operations.',
    
      specification: `
      - Product Name: SUMEC 3 Inch Water Pump
      - Model: WP30X
      - Brand: SUMEC
      - Pump Type: Gasoline Water Pump
      - Pump Size: 3 Inch (80mm)
      - Engine Type: 4-Stroke OHV Air-Cooled Engine
      - Engine Power: 5.5HP
      - Starting System: Recoil Start
      - Fuel Type: Petrol
      - Fuel Tank Capacity: 3.6L
      - Maximum Flow Rate: 1000L/min
      - Maximum Head: 28–30m
      - Maximum Suction Depth: 8m
      - Pump Body: Heavy-Duty Metal Construction
      - Application: Water Transfer and Irrigation
    
      Applications
      - Farm irrigation
      - Flood drainage
      - Construction site dewatering
      - Industrial water transfer
      - Tank filling
      - Agricultural operations
      - Emergency water pumping
      - Pond drainage
      - Remote water supply
      - General water movement operations
    
      Accessories
      - SUMEC Water Pump
      - Suction Connector
      - Hose Clamps
      - Filter Strainer
      - User Manual
      `,
    
      features: `
      - Powerful 5.5HP petrol engine
      - High-volume water transfer performance
      - Heavy-duty industrial pump design
      - Strong suction and discharge capability
      - Durable metal frame protection
      - Portable recoil-start system
      - Suitable for irrigation and drainage
      - Reliable construction site performance
      - Easy operation and maintenance
      - Ideal for industrial and agricultural use
      `
    },
    
    
       {
         id: 21009,
         name: 'SUMEC 2 Inch Water Pump (WP20X)',
         group: 'water-pumps',
         category: 'gasoline-water-pumps',
         showSimilar: true,
         brand: 'SUMEC',
    
         price: 165000,
         discountPrice: 148000,
    
         images: [
           'assets/img/pressure and water pumps/sumec water pump 2 inch.webp',
           'assets/img/pressure and water pumps/sumec water pump 2 inch.webp-2.webp'
         ],
    
         videos: [
           'https://www.youtube.com/watch?v=aZ_E9moQ8Ns'
         ],
    
         jumiaLink: '',
         kongaLink: '',
    
         inStock: true,
    
         description: 'The SUMEC WP20X 2 Inch Water Pump is a reliable petrol-powered water transfer pump designed for irrigation, drainage, domestic water supply and industrial water movement applications. Built with a durable heavy-duty pump housing and efficient 4-stroke OHV engine, it provides strong suction and stable discharge performance for farms, construction sites, workshops and emergency flood management operations.',
    
         specification: `
      - Product Name: SUMEC 2 Inch Water Pump
      - Model: WP20X
      - Brand: SUMEC
      - Pump Type: Gasoline Water Pump
      - Pump Size: 2 Inch (50mm)
      - Engine Type: 4-Stroke OHV Air-Cooled Engine
      - Engine Power: 4.0HP
      - Starting System: Recoil Start
      - Fuel Type: Petrol
      - Fuel Tank Capacity: 2.5L
      - Maximum Flow Rate: 600L/min
      - Maximum Head: 26m
      - Maximum Suction Depth: 8m
      - Weight: Approx. 22kg
      - Pump Body: Heavy-Duty Metal Construction
      - Application: Water Transfer and Irrigation
    
      Applications
      - Farm irrigation
      - Flood drainage
      - Domestic water transfer
      - Construction dewatering
      - Agricultural operations
      - Tank filling
      - Emergency pumping
      - Industrial water supply
      - Pond drainage
      - General water movement operations
    
      Accessories
      - SUMEC Water Pump
      - Hose Connectors
      - Hose Clamps
      - Filter Strainer
      - User Manual
      `,
    
         features: `
      - Powerful 4-stroke petrol engine
      - High water discharge performance
      - Durable heavy-duty pump structure
      - Portable compact design
      - Strong suction capability
      - Reliable recoil starting system
      - Suitable for irrigation and drainage
      - Easy operation and maintenance
      - Industrial and agricultural application support
      - Ideal for emergency water transfer operations
      `
       },
    
       {
      id: 21010,
      name: 'TOTAL TWP13706 Peripheral Water Pump',
      category: 'pressure-pumps',
      group: 'pumping machines',
      parentCategory: 'water-pumps',
      brand: 'TOTAL',
      price: 80000,
         showSimilar: true,
      images: [
        'assets/img/pressure and water pumps/total Water pump-twp13706-2.jpg',
        'assets/img/pressure and water pumps/total Water pump-twp13706.jpg'
      ],
    
      inStock: true,
    
      description: 'The TOTAL TWP13706 Peripheral Water Pump is a compact and efficient electric water pump designed for domestic water supply, pressure boosting, garden irrigation, water transfer, and light commercial applications. Powered by a reliable copper-wound motor, it delivers stable water pressure and dependable performance for everyday pumping needs.\n\nIts durable cast iron pump body and corrosion-resistant components ensure long service life, while the compact design allows easy installation in homes, farms, workshops, and small businesses.',
    
      specification: `
    Product Type: Peripheral Water Pump
    Model: TWP13706
    Brand: TOTAL
    Rated Power: 370W (0.5HP)
    Voltage: 220-240V
    Frequency: 50Hz
    Motor Type: Copper Winding Motor
    Maximum Head: 35m
    Maximum Flow Rate: 35L/min
    Maximum Suction Depth: 8m
    Inlet Diameter: 1 Inch
    Outlet Diameter: 1 Inch
    Pump Body Material: Cast Iron
    Impeller Material: Brass
    Protection Class: IPX4
    Application: Clean Water Pumping
      `,
    
      features: `
    370W high-efficiency motor
    Maximum head of 35 meters
    Flow rate up to 35L/min
    Copper winding motor
    Heavy-duty cast iron pump body
    Brass impeller construction
    Low noise operation
    Energy-efficient performance
    Compact and lightweight design
    Easy installation and maintenance
    Suitable for domestic water supply
    Long service life
      `
    },
    
    {
      id: 21011,
      name: 'TOTAL TWP53701 4" Deep Well Submersible Pump',
      category: 'submersible-pumps',
      group: 'pumping machines',
      brand: 'TOTAL',
      showSimilar: true,
      price: 280000,
      discountPrice: 250000,
      model: 'TWP53701',
      power: '370W (0.5HP)',
      flowRate: '35L/min',
      inlet: '1 Inch',
      images: [
        
        'assets/img/pressure and water pumps/TOTAL TWP53701 4inch Deep Well Sub Pump-2.webp',
        'assets/img/pressure and water pumps/TOTAL TWP53701 4inch Deep Well Sub Pump.jpeg',
        'assets/img/pressure and water pumps/TOTAL TWP53701 4inch Deep Well Sub Pump-3.jpg'
      ],
    
      inStock: true,
    
      description: 'The TOTAL TWP53701 4-inch deep well submersible pump is designed for pumping clean water from boreholes, deep wells, reservoirs, and underground water sources. Featuring a corrosion-resistant stainless steel body and a high-efficiency copper motor, it delivers dependable performance for domestic, agricultural, commercial, and industrial water supply applications. Its slim 4-inch diameter allows easy installation in standard boreholes while the multistage impeller system provides strong water pressure and efficient flow.',
    
      specification: `
    Product Type: Deep Well Submersible Pump
    Brand: TOTAL
    Model: TWP53701
    Pump Diameter: 4 Inch
    Rated Power: 370W (0.5HP)
    Voltage: 220-240V
    Frequency: 50Hz
    Maximum Head: 55m
    Maximum Flow Rate: 35L/min
    Outlet Size: 1 Inch
    Motor Type: Copper Winding Motor
    Body Material: Stainless Steel
    Impeller Type: Multistage
    Protection Class: IP68
    Insulation Class: Class B
    Water Type: Clean Water
    
    Accessories Included:
    1 × Deep Well Submersible Pump
    1 × Control Box
    1 × User Manual
      `,
    
      features: `
    4-inch slim borehole design
    370W high-performance motor
    Copper winding construction
    Maximum head of 55m
    Flow rate up to 35L/min
    Stainless steel pump body
    Multistage impeller system
    Corrosion-resistant materials
    Energy-efficient operation
    Suitable for deep boreholes and wells
    Reliable continuous-duty performance
    Easy installation and maintenance
      `
    },
    
    
    {
      id: 21012,
      name: 'TOTAL TWP55501 4" Deep Well Submersible Pump',
      category: 'submersible-pumps',
      parentCategory: 'water-pumps',
      childCategory: 'submersible-pumps',
      group: 'pumping machines',
      showSimilar: true,
      brand: 'TOTAL',
      model: 'TWP55501',
      price: 295000,
      discountPrice: 275000,
    
      power: '550W (0.75HP)',
      flowRate: '6.0m³/h',
      inlet: '1-1/4 Inch',
    
    
      images: [
        'assets/img/pressure and water pumps/TOTAL TWP55501 4inch Deep Well Sub Pump.jpeg',
        'assets/img/pressure and water pumps/TOTAL TWP53701 4inch Deep Well Sub Pump-3.jpg'
      ],
    
      inStock: true,
      description: 'The TOTAL TWP55501 4-inch Deep Well Submersible Pump is engineered for pumping clean water from boreholes, deep wells, reservoirs, and underground water sources. Equipped with a powerful 550W copper-winding motor and an 8-stage impeller system, it delivers excellent water pressure and flow performance. Its stainless-steel construction ensures durability, corrosion resistance, and reliable long-term operation in residential, agricultural, commercial, and industrial water supply systems.' ,
    
      specification: `
    Product Type: Deep Well Submersible Pump
    Brand: TOTAL
    Model: TWP55501
    Pump Diameter: 4 Inch
    Rated Power: 550W (0.75HP)
    Voltage: 220-240V
    Frequency: 50Hz
    Maximum Head: 64m
    Maximum Flow Rate: 6.0m³/h
    Outlet Size: 1-1/4 Inch
    Impeller Type: 8 Stage
    Motor Type: Copper Winding Motor
    Pump Body Material: Stainless Steel
    Cable Length: 20m
    Water Type: Clean Water
    Application: Boreholes and Deep Wells
    
    Accessories Included:
    1 × Deep Well Submersible Pump
    1 × 20m Power Cable
    1 × User Manual
    
    Note:
    Control Box Included
      `,
    
      features: `
    550W (0.75HP) high-performance motor
    Maximum head of 64 meters
    Flow rate up to 6.0m³/h
    4-inch borehole compatible design
    8-stage multistage impeller system
    Copper winding motor
    Stainless steel pump body
    Corrosion-resistant construction
    Suitable for deep well and borehole installations
    Energy-efficient operation
    Reliable continuous-duty performance
    Ideal for domestic and agricultural water supply
      `
    },
    
    {
      id: 21013,
      name: 'TOTAL TWP57501 4" Deep Well Submersible Pump',
      category: 'submersible-pumps',
      parentCategory: 'water-pumps',
      childCategory: 'submersible-pumps',
      group: 'pumping machines',
      showSimilar: true,
      brand: 'TOTAL',
      model: 'TWP57501',
    
      price: 395000,
      discountPrice: 375000,
    
      power: '750W (1.0HP)',
      flowRate: '6.0m³/h',
      inlet: '1-1/4 Inch',
      capacity: 'Deep Well Water Pump',
    
      images: [
        'assets/img/pressure and water pumps/TOTAL TWP57501-1hp Well Sub Pump.webp',
        'assets/img/pressure and water pumps/TOTAL TWP57501-1hp Well Sub Pump-2.png'
      ],
    
      inStock: true,
    
      description: 'The TOTAL TWP57501 4-inch Deep Well Submersible Pump is designed for extracting clean water from deep boreholes, wells, reservoirs, and underground water sources. Powered by a durable 750W copper-winding motor and equipped with a 10-stage impeller system, it delivers high-pressure water output and reliable performance for domestic, agricultural, commercial, and industrial applications. Its stainless-steel construction ensures excellent corrosion resistance and long service life in demanding environments.' ,
    
      specification: `
    Product Type: Deep Well Submersible Pump
    Brand: TOTAL
    Model: TWP57501
    Pump Diameter: 4 Inch
    Rated Power: 750W (1.0HP)
    Voltage: 220-240V
    Frequency: 50Hz
    Maximum Head: 82m
    Maximum Flow Rate: 6.0m³/h
    Outlet Size: 1-1/4 Inch
    Impeller Type: 10 Stage
    Motor Type: Copper Winding Motor
    Pump Body Material: Stainless Steel
    Cable Length: 20m
    Water Type: Clean Water
    Application: Deep Wells and Boreholes
    
    Accessories Included:
    1 × Deep Well Submersible Pump
    1 × 20m Power Cable
    1 × User Manual
    
    Note:
    Control Included
      `,
    
      features: `
    750W (1.0HP) high-performance motor
    Maximum head of 82 meters
    Flow rate up to 6.0m³/h
    10-stage impeller system
    4-inch borehole compatible design
    Copper winding motor
    Stainless steel pump body
    Corrosion-resistant construction
    Suitable for deep well installations
    Energy-efficient operation
    Reliable continuous-duty performance
    Ideal for residential, agricultural, and commercial water supply
      `
    },
    
    {
      id: 21014,
      name: 'TOTAL TWP511001 4" Deep Well Submersible Pump',
      category: 'submersible-pumps',
      parentCategory: 'water-pumps',
      childCategory: 'submersible-pumps',
      group: 'pumping machines',
    
      brand: 'TOTAL',
      model: 'TWP511001',
      showSimilar: true,
      price: 300000,
      discountPrice: 290000,
      power: '1100W (1.5HP)',
      flowRate: '6.0m³/h',
      inlet: '1-1/4 Inch',
    
    
      images: [
        'assets/img/pressure and water pumps/TOTAL TWP511001 Deep Well Pump 1.5hp.webp',
        'assets/img/pressure and water pumps/TOTAL TWP53701 4inch Deep Well Sub Pump-3.jpg'
      ],
    
      inStock: true,
    
      description: 'The TOTAL TWP511001 4-inch Deep Well Submersible Pump is a high-performance borehole pump designed for extracting clean water from deep wells, boreholes, reservoirs, and underground water systems. Powered by a durable 1100W (1.5HP) copper-winding motor and equipped with a 14-stage impeller system, it delivers exceptional pressure and reliable water flow for residential, agricultural, commercial, and industrial applications. Its stainless-steel construction ensures long-lasting durability and corrosion resistance in demanding environments.',
    
      specification: `
    Product Type: Deep Well Submersible Pump
    Brand: TOTAL
    Model: TWP511001
    Pump Diameter: 4 Inch
    Rated Power: 1100W (1.5HP)
    Voltage: 220-240V
    Frequency: 50Hz
    Maximum Head: 112m
    Maximum Flow Rate: 6.0m³/h
    Outlet Size: 1-1/4 Inch
    Impeller Type: 14 Stage
    Motor Type: Copper Winding Motor
    Pump Body Material: Stainless Steel
    Cable Length: 20m
    Water Type: Clean Water
    Application: Deep Wells and Boreholes
    Protection Class: IP68
    
    Accessories Included:
    1 × Deep Well Submersible Pump
    1 × 20m Power Cable
    1 × User Manual
    
    Note:
    Control Box Included
      `,
    
      features: `
    1100W (1.5HP) powerful motor
    Maximum head of 112 meters
    Flow rate up to 6.0m³/h
    14-stage impeller system
    4-inch borehole compatible design
    Copper winding motor
    Stainless steel pump body
    Corrosion-resistant construction
    Suitable for deep boreholes and wells
    Energy-efficient operation
    Reliable continuous-duty performance
    Ideal for residential, agricultural, and industrial water supply
      `
    },
    
    
    {
      id: 21015,
      name: 'TOTAL TWP515001 4" Deep Well Submersible Pump',
      category: 'submersible-pumps',
      parentCategory: 'water-pumps',
      childCategory: 'submersible-pumps',
      group: 'pumping machines',
    
      brand: 'TOTAL',
      model: 'TWP515001',
    
      price: 320000,
      discountPrice: 300000,
    
      power: '1500W (2.0HP)',
      flowRate: '6.0m³/h',
      inlet: '1-1/4 Inch',
      capacity: 'Deep Well Water Pump',
    
      images: [
        'assets/img/pressure and water pumps/total twp515001 deep well sub pump-2hp.webp',
        'assets/img/pressure and water pumps/total twp515001 deep well sub pump-2hp-2.jpg'
         
      ],
    
      inStock: true,
    
      description: 'The TOTAL TWP515001 4-inch Deep Well Submersible Pump is a heavy-duty borehole pump designed for lifting clean water from deep wells, boreholes, reservoirs, and underground water sources. Equipped with a powerful 1500W (2HP) copper-winding motor and a 17-stage impeller system, it delivers exceptional water pressure and reliable flow performance. Its stainless-steel construction provides excellent corrosion resistance, making it suitable for residential, agricultural, commercial, and industrial water supply applications.' ,
    
      specification: `
    Product Type: Deep Well Submersible Pump
    Brand: TOTAL
    Model: TWP515001
    Pump Diameter: 4 Inch
    Rated Power: 1500W (2.0HP)
    Voltage: 220-240V
    Frequency: 50Hz
    Maximum Head: 135m
    Maximum Flow Rate: 6.0m³/h
    Outlet Size: 1-1/4 Inch
    Impeller Type: 17 Stage
    Motor Type: Copper Winding Motor
    Pump Body Material: Stainless Steel
    Cable Length: 20m
    Protection Class: IP68
    Water Type: Clean Water
    Application: Boreholes and Deep Wells
    
    Accessories Included:
    1 × Deep Well Submersible Pump
    1 × 20m Power Cable
    1 × User Manual
    
    Note:
    Control Box Included
      `,
    
      features: `
    1500W (2HP) high-performance motor
    Maximum head of 135 meters
    Flow rate up to 6.0m³/h
    17-stage impeller system
    4-inch borehole compatible design
    Copper winding motor
    Stainless steel pump body
    Corrosion-resistant construction
    Suitable for very deep boreholes
    Energy-efficient operation
    Reliable continuous-duty performance
    Ideal for residential, agricultural, commercial and industrial water supply
      `
    },
    
    {
      id: 21016,
      name: 'VALUE Two Stage Vacuum Pump',
      category: 'vacuum-pumps',
      group: 'pumping machines',
      brand: 'VALUE',
    
      price: 250000,
    
      variations: [
        {
          model: 'VE215N',
          power: '1/4 HP',
          size: '1.5 CFM',
          description: 'Two-stage vacuum pump suitable for domestic air conditioners, refrigeration systems, and light HVAC servicing requiring deeper vacuum performance.',
          inStock: true,
          price: 180000
        },
        {
          model: 'VE225N',
          power: '1/3 HP',
          size: '2.5 CFM',
          description: 'Designed for residential air conditioning and refrigeration maintenance with improved moisture removal and vacuum depth.',
          inStock: true,
          price: 630000
        },
        {
          model: 'VE235N',
          power: '1/2 HP',
          size: '3.5 CFM',
          description: 'Professional-grade two-stage vacuum pump for commercial HVAC systems, refrigeration units, and cold rooms.',
          inStock: true,
          price: 330000
        },
        {
          model: 'VE245N',
          power: '3/4 HP',
          size: '4.5 CFM',
          description: 'High-performance pump suitable for commercial refrigeration systems, heat pumps, and medium-sized HVAC installations.',
          inStock: true,
          price: 350000
        },
        {
          model: 'VE260N',
          power: '1 HP',
          size: '6.0 CFM',
          description: 'Industrial-grade two-stage vacuum pump designed for large HVAC systems, refrigeration equipment, cold rooms, and professional service applications.',
          inStock: true,
          price: 470000
        }
      ],
    
      images: [
        'assets/img/vacuum pump/stage 2 value vacuum pump VE235 1by2hp.jpg',
        'assets/img/vacuum pump/stage 2 value vacuum pump VE215N 1by4.jpeg',
        'assets/img/vacuum pump/stage 2 value vacuum pump VE260 1hp-2.jpg',
        'assets/img/vacuum pump/stage 2 value vacuum pump VE260 1hp-2.jpg',
        'assets/img/vacuum pump/stage 2 value vacuum pump VE225N 1by3.jpg'
      ],
    
      inStock: true,
    
      description: `The VALUE Two Stage Vacuum Pump is a professional HVAC and refrigeration service tool designed for achieving deeper vacuum levels and faster evacuation of air and moisture from sealed systems. Featuring advanced two-stage rotary vane technology, these pumps provide superior performance compared to single-stage models and are ideal for residential, commercial, and industrial refrigeration applications.`,
    
      specification: `
    - Product Name: VALUE Two Stage Vacuum Pump
    - Brand: VALUE
    - Pump Type: Two Stage Rotary Vane Vacuum Pump
    - Power Supply: 220-240V~50/60Hz
    - Motor Type: Oil Lubricated
    - Cooling System: Air Cooled
    - Housing Material: Aluminum Alloy
    - Application: HVAC and Refrigeration Service
    - Handle Type: Portable Carry Handle
    
    Available Models:
    - VE215N – 1.5 CFM
    - VE225N – 2.5 CFM
    - VE235N – 3.5 CFM
    - VE245N – 4.5 CFM
    - VE260N – 6.0 CFM
    
    Accessories Included:
    - 1 x VALUE Two Stage Vacuum Pump
    - 1 x Vacuum Pump Oil Bottle
    - 1 x User Manual
    - 1 x Carrying Carton
      `,
    
      features: `
    - Advanced two-stage rotary vane technology
    - Achieves deeper vacuum levels than single-stage pumps
    - Faster air and moisture evacuation
    - Durable aluminum alloy construction
    - Oil-lubricated system for long service life
    - Air-cooled motor design
    - Low vibration and low noise operation
    - Built-in oil sight glass
    - Easy oil filling and draining
    - Portable and lightweight design
    - Suitable for HVAC and refrigeration servicing
    - Ideal for cold rooms, heat pumps, and commercial systems
    - Reliable performance for professional technicians
    - Corrosion-resistant housing
    - Available in multiple capacities and power ratings
      `
    },
    
    {
      id: 21017,
      name: 'DSY-25 Electric Hydraulic Pressure Test Pump 220V',
       category: 'pressure-pumps',
      group: 'pumping machines',
      brand: 'DSY',
    
      price: 360000,
      inStock: true,
    
      model: 'DSY-25',
      power: '0.15kW',
    
      images: [
        'assets/img/vacuum pump/Electric Pressure Test Pump Testing Pump DSY-25 220V.webp',
        'assets/img/vacuum pump/Electric Pressure Test Pump Testing Pump DSY-25 220V-2.webp',
        'assets/img/vacuum pump/Electric Pressure Test Pump Testing Pump DSY-25 220V-3.webp',
        'assets/img/vacuum pump/Electric Pressure Test Pump Testing Pump DSY-25 220V-4.webp',
         'assets/img/vacuum pump/Electric Pressure Test Pump Testing Pump DSY-25 220V-5.webp',
         'assets/img/vacuum pump/Electric Pressure Test Pump Testing Pump DSY-25 220V-6.webp',
         'assets/img/vacuum pump/Electric Pressure Test Pump Testing Pump DSY-25 220V-7.webp'
      ],
    
      description: 'The DSY-25 Electric Hydraulic Pressure Test Pump is designed for pressure testing pipelines, boilers, pressure vessels, water supply systems, and industrial equipment. Powered by a 0.15kW electric motor, it provides stable hydraulic pressure for leak detection and system integrity testing.',
    
      specification: `
    Model: DSY-25
    Type: Electric Hydraulic Pressure Test Pump
    Power Supply: 220V / 50Hz
    Motor Power: 0.15kW
    Maximum Test Pressure: 25 Bar
    Pump Type: Hydraulic Piston Pump
    Flow Rate: 6 L/min
    Pressure Adjustment: Yes
    Pressure Gauge: Included
    Application: Pipeline, Boiler, Pressure Vessel and Water System Testing
    Construction: Heavy-Duty Steel Frame
    Operation: Electric
    
    Accessories:
    Pressure Gauge
    Suction Hose
    High-Pressure Delivery Hose
    Power Cable
    User Manual
    `,
    
      features: `
    • Electric motor driven operation
    • Stable hydraulic pressure output
    • Suitable for leak detection and pressure testing
    • Adjustable test pressure
    • Compact and portable design
    • Durable steel construction
    • Easy-to-read pressure gauge
    • Suitable for industrial and plumbing applications
    • Low power consumption
    • Reliable piston pump mechanism
    `,
    
    
      flowRate: '6 L/min',
      pressure: '25 Bar',
    
      showSimilar: true
    },
    
    {
      id: 21018,
      name: 'Bolton Water Pump Diesel Engine 10HP',
      category: 'wtater-pumps',
      group: 'pumping machines',
      brand: 'Bolton',
      price: 690000, // Update with your selling price
      discountPrice: 657000,
    
      images: [
        'assets/img/products/bolton-water-pump-10hp-1.jpg',
        'assets/img/products/bolton-water-pump-10hp-2.jpg',
        'assets/img/products/bolton-water-pump-10hp-3.jpg'
      ],
    
      description: `
    The Bolton 10HP Diesel Water Pump is a heavy-duty, fuel-efficient water transfer pump designed for agricultural irrigation, construction sites, mining operations, flood control, fish ponds, and industrial water transfer. Built with a powerful diesel engine, it delivers reliable performance even in demanding environments.
    `,
    
      specification: `
    Brand: Bolton
    Model: HDP40EL
    Engine Type: Single Cylinder, 4-Stroke Diesel Engine
    Engine Power: 10 HP
    Cooling System: Air Cooled
    Fuel Type: Diesel
    Starting System: Electric Start
    Inlet Diameter: 4 Inches (100 mm)
    Outlet Diameter: 4 Inches (100 mm)
    Maximum Flow Rate: 96 m³/h
    Maximum Head: 31 m
    Maximum Suction Lift: 8 m
    Fuel Tank Capacity: 5.5 L
    Continuous Running Time: Approximately 8 Hours
    Frame Type: Heavy-Duty Steel Frame
    Application: Clean Water Transfer
    Weight: Approximately 49 kg
    
    Accessories Included:
    • Inlet Hose Coupling
    • Outlet Hose Coupling
    • Hose Clamps
    • Rubber Sealing Gaskets
    • Suction Strainer
    • Tool Kit
    • User Manual
    `,
    
      features: `
    • Powerful 10HP diesel engine
    • Electric start for easy operation
    • Heavy-duty steel protective frame
    • Low fuel consumption
    • High water delivery capacity
    • Strong suction performance
    • Durable cast aluminium pump housing
    • Corrosion-resistant components
    • Ideal for farms, construction and industrial use
    • Easy maintenance
    `,
    
    
      model: 'HDP40EL',
      power: '10 HP',
      inlet: '4 Inches',
      capacity: '96 m³/h',
      flowRate: '96 m³/h',
      pressure: '31 m Head',
    
    
      inStock: true,
      showSimilar: true
    },
    
    {
      id: 21019,
      name: 'DC-60A Electric Pressure Testing Pump',
      category: 'pressure-pumps',
      group: 'pumping machines', 
      brand: 'Generic',
      showSimilar: true,
    
      price: 800000,
      discountPrice: 770000,
    
      images: [
        'assets/img/testing buckets/DC-60A Electric Pressure Test Pump.webp',
        'assets/img/testing buckets/DC-60A Electric Pressure Testing Pump-2.jpeg',
        'assets/img/testing buckets/DC-60A Electric Pressure Testing Pump-3.jpg',
        'assets/img/testing buckets/DC-60A Electric Pressure Testing Pump-4.webp',
        'assets/img/testing buckets/DC-60A Electric Pressure Testing Pump-5.webp'
      ],
    
      inStock: true,
    
      description: 'The DC-60A Electric Pressure Testing Pump is a professional hydrostatic testing unit designed for pressure testing pipelines, plumbing installations, boilers, pressure vessels and water supply systems. Equipped with a high-performance plunger pump, integrated pressure gauge and adjustable regulator, it provides stable and accurate pressure generation for leak detection and system integrity verification.',
    
      specification: `
      - Product Name: DC-60A Electric Pressure Testing Pump
      - Model: DC-60A
      - Type: Hydrostatic Pressure Test Pump
      - Maximum Pressure: 60 Bar
      - Pressure Range: 0–6.0 MPa
      - Flow Rate: 10 L/min
      - Rated Voltage: 220V
      - Frequency: 50Hz
      - Motor Power: 1800W
      - Pump Type: Triplex Plunger Pump
      - Pressure Regulation: Adjustable
      - Pressure Gauge: Included
      - Reservoir Tank: Integrated
      - Application: Pipeline and Plumbing Testing
      - Usage: Industrial and Commercial
    
      Accessories Included
      - Pressure Gauge
      - Pressure Regulator
      - Electric Motor
      - Plunger Pump Assembly
      - Water Reservoir Tank
      - Hose Connection Fittings
      `,
    
      features: `
      - Maximum pressure up to 60 bar
      - 10L/min flow capacity
      - Powerful 1800W motor
      - Adjustable pressure control
      - Built-in pressure gauge
      - Durable brass pump head
      - Compact portable design
      - Suitable for hydrostatic testing
      - Ideal for pipelines and plumbing systems
      - Heavy-duty industrial construction
      `
    },
    
    {
      id: 21020,
      name: '12V/24V DC Electric Diesel Fuel Transfer Pump',
      category: 'fuel-transfer-pumps',
         group: 'pumping machines',
      brand: 'Generic',
      price: 200000,
      showSimilar: true,
      images: [
        'assets/img/pumping machines/12V 24V DC Electric Diesel Fuel Transfer Pump.jpg',
        'assets/img/pumping machines/12V 24V DC Electric Diesel Fuel Transfer Pump-2.jpg',
        'assets/img/pumping machines/12V 24V DC Electric Diesel Fuel Transfer Pump-3.jpg',
        'assets/img/pumping machines/12V 24V DC Electric Diesel Fuel Transfer Pump-4.jpg',
        'assets/img/pumping machines/12V 24V DC Electric Diesel Fuel Transfer Pump-5.jpg',
        'assets/img/pumping machines/12V 24V DC Electric Diesel Fuel Transfer Pump-6.jpg'
      ],
    
      videos: [],
    
      inStock: true,
      jumiaLink: '',
      kongaLink: '',
    
      description: `The 12V/24V DC Electric Diesel Fuel Transfer Pump is a portable self-priming pump designed for fast and efficient transfer of diesel fuel, kerosene, biodiesel, and light oils. Powered directly from a 12V or 24V battery using heavy-duty battery clamps, it is ideal for refueling tractors, trucks, construction equipment, generators, agricultural machinery, boats, and fuel storage tanks. Its compact design, durable cast iron body, and high flow rate make it a reliable solution for mobile and industrial fuel transfer applications.`,
    
      specification: `
    - Product Name: DC Electric Diesel Fuel Transfer Pump
    - Pump Type: Self-Priming Rotary Vane Pump
    - Brand: Generic
    - Voltage: 12V DC / 24V DC (Available in Separate Models)
    - Power: 175 – 300 W
    - Flow Rate: Up to 40 – 60 L/min
    - Maximum Suction Lift: 3 – 5 m
    - Maximum Delivery Head: Up to 10 m
    - Motor Type: DC Permanent Magnet Motor
    - Housing Material: Cast Iron
    - Duty Cycle: Continuous Intermittent Operation
    - Inlet/Outlet Size: 1 inch (25 mm)
    - Power Connection: Battery Clamps
    - Fuel Compatibility: Diesel, Kerosene, Biodiesel & Light Oils
    - Weight: Approx. 4 – 6 kg
      `,
    
      features: `
    - Compact and portable fuel transfer pump
    - Self-priming rotary vane design
    - High flow rate for quick fuel transfer
    - Heavy-duty cast iron construction
    - Connects directly to 12V or 24V batteries
    - Supplied with battery clamps for easy installation
    - Suitable for diesel, kerosene, biodiesel, and light oils
    - Low noise and smooth operation
    - Easy to carry with integrated handle
    - Ideal for farms, construction sites, workshops, boats, generators, trucks, and fuel storage tanks
      `
    },
    
    {
      id: 21021,
      name: '3 Inch Electric Motor Driven Fuel Transfer Pump with Mechanical Flow Meter',
      category: 'fuel-transfer-pumps',
         group: 'pumping machines',
      showSimilar: true,
      brand: 'LC',
      price: 5000000,
      discountPrice: 4800000,
    
      images: [
        'assets/img/pumping machines/3 Inch Electric Moto Fuel Transfer Pump with Mechanical Flow Meter.png',
        'assets/img/pumping machines/3 Inch Electric Moto Fuel Transfer Pump with Mechanical Flow Meter.png'
      ],
    
      videos: [],
    
      inStock: true,
      jumiaLink: '',
      kongaLink: '',
    
      model: '3 Inch Electric Fuel Transfer Pump Set',
      inlet: '3 Inch',
      capacity: '300 - 1000 L/min',
      flowRate: '300 - 1000 L/min',
      pressure: '0.18 - 0.35 MPa',
      power: '7.5HP (5.5kW)',
    
      description: `The 3 Inch Electric Motor Driven Fuel Transfer Pump with Mechanical Flow Meter is a complete industrial fuel dispensing system designed for high-volume transfer and accurate measurement of diesel, kerosene, and other light petroleum products. The unit integrates a heavy-duty three-phase electric motor, rotary positive displacement fuel pump, precision mechanical flow meter, air eliminator, and flexible coupling on a rugged steel base frame. Built for continuous industrial operation, it delivers reliable performance, high flow capacity, and accurate fuel metering, making it ideal for fuel depots, tank farms, filling stations, construction sites, mining operations, marine facilities, power plants, and industrial fuel storage systems.`,
    
      specification: `
    - Product Name: Electric Motor Driven Fuel Transfer Pump with Mechanical Flow Meter
    - Model: 3 Inch
    - Brand: LC
    - Pump Type: Rotary Positive Displacement Fuel Pump
    - Drive Type: Electric Motor Driven
    - Motor Type: Three-Phase Induction Motor
    - Motor Power: 7.5 HP (5.5 kW)
    - Voltage: 380V - 415V
    - Frequency: 50Hz
    - Phase: Three Phase
    - Inlet Size: 3 Inch
    - Outlet Size: 3 Inch
    - Flow Meter Type: Mechanical Positive Displacement Meter
    - Display Type: Mechanical Litre Counter
    - Flow Rate: 300 - 1000 L/min
    - Accuracy: ±0.5% to ±1%
    - Maximum Working Pressure: 0.35 MPa
    - Pump Material: Cast Iron
    - Meter Housing: Aluminium Alloy
    - Coupling: Flexible Shaft Coupling
    - Coupling Guard: Heavy-Duty Steel
    - Air Eliminator: Integrated
    - Base Frame: Heavy-Duty Steel
    - Fuel Compatibility: Diesel, Kerosene, Light Fuel Oil
    - Not Suitable For: Petrol (Gasoline), Alcohol, Corrosive Chemicals
    - Installation: Fixed Industrial Base Mount
    - Cooling Method: Air-Cooled Motor
    - Duty Cycle: Continuous Industrial Operation
    - Application: Fuel Transfer, Fuel Dispensing, Bulk Fuel Delivery
    
      accessories: 
    - Three-Phase Electric Motor
    - 3 Inch Rotary Fuel Transfer Pump
    - Mechanical Flow Meter
    - Air Eliminator
    - Flexible Coupling
    - Coupling Guard
    - Steel Base Frame
    - Installation Hardware
    - User Manual
      `,
    
      features: `
    - Complete industrial fuel transfer system
    - Heavy-duty 3-inch rotary fuel transfer pump
    - High-performance three-phase electric motor
    - Precision mechanical flow meter for accurate litre measurement
    - Integrated air eliminator improves metering accuracy
    - High fuel transfer capacity for bulk operations
    - Durable cast iron pump construction
    - Heavy-duty steel base frame for stability
    - Flexible coupling ensures smooth power transmission
    - Easy-to-read mechanical litre counter
    - Low maintenance and reliable continuous-duty operation
    - Suitable for diesel storage facilities and fuel dispensing stations
    - Ideal for construction companies, factories, farms, marine applications, mining sites, and fuel depots
    - Corrosion-resistant industrial finish for extended service life
      `,
    
    
      
    },
    
    
    
    {
      id: 21023,
      name: '2 Inch Electric Motor Driven Fuel Transfer Pump with Mechanical Flow Meter',
       category: 'fuel-transfer-pumps',
         group: 'pumping machines',
      showSimilar: true,
      brand: 'Generic',
      price: 4000000,
      discountPrice: 3800000,
    
      images: [
        'assets/img/pumping machines/2 Inch Electric Motor Driven Fuel Transfer Pump with Mechanical Flow Meter.png'
      ],
    
      description: `
    The 2 Inch Electric Motor Driven Fuel Transfer Pump with Mechanical Flow Meter is a heavy-duty fuel dispensing system designed for the efficient transfer of diesel, kerosene, light fuel oil, and other non-corrosive petroleum products. Powered by a high-performance electric motor and equipped with a positive displacement fuel pump, this unit ensures smooth, continuous, and accurate fuel delivery.
    The integrated mechanical flow meter provides reliable volume measurement without requiring electricity, making it suitable for fuel stations, industrial facilities, construction sites, agricultural operations, mining, marine applications, and fleet fueling systems. Built on a rigid steel base, the complete assembly offers excellent stability, durability, and long service life even in demanding environments.
    `,
    
      specification: `
    Model: Electric Motor Driven Fuel Transfer Pump
    Pump Type: Positive Displacement Fuel Transfer Pump
    Drive Type: Electric Motor
    Motor Type: TEFC Industrial Electric Motor
    Inlet Size: 2 Inches
    Outlet Size: 2 Inches
    Flow Meter: Mechanical Register Flow Meter
    Display Type: Mechanical Counter
    Measuring Unit: Litres
    Fuel Compatibility: Diesel, Kerosene, Light Fuel Oil
    Not Suitable For: Petrol (Gasoline), Water, Corrosive Chemicals
    Flow Rate: Up to 200–300 L/min (depending on motor configuration)
    Maximum Head: Up to 20 metres
    Power Supply: 220V Single Phase or 380V Three Phase (varies by model)
    Motor Power: 2.2–5.5kW
    Frequency: 50Hz
    Mounting: Heavy-duty Steel Base Frame
    Body Material: Cast Iron
    Meter Material: Aluminium Alloy
    Pump Housing: Cast Iron
    Shaft: Hardened Steel
    Seal Type: Mechanical Seal
    Rotation: Clockwise
    Installation: Stationary
    Application: Industrial Fuel Dispensing
    
      accessories: 
    • Mechanical Flow Meter
    • Electric Motor
    • Positive Displacement Fuel Pump
    • Steel Base Frame
    • Coupling Assembly
    • Coupling Guard
    • Installation Manual
    
    `,
    
      features: `
    • 2-inch high-capacity fuel transfer pump
    • Heavy-duty industrial electric motor
    • Built-in mechanical flow meter for accurate fuel measurement
    • Positive displacement pump for stable fuel delivery
    • Durable cast iron pump construction
    • Corrosion-resistant mechanical components
    • Heavy-duty steel mounting frame
    • Suitable for continuous industrial operation
    • Low maintenance design
    • High pumping efficiency
    • Accurate litre counting
    • Easy installation and servicing
    • Stable and vibration-resistant operation
    • Ideal for diesel storage tanks
    • Suitable for fleet fueling operations
    • Perfect for farms, factories, workshops, construction sites, and fuel depots
    `,
    
    
      inlet: '2 Inches',
      flowRate: 'Up to 200–300 L/min',
      pressure: 'Up to 3 Bar',
      power: '2.2–5.5kW',
    
      inStock: true
    },
]