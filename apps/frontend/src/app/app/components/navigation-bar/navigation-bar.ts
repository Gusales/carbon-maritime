import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { History, LayoutDashboard, LucideAngularModule, Plus, Route, Ship } from 'lucide-angular';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './navigation-bar.html',
})
export class NavigationBar {
  readonly LayoutDashboard = LayoutDashboard;
  readonly Ship = Ship;
  readonly Route = Route;
  readonly History = History;
  readonly Plus = Plus;
}
