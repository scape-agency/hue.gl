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

export enum hue_hcl {

    // Grey
    // ------------------------------------------------------------------------

    N0001 = "hcl(0, 0, 90)",
    N0002 = "hcl(0, 0, 82)",
    N0003 = "hcl(0, 0, 74)",
    N0004 = "hcl(0, 0, 66)",
    N0005 = "hcl(0, 0, 58)",
    N0006 = "hcl(0, 0, 50)",
    N0007 = "hcl(0, 0, 42)",
    N0008 = "hcl(0, 0, 34)",
    N0009 = "hcl(0, 0, 26)",

    // Salmon
    // ------------------------------------------------------------------------

    N0151 = "hcl(15, 12, 90)",
    N0152 = "hcl(15, 18, 82)",
    N0153 = "hcl(15, 24, 74)",
    N0154 = "hcl(15, 30, 66)",
    N0155 = "hcl(15, 36, 58)",
    N0156 = "hcl(15, 30, 50)",
    N0157 = "hcl(15, 24, 42)",
    N0158 = "hcl(15, 18, 34)",
    N0159 = "hcl(15, 12, 26)",

    // Orange
    // ------------------------------------------------------------------------

    N0301 = "hcl(30, 12, 90)",
    N0302 = "hcl(30, 18, 82)",
    N0303 = "hcl(30, 24, 74)",
    N0304 = "hcl(30, 30, 66)",
    N0305 = "hcl(30, 36, 58)",
    N0306 = "hcl(30, 30, 50)",
    N0307 = "hcl(30, 24, 42)",
    N0308 = "hcl(30, 18, 34)",
    N0309 = "hcl(30, 12, 26)",

    // Amber
    // ------------------------------------------------------------------------

    N0451 = "hcl(45, 12, 90)",
    N0452 = "hcl(45, 18, 82)",
    N0453 = "hcl(45, 24, 74)",
    N0454 = "hcl(45, 30, 66)",
    N0455 = "hcl(45, 36, 58)",
    N0456 = "hcl(45, 30, 50)",
    N0457 = "hcl(45, 24, 42)",
    N0458 = "hcl(45, 18, 34)",
    N0459 = "hcl(45, 12, 26)",

    // Yellow
    // ------------------------------------------------------------------------

    N0601 = "hcl(60, 12, 90)",
    N0602 = "hcl(60, 18, 82)",
    N0603 = "hcl(60, 24, 74)",
    N0604 = "hcl(60, 30, 66)",
    N0605 = "hcl(60, 36, 58)",
    N0606 = "hcl(60, 30, 50)",
    N0607 = "hcl(60, 24, 42)",
    N0608 = "hcl(60, 18, 34)",
    N0609 = "hcl(60, 12, 26)",

    // Lime
    // ------------------------------------------------------------------------

    N0751 = "hcl(75, 12, 90)",
    N0752 = "hcl(75, 18, 82)",
    N0753 = "hcl(75, 24, 74)",
    N0754 = "hcl(75, 30, 66)",
    N0755 = "hcl(75, 36, 58)",
    N0756 = "hcl(75, 30, 50)",
    N0757 = "hcl(75, 24, 42)",
    N0758 = "hcl(75, 18, 34)",
    N0759 = "hcl(75, 12, 26)",

    // Ecru
    // ------------------------------------------------------------------------

    N0901 = "hcl(90, 12, 90)",
    N0902 = "hcl(90, 18, 82)",
    N0903 = "hcl(90, 24, 74)",
    N0904 = "hcl(90, 30, 66)",
    N0905 = "hcl(90, 36, 58)",
    N0906 = "hcl(90, 30, 50)",
    N0907 = "hcl(90, 24, 42)",
    N0908 = "hcl(90, 18, 34)",
    N0909 = "hcl(90, 12, 26)",

    // Olive
    // ------------------------------------------------------------------------

    N1051 = "hcl(105, 12, 90)",
    N1052 = "hcl(105, 18, 82)",
    N1053 = "hcl(105, 24, 74)",
    N1054 = "hcl(105, 30, 66)",
    N1055 = "hcl(105, 36, 58)",
    N1056 = "hcl(105, 30, 50)",
    N1057 = "hcl(105, 24, 42)",
    N1058 = "hcl(105, 18, 34)",
    N1059 = "hcl(105, 12, 26)",

    // Green
    // ------------------------------------------------------------------------

