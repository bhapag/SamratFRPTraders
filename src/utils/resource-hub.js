// Data-driven clustering for the Resources / Knowledge Hub index.
// Instead of hand-maintaining a slug list per product family (fragile —
// goes stale the moment a new article is added), each resource's primary
// product family is derived from its own `recommendedLinks`, the same
// mechanism product pages already use to surface related resources.

import { hrefProductSlug } from './product-page.js';
import { getGroup, getProduct } from '../data/products.js';

const isComparison = (r) => /(vs|versus|comparison|difference)/i.test(`${r.slug} ${r.title}`);
const isFoundation = (r) => /^(what-is-|types-of-|understanding-)/i.test(r.slug);
const isTechnical = (r) =>
  /(checklist|procurement|technical-specifications|storage|troubleshoot|problems|defects|rfq|document-check)/i.test(
    r.slug,
  );

// Foundation guides first, then general application/how-to content,
// then comparisons, then technical/procurement/troubleshooting last.
function roleRank(resource) {
  if (isFoundation(resource)) return 0;
  if (isComparison(resource)) return 2;
  if (isTechnical(resource)) return 3;
  return 1;
}

export function sortByRole(list) {
  return [...list].sort((a, b) => roleRank(a) - roleRank(b) || a.title.localeCompare(b.title));
}

// Groups published resources by the primary product their recommendedLinks
// point at. Resources with no resolvable product link fall into `ungrouped`.
export function clusterByProduct(publishedResources) {
  const byProduct = new Map();
  const ungrouped = [];

  for (const resource of publishedResources) {
    const slug = (resource.recommendedLinks ?? [])
      .map((link) => hrefProductSlug(link.href))
      .find(Boolean);
    if (!slug) {
      ungrouped.push(resource);
      continue;
    }
    if (!byProduct.has(slug)) byProduct.set(slug, []);
    byProduct.get(slug).push(resource);
  }

  const clusters = [...byProduct.entries()]
    .map(([slug, list]) => {
      const product = getProduct(slug);
      const group = product ? getGroup(product.group) : null;
      return {
        productSlug: slug,
        productName: product?.name ?? slug,
        groupSlug: group?.slug ?? null,
        resources: sortByRole(list),
      };
    })
    .filter((cluster) => cluster.resources.length > 0)
    .sort((a, b) => a.productName.localeCompare(b.productName));

  return { clusters, ungrouped: sortByRole(ungrouped) };
}

export function foundationResources(publishedResources) {
  return publishedResources.filter(isFoundation);
}
