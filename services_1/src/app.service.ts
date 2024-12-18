import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AppService {
  
    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;

        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('client_id', keycloakConfig.clientId);
        params.append('client_secret', keycloakConfig.secret);
        params.append('username', username);
        params.append('password', password);

        try {
            const response = await axios.post(
                `${keycloakConfig.authServerUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`,
                params,
                {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                },
            );

            return response.data;
        } catch (error) {
            throw new Error('Login failed: ' + error.response.data.error_description);
        }
    }

}
