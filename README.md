# George Adadi's Personal Website

A modern, fast, and accessible personal website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes (light/dark mode)
- **Testing**: Vitest + Testing Library

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── projects/       # Projects page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── header.tsx     # Navigation header
│   ├── footer.tsx     # Site footer
│   └── ...
├── data/              # Static data and content
│   ├── site.ts        # Site configuration
│   ├── projects.ts    # Project data
│   ├── experience.ts  # Work experience
│   └── skills.ts      # Skills data
├── lib/               # Utilities and helpers
│   ├── types.ts       # TypeScript types
│   ├── seo.ts         # SEO utilities
│   └── utils.ts       # General utilities
└── styles/            # Global styles
    └── globals.css    # Tailwind CSS
```

## 📝 Content Management

To update the website content, edit the files in the `src/data/` directory:

- **`site.ts`**: Personal information, contact details, social links
- **`projects.ts`**: Project portfolio with descriptions, tech stack, links
- **`experience.ts`**: Work experience and internships
- **`skills.ts`**: Technical skills organized by category

## 🎨 Customization

### Colors

The brand colors are defined in `tailwind.config.ts`. Update the `brand` color palette to match your preferences.

### Fonts

The site uses Inter (sans-serif) and JetBrains Mono (monospace) fonts. You can change these in `src/app/layout.tsx`.

### Components

All components are built with Tailwind CSS and can be easily customized by modifying the className props.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure your domain in Vercel dashboard
4. Deploy!

### Domain Configuration

For `georgeadadii.com`:

- Set up A/ALIAS record for apex domain
- Set up CNAME record for www subdomain
- Follow Vercel's DNS configuration guide

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📊 Performance

The site is optimized for:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent LCP, FID, CLS
- **Accessibility**: WCAG AA compliant
- **SEO**: Structured data, meta tags, sitemap

## 📄 License

MIT License - feel free to use this template for your own personal website!

## 🤝 Contributing

This is a personal website, but if you spot any issues or have suggestions, feel free to open an issue or submit a pull request.

---

Built with ❤️ by George Adadi
