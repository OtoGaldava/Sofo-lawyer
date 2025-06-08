export const siteUrl = 'https://sofo-advokati.ge';
export const generateRobotsTxt = true;
export const outDir = 'public';
export async function additionalPaths(config) {
  return [
    await config.transform(config, '/'),
    await config.transform(config, '/contacts'),
    await config.transform(config, '/about'),
    await config.transform(config, '/services'),
  ];
}