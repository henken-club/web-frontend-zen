import React, { useMemo } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

import { Modal } from "~/components/atoms/Modal";
import { CreateHenkenForm } from "~/components/organisms/CreateHenkenForm";

const manualCreateHenkenModalState = atom<boolean>({
  key: "modalManualCreateHenken",
  default: false,
});

export const useOpenCreateHenkenModal = () => {
  const setter = useSetRecoilState(manualCreateHenkenModalState);
  return () => setter(true);
};

export const useCloseCreateHenkenModal = () => {
  const setter = useSetRecoilState(manualCreateHenkenModalState);
  return () => setter(true);
};

export const CreateHenkenModal: React.VFC = () => {
  const manual = useRecoilValue(manualCreateHenkenModalState);
  const setManual = useSetRecoilState(manualCreateHenkenModalState);

  const open = useMemo(
    () => manual,
    [manual],
  );

  return (
    <>
      {!open && <></>}
      {open && (
        <Modal onClose={() => setManual(false)}>
          <CreateHenkenForm />
        </Modal>
      )}
    </>
  );
};