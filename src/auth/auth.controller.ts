/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signup')
  signup() {
    return this.AuthService.signup();
  }

  @Post('signin')
  signin() {
    return this.AuthService.signin();
  }
}
