// TODO:: https://github.com/isaachinman/next-i18next
//        https://dev.to/skona27/the-easiest-way-to-internationalize-your-nextjs-application-llj
//        https://nextjs.org/docs/advanced-features/i18n-routing

const traslation = {
    "en": {
        "company": `Indochina Rice Mill has gained the confidence and trust of our
        valuable worldwide customers in our top quality rice and rice
        vermicelli products. Armed with a serious management team and our
        stringent quality control, we are here to consistently provide the
        most competitive price and the best quality rice and rice
        vermicelli to our customers, and are ready to be your trustworthy
        partner.`,
        "readMore": `Read More`,
        "home": `Home`,
        "products": `Products`,
        "blog": `Blog`,
        "recipes": `Recipes`,
        "distributor": `Where to Buy`,
        "about": `About us`
    },
    "zh": {
        "company": `Indochina Rice Mill 印度支那碾米厂赢得了我们的信心和信任
        我们优质大米和大米的宝贵全球客户
        粉条制品。拥有认真的管理团队和我们的
        严格的质量控制，我们在这里始终如一地提供
        最具竞争力的价格和最优质的大米和大米
        粉条给我们的客户，并准备成为您值得信赖的
        伙伴。`,
        "readMore": `阅读更多`,
        "home": `家`,
        "products": `产品`,
        "blog": `博客`,
        "recipes": `食谱`,
        "distributor": `去哪买`,
        "about": `关于我们`
    },
    "km": {
        "company": `Indochina Rice Mill រោងម៉ាស៊ីនកិនស្រូវឥណ្ឌូចិនទទួលបានទំនុកចិត្តនិងជឿជាក់ពីពួកយើង
        អតិថិជនដ៏មានតម្លៃនៅទូទាំងពិភពលោកនៅក្នុងអង្ករនិងអង្ករដែលមានគុណភាពខ្ពស់បំផុតរបស់យើង
        ផលិតផល vermicelli ។ ប្រដាប់ដោយក្រុមគ្រប់គ្រងដ៏ធ្ងន់ធ្ងរនិងរបស់យើង
        ការត្រួតពិនិត្យគុណភាពតឹងរ៉ឹងយើងនៅទីនេះដើម្បីផ្តល់អោយជានិច្ច
        តម្លៃប្រកួតប្រជែងបំផុតនិងអង្ករនិងអង្ករមានគុណភាពល្អបំផុត
        vermicelli ដល់អតិថិជនរបស់យើងហើយត្រៀមខ្លួនជាស្រេចអាចទុកចិត្តបានរបស់អ្នក
        ដៃគូ។`,
        "readMore": `អាន​បន្ថែម`,
        "home": `ទំព័រដើម`,
        "products": `ផលិតផល`,
        "blog": `ប្លក់`,
        "recipes": `រូបមន្ត`,
        "distributor": `កន្លែងទិញ​`,
        "about": `អំពី​ពួក​យើង`
    }
}
export const getCurrentLocale = () => process.env.LOCALE;
export const getLocaletext = (target, locale = getCurrentLocale()) => traslation[locale] ? traslation[locale][target] || '' : traslation['en'][target];