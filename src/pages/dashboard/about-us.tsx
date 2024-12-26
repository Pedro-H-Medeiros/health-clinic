export function AboutUs() {
  return (
    <div id="about-us" className="h-vh mt-8 w-full">
      <div className="flex h-fit items-center justify-around md:h-full">
        <div className="p-8 md:w-2/3 md:pl-36">
          <h2 className="pb-7 text-4xl font-bold text-gray-900">Sobre Nós</h2>
          <p className="font-thin">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <br />
          <p className="font-thin">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="hidden w-1/2 justify-center md:flex">
          <img src="https://placehold.co/400x500" alt="" />
        </div>
      </div>
    </div>
  )
}
