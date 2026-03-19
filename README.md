# BodMfeTemplate

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## Recommended folder structure

For applications using **standalone components**, organize code under `src/app/` as follows:

```
src/app/
├── core/           # Singleton services, guards, interceptors, global config
├── shared/         # Reusable components, pipes, and directives
├── layouts/       # Components that define view structure (shell, header, footer)
└── pages/         # Page components (one per route or main section)
```

| Folder     | Purpose |
|------------|---------|
| **core**   | Application logic that exists once: `AuthService`, `HttpInterceptor`, `AuthGuard`, `provideHttpClient` config, etc. |
| **shared** | UI and utilities reused across screens: buttons, inputs, custom pipes (e.g. `DatePipe`), directives, presentational components. |
| **layouts**| Components that wrap content and define the template (navbar, sidebar, content areas). Used by the router or shell. |
| **pages**  | One component per screen or main route. Holds the logic and template for that view. |

## Naming conventions

Use descriptive suffixes based on component type and location:

| Type              | Suffix     | Example                                      | Typical location |
|-------------------|------------|----------------------------------------------|------------------|
| Page              | `-page`    | `home-page`, `dashboard-page`, `user-list-page` | `pages/`         |
| Layout            | `-layout`  | `auth-layout`, `main-layout`, `public-layout`   | `layouts/`       |
| Reusable component| As needed by domain | `user-card`, `search-input`, `empty-state` | `shared/`        |
| Guard / Service / Interceptor | By role   | `auth.guard`, `auth.service`, `api.interceptor` | `core/`          |

**Examples:**

- **Pages:** `home-page`, `login-page`, `settings-page`, `product-detail-page`
- **Layouts:** `auth-layout` (login/register), `main-layout` (app with menu), `public-layout` (landing without auth)
- **Shared:** `bod-empty-message`, `user-avatar`, `page-header`, `data-table`

This keeps a clear convention; the `bod` prefix (configured in the project) is applied to the component selector (e.g. `bod-home-page`).

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
