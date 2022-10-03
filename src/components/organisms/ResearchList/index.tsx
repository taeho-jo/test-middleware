import React, { Fragment, useCallback } from 'react';
import FlexBox from '../../atoms/FlexBox';
import ListReport from '../../molecules/ListReport';
import { caption1_medium, heading1_bold, heading3_bold } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import Icon from '../../atoms/Icon';
import { useRouter } from 'next/router';

interface PropsType {
  listData: any;
  handleMoveDetail?: (e: any, id: string, type: string, name: string, downloadLink: string) => void;
}

const ResearchList = ({ listData = [], handleMoveDetail }: PropsType) => {
  const router = useRouter();
  const getReportList = useCallback(() => {
    if (listData === null || listData.length === 0) {
      return <FlexBox style={{ padding: '40px' }}>{/*<span css={heading1_bold}>조회된 리서치 리포트 목록이 없습니다.</span>*/}</FlexBox>;
    } else {
      return listData?.map((el, index) => {
        return (
          <Fragment key={index}>
            <ListReport
              onClick={handleMoveDetail}
              reportViewId={el.reportViewId}
              reportType={el.reportType}
              statusType={el.statusType}
              statusTypeNm={el.statusTypeNm}
              researchSeq={el.researchSeq}
              researchTypeNm={el.researchTypeNm}
              researchNm={el.researchNm}
              createDt={el.createDt}
              downloadLink={el.reportFileDownloadLink}
            />
          </Fragment>
        );
      });
    }
  }, [listData]);

  return (
    <FlexBox justify={'flex-start'} align={'flex-start'} wrap={'wrap'}>
      <div css={mainContainer}>
        <FlexBox direction={'column'} onClick={() => router.push('/admin/research/create')}>
          <Icon name={'ACTION_CREATE'} />
          <span css={[heading3_bold, { marginTop: '8px' }]}>3분만에 리서치 설계하기</span>
          <p css={[caption1_medium, { marginTop: '4px', marginBottom: 0 }]}>( 예상 견적도 받아볼 수 있어요! )</p>
        </FlexBox>
      </div>
      {getReportList()}
    </FlexBox>
  );
};

export default ResearchList;

const mainContainer = css`
  width: 256px;
  height: 236px;
  border-radius: 8px;
  border: 1px solid ${colors.grey._ec};
  margin-right: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
