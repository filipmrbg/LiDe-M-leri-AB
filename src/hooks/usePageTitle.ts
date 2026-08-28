import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageTitle(title: string, description?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Description
    const defaultDesc = "Dannes Bygg & Entreprenad AB utför allt inom snickeri, renovering, tillbyggnad, altaner och totalentreprenad med 3D-ritningar i Mariestad och Skaraborg.";
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
      : 'https://dannes-bygg-entreprenad-ab.vercel.app';
    const absoluteUrl = `${origin}${pathname === '/' ? '' : pathname}`;
    const ogImageUrl = 'https://media.fastdl.app/get?__sig=wQCmRJIjxgPJXQtrJu9sXA&__expires=1787307844&uri=https%3A%2F%2Fscontent-waw2-1.cdninstagram.com%2Fv%2Ft51.82787-19%2F660456553_18073931414295507_2516226103266130246_n.jpg%3F_nc_cat%3D111%26ccb%3D7-5%26_nc_sid%3Dbf7eb4%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDI0LkMzIn0%253D%26_nc_ohc%3D_EVOwaqh7PcQ7kNvwFbTUQb%26_nc_oc%3DAdoA7zbqyNoJeBSYaveHQyp9oenggjfgl9MKVz5-5KXZHha06jNrnoXfAOCi0F55PO4%26_nc_zt%3D24%26_nc_ht%3Dscontent-waw2-1.cdninstagram.com%26_nc_gid%3DOdVXxb8US8kfl_w0p2tDyQ%26_nc_ss%3D7b6a8%26oh%3D00_AQFceCLC_5BihDYxQpv1fSiFsAtoBTUV07T4jQ3FJnvnvg%26oe%3D6A8DDD3F&filename=660456553_18073931414295507_2516226103266130246_n.jpg';

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
