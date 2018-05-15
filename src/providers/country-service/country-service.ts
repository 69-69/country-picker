import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
 Generated class for the CountryServiceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */


@Injectable()
export class CountryServiceProvider {

  constructor(public http: HttpClient) {
  }

  const
  allCountries = [
    {
      "name": "Afghanistan",
      "countryCode": "AF",
      "callingCodes": [
        "93"
      ]
    },
    {
      "name": "Åland Islands",
      "countryCode": "AX",
      "callingCodes": [
        "358"
      ]
    },
    {
      "name": "Albania",
      "countryCode": "AL",
      "callingCodes": [
        "355"
      ]
    },
    {
      "name": "Algeria",
      "countryCode": "DZ",
      "callingCodes": [
        "213"
      ]
    },
    {
      "name": "American Samoa",
      "countryCode": "AS",
      "callingCodes": [
        "1684"
      ]
    },
    {
      "name": "Andorra",
      "countryCode": "AD",
      "callingCodes": [
        "376"
      ]
    },
    {
      "name": "Angola",
      "countryCode": "AO",
      "callingCodes": [
        "244"
      ]
    },
    {
      "name": "Anguilla",
      "countryCode": "AI",
      "callingCodes": [
        "1264"
      ]
    },
    {
      "name": "Antarctica",
      "countryCode": "AQ",
      "callingCodes": [
        "672"
      ]
    },
    {
      "name": "Antigua and Barbuda",
      "countryCode": "AG",
      "callingCodes": [
        "1268"
      ]
    },
    {
      "name": "Argentina",
      "countryCode": "AR",
      "callingCodes": [
        "54"
      ]
    },
    {
      "name": "Armenia",
      "countryCode": "AM",
      "callingCodes": [
        "374"
      ]
    },
    {
      "name": "Aruba",
      "countryCode": "AW",
      "callingCodes": [
        "297"
      ]
    },
    {
      "name": "Australia",
      "countryCode": "AU",
      "callingCodes": [
        "61"
      ]
    },
    {
      "name": "Austria",
      "countryCode": "AT",
      "callingCodes": [
        "43"
      ]
    },
    {
      "name": "Azerbaijan",
      "countryCode": "AZ",
      "callingCodes": [
        "994"
      ]
    },
    {
      "name": "Bahamas",
      "countryCode": "BS",
      "callingCodes": [
        "1242"
      ]
    },
    {
      "name": "Bahrain",
      "countryCode": "BH",
      "callingCodes": [
        "973"
      ]
    },
    {
      "name": "Bangladesh",
      "countryCode": "BD",
      "callingCodes": [
        "880"
      ]
    },
    {
      "name": "Barbados",
      "countryCode": "BB",
      "callingCodes": [
        "1246"
      ]
    },
    {
      "name": "Belarus",
      "countryCode": "BY",
      "callingCodes": [
        "375"
      ]
    },
    {
      "name": "Belgium",
      "countryCode": "BE",
      "callingCodes": [
        "32"
      ]
    },
    {
      "name": "Belize",
      "countryCode": "BZ",
      "callingCodes": [
        "501"
      ]
    },
    {
      "name": "Benin",
      "countryCode": "BJ",
      "callingCodes": [
        "229"
      ]
    },
    {
      "name": "Bermuda",
      "countryCode": "BM",
      "callingCodes": [
        "1441"
      ]
    },
    {
      "name": "Bhutan",
      "countryCode": "BT",
      "callingCodes": [
        "975"
      ]
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "countryCode": "BO",
      "callingCodes": [
        "591"
      ]
    },
    {
      "name": "Bonaire, Sint Eustatius and Saba",
      "countryCode": "BQ",
      "callingCodes": [
        "5997"
      ]
    },
    {
      "name": "Bosnia and Herzegovina",
      "countryCode": "BA",
      "callingCodes": [
        "387"
      ]
    },
    {
      "name": "Botswana",
      "countryCode": "BW",
      "callingCodes": [
        "267"
      ]
    },
    {
      "name": "Brazil",
      "countryCode": "BR",
      "callingCodes": [
        "55"
      ]
    },
    {
      "name": "British Indian Ocean Territory",
      "countryCode": "IO",
      "callingCodes": [
        "246"
      ]
    },
    {
      "name": "Virgin Islands (British)",
      "countryCode": "VG",
      "callingCodes": [
        "1284"
      ]
    },
    {
      "name": "Virgin Islands (U.S.)",
      "countryCode": "VI",
      "callingCodes": [
        "1 340"
      ]
    },
    {
      "name": "Brunei Darussalam",
      "countryCode": "BN",
      "callingCodes": [
        "673"
      ]
    },
    {
      "name": "Bulgaria",
      "countryCode": "BG",
      "callingCodes": [
        "359"
      ]
    },
    {
      "name": "Burkina Faso",
      "countryCode": "BF",
      "callingCodes": [
        "226"
      ]
    },
    {
      "name": "Burundi",
      "countryCode": "BI",
      "callingCodes": [
        "257"
      ]
    },
    {
      "name": "Cambodia",
      "countryCode": "KH",
      "callingCodes": [
        "855"
      ]
    },
    {
      "name": "Cameroon",
      "countryCode": "CM",
      "callingCodes": [
        "237"
      ]
    },
    {
      "name": "Canada",
      "countryCode": "CA",
      "callingCodes": [
        "1"
      ]
    },
    {
      "name": "Cabo Verde",
      "countryCode": "CV",
      "callingCodes": [
        "238"
      ]
    },
    {
      "name": "Cayman Islands",
      "countryCode": "KY",
      "callingCodes": [
        "1345"
      ]
    },
    {
      "name": "Central African Republic",
      "countryCode": "CF",
      "callingCodes": [
        "236"
      ]
    },
    {
      "name": "Chad",
      "countryCode": "TD",
      "callingCodes": [
        "235"
      ]
    },
    {
      "name": "Chile",
      "countryCode": "CL",
      "callingCodes": [
        "56"
      ]
    },
    {
      "name": "China",
      "countryCode": "CN",
      "callingCodes": [
        "86"
      ]
    },
    {
      "name": "Christmas Island",
      "countryCode": "CX",
      "callingCodes": [
        "61"
      ]
    },
    {
      "name": "Cocos (Keeling) Islands",
      "countryCode": "CC",
      "callingCodes": [
        "61"
      ]
    },
    {
      "name": "Colombia",
      "countryCode": "CO",
      "callingCodes": [
        "57"
      ]
    },
    {
      "name": "Comoros",
      "countryCode": "KM",
      "callingCodes": [
        "269"
      ]
    },
    {
      "name": "Congo",
      "countryCode": "CG",
      "callingCodes": [
        "242"
      ]
    },
    {
      "name": "Congo (Democratic Republic of the)",
      "countryCode": "CD",
      "callingCodes": [
        "243"
      ]
    },
    {
      "name": "Cook Islands",
      "countryCode": "CK",
      "callingCodes": [
        "682"
      ]
    },
    {
      "name": "Costa Rica",
      "countryCode": "CR",
      "callingCodes": [
        "506"
      ]
    },
    {
      "name": "Croatia",
      "countryCode": "HR",
      "callingCodes": [
        "385"
      ]
    },
    {
      "name": "Cuba",
      "countryCode": "CU",
      "callingCodes": [
        "53"
      ]
    },
    {
      "name": "Curaçao",
      "countryCode": "CW",
      "callingCodes": [
        "599"
      ]
    },
    {
      "name": "Cyprus",
      "countryCode": "CY",
      "callingCodes": [
        "357"
      ]
    },
    {
      "name": "Czech Republic",
      "countryCode": "CZ",
      "callingCodes": [
        "420"
      ]
    },
    {
      "name": "Denmark",
      "countryCode": "DK",
      "callingCodes": [
        "45"
      ]
    },
    {
      "name": "Djibouti",
      "countryCode": "DJ",
      "callingCodes": [
        "253"
      ]
    },
    {
      "name": "Dominica",
      "countryCode": "DM",
      "callingCodes": [
        "1767"
      ]
    },
    {
      "name": "Dominican Republic",
      "countryCode": "DO",
      "callingCodes": [
        "1809",
        "1829",
        "1849"
      ]
    },
    {
      "name": "Ecuador",
      "countryCode": "EC",
      "callingCodes": [
        "593"
      ]
    },
    {
      "name": "Egypt",
      "countryCode": "EG",
      "callingCodes": [
        "20"
      ]
    },
    {
      "name": "El Salvador",
      "countryCode": "SV",
      "callingCodes": [
        "503"
      ]
    },
    {
      "name": "Equatorial Guinea",
      "countryCode": "GQ",
      "callingCodes": [
        "240"
      ]
    },
    {
      "name": "Eritrea",
      "countryCode": "ER",
      "callingCodes": [
        "291"
      ]
    },
    {
      "name": "Estonia",
      "countryCode": "EE",
      "callingCodes": [
        "372"
      ]
    },
    {
      "name": "Ethiopia",
      "countryCode": "ET",
      "callingCodes": [
        "251"
      ]
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "countryCode": "FK",
      "callingCodes": [
        "500"
      ]
    },
    {
      "name": "Faroe Islands",
      "countryCode": "FO",
      "callingCodes": [
        "298"
      ]
    },
    {
      "name": "Fiji",
      "countryCode": "FJ",
      "callingCodes": [
        "679"
      ]
    },
    {
      "name": "Finland",
      "countryCode": "FI",
      "callingCodes": [
        "358"
      ]
    },
    {
      "name": "France",
      "countryCode": "FR",
      "callingCodes": [
        "33"
      ]
    },
    {
      "name": "French Guiana",
      "countryCode": "GF",
      "callingCodes": [
        "594"
      ]
    },
    {
      "name": "French Polynesia",
      "countryCode": "PF",
      "callingCodes": [
        "689"
      ]
    },
    {
      "name": "Gabon",
      "countryCode": "GA",
      "callingCodes": [
        "241"
      ]
    },
    {
      "name": "Gambia",
      "countryCode": "GM",
      "callingCodes": [
        "220"
      ]
    },
    {
      "name": "Georgia",
      "countryCode": "GE",
      "callingCodes": [
        "995"
      ]
    },
    {
      "name": "Germany",
      "countryCode": "DE",
      "callingCodes": [
        "49"
      ]
    },
    {
      "name": "Ghana",
      "countryCode": "GH",
      "callingCodes": [
        "233"
      ]
    },
    {
      "name": "Gibraltar",
      "countryCode": "GI",
      "callingCodes": [
        "350"
      ]
    },
    {
      "name": "Greece",
      "countryCode": "GR",
      "callingCodes": [
        "30"
      ]
    },
    {
      "name": "Greenland",
      "countryCode": "GL",
      "callingCodes": [
        "299"
      ]
    },
    {
      "name": "Grenada",
      "countryCode": "GD",
      "callingCodes": [
        "1473"
      ]
    },
    {
      "name": "Guadeloupe",
      "countryCode": "GP",
      "callingCodes": [
        "590"
      ]
    },
    {
      "name": "Guam",
      "countryCode": "GU",
      "callingCodes": [
        "1671"
      ]
    },
    {
      "name": "Guatemala",
      "countryCode": "GT",
      "callingCodes": [
        "502"
      ]
    },
    {
      "name": "Guernsey",
      "countryCode": "GG",
      "callingCodes": [
        "44"
      ]
    },
    {
      "name": "Guinea",
      "countryCode": "GN",
      "callingCodes": [
        "224"
      ]
    },
    {
      "name": "Guinea-Bissau",
      "countryCode": "GW",
      "callingCodes": [
        "245"
      ]
    },
    {
      "name": "Guyana",
      "countryCode": "GY",
      "callingCodes": [
        "592"
      ]
    },
    {
      "name": "Haiti",
      "countryCode": "HT",
      "callingCodes": [
        "509"
      ]
    },
    {
      "name": "Holy See",
      "countryCode": "VA",
      "callingCodes": [
        "379"
      ]
    },
    {
      "name": "Honduras",
      "countryCode": "HN",
      "callingCodes": [
        "504"
      ]
    },
    {
      "name": "Hong Kong",
      "countryCode": "HK",
      "callingCodes": [
        "852"
      ]
    },
    {
      "name": "Hungary",
      "countryCode": "HU",
      "callingCodes": [
        "36"
      ]
    },
    {
      "name": "Iceland",
      "countryCode": "IS",
      "callingCodes": [
        "354"
      ]
    },
    {
      "name": "India",
      "countryCode": "IN",
      "callingCodes": [
        "91"
      ]
    },
    {
      "name": "Indonesia",
      "countryCode": "ID",
      "callingCodes": [
        "62"
      ]
    },
    {
      "name": "Côte d'Ivoire",
      "countryCode": "CI",
      "callingCodes": [
        "225"
      ]
    },
    {
      "name": "Iran (Islamic Republic of)",
      "countryCode": "IR",
      "callingCodes": [
        "98"
      ]
    },
    {
      "name": "Iraq",
      "countryCode": "IQ",
      "callingCodes": [
        "964"
      ]
    },
    {
      "name": "Ireland",
      "countryCode": "IE",
      "callingCodes": [
        "353"
      ]
    },
    {
      "name": "Isle of Man",
      "countryCode": "IM",
      "callingCodes": [
        "44"
      ]
    },
    {
      "name": "Israel",
      "countryCode": "IL",
      "callingCodes": [
        "972"
      ]
    },
    {
      "name": "Italy",
      "countryCode": "IT",
      "callingCodes": [
        "39"
      ]
    },
    {
      "name": "Jamaica",
      "countryCode": "JM",
      "callingCodes": [
        "1876"
      ]
    },
    {
      "name": "Japan",
      "countryCode": "JP",
      "callingCodes": [
        "81"
      ]
    },
    {
      "name": "Jersey",
      "countryCode": "JE",
      "callingCodes": [
        "44"
      ]
    },
    {
      "name": "Jordan",
      "countryCode": "JO",
      "callingCodes": [
        "962"
      ]
    },
    {
      "name": "Kazakhstan",
      "countryCode": "KZ",
      "callingCodes": [
        "76",
        "77"
      ]
    },
    {
      "name": "Kenya",
      "countryCode": "KE",
      "callingCodes": [
        "254"
      ]
    },
    {
      "name": "Kiribati",
      "countryCode": "KI",
      "callingCodes": [
        "686"
      ]
    },
    {
      "name": "Kuwait",
      "countryCode": "KW",
      "callingCodes": [
        "965"
      ]
    },
    {
      "name": "Kyrgyzstan",
      "countryCode": "KG",
      "callingCodes": [
        "996"
      ]
    },
    {
      "name": "Lao People's Democratic Republic",
      "countryCode": "LA",
      "callingCodes": [
        "856"
      ]
    },
    {
      "name": "Latvia",
      "countryCode": "LV",
      "callingCodes": [
        "371"
      ]
    },
    {
      "name": "Lebanon",
      "countryCode": "LB",
      "callingCodes": [
        "961"
      ]
    },
    {
      "name": "Lesotho",
      "countryCode": "LS",
      "callingCodes": [
        "266"
      ]
    },
    {
      "name": "Liberia",
      "countryCode": "LR",
      "callingCodes": [
        "231"
      ]
    },
    {
      "name": "Libya",
      "countryCode": "LY",
      "callingCodes": [
        "218"
      ]
    },
    {
      "name": "Liechtenstein",
      "countryCode": "LI",
      "callingCodes": [
        "423"
      ]
    },
    {
      "name": "Lithuania",
      "countryCode": "LT",
      "callingCodes": [
        "370"
      ]
    },
    {
      "name": "Luxembourg",
      "countryCode": "LU",
      "callingCodes": [
        "352"
      ]
    },
    {
      "name": "Macao",
      "countryCode": "MO",
      "callingCodes": [
        "853"
      ]
    },
    {
      "name": "Macedonia (the former Yugoslav Republic of)",
      "countryCode": "MK",
      "callingCodes": [
        "389"
      ]
    },
    {
      "name": "Madagascar",
      "countryCode": "MG",
      "callingCodes": [
        "261"
      ]
    },
    {
      "name": "Malawi",
      "countryCode": "MW",
      "callingCodes": [
        "265"
      ]
    },
    {
      "name": "Malaysia",
      "countryCode": "MY",
      "callingCodes": [
        "60"
      ]
    },
    {
      "name": "Maldives",
      "countryCode": "MV",
      "callingCodes": [
        "960"
      ]
    },
    {
      "name": "Mali",
      "countryCode": "ML",
      "callingCodes": [
        "223"
      ]
    },
    {
      "name": "Malta",
      "countryCode": "MT",
      "callingCodes": [
        "356"
      ]
    },
    {
      "name": "Marshall Islands",
      "countryCode": "MH",
      "callingCodes": [
        "692"
      ]
    },
    {
      "name": "Martinique",
      "countryCode": "MQ",
      "callingCodes": [
        "596"
      ]
    },
    {
      "name": "Mauritania",
      "countryCode": "MR",
      "callingCodes": [
        "222"
      ]
    },
    {
      "name": "Mauritius",
      "countryCode": "MU",
      "callingCodes": [
        "230"
      ]
    },
    {
      "name": "Mayotte",
      "countryCode": "YT",
      "callingCodes": [
        "262"
      ]
    },
    {
      "name": "Mexico",
      "countryCode": "MX",
      "callingCodes": [
        "52"
      ]
    },
    {
      "name": "Micronesia (Federated States of)",
      "countryCode": "FM",
      "callingCodes": [
        "691"
      ]
    },
    {
      "name": "Moldova (Republic of)",
      "countryCode": "MD",
      "callingCodes": [
        "373"
      ]
    },
    {
      "name": "Monaco",
      "countryCode": "MC",
      "callingCodes": [
        "377"
      ]
    },
    {
      "name": "Mongolia",
      "countryCode": "MN",
      "callingCodes": [
        "976"
      ]
    },
    {
      "name": "Montenegro",
      "countryCode": "ME",
      "callingCodes": [
        "382"
      ]
    },
    {
      "name": "Montserrat",
      "countryCode": "MS",
      "callingCodes": [
        "1664"
      ]
    },
    {
      "name": "Morocco",
      "countryCode": "MA",
      "callingCodes": [
        "212"
      ]
    },
    {
      "name": "Mozambique",
      "countryCode": "MZ",
      "callingCodes": [
        "258"
      ]
    },
    {
      "name": "Myanmar",
      "countryCode": "MM",
      "callingCodes": [
        "95"
      ]
    },
    {
      "name": "Namibia",
      "countryCode": "NA",
      "callingCodes": [
        "264"
      ]
    },
    {
      "name": "Nauru",
      "countryCode": "NR",
      "callingCodes": [
        "674"
      ]
    },
    {
      "name": "Nepal",
      "countryCode": "NP",
      "callingCodes": [
        "977"
      ]
    },
    {
      "name": "Netherlands",
      "countryCode": "NL",
      "callingCodes": [
        "31"
      ]
    },
    {
      "name": "New Caledonia",
      "countryCode": "NC",
      "callingCodes": [
        "687"
      ]
    },
    {
      "name": "New Zealand",
      "countryCode": "NZ",
      "callingCodes": [
        "64"
      ]
    },
    {
      "name": "Nicaragua",
      "countryCode": "NI",
      "callingCodes": [
        "505"
      ]
    },
    {
      "name": "Niger",
      "countryCode": "NE",
      "callingCodes": [
        "227"
      ]
    },
    {
      "name": "Nigeria",
      "countryCode": "NG",
      "callingCodes": [
        "234"
      ]
    },
    {
      "name": "Niue",
      "countryCode": "NU",
      "callingCodes": [
        "683"
      ]
    },
    {
      "name": "Norfolk Island",
      "countryCode": "NF",
      "callingCodes": [
        "672"
      ]
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "countryCode": "KP",
      "callingCodes": [
        "850"
      ]
    },
    {
      "name": "Northern Mariana Islands",
      "countryCode": "MP",
      "callingCodes": [
        "1670"
      ]
    },
    {
      "name": "Norway",
      "countryCode": "NO",
      "callingCodes": [
        "47"
      ]
    },
    {
      "name": "Oman",
      "countryCode": "OM",
      "callingCodes": [
        "968"
      ]
    },
    {
      "name": "Pakistan",
      "countryCode": "PK",
      "callingCodes": [
        "92"
      ]
    },
    {
      "name": "Palau",
      "countryCode": "PW",
      "callingCodes": [
        "680"
      ]
    },
    {
      "name": "Palestine, State of",
      "countryCode": "PS",
      "callingCodes": [
        "970"
      ]
    },
    {
      "name": "Panama",
      "countryCode": "PA",
      "callingCodes": [
        "507"
      ]
    },
    {
      "name": "Papua New Guinea",
      "countryCode": "PG",
      "callingCodes": [
        "675"
      ]
    },
    {
      "name": "Paraguay",
      "countryCode": "PY",
      "callingCodes": [
        "595"
      ]
    },
    {
      "name": "Peru",
      "countryCode": "PE",
      "callingCodes": [
        "51"
      ]
    },
    {
      "name": "Philippines",
      "countryCode": "PH",
      "callingCodes": [
        "63"
      ]
    },
    {
      "name": "Pitcairn",
      "countryCode": "PN",
      "callingCodes": [
        "64"
      ]
    },
    {
      "name": "Poland",
      "countryCode": "PL",
      "callingCodes": [
        "48"
      ]
    },
    {
      "name": "Portugal",
      "countryCode": "PT",
      "callingCodes": [
        "351"
      ]
    },
    {
      "name": "Puerto Rico",
      "countryCode": "PR",
      "callingCodes": [
        "1"
      ]
    },
    {
      "name": "Qatar",
      "countryCode": "QA",
      "callingCodes": [
        "974"
      ]
    },
    {
      "name": "Republic of Kosovo",
      "countryCode": "XK",
      "callingCodes": [
        "383"
      ]
    },
    {
      "name": "Réunion",
      "countryCode": "RE",
      "callingCodes": [
        "262"
      ]
    },
    {
      "name": "Romania",
      "countryCode": "RO",
      "callingCodes": [
        "40"
      ]
    },
    {
      "name": "Russian Federation",
      "countryCode": "RU",
      "callingCodes": [
        "7"
      ]
    },
    {
      "name": "Rwanda",
      "countryCode": "RW",
      "callingCodes": [
        "250"
      ]
    },
    {
      "name": "Saint Barthélemy",
      "countryCode": "BL",
      "callingCodes": [
        "590"
      ]
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "countryCode": "SH",
      "callingCodes": [
        "290"
      ]
    },
    {
      "name": "Saint Kitts and Nevis",
      "countryCode": "KN",
      "callingCodes": [
        "1869"
      ]
    },
    {
      "name": "Saint Lucia",
      "countryCode": "LC",
      "callingCodes": [
        "1758"
      ]
    },
    {
      "name": "Saint Martin (French part)",
      "countryCode": "MF",
      "callingCodes": [
        "590"
      ]
    },
    {
      "name": "Saint Pierre and Miquelon",
      "countryCode": "PM",
      "callingCodes": [
        "508"
      ]
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "countryCode": "VC",
      "callingCodes": [
        "1784"
      ]
    },
    {
      "name": "Samoa",
      "countryCode": "WS",
      "callingCodes": [
        "685"
      ]
    },
    {
      "name": "San Marino",
      "countryCode": "SM",
      "callingCodes": [
        "378"
      ]
    },
    {
      "name": "Sao Tome and Principe",
      "countryCode": "ST",
      "callingCodes": [
        "239"
      ]
    },
    {
      "name": "Saudi Arabia",
      "countryCode": "SA",
      "callingCodes": [
        "966"
      ]
    },
    {
      "name": "Senegal",
      "countryCode": "SN",
      "callingCodes": [
        "221"
      ]
    },
    {
      "name": "Serbia",
      "countryCode": "RS",
      "callingCodes": [
        "381"
      ]
    },
    {
      "name": "Seychelles",
      "countryCode": "SC",
      "callingCodes": [
        "248"
      ]
    },
    {
      "name": "Sierra Leone",
      "countryCode": "SL",
      "callingCodes": [
        "232"
      ]
    },
    {
      "name": "Singapore",
      "countryCode": "SG",
      "callingCodes": [
        "65"
      ]
    },
    {
      "name": "Sint Maarten (Dutch part)",
      "countryCode": "SX",
      "callingCodes": [
        "1721"
      ]
    },
    {
      "name": "Slovakia",
      "countryCode": "SK",
      "callingCodes": [
        "421"
      ]
    },
    {
      "name": "Slovenia",
      "countryCode": "SI",
      "callingCodes": [
        "386"
      ]
    },
    {
      "name": "Solomon Islands",
      "countryCode": "SB",
      "callingCodes": [
        "677"
      ]
    },
    {
      "name": "Somalia",
      "countryCode": "SO",
      "callingCodes": [
        "252"
      ]
    },
    {
      "name": "South Africa",
      "countryCode": "ZA",
      "callingCodes": [
        "27"
      ]
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "countryCode": "GS",
      "callingCodes": [
        "500"
      ]
    },
    {
      "name": "Korea (Republic of)",
      "countryCode": "KR",
      "callingCodes": [
        "82"
      ]
    },
    {
      "name": "South Sudan",
      "countryCode": "SS",
      "callingCodes": [
        "211"
      ]
    },
    {
      "name": "Spain",
      "countryCode": "ES",
      "callingCodes": [
        "34"
      ]
    },
    {
      "name": "Sri Lanka",
      "countryCode": "LK",
      "callingCodes": [
        "94"
      ]
    },
    {
      "name": "Sudan",
      "countryCode": "SD",
      "callingCodes": [
        "249"
      ]
    },
    {
      "name": "Suriname",
      "countryCode": "SR",
      "callingCodes": [
        "597"
      ]
    },
    {
      "name": "Svalbard and Jan Mayen",
      "countryCode": "SJ",
      "callingCodes": [
        "4779"
      ]
    },
    {
      "name": "Swaziland",
      "countryCode": "SZ",
      "callingCodes": [
        "268"
      ]
    },
    {
      "name": "Sweden",
      "countryCode": "SE",
      "callingCodes": [
        "46"
      ]
    },
    {
      "name": "Switzerland",
      "countryCode": "CH",
      "callingCodes": [
        "41"
      ]
    },
    {
      "name": "Syrian Arab Republic",
      "countryCode": "SY",
      "callingCodes": [
        "963"
      ]
    },
    {
      "name": "Taiwan",
      "countryCode": "TW",
      "callingCodes": [
        "886"
      ]
    },
    {
      "name": "Tajikistan",
      "countryCode": "TJ",
      "callingCodes": [
        "992"
      ]
    },
    {
      "name": "Tanzania, United Republic of",
      "countryCode": "TZ",
      "callingCodes": [
        "255"
      ]
    },
    {
      "name": "Thailand",
      "countryCode": "TH",
      "callingCodes": [
        "66"
      ]
    },
    {
      "name": "Timor-Leste",
      "countryCode": "TL",
      "callingCodes": [
        "670"
      ]
    },
    {
      "name": "Togo",
      "countryCode": "TG",
      "callingCodes": [
        "228"
      ]
    },
    {
      "name": "Tokelau",
      "countryCode": "TK",
      "callingCodes": [
        "690"
      ]
    },
    {
      "name": "Tonga",
      "countryCode": "TO",
      "callingCodes": [
        "676"
      ]
    },
    {
      "name": "Trinidad and Tobago",
      "countryCode": "TT",
      "callingCodes": [
        "1868"
      ]
    },
    {
      "name": "Tunisia",
      "countryCode": "TN",
      "callingCodes": [
        "216"
      ]
    },
    {
      "name": "Turkey",
      "countryCode": "TR",
      "callingCodes": [
        "90"
      ]
    },
    {
      "name": "Turkmenistan",
      "countryCode": "TM",
      "callingCodes": [
        "993"
      ]
    },
    {
      "name": "Turks and Caicos Islands",
      "countryCode": "TC",
      "callingCodes": [
        "1649"
      ]
    },
    {
      "name": "Tuvalu",
      "countryCode": "TV",
      "callingCodes": [
        "688"
      ]
    },
    {
      "name": "Uganda",
      "countryCode": "UG",
      "callingCodes": [
        "256"
      ]
    },
    {
      "name": "Ukraine",
      "countryCode": "UA",
      "callingCodes": [
        "380"
      ]
    },
    {
      "name": "United Arab Emirates",
      "countryCode": "AE",
      "callingCodes": [
        "971"
      ]
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "countryCode": "GB",
      "callingCodes": [
        "44"
      ]
    },
    {
      "name": "United States of America",
      "countryCode": "US",
      "callingCodes": [
        "1"
      ]
    },
    {
      "name": "Uruguay",
      "countryCode": "UY",
      "callingCodes": [
        "598"
      ]
    },
    {
      "name": "Uzbekistan",
      "countryCode": "UZ",
      "callingCodes": [
        "998"
      ]
    },
    {
      "name": "Vanuatu",
      "countryCode": "VU",
      "callingCodes": [
        "678"
      ]
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "countryCode": "VE",
      "callingCodes": [
        "58"
      ]
    },
    {
      "name": "Viet Nam",
      "countryCode": "VN",
      "callingCodes": [
        "84"
      ]
    },
    {
      "name": "Wallis and Futuna",
      "countryCode": "WF",
      "callingCodes": [
        "681"
      ]
    },
    {
      "name": "Western Sahara",
      "countryCode": "EH",
      "callingCodes": [
        "212"
      ]
    },
    {
      "name": "Yemen",
      "countryCode": "YE",
      "callingCodes": [
        "967"
      ]
    },
    {
      "name": "Zambia",
      "countryCode": "ZM",
      "callingCodes": [
        "260"
      ]
    },
    {
      "name": "Zimbabwe",
      "countryCode": "ZW",
      "callingCodes": [
        "263"
      ]
    }
  ];


  getAllCountry() {
    return new Promise(resolve => {
     let result = this.allCountries.map(function (obj) {
        return {
          name: obj.name,
          countryCode: obj.countryCode,
          dialCode: "+" + obj.callingCodes[0],
          flag: "flag-icon-" + obj.countryCode.toLowerCase()
        }
      });
      resolve(result);


      // this.http.get('../../assets/countries.json').subscribe(data => {
      //   let result = data.map(function (obj) {
      //     return {
      //       name: obj.name,
      //       countryCode: obj.countryCode,
      //       dialCode: "+" + obj.callingCodes[0],
      //       flag: "flag-icon-" + obj.countryCode.toLowerCase()
      //     }
      //   });
      //   resolve(result);
      // }, err => {
      //   console.log(err);
      // });
    });
  }

}