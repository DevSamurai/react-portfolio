export default function Contact() {
  return (
    <section className="bg-blue-700 text-white">
      <div className="container mx-auto max-w-7xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Fale
            </span>
            <span className="font-handwriting text-4xl">Comigo</span>
          </h2>
          <p className="text-sm">
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="basis-1/2">
            <form></form>
          </div>
          <div className="basis-1/2">2</div>
        </div>
      </div>
    </section>
  )
}
