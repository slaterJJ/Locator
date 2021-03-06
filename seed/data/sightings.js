const Animals = require('../../models/animals');
const Parks = require('../../models/parks');

var sightingsData = [
 {
   "animal_name": "Blackbird",
   "date": "30/07/2011",
   "spatial_ref": "SJ83449511",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452484,
   "longitude": -2.2508325
 },
 {
   "animal_name": "Blackbird",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479518",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.453115,
   "longitude": -2.2503844
 },
 {
   "animal_name": "Blackbird",
   "date": "30/07/2011",
   "spatial_ref": "SJ83589482",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.449882,
   "longitude": -2.2487091
 },
 {
   "animal_name": "Blackbird",
   "date": "28/01/2012",
   "spatial_ref": "SJ83419535",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.454641,
   "longitude": -2.251297
 },
 {
   "animal_name": "Blackbird",
   "date": "28/01/2012",
   "spatial_ref": "SJ83429501",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451585,
   "longitude": -2.2511283
 },
 {
   "animal_name": "Blackbird",
   "date": "28/01/2012",
   "spatial_ref": "SJ83479522",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.453474,
   "longitude": -2.2503866
 },
 {
   "animal_name": "Blackbird",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Blackbird",
   "date": "28/01/2012",
   "spatial_ref": "SJ83619478",
   "obs_abundance": 6,
   "obs_comment": "",
   "latitude": 53.449524,
   "longitude": -2.2482553
 },
 {
   "animal_name": "Blackbird",
   "date": "28/01/2012",
   "spatial_ref": "SJ83649497",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.451232,
   "longitude": -2.2478135
 },
 {
   "animal_name": "Blackbird",
   "date": "28/01/2012",
   "spatial_ref": "SJ83729494",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450965,
   "longitude": -2.2466073
 },
 {
   "animal_name": "Blackbird",
   "date": "28/01/2012",
   "spatial_ref": "SJ83779500",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451506,
   "longitude": -2.2458576
 },
 {
   "animal_name": "Black-headed Gull",
   "date": "30/07/2011",
   "spatial_ref": "SJ83639496",
   "obs_abundance": 6,
   "obs_comment": "1 juvenile (not locally bred)",
   "latitude": 53.451142,
   "longitude": -2.2479636
 },
 {
   "animal_name": "Black-headed Gull",
   "date": "28/01/2012",
   "spatial_ref": "SJ83489483",
   "obs_abundance": 22,
   "obs_comment": "",
   "latitude": 53.449969,
   "longitude": -2.2502154
 },
 {
   "animal_name": "Black-headed Gull",
   "date": "28/01/2012",
   "spatial_ref": "SJ83619478",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.449524,
   "longitude": -2.2482553
 },
 {
   "animal_name": "Black-headed Gull",
   "date": "28/01/2012",
   "spatial_ref": "SJ83729494",
   "obs_abundance": 3,
   "obs_comment": "",
   "latitude": 53.450965,
   "longitude": -2.2466073
 },
 {
   "animal_name": "Black-headed Gull",
   "date": "28/01/2012",
   "spatial_ref": "SJ83779500",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.451506,
   "longitude": -2.2458576
 },
 {
   "animal_name": "Blue Tit",
   "date": "30/07/2011",
   "spatial_ref": "SJ83439507",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452125,
   "longitude": -2.2509809
 },
 {
   "animal_name": "Blue Tit",
   "date": "30/07/2011",
   "spatial_ref": "SJ83639496",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.451142,
   "longitude": -2.2479636
 },
 {
   "animal_name": "Blue Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83419535",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.454641,
   "longitude": -2.251297
 },
 {
   "animal_name": "Blue Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83729494",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.450965,
   "longitude": -2.2466073
 },
 {
   "animal_name": "Bullfinch",
   "date": "30/07/2011",
   "spatial_ref": "SJ83459495",
   "obs_abundance": 3,
   "obs_comment": "Confirmed Breeding (FL). 2 juvs with male on edge of wood. 1 juv fed by male.",
   "latitude": 53.451047,
   "longitude": -2.2506734
 },
 {
   "animal_name": "Bullfinch",
   "date": "28/01/2012",
   "spatial_ref": "SJ83509511",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452486,
   "longitude": -2.249929
 },
 {
   "animal_name": "Canada Goose",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479484",
   "obs_abundance": 20,
   "obs_comment": "",
   "latitude": 53.450059,
   "longitude": -2.2503665
 },
 {
   "animal_name": "Canada Goose",
   "date": "30/07/2011",
   "spatial_ref": "SJ83639496",
   "obs_abundance": 21,
   "obs_comment": "",
   "latitude": 53.451142,
   "longitude": -2.2479636
 },
 {
   "animal_name": "Canada Goose",
   "date": "28/01/2012",
   "spatial_ref": "SJ83489483",
   "obs_abundance": 33,
   "obs_comment": "",
   "latitude": 53.449969,
   "longitude": -2.2502154
 },
 {
   "animal_name": "Canada Goose",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519489",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.450509,
   "longitude": -2.2497668
 },
 {
   "animal_name": "Carrion Crow",
   "date": "30/07/2011",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Carrion Crow",
   "date": "30/07/2011",
   "spatial_ref": "SJ83769499",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451416,
   "longitude": -2.2460076
 },
 {
   "animal_name": "Carrion Crow",
   "date": "28/01/2012",
   "spatial_ref": "SJ83419535",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.454641,
   "longitude": -2.251297
 },
 {
   "animal_name": "Carrion Crow",
   "date": "28/01/2012",
   "spatial_ref": "SJ83459508",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452215,
   "longitude": -2.2506803
 },
 {
   "animal_name": "Carrion Crow",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Carrion Crow",
   "date": "28/01/2012",
   "spatial_ref": "SJ83779500",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451506,
   "longitude": -2.2458576
 },
 {
   "animal_name": "Chaffinch",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479484",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.450059,
   "longitude": -2.2503665
 },
 {
   "animal_name": "Chaffinch",
   "date": "28/01/2012",
   "spatial_ref": "SJ83729494",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450965,
   "longitude": -2.2466073
 },
 {
   "animal_name": "Coal Tit",
   "date": "30/07/2011",
   "spatial_ref": "SJ83639496",
   "obs_abundance": 3,
   "obs_comment": "",
   "latitude": 53.451142,
   "longitude": -2.2479636
 },
 {
   "animal_name": "Coal Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519489",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450509,
   "longitude": -2.2497668
 },
 {
   "animal_name": "Coal Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83729494",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450965,
   "longitude": -2.2466073
 },
 {
   "animal_name": "Common Gull",
   "date": "28/01/2012",
   "spatial_ref": "SJ83489483",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.449969,
   "longitude": -2.2502154
 },
 {
   "animal_name": "Common Gull",
   "date": "28/01/2012",
   "spatial_ref": "SJ83619478",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.449524,
   "longitude": -2.2482553
 },
 {
   "animal_name": "Coot",
   "date": "30/07/2011",
   "spatial_ref": "SJ83419478",
   "obs_abundance": 1,
   "obs_comment": "Confirmed Breeding (ON).",
   "latitude": 53.449517,
   "longitude": -2.2512667
 },
 {
   "animal_name": "Coot",
   "date": "30/07/2011",
   "spatial_ref": "SJ83469482",
   "obs_abundance": 6,
   "obs_comment": "Confirmed Breeding (FL). Pair feeding 4 small downy chicks.",
   "latitude": 53.449878,
   "longitude": -2.250516
 },
 {
   "animal_name": "Coot",
   "date": "28/01/2012",
   "spatial_ref": "SJ83489483",
   "obs_abundance": 3,
   "obs_comment": "",
   "latitude": 53.449969,
   "longitude": -2.2502154
 },
 {
   "animal_name": "Cormorant",
   "date": "28/01/2012",
   "spatial_ref": "SJ83779500",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451506,
   "longitude": -2.2458576
 },
 {
   "animal_name": "Dunnock",
   "date": "30/07/2011",
   "spatial_ref": "SJ83449511",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452484,
   "longitude": -2.2508325
 },
 {
   "animal_name": "Dunnock",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479518",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.453115,
   "longitude": -2.2503844
 },
 {
   "animal_name": "Dunnock",
   "date": "30/07/2011",
   "spatial_ref": "SJ83769499",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451416,
   "longitude": -2.2460076
 },
 {
   "animal_name": "Dunnock",
   "date": "28/01/2012",
   "spatial_ref": "SJ83619478",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.449524,
   "longitude": -2.2482553
 },
 {
   "animal_name": "Dunnock",
   "date": "28/01/2012",
   "spatial_ref": "SJ83779500",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451506,
   "longitude": -2.2458576
 },
 {
   "animal_name": "Goldcrest",
   "date": "28/01/2012",
   "spatial_ref": "SJ83439490",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450597,
   "longitude": -2.2509719
 },
 {
   "animal_name": "Goldcrest",
   "date": "28/01/2012",
   "spatial_ref": "SJ83649497",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451232,
   "longitude": -2.2478135
 },
 {
   "animal_name": "Goldfinch",
   "date": "30/07/2011",
   "spatial_ref": "SJ83589482",
   "obs_abundance": 4,
   "obs_comment": "",
   "latitude": 53.449882,
   "longitude": -2.2487091
 },
 {
   "animal_name": "Goosander",
   "date": "28/01/2012",
   "spatial_ref": "SJ83489483",
   "obs_abundance": 3,
   "obs_comment": "",
   "latitude": 53.449969,
   "longitude": -2.2502154
 },
 {
   "animal_name": "Great Spotted Woodpecker",
   "date": "28/01/2012",
   "spatial_ref": "SJ83429501",
   "obs_abundance": 2,
   "obs_comment": "Agitated calls and one chasing the other. Perhaps a pair.",
   "latitude": 53.451585,
   "longitude": -2.2511283
 },
 {
   "animal_name": "Great Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83419535",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.454641,
   "longitude": -2.251297
 },
 {
   "animal_name": "Great Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83429501",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451585,
   "longitude": -2.2511283
 },
 {
   "animal_name": "Great Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83479522",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.453474,
   "longitude": -2.2503866
 },
 {
   "animal_name": "Great Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 3,
   "obs_comment": "1 singing",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Great Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83649497",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451232,
   "longitude": -2.2478135
 },
 {
   "animal_name": "Great Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83729494",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450965,
   "longitude": -2.2466073
 },
 {
   "animal_name": "Greenfinch",
   "date": "28/01/2012",
   "spatial_ref": "SJ83619478",
   "obs_abundance": 4,
   "obs_comment": "",
   "latitude": 53.449524,
   "longitude": -2.2482553
 },
 {
   "animal_name": "Grey Heron",
   "date": "28/01/2012",
   "spatial_ref": "SJ83489483",
   "obs_abundance": 1,
   "obs_comment": "Standing on edge of lake and then flew into tree containing last year's nest.",
   "latitude": 53.449969,
   "longitude": -2.2502154
 },
 {
   "animal_name": "Jay",
   "date": "28/01/2012",
   "spatial_ref": "SJ83619478",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.449524,
   "longitude": -2.2482553
 },
 {
   "animal_name": "Long-tailed Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83419535",
   "obs_abundance": 5,
   "obs_comment": "",
   "latitude": 53.454641,
   "longitude": -2.251297
 },
 {
   "animal_name": "Long-tailed Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519489",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.450509,
   "longitude": -2.2497668
 },
 {
   "animal_name": "Long-tailed Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83619478",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.449524,
   "longitude": -2.2482553
 },
 {
   "animal_name": "Long-tailed Tit",
   "date": "28/01/2012",
   "spatial_ref": "SJ83729494",
   "obs_abundance": 6,
   "obs_comment": "",
   "latitude": 53.450965,
   "longitude": -2.2466073
 },
 {
   "animal_name": "Magpie",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479484",
   "obs_abundance": 6,
   "obs_comment": "Confirmed breeding (FL). Juvs begging to be fed by adult.",
   "latitude": 53.450059,
   "longitude": -2.2503665
 },
 {
   "animal_name": "Magpie",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479518",
   "obs_abundance": 4,
   "obs_comment": "",
   "latitude": 53.453115,
   "longitude": -2.2503844
 },
 {
   "animal_name": "Magpie",
   "date": "30/07/2011",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Magpie",
   "date": "30/07/2011",
   "spatial_ref": "SJ83639496",
   "obs_abundance": 5,
   "obs_comment": "",
   "latitude": 53.451142,
   "longitude": -2.2479636
 },
 {
   "animal_name": "Magpie",
   "date": "30/07/2011",
   "spatial_ref": "SJ83769499",
   "obs_abundance": 3,
   "obs_comment": "",
   "latitude": 53.451416,
   "longitude": -2.2460076
 },
 {
   "animal_name": "Magpie",
   "date": "28/01/2012",
   "spatial_ref": "SJ83419535",
   "obs_abundance": 5,
   "obs_comment": "",
   "latitude": 53.454641,
   "longitude": -2.251297
 },
 {
   "animal_name": "Magpie",
   "date": "28/01/2012",
   "spatial_ref": "SJ83459508",
   "obs_abundance": 4,
   "obs_comment": "",
   "latitude": 53.452215,
   "longitude": -2.2506803
 },
 {
   "animal_name": "Magpie",
   "date": "28/01/2012",
   "spatial_ref": "SJ83479522",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.453474,
   "longitude": -2.2503866
 },
 {
   "animal_name": "Magpie",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519489",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.450509,
   "longitude": -2.2497668
 },
 {
   "animal_name": "Magpie",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Magpie",
   "date": "28/01/2012",
   "spatial_ref": "SJ83649497",
   "obs_abundance": 3,
   "obs_comment": "",
   "latitude": 53.451232,
   "longitude": -2.2478135
 },
 {
   "animal_name": "Magpie",
   "date": "28/01/2012",
   "spatial_ref": "SJ83779500",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.451506,
   "longitude": -2.2458576
 },
 {
   "animal_name": "Mallard",
   "date": "30/07/2011",
   "spatial_ref": "SJ83469490",
   "obs_abundance": 7,
   "obs_comment": "",
   "latitude": 53.450597,
   "longitude": -2.2505202
 },
 {
   "animal_name": "Mallard",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519489",
   "obs_abundance": 20,
   "obs_comment": "",
   "latitude": 53.450509,
   "longitude": -2.2497668
 },
 {
   "animal_name": "Mistle Thrush",
   "date": "30/07/2011",
   "spatial_ref": "SJ83469490",
   "obs_abundance": 6,
   "obs_comment": "",
   "latitude": 53.450597,
   "longitude": -2.2505202
 },
 {
   "animal_name": "Mistle Thrush",
   "date": "30/07/2011",
   "spatial_ref": "SJ83769499",
   "obs_abundance": 4,
   "obs_comment": "",
   "latitude": 53.451416,
   "longitude": -2.2460076
 },
 {
   "animal_name": "Moorhen",
   "date": "30/07/2011",
   "spatial_ref": "SJ83469482",
   "obs_abundance": 4,
   "obs_comment": "Confirmed breeding (FL). Adult on island with 3 smal downy chicks",
   "latitude": 53.449878,
   "longitude": -2.250516
 },
 {
   "animal_name": "Moorhen",
   "date": "30/07/2011",
   "spatial_ref": "SJ83469490",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450597,
   "longitude": -2.2505202
 },
 {
   "animal_name": "Moorhen",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479484",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.450059,
   "longitude": -2.2503665
 },
 {
   "animal_name": "Moorhen",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479484",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.450059,
   "longitude": -2.2503665
 },
 {
   "animal_name": "Moorhen",
   "date": "28/01/2012",
   "spatial_ref": "SJ83489483",
   "obs_abundance": 6,
   "obs_comment": "",
   "latitude": 53.449969,
   "longitude": -2.2502154
 },
 {
   "animal_name": "Mute Swan",
   "date": "28/01/2012",
   "spatial_ref": "SJ83489483",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.449969,
   "longitude": -2.2502154
 },
 {
   "animal_name": "Nuthatch",
   "date": "30/07/2011",
   "spatial_ref": "SJ83449511",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452484,
   "longitude": -2.2508325
 },
 {
   "animal_name": "Nuthatch",
   "date": "30/07/2011",
   "spatial_ref": "SJ83469490",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450597,
   "longitude": -2.2505202
 },
 {
   "animal_name": "Nuthatch",
   "date": "30/07/2011",
   "spatial_ref": "SJ83769499",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451416,
   "longitude": -2.2460076
 },
 {
   "animal_name": "Nuthatch",
   "date": "28/01/2012",
   "spatial_ref": "SJ83459508",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452215,
   "longitude": -2.2506803
 },
 {
   "animal_name": "Nuthatch",
   "date": "28/01/2012",
   "spatial_ref": "SJ83619478",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.449524,
   "longitude": -2.2482553
 },
 {
   "animal_name": "Nuthatch",
   "date": "28/01/2012",
   "spatial_ref": "SJ83649497",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451232,
   "longitude": -2.2478135
 },
 {
   "animal_name": "Redwing",
   "date": "28/01/2012",
   "spatial_ref": "SJ83419535",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.454641,
   "longitude": -2.251297
 },
 {
   "animal_name": "Redwing",
   "date": "28/01/2012",
   "spatial_ref": "SJ83649497",
   "obs_abundance": 40,
   "obs_comment": "Feeding on ground and flying up into trees when disturbed.",
   "latitude": 53.451232,
   "longitude": -2.2478135
 },
 {
   "animal_name": "Ring-necked Parakeet",
   "date": "30/07/2011",
   "spatial_ref": "SJ83459484",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.450058,
   "longitude": -2.2506676
 },
 {
   "animal_name": "Robin",
   "date": "30/07/2011",
   "spatial_ref": "SJ83449511",
   "obs_abundance": 2,
   "obs_comment": "1 juv & 1 adult",
   "latitude": 53.452484,
   "longitude": -2.2508325
 },
 {
   "animal_name": "Robin",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479518",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.453115,
   "longitude": -2.2503844
 },
 {
   "animal_name": "Robin",
   "date": "30/07/2011",
   "spatial_ref": "SJ83769499",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451416,
   "longitude": -2.2460076
 },
 {
   "animal_name": "Robin",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Robin",
   "date": "28/01/2012",
   "spatial_ref": "SJ83619478",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.449524,
   "longitude": -2.2482553
 },
 {
   "animal_name": "Robin",
   "date": "28/01/2012",
   "spatial_ref": "SJ83649497",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451232,
   "longitude": -2.2478135
 },
 {
   "animal_name": "Robin",
   "date": "28/01/2012",
   "spatial_ref": "SJ83729494",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450965,
   "longitude": -2.2466073
 },
 {
   "animal_name": "Robin",
   "date": "28/01/2012",
   "spatial_ref": "SJ83779500",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451506,
   "longitude": -2.2458576
 },
 {
   "animal_name": "Feral Pigeon",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479484",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.450059,
   "longitude": -2.2503665
 },
 {
   "animal_name": "Feral Pigeon",
   "date": "30/07/2011",
   "spatial_ref": "SJ83639496",
   "obs_abundance": 4,
   "obs_comment": "",
   "latitude": 53.451142,
   "longitude": -2.2479636
 },
 {
   "animal_name": "Feral Pigeon",
   "date": "28/01/2012",
   "spatial_ref": "SJ83489483",
   "obs_abundance": 51,
   "obs_comment": "",
   "latitude": 53.449969,
   "longitude": -2.2502154
 },
 {
   "animal_name": "Song Thrush",
   "date": "30/07/2011",
   "spatial_ref": "SJ83439507",
   "obs_abundance": 2,
   "obs_comment": "1 singing",
   "latitude": 53.452125,
   "longitude": -2.2509809
 },
 {
   "animal_name": "Song Thrush",
   "date": "30/07/2011",
   "spatial_ref": "SJ83449511",
   "obs_abundance": 3,
   "obs_comment": "",
   "latitude": 53.452484,
   "longitude": -2.2508325
 },
 {
   "animal_name": "Song Thrush",
   "date": "30/07/2011",
   "spatial_ref": "SJ83469490",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450597,
   "longitude": -2.2505202
 },
 {
   "animal_name": "Song Thrush",
   "date": "28/01/2012",
   "spatial_ref": "SJ83419535",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.454641,
   "longitude": -2.251297
 },
 {
   "animal_name": "Song Thrush",
   "date": "28/01/2012",
   "spatial_ref": "SJ83429501",
   "obs_abundance": 1,
   "obs_comment": "Singing against bird at point 5",
   "latitude": 53.451585,
   "longitude": -2.2511283
 },
 {
   "animal_name": "Song Thrush",
   "date": "28/01/2012",
   "spatial_ref": "SJ83459508",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452215,
   "longitude": -2.2506803
 },
 {
   "animal_name": "Sparrowhawk",
   "date": "30/07/2011",
   "spatial_ref": "SJ83449526",
   "obs_abundance": 1,
   "obs_comment": "Confirmed breeding (FL) Heard hunger calling continuously from trees at 07:50 hrs. Heard calling from same area approx. 15:00 hrs.",
   "latitude": 53.453833,
   "longitude": -2.2508404
 },
 {
   "animal_name": "Sparrowhawk",
   "date": "28/01/2012",
   "spatial_ref": "SJ83459508",
   "obs_abundance": 1,
   "obs_comment": "Landed in tree close by & then flew off. Seen again in same area 2 hours later flying low through trees.",
   "latitude": 53.452215,
   "longitude": -2.2506803
 },
 {
   "animal_name": "Swift",
   "date": "30/07/2011",
   "spatial_ref": "SJ83769499",
   "obs_abundance": 4,
   "obs_comment": "",
   "latitude": 53.451416,
   "longitude": -2.2460076
 },
 {
   "animal_name": "Treecreeper",
   "date": "30/07/2011",
   "spatial_ref": "SJ83439507",
   "obs_abundance": 1,
   "obs_comment": "On Black Poplar sunning itself and stretching its wings",
   "latitude": 53.452125,
   "longitude": -2.2509809
 },
 {
   "animal_name": "Treecreeper",
   "date": "28/01/2012",
   "spatial_ref": "SJ83649497",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451232,
   "longitude": -2.2478135
 },
 {
   "animal_name": "Tufted Duck",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519489",
   "obs_abundance": 3,
   "obs_comment": "2 males & 1 female",
   "latitude": 53.450509,
   "longitude": -2.2497668
 },
 {
   "animal_name": "Willow Warbler",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479484",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450059,
   "longitude": -2.2503665
 },
 {
   "animal_name": "Willow Warbler",
   "date": "30/07/2011",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Willow Warbler",
   "date": "30/07/2011",
   "spatial_ref": "SJ83589482",
   "obs_abundance": 1,
   "obs_comment": "Singing",
   "latitude": 53.449882,
   "longitude": -2.2487091
 },
 {
   "animal_name": "Woodpigeon",
   "date": "30/07/2011",
   "spatial_ref": "SJ83439507",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.452125,
   "longitude": -2.2509809
 },
 {
   "animal_name": "Woodpigeon",
   "date": "30/07/2011",
   "spatial_ref": "SJ83449511",
   "obs_abundance": 1,
   "obs_comment": "Singing",
   "latitude": 53.452484,
   "longitude": -2.2508325
 },
 {
   "animal_name": "Woodpigeon",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479484",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.450059,
   "longitude": -2.2503665
 },
 {
   "animal_name": "Woodpigeon",
   "date": "30/07/2011",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Woodpigeon",
   "date": "30/07/2011",
   "spatial_ref": "SJ83589482",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.449882,
   "longitude": -2.2487091
 },
 {
   "animal_name": "Woodpigeon",
   "date": "30/07/2011",
   "spatial_ref": "SJ83639496",
   "obs_abundance": 4,
   "obs_comment": "",
   "latitude": 53.451142,
   "longitude": -2.2479636
 },
 {
   "animal_name": "Woodpigeon",
   "date": "30/07/2011",
   "spatial_ref": "SJ83769499",
   "obs_abundance": 4,
   "obs_comment": "",
   "latitude": 53.451416,
   "longitude": -2.2460076
 },
 {
   "animal_name": "Woodpigeon",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Woodpigeon",
   "date": "28/01/2012",
   "spatial_ref": "SJ83779500",
   "obs_abundance": 3,
   "obs_comment": "",
   "latitude": 53.451506,
   "longitude": -2.2458576
 },
 {
   "animal_name": "Wren",
   "date": "30/07/2011",
   "spatial_ref": "SJ83449511",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452484,
   "longitude": -2.2508325
 },
 {
   "animal_name": "Wren",
   "date": "30/07/2011",
   "spatial_ref": "SJ83469490",
   "obs_abundance": 1,
   "obs_comment": "Singing",
   "latitude": 53.450597,
   "longitude": -2.2505202
 },
 {
   "animal_name": "Wren",
   "date": "30/07/2011",
   "spatial_ref": "SJ83479518",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.453115,
   "longitude": -2.2503844
 },
 {
   "animal_name": "Wren",
   "date": "30/07/2011",
   "spatial_ref": "SJ83589482",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.449882,
   "longitude": -2.2487091
 },
 {
   "animal_name": "Wren",
   "date": "30/07/2011",
   "spatial_ref": "SJ83639496",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.451142,
   "longitude": -2.2479636
 },
 {
   "animal_name": "Wren",
   "date": "30/07/2011",
   "spatial_ref": "SJ83769499",
   "obs_abundance": 1,
   "obs_comment": "Singing",
   "latitude": 53.451416,
   "longitude": -2.2460076
 },
 {
   "animal_name": "Wren",
   "date": "28/01/2012",
   "spatial_ref": "SJ83429501",
   "obs_abundance": 2,
   "obs_comment": "",
   "latitude": 53.451585,
   "longitude": -2.2511283
 },
 {
   "animal_name": "Wren",
   "date": "28/01/2012",
   "spatial_ref": "SJ83479522",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.453474,
   "longitude": -2.2503866
 },
 {
   "animal_name": "Wren",
   "date": "28/01/2012",
   "spatial_ref": "SJ83519516",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.452936,
   "longitude": -2.2497811
 },
 {
   "animal_name": "Wren",
   "date": "28/01/2012",
   "spatial_ref": "SJ83619478",
   "obs_abundance": 1,
   "obs_comment": "",
   "latitude": 53.449524,
   "longitude": -2.2482553
 }
];

sightingsData.forEach(function (sighting) {

  sighting.park_name = "Alexandra Park";

  sighting.lat_lng = {
    latitude: sighting.latitude,
    longitude: sighting.longitude
  };

  var day = sighting.date.slice(0, 2);
  var month = sighting.date.slice(3, 5);
  var year = sighting.date.slice(6);

  sighting.date = new Date(year + '-' + month + '-' + day);
});

module.exports = sightingsData;
