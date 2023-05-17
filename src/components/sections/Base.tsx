interface BaseProps {
  className?: string
  children: React.ReactNode
}

interface ContainerProps extends BaseProps {
  id: string
}

const Container = ({ id, className, children }: ContainerProps) => {
  return (
    <div
      id={id}
      className={`flex ${className}`}
      // className={`flex h-screen w-screen snap-start items-center p-4 pt-20 ${className}`}
    >
      {children}
    </div>
  )
}

const Inner = ({ className, children }: BaseProps) => {
  return (
    <div
      className={`flex w-full flex-col items-center gap-4 sm:flex-row ${className}`}
    >
      {children}
    </div>
  )
}

const Basis = ({ className, children }: BaseProps) => {
  return <div className={`basis-1/2 ${className}`}>{children}</div>
}

const Title = ({ className, children }: BaseProps) => {
  return <h1 className={`mb-3 text-5xl font-bold ${className}`}>{children}</h1>
}

const SubTitle = ({ className, children }: BaseProps) => {
  return (
    <h2 className={`mb-3 text-3xl font-semibold ${className}`}>{children}</h2>
  )
}

const Description = ({ className, children }: BaseProps) => {
  return (
    <p className={`mb-5 text-2xl font-semibold text-gray-200 ${className}`}>
      {children}
    </p>
  )
}

const Actions = ({ className, children }: BaseProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>{children}</div>
  )
}

interface ActionProps extends BaseProps {
  href: string
}

const MainAction = ({ href, className, children }: ActionProps) => {
  return (
    <a href={href} className={`button flex items-center gap-2 ${className}`}>
      {children}
    </a>
  )
}

const SecondaryAction = ({ href, className, children }: ActionProps) => {
  return (
    <a
      href={href}
      className={`flex cursor-pointer items-center gap-2 text-white/50 hover:text-white/100 ${className}`}
    >
      {children}
    </a>
  )
}

export const Section = Object.assign(Container, {
  Inner,
  Left: Basis,
  Right: Basis,
  Title,
  SubTitle,
  Description,
  Actions,
  MainAction,
  SecondaryAction,
})
