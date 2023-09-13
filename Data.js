//Array of all countries with alpha-2 and alpha-3 codes, currencies, capitals, continents, phone numbers and currency symbols
const countries = [
    {name: "Afghanistan",code: "AF",phone: 93,symbol: "؋",capital: "Kabul",currency: "AFN",continent_code: "AS",alpha_3: "AFG"},
    {name: "Aland Islands",code: "AX",phone: 358,symbol: "€",capital: "Mariehamn",currency: "EUR",continent_code: "EU",alpha_3: "ALA"},
    {name: "Albania",code: "AL",phone: 355,symbol: "Lek",capital: "Tirana",currency: "ALL",continent_code: "EU",alpha_3: "ALB"},
    {name: "Algeria",code: "DZ",phone: 213,symbol: "دج",capital: "Algiers",currency: "DZD",continent_code: "AF",alpha_3: "DZA"},
    {name: "American Samoa",code: "AS",phone: 1684,symbol: "$",capital: "Pago Pago",currency: "USD",continent_code: "OC",alpha_3: "ASM"},
    {name: "Andorra",code: "AD",phone: 376,symbol: "€",capital: "Andorra la Vella",currency: "EUR",continent_code: "EU",alpha_3: "AND"},
    {name: "Angola",code: "AO",phone: 244,symbol: "Kz",capital: "Luanda",currency: "AOA",continent_code: "AF",alpha_3: "AGO"},
    {name: "Anguilla",code: "AI",phone: 1264,symbol: "$",capital: "The Valley",currency: "XCD",continent_code: "NA",alpha_3: "AIA"},
    {name: "Antarctica",code: "AQ",phone: 672,symbol: "$",capital: "Antarctica",currency: "AAD",continent_code: "AN",alpha_3: "ATA"},
    {name: "Antigua and Barbuda",code: "AG",phone: 1268,symbol: "$",capital: "St. John's",currency: "XCD",continent_code: "NA",alpha_3: "ATG"},
    {name: "Argentina",code: "AR",phone: 54,symbol: "$",capital: "Buenos Aires",currency: "ARS",continent_code: "SA",alpha_3: "ARG"},
    {name: "Armenia",code: "AM",phone: 374,symbol: "֏",capital: "Yerevan",currency: "AMD",continent_code: "AS",alpha_3: "ARM"},
    {name: "Aruba",code: "AW",phone: 297,symbol: "ƒ",capital: "Oranjestad",currency: "AWG",continent_code: "NA",alpha_3: "ABW"},
    {name: "Australia",code: "AU",phone: 61,symbol: "$",capital: "Canberra",currency: "AUD",continent_code: "OC",alpha_3: "AUS"},
    {name: "Austria",code: "AT",phone: 43,symbol: "€",capital: "Vienna",currency: "EUR",continent_code: "EU",alpha_3: "AUT"},
    {name: "Azerbaijan",code: "AZ",phone: 994,symbol: "m",capital: "Baku",currency: "AZN",continent_code: "AS",alpha_3: "AZE"},
    {name: "Bahamas",code: "BS",phone: 1242,symbol: "B$",capital: "Nassau",currency: "BSD",continent_code: "NA",alpha_3: "BHS"},
    {name: "Bahrain",code: "BH",phone: 973,symbol: ".د.ب",capital: "Manama",currency: "BHD",continent_code: "AS",alpha_3: "BHR"},
    {name: "Bangladesh",code: "BD",phone: 880,symbol: "৳",capital: "Dhaka",currency: "BDT",continent_code: "AS",alpha_3: "BGD"},
    {name: "Barbados",code: "BB",phone: 1246,symbol: "Bds$",capital: "Bridgetown",currency: "BBD",continent_code: "NA",alpha_3: "BRB"},
    {name: "Belarus",code: "BY",phone: 375,symbol: "Br",capital: "Minsk",currency: "BYN",continent_code: "EU",alpha_3: "BLR"},
    {name: "Belgium",code: "BE",phone: 32,symbol: "€",capital: "Brussels",currency: "EUR",continent_code: "EU",alpha_3: "BEL"},
    {name: "Belize",code: "BZ",phone: 501,symbol: "$",capital: "Belmopan",currency: "BZD",continent_code: "NA",alpha_3: "BLZ"},
    {name: "Benin",code: "BJ",phone: 229,symbol: "CFA",capital: "Porto-Novo",currency: "XOF",continent_code: "AF",alpha_3: "BEN"},
    {name: "Bermuda",code: "BM",phone: 1441,symbol: "$",capital: "Hamilton",currency: "BMD",continent_code: "NA",alpha_3: "BMU"},
    {name: "Bhutan",code: "BT",phone: 975,symbol: "Nu.",capital: "Thimphu",currency: "BTN",continent_code: "AS",alpha_3: "BTN"},
    {name: "Bolivia",code: "BO",phone: 591,symbol: "Bs.",capital: "Sucre",currency: "BOB",continent_code: "SA",alpha_3: "BOL"},
    {name: "Bonaire, Sint Eustatius and Saba",code: "BQ",phone: 599,symbol: "$",capital: "Kralendijk",currency: "USD",continent_code: "NA",alpha_3: "BES"},
    {name: "Bosnia and Herzegovina",code: "BA",phone: 387,symbol: "KM",capital: "Sarajevo",currency: "BAM",continent_code: "EU",alpha_3: "BIH"},
    {name: "Botswana",code: "BW",phone: 267,symbol: "P",capital: "Gaborone",currency: "BWP",continent_code: "AF",alpha_3: "BWA"},
    {name: "Bouvet Island",code: "BV",phone: 55,symbol: "kr",capital: "",currency: "NOK",continent_code: "AN",alpha_3: "BVT"},
    {name: "Brazil",code: "BR",phone: 55,symbol: "R$",capital: "Brasilia",currency: "BRL",continent_code: "SA",alpha_3: "BRA"},
    {name: "British Indian Ocean Territory",code: "IO",phone: 246,symbol: "$",capital: "Diego Garcia",currency: "USD",continent_code: "AS",alpha_3: "IOT"},
    {name: "Brunei Darussalam",code: "BN",phone: 673,symbol: "B$",capital: "Bandar Seri Begawan",currency: "BND",continent_code: "AS",alpha_3: "BRN"},
    {name: "Bulgaria",code: "BG",phone: 359,symbol: "Лв.",capital: "Sofia",currency: "BGN",continent_code: "EU",alpha_3: "BGR"},
    {name: "Burkina Faso",code: "BF",phone: 226,symbol: "CFA",capital: "Ouagadougou",currency: "XOF",continent_code: "AF",alpha_3: "BFA"},
    {name: "Burundi",code: "BI",phone: 257,symbol: "FBu",capital: "Bujumbura",currency: "BIF",continent_code: "AF",alpha_3: "BDI"},
    {name: "Cambodia",code: "KH",phone: 855,symbol: "KHR",capital: "Phnom Penh",currency: "KHR",continent_code: "AS",alpha_3: "KHM"},
    {name: "Cameroon",code: "CM",phone: 237,symbol: "FCFA",capital: "Yaounde",currency: "XAF",continent_code: "AF",alpha_3: "CMR"},
    {name: "Canada",code: "CA",phone: 1,symbol: "$",capital: "Ottawa",currency: "CAD",continent_code: "NA",alpha_3: "CAN"},
    {name: "Cape Verde",code: "CV",phone: 238,symbol: "$",capital: "Praia",currency: "CVE",continent_code: "AF",alpha_3: "CPV"},
    {name: "Cayman Islands",code: "KY",phone: 1345,symbol: "$",capital: "George Town",currency: "KYD",continent_code: "NA",alpha_3: "CYM"},
    {name: "Central African Republic",code: "CF",phone: 236,symbol: "FCFA",capital: "Bangui",currency: "XAF",continent_code: "AF",alpha_3: "CAF"},
    {name: "Chad",code: "TD",phone: 235,symbol: "FCFA",capital: "N'Djamena",currency: "XAF",continent_code: "AF",alpha_3: "TCD"},
    {name: "Chile",code: "CL",phone: 56,symbol: "$",capital: "Santiago",currency: "CLP",continent_code: "SA",alpha_3: "CHL"},
    {name: "China",code: "CN",phone: 86,symbol: "¥",capital: "Beijing",currency: "CNY",continent_code: "AS",alpha_3: "CHN"},
    {name: "Christmas Island",code: "CX",phone: 61,symbol: "$",capital: "Flying Fish Cove",currency: "AUD",continent_code: "AS",alpha_3: "CXR"},
    {name: "Cocos (Keeling) Islands",code: "CC",phone: 672,symbol: "$",capital: "West Island",currency: "AUD",continent_code: "AS",alpha_3: "CCK"},
    {name: "Colombia",code: "CO",phone: 57,symbol: "$",capital: "Bogota",currency: "COP",continent_code: "SA",alpha_3: "COL"},
    {name: "Comoros",code: "KM",phone: 269,symbol: "CF",capital: "Moroni",currency: "KMF",continent_code: "AF",alpha_3: "COM"},
    {name: "Congo",code: "CG",phone: 242,symbol: "FC",capital: "Brazzaville",currency: "XAF",continent_code: "AF",alpha_3: "COG"},
    {name: "Congo, Democratic Republic of the Congo",code: "CD",phone: 242,symbol: "FC",capital: "Kinshasa",currency: "CDF",continent_code: "AF",alpha_3: "COD"},
    {name: "Cook Islands",code: "CK",phone: 682,symbol: "$",capital: "Avarua",currency: "NZD",continent_code: "OC",alpha_3: "COK"},
    {name: "Costa Rica",code: "CR",phone: 506,symbol: "₡",capital: "San Jose",currency: "CRC",continent_code: "NA",alpha_3: "CRI"},
    {name: "Cote D'Ivoire",code: "CI",phone: 225,symbol: "CFA",capital: "Yamoussoukro",currency: "XOF",continent_code: "AF",alpha_3: "CIV"},
    {name: "Croatia",code: "HR",phone: 385,symbol: "kn",capital: "Zagreb",currency: "HRK",continent_code: "EU",alpha_3: "HRV"},
    {name: "Cuba",code: "CU",phone: 53,symbol: "$",capital: "Havana",currency: "CUP",continent_code: "NA",alpha_3: "CUB"},
    {name: "Curacao",code: "CW",phone: 599,symbol: "ƒ",capital: "Willemstad",currency: "ANG",continent_code: "NA",alpha_3: "CUW"},
    {name: "Cyprus",code: "CY",phone: 357,symbol: "€",capital: "Nicosia",currency: "EUR",continent_code: "AS",alpha_3: "CYP"},
    {name: "Czech Republic",code: "CZ",phone: 420,symbol: "Kč",capital: "Prague",currency: "CZK",continent_code: "EU",alpha_3: "CZE"},
    {name: "Denmark",code: "DK",phone: 45,symbol: "Kr.",capital: "Copenhagen",currency: "DKK",continent_code: "EU",alpha_3: "DNK"},
    {name: "Djibouti",code: "DJ",phone: 253,symbol: "Fdj",capital: "Djibouti",currency: "DJF",continent_code: "AF",alpha_3: "DJI"},
    {name: "Dominica",code: "DM",phone: 1767,symbol: "$",capital: "Roseau",currency: "XCD",continent_code: "NA",alpha_3: "DMA"},
    {name: "Dominican Republic",code: "DO",phone: 1809,symbol: "$",capital: "Santo Domingo",currency: "DOP",continent_code: "NA",alpha_3: "DOM"},
    {name: "Ecuador",code: "EC",phone: 593,symbol: "$",capital: "Quito",currency: "USD",continent_code: "SA",alpha_3: "ECU"},
    {name: "Egypt",code: "EG",phone: 20,symbol: "ج.م",capital: "Cairo",currency: "EGP",continent_code: "AF",alpha_3: "EGY"},
    {name: "El Salvador",code: "SV",phone: 503,symbol: "$",capital: "San Salvador",currency: "USD",continent_code: "NA",alpha_3: "SLV"},
    {name: "Equatorial Guinea",code: "GQ",phone: 240,symbol: "FCFA",capital: "Malabo",currency: "XAF",continent_code: "AF",alpha_3: "GNQ"},
    {name: "Eritrea",code: "ER",phone: 291,symbol: "Nfk",capital: "Asmara",currency: "ERN",continent_code: "AF",alpha_3: "ERI"},
    {name: "Estonia",code: "EE",phone: 372,symbol: "€",capital: "Tallinn",currency: "EUR",continent_code: "EU",alpha_3: "EST"},
    {name: "Ethiopia",code: "ET",phone: 251,symbol: "Nkf",capital: "Addis Ababa",currency: "ETB",continent_code: "AF",alpha_3: "ETH"},
    {name: "Falkland Islands (Malvinas)",code: "FK",phone: 500,symbol: "£",capital: "Stanley",currency: "FKP",continent_code: "SA",alpha_3: "FLK"},
    {name: "Faroe Islands",code: "FO",phone: 298,symbol: "Kr.",capital: "Torshavn",currency: "DKK",continent_code: "EU",alpha_3: "FRO"},
    {name: "Fiji",code: "FJ",phone: 679,symbol: "FJ$",capital: "Suva",currency: "FJD",continent_code: "OC",alpha_3: "FJI"},
    {name: "Finland",code: "FI",phone: 358,symbol: "€",capital: "Helsinki",currency: "EUR",continent_code: "EU",alpha_3: "FIN"},
    {name: "France",code: "FR",phone: 33,symbol: "€",capital: "Paris",currency: "EUR",continent_code: "EU",alpha_3: "FRA"},
    {name: "French Guiana",code: "GF",phone: 594,symbol: "€",capital: "Cayenne",currency: "EUR",continent_code: "SA",alpha_3: "GUF"},
    {name: "French Polynesia",code: "PF",phone: 689,symbol: "₣",capital: "Papeete",currency: "XPF",continent_code: "OC",alpha_3: "PYF"},
    {name: "French Southern Territories",code: "TF",phone: 262,symbol: "€",capital: "Port-aux-Francais",currency: "EUR",continent_code: "AN",alpha_3: "ATF"},
    {name: "Gabon",code: "GA",phone: 241,symbol: "FCFA",capital: "Libreville",currency: "XAF",continent_code: "AF",alpha_3: "GAB"},
    {name: "Gambia",code: "GM",phone: 220,symbol: "D",capital: "Banjul",currency: "GMD",continent_code: "AF",alpha_3: "GMB"},
    {name: "Georgia",code: "GE",phone: 995,symbol: "ლ",capital: "Tbilisi",currency: "GEL",continent_code: "AS",alpha_3: "GEO"},
    {name: "Germany",code: "DE",phone: 49,symbol: "€",capital: "Berlin",currency: "EUR",continent_code: "EU",alpha_3: "DEU"},
    {name: "Ghana",code: "GH",phone: 233,symbol: "GH₵",capital: "Accra",currency: "GHS",continent_code: "AF",alpha_3: "GHA"},
    {name: "Gibraltar",code: "GI",phone: 350,symbol: "£",capital: "Gibraltar",currency: "GIP",continent_code: "EU",alpha_3: "GIB"},
    {name: "Greece",code: "GR",phone: 30,symbol: "€",capital: "Athens",currency: "EUR",continent_code: "EU",alpha_3: "GRC"},
    {name: "Greenland",code: "GL",phone: 299,symbol: "Kr.",capital: "Nuuk",currency: "DKK",continent_code: "NA",alpha_3: "GRL"},
    {name: "Grenada",code: "GD",phone: 1473,symbol: "$",capital: "St. George's",currency: "XCD",continent_code: "NA",alpha_3: "GRD"},
    {name: "Guadeloupe",code: "GP",phone: 590,symbol: "€",capital: "Basse-Terre",currency: "EUR",continent_code: "NA",alpha_3: "GLP"},
    {name: "Guam",code: "GU",phone: 1671,symbol: "$",capital: "Hagatna",currency: "USD",continent_code: "OC",alpha_3: "GUM"},
    {name: "Guatemala",code: "GT",phone: 502,symbol: "Q",capital: "Guatemala City",currency: "GTQ",continent_code: "NA",alpha_3: "GTM"},
    {name: "Guernsey",code: "GG",phone: 44,symbol: "£",capital: "St Peter Port",currency: "GBP",continent_code: "EU",alpha_3: "GGY"},
    {name: "Guinea",code: "GN",phone: 224,symbol: "FG",capital: "Conakry",currency: "GNF",continent_code: "AF",alpha_3: "GIN"},
    {name: "Guinea-Bissau",code: "GW",phone: 245,symbol: "CFA",capital: "Bissau",currency: "XOF",continent_code: "AF",alpha_3: "GNB"},
    {name: "Guyana",code: "GY",phone: 592,symbol: "$",capital: "Georgetown",currency: "GYD",continent_code: "SA",alpha_3: "GUY"},
    {name: "Haiti",code: "HT",phone: 509,symbol: "G",capital: "Port-au-Prince",currency: "HTG",continent_code: "NA",alpha_3: "HTI"},
    {name: "Heard Island and McDonald Islands",code: "HM",phone: 0,symbol: "$",capital: "",currency: "AUD",continent_code: "AN",alpha_3: "HMD"},
    {name: "Holy See (Vatican City State)",code: "VA",phone: 39,symbol: "€",capital: "Vatican City",currency: "EUR",continent_code: "EU",alpha_3: "VAT"},
    {name: "Honduras",code: "HN",phone: 504,symbol: "L",capital: "Tegucigalpa",currency: "HNL",continent_code: "NA",alpha_3: "HND"},
    {name: "Hong Kong",code: "HK",phone: 852,symbol: "$",capital: "Hong Kong",currency: "HKD",continent_code: "AS",alpha_3: "HKG"},
    {name: "Hungary",code: "HU",phone: 36,symbol: "Ft",capital: "Budapest",currency: "HUF",continent_code: "EU",alpha_3: "HUN"},
    {name: "Iceland",code: "IS",phone: 354,symbol: "kr",capital: "Reykjavik",currency: "ISK",continent_code: "EU",alpha_3: "ISL"},
    {name: "India",code: "IN",phone: 91,symbol: "₹",capital: "New Delhi",currency: "INR",continent_code: "AS",alpha_3: "IND"},
    {name: "Indonesia",code: "ID",phone: 62,symbol: "Rp",capital: "Jakarta",currency: "IDR",continent_code: "AS",alpha_3: "IDN"},
    {name: "Iran, Islamic Republic of",code: "IR",phone: 98,symbol: "﷼",capital: "Tehran",currency: "IRR",continent_code: "AS",alpha_3: "IRN"},
    {name: "Iraq",code: "IQ",phone: 964,symbol: "د.ع",capital: "Baghdad",currency: "IQD",continent_code: "AS",alpha_3: "IRQ"},
    {name: "Ireland",code: "IE",phone: 353,symbol: "€",capital: "Dublin",currency: "EUR",continent_code: "EU",alpha_3: "IRL"},
    {name: "Isle of Man",code: "IM",phone: 44,symbol: "£",capital: "Douglas, Isle of Man",currency: "GBP",continent_code: "EU",alpha_3: "IMN"},
    {name: "Israel",code: "IL",phone: 972,symbol: "₪",capital: "Jerusalem",currency: "ILS",continent_code: "AS",alpha_3: "ISR"},
    {name: "Italy",code: "IT",phone: 39,symbol: "€",capital: "Rome",currency: "EUR",continent_code: "EU",alpha_3: "ITA"},
    {name: "Jamaica",code: "JM",phone: 1876,symbol: "J$",capital: "Kingston",currency: "JMD",continent_code: "NA",alpha_3: "JAM"},
    {name: "Japan",code: "JP",phone: 81,symbol: "¥",capital: "Tokyo",currency: "JPY",continent_code: "AS",alpha_3: "JPN"},
    {name: "Jersey",code: "JE",phone: 44,symbol: "£",capital: "Saint Helier",currency: "GBP",continent_code: "EU",alpha_3: "JEY"},
    {name: "Jordan",code: "JO",phone: 962,symbol: "ا.د",capital: "Amman",currency: "JOD",continent_code: "AS",alpha_3: "JOR"},
    {name: "Kazakhstan",code: "KZ",phone: 7,symbol: "лв",capital: "Astana",currency: "KZT",continent_code: "AS",alpha_3: "KAZ"},
    {name: "Kenya",code: "KE",phone: 254,symbol: "KSh",capital: "Nairobi",currency: "KES",continent_code: "AF",alpha_3: "KEN"},
    {name: "Kiribati",code: "KI",phone: 686,symbol: "$",capital: "Tarawa",currency: "AUD",continent_code: "OC",alpha_3: "KIR"},
    {name: "Korea, Democratic People's Republic of",code: "KP",phone: 850,symbol: "₩",capital: "Pyongyang",currency: "KPW",continent_code: "AS",alpha_3: "PRK"},
    {name: "Korea, Republic of",code: "KR",phone: 82,symbol: "₩",capital: "Seoul",currency: "KRW",continent_code: "AS",alpha_3: "KOR"},
    {name: "Kosovo",code: "XK",phone: 383,symbol: "€",capital: "Pristina",currency: "EUR",continent_code: "EU",alpha_3: "XKX"},
    {name: "Kuwait",code: "KW",phone: 965,symbol: "ك.د",capital: "Kuwait City",currency: "KWD",continent_code: "AS",alpha_3: "KWT"},
    {name: "Kyrgyzstan",code: "KG",phone: 996,symbol: "лв",capital: "Bishkek",currency: "KGS",continent_code: "AS",alpha_3: "KGZ"},
    {name: "Lao People's Democratic Republic",code: "LA",phone: 856,symbol: "₭",capital: "Vientiane",currency: "LAK",continent_code: "AS",alpha_3: "LAO"},
    {name: "Latvia",code: "LV",phone: 371,symbol: "€",capital: "Riga",currency: "EUR",continent_code: "EU",alpha_3: "LVA"},
    {name: "Lebanon",code: "LB",phone: 961,symbol: "£",capital: "Beirut",currency: "LBP",continent_code: "AS",alpha_3: "LBN"},
    {name: "Lesotho",code: "LS",phone: 266,symbol: "L",capital: "Maseru",currency: "LSL",continent_code: "AF",alpha_3: "LSO"},
    {name: "Liberia",code: "LR",phone: 231,symbol: "$",capital: "Monrovia",currency: "LRD",continent_code: "AF",alpha_3: "LBR"},
    {name: "Libyan Arab Jamahiriya",code: "LY",phone: 218,symbol: "د.ل",capital: "Tripolis",currency: "LYD",continent_code: "AF",alpha_3: "LBY"},
    {name: "Liechtenstein",code: "LI",phone: 423,symbol: "CHf",capital: "Vaduz",currency: "CHF",continent_code: "EU",alpha_3: "LIE"},
    {name: "Lithuania",code: "LT",phone: 370,symbol: "€",capital: "Vilnius",currency: "EUR",continent_code: "EU",alpha_3: "LTU"},
    {name: "Luxembourg",code: "LU",phone: 352,symbol: "€",capital: "Luxembourg",currency: "EUR",continent_code: "EU",alpha_3: "LUX"},
    {name: "Macao",code: "MO",phone: 853,symbol: "$",capital: "Macao",currency: "MOP",continent_code: "AS",alpha_3: "MAC"},
    {name: "Macedonia, the Former Yugoslav Republic of",code: "MK",phone: 389,symbol: "ден",capital: "Skopje",currency: "MKD",continent_code: "EU",alpha_3: "MKD"},
    {name: "Madagascar",code: "MG",phone: 261,symbol: "Ar",capital: "Antananarivo",currency: "MGA",continent_code: "AF",alpha_3: "MDG"},
    {name: "Malawi",code: "MW",phone: 265,symbol: "MK",capital: "Lilongwe",currency: "MWK",continent_code: "AF",alpha_3: "MWI"},
    {name: "Malaysia",code: "MY",phone: 60,symbol: "RM",capital: "Kuala Lumpur",currency: "MYR",continent_code: "AS",alpha_3: "MYS"},
    {name: "Maldives",code: "MV",phone: 960,symbol: "Rf",capital: "Male",currency: "MVR",continent_code: "AS",alpha_3: "MDV"},
    {name: "Mali",code: "ML",phone: 223,symbol: "CFA",capital: "Bamako",currency: "XOF",continent_code: "AF",alpha_3: "MLI"},
    {name: "Malta",code: "MT",phone: 356,symbol: "€",capital: "Valletta",currency: "EUR",continent_code: "EU",alpha_3: "MLT"},
    {name: "Marshall Islands",code: "MH",phone: 692,symbol: "$",capital: "Majuro",currency: "USD",continent_code: "OC",alpha_3: "MHL"},
    {name: "Martinique",code: "MQ",phone: 596,symbol: "€",capital: "Fort-de-France",currency: "EUR",continent_code: "NA",alpha_3: "MTQ"},
    {name: "Mauritania",code: "MR",phone: 222,symbol: "MRU",capital: "Nouakchott",currency: "MRO",continent_code: "AF",alpha_3: "MRT"},
    {name: "Mauritius",code: "MU",phone: 230,symbol: "₨",capital: "Port Louis",currency: "MUR",continent_code: "AF",alpha_3: "MUS"},
    {name: "Mayotte",code: "YT",phone: 262,symbol: "€",capital: "Mamoudzou",currency: "EUR",continent_code: "AF",alpha_3: "MYT"},
    {name: "Mexico",code: "MX",phone: 52,symbol: "$",capital: "Mexico City",currency: "MXN",continent_code: "NA",alpha_3: "MEX"},
    {name: "Micronesia, Federated States of",code: "FM",phone: 691,symbol: "$",capital: "Palikir",currency: "USD",continent_code: "OC",alpha_3: "FSM"},
    {name: "Moldova, Republic of",code: "MD",phone: 373,symbol: "L",capital: "Chisinau",currency: "MDL",continent_code: "EU",alpha_3: "MDA"},
    {name: "Monaco",code: "MC",phone: 377,symbol: "€",capital: "Monaco",currency: "EUR",continent_code: "EU",alpha_3: "MCO"},
    {name: "Mongolia",code: "MN",phone: 976,symbol: "₮",capital: "Ulan Bator",currency: "MNT",continent_code: "AS",alpha_3: "MNG"},
    {name: "Montenegro",code: "ME",phone: 382,symbol: "€",capital: "Podgorica",currency: "EUR",continent_code: "EU",alpha_3: "MNE"},
    {name: "Montserrat",code: "MS",phone: 1664,symbol: "$",capital: "Plymouth",currency: "XCD",continent_code: "NA",alpha_3: "MSR"},
    {name: "Morocco",code: "MA",phone: 212,symbol: "DH",capital: "Rabat",currency: "MAD",continent_code: "AF",alpha_3: "MAR"},
    {name: "Mozambique",code: "MZ",phone: 258,symbol: "MT",capital: "Maputo",currency: "MZN",continent_code: "AF",alpha_3: "MOZ"},
    {name: "Myanmar",code: "MM",phone: 95,symbol: "K",capital: "Nay Pyi Taw",currency: "MMK",continent_code: "AS",alpha_3: "MMR"},
    {name: "Namibia",code: "NA",phone: 264,symbol: "$",capital: "Windhoek",currency: "NAD",continent_code: "AF",alpha_3: "NAM"},
    {name: "Nauru",code: "NR",phone: 674,symbol: "$",capital: "Yaren",currency: "AUD",continent_code: "OC",alpha_3: "NRU"},
    {name: "Nepal",code: "NP",phone: 977,symbol: "₨",capital: "Kathmandu",currency: "NPR",continent_code: "AS",alpha_3: "NPL"},
    {name: "Netherlands",code: "NL",phone: 31,symbol: "€",capital: "Amsterdam",currency: "EUR",continent_code: "EU",alpha_3: "NLD"},
    {name: "Netherlands Antilles",code: "AN",phone: 599,symbol: "NAf",capital: "Willemstad",currency: "ANG",continent_code: "NA",alpha_3: "ANT"},
    {name: "New Caledonia",code: "NC",phone: 687,symbol: "₣",capital: "Noumea",currency: "XPF",continent_code: "OC",alpha_3: "NCL"},
    {name: "New Zealand",code: "NZ",phone: 64,symbol: "$",capital: "Wellington",currency: "NZD",continent_code: "OC",alpha_3: "NZL"},
    {name: "Nicaragua",code: "NI",phone: 505,symbol: "C$",capital: "Managua",currency: "NIO",continent_code: "NA",alpha_3: "NIC"},
    {name: "Niger",code: "NE",phone: 227,symbol: "CFA",capital: "Niamey",currency: "XOF",continent_code: "AF",alpha_3: "NER"},
    {name: "Nigeria",code: "NG",phone: 234,symbol: "₦",capital: "Abuja",currency: "NGN",continent_code: "AF",alpha_3: "NGA"},
    {name: "Niue",code: "NU",phone: 683,symbol: "$",capital: "Alofi",currency: "NZD",continent_code: "OC",alpha_3: "NIU"},
    {name: "Norfolk Island",code: "NF",phone: 672,symbol: "$",capital: "Kingston",currency: "AUD",continent_code: "OC",alpha_3: "NFK"},
    {name: "Northern Mariana Islands",code: "MP",phone: 1670,symbol: "$",capital: "Saipan",currency: "USD",continent_code: "OC",alpha_3: "MNP"},
    {name: "Norway",code: "NO",phone: 47,symbol: "kr",capital: "Oslo",currency: "NOK",continent_code: "EU",alpha_3: "NOR"},
    {name: "Oman",code: "OM",phone: 968,symbol: ".ع.ر",capital: "Muscat",currency: "OMR",continent_code: "AS",alpha_3: "OMN"},
    {name: "Pakistan",code: "PK",phone: 92,symbol: "₨",capital: "Islamabad",currency: "PKR",continent_code: "AS",alpha_3: "PAK"},
    {name: "Palau",code: "PW",phone: 680,symbol: "$",capital: "Melekeok",currency: "USD",continent_code: "OC",alpha_3: "PLW"},
    {name: "Palestinian Territory, Occupied",code: "PS",phone: 970,symbol: "₪",capital: "East Jerusalem",currency: "ILS",continent_code: "AS",alpha_3: "PSE"},
    {name: "Panama",code: "PA",phone: 507,symbol: "B/.",capital: "Panama City",currency: "PAB",continent_code: "NA",alpha_3: "PAN"},
    {name: "Papua New Guinea",code: "PG",phone: 675,symbol: "K",capital: "Port Moresby",currency: "PGK",continent_code: "OC",alpha_3: "PNG"},
    {name: "Paraguay",code: "PY",phone: 595,symbol: "₲",capital: "Asuncion",currency: "PYG",continent_code: "SA",alpha_3: "PRY"},
    {name: "Peru",code: "PE",phone: 51,symbol: "S/.",capital: "Lima",currency: "PEN",continent_code: "SA",alpha_3: "PER"},
    {name: "Philippines",code: "PH",phone: 63,symbol: "₱",capital: "Manila",currency: "PHP",continent_code: "AS",alpha_3: "PHL"},
    {name: "Pitcairn",code: "PN",phone: 64,symbol: "$",capital: "Adamstown",currency: "NZD",continent_code: "OC",alpha_3: "PCN"},
    {name: "Poland",code: "PL",phone: 48,symbol: "zł",capital: "Warsaw",currency: "PLN",continent_code: "EU",alpha_3: "POL"},
    {name: "Portugal",code: "PT",phone: 351,symbol: "€",capital: "Lisbon",currency: "EUR",continent_code: "EU",alpha_3: "PRT"},
    {name: "Puerto Rico",code: "PR",phone: 1787,symbol: "$",capital: "San Juan",currency: "USD",continent_code: "NA",alpha_3: "PRI"},
    {name: "Qatar",code: "QA",phone: 974,symbol: "ق.ر",capital: "Doha",currency: "QAR",continent_code: "AS",alpha_3: "QAT"},
    {name: "Reunion",code: "RE",phone: 262,symbol: "€",capital: "Saint-Denis",currency: "EUR",continent_code: "AF",alpha_3: "REU"},
    {name: "Romania",code: "RO",phone: 40,symbol: "lei",capital: "Bucharest",currency: "RON",continent_code: "EU",alpha_3: "ROM"},
    {name: "Russian Federation",code: "RU",phone: 7,symbol: "₽",capital: "Moscow",currency: "RUB",continent_code: "AS",alpha_3: "RUS"},
    {name: "Rwanda",code: "RW",phone: 250,symbol: "FRw",capital: "Kigali",currency: "RWF",continent_code: "AF",alpha_3: "RWA"},
    {name: "Saint Barthelemy",code: "BL",phone: 590,symbol: "€",capital: "Gustavia",currency: "EUR",continent_code: "NA",alpha_3: "BLM"},
    {name: "Saint Helena",code: "SH",phone: 290,symbol: "£",capital: "Jamestown",currency: "SHP",continent_code: "AF",alpha_3: "SHN"},
    {name: "Saint Kitts and Nevis",code: "KN",phone: 1869,symbol: "$",capital: "Basseterre",currency: "XCD",continent_code: "NA",alpha_3: "KNA"},
    {name: "Saint Lucia",code: "LC",phone: 1758,symbol: "$",capital: "Castries",currency: "XCD",continent_code: "NA",alpha_3: "LCA"},
    {name: "Saint Martin",code: "MF",phone: 590,symbol: "€",capital: "Marigot",currency: "EUR",continent_code: "NA",alpha_3: "MAF"},
    {name: "Saint Pierre and Miquelon",code: "PM",phone: 508,symbol: "€",capital: "Saint-Pierre",currency: "EUR",continent_code: "NA",alpha_3: "SPM"},
    {name: "Saint Vincent and the Grenadines",code: "VC",phone: 1784,symbol: "$",capital: "Kingstown",currency: "XCD",continent_code: "NA",alpha_3: "VCT"},
    {name: "Samoa",code: "WS",phone: 684,symbol: "SAT",capital: "Apia",currency: "WST",continent_code: "OC",alpha_3: "WSM"},
    {name: "San Marino",code: "SM",phone: 378,symbol: "€",capital: "San Marino",currency: "EUR",continent_code: "EU",alpha_3: "SMR"},
    {name: "Sao Tome and Principe",code: "ST",phone: 239,symbol: "Db",capital: "Sao Tome",currency: "STD",continent_code: "AF",alpha_3: "STP"},
    {name: "Saudi Arabia",code: "SA",phone: 966,symbol: "﷼",capital: "Riyadh",currency: "SAR",continent_code: "AS",alpha_3: "SAU"},
    {name: "Senegal",code: "SN",phone: 221,symbol: "CFA",capital: "Dakar",currency: "XOF",continent_code: "AF",alpha_3: "SEN"},
    {name: "Serbia",code: "RS",phone: 381,symbol: "din",capital: "Belgrade",currency: "RSD",continent_code: "EU",alpha_3: "SRB"},
    {name: "Serbia and Montenegro",code: "CS",phone: 381,symbol: "din",capital: "Belgrade",currency: "RSD",continent_code: "EU",alpha_3: "SCG"},
    {name: "Seychelles",code: "SC",phone: 248,symbol: "SRe",capital: "Victoria",currency: "SCR",continent_code: "AF",alpha_3: "SYC"},
    {name: "Sierra Leone",code: "SL",phone: 232,symbol: "Le",capital: "Freetown",currency: "SLL",continent_code: "AF",alpha_3: "SLE"},
    {name: "Singapore",code: "SG",phone: 65,symbol: "$",capital: "Singapur",currency: "SGD",continent_code: "AS",alpha_3: "SGP"},
    {name: "St Martin",code: "SX",phone: 721,symbol: "ƒ",capital: "Philipsburg",currency: "ANG",continent_code: "NA",alpha_3: "SXM"},
    {name: "Slovakia",code: "SK",phone: 421,symbol: "€",capital: "Bratislava",currency: "EUR",continent_code: "EU",alpha_3: "SVK"},
    {name: "Slovenia",code: "SI",phone: 386,symbol: "€",capital: "Ljubljana",currency: "EUR",continent_code: "EU",alpha_3: "SVN"},
    {name: "Solomon Islands",code: "SB",phone: 677,symbol: "Si$",capital: "Honiara",currency: "SBD",continent_code: "OC",alpha_3: "SLB"},
    {name: "Somalia",code: "SO",phone: 252,symbol: "Sh.so.",capital: "Mogadishu",currency: "SOS",continent_code: "AF",alpha_3: "SOM"},
    {name: "South Africa",code: "ZA",phone: 27,symbol: "R",capital: "Pretoria",currency: "ZAR",continent_code: "AF",alpha_3: "ZAF"},
    {name: "South Georgia and the South Sandwich Islands",code: "GS",phone: 500,symbol: "£",capital: "Grytviken",currency: "GBP",continent_code: "AN",alpha_3: "SGS"},
    {name: "South Sudan",code: "SS",phone: 211,symbol: "£",capital: "Juba",currency: "SSP",continent_code: "AF",alpha_3: "SSD"},
    {name: "Spain",code: "ES",phone: 34,symbol: "€",capital: "Madrid",currency: "EUR",continent_code: "EU",alpha_3: "ESP"},
    {name: "Sri Lanka",code: "LK",phone: 94,symbol: "Rs",capital: "Colombo",currency: "LKR",continent_code: "AS",alpha_3: "LKA"},
    {name: "Sudan",code: "SD",phone: 249,symbol: ".س.ج",capital: "Khartoum",currency: "SDG",continent_code: "AF",alpha_3: "SDN"},
    {name: "Suriname",code: "SR",phone: 597,symbol: "$",capital: "Paramaribo",currency: "SRD",continent_code: "SA",alpha_3: "SUR"},
    {name: "Svalbard and Jan Mayen",code: "SJ",phone: 47,symbol: "kr",capital: "Longyearbyen",currency: "NOK",continent_code: "EU",alpha_3: "SJM"},
    {name: "Swaziland",code: "SZ",phone: 268,symbol: "E",capital: "Mbabane",currency: "SZL",continent_code: "AF",alpha_3: "SWZ"},
    {name: "Sweden",code: "SE",phone: 46,symbol: "kr",capital: "Stockholm",currency: "SEK",continent_code: "EU",alpha_3: "SWE"},
    {name: "Switzerland",code: "CH",phone: 41,symbol: "CHf",capital: "Berne",currency: "CHF",continent_code: "EU",alpha_3: "CHE"},
    {name: "Syrian Arab Republic",code: "SY",phone: 963,symbol: "LS",capital: "Damascus",currency: "SYP",continent_code: "AS",alpha_3: "SYR"},
    {name: "Taiwan, Province of China",code: "TW",phone: 886,symbol: "$",capital: "Taipei",currency: "TWD",continent_code: "AS",alpha_3: "TWN"},
    {name: "Tajikistan",code: "TJ",phone: 992,symbol: "SM",capital: "Dushanbe",currency: "TJS",continent_code: "AS",alpha_3: "TJK"},
    {name: "Tanzania, United Republic of",code: "TZ",phone: 255,symbol: "TSh",capital: "Dodoma",currency: "TZS",continent_code: "AF",alpha_3: "TZA"},
    {name: "Thailand",code: "TH",phone: 66,symbol: "฿",capital: "Bangkok",currency: "THB",continent_code: "AS",alpha_3: "THA"},
    {name: "Timor-Leste",code: "TL",phone: 670,symbol: "$",capital: "Dili",currency: "USD",continent_code: "AS",alpha_3: "TLS"},
    {name: "Togo",code: "TG",phone: 228,symbol: "CFA",capital: "Lome",currency: "XOF",continent_code: "AF",alpha_3: "TGO"},
    {name: "Tokelau",code: "TK",phone: 690,symbol: "$",capital: "",currency: "NZD",continent_code: "OC",alpha_3: "TKL"},
    {name: "Tonga",code: "TO",phone: 676,symbol: "$",capital: "Nuku'alofa",currency: "TOP",continent_code: "OC",alpha_3: "TON"},
    {name: "Trinidad and Tobago",code: "TT",phone: 1868,symbol: "$",capital: "Port of Spain",currency: "TTD",continent_code: "NA",alpha_3: "TTO"},
    {name: "Tunisia",code: "TN",phone: 216,symbol: "ت.د",capital: "Tunis",currency: "TND",continent_code: "AF",alpha_3: "TUN"},
    {name: "Turkey",code: "TR",phone: 90,symbol: "₺",capital: "Ankara",currency: "TRY",continent_code: "AS",alpha_3: "TUR"},
    {name: "Turkmenistan",code: "TM",phone: 7370,symbol: "T",capital: "Ashgabat",currency: "TMT",continent_code: "AS",alpha_3: "TKM"},
    {name: "Turks and Caicos Islands",code: "TC",phone: 1649,symbol: "$",capital: "Cockburn Town",currency: "USD",continent_code: "NA",alpha_3: "TCA"},
    {name: "Tuvalu",code: "TV",phone: 688,symbol: "$",capital: "Funafuti",currency: "AUD",continent_code: "OC",alpha_3: "TUV"},
    {name: "Uganda",code: "UG",phone: 256,symbol: "USh",capital: "Kampala",currency: "UGX",continent_code: "AF",alpha_3: "UGA"},
    {name: "Ukraine",code: "UA",phone: 380,symbol: "₴",capital: "Kiev",currency: "UAH",continent_code: "EU",alpha_3: "UKR"},
    {name: "United Arab Emirates",code: "AE",phone: 971,symbol: "إ.د",capital: "Abu Dhabi",currency: "AED",continent_code: "AS",alpha_3: "ARE"},
    {name: "United Kingdom",code: "GB",phone: 44,symbol: "£",capital: "London",currency: "GBP",continent_code: "EU",alpha_3: "GBR"},
    {name: "United States",code: "US",phone: 1,symbol: "$",capital: "Washington",currency: "USD",continent_code: "NA",alpha_3: "USA"},
    {name: "United States Minor Outlying Islands",code: "UM",phone: 1,symbol: "$",capital: "",currency: "USD",continent_code: "NA",alpha_3: "UMI"},
    {name: "Uruguay",code: "UY",phone: 598,symbol: "$",capital: "Montevideo",currency: "UYU",continent_code: "SA",alpha_3: "URY"},
    {name: "Uzbekistan",code: "UZ",phone: 998,symbol: "лв",capital: "Tashkent",currency: "UZS",continent_code: "AS",alpha_3: "UZB"},
    {name: "Vanuatu",code: "VU",phone: 678,symbol: "VT",capital: "Port Vila",currency: "VUV",continent_code: "OC",alpha_3: "VUT"},
    {name: "Venezuela",code: "VE",phone: 58,symbol: "Bs",capital: "Caracas",currency: "VEF",continent_code: "SA",alpha_3: "VEN"},
    {name: "Viet Nam",code: "VN",phone: 84,symbol: "₫",capital: "Hanoi",currency: "VND",continent_code: "AS",alpha_3: "VNM"},
    {name: "Virgin Islands, British",code: "VG",phone: 1284,symbol: "$",capital: "Road Town",currency: "USD",continent_code: "NA",alpha_3: "VGB"},
    {name: "Virgin Islands, U.s.",code: "VI",phone: 1340,symbol: "$",capital: "Charlotte Amalie",currency: "USD",continent_code: "NA",alpha_3: "VIR"},
    {name: "Wallis and Futuna",code: "WF",phone: 681,symbol: "₣",capital: "Mata Utu",currency: "XPF",continent_code: "OC",alpha_3: "WLF"},
    {name: "Western Sahara",code: "EH",phone: 212,symbol: "MAD",capital: "El-Aaiun",currency: "MAD",continent_code: "AF",alpha_3: "ESH"},
    {name: "Yemen",code: "YE",phone: 967,symbol: "﷼",capital: "Sanaa",currency: "YER",continent_code: "AS",alpha_3: "YEM"},
    {name: "Zambia",code: "ZM",phone: 260,symbol: "ZK",capital: "Lusaka",currency: "ZMW",continent_code: "AF",alpha_3: "ZMB"},
    {name: "Zimbabwe",code: "ZW",phone: 263,symbol: "$",capital: "Harare",currency: "ZWL",continent_code: "AF",alpha_3: "ZWE"}
];
