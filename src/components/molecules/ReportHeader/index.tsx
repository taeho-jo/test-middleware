import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import Form from '../../atoms/Form';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import Select from '../../atoms/Select';
import { heading5_regular } from '../../../styles/FontStyles';
import AnnouncementBox from '../AnnouncementBox';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { useQueryClient } from 'react-query';
import { fetchReportDetail } from '../../../api/reportApi';
import { useRouter } from 'next/router';
import { updateFilterFail, updateFilterFlied, updateFilterValues } from '../../../store/reducers/reportReducer';
import BasicButton from '../../atoms/Button/BasicButton';
import IconButton from '../../atoms/Button/IconButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
import TutorialIndicator from '../../atoms/TutorialIndicator/TutorialIndicator';

const ReportHeader = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);

  const indicatorStatus = useSelector<ReducerType, any>(state => state.common.indicator);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id, isShare } = router.query;

  const dispatch = useDispatch();
  const reportData = useSelector<ReducerType, any>(state => state.report.data?.filterDataList);
  const filterValues = useSelector<ReducerType, any>(state => state.report.filter.filterValues);
  const filterFail = useSelector<ReducerType, any>(state => state.report.filter.filterFail);

  const [selected, setSelected] = useState({
    filterField: '',
    filterValues: '',
  });

  const [addConditionArr, setAddConditionArr] = useState([]);

  const conditionArr = [
    { value: 'gender', displayName: '??????' },
    { value: 'ageGrade', displayName: '??????' },
    { value: 'device', displayName: '?????? ??????' },
    { value: 'cell', displayName: '?????? ??????' },
  ];
  const conditionArr2 = [
    { value: 'gender', displayName: '??????' },
    { value: 'ageGrade', displayName: '??????' },
    { value: 'device', displayName: '?????? ??????' },
  ];

  const makeAddConditionArr = useCallback(() => {
    if (reportData) {
      const genderArr = reportData?.genderFilter.reduce(
        (acc, cur) =>
          acc.concat({
            value: cur.code,
            displayName: cur.name,
          }),
        [],
      );
      const ageGradeArr = reportData?.ageGradeFilter.reduce(
        (acc, cur) =>
          acc.concat({
            value: cur.code,
            displayName: cur.name,
          }),
        [],
      );
      const deviceArr = reportData?.deviceFilter.reduce(
        (acc, cur) =>
          acc.concat({
            value: cur.code,
            displayName: cur.name,
          }),
        [],
      );
      const cellArr = reportData?.cellFilter.reduce(
        (acc, cur) =>
          acc.concat({
            value: cur.code,
            code: cur.code,
            displayName: cur.name,
          }),
        [],
      );
      // const addConditionArr = [genderArr, ageGradeArr, deviceArr, cellArr];
      if (selected.filterField === 'gender') {
        setAddConditionArr(genderArr);
      }
      if (selected.filterField === 'ageGrade') {
        setAddConditionArr(ageGradeArr);
      }
      if (selected.filterField === 'device') {
        setAddConditionArr(deviceArr);
      }
      if (selected.filterField === 'cell') {
        setAddConditionArr(cellArr);
      }
      if (selected.filterField === '') {
        setAddConditionArr([]);
      }
    }
  }, [reportData, selected]);

  useEffect(() => {
    if (addConditionArr) {
      if (selected.filterField === 'cell') {
        const filed = addConditionArr[0]?.value;
        const value = addConditionArr[0]?.displayName;

        dispatch(updateFilterFlied(filed));
        dispatch(updateFilterValues(value));
        setSelected({
          ...selected,
          filterValues: value,
        });
      } else {
        dispatch(updateFilterValues(addConditionArr[0]?.value));
        setSelected({
          ...selected,
          filterValues: addConditionArr[0]?.value,
        });
      }
    }
  }, [addConditionArr]);

  const onClickFlied = useCallback(
    (value, label) => {
      setSelected({
        filterValues: '',
        filterField: value,
      });
      dispatch(updateFilterFlied(value));
    },
    [selected],
  );

  const onClickValue = useCallback(
    (value, label, displayName) => {
      if (selected.filterField === 'cell') {
        setSelected({
          ...selected,
          [label]: displayName,
        });
        dispatch(updateFilterValues(displayName));
        dispatch(updateFilterFlied(value));
      } else {
        setSelected({
          ...selected,
          [label]: value,
        });
        dispatch(updateFilterValues(value));
      }
    },
    [selected],
  );
  const resetFilter = useCallback(() => {
    dispatch(updateFilterValues(null));
    dispatch(updateFilterFlied(null));
    dispatch(updateFilterFail(null));
    setSelected({
      filterField: '',
      filterValues: '',
    });
    // queryClient.invalidateQueries(['fetchReportDetail', id]);
  }, []);

  useEffect(() => {
    makeAddConditionArr();
  }, [selected.filterField]);

  return (
    <div css={headerStyle}>
      <div
        css={css`
          position: relative;
        `}
      >
        {!isShare && indicatorStatus?.isFilter === 'N' && (
          <TutorialIndicator
            share={isShare}
            name={'isFilter'}
            left={'-10px'}
            top={'-12px'}
            modalTitle={'??????'}
            modalSubTitle={`????????? ???????????? '????????? ??????' ?????? ???????????? ??????\n?????? ??? ??? ?????????.\n?????? ????????? ????????? ???????????? ?????? ????????? ????????????.`}
            modalTop={'40px'}
            modalLeft={'-10px'}
          />
        )}
        {isShare && indicatorStatus?.isFilter === 'N' && (
          <TutorialIndicator
            share={isShare}
            name={'isFilter'}
            left={'-10px'}
            top={'-12px'}
            modalTitle={'??????'}
            modalSubTitle={`????????? ???????????? '????????? ??????' ?????? ???????????? ??????\n?????? ??? ??? ?????????.\n?????? ????????? ????????? ???????????? ?????? ????????? ????????????.`}
            modalTop={'40px'}
            modalLeft={'-10px'}
          />
        )}

        <span css={[heading5_regular, { marginRight: '12px' }]}>??????</span>
      </div>

      <IconTextButton
        onClick={resetFilter}
        disabled={filterValues || filterFail === 'on' ? false : true}
        style={{ marginRight: '8px' }}
        textStyle={'custom'}
        name={'ACTION_RESET'}
        text={'?????? ?????????'}
        iconPosition={'left'}
        css={{ padding: '6px 16px 6px 8px' }}
      />
      {/*<BasicButton onClick={resetFilter} theme={'dark'} text={'?????????'} style={{ width: 'auto', padding: '5px 30px', marginLeft: '10px' }} />*/}
      <div css={{ width: '264px', marginRight: '12px' }}>
        <Select
          options={reportData?.cellFilter.length === 0 ? conditionArr2 : conditionArr}
          placeholder={'?????? ?????????'}
          padding={'4px 16px'}
          fontSize={heading5_regular}
          selectBoxHeight={'auto'}
          selectBoxMargin={'0'}
          selected={selected}
          setSelected={setSelected}
          name="filterField"
          onClick={onClickFlied}
          customOption={{ height: '0px' }}
        />
      </div>
      <div css={{ width: '264px', marginRight: '16px' }}>
        <Select
          options={addConditionArr}
          placeholder={'????????? ??????????????????'}
          padding={'4px 16px'}
          fontSize={heading5_regular}
          selectBoxHeight={'auto'}
          selectBoxMargin={'0'}
          selected={selected}
          setSelected={setSelected}
          name="filterValues"
          onClick={onClickValue}
        />
      </div>
      <AnnouncementBox content={'????????? ????????????, ????????? ???????????? ???????????? ??????????????????!'} />
    </div>
  );
};

export default ReportHeader;

const headerStyle = css`
  height: 72px;
  width: calc(100vw - 296px);
  border-bottom: 1px solid #dcdcdc;
  background: white;
  padding: 17px 24px;
  display: flex;
  align-items: center;
  min-width: 1440px;
  //max-width: 1684px;
  // ??????
  position: fixed;
  z-index: 501;
`;
export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
