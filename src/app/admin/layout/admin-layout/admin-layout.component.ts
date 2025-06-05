import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { NavbarComponent } from "../../../admin/components/navbar/navbar.component";

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
