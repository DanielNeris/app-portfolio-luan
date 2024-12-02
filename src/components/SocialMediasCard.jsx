const SocialMediasCard = ({ socialMedias }) => {
  return (
    <div className="flex justify-center">
      {socialMedias.map(social => (
        <a
          href={social.link}
          target="_blank"
          rel="noreferrer"
          key={social.description}
          className="mr-5 border-solid border-2 border-[#915EFF] p-2 rounded-full"
        >
          <img
            src={social.icon}
            alt={social.description}
            className="w-5 h-5 object-contain"
          />
        </a>
      ))}
    </div>
  )
}

export default SocialMediasCard
