import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-neutral-100 rounded-full mb-6">
              <p className="text-neutral-600">UI/UX Designer</p>
            </div>
            <h1 className="mb-6">
              Crafting Digital Experiences That Matter
            </h1>
            <p className="text-neutral-600 mb-8">
              I'm Andhika Satria Daffa, concentrate on leveraging the principles of
                UI/UX design to create intuitive and engaging
                interfaces. crafting user-centric experiences
                that transform concepts into reality.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => {
                  const element = document.getElementById("work");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
              >
                View My Work
              </button>
              {/* <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 border border-neutral-300 rounded-lg hover:border-neutral-400 transition-colors"
              >
                Get in Touch
              </button> */}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src="https://imgur.com/a/hzL1oWB"
                  alt="Andhika Satria Daffa - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-neutral-900/5 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
