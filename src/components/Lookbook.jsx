function Lookbook() {
  return (
    <section className="bg-[#111111] py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-12">

          <p className="text-[#ff6b00] text-xs font-bold tracking-[0.3em] uppercase">
            The TeeMeme look
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-3">
            STYLED BY TEEMEME
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          <img
            src="/products/tshirt-1.jpg"
            alt="TeeMeme style"
            className="w-full aspect-[3/4] object-cover rounded-2xl"
          />

          <img
            src="/products/hoodie-1.jpg"
            alt="TeeMeme hoodie"
            className="w-full aspect-[3/4] object-cover rounded-2xl"
          />

          <img
            src="/products/tshirt-2.jpg"
            alt="TeeMeme shirt"
            className="w-full aspect-[3/4] object-cover rounded-2xl col-span-2 md:col-span-1"
          />

        </div>

        <div className="text-center mt-10">

          <a
            href="#"
            className="inline-block text-sm font-bold text-[#ff6b00] hover:text-white transition"
          >
            EXPLORE MORE OF OUR WORK →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Lookbook;