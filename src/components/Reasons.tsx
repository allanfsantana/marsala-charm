const Reasons = () => {
  const reasons = [
    {
      number: "01",
      title: "Atendimento 100% WhatsApp",
      description: "Comunicação rápida e eficiente através do WhatsApp para maior comodidade"
    },
    {
      number: "02",
      title: "Análise 100% On-line",
      description: "Avaliação completa do seu caso de forma digital, sem necessidade de deslocamento"
    },
    {
      number: "03",
      title: "Excelência e compromisso jurídico",
      description: "Comprometimento total com a defesa dos seus direitos e interesses"
    },
    {
      number: "04",
      title: "Atendimento Personalizado e Humano",
      description: "Cada cliente recebe atenção individual e tratamento humanizado"
    }
  ];

  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-palatino font-bold mb-6">
            POR QUE ESCOLHER O ESCRITÓRIO CLÁUDIA AMIN<br />
            E COMO FUNCIONA O ATENDIMENTO:
          </h2>
          <p className="text-lg opacity-95 max-w-3xl mx-auto">
            Oferecemos um serviço diferenciado com foco na sua comodidade e satisfação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason) => (
            <div key={reason.number} className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="text-5xl font-bold opacity-50">{reason.number}</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="opacity-90">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
