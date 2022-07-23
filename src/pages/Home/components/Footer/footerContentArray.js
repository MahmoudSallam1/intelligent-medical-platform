import * as ROUTES from "../../../../constants/routes";

export const footerContentArray = [
  {
    id: 1,
    title: "Solutions",
    description: [
      { page: "EHR", to: ROUTES.EHR },
      { page: "EHR Features", to: ROUTES.EHR_FEATURES },
      { page: "Practice Management ", to: ROUTES.PRACTICE_MANAGEMENT },
      { page: "Dictation", to: ROUTES.DICTATION },
      { page: "Scan Documents", to: ROUTES.SCAN_DOCUMENTS },
      { page: "Analytics", to: ROUTES.ANALYTICS },
      { page: "Mobile EHR", to: ROUTES.MOBILE_EHR },
      { page: "Security Policy", to: ROUTES.SECURITY_POLICY },
    ],
  },
  {
    id: 2,
    title: "Products",
    description: [
      { page: "Analytics ", to: ROUTES.ANALYTICS },
      { page: "Mobile EHR", to: ROUTES.MOBILE_EHR },
    ],
  },
  {
    id: 3,
    title: "About",
    description: [
      { page: "Contact Us", to: ROUTES.CONTACT_US },
      { page: "Why US", to: ROUTES.WHY_US },
      { page: "Company", to: ROUTES.COMPANY },
      { page: "Team", to: ROUTES.TEAM },
    ],
  },
  {
    id: 4,
    title: "Resources",
    description: [
      { page: "FAQs", to: ROUTES.FAQS },
      { page: "Developer API & SDK", to: ROUTES.DEVELOPER_API_SDK },
    ],
  },
  {
    id: 5,
    title: "Support",
    description: [
      { page: "Contact Support", to: ROUTES.CONTACT_SUPPORT },
      { page: "Terms of Service", to: ROUTES.TERMS_OF_SERVICES },
    ],
  },
];
