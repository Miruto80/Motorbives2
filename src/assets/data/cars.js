const cars = [
  {
    id: 1,
    name: 'PROMASTER 3500 EX 4x4',
    make: 'Ram',
    year: 2020,
    type: 'Vans',
    downpayment: 3000,
    financingprice: 22900,
    cashprice: 20900,
    mileage: 111000,
    descriptionEn: `- Clean Title
- 111,000 Miles
- Perfect for Work
- 3.6L 6-Cylinder Engine
- Touchscreen Display
- Backup Camera
- Luxury Rims
- Tires 90%
- Cold & Hot A/C
- Immaculate Condition
- Financing Available`,
descriptionEs: `- Título Limpio
- 111,000 Millas
- Perfecto para el Jale
- Motor 3.6L 6 Cilindros
- Pantalla Táctil
- Cámara de Reversa
- Rines de Lujo
- Llantas al 90%
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada
- Financiamiento Disponible`,
    images: [
      '/Vans/RAM PROMASTER 3500 EX 2020 (1).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (2).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (3).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (4).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (5).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (6).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (7).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (8).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (9).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (10).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (11).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (12).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (13).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (14).webp',
      '/Vans/RAM PROMASTER 3500 EX 2020 (15).webp',
    ],
  },
  {
    id: 2,
    name: 'F150 LARIAT 4x4',
    make: 'Ford',
    year: 2018,
    type: 'Trucks',
    downpayment: 3000,
    financingprice: 28900,
    cashprice: 25000,
    mileage: 101000,
    descriptionEn: `- Clean Title
- Luxury Rims
- Brand New Tires
- Immaculate Condition
- One Owner
- Cold & Hot A/C
- Backup Camera
- Lifted Suspension
- 8-Cylinder 6.0L Engine
- Ready for Heavy-Duty Work
- Financing Available`,
    descriptionEs: `- Título Limpio
- Rines de Lujo
- Llantas Nuevas
- Condición Inmaculada
- Un Solo Dueño
- Aire Acondicionado Frío/Caliente
- Cámara de Reversa
- Suspensión Levantada
- Motor de 8 Cilindros 6.0L
- Listo para Trabajo Pesado
- Financiamiento Disponible`,
    images: [
      '/Trucks/FORD F150 LARIAT 4x4 2018 (1).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (2).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (3).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (4).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (5).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (6).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (7).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (8).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (9).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (10).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (11).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (12).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (13).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (14).webp',
      '/Trucks/FORD F150 LARIAT 4x4 2018 (15).webp',
    ],
  },
  {
    id: 3,
    name: 'EDGE TITANIUM',
    make: 'Ford',
    year: 2018,
    type: 'Suvs',
    downpayment: 2500,
    financingprice: 10900,
    cashprice: 9900,
    mileage: 135000,
    descriptionEn: `- Clean Title
- 135,000 Miles
- Backup Camera
- Leather Seats
- Luxury Rims
- Sunroof
- Cold & Hot A/C
- Brand New Tires
- One Owner
- Immaculate Condition
- Financing Available`,
    descriptionEs: `- Título Limpio
- 135,000 Millas
- Cámara de Reversa
- Asientos de Cuero
- Rines de Lujo
- Quemacocos
- Aire Acondicionado Frío/Caliente
- Llantas Nuevas
- Un Solo Dueño
- Condición Inmaculada
- Financiamiento Disponible`,
    images: [
      '/Suvs/FORD EDGE TITANIUM 2018 (1).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (2).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (3).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (4).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (5).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (6).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (7).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (8).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (9).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (10).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (11).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (12).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (13).webp',
      '/Suvs/FORD EDGE TITANIUM 2018 (14).webp',
    ],
  },
  {
    id: 4,
    name: 'ESCAPE SEL AWD',
    make: 'Ford',
    year: 2021,
    type: 'Suvs',
    downpayment: 2500,
    financingprice: 17900,
    cashprice: 16900,
    mileage: 74000,
    descriptionEn: `- Clean Title
- 74,000 Miles
- Luxury Rims
- Leather Seats
- Brand New Tires
- Cold & Hot A/C
- One Owner
- Backup Camera
- Financing Available`,
    descriptionEs: `- Título Limpio
- 74,000 Millas
- Rines de Lujo
- Asientos de Cuero
- Llantas Nuevas
- Aire Acondicionado Frío/Caliente
- Un Solo Dueño
- Cámara de Reversa
- Financiamiento Disponible`,
    images: [
      '/Suvs/FORD ESCAPE SEL AWD 2021 (1).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (2).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (3).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (4).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (5).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (6).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (7).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (8).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (9).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (10).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (11).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (12).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (13).webp',
      '/Suvs/FORD ESCAPE SEL AWD 2021 (14).webp',
    ],
  },
  {
    id: 5,
    name: 'COMPASS 4x4 LIMITED',
    make: 'Jeep',
    year: 2021,
    type: 'Suvs',
    downpayment: 2500,
    financingprice: 16900,
    cashprice: 15900,
    mileage: 96000,
    descriptionEn: `- Clean Title
- 96,000 Miles
- Leather Seats
- Luxury Rims
- Backup Camera
- Touchscreen Display
- One Owner
- Brand New Tires
- Cold & Hot A/C
- Financing Available`,
    descriptionEs: `- Título Limpio
- 96,000 Millas
- Asientos de Cuero
- Rines de Lujo
- Cámara de Reversa
- Pantalla Táctil
- Un Solo Dueño
- Llantas Nuevas
- Aire Acondicionado Frío/Caliente
- Financiamiento Disponible`,
    images: [
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (1).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (2).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (3).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (4).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (5).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (6).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (7).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (8).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (9).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (10).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (11).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (12).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (13).webp',
      '/Suvs/JEEP COMPASS 4x4 LIMITED 2021 (14).webp',
    ],
  },
  {
    id: 6,
    name: 'MALIBU LT',
    make: 'Chevrolet',
    year: 2020,
    type: 'Sedans',
    downpayment: 2500,
    financingprice: 11900,
    cashprice: 10900,
    mileage: 134000,
    descriptionEn: `- Clean Title
- 134,000 Miles
- Luxury Rims
- Brand New Tires
- Immaculate Condition
- One Owner
- Cold & Hot A/C
- Backup Camera
- Financing Available`,
    descriptionEs: `- Título Limpio
- 134,000 Millas
- Rines de Lujo
- Llantas Nuevas
- Condición Inmaculada
- Un Solo Dueño
- Aire Acondicionado Frío/Caliente
- Cámara de Reversa
- Financiamiento Disponible`,
    images: [
      '/Sedans/CHEVROLET MALIBU LT 2020 (2).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (1).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (3).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (4).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (5).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (6).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (7).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (8).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (9).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (10).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (11).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (12).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (13).webp',
      '/Sedans/CHEVROLET MALIBU LT 2020 (14).webp',
    ],
  },
  {
    id: 7,
    name: 'EQUINOX AWD LT',
    make: 'Chevrolet',
    year: 2020,
    type: 'Suvs',
    downpayment: 3500,
    financingprice: 13900,
    cashprice: 12900,
    mileage: 108000,
    descriptionEn: `- Clean Title
- 108,000 Miles
- Perfect Family SUV
- AWD
- Backup Camera
- Luxury Rims
- One Owner
- Cold & Hot A/C
- Tires 90%
- Immaculate Condition
- Financing Available`,
descriptionEs: `- Título Limpio
- 108,000 Millas
- SUV Perfecta para la Familia
- Tracción AWD
- Cámara de Reversa
- Rines de Lujo
- Un Solo Dueño
- Aire Acondicionado Frío/Caliente
- Llantas al 90%
- Condición Inmaculada
- Financiamiento Disponible`,
    images: [
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (1).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (4).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (5).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (2).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (3).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (6).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (7).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (8).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (9).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (10).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (11).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (12).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (13).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (14).webp',
      '/Suvs/CHEVROLET EQUINOX AWD LT 2020 (15).webp',
    ],
  },
  {
    id: 8,
    name: 'Fusion SE',
    make: 'Ford',
    year: 2017,
    type: 'Sedans',
    downpayment: 3000,
    financingprice: 8500,
    cashprice: 7500,
    mileage: 138000,
   descriptionEn: `- Clean Title
- 138,000 Miles
- Brand New Tires
- Luxury Rims
- Backup Camera
- One Owner
- Touchscreen Display
- Immaculate Condition
- Cold & Hot A/C
- Financing Available`,
descriptionEs: `- Título Limpio
- 138,000 Millas
- Llantas Nuevas
- Rines de Lujo
- Cámara de Reversa
- Un Solo Dueño
- Pantalla Táctil
- Condición Inmaculada
- Aire Acondicionado Frío/Caliente
- Financiamiento Disponible`,
    images: [
      '/Sedans/FORD FUSION SE 2017 (6).webp',
      '/Sedans/FORD FUSION SE 2017 (1).webp',
      '/Sedans/FORD FUSION SE 2017 (2).webp',
      '/Sedans/FORD FUSION SE 2017 (3).webp',
      '/Sedans/FORD FUSION SE 2017 (4).webp',
      '/Sedans/FORD FUSION SE 2017 (5).webp',
      '/Sedans/FORD FUSION SE 2017 (7).webp',
      '/Sedans/FORD FUSION SE 2017 (8).webp',
      '/Sedans/FORD FUSION SE 2017 (9).webp',
      '/Sedans/FORD FUSION SE 2017 (10).webp',
      '/Sedans/FORD FUSION SE 2017 (11).webp',
      '/Sedans/FORD FUSION SE 2017 (12).webp',
      '/Sedans/FORD FUSION SE 2017 (13).webp',
      '/Sedans/FORD FUSION SE 2017 (14).webp',
    ],
  },
   {
    id: 9,
    name: 'YUKON XL SLT 4x4',
    make: 'Gmc',
    year: 2020,
    type: 'Suvs',
    downpayment: 3500,
    financingprice: 20900,
    cashprice: 18900,
    mileage: 143000,
    descriptionEn: `- Clean Title
- 143,000 Miles
- Perfect Family SUV
- 4x4
- 5.3L V8 Engine
- Leather Seats
- 3rd Row Seating
- Touchscreen Display
- Backup Camera
- Luxury Rims
- Cold & Hot A/C
- Immaculate Condition`,
descriptionEs: `- Título Limpio
- 143,000 Millas
- SUV Perfecta para la Familia
- 4x4
- Motor V8 5.3L
- Asientos de Cuero
- 3 Filas de Asientos
- Pantalla Táctil
- Cámara de Reversa
- Rines de Lujo
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada`,
    images: [
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (1).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (4).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (5).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (2).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (3).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (6).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (7).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (8).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (9).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (10).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (11).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (12).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (13).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (14).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (15).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (16).webp',
      '/Suvs/GMC YUKON XL SLT 4x4 2020 (17).webp',
    ],
  },
   {
    id: 10,
    name: '268',
    make: 'Hino',
    year: 2020,
    type: 'Box-trucks',
    downpayment: 6000,
    financingprice: 49900,
    cashprice: 47900,
    mileage: 155000,
    descriptionEn: `- Clean Title
- 155,000 Miles
- Perfect for Transportation
- Cummins 6.7L Engine
- Allison Transmission
- No CDL Required
- 25,950 LBS GVW
- 26 FT Box
- Lift Gate
- Air Brakes
- Brand New Tires
- Leather Seats
- Cold & Hot A/C
- One Owner
- Financing Available`,
descriptionEs: `- Título Limpio
- 155,000 Millas
- Perfecto para el Transporte
- Motor Cummins 6.7L
- Transmisión Allison
- No Requiere CDL
- 25,950 LBS
- Caja de 26 FT
- Lift Gate
- Frenos de Aire
- Llantas Nuevas
- Asientos de Cuero
- Aire Acondicionado Frío/Caliente
- Un Solo Dueño
- Financiamiento Disponible`,
    images: [
      '/Box-trucks/HINO 2023 IL6 26 FT (1).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (4).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (5).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (2).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (3).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (6).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (7).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (8).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (9).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (10).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (11).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (12).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (13).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (14).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (15).webp',
    ],
  },
];

export default cars;