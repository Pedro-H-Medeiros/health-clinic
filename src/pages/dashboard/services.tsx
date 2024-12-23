export function Services() {
  return (
    <div className="h-dvh">
      <div className="flex h-full flex-col items-center justify-center p-8 md:h-fit">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Serviços</h2>
          <p className="mb-8 text-gray-600">
            Learn more about the services I provide and make an appointment now!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-4xl font-bold text-pink-600/30">
              Your text
            </h3>
            <h4 className="mb-4 font-semibold text-red-500">Endodontics</h4>
            <p className="text-gray-600">
              I provide comprehensive endodontics services including diagnosing,
              preventing, and treatment of any kind of dental pulp diseases and
              injuries. My team and I will make sure you get the best possible
              treatment on time.
            </p>
            <button className="mt-4 font-semibold text-pink-600 hover:underline">
              Booking &gt;
            </button>
          </div>

          {/* Card 2 */}
          <div className="max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-4xl font-bold text-pink-600/30">
              Your text
            </h3>
            <h4 className="mb-4 font-semibold text-red-500">Orthodontics</h4>
            <p className="text-gray-600">
              I will deal with the diagnosis, prevention, and correction of
              malpositioned teeth and jaws. The full service includes check-ups
              both for children and adults, orthodontic brace therapy, as well
              as tooth-whitening.
            </p>
            <button className="mt-4 font-semibold text-pink-600 hover:underline">
              Booking &gt;
            </button>
          </div>

          {/* Card 3 */}
          <div className="max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-4xl font-bold text-pink-600/30">
              Your text
            </h3>
            <h4 className="mb-4 font-semibold text-red-500">
              Dental Implantology
            </h4>
            <p className="text-gray-600">
              Inserted into the jawbone to replace the root of the natural
              tooth, dental implants look, feel, and function like real teeth.
              We’ll do our best to make the whole process as painless as
              possible and get perfect results.
            </p>
            <button className="mt-4 font-semibold text-pink-600 hover:underline">
              Booking &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
