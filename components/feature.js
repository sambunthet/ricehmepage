import React from "react";
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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
  const { t } = useTranslation("common");
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
    <div>
      <div className="min-h-screen flex max-w-6xl mx-auto mt-0">
        {/* ui web */}
        <div className="flex-1 pl-10 pr-10 pb-8 w-full hidden md:block ">
          {props.features.map((product, key) =>
            key % 2 === 0 ? (
              <div className="grid grid-cols-2 gap-4">
                <Link href={`/products/${product.id}`}>
                  <a data-aos="fade-right">
                    <div className="">
                      <div className="py-4 text-center">
                        <AgilityImage
                          width={320}
                          height={320}
                          className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    </div>
                  </a>
                </Link>
                <div data-aos="fade-left">
                  <div className="py-20">
                    <h2 className="text-4xl font-bold text-black tracking-normal">
                      {product.name}
                    </h2>
                    <h3 className="text-2xl font-sspro font-bold text-black leading-6 py-4 ">
                      $
                      {product.salePrice > 0
                        ? product.salePrice
                        : product.price}{" "}
                      {product.salePrice > 0 ? (
                        <span className="text-gray-500 line-through text-xs ml-0 pb-4">
                          ${product.price}
                        </span>
                      ) : (
                        ""
                      )}
                    </h3>
                    {product.variation ? (
                      product.variation.map((v) => (
                        <div className="">
                          <ui className="list-disc">
                            <li>
                              <a className="font-bold text-sm tracking-tight leading-5">
                                {v.name} : <a className="text-base font-sspro">{v.value.trim()}</a>
                              </a>
                            </li>
                          </ui>
                        </div>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div data-aos="fade-right">
                  <div className="py-20 md:ml-24 lg:ml-32 xl:ml-32">
                    <h2 className="text-4xl font-bold text-black tracking-normal">
                      {product.name}
                    </h2>
                    <h3 className="text-2xl font-sspro font-bold text-black leading-6 py-4 ">
                      $
                      {product.salePrice > 0
                        ? product.salePrice
                        : product.price}{" "}
                      {product.salePrice > 0 ? (
                        <span className="text-gray-500 line-through text-xs ml-0 pb-4">
                          ${product.price}
                        </span>
                      ) : (
                        ""
                      )}
                    </h3>
                    {product.variation ? (
                      product.variation.map((v) => (
                        <div className="">
                          <ui className="list-disc">
                            <li>
                              <a className="font-bold text-sm tracking-tight leading-5">
                                {v.name} : <a className="text-base font-sspro">{v.value.trim()}</a>
                              </a>
                            </li>
                          </ui>
                        </div>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                <div data-aos="fade-left">
                  <Link href={`/products/${product.id}`}>
                    <a>
                      <div className="text-center">
                        <AgilityImage
                          width={320}
                          height={320}
                          className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>

        {/* ui mobile */}
        <div className="flex-1 pl-10 pr-10 pb-8 block md:hidden">
          {props.features.map((product, key) => (
            <div className="grid grid-cols-1 gap-4">
              <div className="">
                <Link href={`/products/${product.id}`}>
                  <a>
                    <div className="pb-2 pt-6 text-center">
                      <AgilityImage
                        width={320}
                        height={320}
                        className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="">
                <div className="py-1 text-center">
                  <h2 className="text-2xl font-bold text-black tracking-normal">
                    {product.name}
                  </h2>
                  <h3 className="text-2xl font-bold text-black leading-6 py-4 ">
                    ${product.salePrice > 0 ? product.salePrice : product.price}{" "}
                    {product.salePrice > 0 ? (
                      <span className="text-gray-500 line-through text-xs ml-0 pb-4">
                        ${product.price}
                      </span>
                    ) : (
                      ""
                    )}
                  </h3>
                  {product.variation ? (
                    product.variation.map((v) => (
                      <div className="">
                        <ui className="list-disc text-left">
                            <li>
                              <a className="text-left font-bold text-sm tracking-tight leading-5">
                                {v.name} : <a className="text-base font-sspro">{v.value.trim()}</a>
                              </a>
                            </li>
                          </ui>
                      </div>
                    ))
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
                    {feature.salePrice > 0 ? (
                      <span className="text-gray-500 line-through text-xs">
                        ${feature.price}
                      </span>
                    ) : (
                      ""
                    )}
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
                    {feature.salePrice > 0 ? (
                      <span className="text-gray-500 line-through text-xs">
                        ${feature.price}
                      </span>
                    ) : (
                      ""
                    )}
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
                    {feature.salePrice > 0 ? (
                      <span className="text-gray-500 line-through text-xs">
                        ${feature.price}
                      </span>
                    ) : (
                      ""
                    )}
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
                    {feature.salePrice > 0 ? (
                      <span className="text-gray-500 line-through text-xs">
                        ${feature.price}
                      </span>
                    ) : (
                      ""
                    )}
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
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {" "}
          </DialogTitle>
          <DialogContent>
            <div className="grid grid-cols-2 gap-0 sm:gap-4 sm:mb-10 sm:mx-10">
              <div className="relative h-56 sm:56 place-self-center">
                <AgilityImage
                  src={product && product.image ? product.image : ""}
                  className="rounded-t-lg inline-block"
                  width="272"
                  height="272"
                />
              </div>
              <div className="">
                <h5 className=" text-lg font-bold py-2 ">
                  {" "}
                  {product && product.name ? product.name : ""}{" "}
                </h5>
                <h3 className=" text-sm py-1">
                  {product && product.type.slug
                    ? "Code : " + product.type.slug
                    : ""}
                </h3>
                <h3 className=" text-sm py-1">
                  {product && product.description
                    ? "Unit : " + product.unit
                    : ""}
                </h3>
                <h3 className=" text-xs sm:text-sm py-1">
                  {product && product.description
                    ? "Description : " + product.description
                    : ""}
                </h3>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {/* close dilog */}
    </>
  );
};

const Feature = (props) => {
  if (!props.features || props.features.length === 0) return <div></div>;
  const { t } = useTranslation("common");
  const features = props.features;
  return (
    <div className="bg-white pt-0 font-body">
      <div className="mt-6 md:m-12 ">
        <div>
          <h1 className="text-4xl text-center font-bold">
            {t("rice")}<span className="text-yellow-500">Vermicelli</span>
          </h1>
        </div>
        <div className="justify-items-center text-center">
          <div className="grid grid-cols-1">
            <p className=" font-sspro text-center text-base md:text-sm lg:text-2xl p-5 tracking-wide col-start-2 col-span-4">
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
