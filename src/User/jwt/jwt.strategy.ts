import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from '../service/user.service'; 
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY, 
    });
  }

  async validate(payload: JwtPayload) {
    const { sub } = payload; 
    const user = await this.userService.getUserById(sub);
    if (!user) {
      throw new Error('User not found');
    }
    return user; 
  }
}