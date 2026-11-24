const NON_PRODUCTION_HOSTS = [/\.netlify\.app$/, /^example\.com$/, /^localhost$/];

export const isIndexable = (site?: URL): boolean => {
  if (!site) return false;
  return !NON_PRODUCTION_HOSTS.some((pattern) => pattern.test(site.hostname));
};
