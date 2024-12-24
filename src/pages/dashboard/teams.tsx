export function Teams() {
  return (
    <div
      className="w-dvh relative mt-8 h-dvh bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(https://placehold.co/600x400)` }}
    >
      <div className="flex h-full flex-col items-center justify-center p-8">
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            Nossa Equipe
          </h2>
        </div>

        <div className="flex w-full items-center gap-10 overflow-x-scroll md:gap-20 xl:justify-center xl:overflow-hidden">
          {/* CARD 1 */}
          <div className="w-[17.5rem] rounded-2xl bg-white shadow-md md:w-min">
            <img src="https://placehold.co/400x600" alt="" />
            <div className="w-[20rem] space-y-5 p-8">
              <h3 className="mb-4 text-nowrap text-2xl font-bold text-gray-900">
                I am Johnathan
              </h3>
              <p>Endodontics</p>
              <p>
                Coffee nerd, explorer, romance lover, beer fanatic, art
                addicted.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-[17.5rem] rounded-2xl bg-white shadow-md md:w-min">
            <img src="https://placehold.co/400x600" alt="" />
            <div className="w-[20rem] space-y-5 p-8">
              <h3 className="mb-4 text-nowrap text-2xl font-bold text-gray-900">
                I am Anastasia
              </h3>
              <p>Orthodontics</p>
              <p>Social media scholar, music evangelist, communicator.</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-[17.5rem] rounded-2xl bg-white shadow-md md:w-min">
            <img src="https://placehold.co/400x600" alt="" />
            <div className="w-[20rem] space-y-5 p-8">
              <h3 className="mb-4 text-nowrap text-2xl font-bold text-gray-900">
                I am Michael
              </h3>
              <p>Dental Implantology</p>
              <p>Creator, gamer, food fanatic, problem solver, coffee guru.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
