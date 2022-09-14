import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import Form from '../../atoms/Form';
import Select from '../../atoms/Select';
import { useForm } from 'react-hook-form';
import Input from '../../atoms/Input';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { getProductList } from '../../../store/reducers/teamReducer';
import { updateResearchBasicInfo } from '../../../store/reducers/researchCreateReducer';
import { isShow } from '../../../store/reducers/modalReducer';

interface PropsType {
  detailInfo?: any;
  setGuideStatus?: (status) => void;
  getResearchMethod?: (value) => void;
}
const CreateResearchStepOne = ({ detailInfo, setGuideStatus, getResearchMethod }: PropsType) => {
  const dispatch = useDispatch();
  const methodsType = useSelector<ReducerType, any>(state => state.common.commonCode.ResearchType);
  const productList = useSelector<ReducerType, any>(state => state.team.teamProductList.list);
  const teamList = useSelector<ReducerType, any>(state => state.team.teamList);

  // hook saasaform
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({});

  const [selected, setSelected] = useState<any>({
    method: '',
    team: '',
    product: '',
  });
  const [selectTeamList, setSelectTeamList] = useState<{ value: any; label: string; displayName: string }[]>([]);
  const [selectProductList, setSelectProductList] = useState<{ value: any; label: string; displayName: string; teamSeq: number | null }[]>([]);

  const onClickValue = useCallback(
    (value, label) => {
      if (label === 'team' && value === 'add') {
        dispatch(isShow({ isShow: true, type: 'createTeam' }));
      } else if (label === 'product' && value === 'add') {
        dispatch(isShow({ isShow: true, type: 'createTeamProduct' }));
      } else {
        setSelected({
          ...selected,
          [label]: value,
        });
        const name = label === 'method' ? 'researchType' : label === 'team' ? 'teamSeq' : 'productSeq';
        dispatch(updateResearchBasicInfo({ name: name, value: String(value) }));
      }
    },
    [selected],
  );

  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);

  useEffect(() => {
    if (teamList) {
      const newArr = teamList?.reduce(
        (acc, cur) =>
          acc.concat({
            value: cur.teamSeq,
            displayName: cur.teamNm,
            label: cur.teamNm,
          }),
        [],
      );
      setSelectTeamList([...newArr, { value: 'add', displayName: '+ 새로 만들기', label: '+ 새로 만들기' }]);
    }
  }, [teamList]);

  useEffect(() => {
    if (productList) {
      const newArr = productList?.reduce(
        (acc, cur) =>
          acc.concat({
            value: cur.productSeq,
            displayName: cur.productNm,
            label: cur.productNm,
            teamSeq: cur.teamSeq,
          }),
        [],
      );
      setSelectProductList([...newArr, { value: 'add', displayName: '+ 새로 만들기', label: '+ 새로 만들기', teamSeq: null }]);
    }
  }, [productList]);

  useEffect(() => {
    dispatch(updateResearchBasicInfo({ name: 'researchNm', value: watch('researchName') }));
  }, [watch('researchName')]);

  useEffect(() => {
    if (selected?.team && selected?.team !== 'add') {
      const teamSeq = selected?.team;
      dispatch(getProductList({ teamSeq: teamSeq }));
    }
  }, [selected]);

  useEffect(() => {
    if (detailInfo) {
      reset({
        researchName: detailInfo?.researchNm,
        method: detailInfo?.researchType,
        team: '6',
        product: '1',
      });
      setSelected({
        method: detailInfo?.researchType,
        team: 6,
        product: 1,
      });
      dispatch(updateResearchBasicInfo({ name: 'researchNm', value: detailInfo?.researchNm }));
      dispatch(updateResearchBasicInfo({ name: 'researchType', value: detailInfo?.researchType }));
      dispatch(updateResearchBasicInfo({ name: 'teamSeq', value: '6' }));
      dispatch(updateResearchBasicInfo({ name: 'productSeq', value: '1' }));
    }
  }, [detailInfo]);

  return (
    <FlexBox width={'100%'} height={'500px'} style={selectContainer}>
      <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
        <Input
          title={'리서치 명'}
          register={register}
          label={'researchName'}
          errors={errors}
          errorMsg={'필수 항목입니다.'}
          placeholder={'리서치 명을 입력해주세요.'}
          // style={{ marginBottom: '16px' }}
          onFocus={() => setGuideStatus('researchName')}
          onBlur={() => setGuideStatus('inactive')}
          registerOptions={{
            required: true,
          }}
        />
        <Select
          getResearchMethod={getResearchMethod}
          title={'리서치 방법'}
          options={methodsType}
          value={selected.method}
          selected={selected}
          setSelected={setSelected}
          name="method"
          onClick={onClickValue}
          registerOptions={{
            required: true,
          }}
        />
        <Select
          getResearchMethod={getResearchMethod}
          title={'팀'}
          options={selectTeamList}
          value={selected.team}
          selected={selected}
          setSelected={setSelected}
          name="team"
          onClick={onClickValue}
          registerOptions={{
            required: true,
          }}
        />
        <Select
          getResearchMethod={getResearchMethod}
          title={'프로덕트'}
          options={selectProductList}
          value={selected.product}
          selected={selected}
          setSelected={setSelected}
          name="product"
          onClick={onClickValue}
          registerOptions={{
            required: true,
          }}
        />
      </Form>
    </FlexBox>
  );
};

export default CreateResearchStepOne;

// ==============================
const selectContainer = css`
  border: 1px solid #dcdcdc;
  border-radius: 16px;
  margin-top: 25px;
  padding: 56px;
`;
