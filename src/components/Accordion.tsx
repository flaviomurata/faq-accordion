import AccordionItem from './AccordionItem'

const Accordion = () => {
  return (
    <section className="absolute top-1/4 left-1/4 w-2/4 bg-white p-6 rounded-lg shadow-lg items-center justify-items-center max-md:h-[36rem] overflow-hidden h-[32rem]">
      <div className="flex items-center gap-4 p-4">
        <img src="src/assets/images/icon-star.svg" alt="" className="size-9" />
        <h1 className="text-5xl text-dark-purple font-bold max-md:text-2xl">
          FAQs
        </h1>
      </div>
      <AccordionItem
        question="What is Frontend Mentor, and how will it help me?"
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        index={0}
      />
      <AccordionItem
        question="How do I get started with Frontend Mentor?"
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        index={1}
      />

      <AccordionItem
        question="How do I get started with Frontend Mentor?"
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        index={2}
      />
      <AccordionItem
        question="How do I get started with Frontend Mentor?"
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        index={3}
      />
    </section>
  )
}

export default Accordion
