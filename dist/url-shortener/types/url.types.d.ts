export type UrlPattern<T> = T extends `${'http' | 'https'}://${string}` ? 'Valid URL' : T extends `www.${string}` ? 'Valid URL' : 'Invalid URL';
