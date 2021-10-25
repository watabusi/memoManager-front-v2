import { Memo } from './Memo';

/** メモのモックデータ */
export const MEMOS: Memo[] = [
    { id: 1, title: 'タイトル', memo: '本文', upday: new Date(Date.now()) },
    { id: 2, title: 'title列の制限は、半角で40文字とする予定.', memo: '本文は普段どれくらいメモを書き込んでいるのか調べてから付ける予定。無くてもいいかもしれない\n改行はよくある改行文字', upday: new Date(2021, 9, 10, 10, 10, 10) },
    { id: 3, title: 'test3', memo: 'memo detail demo.', upday: new Date(Date.now()) },
    { id: 4, title: 'test4', memo: 'memo detail demo.', upday: new Date(Date.now()) },
    { id: 5, title: 'test5', memo: 'memo detail demo.', upday: new Date(Date.now()) },
];
// 月は0=1,1=2と入力値-1になっている