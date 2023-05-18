import { HiDownload } from "react-icons/hi"

export default function Hero() {
  return (
    <>
      <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
        <div className="container mx-auto flex max-w-7xl flex-col-reverse p-4 py-12 md:flex-row">
          <div className="basis-1/2">
            <h1 className="mb-6 text-center md:text-left">
              <span className="block font-handwriting text-3xl">
                Olá, me chamo
              </span>
              <span className="mr-2 font-headline text-5xl font-semibold">
                Felipe
              </span>
              <span className="font-headline text-5xl font-light text-blue-400">
                Fontoura
              </span>
            </h1>

            <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
              <div className="h-1 w-12 rounded-full bg-blue-800" />
              Desenvolvedor React.js Front-end
            </h2>

            <p className="mb-6 text-center text-gray-400 md:text-left">
              Sou um desenvolvedor front-end que ama criar coisas para a web.
              Atualmente trabalho como freelancer e transformo ideias em sites e
              aplicações web.
            </p>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <a
                href="#"
                className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-700"
              >
                Fale comigo
              </a>
              <span className="italic text-gray-500">ou</span>
              <a
                href="https://docs.google.com/document/d/15J0W4Q0jL_pyLoKc0XR39r_QHkNrQMCIL2RnSzswx8o/edit?usp=sharing"
                target="_blank"
                className="button flex items-center gap-2"
              >
                <HiDownload />
                Baixe meu CV
              </a>
            </div>
          </div>

          <div className="basis-1">foto</div>
        </div>
      </section>
      <div className="absolute left-0 -mt-2 h-3 w-1/2 rounded-r-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-96" />
    </>
  )
}
