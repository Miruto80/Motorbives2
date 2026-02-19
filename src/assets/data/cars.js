const cars = [
  {
    id: 1,
    name: 'PROMASTER 3500 EX',
    make: 'Ram',
    year: 2021,
    type: 'Vans',
    downpayment: 2500,
    financingprice: 23900,
    cashprice: 21900,
    mileage: 102000,
  descriptionEn: `- Clean Title
- 102,000 Miles
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
- 102,000 Millas
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
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (1).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (2).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (3).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (4).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (5).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (6).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (7).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (8).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (9).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (10).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (11).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (12).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (13).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (14).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 2 (15).webp',
    ],
  },
  {
    id: 2,
    name: 'EXPLORER SPORT 4x4',
    make: 'Ford',
    year: 2015,
    type: 'Suvs',
    downpayment: 2500,
    financingprice: 10900,
    cashprice: 9900,
    mileage: 137000,
    descriptionEn: `- Clean Title
- Perfect for the Family
- 137,000 Miles
- 3 Rows of Seats
- Leather Seats
- Touchscreen Display
- Backup Camera
- Dual Sunroof
- Cold & Hot A/C
- Immaculate Condition
- Luxury Rims
- Financing Available`,
    descriptionEs: `- Título Limpio
- Perfecto para la Familia
- 137,000 Millas
- 3 Filas de Asientos
- Asientos de Cuero
- Pantalla Táctil
- Cámara de Reversa
- Quemacocos Doble
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada
- Rines de Lujo
- Financiamiento Disponible`,
    images: [
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (1).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (2).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (3).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (4).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (5).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (6).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (7).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (8).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (9).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (10).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (11).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (12).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (13).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (14).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (15).webp',
      '/Suvs/FORD EXPLORER SPORT 4x4 2015 (16).webp',
    ],
  },
  {
    id: 3,
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
    id: 4,
    name: 'T-250 TRANSIT',
    make: 'Ford',
    year: 2019,
    type: 'Vans',
    downpayment: 2500,
    financingprice: 21900,
    cashprice: 20900,
    mileage: 145000,
    descriptionEn: `- Clean Title
- 145,000 Miles
- Perfect for Work
- Diesel Engine
- 3.2L 5-Cylinder
- Luxury Rims
- Tires 90%
- Cold & Hot A/C
- Backup Camera
- Touchscreen Display
- Leather Seats
- Immaculate Condition
- Financing Available
- Price: $21,900`,
descriptionEs: `- Título Limpio
- 145,000 Millas
- Perfecta para el Jale
- Motor Diésel
- 3.2L 5 Cilindros
- Rines de Lujo
- Llantas al 90%
- Aire Acondicionado Frío/Caliente
- Cámara de Reversa
- Pantalla Táctil
- Asientos de Cuero
- Condición Inmaculada
- Financiamiento Disponible
- Precio: $21,900`,
    images: [
      '/Vans/FORD T-250 TRANSIT 2019 (2).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (1).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (3).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (4).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (5).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (6).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (7).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (8).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (9).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (10).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (11).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (12).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (13).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (14).webp',
      '/Vans/FORD T-250 TRANSIT 2019 (15).webp',
    ],
  },
  {
    id: 5,
    name: 'PROMASTER 3500 EX',
    make: 'Ram',
    year: 2021,
    type: 'Vans',
    downpayment: 3000,
    financingprice: 27900,
    cashprice: 25900,
    mileage: 50000,
   descriptionEn: `- Clean Title
- 50,000 Miles
- Perfect for Work
- 3.6L 6-Cylinder Engine
- Touchscreen Display
- Backup Camera
- Luxury Rims
- Brand New Tires
- Cold & Hot A/C
- Immaculate Condition
- Financing Available`,
descriptionEs: `- Título Limpio
- 50,000 Millas
- Perfecto para el Jale
- Motor 3.6L 6 Cilindros
- Pantalla Táctil
- Cámara de Reversa
- Rines de Lujo
- Llantas Nuevas
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada
- Financiamiento Disponible`,
    images: [
      '/Vans/RAM PROMASTER 3500 EX 2021 (1).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (2).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (3).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (4).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (5).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (6).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (7).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (8).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (9).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (10).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (11).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (12).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (13).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (14).webp',
      '/Vans/RAM PROMASTER 3500 EX 2021 (15).webp',
    ],
  },
  {
    id: 6,
    name: '268',
    make: 'Hino',
    year: 2020,
    type: 'Box-trucks',
    downpayment: 6000,
    financingprice: 38900,
    cashprice: 36900,
    mileage: 163000,
    descriptionEn: `- Clean Title
- 26-Foot Box
- GVWR: 25,950 lbs (Non-CDL)
- Aluminum Lift Gate
- New Tires
- Allison Automatic Transmission
- Toyota 7.6L Diesel Engine
- Air Brakes
- Air Suspension
- 163,000 Miles
- Leather Seats
- Cold & Hot A/C
- One Owner
- Strong mechanical condition
- Financing Available`,
    descriptionEs: `- Título Limpio
- Caja de 26 Pies
- GVWR: 25,950 lbs (No CDL)
- Plataforma Elevadora de Aluminio
- Llantas Nuevas
- Transmisión Automática Allison
- Motor Toyota 7.6L Diesel
- Frenos de Aire
- Suspensión de Aire
- 163,000 Millas
- Asientos de Cuero
- Aire Acondicionado Frío/Caliente
- Un Solo Dueño
- Fuerte Condición Mecánica
- Financiamiento Disponible`,
    images: [
      '/Box-trucks/HINO 2020 268 26 FT (1).webp',
      '/Box-trucks/HINO 2020 268 26 FT (2).webp',
      '/Box-trucks/HINO 2020 268 26 FT (3).webp',
      '/Box-trucks/HINO 2020 268 26 FT (4).webp',
      '/Box-trucks/HINO 2020 268 26 FT (5).webp',
      '/Box-trucks/HINO 2020 268 26 FT (6).webp',
      '/Box-trucks/HINO 2020 268 26 FT (7).webp',
      '/Box-trucks/HINO 2020 268 26 FT (8).webp',
      '/Box-trucks/HINO 2020 268 26 FT (9).webp',
      '/Box-trucks/HINO 2020 268 26 FT (10).webp',
      '/Box-trucks/HINO 2020 268 26 FT (11).webp',
      '/Box-trucks/HINO 2020 268 26 FT (12).webp',
      '/Box-trucks/HINO 2020 268 26 FT (13).webp',
      '/Box-trucks/HINO 2020 268 26 FT (14).webp',
      '/Box-trucks/HINO 2020 268 26 FT (15).webp',
      '/Box-trucks/HINO 2020 268 26 FT (16).webp',
      '/Box-trucks/HINO 2020 268 26 FT (17).webp',
      '/Box-trucks/HINO 2020 268 26 FT (18).webp',
      '/Box-trucks/HINO 2020 268 26 FT (19).webp',
    ],
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
    name: 'ESCALADE PREMIUM 4X4',
    make: 'Cadillac',
    year: 2017,
    type: 'Suvs',
    downpayment: 3500,
    financingprice: 24900,
    cashprice: 23900,
    mileage: 144000,
    descriptionEn: `- Clean Title
- 144,000 Miles
- Perfect Family SUV
- Leather Seats
- 3rd Row Seating
- Touchscreen Display
- Rear Entertainment Screens
- Sunroof
- Backup Camera
- Luxury Rims
- Tires 90%
- Cold & Hot A/C
- Immaculate Condition
- Financing Available`,
    descriptionEs: `- Título Limpio
- 144,000 Millas
- SUV Familiar Perfecta
- Asientos de Cuero
- 3 Filas de Asientos
- Pantalla Táctil
- Pantallas de Entretenimiento Traseras
- Quemacocos
- Cámara de Reversa
- Rines de Lujo
- Llantas al 90%
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada
- Financiamiento Disponible`,
    images: [
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (7).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (1).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (2).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (3).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (4).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (5).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (6).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (8).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (9).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (10).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (11).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (12).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (13).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (14).webp',
      '/Suvs/2017 CADILLAC ESCALADE PREMIUM 4X4 (15).webp',
    ],
  },
  {
    id: 12,
    name: 'Civic Sport',
    make: 'Honda',
    year: 2022,
    type: 'Sedans',
    downpayment: 3000,
    financingprice: 17500,
    cashprice: 16500,
    mileage: 112000,
    descriptionEn: `- Clean Title
- 112,000 Miles
- Luxury Rims
- One Owner
- Brand New Tires
- Backup Camera
- Cold & Hot A/C
- Immaculate Condition
- Financing Available`,
descriptionEs: `- Título Limpio
- 112,000 Millas
- Rines de Lujo
- Un Solo Dueño
- Llantas Nuevas
- Cámara de Reversa
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada
- Financiamiento Disponible`,
    images: [
      '/Sedans/HONDA CIVIC SPORT 2022 (7).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (1).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (2).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (3).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (4).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (5).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (6).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (8).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (9).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (10).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (11).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (12).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (13).webp',
      '/Sedans/HONDA CIVIC SPORT 2022 (14).webp',
    ],
  },
  {
    id: 13,
    name: 'Forte',
    make: 'Kia',
    year: 2019,
    type: 'Sedans',
    downpayment: 3000,
    financingprice: 10500,
    cashprice: 9500,
    mileage: 137000,
    descriptionEn: `- Clean Title
- 137,000 Miles
- Cold & Hot A/C
- Touchscreen Display
- Backup Camera
- One Owner
- Immaculate Condition
- Financing Available`,
descriptionEs: `- Título Limpio
- 137,000 Millas
- Aire Acondicionado Frío/Caliente
- Pantalla Táctil
- Cámara de Reversa
- Un Solo Dueño
- Condición Inmaculada
- Financiamiento Disponible`,
    images: [
      '/Sedans/KIA FORTE FE 2019 (7).webp',
      '/Sedans/KIA FORTE FE 2019 (1).webp',
      '/Sedans/KIA FORTE FE 2019 (2).webp',
      '/Sedans/KIA FORTE FE 2019 (3).webp',
      '/Sedans/KIA FORTE FE 2019 (4).webp',
      '/Sedans/KIA FORTE FE 2019 (5).webp',
      '/Sedans/KIA FORTE FE 2019 (6).webp',
      '/Sedans/KIA FORTE FE 2019 (8).webp',
      '/Sedans/KIA FORTE FE 2019 (9).webp',
      '/Sedans/KIA FORTE FE 2019 (10).webp',
      '/Sedans/KIA FORTE FE 2019 (11).webp',
      '/Sedans/KIA FORTE FE 2019 (12).webp',
      '/Sedans/KIA FORTE FE 2019 (13).webp',
      '/Sedans/KIA FORTE FE 2019 (14).webp',
    ],
  },
  {
    id: 14,
    name: 'MV607',
    make: 'International',
    year: 2022,
    type: 'Box-trucks',
    downpayment: 6000,
    financingprice: 36900,
    cashprice: 35900,
    mileage: 204000,
   descriptionEn: `- Clean Title
- 204,000 Miles
- Cummins 6.7L Engine
- Allison Transmission
- Tires 90%
- Cold & Hot A/C
- Liftgate 100% Working
- Leather Seats
- Ready to Work
- Immaculate Condition
- Financing Available
- Price: $36,900`,
descriptionEs: `- Título Limpio
- 204,000 Millas
- Motor Cummins 6.7L
- Transmisión Allison
- Llantas al 90%
- Aire Acondicionado Frío/Caliente
- Liftgate al 100% Funcional
- Asientos de Cuero
- Listo para Trabajar
- Condición Inmaculada
- Financiamiento Disponible
- Precio: $36,900`,
    images: [
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (1).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (2).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (3).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (4).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (5).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (6).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (7).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (8).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (9).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (10).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (11).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (12).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (13).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (14).webp',
      '/Box-trucks/INTERNATIONAL MV607 2022 26FT (15).webp',
    ],
  },
];

export default cars;