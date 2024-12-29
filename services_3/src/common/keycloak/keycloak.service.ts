import { Injectable, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class KeycloakService {
  private keycloakHost = 'http://localhost:8080';
  private realmName = 'EmployeeManagement';

  async verifyToken(token: string): Promise<any> {
    const publicKey = await this.fetchKeycloakPublicKey();
    try {
      return jwt.verify(token, publicKey, { algorithms: ['RS256'] });
    } catch (error) {
        console.error('Token verification failed:', error.message);
        throw new UnauthorizedException('Invalid token');
    }
  }

  async fetchKeycloakPublicKey(): Promise<string> {
    const url = `${this.keycloakHost}/realms/${this.realmName}/protocol/openid-connect/certs`;
    const response = await axios.get(url);
    const key = response.data.keys[0].x5c[0];
    return `-----BEGIN CERTIFICATE-----\n${key}\n-----END CERTIFICATE-----`;
  }

  hasRole(decodedToken: any, requiredRole: any): boolean {
    const roles = decodedToken.realm_access?.roles || [];
    const test = roles.toString().includes(requiredRole.toString());


    // console.log('roles:' + roles + typeof(roles));
    // console.log('requiredRole:' + requiredRole + typeof(requiredRole));
    // console.log(test);
    
    
    return test ;
  }
}
