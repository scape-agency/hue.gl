// Copyright 2023 Scape Agency BV

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

// http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// ============================================================================
//
// hue.gl
// 0.0.11
//
// ============================================================================


// General
// ============================================================================

export enum hue_hex {

    // Grey
    // ------------------------------------------------------------------------

    N0001 = '#e2e2e2',
    N0002 = '#cccccc',
    N0003 = '#b6b6b6',
    N0004 = '#a0a0a0',
    N0005 = '#8b8b8b',
    N0006 = '#777777',
    N0007 = '#636363',
    N0008 = '#505050',
    N0009 = '#3e3e3e',

    // Salmon
    // ------------------------------------------------------------------------

    N0151 = '#fadbdd',
    N0152 = '#eec0c4',
    N0153 = '#e2a6ac',
    N0154 = '#d48c94',
    N0155 = '#c6727d',
    N0156 = '#a7636b',
    N0157 = '#89545a',
    N0158 = '#6b4549',
    N0159 = '#4f3739',

    // Orange
    // ------------------------------------------------------------------------

    N0301 = '#fadbd7',
    N0302 = '#edc1bc',
    N0303 = '#e0a8a1',
    N0304 = '#d28e87',
    N0305 = '#c4756e',
    N0306 = '#a5655f',
    N0307 = '#875650',
    N0308 = '#6b4642',
    N0309 = '#4f3835',

    // Amber
    // ------------------------------------------------------------------------

    N0451 = '#f8dcd3',
    N0452 = '#eac3b5',
    N0453 = '#dcaa98',
    N0454 = '#cd927c',
    N0455 = '#be7960',
    N0456 = '#a06954',
    N0457 = '#845848',
    N0458 = '#68483c',
    N0459 = '#4d3931',

    // Yellow
    // ------------------------------------------------------------------------

    N0601 = '#f4decf',
    N0602 = '#e5c6af',
    N0603 = '#d5ad90',
    N0604 = '#c59672',
    N0605 = '#b57f55',
    N0606 = '#996d4b',
    N0607 = '#7e5b41',
    N0608 = '#644a38',
    N0609 = '#4a3a2e',

    // Lime
    // ------------------------------------------------------------------------

    N0751 = '#efe0cc',
    N0752 = '#dec8ac',
    N0753 = '#cdb18c',
    N0754 = '#bb9b6c',
    N0755 = '#a9854e',
    N0756 = '#8f7145',
    N0757 = '#765f3d',
    N0758 = '#5e4d34',
    N0759 = '#473c2c',

    // Ecru
    // ------------------------------------------------------------------------

    N0901 = '#eae2cb',
    N0902 = '#d6cbaa',
    N0903 = '#c2b58a',
    N0904 = '#af9f6a',
    N0905 = '#9b8a4b',
    N0906 = '#847643',
    N0907 = '#6d623b',
    N0908 = '#584f33',
    N0909 = '#433d2b',

    // Olive
    // ------------------------------------------------------------------------

    N1051 = '#e3e4cc',
    N1052 = '#cdceab',
    N1053 = '#b7b98b',
    N1054 = '#a1a46b',
    N1055 = '#8b8f4c',
    N1056 = '#777a44',
    N1057 = '#63663c',
    N1058 = '#505234',
    N1059 = '#3e3f2c',

    // Green
    // ------------------------------------------------------------------------

    N1201 = '#dde6ce',
    N1202 = '#c4d1ae',
    N1203 = '#abbc8f',
    N1204 = '#92a870',
    N1205 = '#7a9453',
    N1206 = '#697e49',
    N1207 = '#586840',
    N1208 = '#485437',
    N1209 = '#39402d',

    // Forest
    // ------------------------------------------------------------------------

    N1351 = '#d7e7d2',
    N1352 = '#bbd3b3',
    N1353 = '#9fbf96',
    N1354 = '#83ab79',
    N1355 = '#68975d',
    N1356 = '#5a8151',
    N1357 = '#4d6b46',
    N1358 = '#40553b',
    N1359 = '#344130',

    // Jade
    // ------------------------------------------------------------------------

    N1501 = '#d1e8d6',
    N1502 = '#b2d4ba',
    N1503 = '#93c19f',
    N1504 = '#74ad84',
    N1505 = '#559a6a',
    N1506 = '#4b835c',
    N1507 = '#426c4e',
    N1508 = '#395741',
    N1509 = '#2f4234',

    // Mint
    // ------------------------------------------------------------------------

    N1651 = '#cde9dc',
    N1652 = '#abd6c2',
    N1653 = '#89c2a9',
    N1654 = '#66af91',
    N1655 = '#409b7a',
    N1656 = '#3c8469',
    N1657 = '#376d58',
    N1658 = '#315848',
    N1659 = '#2b4338',

    // Cyan
    // ------------------------------------------------------------------------

