const mapping: Record<string, string> = {
  organizations: 'organization',
  prompts: 'prompt',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
