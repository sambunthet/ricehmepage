import { AgilityImage } from "@agility/nextjs";
import useTranslation from 'next-translate/useTranslation';

const FooterRice = ({home}) => {
  const { t } = useTranslation('common');
  const addresses = home.Address;
  const emails = home.Email;
  const contactNumbers = home.ContactNumber;
  const headLineText = home.HeadlineText;
  const companyLogo = home.Logo.url;

  const socialMedia = home.SocialMedia;

  if(!socialMedia)
     return <div></div>;

  const fb = socialMedia.Facebook;
  const twitter = socialMedia.Twitter;
  const instagram = socialMedia.Instagram;
  const tiktok = socialMedia.Tiktok;
  const youtube = socialMedia.Youtube;

  
  return (
    <div className="grid grid-cols-6 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-6 md:p-6 py-10" style={{backgroundColor: "#252424"}}>
      <div className="col-start-2 col-span-4 sm:col-start-1 sm:col-end-7  md:col-start-1 md:col-end-7  xl:col-start-2 xl:col-span-4">
      <div className="grid gap-10 sm:gap-0 grid-cols-1 sm:grid-cols-4 text-white justify-items-center">
      <div>
        <div className="text-center">
          <div>
            <AgilityImage
              src={companyLogo}
              className="inline-block pb-5"
              width={80}
              height={80}
            />
          </div>
          <div className="pt-5 font-sspro sm:p-5 md:p-0">
            {headLineText}
          </div>
          <div className="grid text-center grid-cols-5 pt-5">
              {
                fb ?
                  <a href={fb} target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook fa-2x"></i>
                  </a> : null
              }

              {
                  instagram ?
                    <a  href={instagram} target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram fa-2x"></i>
                    </a> : null
              }


              {
                  twitter ?
                      <a  href={twitter} target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter fa-2x"></i>
                      </a> : null
              }

              {
                  youtube ?
                      <a  href={youtube} target="_blank" rel="noreferrer">
                          <i className="fab fa-youtube fa-2x"></i>
                      </a> : null
              }

              {
                  tiktok ?
                      <a  href={tiktok} target="_blank" rel="noreferrer">
                          <i className="fab fa-tiktok fa-2x"></i>
                      </a> : null
              }

          </div>
        </div>
      </div>
      <div className="text-center sm:text-left">
        <h1 className="font-bold pb-3">{t("callus")}</h1>
          {contactNumbers.map((contactNumbers, index)=>
              <h3 className="text-base font-sspro" key={index}>{contactNumbers.PhoneNumber}</h3>
          )}
      </div>
      <div className="text-center sm:text-left">
        <h1 className="font-bold pb-3">{t("email")}</h1>

          {emails.map((email, index)=>
              <h3 className="text-base font-sspro" key={index}>{email.Email}</h3>
          )}
      </div>

      <div className="text-center sm:text-left">
        <h1 className="font-bold pb-3">{t("address")}</h1>

          {addresses.map((address, index)=>
              <h3 className="text-base pb-2 font-sspro" key={index}>{address.Address}</h3>
          )}
      </div>

    </div>
      </div>
    </div>
  );
};

export default FooterRice;
