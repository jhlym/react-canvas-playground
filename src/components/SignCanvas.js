import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import SignatureCanvas from 'react-signature-canvas';

const SignCanvas = () => {
  const [modal, setModal] = useState(false);
  const [trimmedDataURL, setData] = useState(null);
  const canvasRef = useRef(null);

  const clear = () => {
    canvasRef.current.clear();
  };

  const trim = () => {
    setData({
      img: canvasRef.current.getTrimmedCanvas().toDataURL('base64string')
    });
  };

  useEffect(() => {
    // console.dir(trimmedDataURL && trimmedDataURL['img']);
  }, [trimmedDataURL]);

  return (
    <Wrapper>
      <button onClick={() => setModal(true)}>Pop Modal</button>

      {modal && (
        <>
          <Dimmer />
          <Modal>
            <SignatureCanvas
              penColor="black"
              canvasProps={{ width: 500, height: 400, className: 'canvas' }}
              ref={canvasRef}
            />
            <ModalButtonWrapper>
              <button onClick={trim}>OK</button>
              <button onClick={clear}>CLEAR</button>
            </ModalButtonWrapper>
            <div>
              {trimmedDataURL ? (
                <TrimImage src={trimmedDataURL.img} alt="sign" />
              ) : null}
            </div>
          </Modal>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px;
`;

const Dimmer = styled.div`
  position: absolute;
  z-index: 90;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.6;
`;

const Modal = styled.div`
  position: absolute;
  z-index: 100;
  width: 500px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  overflow: hidden;
  .canvas {
    border: 1px solid #d8d8d8;
  }
`;

const ModalButtonWrapper = styled.div`
  display: flex;
`;

const TrimImage = styled.img`
  background-size: 200px 50px;
  width: 200px;
  height: 50px;
  background-color: white;
`;

export default SignCanvas;
