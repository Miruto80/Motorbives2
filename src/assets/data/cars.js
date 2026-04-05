const cars = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    name: 'SIERRA 350 DENALI SLT 4x4',
    make: 'Gmc',
    year: 2018,
    type: 'Trucks',
    downpayment: 3000,
    financingprice: 38999,
    cashprice: 36999,
    mileage: 138000,
    descriptionEn: `- Clean Title
- Heavy-Duty Truck
- 6.6L V8 Engine
- Allison Transmission
- Leather Seats
- Touchscreen Display
- Backup Camera
- Luxury Rims
- Tires in Good Condition
- Cold & Hot A/C
- Immaculate Condition
- Financing Available`,
descriptionEs: `- Título Limpio
- Camioneta de Trabajo Pesado
- Motor V8 6.6L
- Transmisión Allison
- Asientos de Cuero
- Pantalla Táctil
- Cámara de Reversa
- Rines de Lujo
- Llantas en Buen Estado
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada
- Financiamiento Disponible`,
    images: [
      '/Trucks/GMC SIERRA 350 DENALI SLT 4x4 2018 (6).webp',
      '/Trucks/GMC SIERRA 350 DENALI SLT 4x4 2018 (7).webp',
      '/Trucks/GMC SIERRA 350 DENALI SLT 4x4 2018 (4).webp',
      '/Trucks/GMC SIERRA 350 DENALI SLT 4x4 2018 (5).webp',
      '/Trucks/GMC SIERRA 350 DENALI SLT 4x4 2018 (1).webp',
      '/Trucks/GMC SIERRA 350 DENALI SLT 4x4 2018 (2).webp',
      '/Trucks/GMC SIERRA 350 DENALI SLT 4x4 2018 (3).webp',
      '/Trucks/GMC SIERRA 350 DENALI SLT 4x4 2018 (8).webp',
      '/Trucks/GMC SIERRA 350 DENALI SLT 4x4 2018 (9).webp',
    ],
  },
  {
    id: 9,
    name: 'TRÁNSIT 350 XLT',
    make: 'Ford',
    year: 2019,
    type: 'Vans',
    downpayment: 3000,
    financingprice: 28900,
    cashprice: 26900,
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
    id: 10,
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
    id: 11,
    name: 'Elantra SEL',
    make: 'Hyundai',
    year: 2021,
    type: 'Sedans',
    downpayment: 3000,
    financingprice: 13900,
    cashprice: 11900,
    mileage: 123000,
  descriptionEn: `- Clean Title
- 123,000 Miles
- Luxury Rims
- Backup Camera
- Brand New Tires
- Cold & Hot A/C
- Touchscreen Display
- Immaculate Condition
- Financing Available
- Price: $13,900`,
descriptionEs: `- Título Limpio
- 123,000 Millas
- Rines de Lujo
- Cámara de Reversa
- Llantas Nuevas
- Aire Acondicionado Frío/Caliente
- Pantalla Táctil
- Condición Inmaculada
- Financiamiento Disponible
- Precio: $13,900`,
    images: [
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (4).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (1).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (2).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (3).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (5).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (6).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (7).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (8).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (9).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (10).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (11).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (12).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (13).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (14).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (15).webp',
      '/Sedans/HYUNDAI ELANTRA SEL 2021 (16).webp',
    ],
  },
   {
    id: 12,
    name: 'Corolla SE',
    make: 'Toyota',
    year: 2022,
    type: 'Sedans',
    downpayment: 3000,
    financingprice: 16500,
    cashprice: 14500,
    mileage: 124000,
  descriptionEn: `- Clean Title
- 124,000 Miles
- Luxury Rims
- Touchscreen Display
- Backup Camera
- Tires in Good Condition
- Cold & Hot A/C
- Immaculate Condition
- One Owner
- Financing Available
- Price: $16,500`,
descriptionEs: `- Título Limpio
- 124,000 Millas
- Rines de Lujo
- Pantalla Táctil
- Cámara de Reversa
- Llantas en Buen Estado
- Aire Acondicionado Frío/Caliente
- Condición Inmaculada
- Un Solo Dueño
- Financiamiento Disponible
- Precio: $16,500`,
    images: [
      '/Sedans/TOYOTA COROLLA SE 2022 (1).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (2).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (3).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (4).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (5).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (7).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (6).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (8).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (9).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (10).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (11).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (12).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (13).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (14).webp',
      '/Sedans/TOYOTA COROLLA SE 2022 (15).webp',
    ],
  },
];

export default cars;