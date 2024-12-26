export function Location() {
  return (
    <div id="location" className="h-fit bg-[#343B56] lg:h-[calc(100dvh-20rem)]">
      <div className="h-full content-center">
        <div className="flex h-fit flex-wrap gap-8 p-8 md:flex-nowrap lg:items-center">
          <div className="w-full text-white md:w-1/2">
            <h2 className="pb-7 text-4xl font-bold lg:text-5xl">
              Nossa Localização
            </h2>
            <p className="text-base font-thin lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              mollitia explicabo impedit voluptatum maxime repellendus odio
              asperiores, nostrum totam ad vero quia perferendis deserunt minus
              architecto suscipit at rerum quisquam.
            </p>
          </div>
          <div className="w-1/2 flex-grow rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d869.8879068218546!2d-39.30916510000001!3d-7.2053645999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a1789af01e5769%3A0x394f7d5149e10af4!2sUNINASSAU%20-%20Juazeiro%20do%20Norte!5e0!3m2!1spt-BR!2sbr!4v1735147036248!5m2!1spt-BR!2sbr"
              className="h-64 w-full rounded-md sm:h-80 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
