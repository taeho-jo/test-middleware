// <script async src="https://www.googletagmanager.com/gtag/js?id=AW-667012930"></script>
// <script>
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
//
// gtag('config', 'AW-667012930');
// </script>

// <script>
// window.addEventListener('load', function(event) {
// if (window.location.href == 'https://diby.io/tri') {
// gtag('event', 'conversion', {
// 'send_to': 'AW-667012930/UzsQCN24pbgDEMKeh74C'
// });
// }
// if (window.location.href == 'https://diby.io/pricing') {
// gtag('event', 'conversion', {
// 'send_to': 'AW-667012930/RJrHCOC4pbgDEMKeh74C'
// });
// }
// });
// </script>

export const GA_TRACKING_ID = 'AW-667012930';

export const preview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
