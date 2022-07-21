import logo from "@app/assets/stories-logo.png"

const Header: React.FC = (): JSX.Element => {
  return(
    <header className="p-5">
      <img src={logo} width="160" alt="" />
    </header>
  )
}

export { Header }