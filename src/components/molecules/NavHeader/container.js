import {React,useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import NavHeader from "./component";
import {isFilterData} from '../../../store/actions/getCardList';

const SearchContainer = () => {

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.cardListReducer.filter);
  const textInput = useRef(null);

  const handlerFilterData = () => {
    if(textInput.current.value !== ''){
      dispatch(isFilterData(textInput.current.value));
    }
  };

  return <NavHeader
    filter = {filter}
    textInput = {textInput}
    handlerFilterData={handlerFilterData}
  />;
};
export const container = SearchContainer;