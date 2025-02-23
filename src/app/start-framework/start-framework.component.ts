import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-start-framework',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './start-framework.component.html',
  styleUrl: './start-framework.component.css',
})
export class StartFrameworkComponent {}
