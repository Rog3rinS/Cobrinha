import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phonee from "@/components/Phonee";
import { Check, Phone, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50 ">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          {/* Imagem da cobrinha, texto principal, e frase de efeito */}
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Sua imagem em uma capa <span className="bg-green-600 px-2 text-white">Personalizada</span>
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture seus momentos preferidos com sua <span className="font-semibold">exclusiva</span> capinha. Nos permitimos que voce proteja suas memorias, nao somente o seu telefone.
              </p>

              {/* Textos falando das qualidades do produto */}
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Alta qualidade, material duravel
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Garantia de 5 anos
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Iphones modernos suportados
                  </li>

                </div>
              </ul>

              {/* Rostinhos lindos */}
              <div className="mt-12 flex flex-col sm:flex-row items-center  sm:items-start gap-5 ">
                <div className="flex -space-x-2">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-1.png" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-2.png" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-3.png" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-4.jpg" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-5.jpg" />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start ">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600 " />
                    <Star className="h-4 w-4 text-green-600 fill-green-600 " />
                    <Star className="h-4 w-4 text-green-600 fill-green-600 " />
                    <Star className="h-4 w-4 text-green-600 fill-green-600 " />
                    <Star className="h-4 w-4 text-green-600 fill-green-600 " />
                    <Star className="h-4 w-4 text-green-600 fill-green-600 " />
                  </div>
                  <p className="mt-1">
                    <span className="font-semibold">1250</span> Clientes satisfeitos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img src="/your-image.png" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" />
              <img src="/line.png" className="absolute w-20 -left-6 -botton-6 select-none" />
              <Phonee className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* prova social, valor promovido */}
      <section className="bg-slate-100 py-12">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              O que nossos <span className="relative px-2 text-green-600">clientes</span> dizem?
            </h2>
            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0
          lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>"Eu simplesmente amei minha capa personalizada! Ficou exatamente como eu imaginei e trouxe ainda mais personalidade para o meu celular. A qualidade do material é excelente e dá para perceber que foi feita com cuidado e atenção aos detalhes. Além disso, o processo de personalização foi super fácil e rápido."</p>
              </div>
              <div className="flex gap-4 mt-2">
                <img src="/users/user-1.png" className="rounded-full h-12 w-12 object-cover" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
