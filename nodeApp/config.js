import { CATEGORY, TAG } from './constants';


export const tagConfig = {
  [TAG.DIVIDEND]: { category: CATEGORY.DIVIDENDS },
  [TAG.SALARY]: { category: CATEGORY.SALARY },
  [TAG.SIPP]: { category: CATEGORY.PENSION },
  [TAG.ACCOUNTANT]: { category: CATEGORY.ACCOUNTANCY, vatClaim: true },
  [TAG.BUSINESS_INSURANCE]: { category: CATEGORY.BUSINESS_INSURANCE },
  [TAG.LIFE_INSURANCE]: { category: CATEGORY.SUNDRIES },
  [TAG.TRAIN]: {
    category: CATEGORY.TRAVEL_SUBSISTENCE,
    combineRecords: true,
    label: 'Train tickets',
  },
  [TAG.FOOD]: {
    category: CATEGORY.TRAVEL_SUBSISTENCE,
    combineRecords: true,
    label: 'Food',
  },
  [TAG.MOBILE]: { category: CATEGORY.INTERNET_PHONE },
  [TAG.VAT]: { category: CATEGORY.VAT },
  [TAG.WEB_HOSTING]: {
    category: CATEGORY.WEBSITE_ADVERTISING,
    combineRecords: true,
    label: 'Web hosting',
  },
  [TAG.NETFLIX]: { category: CATEGORY.OTHER_COMPUTER_COSTS, hidden: true },
  [TAG.SPOTIFY]: { category: CATEGORY.OTHER_COMPUTER_COSTS, hidden: true },
  [TAG.GOOGLE]: { category: CATEGORY.WEBSITE_ADVERTISING },
  [TAG.MICROSOFT]: { category: CATEGORY.OTHER_COMPUTER_COSTS },
  [TAG.GITHUB]: { category: CATEGORY.WEBSITE_ADVERTISING },
  [TAG.JETBRAINS]: { category: CATEGORY.OTHER_COMPUTER_COSTS },
  [TAG.CHOOSY_MOVIE_RESEARCH]: {
    category: CATEGORY.OTHER_COMPUTER_COSTS,
    combineRecords: true,
    label: 'choosymovie.tv research',
  },
  [TAG.AMAZON]: {
    category: CATEGORY.COMPUTER_HARDWARE_OFFICE_EQUIPMENT,
    combineRecords: true,
    hidden: true,
    vatClaim: true,
  },
  [TAG.PAID]: { category: undefined },
};