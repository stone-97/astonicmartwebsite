import { Product } from '../models/Product';

export const FIRE_AND_TRAFFIC_SAFETY_PRODUCTS: Product[] = [

    // safety starts at 70001
//  ends at 9000

// fire safety
// fire blankets
{
        id: 7001,
        name: '1.2m x 1.8m Fire Blanket',
        category: 'fire-blankets',
        group: 'fire and traffic safety',
        parentCategory: 'fire safety',
        brand: 'Generic',
        price: 12000,
        showSimilar: true,
        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306564/Astonic-Mart/Products/fireblanketsandextinguishers/1.2m_X_1.8m_4ft_X_6ft_Fire_Blanket.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: '1.2m x 1.8m Fire Blanket is a high-quality fire safety tool designed to quickly extinguish small fires by cutting off oxygen supply. Made from durable, heat-resistant fiberglass material, it is ideal for use in homes, kitchens, offices, workshops, laboratories and industrial environments. This fire blanket is especially effective for grease fires, electrical fires and clothing fires, providing a fast and safe emergency response solution without creating a mess like traditional fire extinguishers.',

        specification: `
  - Product Name: Fire Blanket
  - Size: 1.2m x 1.8m
  - Material: Woven fiberglass fabric
  - Temperature Resistance: Up to 550°C
  - Standard: Complies with fire safety standards
  - Packaging: Wall-mounted storage pouch
  - Color: White blanket with red container
  - Reusable: Single-use recommended for safety
  `,

        features: `
  - Quickly smothers fires by cutting off oxygen
  - Made from flame-resistant fiberglass material
  - Ideal for kitchen, home, office and industrial use
  - No maintenance required unlike fire extinguishers
  - Easy to deploy in emergency situations
  - Suitable for grease, electrical and small fire outbreaks
  - Compact and wall-mountable for quick access
  - Safe for wrapping around a person in case of clothing fire
  `
    },


    // fire extinguishers
    {
        id: 7002,
        name: 'AFO Automatic Fire Ball Extinguisher',
        category: 'fire-extinguishers',
        group: 'fire and traffic safety',
        parentCategory: 'fire safety',
        brand: 'AFO',
        price: 25000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306567/Astonic-Mart/Products/fireblanketsandextinguishers/AFO_Automatic_Fire_Ball_Extinguisher2.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
AFO Automatic Fire Ball Extinguisher is a smart and highly effective fire suppression solution designed to provide immediate response to fire outbreaks without the need for human intervention. Unlike traditional fire extinguishers that require training and manual operation, this fire ball automatically activates when it comes into contact with flames, typically within 3 to 5 seconds, dispersing a powerful dry chemical powder that quickly suppresses the fire by cutting off the oxygen supply and interrupting the combustion process.
This innovative device is ideal for both residential and commercial environments, including homes, kitchens, offices, warehouses, generator rooms, fuel storage areas and electrical panels. It can be strategically placed or mounted in high-risk areas to provide 24/7 passive fire protection. In emergency situations, it can also be thrown directly into the fire, making it extremely user-friendly even for individuals with no firefighting experience.
The AFO Fire Ball is lightweight, compact and maintenance-free, with a long shelf life of up to 5 years. Upon activation, it produces a loud alert sound to notify occupants, ensuring quick awareness and response. The extinguishing agent used is non-toxic and environmentally friendly, making it safe for use around people, equipment and sensitive environments.
Overall, the AFO Automatic Fire Ball Extinguisher is a reliable, easy-to-use and cost-effective fire safety device that enhances protection, reduces fire damage risk and provides peace of mind in any setting.
`,

        specification: `
  - Product Name: Automatic Fire Ball Extinguisher
  - Brand: AFO
  - Activation Time: 3 – 5 seconds when in contact with flame
  - Weight: Approx. 1.3 kg
  - Effective Coverage Area: Up to 3 – 5 square meters
  - Extinguishing Agent: Dry chemical powder
  - Sound Level: Loud alert upon activation
  - Shelf Life: Up to 5 years
  - Operation: Automatic (no pin, no training required)
  `,

        features: `
  - Automatic activation when exposed to fire
  - No need for manual operation or training
  - Lightweight and easy to install or place
  - Provides 24/7 fire protection
  - Non-toxic and environmentally friendly extinguishing agent
  - Emits a loud noise to alert occupants during activation
  - Ideal for electrical fires, kitchens, vehicles and storage areas
  - Maintenance-free with long shelf life
  - Can be thrown into fire or mounted for automatic use
  `
    },


    {
        id: 7003,
        name: 'Fire Alarm Smoke Detector',
        category: 'smoke-and-fire-alarms',
        group: 'fire and traffic safety',
        parentCategory: 'fire safety',
        brand: 'Generic',
        price: 8500,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306586/Astonic-Mart/Products/fireblanketsandextinguishers/smoke_alarms.webp'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Fire Alarm Smoke Detector is a reliable safety device designed to detect smoke and alert occupants at the early stage of a fire outbreak. It provides fast and effective warning through a loud audible alarm, helping to prevent property damage and save lives. Ideal for use in homes, offices, shops, warehouses and industrial environments, this smoke detector continuously monitors the air for signs of smoke or fire.
The device is easy to install and operates automatically, offering 24/7 protection without the need for constant supervision. It is especially useful in high-risk areas such as kitchens, electrical rooms and storage spaces. With its compact design and high sensitivity sensor, the fire alarm ensures quick detection and immediate response, giving occupants enough time to evacuate or take action.
This fire alarm is an essential part of any fire safety system, providing peace of mind and enhanced protection against unexpected fire hazards.
`,

        specification: `
  - Product Name: Smoke Detector Fire Alarm
  - Sensor Type: Photoelectric smoke sensor
  - Power Source: 9V battery (or DC power depending on model)
  - Alarm Sound Level: ≥ 85 dB at 3 meters
  - Detection Type: Smoke detection
  - Installation: Ceiling or wall mounted
  - Operating Temperature: -10°C to 50°C
  - Humidity Range: ≤ 95% RH (non-condensing)
  - Indicator: LED light for status and alarm
  `,

        features: `
  - Detects smoke quickly and accurately
  - Loud alarm sound for immediate alert
  - Easy installation and maintenance
  - Compact and lightweight design
  - Suitable for homes, offices and industrial use
  - Provides 24/7 continuous monitoring
  - LED indicator for power and alarm status
  - Low battery warning function
  - Enhances overall fire safety and protection
  `
    },


    {
        id: 7004,
        name: 'Fire Hose Reel Cabinet',
        category: 'fire-hose-cabinet',
        group: 'fire and traffic safety',
        parentCategory: 'fire safety',
        brand: 'Generic',
        price: 95000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306578/Astonic-Mart/Products/fireblanketsandextinguishers/firehosereelcabinet.webp4.webp'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Fire Hose Reel Cabinet is a durable and protective enclosure designed to house fire hose reels and related firefighting equipment. It ensures that fire hoses are safely stored, easily accessible and well-organized for quick deployment during emergency situations. Commonly installed in commercial buildings, factories, warehouses, shopping complexes and public facilities, the cabinet plays a critical role in fire safety systems.
Constructed from high-quality mild steel or stainless steel, the cabinet is built to withstand harsh environments and protect internal components from dust, damage and tampering. It is typically wall-mounted or recessed into walls, with a front glass or metal door that allows quick access in case of fire emergencies.
The fire hose reel cabinet is designed to accommodate standard hose reels, valves and nozzles, ensuring efficient water delivery for fire suppression. Its bright red finish enhances visibility, making it easy to locate during emergencies. This cabinet is an essential component of any firefighting system, providing both protection and readiness.
`,

        specification: `
  - Product Name: Fire Hose Reel Cabinet
  - Material: Mild steel / Stainless steel
  - Mounting Type: Wall-mounted or recessed
  - Door Type: Glass or solid metal door
  - Color: Red (standard fire safety color)
  - Compatibility: Standard fire hose reels and accessories
  - Locking System: Key lock or latch system
  - Finish: Powder-coated for corrosion resistance
  - Usage: Indoor and outdoor (depending on model)
  `,

        features: `
  - Protects fire hose reel and accessories from damage
  - Ensures quick and easy access during emergencies
  - Strong and durable construction for long-term use
  - Corrosion-resistant coating for extended lifespan
  - Bright red color for high visibility
  - Suitable for commercial, industrial and residential buildings
  - Can be wall-mounted or recessed for space efficiency
  - Secure locking system to prevent tampering
  - Essential component of fire protection systems
  `
    },

    {
        id: 7005,
        name: 'Fire Hose Reel',
        category: 'fire-hose',
        group: 'fire and traffic safety',
        parentCategory: 'fire safety',
        brand: 'Generic',
        price: 120000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306579/Astonic-Mart/Products/fireblanketsandextinguishers/firehosereelcabinet.webp5.webp'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Fire Hose Reel is an essential firefighting equipment designed to deliver a continuous and controlled supply of water for extinguishing fires. It consists of a semi-rigid hose wound on a rotating reel, allowing easy handling and quick deployment during emergency situations. Commonly installed in commercial buildings, factories, warehouses and public facilities, the fire hose reel provides an immediate response to fire outbreaks before they escalate.

The hose reel is typically connected to a reliable water source and is equipped with a control valve and nozzle, enabling users to direct water accurately to the fire. Its design ensures smooth unwinding and rewinding of the hose, making it user-friendly even for untrained individuals.

Constructed from high-quality materials, the fire hose reel is durable, corrosion-resistant and built for long-term use. It is mounted on walls or within cabinets for easy accessibility and protection. This equipment plays a critical role in fire safety systems, offering a dependable and effective firefighting solution.
`,

        specification: `
  - Product Name: Fire Hose Reel
  - Hose Length: 20m / 25m / 30m (depending on model)
  - Hose Diameter: 19mm (3/4 inch)
  - Material: Rubber or PVC hose with steel reel
  - Mounting Type: Wall-mounted
  - Nozzle Type: Adjustable spray/jet nozzle
  - Operating Pressure: Standard fire system pressure
  - Color: Red
  - Application: Indoor fire protection systems
  `,

        features: `
  - Provides continuous water supply for firefighting
  - Easy to deploy and operate during emergencies
  - Durable and corrosion-resistant construction
  - Smooth hose winding and unwinding mechanism
  - Adjustable nozzle for controlled water flow
  - Suitable for commercial and industrial environments
  - Can be installed inside cabinets or directly on walls
  - Reliable and effective fire suppression solution
  - Essential component of fire safety systems
  `
    },


    {
        id: 7006,
        name: 'PVC Safety Cone 100cm with Black Base',
        category: 'traffic-cones',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 18000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329953/Astonic-Mart/Products/traffic%20safety/100cm_traffic_cones_with_base.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
PVC Safety Cone 100cm with Black Base is a high-visibility traffic control device designed to enhance safety and manage movement in various environments. It is commonly used on roads, construction sites, parking areas, warehouses and public spaces to warn, guide and restrict access to hazardous or restricted zones.
Made from durable and flexible PVC material, the cone is resistant to impact, weather conditions and fading, ensuring long-lasting performance even in harsh outdoor environments. The heavy black rubber base provides excellent stability, preventing the cone from tipping over due to wind, vehicle movement or minor impacts.
With its bright color and optional reflective bands, the safety cone ensures maximum visibility during both day and night operations. It is lightweight, portable and easy to stack, making it convenient for transportation and storage. This safety cone is an essential tool for traffic management, hazard marking and workplace safety.
`,

        specification: `
  - Product Name: PVC Safety Cone
  - Height: 100 cm
  - Material: Flexible PVC
  - Base: Heavy black rubber base
  - Color: Bright orange (standard)
  - Reflective: Optional reflective collar
  - Weather Resistance: UV and weather resistant
  - Weight: Heavy-duty base for stability
  - Usage: Indoor and outdoor applications
  `,

        features: `
  - High visibility for effective hazard warning
  - Durable and flexible PVC construction
  - Heavy base for improved stability
  - Resistant to weather, impact and fading
  - Lightweight and easy to carry
  - Stackable design for easy storage
  - Suitable for road safety, construction and industrial use
  - Optional reflective bands for night visibility
  - Ideal for traffic control and restricted area marking
  `
    },


    {
        id: 7007,
        name: 'Wet Floor Caution Sign',
        category: 'warning-signs',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 27000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330049/Astonic-Mart/Products/traffic%20safety/wet_floor_caution_sign.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328721/Astonic-Mart/Products/safety%20signs/caution_wet_floor_sign-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328727/Astonic-Mart/Products/safety%20signs/caution_wet_floor_sign-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328727/Astonic-Mart/Products/safety%20signs/caution_wet_floor_sign-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328721/Astonic-Mart/Products/safety%20signs/caution_wet_floor_sign.png'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Wet Floor Caution Sign is a highly visible safety warning tool designed to alert people of slippery surfaces and prevent accidents such as slips and falls. It is commonly used in public places such as offices, shopping malls, hospitals, schools, hotels, warehouses and industrial facilities where floors may become wet due to cleaning, spills or weather conditions.
Made from durable plastic material, the sign is lightweight yet sturdy, allowing it to be easily positioned and moved as needed. Its bright yellow color and bold warning text ensure maximum visibility, while the universal caution symbol helps communicate the message clearly even without reading the text.
The foldable A-frame design allows for easy storage and portability, making it convenient for janitors, cleaners and maintenance staff to deploy quickly. This safety sign is an essential tool for maintaining workplace safety and reducing the risk of accidents in both commercial and residential environments.
`,

        specification: `
  - Product Name: Wet Floor Caution Sign
  - Material: Durable plastic (PP/PE)
  - Design: Foldable A-frame
  - Color: Bright yellow
  - Message: "Caution Wet Floor"
  - Height: Approx. 60 cm (varies by model)
  - Usage: Indoor and outdoor
  - Portability: Lightweight and easy to carry
  `,

        features: `
  - Highly visible warning sign for wet or slippery floors
  - Bright yellow color for maximum attention
  - Foldable design for easy storage and transport
  - Lightweight yet durable construction
  - Clear text and universal caution symbol
  - Helps prevent slips, falls and accidents
  - Suitable for commercial, industrial and residential use
  - Easy to deploy and reposition
  - Essential for workplace and public safety compliance
  `
    },


    {
        id: 7008,
        name: 'Yellow & Black Caution Tape 500m',
        category: 'caution-tapes',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 9000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330045/Astonic-Mart/Products/traffic%20safety/yellow_and_black_caution_tape.webp'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Yellow & Black Caution Tape 500m is a highly visible safety marking tape designed to warn, restrict and control access to hazardous or restricted areas. It is widely used in construction sites, road works, industrial environments, warehouses, events and public spaces to clearly mark off danger zones and guide movement.
Made from durable polyethylene material, the tape is lightweight, flexible and resistant to tearing, making it suitable for both indoor and outdoor use. The bold yellow and black stripe pattern ensures maximum visibility, even from a distance, helping to effectively communicate caution and prevent accidents.
With a long length of 500 meters, this caution tape provides extended coverage, making it cost-effective for large areas or multiple applications. It is easy to install, wrap or tie around cones, poles and barriers, offering a quick and efficient safety solution.
`,

        specification: `
  - Product Name: Caution Tape
  - Length: 500 meters
  - Width: Standard (varies by model)
  - Material: Polyethylene (PE)
  - Color: Yellow and Black
  - Pattern: Diagonal stripes
  - Thickness: Durable and tear-resistant
  - Usage: Indoor and outdoor applications
  `,

        features: `
  - High visibility yellow and black warning design
  - Long 500m roll for extended coverage
  - Lightweight and easy to handle
  - Durable and tear-resistant material
  - Suitable for construction, road safety and industrial use
  - Easy to install and remove
  - Helps restrict access to hazardous areas
  - Cost-effective safety solution for large spaces
  - Ideal for temporary safety marking and crowd control
  `
    },


    {
        id: 7009,
        name: 'PVC Expandable Barrier Mobile Barricade (Water-Filled, Yellow/Black)',
        category: 'road-barriers',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 85000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330013/Astonic-Mart/Products/traffic%20safety/pvc_expandable_barrier.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304167/Astonic-Mart/Products/barriers/pvc_expndable_barrier-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304164/Astonic-Mart/Products/barriers/pvc_expndable_barrier.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304165/Astonic-Mart/Products/barriers/pvc_expndable_barrier-2.jpg'
        ],

        inStock: true,
        jumiaLink: 'https://www.jumia.com.ng/generic-expandable-mobile-barrier-yellow-black-8.2ft-foldable-barricade-419474047.html',
        kongaLink: '',

        description: `
PVC Expandable Barrier Mobile Barricade is a versatile and highly visible traffic control solution designed for crowd management, hazard restriction and site safety. This retractable barrier can be easily expanded or collapsed, allowing flexible coverage of different areas depending on the need. It is commonly used in construction sites, road works, parking areas, warehouses, events and public spaces to block off restricted zones and guide movement.
Constructed from durable, high-quality PVC material, the barrier is lightweight yet strong enough to withstand outdoor conditions. The bright yellow and black color combination ensures maximum visibility, making it effective for both day and night use. The barrier features a water-fillable base that provides added stability, preventing it from being easily moved by wind or minor impact.
Equipped with smooth-rolling wheels, this mobile barricade is easy to transport and reposition, making it ideal for dynamic environments where safety zones frequently change. Its expandable scissor design allows quick deployment and compact storage, making it a practical and efficient safety solution.
`,

        specification: `
  - Product Name: PVC Expandable Barrier / Mobile Barricade
  - Material: High-quality PVC plastic
  - Color: Yellow and Black
  - Design: Expandable / Retractable (scissor design)
  - Base Type: Water-fillable for added stability
  - Mobility: Equipped with wheels for easy movement
  - Length: Expandable (varies depending on extension)
  - Usage: Indoor and outdoor applications
  - Application: Traffic control, crowd control, hazard marking
  `,

        features: `
  - Expandable and retractable for flexible coverage
  - High visibility yellow and black design
  - Durable and weather-resistant PVC construction
  - Water-fillable base for enhanced stability
  - Mobile design with wheels for easy transport
  - Quick setup and compact storage
  - Suitable for traffic control, construction and events
  - Helps restrict access to hazardous or restricted areas
  - Ideal for temporary safety and crowd management
  `
    },

    // convex mirrors
    {
        id: 7010,
        name: 'Convex Safety Mirror 100cm',
        category: 'convex-mirrors',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 150000,
        discountPrice: 135000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329984/Astonic-Mart/Products/traffic%20safety/convex_mirrors-100cm.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329984/Astonic-Mart/Products/traffic%20safety/convex_mirrors-100cm.jpg2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329984/Astonic-Mart/Products/traffic%20safety/convex_mirrors-100cm.jpg-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329984/Astonic-Mart/Products/traffic%20safety/convex_mirrors-100cm.jpg-2.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Convex Safety Mirror 100cm is a wide-angle visibility mirror designed to improve safety and eliminate blind spots in high-risk areas. It is commonly used on roads, driveways, parking lots, warehouses, factories and intersections to provide a clear, expanded field of view, helping to prevent accidents and collisions.
The mirror features a high-quality reflective surface that delivers a clear and distortion-free image, allowing users to monitor approaching vehicles or pedestrians from different angles. Its large 100cm diameter ensures maximum coverage, making it ideal for both indoor and outdoor applications.
Constructed with a durable and weather-resistant housing, the convex mirror is built to withstand harsh environmental conditions such as rain, sunlight and dust. It is easy to install and comes with a mounting bracket for secure positioning on walls, poles or ceilings.
This safety mirror is an essential tool for enhancing visibility, improving traffic management and ensuring safety in both commercial and industrial environments.
`,

        specification: `
  - Product Name: Convex Safety Mirror
  - Diameter: 100 cm
  - Mirror Type: Convex (wide-angle)
  - Material: Acrylic / Polycarbonate mirror surface
  - Backing: Durable ABS plastic housing
  - Mounting: Wall or pole mounting bracket included
  - Usage: Indoor and outdoor
  - Weather Resistance: UV and impact resistant
  - Viewing Angle: Wide-angle visibility
  `,

        features: `
  - Provides wide-angle view to eliminate blind spots
  - Large 100cm size for maximum coverage
  - Clear and high-quality reflective surface
  - Durable and weather-resistant construction
  - Easy to install with adjustable mounting bracket
  - Suitable for roads, warehouses and parking areas
  - Improves safety and reduces accident risk
  - Lightweight yet strong design
  - Ideal for both indoor and outdoor use
  `
    },

    {
        id: 7011,
        name: 'Lemon Reflective Stripe Tape 2" x 50m',
        category: 'reflectors',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 12000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330003/Astonic-Mart/Products/traffic%20safety/lemon_reflective_stripes.webp'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Lemon Reflective Stripe Tape 2" x 50m is a high-visibility safety tape designed to enhance visibility and improve safety in low-light and nighttime conditions. It is widely used on vehicles, construction sites, warehouses, barriers, poles and equipment to clearly mark edges, hazards and restricted areas.
The tape features a bright lemon (fluorescent yellow) color combined with reflective technology that ensures strong light reflection when exposed to headlights or other light sources. This makes it highly effective for preventing accidents and improving awareness in dark or poorly lit environments.
Made from durable, weather-resistant material, the reflective tape is designed for both indoor and outdoor use. It has a strong adhesive backing that allows easy application on various surfaces such as metal, plastic, wood and concrete. With a length of 50 meters, it provides ample coverage for multiple safety marking applications.
`,

        specification: `
  - Product Name: Reflective Stripe Tape
  - Color: Lemon (Fluorescent Yellow)
  - Width: 2 inches (approx. 50 mm)
  - Length: 50 meters
  - Material: Reflective PVC / PET
  - Adhesive Type: Strong self-adhesive backing
  - Visibility: High reflectivity in low light
  - Usage: Indoor and outdoor applications
  `,

        features: `
  - High visibility reflective surface for night safety
  - Bright lemon color for daytime visibility
  - Strong adhesive for secure application
  - Weather-resistant and durable material
  - Easy to apply on multiple surfaces
  - Suitable for vehicles, barriers and hazard marking
  - Long 50m roll for extended use
  - Helps prevent accidents and improve awareness
  - Ideal for road safety and industrial environments
  `
    },


    {
        id: 7012,
        name: 'Rubber Speed Bump 50m',
        category: 'speed-bumps',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 48000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330027/Astonic-Mart/Products/traffic%20safety/speed_bump-50m.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330028/Astonic-Mart/Products/traffic%20safety/speed_bump-50m-2.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330027/Astonic-Mart/Products/traffic%20safety/speed_bump-50m-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330035/Astonic-Mart/Products/traffic%20safety/speed_bump-50m-4.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Rubber Speed Bump 50m is a heavy-duty traffic calming solution designed to reduce vehicle speed and enhance safety in high-traffic areas. It is widely used in residential areas, parking lots, schools, hospitals, warehouses and industrial facilities to control traffic flow and prevent accidents.
Constructed from high-quality durable rubber, the speed bump is designed to withstand heavy loads, harsh weather conditions and continuous vehicle impact. Its modular design allows multiple sections to be connected, forming a total length of up to 50 meters, making it suitable for large areas or long stretches of road.
The speed bump features a high-visibility design with embedded reflective strips that ensure clear visibility during both day and night. It can be securely fixed to the ground using bolts, providing a stable and long-lasting installation.
This speed bump is an effective and reliable solution for enforcing speed limits, improving road safety and protecting pedestrians and property.
`,

        specification: `
  - Product Name: Rubber Speed Bump
  - Total Length: 50 meters (modular sections)
  - Material: Heavy-duty rubber
  - Color: Black with yellow reflective sections
  - Height: Standard traffic calming height
  - Installation: Bolt-down installation
  - Reflective: Built-in reflective strips
  - Load Capacity: Suitable for cars and heavy vehicles
  - Usage: Indoor and outdoor applications
  `,

        features: `
  - Reduces vehicle speed effectively
  - Durable rubber construction for long-term use
  - Modular design for flexible length installation
  - High visibility with reflective markings
  - Weather-resistant and impact-resistant
  - Easy installation with bolt-down system
  - Suitable for residential, commercial and industrial areas
  - Enhances pedestrian and traffic safety
  - Ideal for parking lots, schools and roadways
  `
    },

    {
        id: 7013,
        name: 'Heavy Duty Rubber Wheel Chocks (Non-Slip Tire Stopper)',
        category: 'wheel-chocks',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 49000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329996/Astonic-Mart/Products/traffic%20safety/heavy_duty_wheel_chokes.webp5.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329996/Astonic-Mart/Products/traffic%20safety/heavy_duty_wheel_chokes.webp4.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329996/Astonic-Mart/Products/traffic%20safety/heavy_duty_wheel_chokes.webp5.webp'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Heavy Duty Rubber Wheel Chocks are essential safety devices designed to prevent vehicles from rolling or moving unintentionally when parked or under maintenance. These non-slip tire stoppers are ideal for use with cars, trucks, trailers, forklifts and other heavy-duty vehicles in garages, warehouses, construction sites and loading bays.
Made from high-quality, durable rubber, the wheel chocks provide excellent grip on both the ground and tire surface, ensuring maximum stability even on inclined or uneven surfaces. Their rugged construction allows them to withstand heavy loads and harsh working conditions without cracking or slipping.
The chocks feature a compact and portable design, making them easy to carry, position and store. Some models include a built-in handle or rope for convenient handling. This makes them a reliable and practical solution for improving vehicle safety during parking, loading or servicing operations.
`,

        specification: `
  - Product Name: Rubber Wheel Chock
  - Material: Heavy-duty rubber
  - Design: Wedge-shaped non-slip stopper
  - Surface: Textured for enhanced grip
  - Load Capacity: Suitable for cars, trucks and heavy vehicles
  - Color: Black (may include reflective strips)
  - Portability: Lightweight with handle (model dependent)
  - Usage: Indoor and outdoor applications
  `,

        features: `
  - Prevents unwanted vehicle movement
  - Strong non-slip grip for enhanced stability
  - Durable and heavy-duty rubber construction
  - Suitable for a wide range of vehicles
  - Easy to position and remove
  - Compact and portable design
  - Weather-resistant for outdoor use
  - Ideal for garages, warehouses and construction sites
  - Enhances safety during parking and maintenance
  `
    },


    {
        id: 7014,
        name: 'Garrett Handheld Metal Detector',
        category: 'metal-detectors',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Garrett',
        price: 45000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330005/Astonic-Mart/Products/traffic%20safety/metal_dectectors-garret.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Garrett Handheld Metal Detector is a high-performance security screening device designed for detecting metallic objects quickly and accurately. It is widely used in security checkpoints such as airports, schools, event venues, government facilities and industrial sites to enhance safety and prevent unauthorized items from being carried into restricted areas.
Engineered with advanced detection technology, the device is capable of identifying both small and large metal objects with high sensitivity. It provides instant alerts through audible sound, vibration or LED indicators, ensuring efficient and discreet screening operations.
The metal detector features an ergonomic and lightweight design, making it comfortable for prolonged use by security personnel. Its durable construction ensures reliable performance in demanding environments, while its simple operation requires minimal training.
This handheld metal detector is an essential tool for modern security operations, offering fast, reliable and non-invasive screening for improved safety and control.
`,

        specification: `
  - Product Name: Handheld Metal Detector
  - Brand: Garrett
  - Detection Type: Ferrous and non-ferrous metals
  - Alert Modes: صوت (audio), vibration and LED indicator
  - Sensitivity: Adjustable sensitivity control
  - Power Source: 9V battery or rechargeable battery
  - Operating Frequency: Standard detection frequency
  - Material: Durable ABS plastic
  - Usage: Security screening and inspection
  `,

        features: `
  - High sensitivity for accurate metal detection
  - Audio, vibration and LED alert system
  - Lightweight and ergonomic design
  - Easy to operate with minimal training required
  - Durable construction for long-term use
  - Suitable for airports, events and security checkpoints
  - Adjustable sensitivity for different detection needs
  - Fast response for efficient screening
  - Reliable performance in various environments
  `
    },


    {
        id: 7015,
        name: 'Convex Undercarriage Inspection Mirror 30cm with Wheels',
        category: 'inspection-mirrors',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 65000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330000/Astonic-Mart/Products/traffic%20safety/inspection_mirror-30cm.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Convex Undercarriage Inspection Mirror 30cm with Wheels is a specialized security inspection tool designed for checking the underside of vehicles for hidden objects, contraband or potential threats. It is widely used at security checkpoints such as airports, government facilities, military zones, event venues, border control points and industrial sites.

The mirror features a high-quality convex reflective surface that provides a wide-angle view, allowing security personnel to inspect hard-to-reach areas quickly and effectively. Its 30cm diameter ensures sufficient coverage while maintaining portability and ease of use.

Equipped with smooth-rolling wheels and an adjustable handle, the inspection mirror can be easily maneuvered under vehicles without requiring the operator to bend excessively. The lightweight yet durable construction ensures long-term performance, while optional LED lighting enhances visibility in low-light conditions.

This undercarriage inspection mirror is an essential tool for improving security, preventing unauthorized transport of dangerous items and ensuring thorough vehicle inspections in sensitive environments.
`,

        specification: `
  - Product Name: Undercarriage Inspection Mirror
  - Mirror Type: Convex (wide-angle)
  - Mirror Diameter: 30 cm
  - Material: Acrylic / Polycarbonate mirror surface
  - Frame: Durable protective housing
  - Mobility: Equipped with wheels for easy movement
  - Handle: Adjustable handle for user comfort
  - Lighting: Optional LED light (model dependent)
  - Usage: Vehicle undercarriage inspection
  `,

        features: `
  - Wide-angle convex mirror for clear visibility
  - Easy movement with built-in wheels
  - Adjustable handle for comfortable operation
  - Lightweight and portable design
  - Durable construction for long-term use
  - Ideal for security checkpoints and inspections
  - Optional LED light for low-light environments
  - Allows quick and efficient vehicle inspection
  - Enhances safety and security operations
  `
    },


    {
        id: 7016,
        name: 'Reflective Safety Vest FN 500',
        category: 'safety-vests',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 4500,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786311503/Astonic-Mart/Products/reflective%20jackets/REFLECTIVE_SAFETY_VEST_FN_500.jpg',
        ],

        inStock: true,

        description: 'The Reflective Safety Vest FN 500 is a high-visibility personal protective equipment designed to enhance worker safety in low-light and high-risk environments. Made from durable fluorescent fabric with 360° reflective strips, it ensures maximum visibility both during the day and at night.\n\nThis vest is ideal for construction workers, road safety personnel, traffic controllers, and industrial workers. It features multiple functional pockets for tools and accessories, along with a secure front zipper closure for convenience and durability.\n\nLightweight and breathable, the FN 500 vest is comfortable for long hours of use and can be easily worn over regular work clothing. It complies with standard safety visibility requirements, making it suitable for professional use.',

        specification: `
  Model: FN 500
  Material: Polyester / Fluorescent fabric
  Visibility: 360° reflective strips (2-inch width)
  Closure Type: Front zipper
  Pockets: Multiple utility pockets + ID holder
  Sizes: M, L, XL, XXL, XXXL
  Color: Fluorescent yellow / orange
  Application: Construction, road safety, industrial work
  `,

        features: `
  High-visibility fluorescent material for safety
  360° reflective tape for day and night visibility
  Durable and lightweight design for comfort
  Multiple pockets for tools and accessories
  Secure zipper closure for easy wear
  Breathable fabric for extended use
  Suitable for construction, traffic control, and industrial environments
  Meets standard safety visibility requirements
  `
    },

    {
        id: 7017,
        name: '2 Channel Cable Ramp Speed Bump Hump Rubber Protective',
        category: 'cable-ramps',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 64000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329956/Astonic-Mart/Products/traffic%20safety/2_channel_cable_ramp-2.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329958/Astonic-Mart/Products/traffic%20safety/2_channel_cable_ramp.avif',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329956/Astonic-Mart/Products/traffic%20safety/2_channel_cable_ramp-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329956/Astonic-Mart/Products/traffic%20safety/2_channel_cable_ramp-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329956/Astonic-Mart/Products/traffic%20safety/2_channel_cable_ramp-5.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329962/Astonic-Mart/Products/traffic%20safety/2_channel_cable_ramp-6.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: 'The 2 Channel Cable Ramp Speed Bump Hump Rubber Protective is a heavy-duty cable protection ramp designed to safeguard electrical cables, hoses, fiber lines, and utility pipes from vehicle and pedestrian traffic. Built from industrial-grade rubber with a high-visibility yellow cover, it provides excellent impact resistance, anti-slip performance, and long-lasting durability in harsh indoor and outdoor environments. The dual-channel design allows two separate cables or hoses to run safely beneath the ramp without crushing, tangling, or damage. Its modular interlocking design makes it easy to connect multiple ramps for longer cable runs, making it ideal for construction sites, warehouses, concerts, hotels, events, factories, parking lots, and road safety applications.',

        specification: `
    - Product Type: Cable Protector Ramp / Speed Bump
    - Channels: 2 Channel
    - Material: Heavy Duty Industrial Rubber + PVC Lid
    - Color: Black / Yellow High Visibility
    - Load Capacity: 5 Ton – 10 Ton+
    - Channel Size: Approx. 30mm x 30mm
    - Length: 900mm – 1000mm
    - Width: 250mm – 300mm
    - Height: 45mm – 60mm
    - Surface: Anti-Slip Texture
    - Installation: Modular Interlocking Design
    - Weather Resistance: Yes
  `,

        features: `
    - Heavy duty industrial rubber construction
    - Protects cables from vehicle damage
    - 2 separate cable channels
    - Anti-slip textured surface
    - High visibility yellow safety cover
    - Weatherproof outdoor use
    - Easy modular interlocking connection
    - Shock absorbing design
    - Suitable for trucks and forklifts
    - Fast installation and low maintenance
    - Ideal for roads, events, warehouses, and construction sites
  `
    },

    {
        id: 7018,
        name: 'Stop / Go Traffic Paddle Sign',
        category: 'traffic-control-systems',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 28000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330035/Astonic-Mart/Products/traffic%20safety/stop_and_go_traffic_paddle.jpg',
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: 'The Stop / Go Traffic Paddle Sign is a professional hand-held traffic control device designed to direct vehicles and pedestrians safely in roadworks zones, construction areas, parking facilities, emergency scenes, and event traffic management points. Manufactured from durable weather-resistant plastic or aluminum composite material, the paddle features bold high-visibility STOP and GO faces with reflective surfaces for maximum visibility during both daytime and night operations. Its ergonomic handle offers a secure grip for prolonged use, while the lightweight construction reduces operator fatigue. Suitable for traffic marshals, construction crews, law enforcement support teams, event organizers, and industrial site traffic control operations.',

        specification: `
    - Product Type: Hand Held Traffic Control Paddle
    - Material: High Impact Plastic / Aluminum Composite
    - Face Type: Double Sided (STOP / GO)
    - Visibility: Reflective High Visibility Surface
    - Color: Red STOP / Green GO
    - Handle Type: Ergonomic Grip Handle
    - Diameter: 300mm – 450mm
    - Pole Length: 250mm – 450mm
    - Weather Resistant: Yes
    - Day / Night Use: Yes
    - Weight: Lightweight Portable Design
  `,

        features: `
    - Clear STOP / GO directional display
    - High visibility reflective finish
    - Lightweight and easy to carry
    - Durable weather resistant construction
    - Comfortable grip handle
    - Suitable for daytime and night traffic control
    - Long service life
    - Easy to clean and maintain
    - Ideal for roadwork and construction zones
    - Professional traffic marshal equipment
  `
    },


    {
        id: 7019,
        name: 'LK-120 Emergency Fire Alarm Siren',
        category: 'emergency-alert-systems',
        group: 'fire and traffic safety',
        parentCategory: 'fire safety',
        showSimilar: true,
        brand: 'generic',
        price: 300000,
        discountPrice: 280000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306414/Astonic-Mart/Products/emergency%20equipment/LK-120_Emergency_Fire_Alarm_Siren-2.png',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306415/Astonic-Mart/Products/emergency%20equipment/LK-120_Emergency_Fire_Alarm_Siren-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306415/Astonic-Mart/Products/emergency%20equipment/LK-120_Emergency_Fire_Alarm_Siren-4.avif',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306412/Astonic-Mart/Products/emergency%20equipment/LK-120_Emergency_Fire_Alarm_Siren.jpg'
        ],

        videos: [
            'https://youtube.com/shorts/ULkfltQZ8ek?si=VHPxq9Pc-UH3j9rd'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The LK-120 Emergency Fire Alarm Siren is a powerful hand-operated emergency warning system designed for fire alerts, disaster warnings, evacuation notifications and emergency signaling in areas without electricity. Built with a durable aluminum alloy body and high sound output, the LK-120 siren delivers reliable warning signals for factories, schools, warehouses, camps, construction sites, farms and emergency response operations. Its portable foldable design and manual crank operation make it suitable for outdoor and remote emergency applications.',

        specification: `
  - Product Name: LK-120 Emergency Fire Alarm Siren
  - Model Number: LK-120
  - Brand: LK
  - Alarm Type: Hand Operated Emergency Siren
  - Sound Output: 120 ±2 dB(A) @ 1m
  - Output Frequency: 600 ±20 Hz
  - Effective Warning Range: Up to 1.5km Diameter
  - Material: Aluminum Alloy
  - Operation Type: Manual Crank Handle
  - Mounting Type: Portable / Stand Mounted
  - Net Weight: 9kg
  - Packing Size: 450 × 370 × 580 mm
  - Application: Fire warning, emergency alert and evacuation signaling

  Accessories
  - Foldable Stand
  - Hand Crank Handle
  - User Manual
  `,

        features: `
  - High power emergency warning siren
  - No electricity or battery required
  - Loud 120dB alarm output for emergency situations
  - Portable foldable structure for easy transportation
  - Durable aluminum alloy construction
  - Suitable for fire alerts and evacuation warning
  - Reliable manual crank operation
  - Effective for factories, schools and industrial sites
  - Lightweight compact emergency signaling device
  - Ideal for outdoor and remote emergency applications
  `
    },


    {
        id: 7020,
        name: '80cm Convex Mirror',
        category: 'convex-mirrors',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        showSimilar: true,
        brand: 'Generic',

        price: 130000,
        discountPrice: 120000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329989/Astonic-Mart/Products/traffic%20safety/convex_mirrors-80cm.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329989/Astonic-Mart/Products/traffic%20safety/convex_mirrors-80cm.jpg-2.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329989/Astonic-Mart/Products/traffic%20safety/convex_mirrors-80cm.jpg-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329989/Astonic-Mart/Products/traffic%20safety/convex_mirrors-80cm.jpg-4.jpg'
        ],

        videos: [
            'https://www.youtube.com/watch?v=7mN3Lk2Q8vQ'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The 80cm Convex Mirror is a heavy-duty wide-angle safety mirror designed for improving visibility and reducing blind spots in warehouses, factories, parking areas, road intersections, supermarkets and industrial facilities. Built with a durable weather-resistant body and high-visibility reflective surface, it enhances safety, traffic monitoring and surveillance performance in both indoor and outdoor environments.',

        specification: `
  - Product Name: Convex Safety Mirror
  - Mirror Size: 80cm
  - Mirror Type: Wide-Angle Convex Mirror
  - Mirror Material: Acrylic / Polycarbonate
  - Back Material: ABS Industrial Housing
  - Shape: Circular
  - Mounting Type: Wall / Pole Mount
  - Viewing Angle: Wide-Angle Visibility
  - Weather Resistance: Yes
  - UV Resistance: Yes
  - Application: Traffic and Industrial Safety
  - Installation Area: Indoor and Outdoor Use

  Applications
  - Warehouse safety monitoring
  - Parking lot visibility
  - Blind spot elimination
  - Factory traffic control
  - Road intersection monitoring
  - Supermarket surveillance
  - Industrial safety operations
  - Security monitoring
  - Garage visibility improvement
  - Commercial building safety

  Accessories
  - 80cm Convex Mirror
  - Adjustable Mounting Bracket
  - Installation Bolts
  - User Manual
  `,

        features: `
  - Wide-angle blind spot visibility
  - Durable industrial mirror construction
  - Weather-resistant outdoor design
  - High-visibility reflective surface
  - Easy wall or pole installation
  - Impact-resistant mirror body
  - Suitable for indoor and outdoor use
  - Improves traffic and workplace safety
  - Adjustable viewing direction
  - Ideal for industrial and commercial environments
  `
    },


    {
        id: 7021,
        name: '60cm Convex Mirror',
        category: 'convex-mirrors',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        showSimilar: true,

        brand: 'Generic',

        price: 95000,
        discountPrice: 82000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329989/Astonic-Mart/Products/traffic%20safety/convex_mirrors-60cm.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329989/Astonic-Mart/Products/traffic%20safety/convex_mirrors-60cm.jpg-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329989/Astonic-Mart/Products/traffic%20safety/convex_mirrors-60cm.jpg-3.webp'
        ],

        videos: [
            'https://www.youtube.com/watch?v=7mN3Lk2Q8vQ'
        ],

        jumiaLink: '',
        kongaLink: '',

        inStock: true,

        description: 'The 60cm Convex Mirror is a heavy-duty wide-angle safety mirror designed for improving visibility and reducing blind spots in warehouses, factories, parking areas, road intersections, supermarkets and industrial facilities. Built with a durable weather-resistant body and high-visibility reflective surface, it enhances safety, traffic monitoring and surveillance performance in both indoor and outdoor environments.',

        specification: `
  - Product Name: Convex Safety Mirror
  - Mirror Size: 60cm
  - Mirror Type: Wide-Angle Convex Mirror
  - Mirror Material: Acrylic / Polycarbonate
  - Back Material: ABS Industrial Housing
  - Shape: Circular
  - Mounting Type: Wall / Pole Mount
  - Viewing Angle: Wide-Angle Visibility
  - Weather Resistance: Yes
  - UV Resistance: Yes
  - Application: Traffic and Industrial Safety
  - Installation Area: Indoor and Outdoor Use

  Applications
  - Warehouse safety monitoring
  - Parking lot visibility
  - Blind spot elimination
  - Factory traffic control
  - Road intersection monitoring
  - Supermarket surveillance
  - Industrial safety operations
  - Security monitoring
  - Garage visibility improvement
  - Commercial building safety

  Accessories
  - 80cm Convex Mirror
  - Adjustable Mounting Bracket
  - Installation Bolts
  - User Manual
  `,

        features: `
  - Wide-angle blind spot visibility
  - Durable industrial mirror construction
  - Weather-resistant outdoor design
  - High-visibility reflective surface
  - Easy wall or pole installation
  - Impact-resistant mirror body
  - Suitable for indoor and outdoor use
  - Improves traffic and workplace safety
  - Adjustable viewing direction
  - Ideal for industrial and commercial environments
  `
    },


    {
        id: 7022,
        name: '11FT Portable Expandable Metal Barricade Gate with Wheels',
        category: 'road-barriers',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 185000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304142/Astonic-Mart/Products/barriers/metal_expandable_barricade.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304144/Astonic-Mart/Products/barriers/metal_expandable_barricade-2.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304146/Astonic-Mart/Products/barriers/metal_expandable_barricade-3.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304147/Astonic-Mart/Products/barriers/metal_expandable_barricade-4.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304148/Astonic-Mart/Products/barriers/metal_expandable_barricade-5.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304152/Astonic-Mart/Products/barriers/metal_expandable_barricade-6.webp'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
11FT Portable Expandable Metal Barricade Gate is a durable and highly effective access control solution designed for restricting entry to hazardous, restricted or temporary work areas. Featuring a strong expandable scissor-style metal frame, this barricade can be quickly extended to cover wide openings and collapsed for compact storage when not in use. It is commonly used in warehouses, factories, construction sites, parking facilities, maintenance areas and public spaces.
Constructed from heavy-duty metal, the barricade provides superior strength and durability compared to plastic alternatives. The bright safety-colored finish enhances visibility, helping to alert pedestrians and workers to restricted zones. Equipped with smooth-rolling caster wheels, the gate can be easily moved and repositioned by a single operator, making it ideal for environments where barriers need to be frequently relocated.
The expandable design allows flexible coverage depending on site requirements, while the portable structure ensures quick deployment during maintenance work, emergency situations or crowd-control operations. Its sturdy construction and practical mobility make it an essential safety barrier for both indoor and outdoor applications.
`,

        specification: `
  - Product Name: 11FT Portable Expandable Metal Barricade Gate
  - Material: Heavy-Duty Metal Steel Construction
  - Length: 11 Feet (Approx. 3.35m) Fully Extended
  - Design: Expandable / Retractable Scissor Gate
  - Mobility: Equipped with Swivel Caster Wheels
  - Color: Safety Yellow (may vary by model)
  - Application: Access Restriction and Safety Control
  - Usage: Indoor and Outdoor
  - Storage: Compact Foldable Design
  `,

        features: `
  - Heavy-duty metal construction for long service life
  - Expands up to 11 feet for wide area coverage
  - Foldable and retractable for easy storage
  - Equipped with wheels for effortless mobility
  - High-visibility safety finish
  - Quick deployment and repositioning
  - Suitable for warehouses, factories and construction sites
  - Helps restrict unauthorized access
  - Durable design for indoor and outdoor use
  - Ideal for maintenance, crowd control and hazard isolation
  `
    },


    {
        id: 7023,
        name: 'Solar Powered Reflective Road Stud (Solar Cat Eye)',
        category: 'traffic-and-solar-lights',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 23000,


        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330016/Astonic-Mart/Products/traffic%20safety/solar_cat_eye.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330016/Astonic-Mart/Products/traffic%20safety/solar_cat_eye.webp-2.jpeg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330016/Astonic-Mart/Products/traffic%20safety/solar_cat_eye.webp-3.avif',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330016/Astonic-Mart/Products/traffic%20safety/solar_cat_eye.webp-4.avif',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330016/Astonic-Mart/Products/traffic%20safety/solar_cat_eye.webp-5.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330016/Astonic-Mart/Products/traffic%20safety/solar_cat_eye.webp-5.webp'
        ],

        inStock: true,

        jumiaLink: '',
        kongaLink: '',

        description: `
Solar Powered Reflective Road Stud, commonly known as a Solar Cat Eye or Solar Road Outliner, is a traffic safety device designed to improve road visibility and lane guidance during nighttime and adverse weather conditions. It utilizes high-intensity LED lights powered by solar energy to provide clear visual road markings without the need for external power sources.
The road stud automatically charges during daylight hours and activates at dusk, enhancing road safety for drivers, pedestrians, and cyclists. It is suitable for highways, road intersections, parking lots, pedestrian crossings, bridges, tunnels, airports, and industrial facilities.
Manufactured from high-strength aluminum alloy and impact-resistant materials, the solar cat eye is built to withstand heavy vehicle loads and harsh outdoor environments.
`,

        specification: `
  - Product Name: Solar Powered Road Stud
  - Type: Solar Cat Eye / Solar Road Outliner
  - Power Source: Solar Energy
  - Light Source: High Brightness LED
  - LED Colors: Red, Yellow, White, Blue, Green (Optional)
  - Charging Time: 6-8 Hours
  - Working Time: Up to 100 Hours After Full Charge
  - Material: Aluminum Alloy + Polycarbonate
  - Waterproof Rating: IP68
  - Load Capacity: Up to 20 Tons
  - Visibility Distance: Up to 800 Meters
  - Operation Mode: Automatic Dusk-to-Dawn Activation
  - Installation: Surface Mounted
  `,

        features: `
  - Solar-powered operation with no wiring required
  - High-intensity LED visibility
  - Automatic charging during daylight
  - Automatic illumination at night
  - Long service life and low maintenance
  - Waterproof and weather-resistant construction
  - Heavy-duty load-bearing design
  - Enhances road and traffic safety
  - Suitable for roads, parking areas, and pedestrian crossings
  - Energy-efficient and environmentally friendly
  `
    },

    {
        id: 7024,
        name: 'Solar LED Traffic Cone Warning Light',
        category: 'traffic-and-solar-lights',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',

        price: 30000,


        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330019/Astonic-Mart/Products/traffic%20safety/solar_traffic_light_for_cone.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330023/Astonic-Mart/Products/traffic%20safety/solar_traffic_light_for_cone-2.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330022/Astonic-Mart/Products/traffic%20safety/solar_traffic_light_for_cone-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330022/Astonic-Mart/Products/traffic%20safety/solar_traffic_light_for_cone-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330022/Astonic-Mart/Products/traffic%20safety/solar_traffic_light_for_cone-5.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330022/Astonic-Mart/Products/traffic%20safety/solar_traffic_light_for_cone-6.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330025/Astonic-Mart/Products/traffic%20safety/solar_traffic_light_for_cone-7.jpg'
        ],

        inStock: true,

        jumiaLink: '',
        kongaLink: '',

        description: `
Solar LED Traffic Cone Warning Light is a portable road safety device designed to be mounted on traffic cones, barricades, delineators, and warning posts to improve visibility in low-light and nighttime conditions. Powered by solar energy, it automatically charges during the day and provides bright flashing LED signals at night to alert motorists and pedestrians of roadworks, hazards, construction zones, and restricted areas.
Its durable weather-resistant construction makes it suitable for highways, road maintenance projects, parking lots, airports, industrial sites, and emergency traffic control applications.
`,

        specification: `
  - Product Name: Solar Traffic Cone Warning Light
  - Type: Cone Mounted Solar Beacon
  - Power Source: Solar Panel + Rechargeable Battery
  - Light Source: High-Intensity LED
  - Light Color: Red (Optional Amber/Yellow)
  - Operation Modes: Flashing / Steady Light
  - Charging Time: 6-8 Hours
  - Working Time: Up to 100 Hours
  - Visibility Distance: Up to 1000 Meters
  - Housing Material: ABS Plastic
  - Waterproof Rating: IP65
  - Mounting Type: Traffic Cone Top Mount
  - Application: Road Safety, Construction Zones, Traffic Management
  `,

        features: `
  - Solar-powered operation
  - Bright flashing LED warning signal
  - Automatic charging during daylight
  - Long-lasting rechargeable battery
  - Easy installation on traffic cones
  - Lightweight and portable design
  - Weather-resistant construction
  - High visibility over long distances
  - Suitable for roadworks and emergency traffic control
  - Low maintenance and energy efficient
  `
    },

    {
        id: 7025,
        name: 'Orange Safety Barrier Net 4ft x 50m',
        category: 'road-barriers',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        showSimilar: true,

        brand: 'Generic',
        price: 45000,


        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304153/Astonic-Mart/Products/barriers/net_barrier.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304155/Astonic-Mart/Products/barriers/net_barrier-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304157/Astonic-Mart/Products/barriers/net_barrier-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304158/Astonic-Mart/Products/barriers/net_barrier-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304159/Astonic-Mart/Products/barriers/net_barrier-5.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304161/Astonic-Mart/Products/barriers/net_barrier-6.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786304162/Astonic-Mart/Products/barriers/net_barrier-7.jpg'
        ],

        inStock: true,

        jumiaLink: '',
        kongaLink: '',

        description: `
Orange Safety Barrier Net is a durable high-visibility fencing solution designed for temporary safety barricading, construction site demarcation, crowd control, road works, excavation zones, event management, and hazard identification. Its bright orange color provides excellent visibility, helping to warn pedestrians and workers of restricted or dangerous areas.

The lightweight and flexible design allows for quick installation on posts, poles, or barricade supports, making it ideal for both indoor and outdoor applications.
`,

        specification: `
  - Product Name: Safety Barrier Net
  - Color: Orange
  - Height: 4ft (1.22m)
  - Length: 50 Meters
  - Material: High-Density Polyethylene (HDPE)
  - Mesh Type: Extruded Plastic Mesh
  - UV Resistant: Yes
  - Weather Resistant: Yes
  - Reusable: Yes
  - Installation Type: Temporary Fencing
  - Visibility: High Visibility Orange
  - Application: Construction Sites, Road Works, Crowd Control, Excavation Areas and Event Safety
  `,

        accessories: `
  - 1 x Roll of Orange Safety Barrier Net (4ft x 50m)
  `,

        features: `
  - High-visibility orange color
  - Durable HDPE construction
  - Lightweight and easy to install
  - Weather-resistant design
  - UV-resistant material
  - Flexible and reusable
  - Suitable for temporary fencing
  - Ideal for construction site safety
  - Effective hazard area demarcation
  - Suitable for crowd control applications
  - Long 50-meter coverage
  - Low maintenance
  `
    },
    {
        id: 7026,
        name: 'Caution Danger Barricade Tape 50mm x 500m',
        category: 'caution-tapes',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        showSimilar: true,

        brand: 'Generic',
        model: '50mm x 500m',

        price: 17500,


        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329976/Astonic-Mart/Products/traffic%20safety/caution-danger-barricade-tape-500x500.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329976/Astonic-Mart/Products/traffic%20safety/caution-danger-barricade-tape-500x500.webp-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329976/Astonic-Mart/Products/traffic%20safety/caution-danger-barricade-tape-500x500.webp-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329976/Astonic-Mart/Products/traffic%20safety/caution-danger-barricade-tape-500x500.webp-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329976/Astonic-Mart/Products/traffic%20safety/caution-danger-barricade-tape-500x500.webp-5.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329976/Astonic-Mart/Products/traffic%20safety/caution-danger-barricade-tape-500x500.webp-6.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329976/Astonic-Mart/Products/traffic%20safety/caution-danger-barricade-tape-500x500.webp-7.jpg'
        ],

        inStock: true,

        description: `Caution Danger Barricade Tape is a high-visibility non-adhesive warning tape designed to mark hazardous, restricted, and work areas. It is commonly used on construction sites, roadworks, industrial facilities, maintenance zones, warehouses, and public events to alert people of potential dangers and prevent unauthorized access. The bright yellow and black warning design ensures maximum visibility both indoors and outdoors.`,

        specification: `
  - Product Name: Caution Danger Barricade Tape
  - Brand: Generic
  - Material: Polyethylene (PE)
  - Tape Type: Non-Adhesive Warning Tape
  - Colour: Yellow & Black
  - Printed Message: CAUTION DANGER
  - Width: 50mm (2 Inches)
  - Length: 500m
  - Thickness: Heavy Duty
  - Weather Resistant: Yes
  - Water Resistant: Yes
  - UV Resistant: Yes
  - Tear Resistant: Yes
  - Indoor/Outdoor Use: Yes
  - Application: Construction Sites, Road Works, Factories, Warehouses and Hazard Zones

  Accessories Included:
  - 1 x Roll Caution Danger Barricade Tape (50mm x 500m)
  `,

        features: `
  - Bright high-visibility yellow and black colour
  - Bold CAUTION DANGER warning print
  - Durable polyethylene construction
  - Suitable for indoor and outdoor applications
  - Easy to install between cones, poles and barriers
  - Weather, moisture and UV resistant
  - Helps restrict access to hazardous areas
  - Ideal for construction and maintenance work
  - Long 500m roll for extended coverage
  - Lightweight and easy to transport
  - Cost-effective safety marking solution
  `
    },


    {
        id: 7027,
        name: '95cm Caution Cone Sign (Wet Floor)',
        category: 'warning-signs',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 27000,


        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328735/Astonic-Mart/Products/safety%20signs/cone_caution_sign.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328735/Astonic-Mart/Products/safety%20signs/cone_caution_sign-3.avif',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328736/Astonic-Mart/Products/safety%20signs/cone_caution_sign-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328737/Astonic-Mart/Products/safety%20signs/cone_caution_sign-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328736/Astonic-Mart/Products/safety%20signs/cone_caution_sign-5.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328742/Astonic-Mart/Products/safety%20signs/cone_caution_sign-6.jpg'
        ],

        inStock: true,

        description: 'The 95cm Caution Cone Sign (Wet Floor) is a highly visible safety warning device designed to alert pedestrians and workers to wet, slippery, or hazardous floor conditions. Manufactured from durable impact-resistant plastic, it is ideal for use in shopping malls, offices, hospitals, hotels, warehouses, schools, airports, and industrial facilities. Its bright color and clear warning message help reduce the risk of slips, trips, and falls in both indoor and outdoor environments.',

        specification: `
  Product Type: Wet Floor Warning Cone
  Height: 95 cm
  Material: High-Impact Plastic
  Color: Yellow
  Message: CAUTION – WET FLOOR
  Usage: Indoor and Outdoor
  Weather Resistant: Yes
  Foldable: No
  Stability: Wide Base Design
  Application: Slip Hazard Warning

  Accessories:
  Wet Floor Cone Sign
  `,

        features: `
  Highly visible 95 cm warning cone for maximum awareness
  Bright yellow color enhances visibility from a distance
  Clearly marked "CAUTION WET FLOOR" warning message
  Durable impact-resistant plastic construction
  Suitable for commercial, industrial, and public environments
  Helps prevent slips, trips, and fall-related accidents
  Lightweight and easy to position when needed
  Stable wide-base design for improved balance
  Weather-resistant for indoor and outdoor use
  Ideal for cleaning operations, maintenance work, and spill management
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },



    {
        id: 7028,
        name: 'Men At Work Caution Sign',
        category: 'warning-signs',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 10000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328753/Astonic-Mart/Products/safety%20signs/men_at_work_caution_sign-4.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328753/Astonic-Mart/Products/safety%20signs/men_at_work_caution_sign-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328750/Astonic-Mart/Products/safety%20signs/men_at_work_caution_sign.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328750/Astonic-Mart/Products/safety%20signs/men_at_work_caution_sign-2.webp'
        ],

        inStock: true,

        description: 'The Men At Work / Work In Progress Caution Sign is a highly visible foldable warning sign designed to alert pedestrians, visitors, and workers to ongoing maintenance, repair, construction, or cleaning activities. Manufactured from durable plastic with a bright yellow finish and bold warning graphics, it helps improve workplace safety by restricting access to hazardous work zones and reducing the risk of accidents.',

        specification: `
  Product Type: Foldable Caution Sign
  Warning Message: CAUTION – MEN AT WORK
  Material: High-Density Plastic
  Color: Yellow with Black Print
  Design: Double-Sided Warning Display
  Usage: Indoor and Outdoor
  Weather Resistant: Yes
  Foldable: Yes
  Carry Handle: Integrated
  Stability: Wide Base Design
  Application: Work Zones, Maintenance Areas, Construction Sites

  Accessories:
  Men At Work Caution Sign
  `,

        features: `
  Highly visible yellow safety sign with bold warning message
  Alerts personnel and visitors to ongoing work activities
  Foldable design for easy storage and transportation
  Double-sided display for maximum visibility
  Durable impact-resistant plastic construction
  Integrated carry handle for convenient movement
  Suitable for indoor and outdoor environments
  Helps prevent unauthorized access to work areas
  Lightweight yet stable design
  Ideal for maintenance work, construction sites, repairs, cleaning operations, and facility management
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 7029,
        name: ' Work In Progress Caution Sign',
        category: 'warning-signs',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        price: 12000,
        brand: 'Generic',

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328753/Astonic-Mart/Products/safety%20signs/working_in_prog_caution_sign.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328753/Astonic-Mart/Products/safety%20signs/working_in_prog_caution_sign-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328753/Astonic-Mart/Products/safety%20signs/working_in_prog_caution_sign-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328755/Astonic-Mart/Products/safety%20signs/working_in_prog_caution_sign-4.jpg'
        ],

        inStock: true,

        description: 'The Men At Work / Work In Progress Caution Sign is a highly visible foldable warning sign designed to alert pedestrians, visitors, and workers to ongoing maintenance, repair, construction, or cleaning activities. Manufactured from durable plastic with a bright yellow finish and bold warning graphics, it helps improve workplace safety by restricting access to hazardous work zones and reducing the risk of accidents.',

        specification: `
  Product Type: Foldable Caution Sign
  Warning Message: CAUTION – MEN AT WORK
  Material: High-Density Plastic
  Color: Yellow with Black Print
  Design: Double-Sided Warning Display
  Usage: Indoor and Outdoor
  Weather Resistant: Yes
  Foldable: Yes
  Carry Handle: Integrated
  Stability: Wide Base Design
  Application: Work Zones, Maintenance Areas, Construction Sites

  Accessories:
  Men At Work Caution Sign
  `,

        features: `
  Highly visible yellow safety sign with bold warning message
  Alerts personnel and visitors to ongoing work activities
  Foldable design for easy storage and transportation
  Double-sided display for maximum visibility
  Durable impact-resistant plastic construction
  Integrated carry handle for convenient movement
  Suitable for indoor and outdoor environments
  Helps prevent unauthorized access to work areas
  Lightweight yet stable design
  Ideal for maintenance work, construction sites, repairs, cleaning operations, and facility management
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },


    {
        id: 7030,
        name: 'Cleaning In Progress Caution Sign',
        category: 'warning-signs',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 12000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328732/Astonic-Mart/Products/safety%20signs/clean_in_prog.jpg-2.png',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328732/Astonic-Mart/Products/safety%20signs/clean_in_prog.jpg-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328732/Astonic-Mart/Products/safety%20signs/clean_in_prog.jpg'
        ],

        inStock: true,

        description: 'The Men At Work / Work In Progress Caution Sign is a highly visible foldable warning sign designed to alert pedestrians, visitors, and workers to ongoing maintenance, repair, construction, or cleaning activities. Manufactured from durable plastic with a bright yellow finish and bold warning graphics, it helps improve workplace safety by restricting access to hazardous work zones and reducing the risk of accidents.',

        specification: `
  Product Type: Foldable Caution Sign
  Warning Message: CAUTION – MEN AT WORK
  Material: High-Density Plastic
  Color: Yellow with Black Print
  Design: Double-Sided Warning Display
  Usage: Indoor and Outdoor
  Weather Resistant: Yes
  Foldable: Yes
  Carry Handle: Integrated
  Stability: Wide Base Design
  Application: Work Zones, Maintenance Areas, Construction Sites

  Accessories:
  Men At Work Caution Sign
  `,

        features: `
  Highly visible yellow safety sign with bold warning message
  Alerts personnel and visitors to ongoing work activities
  Foldable design for easy storage and transportation
  Double-sided display for maximum visibility
  Durable impact-resistant plastic construction
  Integrated carry handle for convenient movement
  Suitable for indoor and outdoor environments
  Helps prevent unauthorized access to work areas
  Lightweight yet stable design
  Ideal for maintenance work, construction sites, repairs, cleaning operations, and facility management
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },


    {
        id: 7031,
        name: 'Danger High Voltage Electrical Shock Hazard Sign (10 x 14 Inches)',
        category: 'warning-signs',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',

        brand: 'Generic',
        price: 15000,


        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328747/Astonic-Mart/Products/safety%20signs/electrical_warning_signs.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328747/Astonic-Mart/Products/safety%20signs/electrical_warning_signs.jpg-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328747/Astonic-Mart/Products/safety%20signs/electrical_warning_signs.jpg-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328747/Astonic-Mart/Products/safety%20signs/electrical_warning_signs.jpg-4.jpg'
        ],

        inStock: true,

        description: 'The Danger High Voltage Electrical Shock Hazard Sign is a highly visible safety warning sign designed to alert personnel and visitors to the presence of hazardous electrical voltage. Featuring bold lettering and a universally recognized electrical hazard symbol, it helps improve workplace safety and reduce the risk of accidental contact with energized equipment. Ideal for electrical rooms, substations, control panels, switchboards, transformer stations, factories, and construction sites.',

        specification: `
  Product Type: Electrical Hazard Warning Sign
  Message: DANGER – HIGH VOLTAGE
  Hazard Type: Electrical Shock Hazard
  Sign Size: 10 x 14 Inches
  Material: Durable PVC / Plastic
  Color: Red, Black, White and Yellow
  Mounting Type: Wall Mount
  Usage: Indoor and Outdoor
  Weather Resistant: Yes
  UV Resistant: Yes

  Accessories:
  Danger High Voltage Electrical Shock Hazard Sign
  `,

        features: `
  Clearly communicates high-voltage electrical danger
  Bright colors and bold text for maximum visibility
  Universal electrical hazard symbol for instant recognition
  Durable construction for long service life
  Suitable for indoor and outdoor applications
  Weather-resistant and fade-resistant material
  Helps improve workplace safety compliance
  Easy to mount on walls, doors, fences, and equipment
  Ideal for substations, electrical panels, transformer rooms, and industrial facilities
  Reduces the risk of accidental exposure to electrical hazards
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 7032,
        name: 'Fire Hazard Warning Sign',
        category: 'warning-signs',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',

        brand: 'Generic',
        price: 17000,


        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328747/Astonic-Mart/Products/safety%20signs/fire_hazard_warning_sign.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328747/Astonic-Mart/Products/safety%20signs/fire_hazard_warning_sign.jpg-2.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328747/Astonic-Mart/Products/safety%20signs/fire_hazard_warning_sign.jpg-3.avif',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328747/Astonic-Mart/Products/safety%20signs/fire_hazard_warning_sign.jpg-4.jpeg'
        ],

        inStock: true,

        description: 'The Fire Hazard Warning Sign is a highly visible safety sign designed to alert personnel, visitors, and the public to areas where flammable materials, combustible substances, or fire risks may be present. Featuring bold warning text and universally recognized safety graphics, it helps improve workplace safety awareness and supports compliance with fire safety regulations. Suitable for factories, warehouses, fuel storage facilities, workshops, laboratories, and construction sites.',

        specification: `
  Product Type: Fire Hazard Warning Sign
  Message: WARNING – FIRE HAZARD
  Hazard Type: Fire and Flammable Material Warning
  Material: Durable PVC / Plastic / Aluminum (Model Dependent)
  Color: Red, Black, White and Yellow
  Mounting Type: Wall Mount
  Usage: Indoor and Outdoor
  Weather Resistant: Yes
  UV Resistant: Yes
  Shape: Rectangular

  Accessories:
  Fire Hazard Warning Sign
  `,

        features: `
  Clearly identifies fire-risk and flammable-material areas
  Bright colors and bold text for enhanced visibility
  Durable and long-lasting construction
  Suitable for indoor and outdoor environments
  Weather-resistant and fade-resistant material
  Helps improve workplace safety awareness
  Supports fire safety compliance programs
  Easy to install on walls, doors, gates, and fences
  Ideal for factories, warehouses, fuel stations, workshops, and storage facilities
  Helps reduce the risk of fire-related incidents
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },


    {
        id: 7033,
        name: 'Danger Warning Sign',
        category: 'warning-signs',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 16500,


        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328741/Astonic-Mart/Products/safety%20signs/do_not_enter_and_restricted_area.jpg-1.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328741/Astonic-Mart/Products/safety%20signs/do_not_enter_and_restricted_area.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328741/Astonic-Mart/Products/safety%20signs/do_not_enter_and_restricted_area.jpg-2.png',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786328741/Astonic-Mart/Products/safety%20signs/do_not_enter_and_restricted_area.jpg-4.jpg'
        ],

        inStock: true,

        description: 'The Danger Warning Sign is designed to alert workers, visitors, and the public to potentially hazardous conditions that may result in serious injury or property damage. Featuring bold text and highly visible colors, it is suitable for industrial facilities, construction sites, warehouses, factories, and restricted areas.',

        specification: `
  Product Type: Safety Warning Sign
  Message: DANGER
  Material: PVC / Plastic / Aluminum
  Color: Red, Black and White
  Mounting Type: Wall Mount
  Usage: Indoor and Outdoor
  Weather Resistant: Yes
  UV Resistant: Yes

  Accessories:
  Danger Warning Sign
  `,

        features: `
  Highly visible danger warning message
  Durable and weather-resistant construction
  Suitable for industrial and commercial environments
  Helps improve workplace safety awareness
  Easy to install on walls, gates, fences, and doors
  Fade-resistant printing for long-term use
  Suitable for indoor and outdoor applications
  `
    },

    {
        id: 7034,
        name: 'Handheld Portable LED Stop/Go Sign Paddle Light',
        category: 'traffic-control-systems',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',

        brand: 'Generic',
        price: 30000,
        discountPrice: 25000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329994/Astonic-Mart/Products/traffic%20safety/handheld_led_stop_and_go_traffic_light.avif',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329998/Astonic-Mart/Products/traffic%20safety/handheld_led_stop_and_go_traffic_light-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329993/Astonic-Mart/Products/traffic%20safety/handheld_led_stop_and_go_traffic_light-3.avif',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329993/Astonic-Mart/Products/traffic%20safety/handheld_led_stop_and_go_traffic_light-2.jpg'
        ],

        inStock: true,

        description: 'The Handheld Portable LED Stop/Go Sign Paddle Light is a highly visible traffic control device designed for directing vehicles and pedestrians in both daytime and nighttime conditions. Featuring bright LED illumination with clear STOP and GO indications, it is ideal for traffic marshals, security personnel, parking attendants, construction workers, road maintenance crews, schools, and event management teams. Its lightweight design and ergonomic handle make it easy to carry and operate for extended periods.',

        specification: `
  Product Type: LED Stop/Go Traffic Paddle
  Display: STOP / GO
  Illumination: High-Brightness LED Lights
  Material: Durable ABS Plastic
  Power Source: Battery Operated
  Light Modes: Steady and Flashing
  Visibility: Day and Night Use
  Handle Type: Ergonomic Grip Handle
  Application: Traffic Control and Crowd Management
  Weather Resistance: Yes
  Color: Red and Green LEDs

  Accessories:
  LED Stop/Go Paddle Light
  Handle Strap
  User Manual
  `,

        features: `
  Bright LED illumination for enhanced visibility
  Dual-sided STOP and GO traffic control display
  Suitable for daytime and nighttime operation
  Lightweight and portable design
  Durable impact-resistant ABS construction
  Comfortable ergonomic handle
  Flashing and steady light modes
  Easy battery-powered operation
  Ideal for roadworks, parking management, events, schools, and security operations
  Weather-resistant design for outdoor use
  `,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 7035,
        name: '70cm Safety Traffic Cone',
        category: 'traffic-cones',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 10500,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329972/Astonic-Mart/Products/traffic%20safety/70cm_safety_cone.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329972/Astonic-Mart/Products/traffic%20safety/70cm_safety_cone-2.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329974/Astonic-Mart/Products/traffic%20safety/70cm_safety_cone-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329974/Astonic-Mart/Products/traffic%20safety/70cm_safety_cone-4.webp'
        ],

        inStock: true,

        description: 'The 70cm Safety Traffic Cone is a highly visible traffic management and safety device designed to alert road users and pedestrians to potential hazards, restricted areas, construction zones, and temporary traffic diversions. Manufactured from durable and weather-resistant PVC material, the cone is built to withstand outdoor conditions while maintaining its bright visibility.\n\nFeaturing reflective collars, the cone provides enhanced visibility during low-light and nighttime conditions, making it ideal for roadworks, parking management, industrial sites, warehouses, events, and emergency situations. Its stable base helps prevent tipping and ensures reliable positioning on various surfaces.\n\nLightweight and easy to transport, the 70cm Safety Traffic Cone is an essential safety product for traffic control, workplace safety, and public area management.',

        specification: `
Product Type: Traffic Safety Cone
Height: 70cm
Material: Flexible PVC
Color: Orange with Reflective Bands
Reflective Collar: Yes
Base Type: Heavy-Duty Stable Base
Weather Resistance: Yes
UV Resistant: Yes
Application: Traffic Control and Hazard Warning
Usage: Indoor and Outdoor
  `,

        features: `
High-visibility orange color
70cm height for enhanced visibility
Reflective bands for night-time visibility
Durable and flexible PVC construction
Weather-resistant design
Stable and heavy-duty base
Lightweight and easy to carry
Suitable for roadworks and construction sites
Ideal for parking and traffic management
Quick deployment and repositioning
Reusable and long-lasting
Suitable for indoor and outdoor use
  `,

        jumiaLink: 'https://www.jumia.com.ng/catalog/?q=70cm+traffic+cone',
        kongaLink: 'https://www.konga.com/search?search=70cm+traffic+cone'
    },

    {
        id: 7036,
        name: '45cm Safety Traffic Cone',
        category: 'traffic-cones',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 7500,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329968/Astonic-Mart/Products/traffic%20safety/45cm_safety_cone.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329968/Astonic-Mart/Products/traffic%20safety/45cm_safety_cone-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329968/Astonic-Mart/Products/traffic%20safety/45cm_safety_cone-3.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329968/Astonic-Mart/Products/traffic%20safety/45cm_safety_cone-4.avif'
        ],

        inStock: true,

        description: 'The 45cm Safety Traffic Cone is a compact and highly visible traffic control device designed for marking hazards, directing traffic flow, restricting access, and improving safety in work zones and public areas. Constructed from durable and flexible PVC material, it offers excellent resistance to weather, impact, and everyday wear.\n\nIts bright orange color and reflective collar enhance visibility during both daytime and nighttime operations, making it suitable for parking lots, warehouses, construction sites, schools, events, and temporary road safety applications. The sturdy base provides stability, while the lightweight design allows for easy transportation and deployment.\n\nIdeal for professional and general-purpose safety applications, the 45cm Safety Traffic Cone is an essential tool for effective traffic and hazard management.',

        specification: `
Product Type: Traffic Safety Cone
Height: 45cm
Material: Flexible PVC
Color: Orange with Reflective Bands
Reflective Collar: Yes
Base Type: Stable Heavy-Duty Base
Weather Resistance: Yes
UV Resistant: Yes
Application: Traffic Control and Hazard Warning
Usage: Indoor and Outdoor
  `,

        features: `
High-visibility orange finish
45cm compact safety cone design
Reflective collar for enhanced visibility
Durable and flexible PVC construction
Weather-resistant and UV-resistant
Stable base for improved balance
Lightweight and easy to transport
Quick setup and repositioning
Suitable for parking areas and roadworks
Ideal for warehouses and construction sites
Reusable and long-lasting
Suitable for indoor and outdoor applications
  `,

        jumiaLink: 'https://www.jumia.com.ng/catalog/?q=45cm+traffic+cone',
        kongaLink: 'https://www.konga.com/search?search=45cm+traffic+cone'
    },


    {
        id: 7037,
        name: '95cm Safety Traffic Cone',
        category: 'traffic-cones',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 24500,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329954/Astonic-Mart/Products/traffic%20safety/100cm_traffic_cones-2.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329954/Astonic-Mart/Products/traffic%20safety/100cm_traffic_cones.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329954/Astonic-Mart/Products/traffic%20safety/100cm_traffic_cones-2.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329953/Astonic-Mart/Products/traffic%20safety/100cm_safety_cone-3.jpg'
        ],

        inStock: true,

        description: 'The 95cm Safety Traffic Cone is a high-visibility traffic management device designed for road safety, construction zones, parking control, emergency response, and industrial safety applications. Its extra-tall design provides superior visibility from a distance, helping to effectively warn motorists, workers, and pedestrians of hazards, restricted areas, and temporary traffic diversions.\n\nManufactured from durable, flexible PVC material, the cone is resistant to impact, weather, and UV exposure. Reflective collars enhance visibility during nighttime and low-light conditions, making it suitable for both day and night operations. The heavy-duty base provides excellent stability even in busy outdoor environments.\n\nIdeal for highways, roadworks, airports, warehouses, construction sites, and public events, the 95cm Safety Traffic Cone offers reliable performance and long service life.',

        specification: `
Product Type: Traffic Safety Cone
Height: 95cm
Material: Flexible PVC
Color: Orange with Reflective Bands
Reflective Collar: Yes
Base Type: Heavy-Duty Weighted Base
Weather Resistance: Yes
UV Resistant: Yes
Visibility: High Day and Night Visibility
Application: Traffic Control and Hazard Warning
Usage: Indoor and Outdoor
  `,

        features: `
Extra-tall 95cm design for maximum visibility
Bright orange color for hazard identification
Reflective bands for night-time safety
Durable and flexible PVC construction
Heavy-duty weighted base for stability
Weather-resistant and UV-resistant
Impact-resistant design
Easy to transport and deploy
Suitable for highways and road construction
Ideal for parking management and events
Reusable and long-lasting
Suitable for professional traffic control applications
  `,

        jumiaLink: 'https://www.jumia.com.ng/catalog/?q=95cm+traffic+cone',
        kongaLink: 'https://www.konga.com/search?search=95cm+traffic+cone'
    },

    {
        id: 7038,
        name: 'Traffic Delineator Post',
        category: 'traffic-cones',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 27000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330035/Astonic-Mart/Products/traffic%20safety/traffic_delineator_pole.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330035/Astonic-Mart/Products/traffic%20safety/traffic_delineator_pole-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330035/Astonic-Mart/Products/traffic%20safety/traffic_delineator_pole-3.jpg'
        ],

        inStock: true,

        description: 'The Traffic Delineator Post is a highly visible traffic control and lane management device designed to guide motorists, separate traffic lanes, restrict access, and improve road safety. Manufactured from durable, impact-resistant materials, the post is engineered to withstand repeated vehicle contact while maintaining its upright position and visibility.\n\nFeaturing reflective bands for enhanced day and night visibility, the delineator post is ideal for highways, road construction zones, parking areas, pedestrian walkways, toll stations, warehouses, and industrial facilities. Its flexible construction allows it to bend upon impact and return to its original shape, reducing damage to both vehicles and the post.\n\nEasy to install and maintain, Traffic Delineator Posts are essential safety products for effective traffic guidance and hazard management.',

        specification: `
Product Type: Traffic Delineator Post
Material: Flexible TPU / PVC
Color: Orange
Reflective Bands: Yes
Base Type: Rubber or Bolt-Down Base
Visibility: High Day and Night Visibility
Impact Resistance: Flexible and Rebound Design
Weather Resistance: Yes
UV Resistant: Yes
Application: Traffic Control and Lane Separation
Usage: Indoor and Outdoor
  `,

        features: `
High-visibility traffic guidance post
Reflective bands for enhanced night visibility
Flexible impact-resistant construction
Returns to original shape after impact
Durable and weather-resistant material
UV-resistant for long outdoor service life
Suitable for lane separation and traffic control
Easy installation and maintenance
Heavy-duty base for stability
Ideal for roads, car parks and construction zones
Reusable and long-lasting
Suitable for professional traffic management applications
  `,

        jumiaLink: 'https://www.jumia.com.ng/catalog/?q=traffic+delineator+post',
        kongaLink: 'https://www.konga.com/search?search=traffic+delineator+post'
    },

    {
        id: 7039,
        name: '70mm Speed Bump End Cap',
        category: 'speed-bumps',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 20500,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330025/Astonic-Mart/Products/traffic%20safety/speed_bump_cap-70mm.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330031/Astonic-Mart/Products/traffic%20safety/speed_bump_cap-70mm-2.png',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330027/Astonic-Mart/Products/traffic%20safety/speed_bump_cap-70mm-3.jpg'
        ],

        inStock: true,

        description: 'The 70mm Speed Bump End Cap is a durable finishing component designed to be installed at both ends of a speed bump system. It provides a smooth transition between the speed bump and the road surface while improving safety, appearance, and durability. The end cap helps prevent exposed edges that may cause vehicle damage or create trip hazards.\n\nManufactured from heavy-duty rubber or high-strength plastic, the end cap is designed to withstand vehicle traffic, harsh weather conditions, and continuous outdoor use. Its high-visibility color enhances awareness and complements the main speed bump section.\n\nIdeal for parking lots, residential estates, warehouses, factories, schools, hospitals, and commercial facilities, the 70mm Speed Bump End Cap provides a professional and safe finish to traffic calming installations.',

        specification: `
Product Type: Speed Bump End Cap
Compatible Speed Bump Height: 70mm
Material: Heavy-Duty Rubber / High-Strength Plastic
Color: Black and Yellow
Weather Resistance: Yes
UV Resistant: Yes
Installation Type: Bolt-Down Mounting
Application: Speed Bump Edge Finishing
Usage: Indoor and Outdoor
Traffic Type: Cars, SUVs and Light Commercial Vehicles
  `,

        features: `
Provides a neat finish to speed bump installations
Compatible with 70mm speed bumps
High-visibility design for enhanced safety
Durable and impact-resistant construction
Weather-resistant for outdoor applications
Helps reduce exposed edge hazards
Easy installation and replacement
Heavy-duty design for long service life
Suitable for parking lots and roadways
Improves overall speed bump appearance
UV-resistant material
Ideal for commercial and industrial environments
  `,

        jumiaLink: 'https://www.jumia.com.ng/catalog/?q=70mm+speed+bump+end+cap',
        kongaLink: 'https://www.konga.com/search?search=70mm+speed+bump+end+cap'
    },

    {
        id: 7040,
        name: '50mm Speed Bump End Cap',
        category: 'speed-bumps',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 17500,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330025/Astonic-Mart/Products/traffic%20safety/speed_bump_cap-50mm.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330025/Astonic-Mart/Products/traffic%20safety/speed_bump_cap-50mm-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330025/Astonic-Mart/Products/traffic%20safety/speed_bump_cap-50mm-3.jpg'
        ],

        inStock: true,

        description: 'The 50mm Speed Bump End Cap is a specially designed finishing piece used to complete the ends of 50mm speed bump systems. It creates a smooth transition between the speed bump and the road surface while enhancing safety and improving the overall appearance of the installation. The end cap helps reduce sharp edges and minimizes the risk of vehicle impact damage.\n\nConstructed from heavy-duty rubber or durable engineering plastic, the end cap is designed to withstand repeated vehicle traffic, harsh weather conditions, and prolonged outdoor exposure. Its high-visibility color improves awareness and complements standard speed bump sections.\n\nSuitable for parking lots, residential estates, schools, warehouses, factories, hospitals, and commercial facilities, the 50mm Speed Bump End Cap provides a professional and long-lasting traffic calming solution.',

        specification: `
Product Type: Speed Bump End Cap
Compatible Speed Bump Height: 50mm
Material: Heavy-Duty Rubber / Engineering Plastic
Color: Black and Yellow
Weather Resistance: Yes
UV Resistant: Yes
Installation Type: Bolt-Down Mounting
Application: Speed Bump Edge Finishing
Usage: Indoor and Outdoor
Traffic Type: Cars, SUVs and Light Commercial Vehicles
  `,

        features: `
Compatible with 50mm speed bumps
Provides a smooth and safe speed bump edge
High-visibility black and yellow design
Durable and impact-resistant construction
Weather-resistant and UV-resistant material
Reduces exposed edge hazards
Easy installation and maintenance
Suitable for indoor and outdoor use
Heavy-duty construction for long service life
Enhances overall speed bump appearance
Ideal for parking lots and traffic control areas
Professional finishing solution for traffic calming systems
  `,

        jumiaLink: 'https://www.jumia.com.ng/catalog/?q=50mm+speed+bump+end+cap',
        kongaLink: 'https://www.konga.com/search?search=50mm+speed+bump+end+cap'
    },

    {
        id: 7041,
        name: '70mm Rubber Speed Bump',
        category: 'speed-bumps',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 55000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329974/Astonic-Mart/Products/traffic%20safety/70mm_speed_bump.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329974/Astonic-Mart/Products/traffic%20safety/70mm_speed_bump.webp-2.jpeg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329974/Astonic-Mart/Products/traffic%20safety/70mm_speed_bump.webp-3.jpg'
        ],

        inStock: true,

        description: 'The 70mm Rubber Speed Bump is a heavy-duty traffic calming solution designed to reduce vehicle speeds and improve safety in parking lots, residential estates, schools, hospitals, warehouses, factories, and commercial premises. Constructed from durable recycled rubber, it is engineered to withstand repeated vehicle loads while maintaining excellent visibility and performance.\n\nFeaturing a highly visible black and yellow design, the speed bump effectively alerts drivers to reduce speed before entering sensitive or high-traffic areas. Its modular construction allows multiple sections to be connected to achieve the desired width across roadways and driveways.\n\nDesigned for easy installation and long-term outdoor use, the 70mm Rubber Speed Bump provides a reliable and cost-effective solution for traffic management and pedestrian safety.',

        specification: `
Product Type: Rubber Speed Bump
Height: 70mm
Material: Heavy-Duty Recycled Rubber
Color: Black and Yellow
Load Capacity: Suitable for Cars, SUVs and Trucks
Visibility: High-Visibility Reflective Design
Installation Type: Bolt-Down Mounting
Weather Resistance: Yes
UV Resistant: Yes
Application: Vehicle Speed Reduction
Usage: Indoor and Outdoor
  `,

        features: `
70mm height for effective speed reduction
Heavy-duty rubber construction
High-visibility black and yellow design
Weather-resistant and UV-resistant
Suitable for heavy traffic environments
Modular design for easy expansion
Easy installation with fixing points
Helps improve pedestrian safety
Reduces vehicle speed effectively
Durable and impact-resistant construction
Suitable for commercial and residential areas
Long service life with minimal maintenance
  `,

        jumiaLink: 'https://www.jumia.com.ng/catalog/?q=70mm+rubber+speed+bump',
        kongaLink: 'https://www.konga.com/search?search=70mm+rubber+speed+bump'
    },

    {
        id: 7042,
        name: '50mm Rubber Speed Bump with End Caps',
        category: 'speed-bumps',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 63250,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329972/Astonic-Mart/Products/traffic%20safety/50mm_speed_bump_with_end_cap.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329972/Astonic-Mart/Products/traffic%20safety/50mm_speed_bump_with_end_cap-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329972/Astonic-Mart/Products/traffic%20safety/50mm_speed_bump_with_end_cap-3.webp'
        ],

        inStock: true,

        description: 'The 50mm Rubber Speed Bump with End Caps is an effective traffic calming solution designed to reduce vehicle speeds and enhance safety in parking lots, residential estates, schools, hospitals, warehouses, factories, and commercial facilities. Manufactured from heavy-duty recycled rubber, the speed bump is highly durable, weather-resistant, and capable of withstanding repeated vehicle traffic.\n\nThe set includes matching end caps that provide a smooth and professional finish while reducing exposed edges and improving safety. Its high-visibility black and yellow design ensures that drivers can easily identify the speed bump during both daytime and nighttime conditions.\n\nEasy to install and maintain, this modular speed bump system is ideal for managing vehicle movement and protecting pedestrians in high-traffic environments.',

        specification: `
Product Type: Rubber Speed Bump Kit
Height: 50mm
Material: Heavy-Duty Recycled Rubber
Color: Black and Yellow
Accessories: Includes 2 End Caps
Visibility: High-Visibility Color Design
Load Capacity: Suitable for Cars, SUVs and Light Trucks
Installation Type: Bolt-Down Mounting
Weather Resistance: Yes
UV Resistant: Yes
Application: Traffic Calming and Speed Control
Usage: Indoor and Outdoor
  `,

        features: `
Complete speed bump system with end caps
50mm height for controlled vehicle speed reduction
Heavy-duty rubber construction
High-visibility black and yellow design
Includes end caps for a professional finish
Weather-resistant and UV-resistant
Impact-resistant and durable
Easy installation and maintenance
Suitable for parking lots and residential areas
Improves pedestrian and vehicle safety
Modular design for easy expansion
Long service life with minimal maintenance
  `,

        jumiaLink: 'https://www.jumia.com.ng/catalog/?q=50mm+rubber+speed+bump',
        kongaLink: 'https://www.konga.com/search?search=50mm+rubber+speed+bump'
    },

    {
        id: 7043,
        name: 'Portable Folding Aircraft Wheel Chock',
        category: 'wheel-chocks',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',

        price: 160000,
        inStock: true,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330013/Astonic-Mart/Products/traffic%20safety/Portable_Folding_Aircraft_Wheel_Chock.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330013/Astonic-Mart/Products/traffic%20safety/Portable_Folding_Aircraft_Wheel_Chock-2.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330013/Astonic-Mart/Products/traffic%20safety/Portable_Folding_Aircraft_Wheel_Chock-3.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330013/Astonic-Mart/Products/traffic%20safety/Portable_Folding_Aircraft_Wheel_Chock-4.webp'
        ],

        description: 'Portable folding aircraft wheel chock designed to prevent unintended movement of parked aircraft during maintenance, loading, unloading, and ground operations. The foldable design allows easy transportation and storage.',

        specification: `
Type: Folding Aircraft Wheel Chock
Material: Heavy-Duty Rubber Composite
Color: Black with Yellow Reflective Center Strip
Design: Foldable
Application: Aircraft Ground Handling
Weather Resistant: Yes
Portable: Yes
High Visibility: Yes

Accessories:
Carrying Rope
Reflective Safety Strip
`,

        features: `
• Prevents aircraft wheel movement
• Foldable design for easy storage
• High-visibility yellow center strip
• Heavy-duty rubber construction
• Suitable for airport ground operations
• Durable and weather resistant
• Easy to deploy and remove
• Lightweight and portable
`,

        showSimilar: true
    },


    {
        id: 7044,
        name: 'Heavy Duty Plastic Wheel Chock',
        category: 'wheel-chocks',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',

        price: 39800,
        inStock: true,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330011/Astonic-Mart/Products/traffic%20safety/plastic_wheel_choke.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330009/Astonic-Mart/Products/traffic%20safety/plastic_wheel_choke-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330009/Astonic-Mart/Products/traffic%20safety/plastic_wheel_choke-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330009/Astonic-Mart/Products/traffic%20safety/plastic_wheel_choke-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330009/Astonic-Mart/Products/traffic%20safety/plastic_wheel_choke-5.jpg'
        ],

        description: 'Heavy-duty plastic wheel chock designed to prevent unintended vehicle movement during parking, loading, maintenance, and transportation operations. Manufactured from durable high-strength plastic for excellent resistance to weather, oil, and chemicals.',

        specification: `
Type: Wheel Chock
Material: High-Strength Plastic
Color: Yellow
Design: Hollow Lightweight Construction
Application: Cars, Trucks, Trailers, Forklifts and Industrial Equipment
Weather Resistant: Yes
Oil Resistant: Yes
Chemical Resistant: Yes
Portable: Yes
High Visibility: Yes

Accessories:
Integrated Carry Handle
High-Visibility Safety Finish
`,

        features: `
• Prevents vehicle rollaway
• Durable plastic construction
• Lightweight yet strong design
• High-visibility yellow color
• Resistant to weather and chemicals
• Easy to carry and position
• Suitable for trucks and trailers
• Ideal for workshops and industrial sites
• Low maintenance
• Long service life
`,

        showSimilar: true
    },

    {
        id: 7045,
        name: '3 Channel Cable Ramp Protector',
        category: 'cable-ramps',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',

        brand: 'Generic',

        price: 77000,
        inStock: true,



        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329961/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329963/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329966/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329965/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps-5.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329963/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329961/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329965/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps-6.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329965/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps-7.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329965/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps-8.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329969/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps-9.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329962/Astonic-Mart/Products/traffic%20safety/3_channels_cable_ramps-10.jpg'
        ],

        description: 'The 3 Channel Cable Ramp Protector is designed to protect electrical cables, hoses, wires, and pipes from damage caused by pedestrian and vehicle traffic. Constructed from heavy-duty rubber with a high-visibility yellow lid, it is ideal for construction sites, warehouses, factories, events, parking areas, and industrial facilities.',

        specification: `
Type: Cable Ramp Protector
Channels: 3
Material: Heavy-Duty Rubber
Cover Material: High-Visibility PVC / Rubber Lid
Color: Black Base with Yellow Cover
Load Capacity: Heavy-Duty Vehicle Traffic
Application: Cable and Hose Protection
Surface: Anti-Slip
Weather Resistant: Yes
Oil Resistant: Yes
UV Resistant: Yes

Channel Dimensions:
3 x Cable Channels

Suitable For:
Power Cables
Extension Cords
Data Cables
Air Hoses
Water Hoses

Accessories:
Integrated Hinged Cover
Anti-Slip Surface
`,

        features: `
• Three cable protection channels
• High-visibility yellow safety cover
• Heavy-duty rubber construction
• Protects cables from vehicle traffic
• Anti-slip surface for pedestrian safety
• Suitable for indoor and outdoor use
• Weather and oil resistant
• Easy cable installation
• Durable industrial design
• Ideal for construction sites and events
`,

        showSimilar: true
    },


    {
        id: 7046,
        name: "Heavy-Duty Rubber Corner Guard",
        category: 'cable-ramps',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: "Generic",
        price: 45000, // Update with your selling price


        images: [
            "https://res.cloudinary.com/taus5tit/image/upload/v1786329996/Astonic-Mart/Products/traffic%20safety/Heavy-Duty_Rubber_Corner_Guard.webp",
            "https://res.cloudinary.com/taus5tit/image/upload/v1786329996/Astonic-Mart/Products/traffic%20safety/Heavy-Duty_Rubber_Corner_Guard-2.jpg",
            "https://res.cloudinary.com/taus5tit/image/upload/v1786330000/Astonic-Mart/Products/traffic%20safety/Heavy-Duty_Rubber_Corner_Guard-3.jpg",
            "https://res.cloudinary.com/taus5tit/image/upload/v1786330001/Astonic-Mart/Products/traffic%20safety/Heavy-Duty_Rubber_Corner_Guard-4.jpg",
            "https://res.cloudinary.com/taus5tit/image/upload/v1786330000/Astonic-Mart/Products/traffic%20safety/Heavy-Duty_Rubber_Corner_Guard-5.jpg",
            "https://res.cloudinary.com/taus5tit/image/upload/v1786330000/Astonic-Mart/Products/traffic%20safety/Heavy-Duty_Rubber_Corner_Guard-6.jpg"
        ],
        description: `
The Heavy-Duty Rubber Corner Guard is designed to protect building corners, columns, walls, and vehicles from impact damage in parking garages, warehouses, factories, loading bays, and commercial facilities. Manufactured from high-density industrial rubber with bright yellow reflective panels, it absorbs impacts while improving visibility in low-light conditions.
`,

        specification: `
Brand: Generic
Product Type: Heavy-Duty Rubber Corner Guard
Material: High-Density Industrial Rubber
Color: Black with Yellow Reflective Reflectors
Shape: Right-Angle Corner Protector
Installation Type: Wall Mounted
Mounting Holes: Pre-Drilled
Weather Resistant: Yes
UV Resistant: Yes
Oil Resistant: Yes
Water Resistant: Yes
Impact Resistance: Heavy-Duty
Application: Indoor & Outdoor

Suitable For:
• Parking Garage Columns
• Concrete Pillars
• Warehouse Corners
• Building Edges
• Loading Bays
• Basement Car Parks
• Industrial Facilities

Accessories Included:
• Rubber Corner Guard
• Pre-drilled Mounting Holes
(Note: Mounting bolts may be sold separately.)
`,

        features: `
• Heavy-duty industrial rubber construction
• High-impact shock absorption
• Bright yellow reflective panels for high visibility
• Protects vehicles and building corners from collision damage
• Resistant to weather, UV rays, water, and oil
• Durable and long-lasting
• Easy wall installation
• Suitable for indoor and outdoor environments
• Ideal for parking lots, warehouses, factories, and commercial buildings
• Helps reduce maintenance and repair costs
`,

        inStock: true,
        showSimilar: true
    },

    {
        id: 7047, // Replace with your product ID
        name: "MD3010II High Sensitivity Underground Metal Detector",
        category: 'metal-detectors',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: "Generic",
        price: 580000, // Add your selling price

        images: [
            "https://res.cloudinary.com/taus5tit/image/upload/v1786330002/Astonic-Mart/Products/traffic%20safety/MD3010II_High_Sensitivity_Underground_Metal_Detector.jpg",
            "https://res.cloudinary.com/taus5tit/image/upload/v1786330002/Astonic-Mart/Products/traffic%20safety/MD3010II_High_Sensitivity_Underground_Metal_Detector-2.jpg",
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330002/Astonic-Mart/Products/traffic%20safety/MD3010II_High_Sensitivity_Underground_Metal_Detector-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330002/Astonic-Mart/Products/traffic%20safety/MD3010II_High_Sensitivity_Underground_Metal_Detector-4.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330005/Astonic-Mart/Products/traffic%20safety/MD3010II_High_Sensitivity_Underground_Metal_Detector-5.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330005/Astonic-Mart/Products/traffic%20safety/MD3010II_High_Sensitivity_Underground_Metal_Detector-6.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330005/Astonic-Mart/Products/traffic%20safety/MD3010II_High_Sensitivity_Underground_Metal_Detector-7.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330005/Astonic-Mart/Products/traffic%20safety/MD3010II_High_Sensitivity_Underground_Metal_Detector-8.jpg'
        ],

        description: `The MD3010II High Sensitivity Underground Metal Detector is a lightweight and easy-to-use detector designed to locate buried metallic objects. It features adjustable sensitivity, audio and visual target indication, and an ergonomic design for comfortable operation. Suitable for general-purpose metal detection, educational activities, and professional inspection applications.`,

        specification: `
• Product Type: Underground Metal Detector
• Model: MD3010II
• Detection Technology: VLF (Very Low Frequency)
• Adjustable Sensitivity
• Audio Detection Alert
• Visual Target Indicator
• Waterproof Search Coil
• Adjustable Stem Length
• Ergonomic Arm Support
• Lightweight Construction
• Battery Powered
• Color: Yellow/Black
• Suitable for Outdoor Use
• Accessories: 1 × MD3010II Metal Detector, 1 × Waterproof Search Coil, 1 × Adjustable Stem, 1 × Arm Rest, User Manual
`,

        features: `
• High-sensitivity metal detection
• Adjustable sensitivity for different environments
• Waterproof search coil for use on wet ground
• Audio and visual indication when metal is detected
• Comfortable ergonomic handle and arm support
• Adjustable shaft for different user heights
• Lightweight and portable design
• Simple controls for easy operation
• Suitable for inspection, maintenance, educational activities, and general-purpose metal detection
`,

        model: "MD3010II",

        inStock: true,
        showSimilar: true
    },


    {
        id: 7048, // Replace with your product ID
        name: "Portable Hand Crank Emergency Siren with Tripod Stand",
        category: 'emergency-alert-systems',
        group: 'fire and traffic safety',
        parentCategory: 'fire safety',
        brand: "Generic",
        price: 230000,

        images: [
            "https://res.cloudinary.com/taus5tit/image/upload/v1786306419/Astonic-Mart/Products/emergency%20equipment/Portable_Hand_Crank_Emergency_Siren_with_Tripod_Stand-4.jpg",
            "https://res.cloudinary.com/taus5tit/image/upload/v1786306417/Astonic-Mart/Products/emergency%20equipment/Portable_Hand_Crank_Emergency_Siren_with_Tripod_Stand-2.jpg",
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306418/Astonic-Mart/Products/emergency%20equipment/Portable_Hand_Crank_Emergency_Siren_with_Tripod_Stand-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306420/Astonic-Mart/Products/emergency%20equipment/Portable_Hand_Crank_Emergency_Siren_with_Tripod_Stand-5.jpg'
        ],

        description: `The Portable Hand Crank Emergency Siren is a high-audibility warning device designed for emergency alerts, evacuation procedures, disaster response, security operations, and industrial safety applications. The siren generates a powerful alarm sound through manual operation and is mounted on a sturdy tripod stand for stable deployment in both indoor and outdoor environments.`,

        specification: `
• Product Type: Emergency Warning Siren
• Operation Type: Manual Hand Crank
• Mounting Type: Portable Tripod Stand
• Sound Output: High-Intensity Audible Alarm
• Material: Steel and Heavy-Duty Metal Components
• Portable Design
• Weather-Resistant Construction
• Suitable for Indoor and Outdoor Use
• Stable Tripod Base
• Easy Deployment and Transportation
• Applications: Emergency Warning, Disaster Response, Evacuation Alert, Industrial Safety, Security Operations, Community Alert Systems
• Accessories: Emergency Siren Unit, Hand Crank Handle, Tripod Stand
`,

        features: `
• Produces loud emergency warning signal
• No electricity required
• Portable and easy to deploy
• Durable metal construction
• Suitable for emergency preparedness
• Reliable manual operation
• Stable tripod mounting system
• Ideal for factories, schools, construction sites, warehouses, and public facilities
`
        ,

        inStock: true,
        showSimilar: true
    },

    {
        id: 7049, // Replace with your product ID
        name: "Blue Safety Cone ",
        category: "Traffic Safety",
        parentCategory: "Traffic Safety",
        childCategory: "Traffic Cones",
        brand: "Generic",
        price: 7500,

        images: [
            "https://res.cloudinary.com/taus5tit/image/upload/v1786329954/Astonic-Mart/Products/traffic%20safety/100cm_traffic_cones-2.webp",
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329976/Astonic-Mart/Products/traffic%20safety/blue_color_safety_cone-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329978/Astonic-Mart/Products/traffic%20safety/blue_color_safety_cone-1.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329976/Astonic-Mart/Products/traffic%20safety/blue_color_safety_cone-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786329976/Astonic-Mart/Products/traffic%20safety/blue_color_safety_cone-4.jpg'
        ],

        description: `The Blue Safety Cone with Reflective Collar is a durable traffic safety device designed to improve visibility and guide pedestrians or vehicles in restricted and hazardous areas. Manufactured from premium flexible PVC, it features high-intensity reflective collars for maximum visibility during both daytime and nighttime operations. Ideal for traffic management, construction sites, parking areas, warehouses, factories, airports, schools, and event venues.`,

        specification: `
• Product Type: Safety Traffic Cone
• Material: Premium Flexible PVC
• Color: Blue
• Reflective Bands: High-Intensity Reflective Collar
• Base Type: Heavy-Duty Square Base
• Weather Resistant: Yes
• UV Resistant: Yes
• Water Resistant: Yes
• Flexible & Impact Resistant: Yes
• High Visibility: Day & Night
• Suitable for Indoor & Outdoor Use

• Available Sizes:
  - 450mm (18")
  - 700mm (28")
  - 750mm (30")
  - 900mm (36")

• Accessories:
  - None
`,

        features: `
• Bright blue color for clear hazard identification
• Reflective collar enhances nighttime visibility
• Flexible PVC construction resists cracking and deformation
• Heavy square base provides excellent stability
• Lightweight and easy to transport
• Resistant to rain, sunlight, and harsh weather conditions
• Suitable for roads, construction sites, warehouses, factories, schools, airports, parking lots, and crowd control
• Easy to stack and store
`,

        variations: [
            {
                size: '45cm (18")',
                price: 7500,
                inStock: true
            },
            {
                size: '70cm (28")',
                price: 15500,
                inStock: true
            },
            {
                size: '90cm (36")',
                price: 26000,
                inStock: true
            }
        ],

        inStock: true,
        showSimilar: true
    },

    {
        id: 7050, // Replace with your product ID
        name: "Yellow Safety Cone with Reflective Collar",
        category: 'traffic-cones',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: "Generic",
        price: 7500,


        images: [
            "https://res.cloudinary.com/taus5tit/image/upload/v1786330044/Astonic-Mart/Products/traffic%20safety/yellow_color_safety_cone.webp",
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330044/Astonic-Mart/Products/traffic%20safety/yellow_color_safety_cone-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330047/Astonic-Mart/Products/traffic%20safety/yellow_color_safety_cone-3.png',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330052/Astonic-Mart/Products/traffic%20safety/yellow_color_safety_cone-4.png'
        ],

        description: `The Yellow Safety Cone with Reflective Collar is a high-visibility traffic safety device designed to warn motorists, pedestrians, and workers of temporary hazards, restricted areas, and work zones. Constructed from premium flexible PVC, it features a durable square base and high-intensity reflective collars for excellent visibility during both daytime and nighttime operations. Ideal for roads, construction sites, warehouses, factories, schools, airports, parking lots, and event management.`,

        specification: `
• Product Type: Safety Traffic Cone
• Material: Premium Flexible PVC
• Color: Yellow
• Reflective Bands: High-Intensity Reflective Collar
• Base Type: Heavy-Duty Square Base
• UV Resistant: Yes
• Weather Resistant: Yes
• Water Resistant: Yes
• Flexible & Impact Resistant: Yes
• High Visibility: Day & Night
• Suitable for Indoor & Outdoor Use

• Available Sizes:
  - 45cm (18")
  - 70cm (28")
  - 90cm (36")

• Accessories:
  - None
`,

        features: `
• Bright yellow color provides maximum daytime visibility
• Reflective collar enhances nighttime safety
• Heavy-duty flexible PVC resists cracking and deformation
• Stable square base minimizes tipping in windy conditions
• Lightweight and easy to carry, deploy, and stack
• UV, water, and weather resistant for long outdoor service life
• Suitable for traffic control, construction, warehouses, parking lots, schools, airports, and public events
• Reusable and easy to clean
`,

        variations: [
            {
                size: '45cm (18")',
                price: 7500,
                inStock: true
            },
            {
                size: '70cm (28")',
                price: 15500,
                inStock: true
            },
            {
                size: '90cm (36")',
                price: 25000,
                inStock: true
            }
        ],

        inStock: true,
        showSimilar: true
    },

    {
        id: 7051,
        name: '25kg DCP Fire Extinguisher With Wheels',
        category: 'fire-extinguishers',
        group: 'fire and traffic safety',
        parentCategory: 'fire safety',
        brand: 'Generic',
        showSimilar: true,

        price: 230000,


        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306565/Astonic-Mart/Products/fireblanketsandextinguishers/25kg_DCP_Fire_Extinguisher-1.webp',

        ],

        inStock: true,

        description: 'Heavy-duty 25kg DCP (Dry Chemical Powder) Fire Extinguisher suitable for Class A, B, and C fires. Ideal for industrial facilities, warehouses, workshops, construction sites, and commercial buildings. Features a durable steel cylinder, wheeled design for easy mobility, and a long discharge hose for safe operation.',

        specification: `
  - Product Name: 25kg DCP Fire Extinguisher
  - Type: Wheeled Portable Fire Extinguisher
  - Extinguishing Agent: Dry Chemical Powder (ABC Powder)
  - Capacity: 25 kg
  - Fire Rating: Suitable for Class A, B & C Fires
  - Cylinder Material: Mild Steel
  - Design: Wheeled with Hose and Nozzle
  - Discharge Time: Approx. 30-50 seconds
  - Application: Industrial, Commercial, Warehouses, Workshops

  Accessories Included
  - 25kg DCP Fire Extinguisher with Wheels
  - Discharge Hose with Nozzle
  - Mounting Bracket / Stand (if applicable)
  - Safety Pin and Inspection Tag
  - User Instruction Label
  `,

        features: `
  - Large 25kg capacity for high-risk areas
  - Effective against Class A (solid), B (liquid), and C (electrical) fires
  - Wheeled design for easy transportation
  - Durable steel body with corrosion-resistant paint
  - Long flexible hose for safe distance operation
  - Essential safety equipment for industrial and commercial environments
  `
    },

    {
        id: 7052,
        name: 'Fire Stop Aerosol Fire Extinguisher Spray',
        category: 'fire-extinguishers',
        group: 'fire and traffic safety',
        parentCategory: 'fire safety',
        brand: 'Fire Stop',
        showSimilar: true,

        price: 15000,


        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306569/Astonic-Mart/Products/fireblanketsandextinguishers/Fire_Stop_Aerosol_Fire_Extinguisher_Spray.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306570/Astonic-Mart/Products/fireblanketsandextinguishers/Fire_Stop_Aerosol_Fire_Extinguisher_Spray-2.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306573/Astonic-Mart/Products/fireblanketsandextinguishers/Fire_Stop_Aerosol_Fire_Extinguisher_Spray-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306574/Astonic-Mart/Products/fireblanketsandextinguishers/Fire_Stop_Aerosol_Fire_Extinguisher_Spray-4.webp',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306576/Astonic-Mart/Products/fireblanketsandextinguishers/Fire_Stop_Aerosol_Fire_Extinguisher_Spray-5.jpg'
        ],

        inStock: true,

        description: 'Fire Stop Aerosol Fire Extinguisher Spray – a compact and easy-to-use emergency fire suppression tool. Effective against small fires in vehicles, kitchens, offices, and homes. Available in 1000ml and 500ml sizes. Quick and convenient solution for early-stage fire control.',

        specification: `
  - Product Name: Fire Stop Aerosol Fire Extinguisher
  - Type: Portable Aerosol Spray Extinguisher
  - Available Sizes: 500ml and 1000ml
  - Suitable For: Class A, B, C & Electrical Fires (Small Fires)
  - Discharge Time: Fast acting
  - Features: Easy-grip nozzle with safety cap
  - Application: Cars, Homes, Offices, Workshops, Boats

  Variations
  - 1000ml: Larger capacity for bigger emergencies
  - 500ml: Compact and portable for everyday use
  `,

        features: `
  - Fast-acting aerosol fire suppression
  - Easy to use with one-hand operation
  - Compact and lightweight design
  - Effective on small fires (vehicles, electrical, etc.)
  - Available in two convenient sizes
  - Ideal for cars, homes, offices, and workshops
  `,

        variations: [
            {
                size: '1000ml',
                price: 15000,

                inStock: true
            },
            {
                size: '500ml',
                price: 10000,
                inStock: true
            }
        ]
    },

    {
        id: 7053,
        name: 'FlameSense 6L Wet Chemical Fire Extinguisher',
        category: 'fire-extinguishers',
        parentCategory: 'fire safety',
        group: 'fire and traffic safety',
        brand: 'FlameSense',
        price: 90000,
        model: '6L Wet Chemical',

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786306585/Astonic-Mart/Products/fireblanketsandextinguishers/FlameSense_6L_Wet_Chemical_Fire_Extinguisher.png',

        ],

        inStock: true,

        description: 'The FlameSense 6L Wet Chemical Fire Extinguisher is specially designed for combating Class F fires involving cooking oils and fats commonly found in commercial kitchens, restaurants, hotels, and food processing facilities. It also provides effective protection against Class A fires involving wood, paper, textiles, and other combustible materials. The wet chemical agent rapidly cools burning oil and forms a soap-like layer that prevents re-ignition, making it the safest extinguisher for deep-fat fryers and cooking equipment.',

        specification: `
Model: 6L Wet Chemical
Brand: FlameSense
Extinguishing Agent: Wet Chemical
Capacity: 6 Litres
Fire Rating: 13A / 75F
Fire Classes:
  • Class A – Wood, Paper, Cloth
  • Class F – Cooking Oils & Fats
Cylinder Material: Stainless Steel
Working Pressure: Stored Pressure
Discharge Time: Approx. 40–60 Seconds
Operating Temperature: +5°C to +60°C
Mounting: Wall Mount Bracket Compatible

Accessories:
• Discharge Hose
• Spray Nozzle
• Wall Mount Bracket
• Safety Pin & Tamper Seal
• Pressure Gauge
• User Instruction Label
`,

        features: `
Specially designed for commercial kitchen fires
Highly effective on cooking oil and fat fires (Class F)
Suitable for ordinary combustible fires (Class A)
Produces a cooling effect to reduce the risk of re-ignition
Durable corrosion-resistant stainless steel cylinder
Easy-to-read pressure gauge for quick inspection
Flexible discharge hose for accurate application
Simple squeeze-grip operation
Suitable for restaurants, hotels, canteens, food factories, bakeries, and industrial kitchens
Manufactured to meet international fire safety standards
`,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 7054,
        name: 'CHLORIDE UK Fire Alarm Cable 2 × 1.5mm² (100m)',
        category: 'smoke-and-fire-alarms',
        parentCategory: 'fire safety',
        group: 'fire and traffic safety',
        brand: 'CHLORIDE UK',
        price: 180000,
        model: '2×1.5mm² Fire Alarm Cable',

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786331780/Astonic-Mart/Products/fireblanketsandextinguishers/CHLORIDE_UK_Fire_Alarm_Cable_2_1_5mm_100m.png',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786331758/Astonic-Mart/Products/fireblanketsandextinguishers/CHLORIDE_UK_Fire_Alarm_Cable_2_1_5mm_100m.webp',

        ],

        inStock: true,

        description: 'The CHLORIDE UK Fire Alarm Cable is a high-quality 2-core 1.5mm² fire alarm cable designed for reliable signal transmission in fire detection and alarm systems. Manufactured with 100% stranded copper conductors, it provides excellent conductivity, flexibility, and durability for commercial, industrial, and residential fire alarm installations. The cable is ideal for connecting fire alarm control panels, smoke detectors, manual call points, sounders, and other fire safety devices.',

        specification: `
Model: 2×1.5mm² Fire Alarm Cable
Brand: CHLORIDE UK
Cable Type: Fire Alarm Cable
Number of Cores: 2
Conductor Size: 1.5mm²
Conductor Material: 100% Stranded Copper
Cable Length: 100 Metres
Insulation: Flame-Retardant PVC
Voltage Rating: 300/500V
Application: Fire Alarm & Detection Systems
Installation: Indoor Fixed Wiring

Accessories:
• 100m Cable Roll
`,

        features: `
100% stranded copper conductor for superior conductivity
Flame-retardant insulation for enhanced fire safety
Excellent flexibility for easy installation
Reliable signal transmission with low resistance
Suitable for smoke detectors and fire alarm systems
Ideal for commercial, industrial, and residential buildings
Durable outer sheath for long service life
100-metre roll reduces cable joints during installation
Compatible with most conventional and addressable fire alarm systems
Designed for professional electrical and fire safety installations
`,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 7055,
        name: 'VISION-UK 2 Core 2.5mm² Fire Resistance Cable LSZH (100m)',
        category: 'smoke-and-fire-alarms',
        parentCategory: 'fire safety',
        group: 'fire and traffic safety',
        brand: 'VISION-UK',
        price: 135000,
        model: 'LGV-SQ',

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786331802/Astonic-Mart/Products/fireblanketsandextinguishers/vision_UK_2_Core_2_5mm_Fire_Alarm_Cable_100m.png',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786331804/Astonic-Mart/Products/fireblanketsandextinguishers/CHLORIDE_UK_2_Core_2_5mm_Fire_Alarm_Cable_100m.jpg'

        ],

        inStock: true,

        description: 'The VISION-UK 2 Core 2.5mm² Fire Resistance Cable LSZH is a premium fire-resistant cable engineered for reliable power and signal transmission in fire alarm, emergency lighting, and life safety systems. Manufactured with Low Smoke Zero Halogen (LSZH) insulation, it minimizes smoke emission and eliminates corrosive halogen gases during a fire, making it ideal for public buildings and enclosed environments. Its high-quality copper conductors ensure excellent electrical performance, durability, and long service life.',

        specification: `
Model: LGV-SQ
Brand: VISION-UK
Cable Type: Fire Resistance Cable
Insulation Type: LSZH (Low Smoke Zero Halogen)
Number of Cores: 2
Conductor Size: 2 × 2.5mm²
Conductor Material: High Conductivity Copper
Cable Length: 100 Metres
Voltage Rating: 300/500V
Standards: CE & RoHS Compliant
Application:
• Fire Alarm Systems
• Emergency Lighting
• Smoke Detection Systems
• Manual Call Points
• Alarm Sounders
• Building Life Safety Systems

Accessories:
• 100 Metre Cable Roll
`,

        features: `
Low Smoke Zero Halogen (LSZH) construction for enhanced fire safety
Maintains circuit integrity during fire emergencies
2-core 2.5mm² cable for dependable power and signal transmission
High-conductivity copper conductors for low resistance
Produces minimal smoke and no corrosive halogen gases when exposed to fire
Excellent mechanical strength and flexibility for easy installation
Suitable for commercial, industrial, institutional, and residential fire protection systems
Ideal for hospitals, hotels, schools, shopping malls, airports, offices, and high-rise buildings
CE and RoHS compliant for quality and environmental standards
100-metre continuous roll reduces cable joints and simplifies installation
`,

        jumiaLink: 'https://www.jumia.com.ng/',
        kongaLink: 'https://www.konga.com/'
    },

    {
        id: 7056,
        name: 'Rechargeable LED Traffic Control Wand Signal Baton',
        category: 'traffic-control-systems',
        group: 'fire and traffic safety',
        parentCategory: 'traffic safety',
        brand: 'Generic',
        price: 19000,

        images: [
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330016/Astonic-Mart/Products/traffic%20safety/Signal_Baton.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330016/Astonic-Mart/Products/traffic%20safety/Signal_Baton-2.png',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330016/Astonic-Mart/Products/traffic%20safety/Signal_Baton-3.jpg',
            'https://res.cloudinary.com/taus5tit/image/upload/v1786330016/Astonic-Mart/Products/traffic%20safety/Signal_Baton-4.jpg'
        ],

        inStock: true,
        jumiaLink: '',
        kongaLink: '',

        description: `
Rechargeable LED Traffic Control Wand is a high-visibility signaling baton designed for traffic management, road safety, security operations, parking control, and emergency response. It produces a bright, long-range LED light that is clearly visible during both daytime and nighttime operations.

Constructed with a durable impact-resistant body and an ergonomic anti-slip handle, this traffic wand offers comfortable handling during extended use. It features multiple lighting modes including steady and flashing signals to effectively direct motorists and pedestrians.

The built-in rechargeable battery provides long operating hours, making it ideal for police officers, security personnel, event marshals, construction workers, airport ground crews, and parking attendants.
`,

        specification: `
  - Product Name: Rechargeable LED Traffic Control Wand
  - Type: LED Signal Baton
  - Light Colours: Red / Green
  - Material: ABS Plastic Handle with Polycarbonate Light Tube
  - LED Type: High Brightness LED
  - Lighting Modes: Steady Light, Flashing Light
  - Power Source: Rechargeable Lithium Battery
  - Charging Method: USB Charging
  - Working Time: Up to 8–12 Hours (Depending on Mode)
  - Charging Time: Approximately 3–4 Hours
  - Length: Approximately 54 cm
  - Handle: Non-slip Grip with Wrist Strap
  - Visibility Distance: Long-range High Visibility
  - Water Resistance: Splash Resistant
  - Suitable For: Day and Night Traffic Control
  `,

        features: `
  - Ultra-bright LED illumination
  - Available in Red and Green light options
  - Rechargeable lithium battery
  - Steady and flashing light modes
  - Long operating time
  - Lightweight and portable
  - Durable impact-resistant construction
  - Comfortable anti-slip handle
  - Wrist strap for secure handling
  - Excellent visibility during day and night
  - Ideal for traffic control and crowd management
  - Suitable for police, security personnel, parking attendants, event management, airports, construction sites and emergency responders
  `,


    },
]