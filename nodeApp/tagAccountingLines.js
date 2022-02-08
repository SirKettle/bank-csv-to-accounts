import { CATEGORY, TAG } from './constants';
import { getTag } from './getTag';
import { tagConfig } from './config';

const fixPrecisionRounding = num => parseFloat(num.toFixed(2));

const oppAmount = amount => (amount < 0 ? Math.abs(amount) : -amount);

const getLineItem = ({ amount, category, date, summary, tag }) => ({
  date,
  summary: tagConfig[tag] && tagConfig[tag].hidden ? ' - ' : summary,
  category,
  amount: oppAmount(amount),
  vatClaim: tagConfig[tag] && tagConfig[tag].vatClaim ? fixPrecisionRounding(oppAmount(amount) / 6) : '',
});

const getTotalAmount = items => items.map(i => i.amount).reduce((tot, am) => fixPrecisionRounding((tot += am)), 0);

const convertToExcel = ({ amount, category, summary, vatClaim }) => `
${summary}\t\t\t${category}\t\t${amount}\t\t\t${vatClaim}`;

export const tagAccountingLines = data => {
  const lines = Object.keys(TAG)
    .filter(tag => tag !== TAG.PAID)
    .map(tag => data.filter(d => d.tag === tag))
    .filter(tagItems => tagItems.length > 0)
    .map(tagItems => {
      const tag = tagItems[0].tag;
      const tagInfo = tagConfig[tag];
      if (tagInfo.combineRecords) {
        return getLineItem({
          ...tagItems[0],
          summary: tagInfo.label || tag,
          amount: getTotalAmount(tagItems),
        });
      }
      return tagItems.map(getLineItem);
    })
    .flat()
    .map(convertToExcel);

  const anomalies = data
    .filter(d => !getTag(d))
    .map(getLineItem)
    .map(item => convertToExcel({ ...item, category: CATEGORY.SUNDRIES }));

  return lines.concat(anomalies).join('');
};

export const paidLines = data =>
  data
    .filter(d => d.tag === TAG.PAID)
    .map(({ amount, date, summary }) => `${date}\t${summary}\t\t${amount}`)
    .join('\n');
