import { useForm } from 'react-hook-form'

export function Appointment() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  function handleSubmitMessage() {}

  return (
    <div
      id="appointment"
      className="h-fit bg-[#F3F5F8] lg:h-[calc(100dvh-5.5rem)]"
    >
      <div className="h-full content-center p-8 md:p-20">
        <div className="flex shadow-lg">
          <div className="hidden w-2/3 lg:block">
            <img
              src="https://placehold.co/760x700"
              alt=""
              className="h-full bg-cover"
            />
          </div>

          <div className="w-[-webkit-fill-available] lg:w-1/2">
            <div className="flex h-full">
              <div className="flex h-full w-full flex-col justify-around bg-white p-8">
                <div>
                  <h2 className="text-nowrap pb-2 text-2xl font-bold text-red-400 md:text-4xl">
                    Marque Sua Consulta
                  </h2>
                  <p className="mb-6 text-xl font-thin text-gray-500 md:text-2xl">
                    Your text
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(handleSubmitMessage)}
                  className="space-y-4"
                >
                  <div className="space-y-3">
                    <label
                      htmlFor="name"
                      className="block text-base font-thin text-gray-700 md:text-xl"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="h-12 w-full rounded-full border border-gray-400 px-5 text-xl outline-none focus:border-red-500 focus:ring-red-500 md:h-16"
                      {...register('name', { required: true })}
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name?.type === 'required' && (
                      <p className="text-red-500">* Nome não pode ser vazio</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="email"
                      className="block text-base font-thin text-gray-700 md:text-xl"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="h-12 w-full rounded-full border border-gray-400 px-5 text-xl outline-none focus:border-red-500 focus:ring-red-500 md:h-16"
                      {...register('email', { required: true })}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.name?.type === 'required' && (
                      <p className="text-red-500">* Email não pode ser vazio</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="message"
                      className="block text-base font-thin text-gray-700 md:text-xl"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-xl border border-gray-400 px-5 text-xl outline-none focus:border-red-500 focus:ring-red-500"
                      {...register('message', { required: true })}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.message?.type === 'required' && (
                      <p className="text-red-500">* Escreva uma mensagem</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-gradient-to-br from-red-300 to-red-500 px-8 py-4 font-thin tracking-wider text-white shadow-md transition-shadow hover:opacity-80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
