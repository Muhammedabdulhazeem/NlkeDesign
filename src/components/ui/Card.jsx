import { useModal } from "../../hooks/useModal"

export const ItemCard = ({className, price, src}) => {
    const { showModal } = useModal()

    return(
        <div onClick={() => showModal({bool: true, src})} className={`relative h-[360px] w-[300px] flex justify-center items-center bg-[#f6f6f6] ${className}`}>
            <div className="absolute top-0 right-0 text-white font-bold flex justify-start items-center py-4 px-7 bg-[#f2c583] ">${price}</div>
            <img className="relative bottom-[-40px] w-[280px] h-[210px] " src={src} alt="shoe" />
        </div>
    )
}