// Copyright 2024 Scape Agency BV

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
// 0.0.23
//
// ============================================================================


// General
// ============================================================================

export enum hue_rgb {

    // Grey
    // ------------------------------------------------------------------------

    N0001 = "rgb(226, 226, 226)",
    N0002 = "rgb(204, 204, 204)",
    N0003 = "rgb(182, 182, 182)",
    N0004 = "rgb(160, 160, 160)",
    N0005 = "rgb(139, 139, 139)",
    N0006 = "rgb(119, 119, 119)",
    N0007 = "rgb(99, 99, 99)",
    N0008 = "rgb(80, 80, 80)",
    N0009 = "rgb(62, 62, 62)",

    // Salmon
    // ------------------------------------------------------------------------

    N0151 = "rgb(250, 219, 221)",
    N0152 = "rgb(238, 192, 196)",
    N0153 = "rgb(226, 166, 172)",
    N0154 = "rgb(212, 140, 148)",
    N0155 = "rgb(198, 114, 125)",
    N0156 = "rgb(167, 99, 107)",
    N0157 = "rgb(137, 84, 90)",
    N0158 = "rgb(107, 69, 73)",
    N0159 = "rgb(79, 55, 57)",

    // Orange
    // ------------------------------------------------------------------------

    N0301 = "rgb(250, 219, 215)",
    N0302 = "rgb(237, 193, 188)",
    N0303 = "rgb(224, 168, 161)",
    N0304 = "rgb(210, 142, 135)",
    N0305 = "rgb(196, 117, 110)",
    N0306 = "rgb(165, 101, 95)",
    N0307 = "rgb(135, 86, 80)",
    N0308 = "rgb(107, 70, 66)",
    N0309 = "rgb(79, 56, 53)",

    // Amber
    // ------------------------------------------------------------------------

    N0451 = "rgb(248, 220, 211)",
    N0452 = "rgb(234, 195, 181)",
    N0453 = "rgb(220, 170, 152)",
    N0454 = "rgb(205, 146, 124)",
    N0455 = "rgb(190, 121, 96)",
    N0456 = "rgb(160, 105, 84)",
    N0457 = "rgb(132, 88, 72)",
    N0458 = "rgb(104, 72, 60)",
    N0459 = "rgb(77, 57, 49)",

    // Yellow
    // ------------------------------------------------------------------------

    N0601 = "rgb(244, 222, 207)",
    N0602 = "rgb(229, 198, 175)",
    N0603 = "rgb(213, 173, 144)",
    N0604 = "rgb(197, 150, 114)",
    N0605 = "rgb(181, 127, 85)",
    N0606 = "rgb(153, 109, 75)",
    N0607 = "rgb(126, 91, 65)",
    N0608 = "rgb(100, 74, 56)",
    N0609 = "rgb(74, 58, 46)",

    // Lime
    // ------------------------------------------------------------------------

    N0751 = "rgb(239, 224, 204)",
    N0752 = "rgb(222, 200, 172)",
    N0753 = "rgb(205, 177, 140)",
    N0754 = "rgb(187, 155, 108)",
    N0755 = "rgb(169, 133, 78)",
    N0756 = "rgb(143, 113, 69)",
    N0757 = "rgb(118, 95, 61)",
    N0758 = "rgb(94, 77, 52)",
    N0759 = "rgb(71, 60, 44)",

    // Ecru
    // ------------------------------------------------------------------------

    N0901 = "rgb(234, 226, 203)",
    N0902 = "rgb(214, 203, 170)",
    N0903 = "rgb(194, 181, 138)",
    N0904 = "rgb(175, 159, 106)",
    N0905 = "rgb(155, 138, 75)",
    N0906 = "rgb(132, 118, 67)",
    N0907 = "rgb(109, 98, 59)",
    N0908 = "rgb(88, 79, 51)",
    N0909 = "rgb(67, 61, 43)",

    // Olive
    // ------------------------------------------------------------------------

    N1051 = "rgb(227, 228, 204)",
    N1052 = "rgb(205, 206, 171)",
    N1053 = "rgb(183, 185, 139)",
    N1054 = "rgb(161, 164, 107)",
    N1055 = "rgb(139, 143, 76)",
    N1056 = "rgb(119, 122, 68)",
    N1057 = "rgb(99, 102, 60)",
    N1058 = "rgb(80, 82, 52)",
    N1059 = "rgb(62, 63, 44)",

    // Green
    // ------------------------------------------------------------------------

