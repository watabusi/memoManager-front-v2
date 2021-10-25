import { Component, OnInit } from '@angular/core';

import { Memo } from '../service-memo/Memo';
import { MemoService } from '../service-memo/memo.service';
import { MemoTag } from '../service-memotag/memo-tag';
import { MemoTagService } from '../service-memotag/memo-tag.service';
import { Tag } from '../service-tag/tag';
import { TagService } from '../service-tag/tag.service';

@Component({
  selector: 'app-memo-view',
  templateUrl: './memo-view.component.html',
  styleUrls: ['./memo-view.component.css']
})
export class MemoViewComponent implements OnInit {

  memos: Memo[] = [];
  tags: Tag[] = [];
  memotags: MemoTag[] = [];
  sMemos: Memo[] = [];

  pickUpTag = "";
  sortColum = "";
  isUpperSort = false;

  constructor(
    private memoService: MemoService,
    private tagService: TagService,
    private memotagService: MemoTagService
  ) { }

  ngOnInit(): void {
    this.getMemos();
    this.getSMemos();
    this.getTags();
    this.getMemoTags();
    this.pickUpTag = "all";
    this.sortColum = "default";
  }

  getMemos(): void {
    this.memoService.getMemos().subscribe(memos => this.memos = memos);
  }

  getSMemos(): void {
    this.memoService.getMemos().subscribe(memos => this.sMemos = memos);
  }

  getTags(): void {
    this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

  getMemoTags(): void {
    this.memotagService.getMemoTags().subscribe(memotags => this.memotags = memotags);
  }

  sortMemos(): void {
    this.sMemos = [];

    let tagId = 0;
    this.tags.forEach(element => {
      if (element.tag == this.pickUpTag) {
        tagId = element.id;
      }
    });

    // 宣言時に空でもいいから代入しないと実行時に警告で止められてしまう
    let memoIds: number[] = [];

    this.memotags.forEach(element => {
      if (element.tagId == tagId) {
        memoIds.push(element.memoId);
      }
    });

    if (memoIds.length > 0) {
      for (let i = 0; i < memoIds.length; i++) {
        this.sMemos.push(this.memos[memoIds[i] - 1]);
      }
    }

    this.sMemos.sort((a, b) => {
      switch (this.sortColum) {
        case "登録順(デフォルト)":
          if (this.isUpperSort) {
            return a.id - b.id;
          }
          else {
            return b.id - a.id;
          }

        case "五十音順":
          return (a.title < b.title) ? -1 : 1;
        case "編集順":
          return (a.upday < b.upday) ? -1 : 1;
      }
      return 0;
    })
  }
}
