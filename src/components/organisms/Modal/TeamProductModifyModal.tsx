import React, {useCallback, useEffect, useState} from 'react';
// Redux
import {useDispatch, useSelector} from 'react-redux';
// Components
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import Input from '../../atoms/Input';
import BasicButton from '../../atoms/Button/BasicButton';
import Form from '../../atoms/Form';
// libraries
import {useForm} from 'react-hook-form';
// Styles
import {colors} from '../../../styles/Common.styles';
import {caption1_bold, caption1_regular} from '../../../styles/FontStyles';
// Types
import {InputType} from '../../../common/types/commonTypes';
import {ReducerType} from '../../../store/reducers';
import Select from '../../atoms/Select';
import Icon from '../../atoms/Icon';
import {deleteTeamProduct, updateTeamProduct} from '../../../store/reducers/teamReducer';
import {useQueryClient} from 'react-query';
import {useRouter} from 'next/router';
import {css} from '@emotion/react';
import TextArea from '../../atoms/TextArea';
import CheckBox from '../../atoms/CheckBox';

const TeamProductModifyModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);
  const selectProduct = useSelector<ReducerType, any>(state => state.team.selectProduct);
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleUpdateProduct('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const [categoryArr, setCategoryArr] = useState([]);
  const [selected, setSelected] = useState({
    productType: '',
  });

  const handleUpdateProduct = useCallback(
    (status, data) => {
      const serviceUrlValue = data?.serviceUrl?.includes('https://') ? data?.serviceUrl : `https://${data?.serviceUrl}`
      const sendObject = {
        productNm: data.productNm ? data.productNm : selectProduct.productNm,
        productType: selected.productType,
        categoryType: categoryArr,
        productIntroduce: data.productIntroduce ? data.productIntroduce : selectProduct.productIntroduce,
        serviceUrl: data.serviceUrl ? serviceUrlValue : selectProduct.serviceUrl,
      };

      dispatch(updateTeamProduct({ teamSeq: selectTeamSeq, productSeq: selectProduct.productSeq, sendObject: sendObject }));
    },
    [selected, categoryArr],
  );

  const deleteProduct = useCallback(() => {
    dispatch(deleteTeamProduct({ teamSeq: selectTeamSeq, productSeq: selectProduct.productSeq, callback: () => router.push('/admin/setting') }));
  }, [selectTeamSeq, selectProduct]);

  const onClickValue = useCallback(
    (value, label) => {
      setSelected({
        ...selected,
        [label]: value,
      });
    },
    [selected],
  );
  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '????????? ????????? ????????????. ?????? ??????????????????!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  const handleChangeCheckBox = useCallback(
    value => {
      if (categoryArr.length === 0) {
        setCategoryArr([...categoryArr, value]);
      }
      if (categoryArr.includes(value)) {
        const newCategoryArr = categoryArr.filter(el => el !== value);
        setCategoryArr(newCategoryArr);
      } else {
        setCategoryArr([...categoryArr, value]);
      }
    },
    [categoryArr],
  );

  // ?????? ??? ??????
  useEffect(() => {
    if (selectProduct) {
      setSelected({
        productType: selectProduct.productType,
      });
      setCategoryArr(selectProduct.categoryType);

      selectProduct?.categoryType?.forEach(el => setValue(el, true));
    }
  }, [selectProduct]);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox
        style={{ position: 'absolute', top: '96px', left: '50%', transform: 'translate(-50%, 0)' }}
        padding={'0px'}
        width={'1116px'}
        height={'auto'}
      >
        <ModalTitle title={'??????????????? ?????? ???????????????.'} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <FlexBox style={{ width: '100%' }} justify={'space-between'}>
            <div
              css={css`
                width: 400px;
              `}
            >
              <Input
                title={'???????????? ??????'}
                register={register}
                label={'productNm'}
                errors={errors}
                errorMsg={'???????????? ????????? ??????????????????.'}
                defaultValue={selectProduct?.productNm}
                placeholder={`???????????? ????????? ??????????????????.`}
                // style={{ marginBottom: '16px' }}
                registerOptions={{
                  required: true,
                }}
              />

              <Select
                title={'????????? ????????????'}
                options={commonCode?.ProductType}
                // value={selected.funnelsCd}
                selected={selected}
                setSelected={setSelected}
                name="productType"
                onClick={onClickValue}
                registerOptions={{
                  required: true,
                }}
              />

              <div
                css={css`
                  margin-top: 16px;
                `}
              >
                <TextArea
                  title={'???????????? ?????? (??????)'}
                  register={register}
                  label={'productIntroduce'}
                  errors={errors}
                  errorMsg={'???????????? ????????? ??????????????????.'}
                  placeholder={'???????????? ????????? ??????????????????.'}
                  defaultValue={selectProduct?.productIntroduce}
                  // titleStyle={{ marginTop: '20px' }}
                  style={css`
                    height: 142px;
                  `}
                />
              </div>

              <div
                css={css`
                  margin-top: 10px;
                `}
              >
                <Input
                  defaultValue={selectProduct?.serviceUrl}
                  title={'????????? ?????? ?????? URL (??????)'}
                  register={register}
                  label={'serviceUrl'}
                  errors={errors}
                  errorMsg={'????????? ?????? ?????? URL??? ??????????????????.'}
                  placeholder={`????????? ?????? ?????? URL??? ??????????????????.`}
                  // style={{ marginBottom: '16px' }}
                />
              </div>
            </div>
            <div
              css={css`
                width: 558px;
              `}
            >
              <label css={[caption1_bold, labelTextStyle]}>???????????? *?????? ?????? ?????? (??????)</label>
              <div css={categorySelectBox}>
                {commonCode?.CategoryType?.map((el, index) => {
                  return (
                    <div
                      key={index}
                      css={css`
                        width: 174px;
                        padding: 8px;
                      `}
                    >
                      <CheckBox
                        handleChangeCheckBox={() => handleChangeCheckBox(el.value)}
                        checked={categoryArr?.find(el => el.value)}
                        inputName={el.value}
                        label={el.displayName}
                        register={register}
                        errors={errors}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </FlexBox>
          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'?????? ????????????'} />
            <FlexBox justify={'center'} align={'center'} style={{ marginTop: '22px' }}>
              <span onClick={deleteProduct} css={[caption1_regular, { color: colors.red, cursor: 'pointer' }]}>
                ???????????? ????????????
              </span>
              <Icon name={'NAVIGATION_CLOSE_SM'} iconColor={colors.red} />
            </FlexBox>
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default TeamProductModifyModal;

const categorySelectBox = css`
  width: 100%;
  height: 392px;
  border: 1px solid ${colors.grey._3c};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`;
const labelTextStyle = css`
  margin-bottom: 8px;
  color: #999999;
  display: inline-block;
`;
