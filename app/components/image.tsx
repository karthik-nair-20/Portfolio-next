import Image from "next/image"

export default function ImageComponent({source}: { source: string}) {
  return (
    <div className="relative flex justify-center items-center w-2/3 h-auto">
    <Image
      src={source}
      width={16}
      height={9}
      layout="responsive"
      alt="Picture of the author"
    />

    </div>
  )
}