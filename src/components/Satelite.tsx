import gif3 from "/animacion3.webp";

export default function Satelite() {
    return (
        <div className=" h-[470px] mb-24 absolute right-10 overflow-hidden">
            <img
                src={gif3}
                alt="Developer illustration"
                width={500}
                height={500}
                className="hidden lg:block object-fill"
            />
        </div>
    )
}