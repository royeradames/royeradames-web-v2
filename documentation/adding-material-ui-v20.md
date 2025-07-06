Add Angular Material to your project step by step:

## 1. Add Angular Material Dependencies

```typescript:package.json
{
  "name": "royeradames-web-v2",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "serve:ssr:royeradames-web-v2": "node dist/royeradames-web-v2/server/server.mjs"
  },
  "prettier": {
    "overrides": [
      {
        "files": "*.html",
        "options": {
          "parser": "angular"
        }
      }
    ]
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^20.0.0",
    "@angular/cdk": "^20.0.0",
    "@angular/common": "^20.0.0",
    "@angular/compiler": "^20.0.0",
    "@angular/core": "^20.0.0",
    "@angular/forms": "^20.0.0",
    "@angular/material": "^20.0.0",
    "@angular/platform-browser": "^20.0.0",
    "@angular/platform-server": "^20.0.0",
    "@angular/router": "^20.0.0",
    "@angular/ssr": "^20.0.5",
    "express": "^5.1.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0"
  },
  // ... existing devDependencies ...
}
```

## 2. Set Up Material Theme and Global Styles

```css:src/styles.css
/* Import Angular Material theme */
@import '@angular/material/theming';

/* Include the common styles for Angular Material */
@include mat.core();

/* Define a theme */
$primary: mat.define-palette(mat.$indigo-palette);
$accent: mat.define-palette(mat.$pink-palette, A200, A100, A400);
$warn: mat.define-palette(mat.$red-palette);

$theme: mat.define-light-theme((
  color: (
    primary: $primary,
    accent: $accent,
    warn: $warn,
  ),
  typography: mat.define-typography-config(),
  density: 0,
));

/* Include all theme styles for the components */
@include mat.all-component-themes($theme);

/* Global styles */
html, body {
  height: 100%;
  margin: 0;
  font-family: Roboto, "Helvetica Neue", sans-serif;
}

/* Custom Material overrides */
.mat-mdc-card {
  margin: 1rem;
}

.mat-mdc-button {
  margin: 0.5rem;
}
```

## 3. Configure App to Support Material and Animations

```typescript:src/app/app.config.ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations() // Enable animations for Material components
  ]
};
```

## 4. Update App Component to Use Material Components

```typescript:src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'royeradames-web-v2';
}
```

## 5. Update App Template with Material Components

```html:src/app/app.html
<mat-toolbar color="primary">
  <span>{{ title }}</span>
  <span class="spacer"></span>
  <button mat-icon-button>
    <mat-icon>menu</mat-icon>
  </button>
</mat-toolbar>

<div class="container">
  <mat-card class="welcome-card">
    <mat-card-header>
      <mat-card-title>Welcome to {{ title }}</mat-card-title>
      <mat-card-subtitle>Your Angular Material application is ready!</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <p>This application is built with Angular {{ getAngularVersion() }} and Angular Material.</p>
      <p>It includes SSR support and static generation capabilities.</p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-raised-button color="primary">Get Started</button>
      <button mat-button color="accent">Learn More</button>
    </mat-card-actions>
  </mat-card>

  <main>
    <router-outlet />
  </main>
</div>
```

## 6. Update App Styles for Material Layout

```css:src/app/app.css
.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.spacer {
  flex: 1 1 auto;
}

.welcome-card {
  max-width: 600px;
  margin: 2rem auto;
}

mat-toolbar {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

## 7. Add Angular Version Helper to Component

```typescript:src/app/app.ts
import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'royeradames-web-v2';

  getAngularVersion(): string {
    return VERSION.full;
  }
}
```

## 8. Install Dependencies

After making these changes, run:

```bash
npm install
```

## Key Features Added

✅ **Angular Material Components**: Toolbar, Cards, Buttons, Icons
✅ **Material Theming**: Customizable color palette
✅ **SSR Compatible**: Works with your existing prerender setup
✅ **Responsive Design**: Mobile-friendly Material components
✅ **Typography**: Roboto font integration
✅ **Animations**: Smooth Material Design animations

## Common Material Components You Can Now Use

- `MatButtonModule` - Buttons and FABs
- `MatCardModule` - Content containers
- `MatToolbarModule` - App bars and toolbars
- `MatIconModule` - Material Design icons
- `MatFormFieldModule` - Form inputs
- `MatInputModule` - Text inputs
- `MatSelectModule` - Dropdowns
- `MatDialogModule` - Modal dialogs
- `MatSnackBarModule` - Toast notifications
- `MatTableModule` - Data tables
- `MatPaginatorModule` - Pagination
- `MatMenuModule` - Context menus

Your Angular Material setup is now ready and fully compatible with your SSR/static generation configuration!
