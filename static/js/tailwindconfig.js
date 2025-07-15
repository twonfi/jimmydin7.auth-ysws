
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'hack-red': '#ec3750',
                    'hack-orange': '#ff8c37',
                    'hack-yellow': '#f1c40f',
                    'hack-green': '#33d9b2',
                    'hack-blue': '#3742fa',
                    'hack-purple': '#7048e8',
                    'hack-pink': '#e84393',
                },
                fontFamily: {
                    'phantom': ['Phantom Sans', 'system-ui', 'sans-serif'],
                },
                animation: {
                    'gradient': 'gradient 8s linear infinite',
                    'float': 'float 6s ease-in-out infinite',
                    'pulse-slow': 'pulse 3s linear infinite',
                },
                keyframes: {
                    gradient: {
                        '0%, 100%': {
                            'background-size': '200% 200%',
                            'background-position': 'left center'
                        },
                        '50%': {
                            'background-size': '200% 200%',
                            'background-position': 'right center'
                        }
                    },
                    float: {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-20px)' }
                    }
                }
            }
        }
    }
