export interface ReviewItem {
  id: string;
  author: string;
  avatar?: string;
  city: string;
  rating: number;
  date: string;
  project: string;
  comment: string;
  verified: boolean;
  googleReviewUrl?: string;
  hasPhotos?: boolean;
}

export const reviewsStats = {
  averageRating: 5.0,
  totalReviews: 8,
  googleRating: 5.0,
  googlePlaceId: 'ChIJ2Uc2vRz60GYRzIgo3XXtRG8',
  googlePlaceUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJ2Uc2vRz60GYRzIgo3XXtRG8',
  googleWriteReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJ2Uc2vRz60GYRzIgo3XXtRG8',
};

export const reviewsList: ReviewItem[] = [
  {
    id: 'rev-google-1',
    author: 'Alkin Nese',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKMyNbsoutaMzvn0Rq4rhRfFjkb16TjJk-Jc758X6M0wrc72g=s120-c-rp-mo-ba12-br100',
    city: 'Mulhouse',
    rating: 5,
    date: 'Octobre 2026',
    project: 'Pose de carrelage haute qualité',
    comment: 'Travail exceptionnel de très haute qualité, un vrai pro !',
    verified: true,
    hasPhotos: true,
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xKc2FYTlJMV2hQTUhBek5sZHFObE5mWmtGV1NWRRAB!2m1!1s0x0:0x6f44ed75dd2888cc!3m1!1s2@1:CAIQACodChtycF9oOlJsaXNRLWhPMHAzNldqNlNfZkFWSVE%7C%7C',
  },
  {
    id: 'rev-google-2',
    author: 'nihat Alkin',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocItVmesuw6eT4-Zeb9-uuKNB106Eu_pQOVO1P3rA9mKeBf2mA=s120-c-rp-mo-br100',
    city: 'Mulhouse',
    rating: 5,
    date: 'Octobre 2026',
    project: 'Travaux de rénovation & finitions',
    comment:
      'Excellent carreleur, travail propre et soigné. Très professionnel, sérieux et ponctuel. Je recommande vivement !',
    verified: true,
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2s4MVRua3pSVFkzZVVkeFVUZzVYME5SYkZoQlFYYxAB!2m1!1s0x0:0x6f44ed75dd2888cc!3m1!1s2@1:CAIQACodChtycF9oOk81TnkzRTY3eUdxUTg5X0NRbFhBQXc%7C%7C',
  },
  {
    id: 'rev-google-3',
    author: 'Catherine Keller',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocI8ZRqRwVEb6AufDAliRxsmC8sA4QC2Odv7qZT-lsXJg6tmYg=s120-c-rp-mo-br100',
    city: 'Mulhouse',
    rating: 5,
    date: 'Septembre 2026',
    project: 'Faïence & mur de salle de bain',
    comment:
      'Pour un mur de salle de bain, travail professionnel, rapide, bien fait , efficace. Par une équipe sympathique. Satisfaite.',
    verified: true,
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21ORFduSkRRbEkwVjBseFdGQklRV2xJTWpOSlVHYxAB!2m1!1s0x0:0x6f44ed75dd2888cc!3m1!1s2@1:CAIQACodChtycF9oOmNDWnJDQlI0V0lxWFBIQWlIMjNJUGc%7C%7C',
  },
  {
    id: 'rev-google-4',
    author: 'christophe jung',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLVZMaqwGya2Hz6P2V-PfgeWcMrB608Ep2Dw7SsoLjGzlUX0w=s120-c-rp-mo-br100',
    city: 'Alsace',
    rating: 5,
    date: 'Avril 2026',
    project: 'Carrelage grand format 60x120',
    comment: 'Travail au top je recommande. Une pose parfaite pour du 60x120 😉',
    verified: true,
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2w5TVkwUndTWEphWVZsR05tc3RNbk5SUkhWUVduYxAB!2m1!1s0x0:0x6f44ed75dd2888cc!3m1!1s2@1:CAIQACodChtycF9oOl9MY0RwSXJaYVlGNmstMnNRRHVQWnc%7C%7C',
  },
  {
    id: 'rev-google-5',
    author: 'Francesca Bianchi',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWaUGWvPweV-wUyxwA6KVqijPszStjB9_58cHoh00h3UwlTM5BNkg=s120-c-rp-mo-ba12-br100',
    city: 'Mulhouse',
    rating: 5,
    date: 'Août 2026',
    project: 'Pose carrelage intérieur',
    comment: 'Très serviable, prix toujours et arrangeant, parfait ! Je le recommande vivement',
    verified: true,
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25aRVR6aFlPVVJzUTFCM01sTXdObTVUWDFWVGNXYxAB!2m1!1s0x0:0x6f44ed75dd2888cc!3m1!1s2@1:CAIQACodChtycF9oOnZETzhYOURsQ1B3MlMwNm5TX1VTcWc%7C%7C',
  },
  {
    id: 'rev-google-6',
    author: 'frd ysr',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocI8HL7z9teGUN3slPERr4Q2mkAxW-W7_6qY0HxivGx1Hg-73Q=s120-c-rp-mo-br100',
    city: 'Haut-Rhin',
    rating: 5,
    date: 'Mars 2026',
    project: 'Pose & rénovation',
    comment: 'Tres bien expérience professionnelle vous pouvez faire confiance merci MP carrelage',
    verified: true,
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT201aldrVkpkRmxDWDBNNVVYaE1TMjg0WW1sdFZIYxAB!2m1!1s0x0:0x6f44ed75dd2888cc!3m1!1s2@1:CAIQACodChtycF9oOm5jWkVJdFlCX0M5UXhMS284YmltVHc%7C%7C',
  },
  {
    id: 'rev-google-7',
    author: 'Halil Ichimaru',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXpC6HDB2WTQ8oiDDa6pD4wmppSjxSNo_HkBKB29wCBinEx9ieH=s120-c-rp-mo-br100',
    city: 'Mulhouse',
    rating: 5,
    date: 'Décembre 2025',
    project: 'Pose de carrelage',
    comment: 'Excellent carreleur .',
    verified: true,
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xKcFkxbHZXRlJET1U1dmMwNTNPRzExVVZReVVuYxAB!2m1!1s0x0:0x6f44ed75dd2888cc!3m1!1s2@1:CAIQACodChtycF9oOlJpY1lvWFRDOU5vc053OG11UVQyUnc%7C%7C',
  },
];
