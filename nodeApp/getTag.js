import { TAG } from './constants';

const inc = str => matches => matches.map(s => s.toLowerCase()).some(s => str.toLowerCase().includes(s));

export const getTag = datum => {
  if (datum.ref.toLowerCase().includes('dividend')) {
    return TAG.DIVIDEND;
  }
  if (datum.ref.includes('Subsistence')) {
    return TAG.FOOD;
  }
  if (datum.ref.includes('Accountancy')) {
    return TAG.ACCOUNTANT;
  }
  if (datum.ref.includes('Salary')) {
    return TAG.SALARY;
  }
  if (inc(datum.summary)(['178580368', 'Hmrc Vat'])) {
    return TAG.VAT;
  }
  if (datum.amount > 0) {
    return TAG.PAID;
  }
  if (datum.summary.includes('Prime Video')) {
    return TAG.CHOOSY_MOVIE_RESEARCH;
  }
  if (datum.summary.includes('Zurich Assurance')) {
    return TAG.LIFE_INSURANCE;
  }
  if (datum.summary.includes('DD to Hiscox')) {
    return TAG.BUSINESS_INSURANCE;
  }
  if (datum.summary.includes('DD to H3g')) {
    return TAG.MOBILE;
  }
  if (datum.summary.toLowerCase().includes('spotify')) {
    return TAG.SPOTIFY;
  }
  if (datum.summary.toLowerCase().includes('netflix')) {
    return TAG.NETFLIX;
  }
  if (datum.summary.toLowerCase().includes('github')) {
    return TAG.GITHUB;
  }
  if (datum.summary.toLowerCase().includes('microsoft')) {
    return TAG.MICROSOFT;
  }
  if (datum.summary.toLowerCase().includes('google')) {
    return TAG.GOOGLE;
  }
  if (datum.summary.includes('Hlam Regular Savin')) {
    return TAG.SIPP;
  }
  if (datum.summary.includes('jetbrains')) {
    return TAG.JETBRAINS;
  }
  if (inc(datum.summary)(['Sales Lul Ticket Machine', 'Sales London Overground', 'tsgn'])) {
    return TAG.TRAIN;
  }
  if (inc(datum.summary)(['aws emea', 'web hosting'])) {
    return TAG.WEB_HOSTING;
  }
  if (inc(datum.summary)(['Amazon', 'Amzn'])) {
    return TAG.AMAZON;
  }
  if (inc(datum.summary)(['cafe', 'rest', 'canteen', 'bar', 'grill'])) {
    return TAG.FOOD;
  }
  return;
};
