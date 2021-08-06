import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// to determine whether a request will be handled by the route handler or not
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
