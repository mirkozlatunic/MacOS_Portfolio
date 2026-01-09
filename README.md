# 🖥️ macOS-Style Portfolio

An interactive, macOS-inspired portfolio website built with React and Vite. Experience a fully functional desktop environment with draggable windows, a dynamic dock, and smooth animations—all in your browser.

## ✨ Features

- **🪟 Interactive Windows**: Fully draggable windows with macOS-style controls (close, minimize, maximize)
- **🎯 Dynamic Dock**: Animated dock with hover effects that respond to cursor movement
- **📂 Finder**: Browse projects and portfolio items in a familiar file browser interface
- **🌐 Safari Window**: Navigate through blog posts and web content
- **💻 Terminal**: Command-line interface for an authentic developer experience
- **📄 Resume Viewer**: Built-in PDF viewer for resume and documents
- **📸 Photos Gallery**: Image gallery with macOS Photos app styling
- **📝 Text Editor**: Simple text editor for notes and content
- **📧 Contact Window**: Contact form and information display
- **🎨 Smooth Animations**: Powered by GSAP for fluid, professional animations
- **🌓 Responsive Design**: Tailwind CSS for a modern, responsive layout

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **GSAP** - Animation library for smooth interactions
- **Tailwind CSS 4** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Immer** - Immutable state updates
- **React PDF** - PDF rendering in browser
- **Lucide React** - Icon library
- **Day.js** - Date manipulation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Dock.jsx      # macOS-style dock
│   │   ├── Navbar.jsx    # Top navigation bar
│   │   ├── Welcome.jsx   # Welcome screen
│   │   ├── Home.jsx      # Home screen with folders
│   │   └── WindowControls.jsx  # Window control buttons
│   ├── windows/          # Window components
│   │   ├── Finder.jsx    # File browser
│   │   ├── Safari.jsx    # Web browser
│   │   ├── Terminal.jsx  # Terminal emulator
│   │   ├── Resume.jsx    # Resume viewer
│   │   ├── Contact.jsx   # Contact form
│   │   ├── Photos.jsx    # Photo gallery
│   │   ├── Text.jsx      # Text editor
│   │   └── Image.jsx     # Image viewer
│   ├── store/            # State management
│   │   ├── window.js     # Window state (open/close/position)
│   │   └── location.js   # Navigation/active location state
│   ├── constants/        # App constants and data
│   ├── hoc/              # Higher-order components
│   │   └── WindowWrapper.jsx  # Window wrapper HOC
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static assets
│   ├── images/          # Image files
│   ├── icons/           # Icon files
│   └── files/           # Document files (resume, etc.)
└── dist/                # Production build output
```

## 🎮 Usage

### Opening Windows

- Click on dock icons to open/close windows
- Click on desktop folders to open them in Finder
- Windows can be dragged around by their title bars

### Window Controls

- **Red button**: Close window
- **Yellow button**: Minimize window
- **Green button**: Maximize window

### Dock Interaction

- Hover over the dock to see icons animate
- Icons respond to cursor proximity with smooth animations
- Click icons to toggle windows

## 🎨 Customization

### Adding New Windows

1. Create a new component in `src/windows/`
2. Add the window to `src/App.jsx`
3. Add a dock icon entry in `src/constants/index.js`
4. Update the window store if needed

### Styling

The project uses Tailwind CSS. Modify styles directly in component files or extend the Tailwind configuration.

### Content

Update portfolio content by modifying the constants in `src/constants/index.js`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- Portfolio: [Your Portfolio URL](https://yourportfolio.com)

## 🙏 Acknowledgments

- Inspired by macOS design language
- Icons from [Lucide](https://lucide.dev)
- Animation library [GSAP](https://greensock.com/gsap/)

---

⭐ If you found this project interesting, please consider giving it a star!
