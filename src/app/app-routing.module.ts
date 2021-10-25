import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top/top.component';

/** パス群
 * path:パス
 * component:どのクラスのコンポーネントか
 * pathが空のものはデフォルトルートの設定、redirectToで遷移先を示してpathMatch:fullで完全一致を条件にしている
 */
const routes: Routes = [
  { path: 'top', component: TopComponent },
  { path: '', redirectTo: '/top', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
