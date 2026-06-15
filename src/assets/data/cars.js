const cars = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    name: 'TRÁNSIT 350 XLT',
    make: 'Ford',
    year: 2019,
    type: 'Vans',
    downpayment: 3000,
    financingprice: 26900,
    cashprice: 24900,
    mileage: 30000,
  descriptionEn: `- Clean Title
- 30,000 Miles
- 15 Passenger Van
- Gasoline Engine
- One Owner
- Tires in Very Good Condition
- Cold & Hot A/C
- Immaculate Condition
- Financing Available
- Price: $28,900`,
descriptionEs: `- Título Limpio
- 30,000 Millas
- Van de 15 Pasajeros
- Motor a Gasolina
- Un Solo Dueño
- Llantas en Muy Buen Estado
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada
- Financiamiento Disponible
- Precio: $28,900`,
    images: [
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (2).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (1).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (3).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (4).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (5).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (6).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (7).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (8).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (9).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (10).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (11).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (12).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (13).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (14).webp',
      '/Vans/FORD TRÁNSIT 350 XLT 2019 (15).webp',
    ],
  },
  {
   id: 4,
    name: 'Civic Sport',
    make: 'Honda',
    year: 2024,
    type: 'Sedans',
    downpayment: 3000,
    financingprice: 25900,
    cashprice: 23900,
    mileage: 56000,
   descriptionEn: `- Clean Title
- 56,000 Miles
- Luxury Rims
- One Owner
- Brand New Tires
- Backup Camera
- Cold & Hot A/C
- Immaculate Condition
- Financing Available
- Price: $25,900`,
descriptionEs: `- Título Limpio
- 56,000 Millas
- Rines de Lujo
- Un Solo Dueño
- Llantas Nuevas
- Cámara de Reversa
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada
- Financiamiento Disponible
- Precio: $25,900`,
    images: [
      '/Sedans/HONDA CIVIC SPORT 2024 (1).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (2).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (3).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (4).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (5).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (6).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (7).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (8).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (9).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (10).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (11).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (12).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (13).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (14).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (15).webp',
      '/Sedans/HONDA CIVIC SPORT 2024 (16).webp',
    ],
  },
  {
   id: 5,
    name: 'Silverado Z71',
    make: 'Chevrolet',
    year: 2015,
    type: 'Trucks',
    downpayment: 3500,
    financingprice: 18900,
    cashprice: 16900,
    mileage: 140000,
 descriptionEn: `- Clean Title
- 140,000 Miles
- 4x4
- V8 Engine
- Backup Camera
- Touchscreen Display
- Luxury Rims
- Brand New Tires
- Cold & Hot A/C
- Immaculate Condition
- Financing Available`,
descriptionEs: `- Título Limpio
- 140,000 Millas
- 4x4
- Motor V8
- Cámara de Reversa
- Pantalla Táctil
- Rines de Lujo
- Llantas Nuevas
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada
- Financiamiento Disponible`,
    images: [
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (7).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (1).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (2).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (3).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (4).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (5).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (6).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (8).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (9).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (10).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (11).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (12).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (13).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (14).webp',
      '/Trucks/CHEVROLET SILVERADO Z71 2015 (15).webp',
    ],
  },
    {
   id: 6,
    name: '268 26 FT Refrigered',
    make: 'Hino',
    year: 2020,
    type: 'Box-trucks',
    downpayment: 6000,
    financingprice: 38900,
    cashprice: 36900,
    mileage: 164000,
 descriptionEn: `- Clean Title
- 164,000 Miles
- Refrigerated Box (Thermo King T-1080R)
- Perfect for Transportation
- Toyota 7.6L Engine
- Allison Transmission
- No CDL Required (25,950 LBS GVW)
- 26 FT Box
- Aluminum Lift Gate
- Air Suspension
- Air Brakes
- Brand New Tires
- Leather Seats
- Cold & Hot A/C
- One Owner
- Financing Available
- Price: $38,900`,
descriptionEs: `- Título Limpio
- 164,000 Millas
- Caja Refrigerada (Thermo King T-1080R)
- Perfecto para el Transporte
- Motor Toyota 7.6L
- Transmisión Allison
- No Requiere CDL (25,950 LBS)
- Caja de 26 FT
- Lift Gate de Aluminio
- Suspensión de Aire
- Frenos de Aire
- Llantas Nuevas
- Asientos de Cuero
- Aire Acondicionado Frío/Caliente
- Un Solo Dueño
- Financiamiento Disponible
- Precio: $38,900`,
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
    ],
  },
    {
   id: 7,
    name: 'M2 106 26 FT Refrigered',
    make: 'Freightliner',
    year: 2020,
    type: 'Box-trucks',
    downpayment: 6000,
    financingprice: 41900,
    cashprice: 39900,
    mileage: 158000,
 descriptionEn: `- Clean Title
- 158,000 Miles
- Refrigerated Box (Thermo King T-1080R)
- Perfect for Work
- Cummins Engine
- Allison Transmission
- No CDL Required
- 25,999 LBS GVW
- 26 FT Box
- Aluminum Lift Gate
- Air Suspension
- Air Brakes
- Brand New Tires
- Immaculate Condition
- Financing Available
- Price: $41,900`,
descriptionEs: `- Título Limpio
- 158,000 Millas
- Caja Refrigerada (Thermo King T-1080R)
- Perfecto para el Jale
- Motor Cummins
- Transmisión Allison
- No Requiere CDL
- 25,999 LBS
- Caja de 26 FT
- Lift Gate de Aluminio
- Suspensión de Aire
- Frenos de Aire
- Llantas Nuevas
- Condición Inmaculada
- Financiamiento Disponible
- Precio: $41,900`,
    images: [
      '/Box-trucks/FREIGHTLINER M2 106 2020 (1).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (2).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (3).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (4).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (5).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (6).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (7).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (8).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (9).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (10).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (11).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (12).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (13).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (14).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (15).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2020 (16).webp',
    ],
  },
    {
   id: 8,
    name: 'M2 106 26 FT Refrigered',
    make: 'Hino',
    year: 2023,
    type: 'Box-trucks',
    downpayment: 6000,
    financingprice: 55900,
    cashprice: 53900,
    mileage: 166000,
 descriptionEn: `- Clean Title
- 166,000 Miles
- Perfect for Transportation
- Cummins 6.7L Engine
- Allison Transmission
- Air Ride Suspension
- No CDL Required
- 25,950 LBS GVW
- 26 FT Box
- Lift Gate
- Air Brakes
- Brand New Tires
- Leather Seats
- Cold & Hot A/C
- One Owner
- Financing Available
- Price: $55,900`,
descriptionEs: `- Título Limpio
- 166,000 Millas
- Perfecto para el Transporte
- Motor Cummins 6.7L
- Transmisión Allison
- Suspensión de Aire (Air Ride)
- No Requiere CDL
- 25,950 LBS
- Caja de 26 FT
- Lift Gate
- Frenos de Aire
- Llantas Nuevas
- Asientos de Cuero
- Aire Acondicionado Frío/Caliente
- Un Solo Dueño
- Financiamiento Disponible
- Precio: $55,900`,
    images: [
      '/Box-trucks/HINO 2023 IL6 26 FT (2).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (1).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (3).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (4).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (5).webp',
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
      '/Box-trucks/HINO 2023 IL6 26 FT (16).webp',
      '/Box-trucks/HINO 2023 IL6 26 FT (17).webp',
    ],
  },
    {
   id: 9,
    name: 'M2 106 26 FT',
    make: 'Freightliner',
    year: 2019,
    type: 'Box-trucks',
    downpayment: 6000,
    financingprice: 36900,
    cashprice: 34900,
    mileage: 240000,
 descriptionEn: `- Clean Title
- 240,000 Miles
- Perfect for Work
- Cummins Engine
- No CDL Required
- 25,999 LBS GVW
- 26 FT Box
- Aluminum Lift Gate
- Air Suspension
- Air Brakes
- Brand New Tires
- Immaculate Condition
- Financing Available
- Price: $36,900`,
descriptionEs: `- Título Limpio
- 240,000 Millas
- Perfecto para el Jale
- Motor Cummins
- No Requiere CDL
- 25,999 LBS
- Caja de 26 FT
- Lift Gate de Aluminio
- Suspensión de Aire
- Frenos de Aire
- Llantas Nuevas
- Condición Inmaculada
- Financiamiento Disponible
- Precio: $36,900`,
    images: [
      '/Box-trucks/FREIGHTLINER M2 106 2019 (1).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (2).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (3).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (4).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (5).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (6).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (7).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (8).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (9).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (10).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (11).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (12).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (13).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (14).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (15).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (16).webp',
      '/Box-trucks/FREIGHTLINER M2 106 2019 (17).webp',
    ],
  },
    {
   id: 10,
    name: '4300 26 FT',
    make: 'International',
    year: 2018,
    type: 'Box-trucks',
    downpayment: 6000,
    financingprice: 37900,
    cashprice: 35900,
    mileage: 202000,
 descriptionEn: `- Clean Title
- 202,000 Miles
- Like New
- Cummins 6.7L Engine
- Air Ride Suspension
- Tires 90%
- Liftgate 100% Working
- Leather Seats
- Cold & Hot A/C
- Ready to Work
- Immaculate Condition
- Financing Available
- Price: $37,900`,
descriptionEs: `- Título Limpio
- 202,000 Millas
- Como Nuevo
- Motor Cummins 6.7L
- Suspensión de Aire
- Llantas al 90%
- Liftgate 100% Funcional
- Asientos de Cuero
- Aire Acondicionado Frío/Caliente
- Listo para Trabajar
- Condición Inmaculada
- Financiamiento Disponible
- Precio: $37,900`,
    images: [
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (1).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (2).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (3).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (4).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (5).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (6).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (7).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (8).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (9).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (10).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (11).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (12).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (13).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (14).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (15).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (16).webp',
      '/Box-trucks/INTERNATIONAL 4300 2018 26FT (17).webp',
    ],
  },
    {
   id: 11,
    name: 'MV 607 26 FT',
    make: 'International',
    year: 2021,
    type: 'Box-trucks',
    downpayment: 6000,
    financingprice: 50900,
    cashprice: 48900,
    mileage: 124000,
 descriptionEn: `- Clean Title
- 124,000 Miles
- Like New
- Cummins 6.7L Engine
- Allison Transmission
- Tires 90%
- Liftgate 100% Working
- Leather Seats
- Cold & Hot A/C
- Ready to Work
- Clean Carfax
- Immaculate Condition
- Financing Available
- Price: $50,900`,
descriptionEs: `- Título Limpio
- 124,000 Millas
- Como Nuevo
- Motor Cummins 6.7L
- Transmisión Allison
- Llantas al 90%
- Liftgate 100% Funcional
- Asientos de Cuero
- Aire Acondicionado Frío/Caliente
- Listo para Trabajar
- Carfax Completamente Limpio
- Condición Inmaculada
- Financiamiento Disponible
- Precio: $50,900`,
    images: [
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (1).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (2).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (3).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (4).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (5).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (6).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (7).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (8).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (9).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (10).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (11).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (12).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (13).webp',
      '/Box-trucks/INTERNATIONAL MV 607 2021 26FT (14).webp',
    ], //asdasd
  },
];

export default cars;