    N1201 = "hcl(120, 12, 90)",
    N1202 = "hcl(120, 18, 82)",
    N1203 = "hcl(120, 24, 74)",
    N1204 = "hcl(120, 30, 66)",
    N1205 = "hcl(120, 36, 58)",
    N1206 = "hcl(120, 30, 50)",
    N1207 = "hcl(120, 24, 42)",
    N1208 = "hcl(120, 18, 34)",
    N1209 = "hcl(120, 12, 26)",

    // Forest
    // ------------------------------------------------------------------------

    N1351 = "hcl(135, 12, 90)",
    N1352 = "hcl(135, 18, 82)",
    N1353 = "hcl(135, 24, 74)",
    N1354 = "hcl(135, 30, 66)",
    N1355 = "hcl(135, 36, 58)",
    N1356 = "hcl(135, 30, 50)",
    N1357 = "hcl(135, 24, 42)",
    N1358 = "hcl(135, 18, 34)",
    N1359 = "hcl(135, 12, 26)",

    // Jade
    // ------------------------------------------------------------------------

    N1501 = "hcl(150, 12, 90)",
    N1502 = "hcl(150, 18, 82)",
    N1503 = "hcl(150, 24, 74)",
    N1504 = "hcl(150, 30, 66)",
    N1505 = "hcl(150, 36, 58)",
    N1506 = "hcl(150, 30, 50)",
    N1507 = "hcl(150, 24, 42)",
    N1508 = "hcl(150, 18, 34)",
    N1509 = "hcl(150, 12, 26)",

    // Mint
    // ------------------------------------------------------------------------

    N1651 = "hcl(165, 12, 90)",
    N1652 = "hcl(165, 18, 82)",
    N1653 = "hcl(165, 24, 74)",
    N1654 = "hcl(165, 30, 66)",
    N1655 = "hcl(165, 36, 58)",
    N1656 = "hcl(165, 30, 50)",
    N1657 = "hcl(165, 24, 42)",
    N1658 = "hcl(165, 18, 34)",
    N1659 = "hcl(165, 12, 26)",

    // Cyan
    // ------------------------------------------------------------------------

    N1801 = "hcl(180, 12, 90)",
    N1802 = "hcl(180, 18, 82)",
    N1803 = "hcl(180, 24, 74)",
    N1804 = "hcl(180, 30, 66)",
    N1805 = "hcl(180, 36, 58)",
    N1806 = "hcl(180, 30, 50)",
    N1807 = "hcl(180, 24, 42)",
    N1808 = "hcl(180, 18, 34)",
    N1809 = "hcl(180, 12, 26)",

    // Teal
    // ------------------------------------------------------------------------

    N1951 = "hcl(195, 12, 90)",
    N1952 = "hcl(195, 18, 82)",
    N1953 = "hcl(195, 24, 74)",
    N1954 = "hcl(195, 30, 66)",
    N1955 = "hcl(195, 36, 58)",
    N1956 = "hcl(195, 30, 50)",
    N1957 = "hcl(195, 24, 42)",
    N1958 = "hcl(195, 18, 34)",
    N1959 = "hcl(195, 12, 26)",

    // Capri
    // ------------------------------------------------------------------------

    N2101 = "hcl(210, 12, 90)",
    N2102 = "hcl(210, 18, 82)",
    N2103 = "hcl(210, 24, 74)",
    N2104 = "hcl(210, 30, 66)",
    N2105 = "hcl(210, 36, 58)",
    N2106 = "hcl(210, 30, 50)",
    N2107 = "hcl(210, 24, 42)",
    N2108 = "hcl(210, 18, 34)",
    N2109 = "hcl(210, 12, 26)",

    // Sky
    // ------------------------------------------------------------------------

    N2251 = "hcl(225, 12, 90)",
    N2252 = "hcl(225, 18, 82)",
    N2253 = "hcl(225, 24, 74)",
    N2254 = "hcl(225, 30, 66)",
    N2255 = "hcl(225, 36, 58)",
    N2256 = "hcl(225, 30, 50)",
    N2257 = "hcl(225, 24, 42)",
    N2258 = "hcl(225, 18, 34)",
    N2259 = "hcl(225, 12, 26)",

    // Blue
    // ------------------------------------------------------------------------

    N2401 = "hcl(240, 12, 90)",
    N2402 = "hcl(240, 18, 82)",
    N2403 = "hcl(240, 24, 74)",
    N2404 = "hcl(240, 30, 66)",
    N2405 = "hcl(240, 36, 58)",
    N2406 = "hcl(240, 30, 50)",
    N2407 = "hcl(240, 24, 42)",
    N2408 = "hcl(240, 18, 34)",
    N2409 = "hcl(240, 12, 26)",

