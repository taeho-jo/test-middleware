import React from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import { heading3_bold } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import Form from '../../atoms/Form';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import TextArea from '../../atoms/TextArea';

interface PropsType {
  detailInfo: any;
  getResearchMethod?: (value) => void;
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  // handleSubmit: any;
  // reset: any;
  // watch: any;
  // errors: any;
}
const CreateResearchStepFive = ({ detailInfo, getResearchMethod, register }: PropsType) => {
  const methodsType = useSelector<ReducerType, any>(state => state.common.commonCode.ResearchType);

  // hook saasaform
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({});

  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);
  return (
    <FlexBox align={'flex-start'} width={'100%'} height={'500px'} style={[selectContainer, { overflow: 'hidden' }]}>
      <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ boxSizing: 'border-box' }}>
        <div
          css={css`
            margin-bottom: 50px;
          `}
        >
          <TextArea
            title={'Diby 매니저가 추가로 알아야할 사항을 입력해주세요. (선택)'}
            register={register}
            label={`additional`}
            errors={errors}
            defaultValue={detailInfo?.additionalInfo?.[0]?.additional ? detailInfo?.additionalInfo?.[0]?.additional : ''}
            errorMsg={'텍스트를 입력해주세요.'}
            placeholder={'원하시는 리서치 시작일자, 리서치 배경 등등'}
            registerOptions={{
              required: true,
            }}
          />
        </div>
      </Form>
    </FlexBox>
  );
};

export default CreateResearchStepFive;

// ==============================
const selectContainer = css`
  border: 1px solid #dcdcdc;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: 25px;
  padding: 56px;
  position: relative;
  overflow-y: scroll;
`;
const bottomAddBtnContainer = css`
  width: 100%;
  height: 56px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: ${colors.grey._3c};
  //position: absolute;
  //bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const bottomAddBtn = [
  heading3_bold,
  css`
    color: white;
  `,
];
