import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phonee from "@/components/Phonee";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-slate-100 ">
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
            {/* Primeira review de usuario */}
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
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 mt-0.3 stroke-[3px] text-green-600" />
                    <p className="text-sm">Compra verificada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* segunda review de usuario */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>"Fiquei super satisfeita com minha capa personalizada! A impressão ficou nítida e as cores são exatamente como eu esperava. O material é resistente e encaixa perfeitamente no celular, protegendo sem comprometer o design. O processo de criação foi simples e rápido, e minha capa chegou bem embalada."</p>
              </div>
              <div className="flex gap-4 mt-2">
                <img src="/users/user-2.png" className="rounded-full h-12 w-12 object-cover" />
                <div className="flex flex-col">
                  <p className="font-semibold">Joice</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 mt-0.3 stroke-[3px] text-green-600" />
                    <p className="text-sm">Compra verificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        {/* Animacao infernal  */}
        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      {/* Aqui mostra a foto se transformando em uma capinha  */}
      <div>
        <section>
          <MaxWidthWrapper className="py-24">
            <div className="mb-12 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                  Carregue sua foto e adquira <span className="relative px-2 bg-green-600 text-white">sua propria capinha </span> agora!
                </h2>
              </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 py-6 lg:px-8">
              <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
                <img src="/arrow.png" className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0" />

                <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                  <img src="/horse.jpg" className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full" />
                </div>

                <Phonee className="w-60" imgSrc="/horse_phone.jpg" />
              </div>
            </div>

            <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
              <li className="fit">
                <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                Material de silicone de alta qualidade
              </li>
              <li className="fit">
                <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                Revestimento resistente a arranhões e impressões digitais
              </li>
              <li className="fit">
                <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                Compatível com carregamento sem fio
              </li>
              <li className="fit">
                <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                Garantia de impressão de 5 anos
              </li>

              <div className="flex justify-center py-2">
                <Link className={buttonVariants({ size: "lg", className: "mx-auto mt-8" })} href="/configure/upload">Create your case now <ArrowRight className="h-4 w-4 ml-1.5" /> </Link>
              </div>
            </ul>
          </MaxWidthWrapper>
        </section>
      </div>
    </div>
  );
}
