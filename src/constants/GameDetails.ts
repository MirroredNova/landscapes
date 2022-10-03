import ANSWERS from './AnswerKey';

const DATE_TODAY = new Date().toLocaleDateString(undefined, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).replaceAll('/', '-');

const COUNTRY = ((ANSWERS as never)[DATE_TODAY.toString()] as string).toUpperCase();
const IMG_PATH = `../../images/${DATE_TODAY}/${COUNTRY}.jpg`;

export { COUNTRY, IMG_PATH, DATE_TODAY };
