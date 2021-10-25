import { Component, OnInit } from '@angular/core';

import { Memo } from '../Memo';
import { MemoService } from '../memo.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  title = "メモ管理アプリ";

  memos: Memo[] = [];

  constructor(private memoService: MemoService) { }

  ngOnInit(): void {
    this.getMemosTop5();
  }

  getMemosTop5(): void {
    this.memoService.getMemos().subscribe(memos => this.memos = memos.slice(0, 5));
  }

}
