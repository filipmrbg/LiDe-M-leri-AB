import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageTitle(title: string, description?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Description
    const defaultDesc = "LiDe Måleri AB utför allt inom invändigt och utvändigt måleri, tapetsering, spackling och fasadmålning i Dalarna med omnejd. Kontakta oss för fri offert!";
    const activeDesc = description || defaultDesc;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', activeDesc);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', activeDesc);
      document.head.appendChild(metaDescription);
    }

    // 3. Update Open Graph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', activeDesc);

    // 4. Update Twitter Title & Description
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', activeDesc);

    // 5. Update Canonical Link & Absolute URL
    const origin = typeof window !== 'undefined' && window.location.origin.startsWith('http')
      ? window.location.origin
      : 'https://lidemaleri.se';
    const absoluteUrl = `${origin}${pathname === '/' ? '' : pathname}`;
    const ogImageUrl = 'https://media.fastdl.app/get?__sig=60gyNjdptzxMJ7FochySEQ&__expires=1787913596&uri=https%3A%2F%2Finstagram.fdac24-5.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F180430162_359569148844349_1575881971785143854_n.jpg%3Fstp%3Ddst-jpg_s150x150_tt6%26_nc_cat%3D102%26ccb%3D7-5%26_nc_sid%3Df7ccc5%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%253D%26_nc_ohc%3DGfAFGHybTo0Q7kNvwFL1nr2%26_nc_oc%3DAdpHcpiUU8sgSVivfT_9Lk0qHDRPZ8V-uZ1E-UINhhGU3iNP1lZDiqoMV05JdDmD5Ps%26_nc_zt%3D24%26_nc_ht%3Dinstagram.fdac24-5.fna%26_nc_ss%3D7baaf%26oh%3D00_AQFkzo1ZaG-w8RaNBLDKXpprUwy1sBOgDvxPRnjNaasniA%26oe%3D6A972C00&filename=180430162_359569148844349_1575881971785143854_n.jpg';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', absoluteUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', absoluteUrl);
      document.head.appendChild(canonical);
    }

    // 6. Update Open Graph URL & Image
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', absoluteUrl);

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', ogImageUrl);
    } else {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', ogImageUrl);
      document.head.appendChild(ogImage);
    }
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImageUrl);
    }

  }, [title, description, pathname]);
}
