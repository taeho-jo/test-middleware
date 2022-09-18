import React from 'react';
// Redux
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
// Components
import Modal from '../../atoms/Modal';
import LoginModal from '../Modal/LoginModal';
import SignupModal from '../Modal/SignupModal';
import ResetPasswordModal from '../Modal/ResetPasswordModal';
import ConfirmResetPasswordModal from '../Modal/ConfirmResetPasswordModal';
import ConfirmSignupModal from '../Modal/ConfirmSignupModal';
import TeamCreateModal from '../Modal/TeamCreateModal';
import InviteTeamMemberModal from '../Modal/InviteTeamMemberModal';
import UiResearchModuleModal from '../Modal/UiResearchModuleModal';
import UxResearchModuleModal from '../Modal/UxResearchModuleModal';
import ScenarioResearchModuleModal from '../Modal/ScenarioResearchModuleModal';
import CustomerResearchModuleModal from '../Modal/CustomerResearchModuleModal';
import TeamNameModifyModal from '../Modal/TeamNameModifyModal';
import TeamProductCreateModal from '../Modal/TeamProductCreateModal';
import TeamProductModifyModal from '../Modal/TeamProductModifyModal';
import ChangeAuthModal from '../Modal/ChangeAuthModal';
import ProfileUpdateNickNameModal from '../Modal/ProfileUpdateNickNameModal';
import ProfileUpdateCpPositionModal from '../Modal/ProfileUpdateCpPositionModal';
import ProfileUpdateCpSize from '../Modal/ProfileUpdateCpSize';
import FatalityInfoModal from '../Modal/FatalityInfoModal';
import UsabilityAssessmentInfo from '../Modal/UsabilityAssessmentInfo';
import RecommendedCustomerIndexModal from '../Modal/RecommendedCustomerIndexModal';
import OriginDataModal from '../Modal/OriginDataModal';
import CommentModal from '../Modal/CommentModal';
import ShareReportModal from '../Modal/ShareReportModal';
import RemoveMemberModal from '../Modal/RemoveMemberModal';
import ReInviteModal from '../Modal/ReInviteModal';
import WithdrawalTeamModal from '../Modal/WithdrawalTeamModal';
import WithdrawalModal from '../Modal/WithdrawalModal';
import WithdrawalReasonModal from '../Modal/WithdrawalReasonModal';
import CancelWithdrawalModal from '../Modal/CancelWithdrawalModal';
import WithdrawalUserSignupModal from '../Modal/WithdrawalUserSignupModal';
import ConsentToUseMarketingAgreeModal from '../Modal/ConsentToUseMarketingAgreeModal';
import ResearchStatusChangeModal from '../Modal/ResearchStatusChangeModal';

const CommonModal = () => {
  const show = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);

  return (
    <>
      {show ? (
        <Modal>
          {modalType === 'login' && <LoginModal />}
          {modalType === 'signup' && <SignupModal />}
          {modalType === 'resetPassword' && <ResetPasswordModal />}
          {modalType === 'confirmResetPassword' && <ConfirmResetPasswordModal />}
          {modalType === 'confirmSignup' && <ConfirmSignupModal />}
          {modalType === 'firstCreateTeam' && <TeamCreateModal first={true} />}
          {modalType === 'createTeam' && <TeamCreateModal />}
          {modalType === 'inviteTeamMember' && <InviteTeamMemberModal first={true} />}
          {modalType === 'teamMember' && <InviteTeamMemberModal />}
          {modalType === 'teamNameModify' && <TeamNameModifyModal />}
          {modalType === 'createTeamProduct' && <TeamProductCreateModal />}
          {modalType === 'modifyTeamProduct' && <TeamProductModifyModal />}
          {modalType === 'uiResearchModule' && <UiResearchModuleModal />}
          {modalType === 'uxResearchModule' && <UxResearchModuleModal />}
          {modalType === 'scenarioResearchModule' && <ScenarioResearchModuleModal />}
          {modalType === 'customerResearchModule' && <CustomerResearchModuleModal />}
          {modalType === 'changeMemberAuth' && <ChangeAuthModal />}
          {modalType === 'removeMember' && <RemoveMemberModal />}
          {modalType === 'withdrawalTeam' && <WithdrawalTeamModal />}
          {modalType === 'inviteMember' && <ReInviteModal />}
          {modalType === 'profileNickName' && <ProfileUpdateNickNameModal />}
          {modalType === 'profileCpPosition' && <ProfileUpdateCpPositionModal />}
          {modalType === 'profileCpSize' && <ProfileUpdateCpSize />}
          {modalType === 'consentToUseMarketingAgreeModal' && <ConsentToUseMarketingAgreeModal />}
          {modalType === 'fatalityInfo' && <FatalityInfoModal />}
          {modalType === 'usabilityAssessmentInfo' && <UsabilityAssessmentInfo />}
          {modalType === 'recommendedCustomerIndexModal' && <RecommendedCustomerIndexModal />}
          {modalType === 'originDataModal' && <OriginDataModal />}
          {modalType === 'commentDataModal' && <CommentModal />}
          {modalType === 'shareReportModal' && <ShareReportModal />}
          {modalType === 'withdrawalModal' && <WithdrawalModal />}
          {modalType === 'withdrawalReasonModal' && <WithdrawalReasonModal />}
          {modalType === 'cancelWithdrawalModal' && <CancelWithdrawalModal />}
          {modalType === 'withdrawalUserSignupModal' && <WithdrawalUserSignupModal />}
          {modalType === 'researchStatusChangeModal' && <ResearchStatusChangeModal />}
        </Modal>
      ) : null}
    </>
  );
};

export default CommonModal;
