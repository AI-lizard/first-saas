import ButtonLogin from "./components/ButtonLogin";
import FAQList from "./components/FAQList";
import Image from "next/image";
import productDemo from "./productDemo.jpeg";
export default function Home() {
  const isLoggedIn = true;
  const name = "Nathan";
  const priceFeatureList = [
    "Customer support",
    "100 posts per month",
    "Customizable for your brand",
    "Ai integrated",
  ];

  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200">
        <div className="flex justify-between items-center max-w-5xl mx-auto py-2 px-8">
          <div className="font-bold text-2xl"> VetTech</div>
          <div className="space-x-8 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>
      </section>
      {/* HERO */}
      <section className="p-8 text-center py-16 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
        <Image
          src={productDemo}
          alt="How the product works"
          className="w-96 rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-extrabold mb-6">CodeFast Tutorial</h1>
          <div className="opacity-80 mb-6">
            Create a automated content creator for your social media accounts.
            Where you give a Kill Tony URL and it will clip the video and upload
            it to your social media accounts.
          </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>
      </section>
      {/*PRICING*/}
      <section className="bg-base-200" id="pricing">
        <div className="text-center py-8">
          <p className="text-sm uppercase font-medium text-secondary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Pricing of the product
          </h2>
        </div>
        <div className="bg-base-100 rounded-3xl p-8 max-w-96 mx-auto space-y-4">
          <div className="flex gap-2 items-baseline">
            <div className="text-5xl font-black">$19</div>
            <div className="uppercase text-sm font-medium opacity-70">
              /month
            </div>
          </div>
          <ul className="space-y-2">
            {priceFeatureList.map((priceItems) => (
              <li className="flex items-center gap-2" key={priceItems}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-green-600 size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                {priceItems}
              </li>
            ))}
          </ul>
          <ButtonLogin
            isLoggedIn={isLoggedIn}
            name={name}
            extraStyle="w-full"
          />
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-base-200" id="faq">
        <div className="text-center py-8">
          <p className="text-sm uppercase font-medium text-secondary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold flex justify-center">
            Frequently Asked Questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "What is this product?",
                answer: "This product is a social media content creator.",
              },
              {
                question: "How does it work?",
                answer:
                  "You give a Kill Tony URL and it will clip the video and upload it to your social media accounts.",
              },
              {
                question: "How much does it cost?",
                answer: "It is $50 to use.",
              },
            ].map((qa) => (
              <FAQList key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
