import React from 'react';
import { Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GridContainer } from '../../components/Grid';
import LottieIcon from '../../components/LottieIcon';

const Desc = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  color: theme.palette.primary.main,
  margin: '0px',
}));

function Section4() {
  return (
    <div style={{ width: '100%' }}>
      <GridContainer container spacing={16}>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="tri_icon_1" />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              설계안 확인
            </Desc>
            <Desc data-aos="fade-up">
              간략한 비용, 소요 기간을
              <br />
              빠르게 확인할 수 있습니다.
            </Desc>
          </Stack>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="tri_icon_2" delay={500 * 1} />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              추가정보 입력
            </Desc>
            <Desc data-aos="fade-up">
              전체 문항을 확인하고,
              <br />
              추가 정보를 입력하세요.
              <br />
              최종 비용과 시간을 확정하세요.
            </Desc>
          </Stack>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="tri_icon_3" delay={500 * 2} />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              피드백 수집
            </Desc>
            <Desc data-aos="fade-up">
              조건에 맞게 피드백 수집을 <br />
              시작합니다.
            </Desc>
          </Stack>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="tri_icon_4" delay={500 * 3} />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              리포트 확인
            </Desc>
            <Desc data-aos="fade-up">
              수집한 피드백을 가공하여
              <br />
              리포트로 전달합니다.
            </Desc>
          </Stack>
        </Grid>
      </GridContainer>
    </div>
  );
}

export default Section4;
