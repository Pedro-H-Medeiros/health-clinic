import { Captions, Medal, ThumbsUp, UserRound } from 'lucide-react'

export function Metrics() {
  return (
    <div className="h-[75dvh] bg-[#343B56] md:h-[50dvh]">
      <div className="flex h-full flex-wrap items-center justify-around gap-y-3">
        {/* METRIC 1 */}
        <div className="flex w-1/2 flex-col items-center space-y-7 md:w-1/4">
          <UserRound stroke="#EB9594" size={48} />
          <h2 className="text-4xl font-extrabold text-[#EB9594]">478</h2>
          <p className="text-nowrap font-thin text-white">
            Pacientes Satisfeitos
          </p>
          <hr className="w-5" />
        </div>

        {/* METRIC 2 */}
        <div className="flex w-1/2 flex-col items-center space-y-7 md:w-1/4">
          <ThumbsUp stroke="#EB9594" size={48} />
          <h2 className="text-4xl font-extrabold text-[#EB9594]">72%</h2>
          <p className="text-nowrap font-thin text-white">
            Parovação de Pacientes
          </p>
          <hr className="w-5" />
        </div>

        {/* METRIC 3 */}
        <div className="flex w-1/2 flex-col items-center space-y-7 md:w-1/4">
          <Captions stroke="#EB9594" size={48} />
          <h2 className="text-4xl font-extrabold text-[#EB9594]">26</h2>
          <p className="text-nowrap font-thin text-white">
            Certificados Internacionais
          </p>
          <hr className="w-5" />
        </div>

        {/* METRIC 4 */}
        <div className="flex w-1/2 flex-col items-center space-y-7 md:w-1/4">
          <Medal stroke="#EB9594" size={48} />
          <h2 className="text-4xl font-extrabold text-[#EB9594]">3</h2>
          <p className="text-nowrap font-thin text-white">
            Conquistas Internacionais
          </p>
          <hr className="w-5" />
        </div>
      </div>
    </div>
  )
}
