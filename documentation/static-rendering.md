

## Current Setup

Your project has Angular SSR (Server-Side Rendering) configured with **prerendering mode**, which generates static files at build time. Here's the key configuration:
Read file: src/app/app.routes.server.ts

## Angular's Rendering Modes

Angular provides three main rendering strategies:

### 1. **Prerender (Static Generation)** - What you currently have
```typescript
{
  path: '**',
  renderMode: RenderMode.Prerender
}
```
- **When**: Pages are pre-built at **build time**
- **Best for**: Static content, blogs, marketing pages, docs
- **Result**: Static HTML files served directly from CDN

### 2. **Server-Side Rendering (SSR)**
```typescript
{
  path: '/dynamic-page',
  renderMode: RenderMode.Server
}
```
- **When**: Pages are rendered on **each request**
- **Best for**: Dynamic content, user-specific pages, real-time data
- **Result**: HTML generated on server per request

### 3. **Client-Side Rendering (CSR)**
```typescript
{
  path: '/spa-page',
  renderMode: RenderMode.Client
}
```
- **When**: Pages are rendered in the **browser**
- **Best for**: Highly interactive applications, dashboards
- **Result**: Empty HTML shell + JavaScript bundle

## How to Use Static Generation

### Building Static Files
```bash
# Build for production (generates static files)
npm run build

# Serve the static files
npm run serve:ssr:royeradames-web-v2
```

### Mixed Rendering Example
You can combine different render modes based on your needs:

```typescript:src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Static pages (prerendered at build time)
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog/**',
    renderMode: RenderMode.Prerender
  },
  
  // Dynamic pages (server-rendered on each request)
  {
    path: 'user/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'dashboard',
    renderMode: RenderMode.Server
  },
  
  // Client-only pages (SPA behavior)
  {
    path: 'admin',
    renderMode: RenderMode.Client
  },
  
  // Fallback for all other routes
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
```

## Making Components Static-Friendly

To ensure your components work well with static generation:

### 1. **Avoid Browser-Only APIs**
```typescript
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

export class MyComponent {
  private platformId = inject(PLATFORM_ID);
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Browser-only code here
      localStorage.setItem('key', 'value');
    }
  }
}
```

### 2. **Use Meta and Title Services**
```typescript
import { Meta, Title } from '@angular/platform-browser';

export class BlogComponent {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}
  
  ngOnInit() {
    this.title.setTitle('My Blog Post');
    this.meta.updateTag({ name: 'description', content: 'Blog description' });
  }
}
```

### 3. **Handle Async Data**
```typescript
export class StaticPageComponent {
  data$ = this.http.get('/api/static-data');
  
  constructor(private http: HttpClient) {}
}
```

## Key Benefits of Your Current Setup

✅ **SEO-friendly**: Search engines get fully rendered HTML  
✅ **Fast loading**: Static files served from CDN  
✅ **Better Core Web Vitals**: Faster FCP and LCP  
✅ **Offline capable**: Static files can be cached  

Your project is perfectly configured for static generation! When you run `npm run build`, it will create static HTML files for all your routes that can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.
