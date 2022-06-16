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
        </Modal>
      ) : null}
    </>
  );
};

export default CommonModal;
