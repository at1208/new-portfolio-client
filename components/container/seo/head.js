import Head from 'next/head';
import { withRouter } from 'next/router';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';


const head = ({ router }) => {
  return  <Head>
            <title>{APP_NAME}</title>
            <meta
                name="description"
                content="Welcome to my portfolio"
            />
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`Portfolio | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="My portfolio website"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/static/images/`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
}

export default withRouter(head);
