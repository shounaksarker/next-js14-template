import { customEventHandler } from '@/helpers/backend/middlewares/proxy-wrapper';
import PERMISSIONS from '@/helpers/backend/helpers/permissions';

// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
  return customEventHandler(event, {
    acl: [PERMISSIONS.VIEW_BLACKLIST_LIST],
    proxyPath: event.req.url.replace('/api', '/api/internal'),
  });
});
