import Image from "next/image";

type CardType = {
    imageName: string;
    descriptionBoldText: string;
    descriptionLightText: string;
    descriptionFont: { className: string };
    buttonName: string;
    buttonFont: { className: string };
    bookMarkIcon: string;
}

export default function UserLandingPageCard({ imageName, descriptionBoldText, descriptionLightText, descriptionFont,
    buttonName, buttonFont, bookMarkIcon }: CardType) {

    return (
        <div className="w-[352px] h-[313px] border-2 z-30">
            <div className="w-full h-[60%]">
                <Image src={`/${imageName}.jpg`} alt={`imageName`} width={352} height={187} />
            </div>
            <div className="w-full h-[40%] pl-6">
                <p className={`text-[#000000] font-bold pt-2 ${descriptionFont.className}`}>
                    {descriptionBoldText} <span className="font-normal">{descriptionLightText}</span></p>
                <div className="flex gap-5 pt-4">
                    <button className={`text-[#747474] ring-2 px-4 py-1 ${buttonFont.className}`}>{buttonName} {'>>'}</button>
                    <button className="text-[#747474] ring-2 px-4 py-1"><Image src={`/${bookMarkIcon}.svg`} alt="bookMarkIcon"
                        width={20} height={20} /></button>
                </div>
            </div>
        </div>
    );
}

