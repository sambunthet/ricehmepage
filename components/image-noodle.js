
const ImageNoodle = ({home}) => {
    const cover = home.HeadlineCoverImage.url;
    return (
        <div className="relative">
                <img
                    src={cover}
                    alt={"image-noodle"}
                    className="object-cover object-center"
                />
        </div>
    );
}

export default ImageNoodle;


