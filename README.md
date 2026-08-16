# Mesmerizing Kashmir Inspired Website

A Kashmir travel website built on Hatchable.

## Permanent project structure

This project now uses the following canonical organization for all **new and refactored code**:

```text
project/
├── api/                         # Backend/API endpoints
│   ├── enquiry.js
│   └── media.js
├── lib/                         # Shared server-side modules
│   ├── config.js
│   ├── validation.js
│   └── ...
├── pages/                       # Server-rendered pages when needed
│   └── ...
├── public/                      # Browser-facing/static application
│   ├── assets/
│   │   ├── css/                 # Canonical new CSS location
│   │   ├── js/                  # Canonical new browser JS location
│   │   ├── images/              # Canonical new image location
│   │   └── fonts/               # Canonical new font location
│   ├── pages/                   # Canonical page organization for new pages
│   │   ├── destinations/
│   │   ├── experiences/
│   │   ├── stays/
│   │   ├── tours/
│   │   └── travel-guide/
│   └── index.html
├── migrations/                  # PostgreSQL schema migrations
├── hatchable.toml               # Hatchable configuration
└── README.md
```

### Compatibility rule

The existing v1 website files remain in their current paths until each route and asset is deliberately migrated and verified. This prevents broken URLs and image references during the transition.

**No new application code should be added to the old flat locations when an equivalent canonical location exists.**

## Database

Current application table:

- `enquiries`

Schema changes must be made through ordered files under `migrations/`.

## Version / rollback policy

- **Baseline:** Hatchable deployment v1 is the preserved pre-structure-change baseline.
- **Current:** the latest deployed version after this structural change.
- Before significant migrations, compare against the baseline deployment manifest and database schema.
- Never delete or rewrite the existing migration history merely to undo an application change; create a new forward migration when database changes need to be reversed.

## Hatchable

Hatchable provides the runtime, deployment, PostgreSQL database, API routing, authentication, storage, and managed SDK services used by this project.