import Image from "next/image";
const HomeTeamCard = ({ name, designation, picture }) => {
    return (
        <div className="relative w-full">
            {picture && (
                <Image
                    src={picture}
                    alt="Placeholder image"
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                />
            )}
            <div className={`${picture ? "clip absolute inset-0 w-full h-full bg-[#212747] opacity-0 hover:opacity-75 transition-opacity" : "w-full h-full flex "} `}>
                <div className={`pt-10`}>
                    <div className={`text-white`}>
                        <p className="bg-[#F75F4E] opacity-100">
                            {name && <h2 className="text-2xl pl-5 font-bold text-left">{name}</h2>}
                        </p>
                        {designation && (
                            <p className="text-secondary pl-5 text-left text-lg font-normal mb-1 max-w-[200px]">
                                {designation}
                            </p>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTeamCard;