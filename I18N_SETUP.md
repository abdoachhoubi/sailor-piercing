# I18n Setup Documentation

## Overview
This project has been configured with internationalization (i18n) support for three languages:
- **English (en)** - Default language
- **French (fr)** - Français
- **Arabic (ar)** - العربية

## Features Implemented

### 1. Next.js App Router with Internationalization
- Uses `next-intl` library for robust i18n support
- Locale-based routing with `/[locale]` structure
- Automatic locale detection and fallback

### 2. Supported Languages
- **English (en)**: Default locale
- **French (fr)**: Full French translation
- **Arabic (ar)**: Full Arabic translation with RTL support

### 3. File Structure
```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx         # Locale-specific layout
│   │   ├── page.tsx          # Home page
│   │   ├── about/
│   │   │   └── page.tsx      # About page
│   │   └── globals.css       # Global styles with RTL support
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Root redirect
├── components/
│   ├── LocaleSwitcher.tsx    # Language selector
│   ├── LocaleSwitcherSelect.tsx
│   └── Navigation.tsx        # Internationalized navigation
├── i18n/
│   ├── request.ts           # i18n configuration
│   └── routing.ts           # Routing configuration
└── public/
    └── translations/
        ├── en.json          # English translations
        ├── fr.json          # French translations
        └── ar.json          # Arabic translations
```

### 4. URL Structure
- `/` - Redirects to default locale `/en`
- `/en` - English version
- `/fr` - French version
- `/ar` - Arabic version

### 5. Components

#### Language Switcher
- Dropdown selector in the top-right corner
- Maintains current page when switching languages
- Shows language names in their native scripts

#### Navigation
- Internationalized navigation menu
- Uses next-intl's `Link` component for proper locale handling

### 6. RTL Support
- Automatic text direction for Arabic (`dir="rtl"`)
- CSS adjustments for proper RTL layout
- Language switcher positioning for RTL

### 7. Configuration Files

#### middleware.ts
Handles locale detection and routing:
```typescript
matcher: ['/', '/(fr|ar|en)/:path*']
```

#### next.config.ts
Configured with next-intl plugin for proper build optimization.

## Usage

### Adding New Translations
1. Add new keys to all language files in `public/translations/` directory
2. Use the `useTranslations` hook in components:
```typescript
const t = useTranslations('section');
return <h1>{t('title')}</h1>;
```

### Creating New Pages
1. Create pages in `src/app/[locale]/` directory
2. Add locale parameter handling:
```typescript
type Props = {
  params: Promise<{locale: string}>;
};

export default async function Page({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  // ... component code
}
```

### Adding New Languages
1. Add locale to `src/i18n/routing.ts`
2. Create new translation file in `public/translations/`
3. Update middleware matcher if needed
4. Add language name to `LocaleSwitcher` component

## Testing
- Visit `http://localhost:3001` to see English version
- Visit `http://localhost:3001/fr` for French
- Visit `http://localhost:3001/ar` for Arabic
- Use language switcher to test locale changes

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

## Notes
- Arabic includes RTL (right-to-left) text direction
- Font loading includes proper subset configuration
- Metadata is internationalized in layout files
- Static generation is supported for all locales
