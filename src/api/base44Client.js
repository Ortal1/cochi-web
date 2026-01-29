// Mock Base44 SDK client
// Since @base44/sdk is proprietary, we'll create a mock implementation

const createMockClient = () => {
    return {
        entities: {
            Lead: {
                create: async (data) => {
                    console.log('Mock Lead created:', data);
                    // Simulate API delay
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    return { success: true, data };
                }
            }
        },
        auth: {
            me: async () => {
                return null; // No auth for standalone version
            },
            logout: () => {
                console.log('Mock logout');
            },
            redirectToLogin: () => {
                console.log('Mock redirect to login');
            }
        }
    };
};

export const base44 = createMockClient();
