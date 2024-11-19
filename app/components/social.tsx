import Image from "next/image"

export default function Socials() {
  return (
    <div className="flex justify-center space-x-6 text-2xl py-6">
      <Image
        src="/icons/discord.svg"
        width={27}
        height={27}
        alt="dicord"
      />

      <Image
        src="/icons/github.svg"
        width={27}
        height={27}
        alt="github"
      />
      <Image
        src="/icons/instagram.svg"
        width={27}
        height={27}
        alt="instagram"
      />
      <Image
        src="/icons/leetcode.svg"
        width={27}
        height={27}
        alt="leetcode"
      />
      <Image
        src="/icons/linkedin.svg"
        width={27}
        height={27}
        alt="linkedln"
      />
    </div>
  )
}