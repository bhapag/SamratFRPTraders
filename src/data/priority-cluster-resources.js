// Content clusters for four grades that had little or no supporting material:
// ISO Polyester Resin, ISO Gelcoat, UV Stabilized Sheet Grade Yellow Resin and
// Polyester Putty Resin.
//
// Scope rules that apply to every guide in these clusters:
//   - Samrat FRP Traders is a trader, supplier, importer and reseller in Nepal.
//     It does not manufacture, formulate, test or certify any product here, and
//     no guide may imply otherwise.
//   - Specifications belong to the manufacturer who issued them. Where a figure
//     is quoted it is attributed to Samrat Poly Resins, India and to the named
//     document. Where no document is on file, no figure is stated at all.
//   - ISO Polyester Resin, ISO Gelcoat and UV Stabilized Sheet Grade Yellow
//     Resin have no supplier TDS or SDS on file yet. Those three clusters carry
//     no grade values, no dosages and no shelf-life or pack-size claims, and
//     they say so on the page rather than leaving the omission unexplained.
//     Polyester Putty Resin does have both documents on file, so its guide may
//     quote published values with the issuer named.
//   - No stock, lead time, delivery promise or price is stated anywhere.
//   - Each guide is written from its own subject. None is a template fill.

import { alliedConsumablesCluster } from './clusters/allied-consumables.js';
import { gpYellowResinCluster } from './clusters/gp-yellow-resin.js';
import { isoGelcoatCluster } from './clusters/iso-gelcoat.js';
import { isoPolyesterResinCluster } from './clusters/iso-polyester-resin.js';
import { polyesterPuttyResinCluster } from './clusters/polyester-putty-resin.js';
import { uvStabilizedSheetResinCluster } from './clusters/uv-stabilized-sheet-resin.js';

export const priorityClusterResources = Object.freeze([
  ...isoPolyesterResinCluster,
  ...isoGelcoatCluster,
  ...uvStabilizedSheetResinCluster,
  ...polyesterPuttyResinCluster,
  ...alliedConsumablesCluster,
  ...gpYellowResinCluster,
]);
