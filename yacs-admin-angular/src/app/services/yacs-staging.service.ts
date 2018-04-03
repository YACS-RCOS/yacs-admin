import {Injectable} from '@angular/core';
import {YacsProdService} from './yacs-prod.service';

@Injectable()
export class YacsStagingService extends YacsProdService{
  baseUrl='https://127.0.0.1/api/v5';
}
