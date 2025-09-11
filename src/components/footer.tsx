export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t bg-background/95">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          © {year} Paramveer Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
