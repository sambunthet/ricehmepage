

const ImageNoodle = () => {

    return (
        <div>
            <div className="relative">
                <img src="https://cdn.shopify.com/s/files/1/0506/3252/3965/files/a-sha-home-number-1_1900x.jpg?v=1616047343" />
                <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl  w-3/4 md:w-2/5 mx-auto -mt-1  rounded-lg rounded-t-non">
                   <p className="text-5xl text-white"> Never too Late</p>
                   <h1 className="text-3x1 text-white"> A thick, creamy-coloured, chewy noodle that's a good all rounder for chines recipes</h1>
                </div>
            </div>
        </div>
    );
}

export default ImageNoodle;


