import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { MotionConfig } from "motion/react"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"

function routerBasename() {
  const base = import.meta.env.BASE_URL
  if (!base || base === "/") return undefined
  return base.endsWith("/") ? base.slice(0, -1) : base
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={routerBasename()}>
        <App />
      </BrowserRouter>
    </MotionConfig>
  </StrictMode>,
)
