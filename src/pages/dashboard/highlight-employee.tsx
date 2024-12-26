export function HighlightEmployee() {
  return (
    <div id="dentist" className="h-fit">
      <div className="p-8">
        <div className="mb-8 text-center">
          <h2 className="pb-7 text-4xl font-bold text-red-400">
            Dr. Daniela Oliveira
          </h2>
          <p className="text-sm font-thin text-red-500">Dentista</p>
        </div>

        <div className="w-full items-center justify-center space-y-12 md:flex">
          <div className="flex w-full items-center justify-center md:w-1/2">
            <div className="relative">
              <img
                src="https://hosting.renderforestsites.com/26975653/1323580/media/d195344936a0ea6cdb8428c1909b84a2.png"
                alt=""
                className="w-80 sm:w-96"
              />
              <div className="absolute -bottom-9 left-[4.50rem] w-44 rounded-md bg-red-400 sm:-left-14 sm:bottom-24">
                <div className="px-6 py-4 text-center text-white sm:py-8">
                  <p className="text-xs font-bold sm:text-xl">
                    All you need is love and a good dentist!
                  </p>
                  <span className="text-nowrap text-xs sm:text-sm">
                    - Michael Williams
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:p-8">
            <p className="font-thin">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <br />
            <p className="font-thin">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
