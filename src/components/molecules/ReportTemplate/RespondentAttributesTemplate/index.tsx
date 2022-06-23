import React, { Fragment, useCallback, useEffect, useState } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { colors } from '../../../../styles/Common.styles';
import { caption1_bold, heading3_bold, heading4_bold, heading5_bold, heading5_medium } from '../../../../styles/FontStyles';
import { BasicPieChart } from '../../../atoms/Chart';
import { css } from '@emotion/react';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import FixImage from '/public/assets/png/chartFixAlert.png';

export interface DataListType {
  name: string;
  value: string;
  count?: string;
}
export interface ChangeDataListType {
  name: string;
  value: string | number;
  count?: string | number;
}

interface PropsType {
  // dataList: {
  //   ageGradeInfoList: DataListType[];
  //   cellInfoList: DataListType[];
  //   deviceInfoList: DataListType[];
  //   genderInfoList: DataListType[];
  // };
  dataList: any;
}

const RespondentAttributesTemplate = ({ dataList }: PropsType) => {
  console.log(dataList, 'DATALIST');
  console.log(dataList, 'DATALIST');
  const [genderInfoList, setGenderInfoList] = useState<ChangeDataListType[] | null>(null);
  const [ageGradeInfoList, setAgeGradeInfoList] = useState<ChangeDataListType[] | null>(null);
  const [deviceInfoList, setDeviceInfoList] = useState<ChangeDataListType[] | null>(null);
  const [cellInfoList, setCellInfoList] = useState<ChangeDataListType[] | null>(null);

  const [labelStatus, setLabelStatus] = useState({
    gender: false,
    ageGrade: false,
    device: false,
  });

  const handleMouseUp = useCallback(
    (name, index) => {
      // setLabelStatus({
      //   ...labelStatus,
      //   [name]: !labelStatus[name],
      // });

      setLabelStatus({
        gender: false,
        ageGrade: false,
        device: false,
        [name]: !labelStatus[name],
      });
    },
    [labelStatus],
  );

  useEffect(() => {
    if (dataList) {
      const { genderInfoList, ageGradeInfoList, deviceInfoList, cellInfoList } = dataList;
      const newGenderInfoList = genderInfoList.reduce(
        (acc, cur) =>
          acc.concat({
            name: cur.name,
            value: parseInt(cur.value),
            count: cur.count,
          }),
        [],
      );
      const newAgeGradeInfoList = ageGradeInfoList.reduce(
        (acc, cur, index) =>
          acc.concat({
            name: index === ageGradeInfoList.length - 1 ? `${parseInt(cur.name)}세 이상` : `${parseInt(cur.name)}-${parseInt(cur.name) + 9}세`,
            value: parseInt(cur.value),
            count: cur.count,
          }),
        [],
      );
      const newDeviceInfoList = deviceInfoList.reduce(
        (acc, cur) =>
          acc.concat({
            name: cur.name,
            value: parseInt(cur.value),
          }),
        [],
      );

      setGenderInfoList(newGenderInfoList);
      setAgeGradeInfoList(newAgeGradeInfoList);
      setDeviceInfoList(newDeviceInfoList);
      setCellInfoList(cellInfoList);
    }
  }, [dataList]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    // setFocus,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);
  return (
    <>
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox justify={'flex-start'} align={'center'}>
          <span css={[heading3_bold, { marginRight: '32px' }]}>응답자 특성</span>
          <CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />
        </FlexBox>
        <FlexBox justify={'flex-end'}>
          <IconTextButton style={{ marginRight: '8px' }} textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'원본 데이터 확인하기'} />
          <IconTextButton textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'리서치 코멘트 확인하기'} />
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <img css={fixImage} src={FixImage.src} alt="'FixImage" />
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>기본 정보</div>
          </div>
          <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox direction={'column'} overflow={'unset'}>
              <span css={[heading5_bold, { textAlign: 'center' }]}>성별</span>
              <BasicPieChart dataList={genderInfoList} name={'gender'} labelStatus={labelStatus.gender} handleMouseUp={handleMouseUp} />
            </FlexBox>
            <FlexBox direction={'column'} overflow={'unset'}>
              <span css={[heading5_bold, { textAlign: 'center' }]}>연령대</span>
              <BasicPieChart dataList={ageGradeInfoList} name={'ageGrade'} labelStatus={labelStatus.ageGrade} handleMouseUp={handleMouseUp} />
            </FlexBox>
            <FlexBox direction={'column'} overflow={'unset'}>
              <span css={[heading5_bold, { textAlign: 'center' }]}>기기</span>
              <BasicPieChart dataList={deviceInfoList} name={'device'} labelStatus={labelStatus.device} handleMouseUp={handleMouseUp} />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>추가 조건</div>
          </div>
          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle2}>
            <FlexBox justify={'space-between'} align={'center'} style={[tableStyle, { background: '#f7f7f7' }]}>
              <div css={[caption1_bold, { height: 'auto', flex: 4, borderRight: '1px solid #dcdcdc', padding: '8px 16px' }]}>조건</div>
              <div css={[caption1_bold, { height: 'auto', flex: 1, padding: '8px 16px' }]}>응답자 규모</div>
            </FlexBox>
            {cellInfoList?.map((el, index) => {
              return (
                <Fragment key={index}>
                  <FlexBox justify={'space-between'} align={'center'} style={[index === cellInfoList.length - 1 ? tableStyle2 : tableStyle]}>
                    <div css={[heading5_medium, { height: 'auto', flex: 4, borderRight: '1px solid #dcdcdc', padding: '8px 16px' }]}>{el.name}</div>
                    <div css={[heading5_medium, { height: 'auto', flex: 1, padding: '8px 16px' }]}>{el.value}명</div>
                  </FlexBox>
                </Fragment>
              );
            })}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default RespondentAttributesTemplate;
const headerBosStyle = css`
  height: 64px;
  width: 100%;
  padding: 24px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  position: sticky;
  top: 0;
  z-index: 5;
`;
const graphBosStyle = css`
  width: 100%;
  position: relative;
`;
const fixImage = css`
  width: 278px;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
`;
const graphAreaStyle = css`
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  min-width: 900px;
  max-width: 900px;
  height: auto;
  padding-top: 40px;
`;
const graphContainerStyle = css`
  padding: 36px 80px 80px;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
`;
const graphContainerStyle2 = css`
  padding: 36px 80px 80px;
  width: 100%;
  //border-bottom: 1px solid #dcdcdc;
`;
const tableStyle = css`
  border-top: 1px solid #dcdcdc;
`;
const tableStyle2 = css`
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
`;
