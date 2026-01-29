// Mock app params since we don't have Base44 platform integration
export const appParams = {
    appId: 'mock-app-id',
    token: null,
    fromUrl: typeof window !== 'undefined' ? window.location.href : '',
    functionsVersion: 'prod',
    appBaseUrl: typeof window !== 'undefined' ? window.location.origin : '',
};
