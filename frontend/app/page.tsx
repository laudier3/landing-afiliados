'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import YouTubePlayer from './components/Videos'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-50 overflow-hidden">

      {/* BACKGROUND DNA – DESKTOP */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dna-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7F00FF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#E100FF" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={i}
              d={`M0 ${i * 60} Q50 ${i * 60 + 30} 100 ${i * 60}`}
              stroke="url(#dna-gradient)"
              strokeWidth="2"
              fill="transparent"
            />
          ))}
        </svg>
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-500/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXTO */}
          <div>
            <span className="inline-block mb-4 rounded-full bg-purple-500/10 px-4 py-1 text-xs sm:text-sm text-purple-400">
              Educação digital e renda online
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
              Aprenda a ganhar dinheiro pela internet{' '}
              <span className="text-purple-400">de forma segura e profissional</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-300">
              Treinamento educacional focado em estratégias reais de renda online,
              sem promessas mágicas, com método e aprendizado contínuo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 py-5 bg-purple-600 hover:bg-purple-700 transition"
                onClick={() =>
                  window.open(
                    'https://go.hotmart.com/Q27473023Q?redirectionUrl=https%3A%2F%2Fformulanegocioonline.digital%2F',
                    '_blank'
                  )
                }
              >
                Acessar treinamento
              </Button>

              <Button
  size="lg"
  variant="outline"
  className="
    w-full sm:w-auto
    text-base sm:text-lg
    px-7 py-5
    rounded-2xl
    border-2 border-purple-500
    text-purple-100
    bg-purple-500/10
    backdrop-blur
    shadow-[0_0_25px_rgba(168,85,247,0.45)]
    hover:bg-purple-500/20
    hover:text-white
    hover:shadow-[0_0_45px_rgba(168,85,247,0.75)]
    transition-all duration-300
    animate-pulse
    active:scale-95
  "
  onClick={() =>
    window.open(
      'https://go.hotmart.com/Q27473023Q?redirectionUrl=https%3A%2F%2Fformulanegocioonline.digital%2F',
      '_blank'
    )
  }
>
  Ver conteúdo
</Button>

            </div>
          </div>

          {/* MÍDIA */}
          <div className="flex flex-col gap-6">
            <img
              src="https://marketinghelp.com.br/wp-content/uploads/2024/01/marketing-digital-1-1170x700.png"
              alt="Treinamento profissional de renda online"
              className="rounded-xl shadow-lg w-full h-56 sm:h-72 md:h-80 object-cover"
            />

            <YouTubePlayer url="https://youtu.be/3ROjH6qv4tw?t=1293" />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
            Por que este treinamento é diferente?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: '⚡', title: 'Aprendizado progressivo', desc: 'Conteúdo organizado para iniciantes e intermediários.' },
              { icon: '🛡️', title: 'Método seguro', desc: 'Sem promessas irreais, foco em educação digital.' },
              { icon: '⭐', title: 'Treinamento profissional', desc: 'Estratégias aplicadas no mercado atual.' },
            ].map((b) => (
              <Card key={b.title} className="bg-neutral-900 border-neutral-800">
                <CardContent className="p-6">
                  <span className="text-3xl">{b.icon}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{b.title}</h3>
                  <p className="mt-2 text-neutral-400">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 md:grid-cols-2 items-center">
          <img
            src="https://img.freepik.com/fotos-premium/conceito-de-automacao-de-marketing-estrategias-de-marketing-e-publicidade-digitais-escala-de-alcance-e-engajamento_1022426-14238.jpg"
            alt="Especialista em renda online"
            className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover"
          />

          <div>
            <span className="inline-block mb-4 rounded-full bg-purple-500/10 px-4 py-1 text-xs sm:text-sm text-purple-400">
              Especialista em Negócios Digitais
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Experiência real no mercado digital
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-300">
              Conteúdo educacional criado por profissionais com experiência prática,
              focado em ensino ético e sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-white">
            Nossos resultados
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15.000+', label: 'Alunos' },
              { number: '120+', label: 'Horas de conteúdo' },
              { number: '95%', label: 'Satisfação' },
              { number: '100%', label: 'Suporte' },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-3xl sm:text-4xl font-bold text-white">{item.number}</span>
                <p className="mt-2 text-neutral-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
            O que nossos alunos dizem
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: 'Ana Silva', text: 'Aprendi estratégias reais e aplicáveis.' },
              { name: 'Carlos Souza', text: 'Marketing digital explicado passo a passo.' },
              { name: 'Beatriz Lima', text: 'Material claro e suporte rápido.' },
            ].map((d) => (
              <Card key={d.name} className="bg-neutral-900 border-neutral-800">
                <CardContent className="p-6">
                  <p className="text-neutral-300">"{d.text}"</p>
                  <h3 className="mt-4 font-semibold text-white">{d.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Perguntas frequentes
          </h2>

          <div className="space-y-6 text-neutral-300">
            <div>
              <h3 className="font-semibold text-white">Preciso ter experiência?</h3>
              <p>Não. O curso é para iniciantes e intermediários.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Os resultados são garantidos?</h3>
              <p>Resultados dependem de dedicação e aplicação prática.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Posso acessar pelo celular?</h3>
              <p>Sim. Acesso total via celular, tablet ou computador.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Comece a aprender hoje mesmo
        </h2>

        <p className="mt-4 text-neutral-300">
          Treinamento educacional com acesso imediato.
        </p>

        <Button
          size="lg"
          className="mt-8 px-10 py-6 text-lg bg-purple-600 hover:bg-purple-700 transition"
          onClick={() =>
            window.open(
              'https://go.hotmart.com/Q27473023Q?redirectionUrl=https%3A%2F%2Fformulanegocioonline.digital%2F',
              '_blank'
            )
          }
        >
          Quero aprender agora
        </Button>
      </section>

      <footer className="py-6 border-t border-neutral-800 text-center text-xs sm:text-sm text-neutral-500">
        © 2025 Educação Digital • Conteúdo educacional
      </footer>
    </main>
  )
}
