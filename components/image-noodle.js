
import { AgilityImage } from "@agility/nextjs";

const ImageNoodle = ({home}) => {
    const cover = home.HeadlineCoverImage.url;

    return (
        <div>
            <div className="relative">
                <img
                    src={cover}
                />
            </div>
        </div>
    );
}

export default ImageNoodle;


