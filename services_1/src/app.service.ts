import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { LoginDto } from './dto/login.dto';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AppService {
  async login(loginDto: LoginDto): Promise<string> {
    const { username, password } = loginDto;

    const url = `${process.env.KEYCLOAK_HOST}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`;
    const data = new URLSearchParams({
      grant_type: process.env.GRANT,
      client_id: process.env.KEYCLOAK_CLIENT_ID,
      client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
      username: username,
      password: password,
    });

    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error response:', error.response.data);
      throw new Error('Invalid credentials');
    }
  }
}
