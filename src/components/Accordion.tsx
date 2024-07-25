import { useState } from 'react'

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="absolute top-1/4 left-1/4 w-2/4 bg-white h-2/4 p-6 rounded-lg shadow-lg items-center justify-items-center">
      <div className="flex items-center gap-4 p-4">
        <img src="src/assets/images/icon-star.svg" alt="" className="size-9" />
        <h1 className="text-5xl text-dark-purple font-bold">FAQs</h1>
      </div>
      <details className="p-4 border-b border-solid border-gray-200">
        <summary
          className="text-dark-purple flex justify-between cursor-pointer text-md font-bold"
          onClick={() => toggleAccordion(0)}
        >
          What is Frontend Mentor, and how will it help me?
          <img
            src={
              openIndex === 0
                ? 'src/assets/images/icon-minus.svg'
                : 'src/assets/images/icon-plus.svg'
            }
            alt=""
          />
        </summary>
        <p className="text-grayish-purple pt-3 leading-6">
          Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building.
        </p>
      </details>
      <details className="p-4 border-b border-solid border-gray-200">
        <summary
          className="text-dark-purple flex justify-between cursor-pointer text-md font-bold"
          onClick={() => toggleAccordion(1)}
        >
          How do I get started with Frontend Mentor?
          <img
            src={
              openIndex === 1
                ? 'src/assets/images/icon-minus.svg'
                : 'src/assets/images/icon-plus.svg'
            }
            alt=""
          />
        </summary>
        <p className="text-grayish-purple pt-3 leading-6">
          Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building.
        </p>
      </details>
      <details className="p-4 border-b border-solid border-gray-200">
        <summary
          className="text-dark-purple flex justify-between cursor-pointer text-md font-bold"
          onClick={() => toggleAccordion(2)}
        >
          How do I get started with Frontend Mentor?
          <img
            src={
              openIndex === 2
                ? 'src/assets/images/icon-minus.svg'
                : 'src/assets/images/icon-plus.svg'
            }
            alt=""
          />
        </summary>
        <p className="text-grayish-purple pt-3 leading-6">
          Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building.
        </p>
      </details>
      <details className="p-4">
        <summary
          className="text-dark-purple flex justify-between cursor-pointer text-md font-bold"
          onClick={() => toggleAccordion(3)}
        >
          How do I get started with Frontend Mentor?
          <img
            src={
              openIndex === 3
                ? 'src/assets/images/icon-minus.svg'
                : 'src/assets/images/icon-plus.svg'
            }
            alt=""
          />
        </summary>
        <p className="text-grayish-purple pt-3 leading-6">
          Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building.
        </p>
      </details>
    </section>
  )
}

export default Accordion
