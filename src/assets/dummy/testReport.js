export const reportData = {
  answerTotalCount: '69',
  eightySamplingError: '±6.16%p',
  ninetySamplingError: '±9.44%p',
  answerInfoSection: {
    genderInfoList: [
      { name: '남', value: '80', count: '250' },
      { name: '여', value: '20', count: '30' },
    ],
    ageGradeInfoList: [
      { name: '10', value: '20', count: '23' },
      { name: '20', value: '60', count: '23' },
      { name: '30', value: '100', count: '23' },
      { name: '40', value: '120', count: '23' },
      { name: '50', value: '80', count: '23' },
      { name: '60', value: '80', count: '23' },
    ],
    deviceInfoList: [
      { name: 'Android', value: '80' },
      { name: 'IOS', value: '20' },
    ],
    cellInfoList: [
      { name: '중고차 판매자', value: '10' },
      { name: '중고차 구매자', value: '20' },
      { name: '중고차 구매 보류', value: '40' },
    ],
  },
  S1: {
    uiSummerySection: {
      missionSuccess: [
        {
          index: '0',
          name: '포인트 기프티콘으로 교환하기',
          missionSuccessRatioInfo: [
            { name: '성공', value: 70 },
            { name: '실패', value: 30 },
          ],
        },
        {
          index: '1',
          name: '보유 포인트/ 참여 테스트 확인하기',
          missionSuccessRatioInfo: [
            { name: '성공', value: 80 },
            { name: '실패', value: 20 },
          ],
        },
        {
          index: '2',
          name: '회원정보 확인하기',
          missionSuccessRatioInfo: [
            { name: '성공', value: 50 },
            { name: '실패', value: 50 },
          ],
        },
      ],
      missionFatality: [
        {
          index: '0',
          name: '포인트 기프티콘으로 교환하기',
          completeList: [
            '사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로(청소/수리)등이 있으면 좋을 것 같습니다.',
            '카테고리 세분화가 필요할것같습니다.',
            '카테고리가 모호해서 광범위해서 지정하기가 좀 어려웠어요.',
          ],
          completeComment: 'comment',
          // 서비스 전체 미션별 추가기능 피드백
          additionalList: [
            '사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로(청소/수리)등이 있으면 좋을 것 같습니다.',
            '카테고리 세분화가 필요할것같습니다.',
            '카테고리가 모호해서 광범위해서 지정하기가 좀 어려웠어요.',
          ],
          additionalComment: 'comment',
          // 서비스 전체 미션별 시스템오류 피드백
          systemErrorList: [
            '사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로(청소/수리)등이 있으면 좋을 것 같습니다.',
            '카테고리 세분화가 필요할것같습니다.',
            '카테고리가 모호해서 광범위해서 지정하기가 좀 어려웠어요.',
          ],
          systemErrorComment: 'comment',
          value: 30, // 언급비율
          fatality: '2.9', // 치명도
          missionFunctionFatality: [
            {
              index: '0',
              name: '알림톡으로 테스트 알림받기',
              value: 49,
              fatality: '4.3',
              info: '1전체 350개의 응답중 기능 알림톡으로 테스트 알림받기에 대한 언급빈도는 168개이며, 4.35(많이 치명적임)의 치명도가 나왔습니다.구체적으로 어떤 부분이 불편했는지는 다음 그래프에서 상세하게 확인하실 수 있습니다.',
              detailInfo: '기능에 A에 대해 언급 된.....',
              detailList: [
                {
                  name: '컴포넌트(조회 콘텐츠)',
                  stack: [
                    {
                      value: 20,
                      reason: '가독성이 낮다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                    {
                      value: 40,
                      reason: '불필요한 정보가 많다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                  ],
                  count: '49',
                  rate: '49.5',
                },
                {
                  name: '컴포넌트(메뉴)',
                  stack: [
                    {
                      value: 30,
                      reason: '가독성이 낮다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                    {
                      value: 55,
                      reason: '가독성이 낮다.2222',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                  ],
                  count: '49',
                  rate: '49.5',
                },
              ],
              usabilityList: [
                { name: '유저가 에러를 인지/판단/복구하도록 돕기', value: 46, fatality: '4.35', mention: '43.5' },
                { name: '유저의 선택권 및 자유도', value: 18, fatality: '2.3', mention: '23' },
                { name: '시스템과 살제 세상의 매칭', value: 58, fatality: '5.3', mention: '53' },
              ],
            },
            {
              index: '1',
              name: '알림톡으로 테스트 알림받기2',
              value: 49,
              fatality: '4.3',
              info: '2전체 350개의 응답중 기능 알림톡으로 테스트 알림받기에 대한 언급빈도는 168개이며, 4.35(많이 치명적임)의 치명도가 나왔습니다.구체적으로 어떤 부분이 불편했는지는 다음 그래프에서 상세하게 확인하실 수 있습니다.',
              detailInfo: '기능에 A에 대해 언급 된.....',
              detailList: [
                {
                  name: '컴포넌트(조회 콘텐츠)',
                  stack: [
                    {
                      value: 60,
                      reason: '가독성이 낮다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                    {
                      value: 10,
                      reason: '불필요한 정보가 많다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                  ],
                  count: '49',
                  rate: '49.5',
                },
                {
                  name: '컴포넌트(메뉴)',
                  stack: [
                    {
                      value: 40,
                      reason: '가독성이 낮다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                    {
                      value: 20,
                      reason: '가독성이 낮다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                  ],
                  count: '49',
                  rate: '49.5',
                },
              ],
              usabilityList: [
                { name: '유저가 에러를 인지/판단/복구하도록 돕기', value: 46, fatality: '4.35', mention: '43.5' },
                { name: '유저의 선택권 및 자유도', value: 18, fatality: '2.3', mention: '23' },
                { name: '시스템과 살제 세상의 매칭', value: 58, fatality: '5.3', mention: '53' },
              ],
            },
          ],
        },
        {
          index: '1',
          name: '보유 포인트/ 참여 테스트 확인하기',
          completeList: [
            '22사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로(청소/수리)등이 있으면 좋을 것 같습니다.',
            '22카테고리 세분화가 필요할것같습니다.',
            '22카테고리가 모호해서 광범위해서 지정하기가 좀 어려웠어요.',
          ],
          completeComment: '22comment',
          // 서비스 전체 미션별 추가기능 피드백
          additionalList: [
            '22사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로(청소/수리)등이 있으면 좋을 것 같습니다.',
            '22카테고리 세분화가 필요할것같습니다.',
            '22카테고리가 모호해서 광범위해서 지정하기가 좀 어려웠어요.',
          ],
          additionalComment: '22comment',
          // 서비스 전체 미션별 시스템오류 피드백
          systemErrorList: [
            '22사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로(청소/수리)등이 있으면 좋을 것 같습니다.',
            '22카테고리 세분화가 필요할것같습니다.',
            '22카테고리가 모호해서 광범위해서 지정하기가 좀 어려웠어요.',
          ],
          systemErrorComment: '22comment',
          value: 46.5,
          fatality: '3.8',
          missionFunctionFatality: [
            {
              index: '0',
              name: '알림톡으로 테스트 알림받기',
              value: 49,
              fatality: '4.3',
              info: '3전체 350개의 응답중 기능 알림톡으로 테스트 알림받기에 대한 언급빈도는 168개이며, 4.35(많이 치명적임)의 치명도가 나왔습니다.구체적으로 어떤 부분이 불편했는지는 다음 그래프에서 상세하게 확인하실 수 있습니다.',
              detailInfo: '기능에 A에 대해 언급 된.....',
              detailList: [
                {
                  name: '컴포넌트(조회 콘텐츠)',
                  stack: [
                    {
                      value: 40,
                      reason: '가독성이 낮다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                    {
                      value: 30,
                      reason: '불필요한 정보가 많다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                  ],
                  count: '49',
                  rate: '49.5',
                },
                {
                  name: '컴포넌트(메뉴)',
                  stack: [
                    {
                      value: 20,
                      reason: '가독성이 낮다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                    {
                      value: 70,
                      reason: '가독성이 낮다2222.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                  ],
                  count: '49',
                  rate: '49.5',
                },
              ],
              usabilityList: [
                { name: '유저가 에러를 인지/판단/복구하도록 돕기', value: 46, fatality: '4.35', mention: '43.5' },
                { name: '유저의 선택권 및 자유도', value: 18, fatality: '2.3', mention: '23' },
                { name: '시스템과 살제 세상의 매칭', value: 58, fatality: '5.3', mention: '53' },
              ],
            },
          ],
        },
        {
          index: '2',
          name: '회원정보 확인하기',
          completeList: [
            '33사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로(청소/수리)등이 있으면 좋을 것 같습니다.',
            '33카테고리 세분화가 필요할것같습니다.',
            '33카테고리가 모호해서 광범위해서 지정하기가 좀 어려웠어요.',
          ],
          completeComment: '33comment',
          // 서비스 전체 미션별 추가기능 피드백
          additionalList: [
            '33사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로(청소/수리)등이 있으면 좋을 것 같습니다.',
            '33카테고리 세분화가 필요할것같습니다.',
            '33카테고리가 모호해서 광범위해서 지정하기가 좀 어려웠어요.',
          ],
          additionalComment: '33comment',
          // 서비스 전체 미션별 시스템오류 피드백
          systemErrorList: [
            '33사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로(청소/수리)등이 있으면 좋을 것 같습니다.',
            '33카테고리 세분화가 필요할것같습니다.',
            '33카테고리가 모호해서 광범위해서 지정하기가 좀 어려웠어요.',
          ],
          systemErrorComment: '33comment',
          value: 61.8,
          fatality: '4.35',
          missionFunctionFatality: [
            {
              index: '0',
              name: '알림톡으로 테스트 알림받기',
              value: 49,
              fatality: '4.3',
              info: '4전체 350개의 응답중 기능 알림톡으로 테스트 알림받기에 대한 언급빈도는 168개이며, 4.35(많이 치명적임)의 치명도가 나왔습니다.구체적으로 어떤 부분이 불편했는지는 다음 그래프에서 상세하게 확인하실 수 있습니다.',
              detailInfo: '기능에 A에 대해 언급 된.....',
              detailList: [
                {
                  name: '컴포넌트(조회 콘텐츠)',
                  stack: [
                    {
                      value: 10,
                      reason: '가독성이 낮다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                    {
                      value: 10,
                      reason: '불필요한 정보가 많다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                  ],
                  count: '49',
                  rate: '49.5',
                },
                {
                  name: '컴포넌트(메뉴)',
                  stack: [
                    {
                      value: 10,
                      reason: '가독성이 낮다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                    {
                      value: 10,
                      reason: '가독성이 낮다.',
                      answer: ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4'],
                    },
                  ],
                  count: '49',
                  rate: '49.5',
                },
              ],
              usabilityList: [
                { name: '유저가 에러를 인지/판단/복구하도록 돕기', value: 46, fatality: '4.35', mention: '43.5' },
                { name: '유저의 선택권 및 자유도', value: 18, fatality: '2.3', mention: '23' },
                { name: '시스템과 살제 세상의 매칭', value: 58, fatality: '5.3', mention: '53' },
              ],
            },
          ],
        },
      ],
      serviceTotalUsabilityList: [
        { name: '유저가 에러를 인지/판단/복구하도록 돕기', value: '46', fatality: '4.35', mention: '43.5' },
        { name: '유저의 선택권 및 자유도', value: '18', fatality: '2.3', mention: '23' },
        { name: '시스템과 살제 세상의 매칭', value: '58', fatality: '5.3', mention: '53' },
        { name: '유저가 에러를 인지/판단/복구하도록 돕기', value: '46', fatality: '4.35', mention: '43.5' },
        { name: '유저의 선택권 및 자유도', value: '18', fatality: '2.3', mention: '23' },
        { name: '시스템과 살제 세상의 매칭', value: '58', fatality: '5.3', mention: '53' },
      ],
    },
  },
};
