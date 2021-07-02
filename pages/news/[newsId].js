// our-domain/news/newsid

import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();
    const id = router.query.newsId;
    return <h1>Hello Detail Page with value {id} </h1>;
  }
  
  export default DetailPage;