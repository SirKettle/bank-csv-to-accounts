import { TAG } from './constants';

const inc = str => matches => matches.map(s => s.toLowerCase()).some(s => str.toLowerCase().includes(s));

export const getTag = datum => {
  try {

    if (inc(datum.summary)(['dividend'])) {
      return TAG.DIVIDEND;
    }
    if (inc(datum.summary)(['Subsistence'])) {
      return TAG.FOOD;
    }
    if (inc(datum.summary)(['Accountancy'])) {
      return TAG.ACCOUNTANT;
    }
    if (inc(datum.summary)(['Salary'])) {
      return TAG.SALARY;
    }
    if (inc(datum.summary)(['178580368', 'Hmrc Vat'])) {
      return TAG.VAT;
    }
    if (datum.amount > 0) {
      return TAG.PAID;
    }
    if (inc(datum.summary)(['Prime Video'])) {
      return TAG.CHOOSY_MOVIE_RESEARCH;
    }
    if (inc(datum.summary)(['Zurich Assurance'])) {
      return TAG.LIFE_INSURANCE;
    }
    if (inc(datum.summary)(['DD to Hiscox'])) {
      return TAG.BUSINESS_INSURANCE;
    }
    if (inc(datum.summary)(['DD to H3g'])) {
      return TAG.MOBILE;
    }
    if (inc(datum.summary)(['spotify'])) {
      return TAG.SPOTIFY;
    }
    if (inc(datum.summary)(['netflix'])) {
      return TAG.NETFLIX;
    }
    if (inc(datum.summary)(['github'])) {
      return TAG.GITHUB;
    }
    if (inc(datum.summary)(['microsoft'])) {
      return TAG.MICROSOFT;
    }
    if (inc(datum.summary)(['google'])) {
      return TAG.GOOGLE;
    }
    if (inc(datum.summary)(['Hlam Regular Savin'])) {
      return TAG.SIPP;
    }
    if (inc(datum.summary)(['jetbrains'])) {
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
  } catch (e) {
    console.log('datum', datum)
    return;
  }
};
