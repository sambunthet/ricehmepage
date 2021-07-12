import React from "react";
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';

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

const FeaturesBox = (props) => {
  const { t } = useTranslation('common');
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState(undefined);

  const handleClickOpen = (product) => {
      setProduct(product);
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };
  const readMore = t("readMore");
  return (
    <>
      {props.features.map((feature, key) =>
        key % 2 !== 0 ? (
          <div key={key}>
            <div className="m-6 md:mt-1 sm:m-10 md:m-12 hidden md:block">
              <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
                <div data-aos="fade-right" className="pl-32 ml-32">
                  <AgilityImage
                    width={320}
                    height={320}
                    className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                    src={feature.image}
                    alt={feature.name}
                  />
                </div>
                <div className="mt-5 mt-sm-0 mb-4" data-aos="fade-left">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="text-center sm:text-left text-2xl font-bold pt-3">
                    {feature.name}
                  </h5>
                  <h5 className="text-center sm:text-left text-xl font-bold mb-3 ">
                    ${feature.salePrice > 0 ? feature.salePrice : feature.price}{" "}
                    {feature.salePrice > 0 ? <span className="text-gray-500 line-through text-xs">
                      ${feature.price}
                    </span> : ""}
                  </h5>
                  <p className="text-center sm:text-left mb-3 f-15">
                    {feature.description}
                  </p>
                  <Link href={`/products/${feature.id}`}>
                    <a>
                      <p className="text-center sm:text-left text-yellow-500">
                        {readMore} <span className="">&#8594;</span>
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:m-20 md:m-32 block md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
                <div>
                  <AgilityImage
                    className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                    src={feature.image}
                    alt={feature.name}
                    key={key}
                    width={320}
                    height={320}
                  />
                </div>
                <div className="mt-5 mt-sm-0 mb-4">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="text-center sm:text-left text-2xl font-bold pt-3">
                    {feature.name}
                  </h5>
                  <h5 className="text-center sm:text-left text-xl font-bold mb-3 ">
                    ${feature.salePrice > 0 ? feature.salePrice : feature.price}{" "}
                    {feature.salePrice > 0 ? <span className="text-gray-500 line-through text-xs">
                      ${feature.price}
                    </span> : ""}
                  </h5>
                  <p className="text-center sm:text-left mb-3 f-15">
                    {feature.description}
                  </p>
                  <Link href={`/products/${feature.id}`}>
                    <a>
                      <p className="text-center sm:text-left text-yellow-500">
                        {readMore} <span className="">&#8594;</span>
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div key={key}>
            <div className="m-6 md:mt-1 sm:m-10 md:m-12 hidden md:block">
              <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
                <div className="mt-5 sm:mt-0 mb-4" data-aos="fade-right">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="text-center sm:text-right  text-2xl font-bold mb-3 pt-3">
                    {feature.name}
                  </h5>
                  <h5 className="text-center sm:text-right text-xl font-bold mb-3 ">
                    ${feature.salePrice > 0 ? feature.salePrice : feature.price}{" "}
                    {feature.salePrice > 0 ? <span className="text-gray-500 line-through text-xs">
                      ${feature.price}
                    </span> : ""}
                  </h5>
                  <p className="text-center sm:text-right mb-3 f-15">
                    {feature.description}
                  </p>
                  <Link href={`/products/${feature.id}`}>
                    <a>
                      <p className="text-center sm:text-right text-yellow-500">
                        {readMore} <span className="">&#8594;</span>
                      </p>
                    </a>
                  </Link>
  
                </div>
                <div data-aos="fade-left" className="pr-32 mr-32">
                  <AgilityImage
                    className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                    src={feature.image}
                    alt={feature.name}
                    key={key}
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </div>
            <div className="sm:m-20 md:m-32 block md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
                <div>
                  <AgilityImage
                    className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                    src={feature.image}
                    alt={feature.name}
                    key={key}
                    width={320}
                    height={320}
                  />
                </div>
                <div className="mt-5 mt-sm-0 mb-4">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="text-center sm:text-left text-2xl font-bold pt-3">
                    {feature.name}
                  </h5>
                  <h5 className="text-center sm:text-left text-xl font-bold mb-3 ">
                    ${feature.salePrice > 0 ? feature.salePrice : feature.price}{" "}
                    {feature.salePrice > 0 ? <span className="text-gray-500 line-through text-xs">
                      ${feature.price}
                    </span> : ""}
                  </h5>
                  <p className="text-center sm:text-left mb-3 f-15">
                    {feature.description}
                  </p>
                  <Link href={`/products/${feature.id}`}>
                    <a>
                      <p className="text-center sm:text-left text-yellow-500">
                        {readMore} <span className="">&#8594;</span>
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      )}
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
    </>
  );
};

const Feature = (props) => 
{
  if (!props.features || props.features.length === 0)
        return <div></div>;
  const { t } = useTranslation('common');
  const features = props.features;
  return (
    <div className="bg-white pt-10 font-body">
      <div className="mt-6 md:m-12 ">
        <div>
          <h1 className="text-4xl text-center font-bold">
            Rice<span className="text-yellow-500">Vermicelli</span>
          </h1>
        </div>
        <div className="justify-items-center text-center">
          <div className="grid grid-cols-1">
            <p className="text-center text-sm md:text-sm lg:text-2xl p-5 tracking-wide col-start-2 col-span-4">
              {t("company")}
            </p>
          </div>
        </div>
      </div>
      <FeaturesBox features={features} />
    </div>
  );
};
export default Feature;