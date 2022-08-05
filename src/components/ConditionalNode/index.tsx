interface ConditionalNodeProps {
  condition: boolean
  children: JSX.Element
}

const ConditionalNode: React.FC<ConditionalNodeProps> = ({
  condition,
  children
}) => {
  if(condition) return <> {children} </>
  
  return <></>
}

export { ConditionalNode }