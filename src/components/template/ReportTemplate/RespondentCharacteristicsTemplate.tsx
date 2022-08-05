import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { RespondentCharacteristicsListType } from '../../../api/reportApi/types';
import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { caption1_bold, heading4_bold, heading5_bold, heading5_medium } from '../../../styles/FontStyles';
import { BasicPieChart } from '../../atoms/Chart';
import { ChangeDataListType } from '../../molecules/ReportTemplate/RespondentAttributesTemplate';

interface PropsType {
  dataList?: RespondentCharacteristicsListType;
}
const RespondentCharacteristicsTemplate = ({ dataList }: PropsType) => {
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
    (name, index, e) => {
      e.stopPropagation();
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
            value: cur.value,
            count: cur.count,
          }),
        [],
      );
      const newAgeGradeInfoList = ageGradeInfoList.reduce(
        (acc, cur, index) =>
          acc.concat({
            name: index === ageGradeInfoList.length - 1 ? `${parseInt(cur.name)}세 이상` : `${parseInt(cur.name)}-${parseInt(cur.name) + 9}세`,
            value: cur.value,
            count: cur.count,
          }),
        [],
      );
      const newDeviceInfoList = deviceInfoList.reduce(
        (acc, cur) =>
          acc.concat({
            name: cur.name,
            value: cur.value,
            count: cur.count,
          }),
        [],
      );

      setGenderInfoList(newGenderInfoList);
      setAgeGradeInfoList(newAgeGradeInfoList);
      setDeviceInfoList(newDeviceInfoList);
      setCellInfoList(cellInfoList);
    }
  }, [dataList]);
  return (
    <>
      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>기본 정보</div>
          </div>
          <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox direction={'column'} overflow={'unset'}>
              <span css={[heading5_bold, { textAlign: 'center' }]}>성별</span>
              <BasicPieChart
                dataList={genderInfoList}
                name={'gender'}
                labelStatus={labelStatus.gender}
                setLabelStatus={setLabelStatus}
                handleMouseUp={handleMouseUp}
              />
            </FlexBox>
            <FlexBox direction={'column'} overflow={'unset'}>
              <span css={[heading5_bold, { textAlign: 'center' }]}>연령대</span>
              <BasicPieChart
                dataList={ageGradeInfoList}
                name={'ageGrade'}
                setLabelStatus={setLabelStatus}
                labelStatus={labelStatus.ageGrade}
                handleMouseUp={handleMouseUp}
              />
            </FlexBox>
            <FlexBox direction={'column'} overflow={'unset'}>
              <span css={[heading5_bold, { textAlign: 'center' }]}>기기</span>
              <BasicPieChart
                dataList={deviceInfoList}
                name={'device'}
                setLabelStatus={setLabelStatus}
                labelStatus={labelStatus.device}
                handleMouseUp={handleMouseUp}
              />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      {cellInfoList?.length !== 0 && (
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
      )}
    </>
  );
};

export default RespondentCharacteristicsTemplate;

const mainContentsArea = css`
  height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
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

const reportHeader = css`
  //background: pink;
  @media (max-width: 1440px) {
    //background: plum;
    flex-direction: column;
    align-items: flex-start;
    .title {
      margin-bottom: 10px;
    }
  }
`;
