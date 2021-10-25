import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Memo } from './Memo';
import { MEMOS } from './mock-memo';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  constructor() { }

  // getMemo(): Observable<Memo> {

  // }

  getMemos(): Observable<Memo[]> {
    const memos = of(MEMOS);
    return memos;
  }
}
