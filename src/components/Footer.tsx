interface FooterProps {
  name: string
}

export function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-neutral-200 px-5 py-6 text-center text-sm dark:border-neutral-800">
      <p>
        © {new Date().getFullYear()} {name}
      </p>
    </footer>
  )
}