    N1201 = "rgb(221, 230, 206)",
    N1202 = "rgb(196, 209, 174)",
    N1203 = "rgb(171, 188, 143)",
    N1204 = "rgb(146, 168, 112)",
    N1205 = "rgb(122, 148, 83)",
    N1206 = "rgb(105, 126, 73)",
    N1207 = "rgb(88, 104, 64)",
    N1208 = "rgb(72, 84, 55)",
    N1209 = "rgb(57, 64, 45)",

    // Forest
    // ------------------------------------------------------------------------

    N1351 = "rgb(215, 231, 210)",
    N1352 = "rgb(187, 211, 179)",
    N1353 = "rgb(159, 191, 150)",
    N1354 = "rgb(131, 171, 121)",
    N1355 = "rgb(104, 151, 93)",
    N1356 = "rgb(90, 129, 81)",
    N1357 = "rgb(77, 107, 70)",
    N1358 = "rgb(64, 85, 59)",
    N1359 = "rgb(52, 65, 48)",

    // Jade
    // ------------------------------------------------------------------------

    N1501 = "rgb(209, 232, 214)",
    N1502 = "rgb(178, 212, 186)",
    N1503 = "rgb(147, 193, 159)",
    N1504 = "rgb(116, 173, 132)",
    N1505 = "rgb(85, 154, 106)",
    N1506 = "rgb(75, 131, 92)",
    N1507 = "rgb(66, 108, 78)",
    N1508 = "rgb(57, 87, 65)",
    N1509 = "rgb(47, 66, 52)",

    // Mint
    // ------------------------------------------------------------------------

    N1651 = "rgb(205, 233, 220)",
    N1652 = "rgb(171, 214, 194)",
    N1653 = "rgb(137, 194, 169)",
    N1654 = "rgb(102, 175, 145)",
    N1655 = "rgb(64, 155, 122)",
    N1656 = "rgb(60, 132, 105)",
    N1657 = "rgb(55, 109, 88)",
    N1658 = "rgb(49, 88, 72)",
    N1659 = "rgb(43, 67, 56)",

    // Cyan
    // ------------------------------------------------------------------------

    N1801 = "rgb(201, 233, 226)",
    N1802 = "rgb(166, 214, 203)",
    N1803 = "rgb(129, 195, 181)",
    N1804 = "rgb(91, 175, 159)",
    N1805 = "rgb(42, 156, 138)",
    N1806 = "rgb(45, 133, 118)",
    N1807 = "rgb(45, 110, 98)",
    N1808 = "rgb(43, 88, 79)",
    N1809 = "rgb(40, 67, 61)",

    // Teal
    // ------------------------------------------------------------------------

    N1951 = "rgb(200, 233, 232)",
    N1952 = "rgb(163, 214, 212)",
    N1953 = "rgb(125, 195, 192)",
    N1954 = "rgb(83, 175, 173)",
    N1955 = "rgb(16, 156, 154)",
    N1956 = "rgb(32, 133, 131)",
    N1957 = "rgb(38, 110, 109)",
    N1958 = "rgb(39, 88, 87)",
    N1959 = "rgb(38, 67, 66)",

    // Capri
    // ------------------------------------------------------------------------

    N2101 = "rgb(200, 233, 237)",
    N2102 = "rgb(163, 213, 220)",
    N2103 = "rgb(125, 194, 203)",
    N2104 = "rgb(82, 174, 186)",
    N2105 = "rgb(1, 155, 170)",
    N2106 = "rgb(28, 132, 144)",
    N2107 = "rgb(36, 109, 118)",
    N2108 = "rgb(39, 87, 94)",
    N2109 = "rgb(38, 66, 70)",

    // Sky
    // ------------------------------------------------------------------------

    N2251 = "rgb(202, 232, 242)",
    N2252 = "rgb(166, 212, 227)",
    N2253 = "rgb(129, 192, 212)",
    N2254 = "rgb(88, 172, 198)",
    N2255 = "rgb(26, 153, 183)",
    N2256 = "rgb(37, 130, 154)",
    N2257 = "rgb(42, 108, 126)",
    N2258 = "rgb(42, 86, 100)",
    N2259 = "rgb(39, 66, 74)",

    // Blue
    // ------------------------------------------------------------------------

    N2401 = "rgb(206, 230, 246)",
    N2402 = "rgb(172, 210, 233)",
    N2403 = "rgb(138, 190, 220)",
    N2404 = "rgb(101, 170, 206)",
    N2405 = "rgb(54, 150, 193)",
    N2406 = "rgb(54, 128, 163)",
    N2407 = "rgb(52, 106, 133)",
    N2408 = "rgb(48, 85, 104)",
    N2409 = "rgb(43, 65, 77)",