    N1801 = '#c9e9e2',
    N1802 = '#a6d6cb',
    N1803 = '#81c3b5',
    N1804 = '#5baf9f',
    N1805 = '#2a9c8a',
    N1806 = '#2d8576',
    N1807 = '#2d6e62',
    N1808 = '#2b584f',
    N1809 = '#28433d',

    // Teal
    // ------------------------------------------------------------------------

    N1951 = '#c8e9e8',
    N1952 = '#a3d6d4',
    N1953 = '#7dc3c0',
    N1954 = '#53afad',
    N1955 = '#109c9a',
    N1956 = '#208583',
    N1957 = '#266e6d',
    N1958 = '#275857',
    N1959 = '#264342',

    // Capri
    // ------------------------------------------------------------------------

    N2101 = '#c8e9ed',
    N2102 = '#a3d5dc',
    N2103 = '#7dc2cb',
    N2104 = '#52aeba',
    N2105 = '#019baa',
    N2106 = '#1c8490',
    N2107 = '#246d76',
    N2108 = '#27575e',
    N2109 = '#264246',

    // Sky
    // ------------------------------------------------------------------------

    N2251 = '#cae8f2',
    N2252 = '#a6d4e3',
    N2253 = '#81c0d4',
    N2254 = '#58acc6',
    N2255 = '#1a99b7',
    N2256 = '#25829a',
    N2257 = '#2a6c7e',
    N2258 = '#2a5664',
    N2259 = '#27424a',

    // Blue
    // ------------------------------------------------------------------------

    N2401 = '#cee6f6',
    N2402 = '#acd2e9',
    N2403 = '#8abedc',
    N2404 = '#65aace',
    N2405 = '#3696c1',
    N2406 = '#3680a3',
    N2407 = '#346a85',
    N2408 = '#305568',
    N2409 = '#2b414d',

    // Azure
    // ------------------------------------------------------------------------

    N2551 = '#d3e5f8',
    N2552 = '#b5cfec',
    N2553 = '#95bbe0',
    N2554 = '#75a6d4',
    N2555 = '#5192c8',
    N2556 = '#497ca8',
    N2557 = '#416789',
    N2558 = '#39536b',
    N2559 = '#303f4f',

    // Indigo
    // ------------------------------------------------------------------------

    N2701 = '#dae3f9',
    N2702 = '#becdee',
    N2703 = '#a3b7e2',
    N2704 = '#87a2d6',
    N2705 = '#6a8dca',
    N2706 = '#5d78aa',
    N2707 = '#4f648b',
    N2708 = '#42516c',
    N2709 = '#353e50',

    // Violet
    // ------------------------------------------------------------------------

    N2851 = '#e0e1f9',
    N2852 = '#c8caed',
    N2853 = '#b1b3e1',
    N2854 = '#999dd5',
    N2855 = '#8188c8',
    N2856 = '#6f74a8',
    N2857 = '#5d6189',
    N2858 = '#4c4e6c',
    N2859 = '#3b3c4f',

    // Magenta
    // ------------------------------------------------------------------------

    N3001 = '#e7dff6',
    N3002 = '#d3c7e9',
    N3003 = '#beafdc',
    N3004 = '#aa98cf',
    N3005 = '#9582c2',
    N3006 = '#7f6fa3',
    N3007 = '#6a5d86',
    N3008 = '#554c69',
    N3009 = '#413b4d',

    // Purple
    // ------------------------------------------------------------------------

    N3151 = '#edddf3',
    N3152 = '#dcc4e4',
    N3153 = '#caacd6',
    N3154 = '#b994c7',
    N3155 = '#a77cb9',
    N3156 = '#8d6b9c',
    N3157 = '#755a7f',
    N3158 = '#5d4964',
    N3159 = '#46394b',

    // Rose
    // ------------------------------------------------------------------------

    N3301 = '#f3dcee',
    N3302 = '#e3c2dd',
    N3303 = '#d4a9cd',
    N3304 = '#c590bc',
    N3305 = '#b577ac',
    N3306 = '#996791',
    N3307 = '#7d5777',
    N3308 = '#63475f',
    N3309 = '#4a3847',

    // Pink
    // ------------------------------------------------------------------------

    N3451 = '#f7dbe9',
    N3452 = '#e9c1d5',
    N3453 = '#dba7c2',
    N3454 = '#cd8daf',
    N3455 = '#bf739d',
    N3456 = '#a16485',
    N3457 = '#84546e',
    N3458 = '#684658',
    N3459 = '#4d3743',

    // Red
    // ------------------------------------------------------------------------

    N3601 = '#f9dbe3',
    N3602 = '#edc0cd',
    N3603 = '#e0a6b7',
    N3604 = '#d38ca2',
    N3605 = '#c5728d',
    N3606 = '#a66278',
    N3607 = '#885464',
    N3608 = '#6b4551',
    N3609 = '#4f373e',


}


