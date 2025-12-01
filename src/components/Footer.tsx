const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-8 px-6">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Cláudia Amin Advogados. Todos os direitos reservados.
        </p>
        <p className="text-xs opacity-75 mt-2">
          Direito Imobiliário e Civil
        </p>
      </div>
    </footer>;
};
export default Footer;