    // Azure
    // ------------------------------------------------------------------------

    N2551 = "hcl(255, 12, 90)",
    N2552 = "hcl(255, 18, 82)",
    N2553 = "hcl(255, 24, 74)",
    N2554 = "hcl(255, 30, 66)",
    N2555 = "hcl(255, 36, 58)",
    N2556 = "hcl(255, 30, 50)",
    N2557 = "hcl(255, 24, 42)",
    N2558 = "hcl(255, 18, 34)",
    N2559 = "hcl(255, 12, 26)",

    // Indigo
    // ------------------------------------------------------------------------

    N2701 = "hcl(270, 12, 90)",
    N2702 = "hcl(270, 18, 82)",
    N2703 = "hcl(270, 24, 74)",
    N2704 = "hcl(270, 30, 66)",
    N2705 = "hcl(270, 36, 58)",
    N2706 = "hcl(270, 30, 50)",
    N2707 = "hcl(270, 24, 42)",
    N2708 = "hcl(270, 18, 34)",
    N2709 = "hcl(270, 12, 26)",

    // Violet
    // ------------------------------------------------------------------------

    N2851 = "hcl(285, 12, 90)",
    N2852 = "hcl(285, 18, 82)",
    N2853 = "hcl(285, 24, 74)",
    N2854 = "hcl(285, 30, 66)",
    N2855 = "hcl(285, 36, 58)",
    N2856 = "hcl(285, 30, 50)",
    N2857 = "hcl(285, 24, 42)",
    N2858 = "hcl(285, 18, 34)",
    N2859 = "hcl(285, 12, 26)",

    // Magenta
    // ------------------------------------------------------------------------

    N3001 = "hcl(300, 12, 90)",
    N3002 = "hcl(300, 18, 82)",
    N3003 = "hcl(300, 24, 74)",
    N3004 = "hcl(300, 30, 66)",
    N3005 = "hcl(300, 36, 58)",
    N3006 = "hcl(300, 30, 50)",
    N3007 = "hcl(300, 24, 42)",
    N3008 = "hcl(300, 18, 34)",
    N3009 = "hcl(300, 12, 26)",

    // Purple
    // ------------------------------------------------------------------------

    N3151 = "hcl(315, 12, 90)",
    N3152 = "hcl(315, 18, 82)",
    N3153 = "hcl(315, 24, 74)",
    N3154 = "hcl(315, 30, 66)",
    N3155 = "hcl(315, 36, 58)",
    N3156 = "hcl(315, 30, 50)",
    N3157 = "hcl(315, 24, 42)",
    N3158 = "hcl(315, 18, 34)",
    N3159 = "hcl(315, 12, 26)",

    // Rose
    // ------------------------------------------------------------------------

    N3301 = "hcl(330, 12, 90)",
    N3302 = "hcl(330, 18, 82)",
    N3303 = "hcl(330, 24, 74)",
    N3304 = "hcl(330, 30, 66)",
    N3305 = "hcl(330, 36, 58)",
    N3306 = "hcl(330, 30, 50)",
    N3307 = "hcl(330, 24, 42)",
    N3308 = "hcl(330, 18, 34)",
    N3309 = "hcl(330, 12, 26)",

    // Pink
    // ------------------------------------------------------------------------

    N3451 = "hcl(345, 12, 90)",
    N3452 = "hcl(345, 18, 82)",
    N3453 = "hcl(345, 24, 74)",
    N3454 = "hcl(345, 30, 66)",
    N3455 = "hcl(345, 36, 58)",
    N3456 = "hcl(345, 30, 50)",
    N3457 = "hcl(345, 24, 42)",
    N3458 = "hcl(345, 18, 34)",
    N3459 = "hcl(345, 12, 26)",

    // Red
    // ------------------------------------------------------------------------

    N3601 = "hcl(360, 12, 90)",
    N3602 = "hcl(360, 18, 82)",
    N3603 = "hcl(360, 24, 74)",
    N3604 = "hcl(360, 30, 66)",
    N3605 = "hcl(360, 36, 58)",
    N3606 = "hcl(360, 30, 50)",
    N3607 = "hcl(360, 24, 42)",
    N3608 = "hcl(360, 18, 34)",
    N3609 = "hcl(360, 12, 26)",


}


