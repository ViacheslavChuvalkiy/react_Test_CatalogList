import Repository from "../../repository";

export function isLoadingData(value) {
  return {type: "IS_LOADING_DATA", isLoadingData: value}
}
export function isError(value) {
  return {type: "IS_ERROR", value}
}
export function сardListLoaded(value) {
  return {type: "CARD_LIST_LOADED", cardList: value}
}
export function setFilterData(value) {
  return {type: "IS_FILTERED_DATA", filter: value}
}

export const isFilterData = (val) => async (dispatch) => {
  dispatch(setFilterData(val));
  dispatch(getCardListData(val));
};


export const getCardListData = (filter = '') => async (dispatch) => {
  dispatch(isLoadingData(true));
  const {value, error} = await Repository.APICardList.getCardList();
  if (error || !value) {
    dispatch(isError(true));
    dispatch(isLoadingData(false));
  }
  dispatch(сardListLoaded(filter !== '' && filter === undefined ? value : value.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))));
  dispatch(isLoadingData(false));
};
