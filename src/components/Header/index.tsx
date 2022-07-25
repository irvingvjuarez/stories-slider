import { Logo } from "@app/components/Logo"

const Header: React.FC = (): JSX.Element => {
  return(
    <header className="p-5">
      <Logo />      
    </header>
  )
}

export { Header }