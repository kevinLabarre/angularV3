import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../share/interfaces/cession/user.interface';
import { FamilyCompositionResponse } from '../../interfaces/profile/family-composition-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)

  baseUrl = 'https://movia.bcc.cd'

  getProfile(): Observable<FamilyCompositionResponse> {
    return this.http.get<FamilyCompositionResponse>(this.baseUrl + '/profile')
  }


}
