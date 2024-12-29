
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { KeycloakService } from '../keycloak/keycloak.service';

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(
        private readonly keycloakService: KeycloakService,
        private reflector: Reflector,
    ) {}

  async canActivate( context: ExecutionContext ): Promise<boolean> {
    const request = context.switchToRpc().getData(); 
    const token = request.token;
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());

    // console.log(token);

    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    
    // console.log('daz hna;' + requiredRoles + typeof(requiredRoles));
    
    const decodedToken = await this.keycloakService.verifyToken(token);
    
    if (!this.keycloakService.hasRole(decodedToken, requiredRoles)) {
      throw new UnauthorizedException('User does not have the required role');
    }

    return true;
  }
}