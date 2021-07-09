import { AgilityImage } from "@agility/nextjs";
import { getProducts } from "$/utils/api/product";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);



export async function getStaticProps(context) {
    const products = await getProducts();
    return {
        props: { products },
        revalidate: 3600 * 1 * 24,
    };
}

const Products = ({ products }) => {

    const array3 = [...products, ...products, ...products];
    const [open, setOpen] = React.useState(false);
    const [product, setProduct] = React.useState(undefined);

    const handleClickOpen = (product) => {
        console.log("===> ", product);
        setProduct(product);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    if(!products || products.length == 0)
       return <div></div>;
    return (
        <div class=" mt-28 min-h-screen flex items-center bg-bproduct">
            <div class="flex-1 max-w-6xl mx-auto p-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
                    {array3.map((product) => (
                        <a  onClick={() => handleClickOpen(product)}>
                            <div className="bg-white shadow h-auto text-center pt-4">
                                <div className="relative h-56">
                                    <AgilityImage
                                        src={product.image}
                                        className="rounded-t-lg inline-block"
                                        layout="fill"
                                    />
                                </div>
                                <div className="bg-gray-100 p-2 text-left">
                                    <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                                        {product.name}
                                    </div>
                                    <div className="border-b-2 border-primary-500 w-8"></div>
                                    <div className="mt-4 text-gray-600 italic font-boldtext-xs">
                                        ${product.price || ''}
                                    </div>
                                </div>
                            </div>
                        </a>

                    ))}
                </div>
            </div>


            {/* open dilog */}
            <div>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}> </DialogTitle>
                    <DialogContent>
                        <div className="grid grid-cols-2 gap-0 sm:gap-4 sm:mb-10 sm:mx-10">
                            <div className="relative h-56 sm:56 place-self-center">
                                <AgilityImage
                                    src={product && product.image ? product.image : ''}
                                    className="rounded-t-lg inline-block"
                                    width="272"
                                    height="272"
                                />
                            </div>
                            <div className="">
                                <h5 className=" text-lg font-bold py-2 "> {product && product.name ? product.name  : ''} </h5>
                                <h3 className=" text-sm py-1">{ product && product.type.slug ?  "Code : "  + product.type.slug : ''}</h3>
                                <h3 className=" text-sm py-1">{ product && product.description ?  "Unit : "  + product.unit : ''}</h3>
                                <h3 className=" text-xs sm:text-sm py-1">{ product && product.description ?  "Description : "  + product.description : ''}</h3>
                                
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            {/* close dilog */}
        </div>
    );
};

export default Products;