    // Azure
    // ------------------------------------------------------------------------

    N2551 = "rgb(211, 229, 248)",
    N2552 = "rgb(181, 207, 236)",
    N2553 = "rgb(149, 187, 224)",
    N2554 = "rgb(117, 166, 212)",
    N2555 = "rgb(81, 146, 200)",
    N2556 = "rgb(73, 124, 168)",
    N2557 = "rgb(65, 103, 137)",
    N2558 = "rgb(57, 83, 107)",
    N2559 = "rgb(48, 63, 79)",

    // Indigo
    // ------------------------------------------------------------------------

    N2701 = "rgb(218, 227, 249)",
    N2702 = "rgb(190, 205, 238)",
    N2703 = "rgb(163, 183, 226)",
    N2704 = "rgb(135, 162, 214)",
    N2705 = "rgb(106, 141, 202)",
    N2706 = "rgb(93, 120, 170)",
    N2707 = "rgb(79, 100, 139)",
    N2708 = "rgb(66, 81, 108)",
    N2709 = "rgb(53, 62, 80)",

    // Violet
    // ------------------------------------------------------------------------

    N2851 = "rgb(224, 225, 249)",
    N2852 = "rgb(200, 202, 237)",
    N2853 = "rgb(177, 179, 225)",
    N2854 = "rgb(153, 157, 213)",
    N2855 = "rgb(129, 136, 200)",
    N2856 = "rgb(111, 116, 168)",
    N2857 = "rgb(93, 97, 137)",
    N2858 = "rgb(76, 78, 108)",
    N2859 = "rgb(59, 60, 79)",

    // Magenta
    // ------------------------------------------------------------------------

    N3001 = "rgb(231, 223, 246)",
    N3002 = "rgb(211, 199, 233)",
    N3003 = "rgb(190, 175, 220)",
    N3004 = "rgb(170, 152, 207)",
    N3005 = "rgb(149, 130, 194)",
    N3006 = "rgb(127, 111, 163)",
    N3007 = "rgb(106, 93, 134)",
    N3008 = "rgb(85, 76, 105)",
    N3009 = "rgb(65, 59, 77)",

    // Purple
    // ------------------------------------------------------------------------

    N3151 = "rgb(237, 221, 243)",
    N3152 = "rgb(220, 196, 228)",
    N3153 = "rgb(202, 172, 214)",
    N3154 = "rgb(185, 148, 199)",
    N3155 = "rgb(167, 124, 185)",
    N3156 = "rgb(141, 107, 156)",
    N3157 = "rgb(117, 90, 127)",
    N3158 = "rgb(93, 73, 100)",
    N3159 = "rgb(70, 57, 75)",

    // Rose
    // ------------------------------------------------------------------------

    N3301 = "rgb(243, 220, 238)",
    N3302 = "rgb(227, 194, 221)",
    N3303 = "rgb(212, 169, 205)",
    N3304 = "rgb(197, 144, 188)",
    N3305 = "rgb(181, 119, 172)",
    N3306 = "rgb(153, 103, 145)",
    N3307 = "rgb(125, 87, 119)",
    N3308 = "rgb(99, 71, 95)",
    N3309 = "rgb(74, 56, 71)",

    // Pink
    // ------------------------------------------------------------------------

    N3451 = "rgb(247, 219, 233)",
    N3452 = "rgb(233, 193, 213)",
    N3453 = "rgb(219, 167, 194)",
    N3454 = "rgb(205, 141, 175)",
    N3455 = "rgb(191, 115, 157)",
    N3456 = "rgb(161, 100, 133)",
    N3457 = "rgb(132, 84, 110)",
    N3458 = "rgb(104, 70, 88)",
    N3459 = "rgb(77, 55, 67)",

    // Red
    // ------------------------------------------------------------------------

    N3601 = "rgb(249, 219, 227)",
    N3602 = "rgb(237, 192, 205)",
    N3603 = "rgb(224, 166, 183)",
    N3604 = "rgb(211, 140, 162)",
    N3605 = "rgb(197, 114, 141)",
    N3606 = "rgb(166, 98, 120)",
    N3607 = "rgb(136, 84, 100)",
    N3608 = "rgb(107, 69, 81)",
    N3609 = "rgb(79, 55, 62)",


}


