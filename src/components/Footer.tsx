interface FooterProps {
  name: string
}

export function Footer({ name }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {name}
      </p>
    </footer>
  )
}
