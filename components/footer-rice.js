import { AgilityImage } from "@agility/nextjs";
import useTranslation from 'next-translate/useTranslation';

const FooterRice = () => {
  const { t } = useTranslation('common');
  return (
    <div className="grid grid-cols-6 py-10" style={{backgroundColor: "#252424"}}>
      <div className="col-start-2 col-span-4 sm:col-start-1 sm:col-end-7  md:col-start-1 md:col-end-7  xl:col-start-2 xl:col-span-4">
      <div className="grid gap-10 sm:gap-0 grid-cols-1 sm:grid-cols-4  text-white justify-items-center">
      <div>
        <div className="text-center">
          <div>
            <AgilityImage
              src="http://rice.com.kh/imgs/2/logo_03.png"
              className="inline-block pb-5"
              width={80}
              height={80}
            />
          </div>
          <div className="pt-5">
            {t("company")}
          </div>
          <div className="grid grid-cols-3 pt-5">
            <div>
              <i className="fab fa-facebook-square fa-3x"></i>
            </div>
            <div>
              <i className="fab fa-instagram fa-3x"></i>
            </div>
            <div>
              <i className="fab fa-google fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center sm:text-left">
        <h1 className="font-bold pb-3">{t("callus")}</h1>
        <h3 className="text-sm">(+855) 12-530-777</h3>
        <h3 className="text-sm">(+855) 88-33333-77</h3>
        <h3 className="text-sm">(+855) 11-988-777</h3>
      </div>
      <div className="text-center sm:text-left">
        <h1 className="font-bold pb-3">{t("email")}</h1>
        <h3 className="text-sm">info@rice.com.kh</h3>
        <h3 className="text-sm">yunhong@rice.com.kh</h3>
      </div>

      <div className="text-center sm:text-left">
        <h1 className="font-bold pb-3">{t("address")}</h1>
        <h3 className="text-sm">#F29-30, Borey Grand Chroy Changvar, National Road No.6, Sangkat Chroy Changvar, Khan Chroy Changvar, Phnom Penh, Cambodia</h3>
        <h3 className="text-sm">Factory Address: National Road No. 5, Phsar Trach Village, Longvek Commune, Kompong Tralach District, Kompong Chhnang Province, Kingdom of Cambodia.</h3>
      </div>

    </div>
      </div>
    </div>
  );
};

export default FooterRice;
