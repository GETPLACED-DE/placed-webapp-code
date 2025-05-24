/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Brand Colors
      colors: {
        // Primary Brand Colors
        brand: {
          navy: '#000034',      // Main brand navy
          lime: '#d1fae5',      // Brand lime green
          'lime-dark': '#a3f3c3', // Darker lime for hover states
        },
        
        // Semantic Colors
        primary: {
          DEFAULT: '#000034',
          foreground: '#ffffff',
          50: '#f0f2ff',
          100: '#e6e9ff',
          200: '#d1d6ff',
          300: '#b5bdff',
          400: '#9aa5ff',
          500: '#7f8dff',
          600: '#6875ff',
          700: '#5862ff',
          800: '#4650e6',
          900: '#000034',
        },
        
        secondary: {
          DEFAULT: '#d1fae5',
          foreground: '#1f2937',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        
        // Neutral Colors
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        
        // Semantic System Colors
        success: {
          DEFAULT: '#22c55e',
          foreground: '#ffffff',
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
        },
        
        warning: {
          DEFAULT: '#f59e0b',
          foreground: '#ffffff',
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        
        error: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
        
        // Background Colors
        background: {
          DEFAULT: '#fcfcfd',      // Light background
          muted: '#f0f2f5',       // Muted background
          subtle: '#f8fafc',      // Subtle background
        },
        
        // Surface Colors
        surface: {
          DEFAULT: '#ffffff',
          elevated: '#ffffff',
          overlay: 'rgba(0, 0, 0, 0.5)',
        },
        
        // Text Colors
        text: {
          primary: '#1f2937',
          secondary: '#6b7280',
          muted: '#9ca3af',
          inverse: '#ffffff',
        },
        
        // Border Colors
        border: {
          DEFAULT: '#e5e7eb',
          light: '#f3f4f6',
          medium: '#d1d5db',
          dark: '#9ca3af',
        },
        
        // Modern Enterprise Colors
        accent: {
          DEFAULT: '#646cff',
          foreground: '#ffffff',
          light: '#8b92ff',
          dark: '#4338ca',
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#646cff',
          600: '#4338ca',
          700: '#3730a3',
          800: '#312e81',
          900: '#1e1b4b',
        },
        
        // Interactive Colors (for links, CTAs, etc.)
        interactive: {
          DEFAULT: '#16a34a',        // Using secondary-600 for links
          foreground: '#ffffff',
          hover: '#15803d',          // Using secondary-700 for hover
          muted: '#9ca3af',          // For inactive/placeholder states
          'muted-hover': '#6b7280',  // For muted hover states
        },

        // CTA Colors (
        cta: {
          DEFAULT: '#E4FD57',    // Green-600
          foreground: '#101827',
          hover: '#A7C400',      // Green-700
          light: '#E4FD90',      // Green-500
          dark: '#E4FD10',       // Green-800
        },
        
        muted: {
          DEFAULT: '#f8fafc',
          foreground: '#64748b',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      
      // Typography
      fontFamily: {
        // Primary font family for headings and display text - optimized fallback stack
        display: [
          'FFF Acid Grotesk',
          '"Helvetica Neue"',
          'Helvetica', 
          'Arial',
          'ui-sans-serif',
          'system-ui', 
          'sans-serif'
        ],
        // Body text font family - optimized fallback stack
        body: [
          'FFF Acid Grotesk',
          '"Helvetica Neue"',
          'Helvetica', 
          'Arial',
          'ui-sans-serif',
          'system-ui', 
          'sans-serif'
        ],
        // Custom brand font - FFF Acid Grotesk with better fallbacks
        grotesk: [
          'FFF Acid Grotesk',
          '"Helvetica Neue"',
          'Helvetica', 
          'Arial',
          'ui-sans-serif',
          'system-ui', 
          'sans-serif'
        ],
        // Fallback to Inter for specific cases where needed
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Monospace font for code
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'ui-monospace', 'monospace'],
      },
      
      fontSize: {
        // Display sizes
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.4' }],
        'display-xs': ['1.5rem', { lineHeight: '1.5' }],
        
        // Text sizes
        'text-xl': ['1.25rem', { lineHeight: '1.6' }],
        'text-lg': ['1.125rem', { lineHeight: '1.6' }],
        'text-md': ['1rem', { lineHeight: '1.6' }],
        'text-sm': ['0.875rem', { lineHeight: '1.5' }],
        'text-xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      
      fontWeight: {
        'light': '300',
        'regular': '350',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      
      // Spacing Scale
      spacing: {
        '0.5': '0.125rem',  // 2px
        '1': '0.25rem',     // 4px
        '1.5': '0.375rem',  // 6px
        '2': '0.5rem',      // 8px
        '2.5': '0.625rem',  // 10px
        '3': '0.75rem',     // 12px
        '3.5': '0.875rem',  // 14px
        '4': '1rem',        // 16px
        '5': '1.25rem',     // 20px
        '6': '1.5rem',      // 24px
        '7': '1.75rem',     // 28px
        '8': '2rem',        // 32px
        '9': '2.25rem',     // 36px
        '10': '2.5rem',     // 40px
        '11': '2.75rem',    // 44px
        '12': '3rem',       // 48px
        '14': '3.5rem',     // 56px
        '16': '4rem',       // 64px
        '20': '5rem',       // 80px
        '24': '6rem',       // 96px
        '28': '7rem',       // 112px
        '32': '8rem',       // 128px
        '36': '9rem',       // 144px
        '40': '10rem',      // 160px
        '44': '11rem',      // 176px
        '48': '12rem',      // 192px
        '52': '13rem',      // 208px
        '56': '14rem',      // 224px
        '60': '15rem',      // 240px
        '64': '16rem',      // 256px
        '72': '18rem',      // 288px
        '80': '20rem',      // 320px
        '96': '24rem',      // 384px
      },
      
      // Border Radius
      borderRadius: {
        'none': '0',
        'xs': '0.125rem',   // 2px
        'sm': '0.375rem',   // 6px
        'md': '0.5rem',     // 8px
        'lg': '0.75rem',    // 12px
        'xl': '1rem',       // 16px
        '2xl': '1.5rem',    // 24px
        '3xl': '2rem',      // 32px
        'full': '9999px',
      },
      
      // Box Shadows
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        
        // Component-specific shadows
        'card': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'dropdown': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'button': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      
      // Animation & Transitions
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
        'slower': '500ms',
      },
      
      transitionTimingFunction: {
        'ease-smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'ease-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      // Z-Index Scale
      zIndex: {
        'dropdown': '1000',
        'sticky': '1010',
        'fixed': '1020',
        'modal-backdrop': '1030',
        'modal': '1040',
        'popover': '1050',
        'tooltip': '1060',
        'toast': '1070',
      },
      
      // Breakpoints (extending default)
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
} 