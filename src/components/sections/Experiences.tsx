export default function Experiences() {
  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-3xl p-4 py-8">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 font-bold text-white">
              <span className="mr-2 font-headline text-3xl">Trabalhos &</span>
              <span className="font-handwriting text-4xl">Experiência</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Trabalho na área de TI desde 1998, tenho mais de 25 anos de
              experiência na área.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div></div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-96" />
    </>
  )
}
