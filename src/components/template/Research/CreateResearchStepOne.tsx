import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import Form from '../../atoms/Form';
import Select from '../../atoms/Select';
import { useForm } from 'react-hook-form';
import Input from '../../atoms/Input';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
// import { getProductList } from '../../../store/reducers/teamReducer';
import { updateResearchBasicInfo, updateResearchModifyInfo } from '../../../store/reducers/researchCreateReducer';
import { isShow } from '../../../store/reducers/modalReducer';
import { getProductList } from '../../../store/reducers/teamReducer';
import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';

interface PropsType {
  detailInfo?: any;
  setGuideStatus?: (status) => void;
  getResearchMethod?: (value) => void;
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  handleSubmit: any;
  reset: any;
  errors: any;
}
const CreateResearchStepOne = ({ detailInfo, setGuideStatus, getResearchMethod, register, handleSubmit, reset, errors }: PropsType) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pageId = router.query.id;
  const methodsType = useSelector<ReducerType, any>(state => state.common.commonCode.ResearchType);
  const productList = useSelector<ReducerType, any>(state => state.team.teamProductList.list);
  const teamList = useSelector<ReducerType, any>(state => state.team.teamList);

  // 추천 결과
  const recommendationResult = useSelector<ReducerType, any>(state => state.researchRecommendation.recommendationResult);
  const cookies = new Cookies();

  // hook saasaform
  const { watch, setValue } = useForm({});

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
        if (pageId === 'create') {
          dispatch(updateResearchBasicInfo({ name: name, value: String(value) }));
        } else {
          dispatch(updateResearchModifyInfo({ name: name, value: String(value) }));
        }
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
      setSelectTeamList([...newArr, { value: 'add', displayName: '+ 새로운 팀을 추가해보세요', label: '+ 새로운 팀을 추가해보세요' }]);
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
      setSelectProductList([
        ...newArr,
        { value: 'add', displayName: '+ 새로운 프로덕트를 추가해보세요', label: '+ 새로운 프로덕트를 추가해보세요', teamSeq: null },
      ]);
    }
  }, [productList]);

  useEffect(() => {
    if (selected?.team && selected?.team !== 'add') {
      const teamSeq = selected?.team;
      dispatch(getProductList({ teamSeq: String(teamSeq) }));
    }
  }, [selected]);

  useEffect(() => {
    // console.log(cookies.get('recommendResultSeq'), cookies.get('recommendResearchType'));
    const seq = cookies.get('recommendResultSeq');
    const type = cookies.get('recommendResearchType');
    if (seq && type) {
      reset({
        method: type,
      });
      setSelected({
        ...selected,
        method: type,
      });
      dispatch(updateResearchBasicInfo({ name: 'researchType', value: type }));
    }
  }, []);

  // 상세 접속 시 기본값 세팅
  useEffect(() => {
    if (detailInfo) {
      reset({
        researchName: detailInfo?.researchNm,
        method: detailInfo?.researchType,
        team: detailInfo?.teamSeq,
        product: detailInfo?.productSeq,
      });
      setSelected({
        method: detailInfo?.researchType,
        team: detailInfo?.teamSeq,
        product: detailInfo?.productSeq,
      });
      dispatch(updateResearchModifyInfo({ name: 'researchNm', value: detailInfo?.researchNm }));
      dispatch(updateResearchModifyInfo({ name: 'researchSeq', value: String(detailInfo?.researchSeq) }));
      dispatch(updateResearchModifyInfo({ name: 'researchType', value: detailInfo?.researchType }));
      dispatch(updateResearchModifyInfo({ name: 'teamSeq', value: detailInfo?.teamSeq }));
      dispatch(updateResearchModifyInfo({ name: 'productSeq', value: detailInfo?.productSeq }));
      dispatch(updateResearchModifyInfo({ name: 'statusType', value: detailInfo?.statusType }));
    }
  }, [detailInfo]);

  return (
    <FlexBox width={'100%'} height={'500px'} style={selectContainer}>
      <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
        <Input
          title={'이번 리서치를 구분할 이름을 입력하세요'}
          register={register}
          label={'researchName'}
          errors={errors}
          errorMsg={'필수 항목입니다.'}
          placeholder={'예시) OOO 서비스 사용성 테스트'}
          // style={{ marginBottom: '16px' }}
          onFocus={() => setGuideStatus('researchName')}
          onBlur={() => setGuideStatus('inactive')}
          registerOptions={{
            required: true,
          }}
        />
        <Select
          getResearchMethod={getResearchMethod}
          title={'어떤 리서치를 수행하실 건가요?'}
          placeholder={'리서치 종류 선택'}
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
          title={'어떤 팀에서 수행하는 리서치인가요?'}
          placeholder={'팀을 선택해주세요'}
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
          title={'이번 리서치 대상은 어떤 프로덕트인가요?'}
          placeholder={'프로덕트를 선택해주세요'}
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
