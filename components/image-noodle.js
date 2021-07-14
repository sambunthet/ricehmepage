import { AgilityImage } from "@agility/nextjs";
import Image from "next/image";

const ImageNoodle = ({home}) => {
    const cover = home.HeadlineCoverImage.url;

    return (
        <div>
            <div className="relative">
                <Image
                    alt={"image-noodle"}
                    src={cover}
                    layout="fill"
                    className="object-cover object-center"
                />
            </div>
        </div>
    );
}

export default ImageNoodle;


