import { useContext } from "react"
import ReactDOM from "react-dom"
import { AppContext } from "../contexts"
import { IAppContext } from "../contexts/types.interface"

interface PortalProps {
  children: JSX.Element
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalContainer = document.getElementById("portal") as HTMLDivElement
  const { modal } = useContext(AppContext) as IAppContext

  if(modal.status) return ReactDOM.createPortal(children, portalContainer)
  
  return null
}

export { Portal }