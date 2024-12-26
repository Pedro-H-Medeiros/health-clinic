import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

import logo from '@/assets/ODONTOLOGIA.png'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Header() {
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    const handleScreenScrooling = () => {
      setHasShadow(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScreenScrooling)

    return () => {
      window.removeEventListener('scroll', handleScreenScrooling)
    }
  }, [])

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100

      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div
      className={`sticky top-0 z-50 bg-white transition-all duration-500 ${hasShadow ? 'drop-shadow-lg' : ''}`}
    >
      <div className="flex min-w-full justify-around lg:justify-between">
        <div className="min-w-max">
          <a href="/">
            <img
              src={logo}
              className="m-auto h-24 min-w-max"
              alt="Clínica Escola de Odontologia UNINASSAU"
            />
          </a>
        </div>
        <nav className="hidden justify-between px-4 lg:flex">
          <ul className="flex items-center justify-center gap-8 text-nowrap">
            <li>
              <button
                className="hover:opacity-60"
                onClick={() => handleScroll('services')}
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                className="hover:opacity-60"
                onClick={() => handleScroll('about-us')}
              >
                Sobre Nós
              </button>
            </li>
            <li>
              <button
                className="hover:opacity-60"
                onClick={() => handleScroll('dentist')}
              >
                Dentista
              </button>
            </li>
            <li>
              <button
                className="hover:opacity-60"
                onClick={() => handleScroll('appointment')}
              >
                Agendamento
              </button>
            </li>
            <li>
              <button
                className="hover:opacity-60"
                onClick={() => handleScroll('teams')}
              >
                Nossa Equipe
              </button>
            </li>
            <li>
              <button
                className="hover:opacity-60"
                onClick={() => handleScroll('location')}
              >
                Localização
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <button
                  className="hover:opacity-60"
                  onClick={() => handleScroll('services')}
                >
                  Serviços
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  className="hover:opacity-60"
                  onClick={() => handleScroll('about-us')}
                >
                  Sobre Nós
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  className="hover:opacity-60"
                  onClick={() => handleScroll('dentist')}
                >
                  Dentista
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  className="hover:opacity-60"
                  onClick={() => handleScroll('appointment')}
                >
                  Agendamento
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  className="hover:opacity-60"
                  onClick={() => handleScroll('teams')}
                >
                  Nossa Equipe
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  className="hover:opacity-60"
                  onClick={() => handleScroll('location')}
                >
                  Localização
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
