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
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Sobre Nós</a>
            </li>
            <li>
              <a href="#">Dentista</a>
            </li>
            <li>
              <a href="#">Agendamento</a>
            </li>
            <li>
              <a href="#">Nossa Equipe</a>
            </li>
            <li>
              <a href="#">Localização</a>
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
                <a href="#">Serviços</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Sobre Nós</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Dentista</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Agendamento</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Nossa Equipe</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Localização</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
