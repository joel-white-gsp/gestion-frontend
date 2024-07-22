import store from 'epics/store'
import moment from "moment";
import { uiVarList } from 'common/uiVar'

//USD To Local Currency
export const asPrice = (priceNumber) => {
  const state = store.getState()

  if (priceNumber == null) return "";
  if (isNaN(priceNumber)) return priceNumber;
  priceNumber = priceNumber*state.common.currency.rate;
  priceNumber = (priceNumber * 1).toFixed(2);
  priceNumber = priceNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
  priceNumber = (state.common.currency.place==1?state.common.currency.symbol:'')+
    priceNumber+
    (state.common.currency.place==2?state.common.currency.symbol:'');
  return priceNumber
};

//Local Currency
export const asLocalPrice = (priceNumber) => {
  const state = store.getState()

  if (priceNumber == null) return "";
  if (isNaN(priceNumber)) return priceNumber;
  priceNumber = (priceNumber * 1).toFixed(2);
  priceNumber = priceNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
  priceNumber = (state.common.currency.place==1?state.common.currency.symbol:'')+
    priceNumber+
    (state.common.currency.place==2?state.common.currency.symbol:'')
  return priceNumber
};

//USD Price
export const asUsdPrice = (priceNumber) => {
  if (priceNumber == null) return "";
  if (isNaN(priceNumber)) return priceNumber;
  priceNumber = (priceNumber * 1).toFixed(2);
  priceNumber = priceNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
  priceNumber = '$'+
    priceNumber
  return priceNumber
};

export const asCurrencyPrice = (priceNumber, currencyCode) => {
  if (priceNumber == null) return "";
  if (isNaN(priceNumber)) return priceNumber;
  priceNumber = (priceNumber * 1).toFixed(2);
  priceNumber = priceNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (uiVarList("currency.list").filter((el) => el.code === currencyCode).length > 0) {
    const selectedCurrency = uiVarList("currency.list").filter((el) => el.code === currencyCode)[0]
    if (selectedCurrency.place*1 === 1) {
      priceNumber = selectedCurrency.symbol + priceNumber
    } else {
      priceNumber = priceNumber + selectedCurrency.symbol
    }
  } else {
    priceNumber = "$" + priceNumber
  }
  
  return priceNumber
}

export const asNumber = (number) => {
  if (number == null) return "";
  if (isNaN(number)) return number;
  return (number * 1).toLocaleString();
};

export const asPercent = (number) => {
  if (number == null) return "";
  if (isNaN(number)) return number;
  return (number * 100).toFixed(2) + "%";
};

export const asDate = (date) => {
  if (date == null) return "";
  return moment(date).format("MM/DD/YY");
};

export const asDateTime = (x) => {
  if (!x) return '';
  var date = moment(x);
  if (!date.isValid()) return x;

  if (x.includes("T")) {
    let d = new Date(x).toLocaleString();
    let splittedDate = d.split(":");
    let formattedDate =
      splittedDate[0] + ":" + splittedDate[1] + splittedDate[2].slice(2);
    return formattedDate.replace(",", "");
  } else {
    let d_ = x.replace(" ", "T") + ".000000Z";
    let d = new Date(d_).toLocaleString();
    let splittedDate = d.split(":");
    let formattedDate =
      splittedDate[0] + ":" + splittedDate[1] + splittedDate[2].slice(2);
    return formattedDate.replace(",", "");
  }
};

export const asVolume = (number) => {
  if (isNaN(number)) return ''
  return (Math.floor(number*1)+'').replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
