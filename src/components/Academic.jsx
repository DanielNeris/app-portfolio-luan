const Academic = ({ education }) => {
  return (
    <section id="academic" className="py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Academic</h2>
        <ul>
          {education.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <li key={index} className="mb-4">
              <h3 className="text-xl">{item.degree}</h3>
              <p>{item.university}</p>
              <p>{item.graduationYear}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Academic
