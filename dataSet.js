//this is where we will assemble and assign all our planetary data
//objects within objects prefearbly to make things simple

var dataSet = {
    sun: {
        sun: {
            moons: "N/A",
            diameter: "1392678.02 km",
            mass: "1.9891 × 10^30 kg",
            orbit: "N/A",
            surfaceArea: "6.09 × 10^12 km^2",
            distance: "N/A",
            img: "flatSun.png",
        }
    },
    planets: {
        Mercury: {
            moons: "0",
            diameter: "4880 km",
            mass: "3.3011 × 10^23 kg",
            orbit: "87.9691 days",
            surfaceArea: "7.48 × 10^7 km^2",
            distance: "~0.387098 AU",
            img: "planets/flatMercury.png",
        },
        Venus: {
            moons: "0",
            diameter: "12103.6±2.0 km",
            mass: "4.8675 × 10^24 kg",
            orbit: "224.701 days",
            surfaceArea: "4.6023 × 10^8 km^2",
            distance: "0.723332 AU",
            img: "planets/flatVenus.png",
        },
        Earth: {
            moons: "1",
            diameter: "12756.2 km",
            mass: "5.97237 x 10^24 kg",
            orbit: "365 days",
            surfaceArea: "510072000 km^2",
            distance: "1 AU",
            img: "planets/flatEarth.png",
        },
        Mars: {
            moons: "2",
            diameter: "6779.0 km",
            mass: "6.4171 × 10^23 kg",
            orbit: "686.971 days",
            surfaceArea: "144798500 km^2",
            distance: "1.523679 AU",
            img: "planets/flatMars.png",
        },
        Jupiter: {
                moons: "79",
                diameter: "139,822 km",
                mass: "1.8982 × 10^27 kg",
                orbit: "4,332.59 days",
                surfaceArea: "6.1419 × 10^10 km^2",
                distance: "5.2044 AU",
                img: "planets/flatJupiter.png",
        },
        Saturn: {
                moons: "82",
                diameter: "116,464 km",
                mass: "5.6834 × 10^26 kg",
                orbit: "10,759.22 days",
                surfaceArea: "4.27 × 10^10 km^2",
                distance: "9.5826 AU",
                img: "planets/zoomSaturn.png",
                Hrings: true,           //the only exception, do not change
        },
        Uranus: {
             moons: "27",
             diameter: "50724±14 km",
             mass: "(8.6810±0.0013) x 10^25 kg",
             orbit: "30,688.5 days",
             surfaceArea: "8.1156 × 10^9 km^2",
             distance: "19.2184 AU",
             img: "planets/flatUranus.png",
        },
        Neptune: {
             moons: "14",
             diameter: "49244±38 km",
             mass: "1.02413 × 10^26 kg",
             orbit: "60,182 days",
             surfaceArea: "7.6183 × 10^9 km^2",
             distance: "30.07 AU",
             img: "planets/flatNeptune.png",
        },
    },
    moons: {
        Earth: {
            'Moon': {
                moons: "N/A",
                diameter: "3474.3 km",
                mass: "7.342 × 10^22 kg",
                orbit: "27 days",
                surfaceArea: "3.793 × 10^7 km^2",
                distance: "384400 km",
                img: "moons/flatMoon.png",
            }
        },
        Mars: {
            'Phobos': {
                moons: "N/A",
                diameter: "22.2 km",
                mass: "1.08 × 10^16 kg",
                orbit: "7.66 hours",
                surfaceArea: "1,548 km^2",
                distance: "9377 km",
                img: "moons/flatPhobos.png",
            },
            'Deimos': {
                moons: "N/A",
                diameter: "12.6 km",
                mass: "2 × 10^15 kg",
                orbit: "30.35 hours",
                surfaceArea: "483 km^2",
                distance: "23,460 km",
                img: "moons/flatDeimos.png",
            }
        },
        Jupiter: {
            Metis: {
                moons: "N/A",
                diameter: "43.0 km",
                mass: "3.6 x 10^16 kg",
                orbit: "7.2552 hours",
                surfaceArea: "5800 km^2",
                distance: "23,463.2 km",
                img: "moons/flatDeimos.png"
            }
//saturn moon time
        },
        Saturn:{
            "S/2009s1":{
                moons: "N/A",
                diameter: "28.2 km",
                mass: "4.95 x 10 ^ 15 kg",
                orbit: "0.57505 days",
                surfaceArea: "1552.3732 km^2",
                distance: "134,000 km",
                img: "moons/flatPan.png"
            },
            Pan:{
                moons: "N/A",
                diameter: "28.2 km",
                mass: "4.95 x 10 ^ 15 kg",
                orbit: "0.57505 days",
                surfaceArea: "1552.3732 km^2",
                distance: "134,000 km",
                img: "moons/flatPan.png"

            },
            Daphnis:{
                moons: "N/A",
                diameter: "7.6 km",
                mass: "0.084 x 10 ^ 15 kg",
                orbit: "0.59408 days",
                surfaceArea: "181.46 km^2",
                distance: "136,500 km",
                img: "moons/flatDaphnis.png" 
            },
            Atlas:{
                moons: "N/A",
                diameter: "30.2 km",
                mass: "6.6 x 10 ^ 15 kg",
                orbit: "0.60169 days",
                surfaceArea: "2,865.26 km^2",
                distance: "139,006 km",
                img: "moons/flatAtlas.png" 
            },
            Prometheus :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Pandora :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Epimetheus :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Janus :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Aegaeon :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Mimas :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Methone :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Anthe :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Pallene :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Enceladus :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Tethys :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Telesto :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Calypso :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Dione :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Helene :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Polydeuces :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Rhea :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Titan :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Hyperion :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 

            },
            Iapetus :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Kiviuq :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Ijiraq :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Phoebe :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Paaliaq :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Skathi :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S37" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2007S2" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Albiorix :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Bebhionn :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S29" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Erriapus :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S31" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Skoll :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Siarnaq :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Tarqeq :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S13" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Hyrrokkin :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Tarvos :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Mundilfari :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2006S1" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Greip :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Jarnsaxa :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Bergelmir :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S17" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Narvi :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S20" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Suttungr :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Hati :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S12" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Farbauti :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S27" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Bestla :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2007S3" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Aegir :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S7" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S22" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Thrymr :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S30" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S23" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S25" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S32" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2006S3" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S38" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Kari :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S28" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Fenrir :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S35" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S21" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S24" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Loge :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Surtur :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S36" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Ymir :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S39" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S33" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            Fornjot :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S34" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
            "S/2004S26" :{
                moons: "N/A",
                diameter: "86.2 km",
                mass: "159.5 x 10 ^ 15 kg",
                orbit: "0.61299 days",
                surfaceArea: "23,343.42 km^2",
                distance: "139,000 km",
                img: "moons/flatPrometheus.png" 
            },
             
        }
    }
   
    }


