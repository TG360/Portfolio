import { ModeToggle } from './components/mode-toggle'
import './index.css'
import { ThemeProvider } from "./components/theme-provider"
function App() {

  return (
<ThemeProvider>
  <main className="w-full min-h-screen flex items-center justify-center p-5">
    <div className="flex items-center justify-center w-full min-h-[calc(100vh-2.5rem)] border border-slate-200">
        <ModeToggle />
    </div>
  </main>
</ThemeProvider>

  )
}

export default App
