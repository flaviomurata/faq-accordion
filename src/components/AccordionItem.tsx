import React, { useState } from 'react'

type Props = {
  question: string
  answer: string
  index: number
}

const AccordionItem = ({ question, answer, index }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <details className="p-4 border-b border-solid border-gray-200">
      <summary
        className="text-dark-purple flex justify-between cursor-pointer text-sm font-bold md:text-base"
        onClick={() => toggleAccordion(index)}
      >
        {question}
        <img
          src={
            openIndex === index
              ? 'src/assets/images/icon-minus.svg'
              : 'src/assets/images/icon-plus.svg'
          }
          alt=""
        />
      </summary>
      <p className="text-grayish-purple pt-3 leading-6 max-md:text-sm">
        {answer}
      </p>
    </details>
  )
}

export default AccordionItem
