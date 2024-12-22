import { SetMetadata } from '@nestjs/common';

/**
 * Decorator to assign roles to a route or method.
 * @param roles Array of roles required to access the method.
 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
