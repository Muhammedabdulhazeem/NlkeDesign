import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"

export const useModal = () => {
  const context = useContext(ModalContext)

  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider")
  }

  return context
}