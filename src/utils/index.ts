import moment from 'moment';

export const convertDate = (date: Date) => {
  return moment(date).format('ll');
};
