import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { WhatsappButton } from '@/components/whatsapp-button'

import { AboutUs } from './about-us'
import { Costumers } from './costumers'
import { HighlightEmployee } from './highlight-employee'
import { Location } from './location'
import { Metrics } from './metrics'
import { Services } from './services'
import { Teams } from './teams'

export function Dashboard() {
  return (
    <>
      <WhatsappButton />
      <Header />

      <div
        className="w-dvh relative min-h-[50rem] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://placehold.co/600x400)` }}
      >
        <div className="absolute inset-0 left-8 flex h-full w-80 flex-col items-center justify-center bg-gradient-to-b from-white/40 to-white/70 p-5 md:left-36">
          <div className="h-full max-w-md content-center text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Clínica Odontologia Uninassau
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Skilled, caring, and professional, Dr. Michael Williams is always
              here to provide excellent dental services to your whole family.
            </p>
            <button className="mt-6 rounded-full bg-red-500 px-6 py-3 text-white shadow hover:bg-red-600">
              Saiba mais
            </button>
          </div>
          <div className="flex w-full items-end justify-center gap-7">
            <Facebook />
            <Twitter />
            <Linkedin />
            <Instagram />
          </div>
        </div>
      </div>

      <AboutUs />
      <Services />
      <Teams />
      <HighlightEmployee />
      <Metrics />
      <Costumers />
      <Location />

      <Footer />
    </>
  )
}
