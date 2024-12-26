import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

import logo from '@/assets/CLINICAS-UNINASSAU.png'

export function Footer() {
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
    <footer className="h-fit lg:h-[calc(100dvh-20rem)]">
      <div className="h-full content-center">
        <div className="flex flex-wrap justify-between gap-8 p-8 lg:gap-0">
          <div>
            <img src={logo} alt="" className="min-w-max" />
          </div>

          <div className="content-center space-y-28">
            <nav className="flex justify-between">
              <ul className="flex flex-col justify-center gap-6 lg:flex-row lg:gap-8">
                <li>
                  <button onClick={() => handleScroll('services')}>
                    Serviços
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScroll('about-us')}>
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScroll('dentist')}>
                    Dentista
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScroll('appointment')}>
                    Agendamento
                  </button>
                </li>
              </ul>
            </nav>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/UNINASSAU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-300 to-red-500 shadow-md transition-transform hover:scale-110 hover:opacity-60 hover:shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg text-white" />
              </a>
              <a
                href="https://x.com/uninassau_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-300 to-red-500 shadow-md transition-transform hover:scale-110 hover:opacity-60 hover:shadow-lg"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg text-white" />
              </a>
              <a
                href="https://www.linkedin.com/school/uninassau/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-300 to-red-500 shadow-md transition-transform hover:scale-110 hover:opacity-60 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg text-white" />
              </a>
              <a
                href="https://www.instagram.com/clinicasintegradasuninassaujn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-300 to-red-500 shadow-md transition-transform hover:scale-110 hover:opacity-60 hover:shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg text-white" />
              </a>
              <a
                href="https://www.youtube.com/user/uninassau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-300 to-red-500 shadow-md transition-transform hover:scale-110 hover:opacity-60 hover:shadow-lg"
                aria-label="YouTube"
              >
                <FaYoutube className="text-lg text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
