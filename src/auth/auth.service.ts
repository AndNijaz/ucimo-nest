/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I am a signup' };
  }

  signin() {
    return { msg: 'I am a signin' };
  }
}
