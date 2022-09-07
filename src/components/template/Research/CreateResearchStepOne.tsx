import React, { Fragment } from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import { body3_bold, heading1_bold } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import { ResearchHeader } from '../../molecules/Research';
import Form from '../../atoms/Form';
import Select from '../../atoms/Select';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import Input from '../../atoms/Input';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';

const CreateResearchStepOne = () => {
  const methodsType = useSelector<ReducerType, any>(state => state.common.commonCode.moduleType);

  console.log(methodsType);

  // hook saasaform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);
  return (
    <div css={mainContainer}>
      <div css={leftContainer}>
        <ResearchHeader title={'리서치 생성'} />
        <FlexBox width={'100%'} height={'500px'} style={selectContainer}>
          <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
            <Input
              title={'리서치 명'}
              register={register}
              label={'userId'}
              errors={errors}
              errorMsg={'필수 항목입니다.'}
              placeholder={'리서치 명을 입력해주세요.'}
              style={{ marginBottom: '16px' }}
              registerOptions={{
                required: true,
                // onChange: e => updateLoginField('userId', e.target.value),
                pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              }}
            />
            {/*<Select*/}
            {/*  title={'맡고 계신 직무 (선택)'}*/}
            {/*  options={commonCode?.CpPositionType}*/}
            {/*  // value={selected.funnelsCd}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*  name="cpPosition"*/}
            {/*  onClick={onClickValue}*/}
            {/*/>*/}
          </Form>
        </FlexBox>
      </div>
      <div css={rightContainer}>
        <ResearchHeader isStepBar={false} title={'생성 가이드'} />
        <FlexBox width={'100%'} height={'500px'} style={selectContainer}>
          asdfas
        </FlexBox>
      </div>
    </div>
  );
};

export default CreateResearchStepOne;

const mainContainer = css`
  background: white;
  width: 1262px;
  max-width: 1262px;
  min-width: 1262px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const leftContainer = css`
  width: 730px;
  //height: 500px;
  //background: mediumpurple;
`;
const rightContainer = css`
  width: 500px;
  //height: 500px;
`;
// ==============================
const selectContainer = css`
  border: 1px solid #dcdcdc;
  border-radius: 16px;
  margin-top: 25px;
  padding: 56px;
`;
