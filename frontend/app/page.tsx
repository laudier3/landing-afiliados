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

      {/* BACKGROUND DNA */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dna-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7F00FF" stopOpacity="0.2"/>
              <stop offset="50%" stopColor="#E100FF" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#7F00FF" stopOpacity="0.2"/>
            </linearGradient>
          </defs>

          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M0 ${i * 50} Q50 ${i * 50 + 25} 100 ${i * 50}`}
              stroke="url(#dna-gradient)"
              strokeWidth="2"
              fill="transparent"
            >
              <animate
                attributeName="d"
                dur={`${10 + i}s`}
                repeatCount="indefinite"
                values={`
                  M0 ${i*50} Q50 ${i*50+25} 100 ${i*50};
                  M0 ${i*50+10} Q50 ${i*50+35} 100 ${i*50+10};
                  M0 ${i*50} Q50 ${i*50+25} 100 ${i*50}
                `}
              />
            </path>
          ))}
        </svg>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-500/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="inline-block mb-4 rounded-full bg-purple-500/10 px-4 py-1 text-sm text-purple-400">
              Educação digital e renda online
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Aprenda a ganhar dinheiro pela internet{' '}
              <span className="text-purple-400">de forma segura e profissional</span>
            </h1>

            <p className="mt-6 text-lg text-neutral-300">
              Treinamento educacional focado em estratégias reais de renda online,
              sem promessas mágicas, com método e aprendizado contínuo.
            </p>

            <div className="mt-8 flex gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-purple-600 text-white rounded-lg 
                hover:bg-purple-700 hover:scale-105 transition duration-300"
                onClick={() =>
                  window.open('https://go.hotmart.com/Q27473023Q?redirectionUrl=https%3A%2F%2Fformulanegocioonline.digital%2F', '_blank')
                }
              >
                Acessar treinamento
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 text-black border border-black rounded-lg 
                hover:bg-black hover:text-white hover:scale-105 transition duration-300"
                onClick={() =>
                  window.open('https://go.hotmart.com/Q27473023Q?redirectionUrl=https%3A%2F%2Fformulanegocioonline.digital%2F', '_blank')
                }
              >
                Ver conteúdo
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src="https://marketinghelp.com.br/wp-content/uploads/2024/01/marketing-digital-1-1170x700.png"
              alt="Treinamento profissional de renda online"
              className="rounded-xl shadow-lg h-[300px] w-full object-cover"
            />

            <YouTubePlayer url="https://youtu.be/3ROjH6qv4tw?t=1293" />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que este treinamento é diferente?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Aprendizado progressivo',
                desc: 'Conteúdo organizado para iniciantes e intermediários.',
              },
              {
                icon: '🛡️',
                title: 'Método seguro e transparente',
                desc: 'Sem promessas irreais, foco em educação digital.',
              },
              {
                icon: '⭐',
                title: 'Treinamento profissional',
                desc: 'Estratégias aplicadas no mercado digital atual.',
              },
            ].map((b) => (
              <Card key={b.title} className="bg-neutral-900 border-neutral-800">
                <CardContent className="p-6">
                  <span className="text-3xl">{b.icon}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-neutral-400">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE O ESPECIALISTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/fotos-premium/conceito-de-automacao-de-marketing-estrategias-de-marketing-e-publicidade-digitais-escala-de-alcance-e-engajamento_1022426-14238.jpg?semt=ais_se_enriched&w=740&q=80"
              alt="Especialista em renda online"
              className="rounded-2xl shadow-2xl max-w-md w-full object-cover"
            />
          </div>

          <div>
            <span className="inline-block mb-4 rounded-full bg-purple-500/10 px-4 py-1 text-sm text-purple-400">
              Especialista em Negócios Digitais
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Experiência real no mercado digital
            </h2>

            <p className="mt-6 text-lg text-neutral-300">
              Conteúdo educacional criado por profissionais com experiência prática
              no mercado digital, focado em ensino ético e sustentável.
            </p>
          </div>

        </div>
      </section>

      {/* NÚMEROS DE CONFIANÇA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Nossos resultados em educação digital</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15.000+', label: 'Alunos formados' },
              { number: '120+', label: 'Horas de conteúdo' },
              { number: '95%', label: 'Satisfação dos alunos' },
              { number: '100%', label: 'Suporte dedicado' },
            ].map((item) => (
              <div key={item.label} className="text-white">
                <span className="text-4xl font-bold">{item.number}</span>
                <p className="mt-2 text-neutral-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">O que nossos alunos dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Ana Silva', text: 'Aprendi estratégias reais e aplicáveis sem promessas milagrosas.' },
              { name: 'Carlos Souza', text: 'O curso me ensinou marketing digital passo a passo.' },
              { name: 'Beatriz Lima', text: 'Material claro, suporte rápido e metodologia confiável.' },
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

      {/* MÓDULOS DO CURSO */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">O que você vai aprender</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Marketing de afiliados', desc: 'Como promover produtos digitais de forma ética e profissional.' },
              { title: 'Estratégias de tráfego', desc: 'Aprenda técnicas de tráfego orgânico e pago sem promessas milagrosas.' },
              { title: 'Funil de vendas', desc: 'Criação de funis claros e confiáveis para gerar valor ao cliente.' },
            ].map((m) => (
              <Card key={m.title} className="bg-neutral-900 border-neutral-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white">{m.title}</h3>
                  <p className="mt-2 text-neutral-300">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Perguntas frequentes</h2>
          <div className="space-y-6 text-neutral-300">
            <div>
              <h3 className="font-semibold text-white">Preciso ter experiência prévia para participar?</h3>
              <p>Não. O curso foi criado para iniciantes e também para quem já tem alguma experiência.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Vou ganhar dinheiro rapidamente?</h3>
              <p>O curso ensina estratégias confiáveis e aplicáveis. Resultados dependem de esforço e dedicação.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Posso acessar o conteúdo de qualquer lugar?</h3>
              <p>Sim. Todo o conteúdo é online, acessível 24/7 via computador, tablet ou celular.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Comece a aprender hoje mesmo
        </h2>
        <p className="mt-4 text-neutral-300">
          Treinamento educacional com acesso imediato.
        </p>

        <Button
          onClick={() =>
            window.open('https://go.hotmart.com/Q27473023Q?redirectionUrl=https%3A%2F%2Fformulanegocioonline.digital%2F', '_blank')
          }
          size="lg"
          className="mt-8 px-10 py-6 text-lg bg-purple-600 text-white rounded-lg 
          hover:bg-purple-700 hover:scale-105 transition duration-300"
        >
          Quero aprender agora
        </Button>
      </section>

      <footer className="py-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
        © 2025 Educação Digital • Conteúdo educacional
      </footer>
    </main>
  )
}
